"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUser, FiBriefcase, FiCode, FiAward, FiPhone, FiHome, FiStar } from 'react-icons/fi';

// Navigation items with icons
const navItems = [
  { id: 'home', label: 'Home', icon: <FiHome /> },
  { id: 'about', label: 'About', icon: <FiUser /> },
  { id: 'work', label: 'Work', icon: <FiBriefcase /> },
  { id: 'experience', label: 'Experience', icon: <FiAward /> },
  { id: 'skills', label: 'Skills', icon: <FiCode /> },
  { id: 'certifications', label: 'Certs', icon: <FiStar /> },
  { id: 'contact', label: 'Contact', icon: <FiPhone /> }
];

interface FloatingNavigationProps {
  activeLink: string;
  setActiveLink: (link: string) => void;
}

const FloatingNavigation = ({ activeLink, setActiveLink }: FloatingNavigationProps) => {
  const [isWideScreen, setIsWideScreen] = useState(false);
  
  // Handle client-side operations
  useEffect(() => {
    // Check screen width for responsive design
    setIsWideScreen(window.innerWidth >= 640);
    
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 640);
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Handle nav link click
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    
    // Scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(section);
    }
  };
    return (    <motion.div
      className="fixed z-50 bottom-0 left-0 right-0 flex flex-col items-center px-4 pb-4 md:pb-6 pointer-events-none"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >      {/* Subtle indicator line at top of navigation */}
      <motion.div 
        className="h-1 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent rounded-full mb-2 pointer-events-none animate-nav-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />
      <div className="w-full max-w-lg md:max-w-xl mx-auto pointer-events-auto">
        <motion.nav 
          className="bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-gray-200/50 py-3 px-4 flex justify-around items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: 0.3,
            type: "spring",
            stiffness: 300,
            damping: 25
          }}
        >
          {navItems.map((item) => (              <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`relative group flex flex-col items-center justify-center p-2 transition-all duration-300 focus-visible ${
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
