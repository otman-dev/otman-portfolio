import { NextRequest, NextResponse } from 'next/server';
import { Groq } from 'groq-sdk';
import { portfolioData } from '@/utils/portfolioKnowledgeBase';

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    
    // Validate input
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Invalid request. Messages array is required.' }, { status: 400 });
    }
    
    // Initialize Groq client with API key
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    // Create a context message with detailed portfolio information
    const portfolioContext = `
    Here is detailed information about Mouhibeddine Otman to help you answer questions accurately:
    ${JSON.stringify(portfolioData, null, 2)}
    
    Use this information to provide accurate, helpful responses about Mouhibeddine Otman, his background, skills, projects, and work experience.
    Always answer in a friendly, professional tone and keep responses concise.
    `;

    // Add the context as a system message at the beginning
    const messagesWithContext = [
      { role: 'system', content: portfolioContext },
      ...messages.filter(msg => msg.role !== 'system') // Filter out other system messages
    ];
    
    // Call Groq API with enhanced context
    const chatCompletion = await groq.chat.completions.create({
      messages: messagesWithContext,
      model: "llama3-8b-8192", // You can also use "mixtral-8x7b-32768" or other models
      temperature: 0.7,
      max_tokens: 1024,
      top_p: 0.9,
      stream: false,
    });
    
    // Return the response
    return NextResponse.json({
      content: chatCompletion.choices[0].message.content,
    });
    
  } catch (error: any) {
    console.error('Error calling Groq API:', error);
    return NextResponse.json(
      { error: 'Failed to process request: ' + error.message },
      { status: 500 }
    );
  }
}
