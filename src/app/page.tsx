"use client";

import { useState, useEffect } from "react";
import FloatingNavigation from "@/components/FloatingNavigation";
import { 
  HeroSection,
  AboutSection,
  WorkSection,
  ExperienceSection,
  SkillsSection,
  CertificationsSection,
  LanguagesSection,
  PersonalStatementSection,
  ContactFooterSection
} from "@/components/sections";

export default function Home() {
  const [activeLink, setActiveLink] = useState('');
  
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
        const sections = ['home', 'about', 'work', 'experience', 'skills', 'certifications', 'languages', 'statement', 'contact'];
        let currentSection = '';
        
        // Set home as active when at the top
        if (window.scrollY < 100) {
          currentSection = 'home';
          setActiveLink('home');
          return;
        }
        
        // Special case for detecting if we're near the bottom of the page
        const scrollPosition = window.scrollY + window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight;
        
        // If we're at the bottom of the page, set contact as active
        if (scrollPosition >= pageHeight - 100) {
          setActiveLink('contact');
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
            
            // Improved section detection:
            // Consider a section active if it's occupying a significant portion of the viewport
            // or if the top of the section is within the top third of the viewport
            if (
              (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.3) || 
              (visibleHeight > window.innerHeight * 0.5)
            ) {
              currentSection = section;
            }
          }
        }
        
        // Check specifically for the languages section at its expected position
        const languagesSection = document.getElementById('languages');
        if (languagesSection) {
          const rect = languagesSection.getBoundingClientRect();
          // If the languages section is substantially in view
          if (
            (rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.3) || 
            (rect.top >= 0 && rect.top < window.innerHeight * 0.4)
          ) {
            currentSection = 'languages';
          }
        }
        
        // If we didn't find a section using the approach above, use the most visible one
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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800 overflow-hidden">
      {/* Background Design Elements */}
      <div className="fixed inset-0 -z-10 opacity-5">
        <div className="absolute top-20 left-1/4 w-40 h-40 rounded-full bg-blue-300 mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-1/4 w-60 h-60 rounded-full bg-purple-300 mix-blend-multiply filter blur-xl animate-float-delay"></div>
        <div className="absolute bottom-40 left-1/3 w-40 h-40 rounded-full bg-cyan-300 mix-blend-multiply filter blur-xl animate-float-slow"></div>
        <div className="absolute bottom-60 right-1/4 w-32 h-32 rounded-full bg-green-300 mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-1/4 left-1/2 w-24 h-24 rounded-full bg-yellow-300 opacity-30 mix-blend-multiply filter blur-xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-36 h-36 rounded-full bg-gradient-to-br from-indigo-300 to-purple-300 mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-2/3 left-1/5 w-28 h-28 rounded-full bg-gradient-to-tr from-blue-200 to-cyan-200 mix-blend-multiply filter blur-xl animate-float-delay"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgMHYyaC0ydi0yaDJ6bTIgMGgydjJoLTJ2LTJ6bS0yLTRoMnYyaC0ydi0yem00IDBoMnYyaC0ydi0yek0zNCAxOHYyaC0ydi0yaDJ6bTAgNGgydjJoLTJ2LTJ6bS00LTRoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yek0yNiAzNnYtMmgydjJoLTJ6bS0yLTR2LTJoMnYyaC0yem0wIDBoMnYyaC0ydi0yek0yNCAyMGgydjJoLTJ2LTJ6bTItOHY2aC02VjEyaDZ6bS02IDEyaDZ2LTZoLTZ2NnptLTIgOGg2di02aC02djZ6bS02LTRoNnYtNmgtNnY2em0wIDRoNnYtNmgtNnY2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      </div>
      
      {/* Floating Navigation Component */}
      <FloatingNavigation 
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />

      <main id="home" className="px-4 max-w-7xl mx-auto">
        {/* Welcome Hero Section */}
        <HeroSection setActiveLink={setActiveLink} />

        {/* About Section */}
        <AboutSection />

        {/* What I Build Section */}
        <WorkSection />

        {/* Experience Overview Section */}
        <ExperienceSection />

        {/* Technical Skills Section */}
        <SkillsSection />

        {/* Certifications Section */}
        <CertificationsSection />

        {/* Languages & Extras Section */}
        <LanguagesSection />

        {/* Personal Statement Section */}
        <PersonalStatementSection />
      </main>

      {/* Footer with Contact Information */}
      <ContactFooterSection />
    </div>
  );
}
