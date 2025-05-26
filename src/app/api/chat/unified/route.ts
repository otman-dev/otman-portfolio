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
  uiData
} from '@/utils/data';

export async function POST(req: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.GROQ_API_KEY) {
      console.error('GROQ_API_KEY is not configured');
      return NextResponse.json({ error: 'API configuration error' }, { status: 500 });
    }

    // Initialize Groq client
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    // Check if request is multipart (audio) or JSON (text)
    const contentType = req.headers.get('content-type') || '';
    
    if (contentType.includes('multipart/form-data')) {
      // Handle speech-to-text
      const formData = await req.formData();
      const audioFile = formData.get('audio') as File;
      const shouldRespond = formData.get('respond') === 'true'; // Whether to also generate a response

      if (!audioFile) {
        return NextResponse.json({ error: 'No audio file provided' }, { status: 400 });
      }

      // Convert speech to text
      const transcription = await groq.audio.transcriptions.create({
        file: audioFile,
        model: 'whisper-large-v3',
        language: 'en',
        response_format: 'json',
        temperature: 0.0,
      });

      // If just transcription is needed
      if (!shouldRespond) {
        return NextResponse.json({
          text: transcription.text,
        });
      }

      // If full conversation response is needed, continue with chat completion
      const messages = [
        { role: 'user', content: transcription.text }
      ];
      
      // Continue to chat completion logic below...
      return await handleChatCompletion(groq, messages);

    } else {
      // Handle regular text chat
      const { messages } = await req.json();
      
      if (!messages || !Array.isArray(messages) || messages.length === 0) {
        return NextResponse.json({ error: 'Invalid request. Messages array is required.' }, { status: 400 });
      }

      return await handleChatCompletion(groq, messages);
    }

  } catch (error: any) {
    console.error('Error in chat/speech API:', error);
    
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

async function handleChatCompletion(groq: Groq, messages: any[]) {  // Check if the user is explicitly requesting detailed information
  const lastUserMessage = messages.filter((msg: any) => msg.role === 'user').pop()?.content || '';
  const isDetailedRequest = /details|explain more|tell me more|elaborate|in depth|comprehensive/i.test(lastUserMessage);

  // Detect question type for better fallbacks
  const isProjectQuestion = /project|projects|built|created|developed|work.*on/i.test(lastUserMessage);
  const isSkillQuestion = /skill|skills|expertise|technology|technologies|programming|language/i.test(lastUserMessage);  // Create optimized portfolio context 
  const portfolioContext = `You are an AI assistant for ${personalData.name}'s portfolio.
  
  PERSONAL: ${personalData.name}, ${personalData.title}
  Bio: ${personalData.bio.substring(0, 200)}...
  Contact: ${personalData.email} | ${personalData.linkedin} | ${personalData.github}
  
  EDUCATION: ${educationData.map((edu: any) => `${edu.degree} at ${edu.institution} (${edu.year})`).join('; ')}
  
  EXPERIENCE: ${experiencesData.slice(0, 3).map((exp: any) => `${exp.title} at ${exp.company}`).join('; ')}
  
  KEY PROJECTS: ${projectsData.slice(0, 4).map((project: any) => `${project.name} (${project.technologies.slice(0, 2).join(', ')})`).join('; ')}
  
  SKILLS: Programming: ${skillsData.programming.slice(0, 4).join(', ')}; AI/ML: ${skillsData.aiMl.slice(0, 4).join(', ')}; Frameworks: ${skillsData.frameworks.slice(0, 4).join(', ')}
  
  CERTIFICATIONS: ${certificationsData.slice(0, 3).map((cert: any) => cert.name || cert.title).join('; ')}
  
  GUIDELINES: Keep responses 2-3 sentences max. Never end with colons. Complete all sentences.
  `;

  // Add the context as a system message
  const messagesWithContext = [
    { role: 'system', content: portfolioContext },
    ...messages.filter((msg: any) => msg.role !== 'system')
  ];  // Call Groq API for chat completion
  const chatCompletion = await groq.chat.completions.create({
    messages: messagesWithContext,
    model: "llama3-8b-8192",    temperature: 0.4,    max_tokens: isDetailedRequest ? 150 : 120,
    top_p: 0.8,
    stream: false,
    stop: ['\n\n', ':'],
  });
  // Post-process response to ensure completeness
  let responseContent = chatCompletion.choices[0].message.content || '';
  
  // Check for skill adaptability if no direct answer was provided or if asking about unknown tech
  if (!responseContent.trim() || 
      responseContent.trim().length < 20 || 
      responseContent.toLowerCase().includes("don't have") ||
      responseContent.toLowerCase().includes("not familiar") ||
      responseContent.toLowerCase().includes("doesn't have")) {
    
    // Extract potential technology/skill names from the question
    const lastUserMessage = messages.filter((msg: any) => msg.role === 'user').pop()?.content || '';
    const commonTechPatterns = [
      /\b(react|vue|angular|svelte|next\.?js|nuxt|gatsby)\b/i,
      /\b(python|java|c#|go|rust|kotlin|swift|php|ruby|scala)\b/i,
      /\b(pytorch|tensorflow|keras|scikit-learn|huggingface|transformers|langchain)\b/i,
      /\b(aws|azure|gcp|google cloud|heroku|vercel|netlify)\b/i,
      /\b(postgresql|mysql|mongodb|redis|elasticsearch|cassandra)\b/i,
      /\b(docker|kubernetes|jenkins|github actions|gitlab)\b/i,
      /\b(arduino|raspberry pi|stm32|pic|microcontrollers)\b/i
    ];
    
    let detectedTech = null;
    for (const pattern of commonTechPatterns) {
      const match = lastUserMessage.match(pattern);
      if (match) {
        detectedTech = match[1];
        break;
      }
    }
    
    // Also try word-based detection as fallback
    if (!detectedTech) {
      const words = lastUserMessage.toLowerCase().split(/\s+/);
      const techWords = words.filter((word: string) => 
        word.length > 2 && 
        !['can', 'does', 'know', 'use', 'work', 'with', 'have', 'experience', 'skill', 'about', 'the', 'and', 'or'].includes(word)
      );
      detectedTech = techWords[0];
    }
    
    if (detectedTech) {
      const adaptabilityResponse = analyzeSkillAdaptability(detectedTech, personalData, skillsData, projectsData);
      if (adaptabilityResponse) {
        responseContent = adaptabilityResponse;
      }
    }
  }
  
  // Simple post-processing: only handle obvious incomplete responses
  if (responseContent.trim()) {
    const trimmed = responseContent.trim();
    
    // Only remove responses that clearly end with incomplete list starters
    if (trimmed.endsWith(':') || trimmed.endsWith('include:') || trimmed.endsWith('are:')) {
      // Try to find the last complete sentence before the incomplete part
      const beforeColon = trimmed.substring(0, trimmed.lastIndexOf(':')).trim();
      const lastSentenceEnd = Math.max(
        beforeColon.lastIndexOf('.'),
        beforeColon.lastIndexOf('!'),
        beforeColon.lastIndexOf('?')
      );
        if (lastSentenceEnd > 0) {
        responseContent = beforeColon.substring(0, lastSentenceEnd + 1);      } else {
        // Generate contextual fallback based on question type using actual data
        if (isProjectQuestion) {
          const topProjects = projectsData.slice(0, 3);
          const projectNames = topProjects.map(p => p.name).join(', ');
          const uniqueTechs = [...new Set(topProjects.flatMap(p => p.technologies))];
          const techList = uniqueTechs.slice(0, 4).join(', ');
          responseContent = `${personalData.name} has worked on projects including ${projectNames}. These showcase expertise in ${techList} and demonstrate skills across AI, embedded systems, and software development.`;
        } else if (isSkillQuestion) {
          const aiSkills = skillsData.aiMl.slice(0, 3).join(', ');
          const progSkills = skillsData.programming.slice(0, 3).join(', ');
          const embeddedSkills = skillsData.embedded.slice(0, 2).join(', ');
          responseContent = `${personalData.name} has expertise in ${aiSkills}, ${progSkills}, and ${embeddedSkills}. These skills span across AI, software development, and embedded systems.`;
        } else {
          responseContent = `I can help you learn about ${personalData.name}'s portfolio. Feel free to ask about his projects, skills, education, or experience.`;
        }
      }
    }
    // If response doesn't end with punctuation, add a period
    else if (!['.', '!', '?'].includes(trimmed.slice(-1))) {
      responseContent = trimmed + '.';
    }  } else {
    responseContent = 'I can help you learn about Otman\'s portfolio. Feel free to ask about his projects, skills, education, or experience.';
  }

  return NextResponse.json({
    content: responseContent,
  });
}

// Function to analyze skill adaptability based on existing expertise
function analyzeSkillAdaptability(requestedSkill: string, personalData: any, skillsData: any, projectsData: any) {
  const skill = requestedSkill.toLowerCase();
  const allSkills = [
    ...skillsData.programming,
    ...skillsData.frameworks,
    ...skillsData.aiMl,
    ...skillsData.embedded,
    ...skillsData.tools,
    ...skillsData.databases,
    ...skillsData.cloud,
    ...skillsData.specializations
  ].map((s: string) => s.toLowerCase());
  
  // If skill exists, return direct confirmation
  if (allSkills.some(existingSkill => existingSkill.includes(skill) || skill.includes(existingSkill))) {
    return null; // Let normal context handle this
  }
  
  // Define skill families and adaptation patterns
  const skillFamilies = {
    webFrameworks: {
      skills: ['react', 'vue', 'angular', 'svelte', 'next.js', 'nuxt', 'gatsby'],
      existing: skillsData.frameworks.map((s: string) => s.toLowerCase()),
      adaptationReason: 'web development frameworks share similar patterns and concepts'
    },
    programmingLanguages: {
      skills: ['python', 'javascript', 'java', 'c#', 'go', 'rust', 'kotlin', 'swift', 'php', 'ruby'],
      existing: skillsData.programming.map((s: string) => s.toLowerCase()),
      adaptationReason: 'programming fundamentals and syntax patterns transfer across languages'
    },
    aiMlFrameworks: {
      skills: ['pytorch', 'tensorflow', 'keras', 'scikit-learn', 'huggingface', 'transformers', 'langchain', 'ollama'],
      existing: skillsData.aiMl.map((s: string) => s.toLowerCase()),
      adaptationReason: 'machine learning concepts and model architectures are transferable'
    },
    cloudPlatforms: {
      skills: ['aws', 'azure', 'gcp', 'google cloud', 'heroku', 'vercel', 'netlify', 'digitalocean'],
      existing: skillsData.cloud.map((s: string) => s.toLowerCase()),
      adaptationReason: 'cloud platforms share similar deployment and scaling principles'
    },
    databases: {
      skills: ['postgresql', 'mysql', 'mongodb', 'redis', 'elasticsearch', 'cassandra', 'dynamodb'],
      existing: skillsData.databases.map((s: string) => s.toLowerCase()),
      adaptationReason: 'database concepts and query optimization principles are universal'
    },
    embeddedSystems: {
      skills: ['arduino', 'raspberry pi', 'esp32', 'arm', 'pic', 'stm32', 'microcontrollers'],
      existing: skillsData.embedded.map((s: string) => s.toLowerCase()),
      adaptationReason: 'embedded systems programming and hardware interfacing skills transfer well'
    }
  };
  
  // Check if requested skill belongs to a family where user has experience
  for (const [family, data] of Object.entries(skillFamilies)) {
    if (data.skills.some(familySkill => skill.includes(familySkill) || familySkill.includes(skill))) {
      if (data.existing.length > 0) {
        const relatedSkills = data.existing.slice(0, 3).join(', ');
        return `${personalData.name} can adapt to ${requestedSkill} given his experience with ${relatedSkills}. His background in ${data.adaptationReason} provides a strong foundation for learning this technology.`;
      }
    }
  }
  
  // Check project-based adaptability
  const projectTechs = projectsData.flatMap((p: any) => p.technologies).map((t: string) => t.toLowerCase());
  const relatedProjectTechs = projectTechs.filter((tech: string) => 
    tech.includes(skill) || skill.includes(tech) || 
    (skill.includes('react') && tech.includes('javascript')) ||
    (skill.includes('python') && tech.includes('ai')) ||
    (skill.includes('node') && tech.includes('javascript'))
  );
  
  if (relatedProjectTechs.length > 0) {
    return `${personalData.name} can likely adapt to ${requestedSkill} based on his project experience with related technologies. His hands-on development experience provides a solid foundation for picking up new tools in the same domain.`;
  }
  
  // General adaptability based on overall skill diversity
  const totalSkillCategories = Object.values(skillsData).filter(arr => Array.isArray(arr) && arr.length > 0).length;
  if (totalSkillCategories >= 6) {
    return `While ${personalData.name} hasn't specifically worked with ${requestedSkill}, his diverse technical background across ${totalSkillCategories} different technology domains demonstrates strong adaptability. His experience in AI, embedded systems, and full-stack development provides excellent fundamentals for learning new technologies.`;
  }
  
  return null; // No clear adaptation path found
}
