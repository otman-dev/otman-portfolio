"use client";

import Image from "next/image";
import { FadeIn, SlideIn, ScaleIn } from "@/components/animations";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiCpu, FiCloud, FiLayers, FiDatabase } from "react-icons/fi";
import { personalData } from "@/utils/data/personal";
import { uiData } from "@/utils/data/ui";

// Icon mapping for core skills
const iconMap = {
  ai: <FiCpu className="text-blue-600" size={24} />,
  iot: <FiCloud className="text-indigo-600" size={24} />,
  web: <FiLayers className="text-purple-600" size={24} />,
  data: <FiDatabase className="text-cyan-600" size={24} />
};

const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Subtle parallax effect on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const contentY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  return (
    <section 
      id="about" 
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center relative border-t border-gray-200 py-16 sm:py-20 px-4 sm:px-6 overflow-hidden"
      style={{minHeight: '100vh', paddingTop: 'calc(10vh + 20px)', paddingBottom: '10vh'}}
    >      {/* Background decoration - removed circles for clean design */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Clean background */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full">        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              {uiData.about.heading}
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left column - Photo with modern frame */}
          <motion.div 
            className="lg:col-span-5 flex justify-center"
            style={{ y: imageY }}
          >            <div className="relative">
              <div className="group relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-700 shadow-xl">
                <Image
                  src="/profile_photo.jpg"
                  alt="Otman Mouhib"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 256px, 320px"
                  priority
                />                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-8 left-0 right-0 text-center text-white">                    <p className="font-bold text-xl">{uiData.about.profileOverlay.name}</p>
                    <p className="text-blue-200">{uiData.about.profileOverlay.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right column - Content with skills */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            style={{ y: contentY }}
          >            {/* Core skills with icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {uiData.about.coreSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className={`${skill.color} p-4 rounded-xl flex flex-col items-center text-center shadow-sm`}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <div className="mb-2">
                    {iconMap[skill.category as keyof typeof iconMap]}
                  </div>
                  <p className="font-medium text-gray-800">{skill.name}</p>
                </motion.div>
              ))}
            </div>
              {/* About me content in cards */}
            <div className="space-y-4">
              <SlideIn direction="left" delay={0.3}>                <motion.div
                  className="backdrop-blur-sm rounded-xl p-5 border border-gray-100 shadow-md"
                  whileHover={{ y: -5 }}
                >
                  <p className="text-lg text-gray-700">
                    {uiData.about.paragraphs[0]}
                  </p>
                </motion.div>
              </SlideIn>
              
              <SlideIn direction="left" delay={0.4}>                <motion.div
                  className="backdrop-blur-sm rounded-xl p-5 border border-blue-100 shadow-md"
                  whileHover={{ y: -5 }}
                >
                  <p className="text-lg text-gray-700">
                    {uiData.about.paragraphs[1]}
                  </p>
                </motion.div>
              </SlideIn>
            </div>
            
            {/* Call to action buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <motion.a 
                href="#contact" 
                className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-center text-white font-medium px-6 py-3 rounded-lg transition-all"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="absolute inset-0 flex">
                  <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full hover:animate-shimmer"></span>
                </div>                <span className="relative z-10">{uiData.about.ctaButtons.contact}</span>
              </motion.a>
              
              <motion.a 
                href="/CV_OtmanMouhib.pdf" 
                download 
                className="border-2 border-gray-200 hover:border-blue-400 text-center px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm"
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.97 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 group-hover:text-blue-700 transition-colors" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 group-hover:text-blue-700 font-medium transition-colors">{uiData.about.ctaButtons.cv}</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
