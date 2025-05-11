"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the context type
type NavigationContextType = {
  activeLink: string;
  setActiveLink: (link: string) => void;
  scrollToSection: (sectionId: string) => void;
};

// Create the context with default values
const NavigationContext = createContext<NavigationContextType>({
  activeLink: '',
  setActiveLink: () => {},
  scrollToSection: () => {},
});

// Export a custom hook to use the navigation context
export const useNavigation = () => useContext(NavigationContext);

// The provider component that wraps the app
export function NavigationProvider({ children }: { children: ReactNode }) {
  const [activeLink, setActiveLink] = useState('');
  
  // Function to scroll to a specific section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveLink(sectionId);
    }
  };
  
  useEffect(() => {
    // Add a small debounce to scroll events for better performance
    let scrollTimeout: NodeJS.Timeout | null = null;
    
    const handleScroll = () => {
      // Clear previous timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Set a small timeout to debounce scroll events
      scrollTimeout = setTimeout(() => {
        // Determine which section is active for nav highlighting
        const sections = ['home', 'about', 'work', 'experience', 'skills', 'certifications', 'contact'];
        let currentSection = '';
        
        // Set home as active when at the top
        if (window.scrollY < 100) {
          currentSection = 'home';
          setActiveLink('home');
          return;
        }
        
        // Calculate which section takes up most of the viewport
        let maxVisibleSection = '';
        let maxVisibleHeight = 0;
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            
            // Calculate how much of the section is visible in the viewport
            const visibleTop = Math.max(0, rect.top);
            const visibleBottom = Math.min(window.innerHeight, rect.bottom);
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);
            
            // If this section has more visible height than previous max, update
            if (visibleHeight > maxVisibleHeight) {
              maxVisibleHeight = visibleHeight;
              maxVisibleSection = section;
            }
            
            // Alternative approach: If the element is near the top of the viewport
            if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) {
              currentSection = section;
            }
          }
        }
        
        // If we didn't find a section using the second approach, use the most visible one
        if (!currentSection && maxVisibleSection) {
          currentSection = maxVisibleSection;
        }
        
        if (currentSection) {
          setActiveLink(currentSection);
        }
      }, 100); // Small debounce delay
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);
  
  return (
    <NavigationContext.Provider value={{ activeLink, setActiveLink, scrollToSection }}>
      {children}
    </NavigationContext.Provider>
  );
}