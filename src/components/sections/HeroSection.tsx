"use client";

import Image from "next/image";
import { motion, useSpring, useTransform, useScroll } from "framer-motion";
import { SlideIn, FadeIn, ScaleIn } from "@/components/animations";
import React, { useRef, useState, useEffect } from "react";
import { portfolioData } from "@/utils/portfolioKnowledgeBase";

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
      <div className="w-full max-w-7xl mx-auto perspective-1000">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          {/* Animated gradient background */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 opacity-80"
            style={{ 
              transform: `translate(${gradientPosition.x}px, ${gradientPosition.y}px)`,
              transition: 'transform 0.5s ease-out'
            }}
          />
          
          {/* Meteor effects */}
          <div className="absolute inset-0 overflow-hidden">
            {meteors.map(meteor => (
              <div 
                key={meteor.id}
                className="absolute h-0.5 w-32 bg-gradient-to-r from-blue-500 to-transparent opacity-50 animate-meteor"
                style={{ 
                  top: `${meteor.top}%`, 
                  left: `${meteor.left}%`,
                  animationDelay: `${meteor.delay}s`,
                  animationDuration: `${meteor.duration}s`,
                }}
              />
            ))}
          </div>
          
          {/* Blurred circles */}
          <div className="absolute top-20 left-1/4 w-40 h-40 rounded-full bg-blue-300 mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-40 right-1/4 w-60 h-60 rounded-full bg-purple-300 mix-blend-multiply filter blur-xl animate-float-delay"></div>
          <div className="absolute bottom-40 left-1/3 w-40 h-40 rounded-full bg-cyan-300 mix-blend-multiply filter blur-xl animate-float-slow"></div>
        </div>

        <motion.div 
          className="relative z-10 text-center lg:text-left"
          style={{ y, opacity }}
        >
          {/* Logo with 3D effect */}
          <div className="flex justify-center lg:justify-start mb-8 relative">
            <motion.div 
              className="group relative"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Multi-layered hover effect */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-indigo-500/20 to-purple-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700"
                initial={{ scale: 0.8, rotate: 0 }}
                animate={{
                  scale: [0.8, 1.1, 0.9, 1.05],
                  rotate: [0, 10, -5, 0],
                  opacity: [0, 0.8, 0.4, 0.6]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100"
                style={{ 
                  transform: `perspective(1000px) rotateX(${mouseY * 10}deg) rotateY(${-mouseX * 10}deg)`,
                }}
              />
              <motion.div
                style={{ 
                  transform: `perspective(1000px) rotateX(${mouseY * 5}deg) rotateY(${-mouseX * 5}deg)`,
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="relative">
                  {/* Ripple effect on hover */}
                  <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100">
                    <div className="absolute inset-0 rounded-full opacity-75 animate-ripple"></div>
                    <div className="absolute inset-0 rounded-full opacity-75 animate-ripple" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute inset-0 rounded-full opacity-75 animate-ripple" style={{ animationDelay: '2s' }}></div>
                  </div>
                  <Image 
                    src="/LogoMouhibOtman(1).svg"
                    alt="Otman Mouhib Logo"
                    width={130}
                    height={130}
                    className="relative z-10 animate-bounce-subtle"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* "Welcome" badge with shimmer effect */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6"
          >            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_100%] animate-shimmer text-white rounded-full px-6 py-2 text-sm font-medium shadow-lg shadow-blue-500/20">
              {portfolioData.ui.hero.welcomeBadge}
            </div>
          </motion.div>
          
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
              {portfolioData.ui.hero.mainHeading.split(' ').slice(0, 3).join(' ')} 
              <span className="relative block mt-2">
                {/* Animated underline effect */}
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                {/* Text with gradient and clip path animation */}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent relative inline-block">
                  {portfolioData.ui.hero.mainHeading.split(' ').slice(3).join(' ')}
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
            {portfolioData.ui.hero.description}
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
              {portfolioData.ui.hero.ctaButtons.primary}
            </motion.a>
            
            <motion.a 
              href="#contact"
              className="px-6 py-3 relative overflow-hidden group bg-white text-blue-600 border-2 border-blue-600 font-medium rounded-lg shadow-md transition-all duration-300 inline-block cursor-pointer"
              whileHover={{ scale: 1.05, borderColor: "#4338ca" }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                setActiveLink('contact');
              }}
            >              {/* Button hover background effect */}
              <span className="absolute inset-0 w-full h-full bg-blue-50 -translate-y-full group-hover:translate-y-0 transition-all duration-300"></span>
              <span className="relative">{portfolioData.ui.hero.ctaButtons.secondary}</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>      
      {/* Animated Tech Icons and Logo Elements with 3D parallax effect */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Translucent shapes with depth */}
        <motion.div
          initial={{ opacity: 0, rotate: -15 }}
          animate={{ opacity: 0.15, rotate: 0 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
          className="absolute top-[15%] right-[10%] w-32 h-32 md:w-64 md:h-64"
          style={{ transform: `translateX(${mouseX * -20}px) translateY(${mouseY * -20}px)` }}
        >
          <div className="w-full h-full rounded-full border-4 border-blue-300/30 animate-pulse-slow"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, rotate: 15 }}
          animate={{ opacity: 0.2, rotate: 0 }}
          transition={{ delay: 0.7, duration: 1.5, ease: "easeOut" }}
          className="absolute top-[18%] right-[12%] w-24 h-24 md:w-48 md:h-48"
          style={{ transform: `translateX(${mouseX * -10}px) translateY(${mouseY * -10}px)` }}
        >
          <div className="w-full h-full rounded-full border-4 border-indigo-400/20 animate-float-very-slow"></div>
        </motion.div>
        
        {/* Tech icons with distinct movement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-1/4 right-1/4 w-16 h-16 md:w-24 md:h-24 text-blue-500/40"
          style={{ transform: `translateX(${mouseX * 30}px) translateY(${mouseY * 30}px)` }}
        >
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
          </motion.svg>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute top-1/3 left-1/5 w-12 h-12 md:w-20 md:h-20 text-indigo-400/50"
          style={{ transform: `translateX(${mouseX * 25}px) translateY(${mouseY * 25}px)` }}
        >
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-10 8a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-7.5a1.5 1.5 0 1 1 2 1.415V15h-1v-1.085a1.5 1.5 0 0 1-1-1.415zm-.5-5.5h3v1h-3V7z"/>
          </motion.svg>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-1/4 left-1/3 w-14 h-14 md:w-20 md:h-20 text-purple-500/40"
          style={{ transform: `translateX(${mouseX * 20}px) translateY(${mouseY * 20}px)` }}
        >
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            whileHover={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 0.5 }}
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
          </motion.svg>
        </motion.div>
        
        {/* Mini logo echoes with cool effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ delay: 1.8, duration: 1.2 }}
          className="absolute bottom-1/3 right-[15%] w-16 h-16"
          style={{ transform: `translateX(${mouseX * 15}px) translateY(${mouseY * 15}px)` }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 0.9, 1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            <Image 
              src="/LogoMouhibOtman(1).svg"
              alt=""
              width={64}
              height={64}
              className="opacity-20"
            />
          </motion.div>        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
