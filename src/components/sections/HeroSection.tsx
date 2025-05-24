"use client";

import Image from "next/image";
import { motion, useSpring, useTransform, useScroll } from "framer-motion";
import { SlideIn, FadeIn, ScaleIn } from "@/components/animations";
import React, { useRef, useState, useEffect } from "react";
import { personalData } from "@/utils/data/personal";
import { uiData } from "@/utils/data/ui";

interface HeroSectionProps {
  setActiveLink: (link: string) => void;
}

// Custom CSS for 3D perspective
const perspectiveStyle = {
  perspective: "1000px",
  transformStyle: "preserve-3d"
};

const HeroSection: React.FC<HeroSectionProps> = ({ setActiveLink }) => {
  // Scroll-based animations
  const { scrollY } = useScroll();
  const sectionRef = useRef<HTMLElement>(null);
  
  // Create spring animation for smoother transitions
  const springConfig = { damping: 15, stiffness: 100 };
  const y = useSpring(
    useTransform(scrollY, [0, 300], [0, -100]), 
    springConfig
  );
  
  const opacity = useSpring(
    useTransform(scrollY, [0, 300], [1, 0]), 
    springConfig
  );

  // Mouse tracking for 3D perspective effect
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseXPercent = (e.clientX - rect.left) / rect.width;
    const mouseYPercent = (e.clientY - rect.top) / rect.height;
    setMouseX(mouseXPercent * 2 - 1); // -1 to 1
    setMouseY(mouseYPercent * 2 - 1); // -1 to 1
  };
    // Animated gradient background position
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const moveGradient = () => {
      setGradientPosition({
        x: mouseX * 20,
        y: mouseY * 20
      });
    };
    moveGradient();
  }, [mouseX, mouseY]);
  // Define meteor type
  interface Meteor {
    id: number;
    top: number;
    left: number;
    duration: number;
    delay: number;
  }
  
  // Create meteor effect elements
  const [meteors, setMeteors] = useState<Meteor[]>([]);
  
  // Generate meteors only on the client side to avoid hydration mismatch
  useEffect(() => {
    const generatedMeteors = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5
    }));
    setMeteors(generatedMeteors);
  }, []);
  
  return (
    <section 
      id="home"
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-center py-16 px-4 sm:px-6 relative overflow-hidden" 
      onMouseMove={handleMouseMove}
    >
      {/* 3D perspective wrapper */}
      <div className="w-full max-w-7xl mx-auto perspective-1000">        {/* Clean background - removed all decorative elements */}
        <div className="absolute inset-0 -z-10">
          {/* Background now uses global CSS background */}
        </div>

        <motion.div 
          className="relative z-10 text-center lg:text-left"
          style={{ y, opacity }}
        >          {/* Logo with simple hover effect */}
          <div className="flex justify-center lg:justify-start mb-8 relative">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image 
                src="/LogoMouhibOtman(1).svg"
                alt="Otman Mouhib Logo"
                width={130}
                height={130}
                className="relative z-10"
                priority
              />
            </motion.div>
          </div>
          
          {/* Main heading with 3D effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ 
              transformStyle: "preserve-3d",
              transform: `perspective(1000px) rotateX(${mouseY * 2}deg) rotateY(${-mouseX * 2}deg)`
            }}
          >            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              {uiData.hero.mainHeading.split(' ').slice(0, 3).join(' ')} 
              <span className="relative block mt-2">
                {/* Animated underline effect */}
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                {/* Text with gradient and clip path animation */}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent relative inline-block">
                  {uiData.hero.mainHeading.split(' ').slice(3).join(' ')}
                </span>
              </span>
            </h1>
          </motion.div>
            {/* Description paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-8"
          >
            {uiData.hero.description}
          </motion.p>
          
          {/* CTA buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <motion.a 
              href="#work"
              className="px-6 py-3 relative overflow-hidden group bg-blue-600 text-white font-medium rounded-lg shadow-lg transition-all duration-300 inline-block cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                setActiveLink('work');
              }}
            >              {/* Button hover shine effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-700 opacity-30"></span>
              {uiData.hero.ctaButtons.primary}
            </motion.a>
            
            <motion.a 
              href="#contact"
              className="px-6 py-3 relative overflow-hidden group border-2 border-blue-600 text-blue-600 font-medium rounded-lg shadow-md transition-all duration-300 inline-block cursor-pointer"
              whileHover={{ scale: 1.05, borderColor: "#4338ca" }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                setActiveLink('contact');
              }}
            >              {/* Button hover background effect */}
              <span className="absolute inset-0 w-full h-full backdrop-blur-sm opacity-10 -translate-y-full group-hover:translate-y-0 transition-all duration-300"></span>
              <span className="relative">{uiData.hero.ctaButtons.secondary}</span>
            </motion.a>
          </motion.div>
        </motion.div>      </div>
    </section>
  );
};

export default HeroSection;
