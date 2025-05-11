"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FloatingNavigation from "@/components/FloatingNavigation";
import { FadeIn, SlideIn, ScaleIn } from "@/components/animations";

export default function Home() {
  const [activeLink, setActiveLink] = useState('');
  
  useEffect(() => {
    const handleScroll = () => {
      // Determine which section is active for nav highlighting
      const sections = ['home', 'about', 'work', 'experience', 'skills', 'certifications', 'contact'];
      let currentSection = '';
      
      // Set home as active when at the top
      if (window.scrollY < 100) {
        currentSection = 'home';
      }
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            currentSection = section;
          }
        }
      }
      setActiveLink(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800 overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="fixed inset-0 -z-10 opacity-5">
        <div className="absolute top-20 left-1/4 w-40 h-40 rounded-full bg-blue-300 mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-1/4 w-60 h-60 rounded-full bg-purple-300 mix-blend-multiply filter blur-xl animate-float-delay"></div>
        <div className="absolute bottom-40 left-1/3 w-40 h-40 rounded-full bg-cyan-300 mix-blend-multiply filter blur-xl animate-float-slow"></div>
        <div className="absolute bottom-60 right-1/4 w-32 h-32 rounded-full bg-green-300 mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-1/4 left-1/2 w-24 h-24 rounded-full bg-yellow-300 opacity-30 mix-blend-multiply filter blur-xl animate-float-slow"></div>
        
        {/* Additional elements for better visual effect */}
        <div className="absolute bottom-1/3 right-1/3 w-36 h-36 rounded-full bg-gradient-to-br from-indigo-300 to-purple-300 mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-2/3 left-1/5 w-28 h-28 rounded-full bg-gradient-to-tr from-blue-200 to-cyan-200 mix-blend-multiply filter blur-xl animate-float-delay"></div>
        
        {/* Grid pattern overlay for a tech feel */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgMHYyaC0ydi0yaDJ6bTIgMGgydjJoLTJ2LTJ6bS0yLTRoMnYyaC0ydi0yem00IDBoMnYyaC0ydi0yek0zNCAxOHYyaC0ydi0yaDJ6bTAgNGgydjJoLTJ2LTJ6bS00LTRoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yek0yNiAzNnYtMmgydjJoLTJ6bS0yLTR2LTJoMnYyaC0yem0wIDBoMnYyaC0ydi0yek0yNCAyMGgydjJoLTJ2LTJ6bTItOHY2aC02VjEyaDZ6bS02IDEyaDZ2LTZoLTZ2NnptLTIgOGg2di02aC02djZ6bS02LTRoNnYtNmgtNnY2em0wIDRoNnYtNmgtNnY2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      </div>
      
      {/* Floating Navigation Component */}
      <FloatingNavigation 
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />

      <main id="home" className="px-4 max-w-7xl mx-auto">
        
        {/* Welcome Hero Section */}
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

        {/* About Section - Full Height */}
        <section 
          id="about" 
          className="min-h-screen flex flex-col justify-center border-t border-gray-200 py-16 sm:py-20 px-4 sm:px-6"
          style={{minHeight: '100vh', paddingTop: 'calc(10vh + 20px)', paddingBottom: '10vh'}}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-7xl mx-auto w-full">
            {/* Left column - Profile Image & Personal Info */}
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
            
            {/* Right column - About Content */}
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

        {/* What I Build */}
        <section 
          id="work" 
          className="min-h-screen flex flex-col justify-center border-t border-gray-200 py-16 px-4 sm:px-6"
          style={{minHeight: '100vh', paddingTop: '10vh', paddingBottom: '10vh'}}
        >
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 inline-block border-b-2 border-blue-500 pb-1 text-center">What I Build</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl mx-auto">
              {/* Web & Data Engineering */}
              <div className="bg-gradient-to-br from-white to-blue-50 p-5 md:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4 bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center text-blue-600 mx-auto md:mx-0">🌐</div>
                <h3 className="text-xl font-semibold mb-3 text-center md:text-left">Web & Data Engineering</h3>
                <p className="text-gray-700 mb-4 text-center md:text-left">
                  Modern web applications with robust data pipelines and analytics capabilities.
                </p>
                <div className="flex flex-wrap gap-2 text-xs justify-center md:justify-start">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">React</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Next.js</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">TypeScript</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">PostgreSQL</span>
                </div>
              </div>
              
              {/* AI & Predictive Systems */}
              <div className="bg-gradient-to-br from-white to-purple-50 p-5 md:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4 bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center text-purple-600 mx-auto md:mx-0">🧠</div>
                <h3 className="text-xl font-semibold mb-3 text-center md:text-left">AI & Predictive Systems</h3>
                <p className="text-gray-700 mb-4 text-center md:text-left">
                  Intelligent systems that learn, adapt, and deliver insights from complex data.
                </p>
                <div className="flex flex-wrap gap-2 text-xs justify-center md:justify-start">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">TensorFlow</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">PyTorch</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">NLP</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Computer Vision</span>
                </div>
              </div>
              
              {/* Embedded & IoT Systems */}
              <div className="bg-gradient-to-br from-white to-green-50 p-5 md:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4 bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center text-green-600 mx-auto md:mx-0">⚙️</div>
                <h3 className="text-xl font-semibold mb-3 text-center md:text-left">Embedded & IoT Systems</h3>
                <p className="text-gray-700 mb-4 text-center md:text-left">
                  Connected hardware solutions with efficient processing and communication.
                </p>
                <div className="flex flex-wrap gap-2 text-xs justify-center md:justify-start">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">Arduino</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">Raspberry Pi</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">ESP32</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">C/C++</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Overview */}
        <section 
          id="experience" 
          className="min-h-screen flex flex-col justify-center border-t border-gray-200 py-16 px-4 sm:px-6"
          style={{minHeight: '100vh', paddingTop: '10vh', paddingBottom: '10vh'}}
        >
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 inline-block border-b-2 border-blue-500 pb-1 text-center">Experience Overview</h2>
            <div className="space-y-8 w-full max-w-4xl">
              {/* LS2N */}
              <div className="relative pl-8 md:pl-0 bg-white/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-blue-100"></div>
                <div className="md:ml-12 relative">
                  <div className="hidden md:flex absolute -left-12 w-10 h-10 rounded-full bg-blue-100 items-center justify-center shadow">
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  </div>
                  <h3 className="text-xl font-semibold flex items-center">
                    <span className="md:hidden mr-3 text-blue-500">●</span>
                    Research Engineer @ LS2N
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Developed and implemented advanced AI algorithms for predictive maintenance in industrial systems, resulting in <span className="text-blue-600 font-medium">30% reduction in downtime</span>. Used Python, TensorFlow, and time-series analysis.
                  </p>
                </div>
              </div>
              
              {/* Atlantic Dunes */}
              <div className="relative pl-8 md:pl-0 bg-white/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-blue-100"></div>
                <div className="md:ml-12 relative">
                  <div className="hidden md:flex absolute -left-12 w-10 h-10 rounded-full bg-blue-100 items-center justify-center shadow">
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  </div>
                  <h3 className="text-xl font-semibold flex items-center">
                    <span className="md:hidden mr-3 text-blue-500">●</span>
                    Data Engineer @ Atlantic Dunes
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Designed and deployed an end-to-end IoT monitoring system for smart agriculture, improving crop yield by <span className="text-blue-600 font-medium">20%</span>. Utilized ESP32, MQTT, AWS IoT Core, and visualization dashboards.
                  </p>
                </div>
              </div>
              
              {/* Nokia */}
              <div className="relative pl-8 md:pl-0 bg-white/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-blue-100"></div>
                <div className="md:ml-12 relative">
                  <div className="hidden md:flex absolute -left-12 w-10 h-10 rounded-full bg-blue-100 items-center justify-center shadow">
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  </div>
                  <h3 className="text-xl font-semibold flex items-center">
                    <span className="md:hidden mr-3 text-blue-500">●</span>
                    Full-Stack Developer @ Nokia
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Built telecommunications management interfaces integrating with backend systems, improving operator efficiency by <span className="text-blue-600 font-medium">25%</span>. Worked with React, Node.js, GraphQL, and WebSockets.
                  </p>
                </div>
              </div>
              
              {/* URCompetition */}
              <div className="relative pl-8 md:pl-0 bg-white/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-blue-100"></div>
                <div className="md:ml-12 relative">
                  <div className="hidden md:flex absolute -left-12 w-10 h-10 rounded-full bg-blue-100 items-center justify-center shadow">
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  </div>
                  <h3 className="text-xl font-semibold flex items-center">
                    <span className="md:hidden mr-3 text-blue-500">●</span>
                    Technical Lead @ URCompetition
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Led development of robotics control systems for international competitions, achieving <span className="text-blue-600 font-medium">top-5 placement</span>. Implemented computer vision systems and real-time control algorithms using ROS and C++.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section 
          id="skills" 
          className="min-h-screen flex flex-col justify-center border-t border-gray-200 py-16 px-4 sm:px-6"
          style={{minHeight: '100vh', paddingTop: '10vh', paddingBottom: '10vh'}}
        >
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 inline-block border-b-2 border-blue-500 pb-1 text-center">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-white to-blue-50 p-5 md:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="font-semibold mb-4 text-gray-800 flex items-center justify-center md:justify-start">
                <span className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-lg">Languages</span>
              </h3>
              <ul className="text-gray-700 space-y-3 pl-4 mt-4 flex flex-col items-center md:items-start">
                <li className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3"></span>
                  Python
                </li>
                <li className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3"></span>
                  JavaScript/TypeScript
                </li>
                <li className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3"></span>
                  C/C++
                </li>
                <li className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3"></span>
                  SQL
                </li>
                <li className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3"></span>
                  Java
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-white to-purple-50 p-5 md:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="font-semibold mb-4 text-gray-800 flex items-center justify-center md:justify-start">
                <span className="bg-purple-100 text-purple-600 p-3 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-lg">Web Development</span>
              </h3>
              <ul className="text-gray-700 space-y-3 pl-4 mt-4 flex flex-col items-center md:items-start">
                <li className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-purple-500 rounded-full mr-3"></span>
                  React, Next.js
                </li>
                <li className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-purple-500 rounded-full mr-3"></span>
                  Node.js, Express
                </li>
                <li className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-purple-500 rounded-full mr-3"></span>
                  RESTful APIs, GraphQL
                </li>
                <li className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-purple-500 rounded-full mr-3"></span>
                  HTML5, CSS3, Tailwind
                </li>
                <li className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-purple-500 rounded-full mr-3"></span>
                  UI/UX Design
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-white to-green-50 p-5 md:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="font-semibold mb-4 text-gray-800 flex items-center justify-center md:justify-start">
                <span className="bg-green-100 text-green-600 p-3 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                  </svg>
                </span>
                <span className="text-lg">Data Engineering</span>
              </h3>
              <ul className="text-gray-700 space-y-3 pl-4 mt-4 flex flex-col items-center md:items-start">
                <li className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-3"></span>
                  PostgreSQL, MongoDB
                </li>
                <li className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-3"></span>
                  ETL Pipelines
                </li>
                <li className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-3"></span>
                  Data Warehousing
                </li>
                <li className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-3"></span>
                  Big Data (Spark, Hadoop)
                </li>
                <li className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-3"></span>
                  Data Visualization
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-white to-red-50 p-5 md:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="font-semibold mb-4 text-gray-800 flex items-center justify-center md:justify-start">
                <span className="bg-red-100 text-red-600 p-3 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-lg">IoT & Embedded</span>
              </h3>
              <ul className="text-gray-700 space-y-3 pl-4 mt-4 flex flex-col items-center md:items-start">
                <li className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-red-500 rounded-full mr-3"></span>
                  Microcontrollers
                </li>
                <li className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-red-500 rounded-full mr-3"></span>
                  Sensor Integration
                </li>
                <li className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-red-500 rounded-full mr-3"></span>
                  MQTT, CoAP
                </li>
                <li className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-red-500 rounded-full mr-3"></span>
                  Real-time Systems
                </li>
                <li className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-red-500 rounded-full mr-3"></span>
                  PCB Design
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-white to-indigo-50 p-5 md:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="font-semibold mb-4 text-gray-800 flex items-center justify-center md:justify-start">
                <span className="bg-indigo-100 text-indigo-600 p-3 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-lg">Machine Learning</span>
              </h3>
              <ul className="text-gray-700 space-y-3 pl-4 mt-4 flex flex-col items-center md:items-start">
                <li className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full mr-3"></span>
                  TensorFlow, PyTorch
                </li>
                <li className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full mr-3"></span>
                  Computer Vision
                </li>
                <li className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full mr-3"></span>
                  NLP
                </li>
                <li className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full mr-3"></span>
                  Time Series Analysis
                </li>
                <li className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full mr-3"></span>
                  MLOps
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-3 text-gray-800 flex items-center">
                <span className="bg-yellow-100 text-yellow-600 p-2 rounded-md mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                  </svg>
                </span>
                Tools & Platforms
              </h3>
              <ul className="text-gray-700 space-y-2 pl-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Git, GitHub Actions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Docker, Kubernetes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  AWS, Azure, GCP
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Linux, Bash
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  CI/CD
                </li>
              </ul>
            </div>
          </div>
        </div>
        </section>

        {/* Certifications */}
        <section 
          id="certifications" 
          className="min-h-screen flex flex-col justify-center border-t border-gray-200 py-16 px-4 sm:px-6"
          style={{minHeight: '100vh', paddingTop: '10vh', paddingBottom: '10vh'}}
        >
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 inline-block border-b-2 border-blue-500 pb-1 text-center">Certifications</h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
              <div className="flex items-center bg-gradient-to-r from-blue-50 to-white px-5 py-4 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
                <svg className="w-6 h-6 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                </svg>
                <span className="font-medium">AWS Solutions Architect</span>
              </div>
              <div className="flex items-center bg-gradient-to-r from-purple-50 to-white px-5 py-4 rounded-xl border border-purple-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
                <svg className="w-6 h-6 mr-3 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                </svg>
                <span className="font-medium">TensorFlow Developer</span>
              </div>
              <div className="flex items-center bg-gradient-to-r from-indigo-50 to-white px-5 py-4 rounded-xl border border-indigo-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
                <svg className="w-6 h-6 mr-3 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
                <span className="font-medium">Microsoft Azure Data Engineer</span>
              </div>
              <div className="flex items-center bg-gradient-to-r from-green-50 to-white px-5 py-4 rounded-xl border border-green-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
                <svg className="w-6 h-6 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                </svg>
                <span className="font-medium">Google Cloud Professional</span>
              </div>
              <div className="flex items-center bg-gradient-to-r from-cyan-50 to-white px-5 py-4 rounded-xl border border-cyan-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
                <svg className="w-6 h-6 mr-3 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                </svg>
                <span className="font-medium">Cisco IoT Specialist</span>
              </div>
            </div>
          </div>
        </section>

        {/* Languages & Extras */}
        <section 
          id="languages" 
          className="min-h-screen flex flex-col justify-center border-t border-gray-200 py-16 px-4 sm:px-6"
          style={{minHeight: '100vh', paddingTop: '10vh', paddingBottom: '10vh'}}
        >
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 inline-block border-b-2 border-blue-500 pb-1 text-center">Languages & Extras</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-white p-5 md:p-6 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-all">
                <h3 className="font-semibold mb-4 text-gray-800 inline-flex items-center justify-center md:justify-start w-full md:w-auto">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-center md:text-left">Languages</span>
                </h3>
                <ul className="text-gray-700 space-y-3 flex flex-col items-center md:items-start">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    French (Native)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    English (Fluent)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Arabic (Fluent)
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-white p-5 md:p-6 rounded-lg border border-indigo-100 shadow-sm hover:shadow-md transition-all">
                <h3 className="font-semibold mb-4 text-gray-800 inline-flex items-center justify-center md:justify-start w-full md:w-auto">
                  <svg className="w-5 h-5 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z"></path>
                  </svg>
                  <span className="text-center md:text-left">Soft Skills</span>
                </h3>
                <ul className="text-gray-700 space-y-3 flex flex-col items-center md:items-start">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Agile Methodologies (Scrum, Kanban)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Team Leadership & Collaboration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Technical Documentation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Project Management
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Client Communication
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Statement */}
        <section 
          id="statement" 
          className="min-h-screen flex flex-col justify-center border-t border-gray-200 py-16 px-4 sm:px-6"
          style={{minHeight: '100vh', paddingTop: '10vh', paddingBottom: '10vh'}}
        >
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 inline-block border-b-2 border-blue-500 pb-1 text-center">Personal Statement</h2>
            
            <blockquote className="relative p-6 md:p-10 bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 max-w-3xl mx-auto w-full">
              <svg className="absolute h-12 w-12 md:h-16 md:w-16 text-blue-200 opacity-30 top-4 left-4 md:top-6 md:left-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="italic text-gray-700 relative z-10 pl-6 md:pl-10 pt-4 md:pt-6 text-base md:text-lg leading-relaxed">
                "I design with care, code with intent, and build with purpose. My work aspires to bring together the elegance of mathematics, the creativity of engineering, and the practicality of business needs to create solutions that make a difference."
              </p>
            </blockquote>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer 
        id="contact" 
        className="min-h-screen flex flex-col justify-center border-t border-gray-200 bg-gradient-to-b from-gray-50 to-gray-100"
        style={{minHeight: '100vh', paddingTop: '10vh', paddingBottom: '10vh'}}
      >
        <div className="max-w-screen-lg mx-auto px-4 flex-grow flex flex-col justify-center">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 inline-block text-transparent bg-clip-text">Let&apos;s Connect</h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Interested in collaborating or have a project in mind? Feel free to reach out through any of the channels below.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
            <a href="mailto:contact@otmanmouhib.com" className="w-full md:w-auto text-center bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 group">
              <span className="bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <div className="text-left">
                <div className="text-xs text-gray-500">Email me at</div>
                <div className="font-medium text-gray-800">contact@otmanmouhib.com</div>
              </div>
            </a>
            <a href="https://linkedin.com/in/otmanmouhib" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto text-center bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 group">
              <span className="bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </span>
              <div className="text-left">
                <div className="text-xs text-gray-500">Connect on</div>
                <div className="font-medium text-gray-800">LinkedIn Profile</div>
              </div>
            </a>
            <a href="/CV_OtmanMouhib.pdf" download className="w-full md:w-auto text-center bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 group">
              <span className="bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              <div className="text-left">
                <div className="text-xs text-gray-500">Get my</div>
                <div className="font-medium text-gray-800">Complete Resume</div>
              </div>
            </a>
          </div>
          
          <div className="text-center border-t border-gray-200 pt-8">
            <p className="text-gray-600 mb-4">
              Thank you for visiting my portfolio. I look forward to connecting with you!
            </p>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Otman Mouhib. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
