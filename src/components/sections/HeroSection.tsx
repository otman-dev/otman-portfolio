"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SlideIn, FadeIn } from "@/components/animations";
import React from "react";

interface HeroSectionProps {
  setActiveLink: (link: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setActiveLink }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-16 px-4 sm:px-6 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <div className="relative z-10 text-center lg:text-left">
          <SlideIn delay={0.1}>
            <motion.div
              className="flex justify-center lg:justify-start mb-8 relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-indigo-500/20 to-purple-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition duration-700"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              />
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image 
                  src="/LogoMouhibOtman(1).svg"
                  alt="Otman Mouhib Logo"
                  width={130}
                  height={130}
                  className="animate-float-slow relative z-10"
                  priority
                />
              </motion.div>
            </motion.div>
          </SlideIn>
          
          <SlideIn className="mb-6" delay={0.2}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-4"
            >
              Welcome to my digital space
            </motion.div>
          </SlideIn>
          
          <SlideIn delay={0.4} direction="right">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Transforming Ideas into 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 block mt-2">
                Digital Reality
              </span>
            </h1>
          </SlideIn>
          
          <FadeIn delay={0.6}>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-8">
              I create intelligent systems where hardware meets software, and innovation meets implementation.
            </p>
          </FadeIn>
          
          <SlideIn delay={0.8} direction="up">
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a 
                href="#work"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-200/50 transition-all duration-300 inline-block cursor-pointer"
                whileHover={{ scale: 1.05, backgroundColor: "#2563EB" }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                  setActiveLink('work');
                }}
              >
                Explore My Work
              </motion.a>
              <motion.a 
                href="#contact"
                className="px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 font-medium rounded-lg shadow-md hover:shadow-blue-100/50 transition-all duration-300 inline-block cursor-pointer"
                whileHover={{ scale: 1.05, backgroundColor: "#F0F9FF" }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setActiveLink('contact');
                }}
              >
                Get in Touch
              </motion.a>
            </div>
          </SlideIn>
        </div>
      </div>
      
      {/* Animated Tech Icons and Logo Elements (floating in background) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Logo-inspired decorative elements */}
        <motion.div
          initial={{ opacity: 0, rotate: -15 }}
          animate={{ opacity: 0.15, rotate: 0 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
          className="absolute top-[15%] right-[10%] w-32 h-32 md:w-64 md:h-64"
        >
          <div className="w-full h-full rounded-full border-4 border-blue-300/30 animate-pulse-slow"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, rotate: 15 }}
          animate={{ opacity: 0.2, rotate: 0 }}
          transition={{ delay: 0.7, duration: 1.5, ease: "easeOut" }}
          className="absolute top-[18%] right-[12%] w-24 h-24 md:w-48 md:h-48"
        >
          <div className="w-full h-full rounded-full border-4 border-indigo-400/20 animate-float-very-slow"></div>
        </motion.div>
        
        {/* Tech icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-1/4 right-1/4 w-16 h-16 md:w-24 md:h-24 text-blue-500/40"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute top-1/3 left-1/5 w-12 h-12 md:w-20 md:h-20 text-indigo-400/50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-10 8a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-7.5a1.5 1.5 0 1 1 2 1.415V15h-1v-1.085a1.5 1.5 0 0 1-1-1.415zm-.5-5.5h3v1h-3V7z"/></svg>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-1/4 left-1/3 w-14 h-14 md:w-20 md:h-20 text-purple-500/40"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
        </motion.div>
        
        {/* Mini logo echoes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ delay: 1.8, duration: 1.2 }}
          className="absolute bottom-1/3 right-[15%] w-16 h-16"
        >
          <Image 
            src="/LogoMouhibOtman(1).svg"
            alt=""
            width={64}
            height={64}
            className="opacity-20 animate-float-delay"
          />
        </motion.div>
      </div>
      
      {/* Scrolling indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
