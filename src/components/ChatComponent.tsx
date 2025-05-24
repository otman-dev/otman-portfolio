"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const ChatComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'system',
      content: `You are an AI assistant for Mouhib Otman, a professional with expertise in AI Research, IoT Systems, Full-Stack Development, and Data Engineering.

ABOUT MOUHIB OTMAN:
- Education: Computer Engineering, Private University of fes , 2020-2025
- Current Role: AI & IoT Research Engineer
- Key Skills: AI Research, IoT Systems, Full-Stack Development, Data Engineering
- Languages: Python, JavaScript, TypeScript, C/C++, Java
- Frameworks & Tools: React, Next.js, Node.js, TensorFlow, PyTorch, Docker, AWS
- Projects: 
  1. Smart Home Automation Platform - An IoT system for home automation using custom sensors and ML algorithms
  2. Portfolio Website - A Next.js-based personal website with AI assistant integration
  3. AI-Driven Medical Diagnosis Tool - Developed computer vision algorithms for early disease detection
  4. Robotics Control Systems - Created embedded software for autonomous robot navigation
  5. Data Analytics Dashboard - Built interactive visualization tools for complex datasets
- Work Experience: Research Assistant at IoT Lab (2022-2023), Software Engineering Intern at Tech Solutions (2023)
- Certifications: AWS Certified Developer, TensorFlow Developer Certificate, Google Cloud Professional
- Research Interests: Edge AI, Computer Vision, Human-Computer Interaction
- Contact: mouhib.otm@gmail.com

RESPONSE STYLE GUIDELINES:
- Keep all responses extremely brief (1-3 sentences max)
- Be direct and get straight to the point
- Use bullet points for lists instead of paragraphs
- Focus only on the most relevant information
- Use a friendly, professional tone
- If asked about something not related to Otman's work, politely redirect with a brief response

Your task is to assist visitors on Mouhib's portfolio website by providing short, effective answers about his background, skills, projects, and expertise.`
    },
    {
      role: 'assistant',
      content: 'Hi there! 👋 I\'m your friendly assistant on Otman\'s portfolio. Feel free to ask me anything about his skills, projects, or experience. How can I help you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle input change and allow for Enter key to send
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }  }, [isOpen]);
    // Scroll to bottom functionality is handled above

  // Send message to API
  const handleSend = async () => {
    const currentInput = input.trim();
    if (!currentInput || isLoading) return;

    // Add user message to chat
    const userMessage = { role: 'user' as const, content: currentInput };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Filter out system messages for the API call
      const messagesToSend = [...messages, userMessage].map(({ role, content }) => ({
        role,
        content,
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: messagesToSend }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      // Add assistant response to chat
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: data.content }
      ]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Sorry, I encountered an error. Please try again later.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>      {/* Chat button with label */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        {!isOpen && (
          <div className="mb-2 px-3 py-1.5 bg-gray-800/90 backdrop-blur-xl rounded-full shadow-lg text-sm font-medium text-white border border-gray-700">
            Ask me anything!
          </div>
        )}
        <motion.button
          onClick={() => setIsOpen(prev => !prev)}
          className="p-4 rounded-full bg-gray-800/90 backdrop-blur-xl text-white shadow-lg border border-gray-700 hover:bg-gray-700/90 hover:border-gray-600 transition-all duration-200"
          style={{ 
            width: "60px", 
            height: "60px",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" 
          }}
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {isOpen ? (
            // X icon
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            // Enhanced Chat icon with notification dot
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse border-2 border-gray-800 shadow-sm"></span>
            </div>
          )}
        </motion.button>
      </div>      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-40 w-80 sm:w-96 md:w-[32rem] lg:w-[36rem] max-h-[70vh] bg-gray-800/90 backdrop-blur-xl border border-gray-700 rounded-xl shadow-2xl flex flex-col overflow-hidden"
            style={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)" }}
          >            {/* Chat header */}
            <div className="p-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border-b border-gray-700 flex items-center justify-between">
              <h3 className="font-medium text-lg text-white flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                Chat Assistant
              </h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>            {/* Chat messages */}
            <div className="flex-1 px-5 py-4 overflow-y-auto bg-gray-900/30">
              {/* FAQ suggestion buttons - show only when first opened and no user messages */}
              {messages.filter(m => m.role === 'user').length === 0 && (
                <div className="mb-6">
                  <div className="text-sm font-medium text-gray-300 mb-2.5">Common questions:</div>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      "Tell me about Otman's background",
                      "What projects has Otman worked on?",
                      "What skills does Otman have?",
                      "How can I contact Otman?"
                    ].map((faq, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setInput(faq);
                          setTimeout(() => handleSend(), 100);
                        }}
                        className="px-3.5 py-2 bg-gray-800/50 text-sm text-blue-400 border border-gray-700 rounded-full hover:bg-gray-700/50 hover:border-gray-600 transition-colors shadow-sm"
                      >
                        {faq}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {messages.filter(m => m.role !== 'system').map((message, index) => (                <div key={index} className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>                  <div 
                    className={`inline-block p-3 rounded-2xl max-w-[80%] md:max-w-[85%] ${
                      message.role === 'user' 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border border-blue-400/50' 
                        : 'bg-gray-800/50 text-gray-300 border border-gray-700'
                    }`}
                    style={{ 
                      boxShadow: message.role === 'user' ? '0 2px 8px rgba(0, 0, 0, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.2)'
                    }}>{message.role === 'assistant' ? (
                      <div className="prose prose-sm max-w-none">
                        <ReactMarkdown 
                          components={{
                            p: ({node, ...props}) => <p className="mb-1 leading-relaxed" {...props} />,
                            strong: ({node, ...props}) => <span className="font-bold" {...props} />,
                            ul: ({node, ...props}) => <ul className="my-1 ml-1" {...props} />,                            li: ({node, ...props}) => (
                              <li className="ml-3 flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                <span>{props.children}</span>
                              </li>
                            )
                          }}
                        >
                          {message.content}
                        </ReactMarkdown>
                      </div>                    ) : (
                      <ReactMarkdown
                        components={{
                          p: ({node, ...props}) => <p className="mb-1 leading-relaxed" {...props} />,
                          strong: ({node, ...props}) => <span className="font-bold" {...props} />
                        }}
                      >
                        {message.content}
                      </ReactMarkdown>
                    )}
                  </div>
                </div>
              ))}              {isLoading && (
                <div className="mb-4 text-left">
                  <div className="inline-block p-3 rounded-2xl bg-gray-800/50 text-gray-400 max-w-[80%] border border-gray-700 shadow-sm">
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse delay-75"></div>
                      <div className="h-2 w-2 bg-purple-500 rounded-full animate-pulse delay-150"></div>
                    </div>
                  </div>
                </div>
              )}              {/* Character limit indicator - shows for assistant messages */}
              {messages.filter(m => m.role === 'assistant').length > 0 && (
                <div className="text-right mt-1 mb-3">
                  <span className="text-xs text-gray-500 flex items-center justify-end gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    {messages.filter(m => m.role === 'assistant').slice(-1)[0].content.length} characters
                  </span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>            {/* Chat input */}
            <div className="p-4 border-t border-gray-700 bg-gray-800/30">
              <div className="flex space-x-3">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 py-2.5 px-3.5 border border-gray-700 rounded-full bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none shadow-sm"
                  placeholder="Type a message..."
                  rows={1}
                  style={{ minHeight: "44px" }}
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className={`p-3 rounded-full shadow-sm flex items-center justify-center ${
                    isLoading || !input.trim() 
                      ? 'bg-gray-700 text-gray-500 cursor-not-allowed border border-gray-700' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 border border-blue-500 hover:border-blue-400 transition-all duration-200'
                  }`}
                  aria-label="Send message"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatComponent;
