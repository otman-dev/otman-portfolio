"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiMail, FiDownload, FiChevronDown, FiCode, FiBriefcase, FiUser, FiAward, FiPhone } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn, FaReact, FaPython, FaTools } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

// Navigation items with icons for a better visual experience
const navItems = [
  { id: 'about', label: 'About', icon: <FiUser className="w-4 h-4" /> },
  { id: 'work', label: 'Work', icon: <FiBriefcase className="w-4 h-4" /> },
  { id: 'skills', label: 'Skills', icon: <FiCode className="w-4 h-4" /> },
  { id: 'experience', label: 'Experience', icon: <FiAward className="w-4 h-4" /> },
  { id: 'contact', label: 'Contact', icon: <FiPhone className="w-4 h-4" /> }
];

interface NavigationProps {
  activeLink: string;
  scrolled: boolean;
  setActiveLink: (link: string) => void;
}

const Navigation = ({ activeLink, scrolled, setActiveLink }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Close mobile menu on window resize and handle header visibility based on scroll
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    // Show/hide header based on scroll direction
    const controlNavbar = () => {
      if (typeof window !== 'undefined') { 
        if (window.scrollY > 100) { // Only hide when scrolled down a bit
          if (window.scrollY > lastScrollY) { // Scrolling down
            setIsVisible(false); 
          } else { // Scrolling up
            setIsVisible(true);  
          }
        } else {
          setIsVisible(true); // Always show at top
        }
        setLastScrollY(window.scrollY); 
      }
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', controlNavbar);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [mobileMenuOpen, lastScrollY]);

  // Handle nav link click
  const handleNavClick = (section: string) => {
    setActiveLink(section);
    setMobileMenuOpen(false);
  };
  return (
    <motion.header 
      ref={headerRef}
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        scrolled ? 'py-2 bg-white/95 backdrop-blur-md shadow-sm' : 'py-4 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
            className="flex items-center group"
          >
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-display group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:via-indigo-600 group-hover:to-blue-600 transition-all duration-500">
                Otman Mouhib
              </h1>              <p className="text-xs md:text-sm text-gray-600 font-light mt-0.5 tracking-wide">
                Computer Engineer · AI & Embedded Systems
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`} 
                    onClick={() => handleNavClick(item.id)}                    className={`text-sm font-medium relative px-3 py-2 rounded-full transition-all duration-200 hover:text-blue-600 flex items-center gap-1.5 ${
                      activeLink === item.id 
                        ? 'text-blue-600 bg-blue-50/80'
                        : 'text-gray-700 hover:bg-gray-50/80'
                    }`}
                  >
                    {item.icon}
                    {item.label}
                    {activeLink === item.id && (
                      <motion.span
                        className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600 rounded-full"
                        layoutId="navbar-indicator"
                        transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <motion.a 
              href="mailto:contact@otmanmouhib.com" 
              className="text-gray-600 hover:text-blue-600 transition-all p-2 rounded-full hover:bg-blue-50/80 hover:scale-110"
              aria-label="Email"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/otmanmouhib" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-all p-2 rounded-full hover:bg-blue-50/80"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedinIn className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="https://github.com/otmanmouhib" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-all p-2 rounded-full hover:bg-blue-50/80"
              aria-label="GitHub"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="/CV_OtmanMouhib.pdf" 
              download
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full hover:shadow-md hover:shadow-blue-200 transition-all text-sm font-medium"
              aria-label="Download CV"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="w-4 h-4" />
              <span>CV</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-700 hover:text-blue-600 p-2 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiX className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMenu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 py-3 space-y-3">
              <nav className="grid gap-y-2 py-4">
                {navItems.map((item) => (
                  <motion.a 
                    key={item.id}
                    href={`#${item.id}`} 
                    onClick={() => handleNavClick(item.id)}                    className={`px-3 py-3 text-sm font-medium rounded-md flex items-center gap-3 ${
                      activeLink === item.id 
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-800 hover:bg-gray-50'
                    }`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className={`p-2 rounded-md ${activeLink === item.id ? 'bg-blue-100' : 'bg-gray-100'}`}>
                      {item.icon}
                    </span>
                    {item.label}
                  </motion.a>
                ))}
              </nav>
              
              <div className="grid grid-cols-4 gap-2 pt-4 pb-5 border-t border-gray-100">
                <motion.a 
                  href="mailto:contact@otmanmouhib.com" 
                  className="flex flex-col items-center justify-center p-3 text-gray-700 hover:text-blue-600 transition-all rounded-md hover:bg-blue-50"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiMail className="w-5 h-5 mb-1" />
                  <span className="text-xs">Email</span>
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/otmanmouhib" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center justify-center p-3 text-gray-700 hover:text-blue-600 transition-all rounded-md hover:bg-blue-50"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedinIn className="w-5 h-5 mb-1" />
                  <span className="text-xs">LinkedIn</span>
                </motion.a>
                <motion.a 
                  href="https://github.com/otmanmouhib" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center justify-center p-3 text-gray-700 hover:text-blue-600 transition-all rounded-md hover:bg-blue-50"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="w-5 h-5 mb-1" />
                  <span className="text-xs">GitHub</span>
                </motion.a>
                <motion.a 
                  href="/CV_OtmanMouhib.pdf" 
                  download 
                  className="flex flex-col items-center justify-center p-3 text-gray-700 hover:text-blue-600 transition-all rounded-md hover:bg-blue-50"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiDownload className="w-5 h-5 mb-1" />
                  <span className="text-xs">CV</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;
