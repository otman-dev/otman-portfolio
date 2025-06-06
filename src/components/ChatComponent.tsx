"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChatComponentProps {
  isChatOpen: boolean;
  setIsChatOpen: (isOpen: boolean) => void;
}

const ChatComponent: React.FC<ChatComponentProps> = ({ isChatOpen, setIsChatOpen }) => {
  const [showLabel, setShowLabel] = useState(true);const [messages, setMessages] = useState<Message[]>([
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
  ]);  const [input, setInput] = useState('');  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessingAudio, setIsProcessingAudio] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [autoSpeak, setAutoSpeak] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const speechSynthRef = useRef<SpeechSynthesisUtterance | null>(null);

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
  }, [messages]);  useEffect(() => {
    if (isChatOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isChatOpen]);

  // Hide label after 8 seconds or when chat is opened
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLabel(false);
    }, 8000); // Hide after 8 seconds

    return () => clearTimeout(timer);
  }, []);
  // Hide label when chat is opened
  useEffect(() => {
    if (isChatOpen) {
      setShowLabel(false);
    }
  }, [isChatOpen]);

  // Cleanup speech synthesis on unmount
  useEffect(() => {
    return () => {
      if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
      }
    };
  }, []);

  // Load voices when available
  useEffect(() => {
    const loadVoices = () => {
      speechSynthesis.getVoices();
    };
    
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
    
    loadVoices();
  }, []);
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

      const data = await response.json();      // Add assistant response to chat
      const assistantMessage = { role: 'assistant' as const, content: data.content };
      setMessages(prev => [
        ...prev,
        assistantMessage
      ]);

      // Auto-speak the response if enabled
      if (autoSpeak) {
        speakText(data.content);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Sorry, I encountered an error. Please try again later.' }
      ]);
    } finally {      setIsLoading(false);
    }
  };
  // Text-to-speech functions
  const speakText = (text: string) => {
    // Stop any current speech
    stopSpeaking();
    
    // Clean text for better speech synthesis (remove markdown)
    const cleanText = text
      .replace(/\*\*(.*?)\*\*/g, '$1') // Bold text
      .replace(/\*(.*?)\*/g, '$1')     // Italic text
      .replace(/`(.*?)`/g, '$1')       // Code text
      .replace(/#{1,6}\s/g, '')        // Headers
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Links
      .replace(/\n\s*[-*]\s/g, '. ')   // List items
      .trim();

    if ('speechSynthesis' in window && cleanText) {
      const utterance = new SpeechSynthesisUtterance(cleanText);
      speechSynthRef.current = utterance;
      
      // Configure voice settings
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;
      
      // Try to use a more natural voice
      const voices = speechSynthesis.getVoices();
      const preferredVoice = voices.find(voice => 
        voice.lang.startsWith('en') && 
        (voice.name.includes('Neural') || voice.name.includes('Premium') || voice.name.includes('Enhanced'))
      ) || voices.find(voice => voice.lang.startsWith('en'));
      
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => {
        setIsSpeaking(false);
        speechSynthRef.current = null;
      };
      utterance.onerror = () => {
        setIsSpeaking(false);
        speechSynthRef.current = null;
      };

      speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    speechSynthRef.current = null;
  };

  const toggleAutoSpeak = () => {
    setAutoSpeak(prev => !prev);
    if (isSpeaking) {
      stopSpeaking();
    }
  };

  // Speech-to-text functions
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'audio/webm;codecs=opus'
      });

      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm;codecs=opus' });
        await sendAudioToAPI(audioBlob);
        
        // Stop all tracks to release the microphone
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error starting recording:', error);
      // Add a user-friendly message
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Could not access microphone. Please check your browser permissions and try again.' }
      ]);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const sendAudioToAPI = async (audioBlob: Blob) => {
    setIsProcessingAudio(true);
    
    try {
      const formData = new FormData();
      formData.append('audio', audioBlob, 'recording.webm');

      const response = await fetch('/api/chat/speech', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to process audio');
      }

      const result = await response.json();
      
      // Set the transcribed text in the input field
      setInput(result.text);
      
    } catch (error) {
      console.error('Error processing audio:', error);
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Error processing audio. Please try again or type your message.' }
      ]);
    } finally {
      setIsProcessingAudio(false);
    }
  };
  return (
    <>      {/* Chat button with label - hidden when chat is open */}
      <div className={`fixed bottom-6 right-6 z-40 flex flex-col items-end transition-opacity duration-200 ${isChatOpen ? 'hidden' : 'flex'}`}>
        <AnimatePresence>
          {!isChatOpen && showLabel && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="mb-2 px-3 py-1.5 bg-gray-800/90 backdrop-blur-xl rounded-full shadow-lg text-sm font-medium text-white border border-gray-700"
            >
              Ask me anything!
            </motion.div>
          )}
        </AnimatePresence>        <motion.button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="p-4 rounded-full bg-gray-800/90 backdrop-blur-xl text-white shadow-lg border border-gray-700 hover:bg-gray-700/90 hover:border-gray-600 transition-all duration-200"
          style={{ 
            width: "60px", 
            height: "60px",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" 
          }}
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isChatOpen ? "Close chat" : "Open chat"}
        >
          {isChatOpen ? (
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
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 w-full h-full bg-gray-900/95 backdrop-blur-xl border-0 shadow-2xl flex flex-col overflow-hidden"
            style={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)" }}
          >
            {/* Chat header */}
            <div className="p-6 bg-gradient-to-r from-gray-800/60 to-gray-700/60 border-b border-gray-600 flex items-center justify-between">
              {/* Back button + Title for all screen sizes */}
              <div className="flex items-center gap-4">
                {/* Back button - visible on all screens */}
                <button 
                  onClick={() => setIsChatOpen(false)}
                  className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                  aria-label="Close chat"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5"></path>
                    <path d="M12 19l-7-7 7-7"></path>
                  </svg>
                </button>
                
                <h3 className="font-semibold text-xl text-white flex items-center gap-3">
                  {/* Chat icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span>Portfolio Assistant</span>
                </h3>
              </div>
              <div className="flex items-center gap-2">
                {/* Auto-speak toggle */}
                <button
                  onClick={toggleAutoSpeak}
                  className={`p-1.5 rounded-full transition-colors ${
                    autoSpeak 
                      ? 'text-blue-400 bg-blue-400/20 hover:bg-blue-400/30' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                  title={autoSpeak ? "Disable auto-speak" : "Enable auto-speak"}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  </svg>
                </button>
                
                {/* Stop speaking button (only show when speaking) */}
                {isSpeaking && (
                  <button
                    onClick={stopSpeaking}
                    className="p-1.5 rounded-full text-red-400 bg-red-400/20 hover:bg-red-400/30 transition-colors"
                    title="Stop speaking"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="6" width="12" height="12" rx="2"/>
                    </svg>
                  </button>                )}
              </div>
            </div>            {/* Chat messages */}
            <div className="flex-1 px-6 md:px-12 lg:px-20 py-6 overflow-y-auto bg-gray-900/20">
              <div className="max-w-4xl mx-auto">
                {/* FAQ suggestion buttons - show only when first opened and no user messages */}
                {messages.filter(m => m.role === 'user').length === 0 && (
                  <div className="mb-8">
                    <div className="text-base font-medium text-gray-300 mb-4">Ask me anything about Otman's background:</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                          className="px-4 py-3 bg-gray-800/50 text-sm text-blue-400 border border-gray-700 rounded-xl hover:bg-gray-700/50 hover:border-gray-600 transition-colors shadow-sm text-left"
                        >
                          {faq}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              
              {messages.filter(m => m.role !== 'system').map((message, index) => (                <div key={index} className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>                  <div                    className={`inline-block p-4 rounded-2xl max-w-[85%] lg:max-w-[75%] ${
                      message.role === 'user' 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border border-blue-400/50' 
                        : 'bg-gray-800/60 text-gray-300 border border-gray-600'
                    }`}                    style={{ 
                      boxShadow: message.role === 'user' ? '0 4px 12px rgba(0, 0, 0, 0.3)' : '0 4px 12px rgba(0, 0, 0, 0.2)'
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
                      </div>                    ) : (                      <ReactMarkdown
                        components={{
                          p: ({node, ...props}) => <p className="mb-1 leading-relaxed" {...props} />,
                          strong: ({node, ...props}) => <span className="font-bold" {...props} />
                        }}
                      >
                        {message.content}
                      </ReactMarkdown>
                    )}
                  </div>
                  
                  {/* Speak button for assistant messages */}
                  {message.role === 'assistant' && (
                    <div className="flex justify-start mt-1">
                      <button
                        onClick={() => speakText(message.content)}
                        disabled={isSpeaking}
                        className={`text-xs px-2 py-1 rounded-full transition-colors ${
                          isSpeaking 
                            ? 'text-gray-500 cursor-not-allowed' 
                            : 'text-gray-400 hover:text-blue-400 hover:bg-gray-800/50'
                        }`}
                        title="Speak this message"
                      >
                        <div className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                          </svg>
                          <span>Speak</span>
                        </div>
                      </button>
                    </div>
                  )}
                </div>
              ))}{isLoading && (
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
              )}              <div ref={messagesEndRef} />
              </div>
            </div>            {/* Chat input */}
            <div className="p-6 md:p-8 border-t border-gray-600 bg-gray-800/40">
              <div className="max-w-4xl mx-auto">
                <div className="flex space-x-4">                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 py-3 px-4 border border-gray-600 rounded-2xl bg-gray-800/60 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none shadow-sm text-base"
                  placeholder={isProcessingAudio ? "Processing audio..." : "Type a message or use voice..."}
                  rows={1}
                  style={{ minHeight: "48px" }}
                  disabled={isProcessingAudio}
                />
                  {/* Microphone button */}
                <button
                  onClick={isRecording ? stopRecording : startRecording}
                  disabled={isLoading || isProcessingAudio}
                  className={`p-3.5 rounded-2xl shadow-sm flex items-center justify-center transition-all duration-200 ${
                    isRecording 
                      ? 'bg-red-500 text-white hover:bg-red-600 border border-red-500 animate-pulse' 
                      : isProcessingAudio
                      ? 'bg-gray-700 text-gray-500 cursor-not-allowed border border-gray-700'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600 hover:text-white'
                  }`}
                  aria-label={isRecording ? "Stop recording" : "Start voice recording"}
                  title={isRecording ? "Stop recording" : "Click to speak"}
                >
                  {isProcessingAudio ? (
                    // Processing spinner
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : isRecording ? (
                    // Stop icon
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="6" width="12" height="12" rx="2"/>
                    </svg>
                  ) : (
                    // Microphone icon
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                      <line x1="12" y1="19" x2="12" y2="23"></line>
                      <line x1="8" y1="23" x2="16" y2="23"></line>
                    </svg>
                  )}
                </button>                {/* Send button */}
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim() || isRecording || isProcessingAudio}
                  className={`p-3.5 rounded-2xl shadow-sm flex items-center justify-center ${
                    isLoading || !input.trim() || isRecording || isProcessingAudio
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
              
              {/* Recording indicator */}
              {isRecording && (
                <div className="flex items-center justify-center mt-2 text-red-400 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span>Recording... Click stop when finished</span>
                  </div>
                </div>
              )}
                {/* Processing indicator */}
              {isProcessingAudio && (
                <div className="flex items-center justify-center mt-2 text-blue-400 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span>Converting speech to text...</span>
                  </div>
                </div>
              )}
                {/* Speaking indicator */}
              {isSpeaking && (
                <div className="flex items-center justify-center mt-2 text-green-400 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Speaking response...</span>
                  </div>
                </div>
              )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatComponent;
