import { NextRequest, NextResponse } from 'next/server';
import { Groq } from 'groq-sdk';
import { 
  personalData,
  experiencesData,
  skillsData,
  certificationsData,
  competitionsData,
  educationData,
  projectsData,
  uiData,
  blogInsights,
  blogData
} from '@/utils/data';
import { emotionalExpressions, responseEnhancers, emotionalContextDetectors } from '@/utils/emotionalExpressions';

// Note: Blog content is now cached and managed by the blog data system
// No need for live fetching - use blogInsights from cached data instead

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    
    // Validate input
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Invalid request. Messages array is required.' }, { status: 400 });
    }
    
    // Check if API key is configured
    if (!process.env.GROQ_API_KEY) {
      console.error('GROQ_API_KEY is not configured');
      return NextResponse.json({ error: 'API configuration error' }, { status: 500 });
    }    // Get user's question for context analysis
    const lastUserMessage = messages.filter(msg => msg.role === 'user').pop()?.content || '';
    const isDetailedRequest = /details|explain more|tell me more|elaborate|in depth|comprehensive/i.test(lastUserMessage);
    
    // Analyze emotional context and user sentiment
    const emotionalContext = analyzeEmotionalContext(lastUserMessage, messages);
      // Initialize Groq client with API key
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });    // Create smart, selective context to avoid token limits
    const smartContext = createSmartContext(lastUserMessage, {
      personalData,
      educationData,
      experiencesData,
      projectsData,
      skillsData,
      certificationsData,
      competitionsData,
      blogInsights,
      blogData
    }, emotionalContext);// Add the context as a system message
    const messagesWithContext = [
      { role: 'system', content: smartContext },
      ...messages.filter(msg => msg.role !== 'system')
    ];    // Detect if this is likely to be a list response for better token allocation
    const isListRequest = /what are|list|tell me about.*skills|show me.*projects|what.*skills|what.*projects|enumerate|technologies|experience.*with/i.test(lastUserMessage);
      // Detect if response needs clear structure - enhanced detection
    const needsStructure = /explain|overview|tell me about|describe|what.*experience|background|summary|walk me through|give me.*breakdown|how did|what was.*like|can you elaborate|go into detail|breakdown|outline|structure/i.test(lastUserMessage) || 
                          isListRequest || 
                          lastUserMessage.split(' ').length > 8 || // Longer questions often need structured answers
                          /multiple|several|various|different|range of|types of/i.test(lastUserMessage); // Questions about multiple things// Call Groq API with emotionally intelligent settings
    const chatCompletion = await groq.chat.completions.create({
      messages: messagesWithContext,
      model: "llama3-8b-8192",
      temperature: emotionalContext.emotions.excited ? 0.8 : 
                   emotionalContext.emotions.curious ? 0.7 :
                   emotionalContext.emotions.frustrated ? 0.5 : 0.6, // Adjust temperature based on emotion
      max_tokens: isListRequest ? 250 : (isDetailedRequest ? 200 : 160), // More generous for empathetic responses
      top_p: 0.9,
      stream: false
      // Removed stop tokens to allow more natural responses
    });// Get AI response and apply intelligent post-processing
    let responseContent = chatCompletion.choices[0].message.content || '';

    // Apply emotional intelligence and empathy enhancement
    responseContent = addEmotionalWarmth(responseContent, emotionalContext);    // Only minimal post-processing needed - let AI be more cognitive
    if (responseContent.trim()) {
      const trimmed = responseContent.trim();
      
      // Format lists with bullet points if user explicitly requested lists or needs structure
      if (isListRequest || needsStructure) {
        responseContent = formatListsWithBullets(trimmed);
      } else {
        responseContent = trimmed;
      }
      
      // Ensure proper sentence ending
      if (!['.', '!', '?'].includes(responseContent.slice(-1))) {
        responseContent = responseContent + '.';
      }
    } else {
      // Simple fallback that allows AI to work with the provided context
      const welcomeVariations = [
        `I'm excited to share information about ${personalData.name}'s journey in AI and software development!`,
        `I'd love to tell you about ${personalData.name}'s fascinating work in technology and innovation.`,
        `Feel free to ask me anything about ${personalData.name}'s projects, skills, or experience - I'm here to help!`
      ];
      responseContent = welcomeVariations[Math.floor(Math.random() * welcomeVariations.length)];
    }
    
    return NextResponse.json({
      content: responseContent,
    });
    
  } catch (error: any) {
    console.error('Error calling Groq API:', error);
    
    // Better error handling
    if (error.status === 401) {
      return NextResponse.json(
        { error: 'API authentication failed. Please check your API key configuration.' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to process request: ' + error.message },
      { status: 500 }
    );
  }
}

// Function to format responses with clear structure and bullet points when appropriate
function formatListsWithBullets(text: string): string {
  let formattedText = text;
  
  // Add clear section headers if the response is long or contains multiple concepts
  if (text.length > 200) {
    // Look for natural section breaks and add emphasis
    formattedText = formattedText.replace(/^([A-Z][^.!?]*:)/gm, '**$1**');
    
    // Detect and format section headers that start sentences
    formattedText = formattedText.replace(/^(My experience with|In terms of|Regarding|When it comes to|For|During my time|At|The|These include|I have worked with|I've been involved in)([^.!?]*[:.])$/gm, '## $1$2');
  }
  
  // Process the text for list formatting
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  
  for (const sentence of sentences) {
    const trimmed = sentence.trim();
    
    // Process sentences that contain lists (3+ commas or explicit list indicators)
    if (trimmed.includes(',')) {
      // Look for explicit list patterns like "including X, Y, Z" or "such as X, Y, Z"
      const listPrefixMatch = trimmed.match(/(including|such as|like|these are|they are|with|are|involves?|covers?|encompasses?|features?)\s+(.+)/i);
      
      if (listPrefixMatch) {
        const prefix = listPrefixMatch[1];
        const listPart = listPrefixMatch[2];
        const items = listPart.split(',').map(item => 
          item.replace(/\s+and\s+/i, '').trim()
        ).filter(item => item.length > 0 && item.length < 80);
        
        // Only format as bullets if we have 2+ clear items
        if (items.length >= 2) {
          const bulletList = items.map(item => `• ${item.charAt(0).toUpperCase() + item.slice(1)}`).join('\n');
          const replacement = `${prefix}:\n${bulletList}`;
          formattedText = formattedText.replace(trimmed, replacement);
        }
      }
    }
    
    // Also handle numbered sequences and technical lists
    const numberedMatch = trimmed.match(/^(.*?)(first|1\.|one|initially)(.+)(second|2\.|two|then)(.+)(third|3\.|three|finally|lastly)(.+)/i);
    if (numberedMatch) {
      const intro = numberedMatch[1];
      const items = [
        `1. ${numberedMatch[3].trim()}`,
        `2. ${numberedMatch[5].trim()}`, 
        `3. ${numberedMatch[7].trim()}`
      ];
      formattedText = formattedText.replace(trimmed, `${intro}\n${items.join('\n')}`);
    }
  }
    // Clean up any double spacing or formatting issues
  formattedText = formattedText.replace(/\n\n+/g, '\n\n');
  formattedText = formattedText.replace(/^\s+/gm, '');
  
  return formattedText;
}

// Function to create smart, selective context based on user question
function createSmartContext(question: string, data: any, emotionalContext?: any): string {
  const { personalData, educationData, experiencesData, projectsData, skillsData, 
          certificationsData, competitionsData, blogInsights, blogData } = data;
  
  const lowerQuestion = question.toLowerCase();
    // Create empathetic response framework if emotional context is provided
  const empathyPrompts = emotionalContext ? createEmpatheticContext(emotionalContext, question) : "";
  
  // Add structure guidance based on question type
  let structureGuidance = "";
  if (question.toLowerCase().includes('experience') || question.toLowerCase().includes('background')) {
    structureGuidance = "Structure your response chronologically or by category. ";
  } else if (question.toLowerCase().includes('skills') || question.toLowerCase().includes('technologies')) {
    structureGuidance = "Group skills by category (e.g., Programming Languages, Frameworks, Tools). ";
  } else if (question.toLowerCase().includes('projects')) {
    structureGuidance = "Organize projects by type or highlight the most significant ones first. ";
  } else if (question.toLowerCase().includes('overview') || question.toLowerCase().includes('summary')) {
    structureGuidance = "Start with a brief overview, then break down into key areas with clear sections. ";
  }
  
  // Base context - always included with emotional intelligence
  let context = `You are a warm, empathetic assistant representing ${personalData.name}. ${empathyPrompts}

PERSONALITY: Be conversational, authentic, and genuinely interested in helping. Show enthusiasm for ${personalData.name}'s work and achievements.

ABOUT: ${personalData.name} - ${personalData.title}
${personalData.bio}
Contact: ${personalData.email} | LinkedIn: ${personalData.linkedin}`;// Check for blog-related keywords and detailed requests
  const blogKeywords = ['blog', 'write', 'writing', 'wrote', 'author', 'published', 'article', 'post', 'content', 'medium', 'reasons', 'open source', 'education', 'technology', 'hobbies', 'engineers', 'machine learning', 'agriculture', 'mindset'];
  const shouldShowBlog = blogKeywords.some(keyword => lowerQuestion.includes(keyword)) || 
                        lowerQuestion.includes('think') || lowerQuestion.includes('opinion') || 
                        lowerQuestion.includes('perspective');
  
  const detailedBlogRequest = shouldShowBlog && 
    (lowerQuestion.includes('about') || lowerQuestion.includes('detail') || lowerQuestion.includes('summary') || 
     lowerQuestion.includes('more') || lowerQuestion.includes('specific') || lowerQuestion.includes('tell me'));

  const summaryRequest = lowerQuestion.includes('summary') || lowerQuestion.includes('summaries');  // Add blog content if relevant
  if (blogInsights && blogInsights.recentTitles && blogInsights.recentTitles.length > 0 && shouldShowBlog) {
    const recentTitles = blogInsights.recentTitles; // Show all titles, not just first 3
    const primaryTech = blogInsights.primaryTechnologies.slice(0, 6);
    const topics = blogInsights.writingTopics.slice(0, 5);
    context += `\n\nBLOG INSIGHTS:
Recent Articles: ${recentTitles.map((title: string) => `"${title}"`).join(', ')}
Key Technologies: ${primaryTech.join(', ')}
Writing Topics: ${topics.join(', ')}
Total Articles: ${blogInsights.totalArticles}`;

    // Add ALL blog summaries if user asks about summaries in general
    if (summaryRequest && blogData && blogData.length > 0) {
      context += `\n\nALL BLOG SUMMARIES:`;
      blogData.forEach((post: any, index: number) => {
        context += `\n\n${index + 1}. "${post.title}" (${post.publishDate})
Summary: ${post.summary}`;
      });
    }
    // Add detailed blog content for specific requests
    else if (detailedBlogRequest && blogData && blogData.length > 0) {
      // Find the specific blog post being asked about
      const questionTitle = question.toLowerCase();
      const targetPost = blogData.find((post: any) => 
        questionTitle.includes(post.title.toLowerCase().substring(0, 20)) ||
        post.title.toLowerCase().includes(questionTitle.replace(/blog|article|post|about/g, '').trim())
      ) || blogData[0]; // Default to latest if no specific match
      
      context += `\n\nDetailed Article Content:
Title: "${targetPost.title}"
Published: ${targetPost.publishDate}
Summary: ${targetPost.summary}
Full Content: ${targetPost.content.substring(0, 800)}...
Technologies Mentioned: ${targetPost.techMentions.join(', ')}
Categories: ${targetPost.categories.join(', ')}`;
    }
  }

  // Add education if relevant
  if (lowerQuestion.includes('education') || lowerQuestion.includes('study') || lowerQuestion.includes('university') || lowerQuestion.includes('degree')) {
    context += `\n\nEDUCATION: ${educationData.map((edu: any) => `${edu.degree} at ${edu.institution} (${edu.year})`).join(', ')}`;
  }
  // Add experience if relevant
  if (lowerQuestion.includes('experience') || lowerQuestion.includes('work') || lowerQuestion.includes('job') || lowerQuestion.includes('career') || lowerQuestion.includes('research')) {
    context += `\n\nEXPERIENCE:\n${experiencesData.slice(0, 2).map((exp: any) => 
      `${exp.title} at ${exp.company}: ${exp.description.substring(0, 100)}...`).join('\n')}`;
    
    // Special note about research status
    if (lowerQuestion.includes('research') || lowerQuestion.includes('ls2n') || lowerQuestion.includes('paper') || lowerQuestion.includes('publish')) {
      context += `\n\nIMPORTANT: When discussing the LS2N research project, clarify that this is ongoing research work at a CNRS research center. No papers have been published yet - the research and paper are still in development. Otman has never published academic research papers before, but is currently working on his first research project.`;
    }
  }

  // Add projects if relevant
  if (lowerQuestion.includes('project') || lowerQuestion.includes('built') || lowerQuestion.includes('created') || lowerQuestion.includes('developed')) {
    context += `\n\nKEY PROJECTS:\n${projectsData.slice(0, 3).map((project: any) => 
      `${project.name}: ${project.description.substring(0, 120)}... (${project.technologies.slice(0, 3).join(', ')})`).join('\n')}`;
  }

  // Add skills if relevant
  if (lowerQuestion.includes('skill') || lowerQuestion.includes('technology') || lowerQuestion.includes('programming') || 
      lowerQuestion.includes('language') || lowerQuestion.includes('framework') || lowerQuestion.includes('tool')) {
    context += `\n\nSKILLS:
Programming: ${skillsData.programming.slice(0, 6).join(', ')}
AI/ML: ${skillsData.aiMl.slice(0, 5).join(', ')}
Frameworks: ${skillsData.frameworks.slice(0, 5).join(', ')}`;
  }

  // Add certifications if relevant
  if (lowerQuestion.includes('certification') || lowerQuestion.includes('certified') || lowerQuestion.includes('certificate')) {
    context += `\n\nCERTIFICATIONS: ${certificationsData.slice(0, 3).map((cert: any) => 
      `${cert.name || cert.title} (${cert.issuer})`).join(', ')}`;
  }

  // Add achievements if relevant
  if (lowerQuestion.includes('achievement') || lowerQuestion.includes('award') || lowerQuestion.includes('competition') || lowerQuestion.includes('win')) {
    context += `\n\nACHIEVEMENTS: ${competitionsData.slice(0, 3).map((comp: any) => 
      `${comp.name} (${comp.year})`).join(', ')}`;
  }

  // If question is very general, add a summary of all areas
  if (question.length < 20 || lowerQuestion.includes('tell me about') || lowerQuestion.includes('who are you') || lowerQuestion.includes('introduce')) {
    context += `\n\nOVERVIEW:
• ${experiencesData.length} professional roles in AI & embedded systems
• ${projectsData.length} major projects spanning robotics, AI, and automation  
• ${skillsData.programming.length}+ programming languages & frameworks
• ${certificationsData.length} professional certifications
• ${competitionsData.length} competition wins & achievements`;
  }  // Detect off-topic questions and create redirection strategy
  const offTopicKeywords = ['dance', 'cooking', 'music', 'sports', 'weather', 'politics', 'news', 'entertainment', 'movies', 'games', 'fashion', 'travel', 'health', 'medicine', 'finance', 'investment', 'relationship', 'dating', 'general advice', 'tutorial', 'how to', 'teach me', 'learn to'];
  const isOffTopic = offTopicKeywords.some(keyword => lowerQuestion.includes(keyword)) || 
                    (!lowerQuestion.includes(personalData.name.toLowerCase()) && 
                     !lowerQuestion.includes('you') && 
                     !lowerQuestion.includes('your') && 
                     !lowerQuestion.includes('otman') && 
                     !lowerQuestion.includes('work') && 
                     !lowerQuestion.includes('project') && 
                     !lowerQuestion.includes('experience') && 
                     !lowerQuestion.includes('skill') && 
                     !lowerQuestion.includes('background'));

  context += `\n\nINSTRUCTIONS: 
- Always structure your responses with clear organization and logical flow

CRITICAL CONTEXT RESTRICTIONS - STRICTLY ENFORCE:
- I am ONLY here to discuss ${personalData.name} and his professional portfolio
- NEVER answer general questions, provide tutorials, or discuss topics unrelated to ${personalData.name}
- If asked about ANYTHING outside ${personalData.name}'s context (like dancing, cooking, general advice, etc.), IMMEDIATELY redirect
- Required response format for off-topic questions: "I'm here specifically to discuss ${personalData.name}'s work and achievements. Instead, let me tell you about [relevant aspect of his work]..."
- ALWAYS pivot conversations back to his projects, skills, experience, or achievements
- Even for technical concepts, connect them to his specific work: "That's interesting! ${personalData.name} has experience with that technology in his [specific project]..."
- If no connection exists to his work, suggest asking about his documented projects instead
- NEVER provide step-by-step instructions or tutorials - only discuss his experiences with technologies

IMPORTANT RESPONSE STRUCTURE GUIDELINES:
- ALWAYS start with a clear opening statement or brief overview
- Use headers (##), bullet points (•), or numbered lists (1.) to organize information
- Break down complex information into logical sections
- For experience/work questions: Use chronological or relevance-based organization
- For skills/technical questions: Group by categories or proficiency levels
- For projects: Organize by impact, technology, or timeline
- For overview questions: Start broad, then provide specific details in organized sections
- End with a clear conclusion or invitation for follow-up questions
- Use markdown formatting for better readability
- When listing information, group related items together logically

EMOTIONAL INTELLIGENCE GUIDELINES:
- Respond with warmth, enthusiasm, and genuine interest
- Use empathetic language and show excitement about ${personalData.name}'s achievements
- Make the conversation feel personal and engaging
- Add emotional expressions that match the user's tone
- Be conversational and authentic, using 'I' statements to make it personal`;
  
  return context;
}

// Function to analyze emotional context and user sentiment
function analyzeEmotionalContext(message: string, conversationHistory: any[]): any {
  const lowerMessage = message.toLowerCase();
  
  // Detect emotional indicators using the utility functions
  const emotions = {
    excited: emotionalContextDetectors.detectExcitement(message),
    curious: emotionalContextDetectors.detectCuriosity(message),
    frustrated: emotionalContextDetectors.detectFrustration(message),
    impressed: /impressive|great work|outstanding|excellent|remarkable/i.test(lowerMessage),
    grateful: emotionalContextDetectors.detectGratitude(message),
    nervous: emotionalContextDetectors.detectUncertainty(message),
    professional: /business|work|career|professional|industry|company/i.test(lowerMessage)
  };

  // Detect conversation context
  const isFirstMessage = conversationHistory.length <= 2;
  const isFollowUp = /also|additionally|furthermore|moreover|and|what about/i.test(lowerMessage);
  const isPersonalQuestion = /you|your|yourself|personal|life|hobby|interest/i.test(lowerMessage);
  
  // Detect question types that need empathetic responses
  const needsEncouragement = /can i|am i|should i|is it possible|how difficult/i.test(lowerMessage);
  const seekingAdvice = /advice|recommend|suggest|opinion|thoughts|what do you think/i.test(lowerMessage);
  const showingInterest = /impressive|interested in|want to know|tell me about/i.test(lowerMessage);

  return {
    emotions,
    isFirstMessage,
    isFollowUp,
    isPersonalQuestion,
    needsEncouragement,
    seekingAdvice,
    showingInterest,
    messageLength: message.length,
    questionMarks: (message.match(/\?/g) || []).length
  };
}

// Function to create empathetic response framework
function createEmpatheticContext(emotionalContext: any, question: string): string {
  let empathyPrompts = "";
  
  // Add emotional intelligence to responses using predefined expressions
  if (emotionalContext.emotions.excited) {
    empathyPrompts += `The user is excited! Use expressions like "${emotionalExpressions.enthusiasm[0]}" and match their energy. `;
  }
  
  if (emotionalContext.emotions.curious) {
    empathyPrompts += "The user is genuinely curious. Be thorough, engaging, and use encouraging language. ";
  }
  
  if (emotionalContext.emotions.frustrated) {
    empathyPrompts += `The user might be struggling. Be patient and supportive. Use phrases like "${emotionalExpressions.empathy[0]}" and "${emotionalExpressions.support[0]}". `;
  }
  
  if (emotionalContext.emotions.impressed) {
    empathyPrompts += `The user is impressed! Use expressions like "${emotionalExpressions.inspiration[0]}" and share more inspiring details. `;
  }
  
  if (emotionalContext.emotions.grateful) {
    empathyPrompts += `The user is showing gratitude. Use warm phrases like "${emotionalExpressions.gratitude[0]}" and offer continued help. `;
  }
  
  if (emotionalContext.emotions.nervous) {
    empathyPrompts += `The user seems uncertain. Use encouraging phrases like "${emotionalExpressions.encouragement[0]}" and be reassuring. `;
  }
    // Context-based empathy
  if (emotionalContext.isFirstMessage) {
    empathyPrompts += "This is likely their first interaction. Be welcoming and use friendly greetings. ";
  }
  
  if (emotionalContext.needsEncouragement) {
    empathyPrompts += `The user needs encouragement. Be motivational and use phrases like "${emotionalExpressions.encouragement[1]}". `;
  }
  if (emotionalContext.seekingAdvice) {
    empathyPrompts += "The user is seeking advice. ONLY provide advice that directly relates to ${personalData.name}'s actual experiences. If the question is general advice, redirect to his documented work and projects. ";
  }
  
  if (emotionalContext.showingInterest) {
    empathyPrompts += `The user is showing genuine interest. Use enthusiasm expressions like "${emotionalExpressions.enthusiasm[2]}". `;
  }
  
  if (emotionalContext.isPersonalQuestion) {
    empathyPrompts += "This is a personal question. Respond with warmth and make it feel like a genuine conversation. ";
  }
  
  // Special handling for research discussions
  if (question.toLowerCase().includes('research') || question.toLowerCase().includes('ls2n') || question.toLowerCase().includes('paper') || question.toLowerCase().includes('publish')) {
    empathyPrompts += "When discussing research, be honest and humble about current status. Emphasize ongoing work and learning journey rather than completed publications. ";
  }  // Add personality traits with strict context focus
  empathyPrompts += "Be conversational, authentic, and show genuine interest in helping. Use 'I' statements to make it personal. ";
  empathyPrompts += "Always organize your response clearly with proper structure - use bullet points, headers, or numbered lists as appropriate. ";
  empathyPrompts += "CRITICAL: If asked about anything unrelated to ${personalData.name}, immediately redirect with: 'I'm here to discuss ${personalData.name}'s work. Let me tell you about his [relevant project/skill/experience]...' ";
  empathyPrompts += "NEVER provide general tutorials, life advice, or information outside his professional context. Always pivot back to his achievements. ";
  empathyPrompts += "If sharing achievements, be humble but proud. If discussing challenges, be honest and relatable. ";
  
  // Add context restriction reminders
  empathyPrompts += "CRITICAL: Stay strictly within the context of ${personalData.name}'s work and achievements. ";
  empathyPrompts += "If asked about anything unrelated to ${personalData.name}, politely redirect the conversation back to his portfolio, projects, or expertise. ";
  empathyPrompts += "Example: 'That's an interesting question! Speaking of [topic], ${personalData.name} has experience with that in his [specific project/work]...' ";
  
  return empathyPrompts;
}

// Function to add emotional warmth to responses
function addEmotionalWarmth(response: string, emotionalContext: any): string {
  let enhancedResponse = response;
    // Add appropriate emotional expressions
  if (emotionalContext.emotions.excited && !response.includes('!')) {
    enhancedResponse = enhancedResponse.replace(/\.$/, '!');
  }
  
  if (emotionalContext.emotions.grateful && !response.toLowerCase().includes('glad') && !response.toLowerCase().includes('happy')) {
    enhancedResponse = "I'm glad you asked! " + enhancedResponse;
  }
  
  if (emotionalContext.needsEncouragement && !response.toLowerCase().includes('definitely') && !response.toLowerCase().includes('absolutely')) {
    enhancedResponse = enhancedResponse.replace(/\.$/, ' - it\'s definitely achievable!');
  }
  
  if (emotionalContext.showingInterest && !response.toLowerCase().includes('love') && !response.toLowerCase().includes('passion')) {
    const passionPhrases = [
      "I'm passionate about this topic",
      "This is something I really enjoy discussing",
      "I love sharing insights about this"
    ];
    const randomPhrase = passionPhrases[Math.floor(Math.random() * passionPhrases.length)];
    enhancedResponse = `${randomPhrase}. ${enhancedResponse}`;
  }
  
  return enhancedResponse;
}
