"use client";

import Image from "next/image";
import { FadeIn, SlideIn, ScaleIn } from "@/components/animations";
import { motion } from "framer-motion";
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen flex flex-col justify-center border-t border-gray-200 py-16 sm:py-20 px-4 sm:px-6"
      style={{minHeight: '100vh', paddingTop: 'calc(10vh + 20px)', paddingBottom: '10vh'}}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-7xl mx-auto w-full">
        <FadeIn className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-6" delay={0.2}>
          <ScaleIn delay={0.3}>
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-2xl transform -rotate-6 scale-105"></div>
              <div className="relative w-full h-full rounded-full border-8 border-white shadow-xl overflow-hidden">
                <Image
                  src="/profile_photo.jpg"
                  alt="Otman Mouhib"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 208px, (max-width: 1024px) 256px, 288px"
                  priority
                />
              </div>
            </div>
          </ScaleIn>
          
          <SlideIn className="text-center lg:text-left w-full max-w-md" delay={0.4}>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Otman Mouhib</h3>
            <p className="text-blue-700 font-medium mb-3">Computer Engineer · AI & Embedded Systems</p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mt-4">
              <motion.span 
                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05, backgroundColor: "#dbeafe" }}
                whileTap={{ scale: 0.95 }}
              >
                AI Research
              </motion.span>
              <motion.span 
                className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05, backgroundColor: "#e0e7ff" }}
                whileTap={{ scale: 0.95 }}
              >
                IoT Systems
              </motion.span>
              <motion.span 
                className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05, backgroundColor: "#f3e8ff" }}
                whileTap={{ scale: 0.95 }}
              >
                Full-Stack
              </motion.span>
              <motion.span 
                className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05, backgroundColor: "#ecfeff" }}
                whileTap={{ scale: 0.95 }}
              >
                Data Engineering
              </motion.span>
            </div>
          </SlideIn>
        </FadeIn>
        
        <SlideIn className="lg:col-span-7 space-y-6" delay={0.4} direction="left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block pb-2 border-b-2 border-blue-500">
            About Me
          </h2>
          
          <div className="space-y-4 text-gray-700">
            <FadeIn delay={0.5}>
              <p className="leading-relaxed text-lg">
                I&apos;m a polyvalent engineer with a foundation in AI research, IoT systems, full-stack development, and data engineering. My passion lies in building innovative solutions that bridge the gap between hardware and software.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.6}>
              <p className="leading-relaxed text-lg">
                With expertise spanning from embedded systems to cloud architecture, I enjoy tackling complex challenges that require both technical depth and creative problem-solving. I believe in building systems that are not just functional, but also scalable, maintainable, and user-focused.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.7}>
              <p className="leading-relaxed text-lg">
                My approach combines analytical thinking with a hands-on implementation style, allowing me to move seamlessly between conceptual design and practical development. I thrive in environments that encourage continuous learning and innovation.
              </p>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.8}>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <motion.a 
                href="#contact" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-center text-white px-6 py-3 rounded-lg transition-all"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a 
                href="/CV_OtmanMouhib.pdf" 
                download 
                className="bg-white border-2 border-gray-300 text-center px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, borderColor: "#3b82f6" }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download CV
              </motion.a>
            </div>
          </FadeIn>
        </SlideIn>
      </div>
    </section>
  );
};

export default AboutSection;
