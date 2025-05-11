"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icons } from './ui/icons';

// Navigation items with icons from our unified icon system
const navItems = [
  { id: 'home', label: 'Home', icon: <Icons.Home /> },
  { id: 'about', label: 'About', icon: <Icons.User /> },
  { id: 'work', label: 'Work', icon: <Icons.Briefcase /> },
  { id: 'experience', label: 'Experience', icon: <Icons.Award /> },
  { id: 'skills', label: 'Skills', icon: <Icons.Code /> },
  { id: 'certifications', label: 'Certs', icon: <Icons.Star /> },
  { id: 'contact', label: 'Contact', icon: <Icons.Phone /> }
];

interface FloatingNavigationProps {
  activeLink: string;
  setActiveLink: (link: string) => void;
}

const FloatingNavigation = ({ activeLink, setActiveLink }: FloatingNavigationProps) => {
  const [isWideScreen, setIsWideScreen] = useState(false);
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
    
    // Check screen width for responsive design
    const checkScreenSize = () => {
      setIsWideScreen(window.innerWidth >= 640);
    };
    
    checkScreenSize();
    checkMobile();
    
    const handleResize = () => {
      checkScreenSize();
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
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
  }, [isMobile, setActiveLink]);
  return (
    <motion.div
      className="fixed z-50 bottom-0 left-0 right-0 hidden md:flex flex-col items-center px-4 pb-4 md:pb-6 pointer-events-none"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >{/* Subtle indicator line at top of navigation */}
      <motion.div 
        className="h-1 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent rounded-full mb-2 pointer-events-none animate-nav-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />
      <div className="w-full max-w-lg md:max-w-xl mx-auto pointer-events-auto">        <motion.nav 
          className="bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-gray-200/50 py-3 px-2 sm:px-4 flex justify-around items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: 0.3,
            type: "spring",
            stiffness: 300,
            damping: 25
          }}
          style={{ 
            touchAction: 'manipulation',
            WebkitTapHighlightColor: 'transparent'
          }}
        >
          {navItems.map((item) => (              <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              onTouchStart={(e) => {
                // Prevent any default touch behavior that might interfere
                e.stopPropagation();
              }}
              onTouchEnd={(e) => {
                // Handle touch end event for better mobile performance
                e.preventDefault();
                handleNavClick(e, item.id);
              }}
              className={`relative group flex flex-col items-center justify-center p-3 md:p-2 transition-all duration-300 focus-visible ${
                activeLink === item.id ? 'text-blue-600 scale-105' : 'text-gray-500 hover:text-blue-500 hover:scale-105'
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
            >
              <div className="relative">
                {/* Icon */}
                <motion.div 
                  className="text-xl"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {item.icon}
                </motion.div>
                
                {/* Active indicator */}
                {activeLink === item.id && (
                  <motion.div
                    className="absolute -inset-2.5 rounded-full bg-blue-100/70"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35
                    }}
                    style={{ zIndex: -1 }}
                  />
                )}
              </div>
              {/* Label - only visible on wider screens or on active item for mobile */}
              <AnimatePresence>
                {(activeLink === item.id || isWideScreen) && (
                  <motion.span
                    initial={{ opacity: 0, y: -5, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -5, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`text-xs mt-1 font-medium ${
                      activeLink === item.id ? 'block' : 'hidden sm:block'
                    }`}
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </a>
          ))}
        </motion.nav>
      </div>
    </motion.div>
  );
};

export default FloatingNavigation;
