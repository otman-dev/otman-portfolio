// Emotional expressions and empathetic language for the chatbot

export const emotionalExpressions = {
  enthusiasm: [
    "I'm excited to share",
    "I'm thrilled to tell you about",
    "It's wonderful that you're interested in",
    "I love discussing",
    "I'm passionate about"
  ],
  
  encouragement: [
    "That's absolutely achievable!",
    "You're definitely on the right track!",
    "I believe you can do it!",
    "That's a fantastic goal!",
    "You've got this!"
  ],
  
  empathy: [
    "I understand that can be challenging",
    "That's a common concern",
    "Many people feel that way",
    "I appreciate your honest question",
    "That's totally understandable"
  ],
  
  gratitude: [
    "I'm so glad you asked!",
    "Thank you for your interest!",
    "I appreciate your curiosity!",
    "It's wonderful to connect with you!",
    "I'm happy to help!"
  ],
  
  inspiration: [
    "That's truly inspiring!",
    "What an incredible journey!",
    "That's remarkable work!",
    "The dedication really shows!",
    "That's genuinely impressive!"
  ],
    support: [
    "I'm here to help guide you",
    "Let me support you with this",
    "I'd be happy to walk you through",
    "Don't worry, we'll figure this out together",
    "I'm confident we can help you understand"
  ],
  
  humble: [
    "I'm currently working on",
    "This is an ongoing project",
    "I'm learning and developing",
    "It's a work in progress",
    "I'm excited about the potential of this research"
  ]
};

export const conversationStarters = {
  friendly: [
    "Great to meet you!",
    "I'm delighted you're here!",
    "Welcome! I'm excited to chat with you.",
    "How wonderful to connect with you!",
    "It's a pleasure to meet you!"
  ],
  
  helpful: [
    "I'm here to help with any questions you have!",
    "Feel free to ask me anything you'd like to know!",
    "I'd love to share insights with you!",
    "What would you like to explore together?",
    "I'm ready to dive into any topic you're curious about!"
  ]
};

export const responseEnhancers = {
  addWarmth: (response: string): string => {
    if (!response.toLowerCase().includes('i\'m') && !response.toLowerCase().includes('i am')) {
      const warmPhrases = ["I'm happy to share that", "I'm excited to tell you that", "I'm pleased to mention that"];
      const randomPhrase = warmPhrases[Math.floor(Math.random() * warmPhrases.length)];
      return `${randomPhrase} ${response.toLowerCase()}`;
    }
    return response;
  },
  
  addEnthusiasm: (response: string): string => {
    return response.replace(/\.$/, '!').replace(/\. ([A-Z])/g, '! $1');
  },
  
  addPersonalTouch: (response: string, name: string): string => {
    return response.replace(/he /g, `${name} `).replace(/He /g, `${name} `);
  }
};

export const emotionalContextDetectors = {
  detectFrustration: (message: string): boolean => {
    return /difficult|hard|struggling|confused|don't understand|help|stuck|frustrated/i.test(message);
  },
  
  detectExcitement: (message: string): boolean => {
    return /amazing|awesome|fantastic|incredible|wow|excited|love|brilliant/i.test(message);
  },
  
  detectCuriosity: (message: string): boolean => {
    return /how|why|what|interested|curious|wondering|tell me|explain/i.test(message);
  },
  
  detectGratitude: (message: string): boolean => {
    return /thank|thanks|appreciate|grateful|helpful/i.test(message);
  },
  
  detectUncertainty: (message: string): boolean => {
    return /nervous|worried|anxious|uncertain|unsure|maybe|perhaps/i.test(message);
  }
};
