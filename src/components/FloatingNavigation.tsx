"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUser, FiBriefcase, FiCode, FiAward, FiPhone, FiHome, FiStar } from 'react-icons/fi';

// Navigation items with icons
const navItems = [
  { id: 'home', label: 'Home', icon: <FiHome /> },
  { id: 'about', label: 'About', icon: <FiUser /> },
  { id: 'work', label: 'Work', icon: <FiBriefcase /> },
  { id: 'skills', label: 'Skills', icon: <FiCode /> },
  { id: 'certifications', label: 'Certs', icon: <FiStar /> },
  { id: 'experience', label: 'Experience', icon: <FiAward /> },
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
    return (
    <motion.div
      className="fixed z-50 bottom-0 left-0 right-0 flex justify-center px-4 pb-4 md:pb-6 pointer-events-none"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full max-w-lg md:max-w-xl mx-auto pointer-events-auto">
        <nav className="bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-gray-200 py-3 px-4 flex justify-around items-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`relative group flex flex-col items-center justify-center p-2 ${
                activeLink === item.id ? 'text-blue-600' : 'text-gray-500 hover:text-blue-500'
              }`}
              aria-label={item.label}
            >
              <div className="relative">
                {/* Icon */}
                <div className="text-xl">
                  {item.icon}
                </div>
                
                {/* Active indicator */}
                {activeLink === item.id && (
                  <motion.div
                    className="absolute -inset-1.5 rounded-full bg-blue-100/70"
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
        </nav>
      </div>
    </motion.div>
  );
};

export default FloatingNavigation;
