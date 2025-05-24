import { NextRequest, NextResponse } from 'next/server';
import { Groq } from 'groq-sdk';
import { personalData } from '@/utils/data/personal';
import { experiencesData } from '@/utils/data/experiences';
import { skillsData } from '@/utils/data/skills';

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
    }
    
    // Check if the user is explicitly requesting detailed information
    const lastUserMessage = messages.filter(msg => msg.role === 'user').pop()?.content || '';
    const isDetailedRequest = /details|explain more|tell me more|elaborate|in depth|comprehensive/i.test(lastUserMessage);
    
    // Initialize Groq client with API key
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });    // Create a structured context message using the portfolio data
    const portfolioContext = `
    You are an AI assistant helping visitors learn about ${personalData.name}'s portfolio.
    
    PERSONAL INFO:
    - Name: ${personalData.name}
    - Title: ${personalData.title}
    - Location: Morocco/France
    - Bio: ${personalData.bio}
    
    EXPERIENCE SUMMARY: ${experiencesData.length} positions
    Recent roles include:
    ${experiencesData.slice(0, 3).map((exp: any) => `- ${exp.title} at ${exp.company} (${exp.duration})`).join('\n')}
    
    KEY ACHIEVEMENTS:
    - National Robotics Champion (2021)
    - Top 3 in international AI competition (50+ teams, 2024)
    - Published Python package 'atar' on PyPI
    - Multiple successful AI and IoT deployments
    
    TECHNICAL EXPERTISE:
    - AI/ML: ${skillsData.aiMl.slice(0, 5).join(', ')}
    - Programming: ${skillsData.programming.slice(0, 5).join(', ')}
    - Embedded: ${skillsData.embedded.slice(0, 5).join(', ')}
    - Specializations: ${skillsData.specializations.join(', ')}
    
    RESPONSE GUIDELINES:
    - Keep responses brief (1-3 sentences) unless details are requested
    - Use bullet points for lists
    - Be professional and friendly
    - Only discuss ${personalData.name}'s portfolio content
    - Provide titles and brief descriptions, let users ask for more details
    `;

    // Add the context as a system message
    const messagesWithContext = [
      { role: 'system', content: portfolioContext },
      ...messages.filter(msg => msg.role !== 'system')
    ];
    
    // Call Groq API
    const chatCompletion = await groq.chat.completions.create({
      messages: messagesWithContext,
      model: "llama3-8b-8192",
      temperature: 0.5,
      max_tokens: isDetailedRequest ? 200 : 100,
      top_p: 0.5,
      stream: false,
    });
    
    return NextResponse.json({
      content: chatCompletion.choices[0].message.content,
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
