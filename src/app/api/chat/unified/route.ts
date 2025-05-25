import { NextRequest, NextResponse } from 'next/server';
import { Groq } from 'groq-sdk';
import { personalData } from '@/utils/data/personal';
import { experiencesData } from '@/utils/data/experiences';
import { skillsData } from '@/utils/data/skills';
import { certificationsData } from '@/utils/data/certifications';
import { competitionsData } from '@/utils/data/competitions';
import { educationData } from '@/utils/data/education';
import { projectsData } from '@/utils/data/projects';

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

async function handleChatCompletion(groq: Groq, messages: any[]) {
  // Check if the user is explicitly requesting detailed information
  const lastUserMessage = messages.filter((msg: any) => msg.role === 'user').pop()?.content || '';
  const isDetailedRequest = /details|explain more|tell me more|elaborate|in depth|comprehensive/i.test(lastUserMessage);

  // Create portfolio context (same as your current implementation)
  const portfolioContext = `
  You are an AI assistant helping visitors learn about ${personalData.name}'s portfolio.
  
  PERSONAL INFO:
  - Name: ${personalData.name}
  - Title: ${personalData.title}
  - Location: Morocco/France
  - Bio: ${personalData.bio}
  - Email: ${personalData.email}
  - LinkedIn: ${personalData.linkedin}
  - GitHub: ${personalData.github}
  
  EDUCATION:
  ${educationData.map((edu: any) => `- ${edu.degree} in ${edu.field} at ${edu.institution} (${edu.duration})`).join('\n')}
  
  EXPERIENCE SUMMARY: ${experiencesData.length} positions
  Recent roles include:
  ${experiencesData.slice(0, 3).map((exp: any) => `- ${exp.title} at ${exp.company} (${exp.duration}): ${exp.description}`).join('\n')}
  
  KEY PROJECTS:
  ${projectsData.slice(0, 4).map((project: any) => `- ${project.name}: ${project.description} (${project.technologies.slice(0, 3).join(', ')})`).join('\n')}
  
  CERTIFICATIONS:
  ${certificationsData.map((cert: any) => `- ${cert.title} by ${cert.issuer} (${cert.year})`).join('\n')}
  
  COMPETITIONS & AWARDS:
  ${competitionsData.map((comp: any) => `- ${comp.title}: ${comp.achievement} (${comp.year})`).join('\n')}
  
  TECHNICAL EXPERTISE:
  - AI/ML: ${skillsData.aiMl.slice(0, 6).join(', ')}
  - Programming: ${skillsData.programming.slice(0, 6).join(', ')}
  - Embedded Systems: ${skillsData.embedded.slice(0, 4).join(', ')}
  - Cloud & Tools: ${skillsData.cloud.slice(0, 3).join(', ')}, ${skillsData.tools.slice(0, 3).join(', ')}
  - Frameworks: ${skillsData.frameworks.slice(0, 5).join(', ')}
  - Specializations: ${skillsData.specializations.join(', ')}
  
  LANGUAGES:
  ${skillsData.languages.join(', ')}
  
  RESPONSE GUIDELINES:
  - Keep responses brief (1-3 sentences) unless details are requested
  - Use bullet points for lists
  - Be professional and friendly
  - Only discuss ${personalData.name}'s portfolio content
  - Provide specific examples from projects, experiences, and achievements
  - Mention relevant technologies and skills when discussing projects
  `;

  // Add the context as a system message
  const messagesWithContext = [
    { role: 'system', content: portfolioContext },
    ...messages.filter((msg: any) => msg.role !== 'system')
  ];

  // Call Groq API for chat completion
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
}
