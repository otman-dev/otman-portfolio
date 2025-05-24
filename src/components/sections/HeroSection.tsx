"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { personalData } from "@/utils/data/personal";
import { uiData } from "@/utils/data/ui";

interface HeroSectionProps {
  setActiveLink: (link: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setActiveLink }) => {
  return (
    <section 
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto w-full text-center">
        
        {/* Logo with Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <motion.div 
              className="w-32 h-32 lg:w-40 lg:h-40 relative"
              animate={{ 
                rotateY: [0, 360],
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              <Image 
                src="/LogoMouhibOtman(1).svg"
                alt="Otman Mouhib Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>            {/* Subtle glowing ring around logo */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-30 blur-2xl"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </div>
        </motion.div>

        {/* Main Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6 mb-8"
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.span 
              className="block text-2xl md:text-3xl lg:text-4xl font-normal text-gray-400 mb-4"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Welcome to my digital world
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              I'm Otman Mouhib
            </motion.span>
          </motion.h1>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-3 text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            {["Creator", "Innovator", "Problem Solver", "Tech Enthusiast"].map((word, index) => (
              <motion.span
                key={word}
                className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-300 border border-gray-700"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  borderColor: "rgba(59, 130, 246, 0.3)"
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Inspiring Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-12"
        >
          Transforming ideas into <span className="text-blue-400 font-semibold">extraordinary digital experiences</span>. 
          Let's build something <span className="text-purple-400 font-semibold">amazing</span> together!
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <motion.button
            onClick={() => {
              document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
              setActiveLink('work');
            }}
            className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl overflow-hidden transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              🚀 Explore My Work
            </span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              setActiveLink('contact');
            }}
            className="group px-10 py-5 border-2 border-gray-600 text-gray-300 font-bold text-lg rounded-2xl transition-all duration-300 hover:border-blue-400 hover:text-blue-400 hover:bg-blue-400/5"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-3">
              💬 Let's Connect
            </span>
          </motion.button>
        </motion.div>

        {/* Animated Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
          className="space-y-4"
        >
          <p className="text-gray-500 text-sm uppercase tracking-widest">Powered by</p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.1 }}
          >
            {["React", "Next.js", "TypeScript", "Node.js", "AI/ML", "Cloud"].map((tech, index) => (
              <motion.span
                key={tech}
                className="text-sm font-medium hover:text-blue-400 transition-colors cursor-default"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.3 + index * 0.1 }}
                whileHover={{ scale: 1.1, color: "#60a5fa" }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
