# Chatbot Setup Guide

This portfolio includes an AI-powered chatbot using the Groq API. Follow these steps to set it up:

## Get Your Groq API Key

1. Sign up for an account at [Groq's website](https://www.groq.com/)
2. Navigate to your account settings or API section
3. Generate an API key

## Add the API Key to Your Project

1. In the .env.local file, replace `your_groq_api_key_here` with your actual Groq API key:

```
GROQ_API_KEY=your_actual_api_key_here
```

2. Restart your development server if it's running

## Customizing the Chatbot

You can customize the chatbot behavior by editing:

1. The system message in `src/components/ChatComponent.tsx`
2. The model parameters in `src/app/api/chat/route.ts`

### Available Models

- `llama3-8b-8192`: Fast and efficient
- `mixtral-8x7b-32768`: More capable for complex tasks
- `llama3-70b-8192`: Most powerful but may be slower

## Using in Production

For production deployment, make sure to:

1. Set up the environment variable on your hosting platform
2. Consider rate limiting and authentication for the API endpoint if needed
3. Test thoroughly before deployment
