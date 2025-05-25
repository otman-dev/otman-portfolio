"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Icons } from './ui/icons';

// Navigation items with icons from our unified icon system
const navItems = [
  { id: 'home', label: 'Home', icon: <Icons.Home /> },
  { id: 'about', label: 'About', icon: <Icons.User /> },
  { id: 'work', label: 'Work', icon: <Icons.Briefcase /> },
  { id: 'projects', label: 'Projects', icon: <Icons.Layers /> },
  { id: 'experience', label: 'Experience', icon: <Icons.Award /> },
  { id: 'skills', label: 'Skills', icon: <Icons.Code /> },
  { id: 'certifications', label: 'Certs', icon: <Icons.Star /> },
  { id: 'competitions', label: 'Awards', icon: <Icons.Target /> },
  { id: 'education', label: 'Education', icon: <Icons.Book /> },
  { id: 'languages', label: 'Languages', icon: <Icons.Globe /> },
  { id: 'statement', label: 'Statement', icon: <Icons.Info /> },
  { id: 'blog', label: 'Blog', icon: <Icons.Blog /> },
  { id: 'contact', label: 'Contact', icon: <Icons.Phone /> }
];

interface FloatingNavigationProps {
  activeLink: string;
  setActiveLink: (link: string) => void;
  isChatOpen: boolean;
}

const FloatingNavigation = ({ activeLink, setActiveLink, isChatOpen }: FloatingNavigationProps) => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Handle client-side operations
  useEffect(() => {
    // Check if it's a mobile device
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      setIsMobile(mobile);
      return mobile;
    };
    
    checkMobile();
  }, []);
  // Handle nav link click with improved mobile support
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement> | React.TouchEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    
    // Get the element to scroll to
    const element = document.getElementById(section);
    if (!element) return;
    
    // Update active link immediately for better UX feedback
    setActiveLink(section);
    
    // Get element position for manual scrolling
    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.pageYOffset;
    const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
    
    // Use different scrolling method for mobile vs desktop
    if (isMobile) {
      // On mobile, use window.scrollTo for better performance and handling of deep scrolls
      try {
        // Try to use smooth scroll polyfill if available for better iOS compatibility
        window.scrollTo({
          top: middle,
          behavior: 'smooth'
        });
        
        // Add a fallback for iOS older versions where smooth scrolling might not work properly
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          setTimeout(() => {
            window.scrollTo(0, middle);
          }, 50);
        }
      } catch (error) {
        // Fallback for browsers that don't support smooth scrolling
        window.scrollTo(0, middle);
      }
    } else {
      // On desktop, use the standard scrollIntoView
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [isMobile, setActiveLink]);  return (
    <motion.div
      className={`fixed z-50 bottom-0 left-0 right-0 flex-col items-center px-4 pb-4 md:pb-6 pointer-events-none transition-opacity duration-300 ${
        isChatOpen ? 'hidden' : 'hidden md:flex'
      }`}
      initial={{ y: 100 }}
      animate={{ 
        y: isChatOpen ? 100 : 0,
        opacity: isChatOpen ? 0 : 1 
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full max-w-lg md:max-w-xl mx-auto pointer-events-auto">
        <motion.nav 
          className="bg-gray-900/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 flex justify-around items-center relative overflow-hidden px-3 py-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.3,
            type: "spring",
            stiffness: 300,
            damping: 25
          }}
          style={{ 
            touchAction: 'manipulation',
            WebkitTapHighlightColor: 'transparent'
          }}
        >
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 opacity-50" />
          
          {/* Progress indicator dots */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-1 left-1/2 transform -translate-x-1/2 flex space-x-1"
          >
            {navItems.map((item) => (
              <div
                key={`progress-${item.id}`}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  activeLink === item.id 
                    ? 'bg-blue-400 scale-125' 
                    : 'bg-gray-600 scale-100'
                }`}
              />
            ))}
          </motion.div>
          
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              onTouchStart={(e) => {
                e.stopPropagation();
              }}
              onTouchEnd={(e) => {
                e.preventDefault();
                handleNavClick(e, item.id);
              }}
              className={`relative group flex flex-col items-center justify-center transition-all duration-300 focus-visible rounded-xl p-1.5 ${
                activeLink === item.id 
                  ? 'text-blue-400' 
                  : 'text-gray-400 hover:text-blue-300'
              }`}
              aria-label={`Navigate to ${item.label} section`}
              aria-current={activeLink === item.id ? 'page' : undefined}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleNavClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, item.id);
                }
              }}
              style={{ touchAction: 'manipulation' }}
              animate={{
                scale: activeLink === item.id ? 1.2 : 1
              }}
              whileHover={{ 
                scale: 1.3,
                y: -2
              }}
            >
              <div className="relative z-10">
                {/* Icon */}
                <motion.div 
                  className="transition-all duration-300 text-base"
                >
                  {item.icon}
                </motion.div>
                
                {/* Hover indicator */}
                <motion.div
                  className="absolute -inset-3 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ zIndex: -2 }}
                />
              </div>
            </motion.a>
          ))}
        </motion.nav>
      </div>
    </motion.div>
  );
};

export default FloatingNavigation;
