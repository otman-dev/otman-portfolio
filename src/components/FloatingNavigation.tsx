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
  { id: 'languages', label: 'Languages', icon: <Icons.Globe /> },
  { id: 'statement', label: 'Statement', icon: <Icons.Info /> },
  { id: 'contact', label: 'Contact', icon: <Icons.Phone /> }
];

interface FloatingNavigationProps {
  activeLink: string;
  setActiveLink: (link: string) => void;
}

const FloatingNavigation = ({ activeLink, setActiveLink }: FloatingNavigationProps) => {
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
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

  // Handle scroll detection for compact mode
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only trigger compact mode if user is actively scrolling (not just at top)
      if (Math.abs(currentScrollY - lastScrollY) > 5) {
        setIsScrolling(true);
        setLastScrollY(currentScrollY);
        
        // Clear existing timeout
        clearTimeout(scrollTimeout);
        
        // Set new timeout to exit scrolling state
        scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
        }, 1500); // Stay compact for 1.5 seconds after scrolling stops
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollY]);
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
  }, [isMobile, setActiveLink]);  // Determine if nav should be compact
  const isCompact = isScrolling && !isHovered;
  
  return (
    <motion.div
      className="fixed z-50 bottom-0 left-0 right-0 hidden md:flex flex-col items-center px-4 pb-4 md:pb-6 pointer-events-none"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full max-w-lg md:max-w-xl mx-auto pointer-events-auto">
        <motion.nav 
          className="bg-gray-900/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 flex justify-around items-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            width: isCompact ? "auto" : "100%",
            paddingTop: isCompact ? "8px" : "16px",
            paddingBottom: isCompact ? "8px" : "16px",
            paddingLeft: isCompact ? "12px" : "24px",
            paddingRight: isCompact ? "12px" : "24px"
          }}
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
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 opacity-50" />
          
          {/* Subtle glow effect */}
          <motion.div 
            className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-sm transition-opacity duration-500"
            animate={{ opacity: isHovered ? 0.3 : 0 }}
          />
          
          {/* Progress indicator when compact */}
          {isCompact && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
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
          )}
          
          {navItems.map((item, index) => (
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
              className={`relative group flex flex-col items-center justify-center transition-all duration-300 focus-visible rounded-xl ${
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
                padding: isCompact ? "6px" : "12px 8px",
                scale: activeLink === item.id ? (isCompact ? 1.2 : 1.05) : 1
              }}
              whileHover={{ 
                scale: isCompact ? 1.3 : 1.15,
                y: isCompact ? -2 : -3
              }}
            >
              <div className="relative z-10">
                {/* Icon */}
                <motion.div 
                  className="transition-all duration-300"
                  animate={{
                    fontSize: isCompact ? "16px" : "20px"
                  }}
                >
                  {item.icon}
                </motion.div>
                
                {/* Active indicator with gradient - hidden when compact */}
                {activeLink === item.id && !isCompact && (
                  <motion.div
                    className="absolute -inset-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35
                    }}
                    style={{ zIndex: -1 }}
                  />
                )}
                
                {/* Hover indicator */}
                <motion.div
                  className="absolute -inset-3 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ zIndex: -2 }}
                />
              </div>
              
              {/* Label - hidden when compact, shown when expanded */}
              <AnimatePresence>
                {!isCompact && (activeLink === item.id || isWideScreen || isHovered) && (
                  <motion.span
                    initial={{ opacity: 0, y: -5, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -5, height: 0 }}
                    transition={{ duration: 0.2, delay: isHovered ? 0.1 : 0 }}
                    className={`text-xs mt-1.5 font-medium relative z-10 ${
                      activeLink === item.id 
                        ? 'block text-blue-300' 
                        : 'hidden sm:block text-gray-500 group-hover:text-gray-300'
                    }`}
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
              
              {/* Subtle dot indicator for active state - only when not compact */}
              {activeLink === item.id && !isCompact && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full"
                />
              )}
            </motion.a>
          ))}
          
          {/* Bottom accent line - hidden when compact */}
          {!isCompact && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent rounded-full"
            />
          )}
        </motion.nav>
      </div>
    </motion.div>
  );
};

export default FloatingNavigation;
