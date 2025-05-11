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
    
    // Check if the user is explicitly requesting detailed information
    const lastUserMessage = messages.filter(msg => msg.role === 'user').pop()?.content || '';
    const isDetailedRequest = /details|explain more|tell me more|elaborate|in depth|comprehensive/i.test(lastUserMessage);
    
    // Initialize Groq client with API key
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });    // Create a context message with detailed portfolio information and formatting instructions
    const portfolioContext = `
    Here is detailed information about Mouhib Otman to help you answer questions accurately:
    ${JSON.stringify(portfolioData, null, 2)}
    
    RESPONSE FORMAT INSTRUCTIONS:
    - Keep all responses extremely brief (1-3 sentences maximum)
    - Use bullet points for any lists
    - Be direct and get straight to the point
    - Focus only on the most relevant information
    - Avoid unnecessary details or elaboration
    - Use a friendly but professional tone
    - never respond with more than 3 sentences
    - never respond out of the contxt of mouhib otman
    - only provide detailed explanations when the user explicitly asks for details or more information
    - only provide titles and short bullet points and let the user specify where he wantsd more digging into details 
    `;

    // Add the context as a system message at the beginning
    const messagesWithContext = [
      { role: 'system', content: portfolioContext },
      ...messages.filter(msg => msg.role !== 'system') // Filter out other system messages
    ];
    
    // Call Groq API with enhanced context and parameters optimized for brevity
    const chatCompletion = await groq.chat.completions.create({
      messages: messagesWithContext,
      model: "llama3-8b-8192", // You can also use "mixtral-8x7b-32768" or other models
      temperature: 0.5,        // Lower temperature for more focused responses
      max_tokens: isDetailedRequest ? 200 : 100, // Adjust token limit based on request type
      top_p: 0.5,              // More focused sampling
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
