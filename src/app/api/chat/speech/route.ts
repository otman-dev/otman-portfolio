import { NextRequest, NextResponse } from 'next/server';
import { Groq } from 'groq-sdk';

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

    // Get the audio file from the request
    const formData = await req.formData();
    const audioFile = formData.get('audio') as File;

    if (!audioFile) {
      return NextResponse.json({ error: 'No audio file provided' }, { status: 400 });
    }

    // Convert audio to text using Groq's Whisper
    const transcription = await groq.audio.transcriptions.create({
      file: audioFile,
      model: 'whisper-large-v3',
      language: 'en', // Optional: specify language
      response_format: 'json',
      temperature: 0.0,
    });

    return NextResponse.json({
      text: transcription.text,
    });

  } catch (error: any) {
    console.error('Error in speech-to-text:', error);
    
    if (error.status === 401) {
      return NextResponse.json(
        { error: 'API authentication failed. Please check your API key configuration.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to process audio: ' + error.message },
      { status: 500 }
    );
  }
}
