"use client";

import { useState, useEffect } from "react";
import FloatingNavigation from "@/components/FloatingNavigation";
import ChatComponent from "@/components/ChatComponent";
import { 
  HeroSection,
  AboutSection,
  WorkSection,
  ProjectsSection,
  ExperienceSection,
  EducationSection,
  SkillsSection,
  CertificationsSection,
  CompetitionsSection,
  LanguagesSection,
  PersonalStatementSection,
  BlogSection,
  ContactFooterSection
} from "@/components/sections";

export default function Home() {
  const [activeLink, setActiveLink] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  useEffect(() => {
    // Add a small debounce to scroll events for better performance
    let scrollTimeout: NodeJS.Timeout | null = null;
    
    const handleScroll = () => {
      // Clear previous timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Set a small timeout to debounce scroll events
      scrollTimeout = setTimeout(() => {        // Determine which section is active for nav highlighting
        const sections = ['home', 'about', 'work', 'projects', 'experience', 'skills', 'certifications', 'competitions', 'education', 'languages', 'statement', 'blog', 'contact'];
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
  }, []);  return (
    <div className="min-h-screen text-gray-800 overflow-hidden">      {/* Chat Component */}
      <ChatComponent 
        isChatOpen={isChatOpen}
        setIsChatOpen={setIsChatOpen}
      />
      
      {/* Floating Navigation Component */}      <FloatingNavigation 
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        isChatOpen={isChatOpen}
      />

      <main className="px-4 max-w-7xl mx-auto">
        {/* Welcome Hero Section */}
        <HeroSection setActiveLink={setActiveLink} />

        {/* About Section */}
        <AboutSection />        {/* What I Build Section */}
        <WorkSection />

        {/* Featured Projects Section */}
        <ProjectsSection />

        {/* Experience Overview Section */}
        <ExperienceSection />

       

        {/* Technical Skills Section */}
        <SkillsSection />{/* Certifications Section */}
        <CertificationsSection />

        {/* Competitions & Awards Section */}
        <CompetitionsSection />
         {/* Education Section */}
        <EducationSection />
        {/* Languages & Extras Section */}
        <LanguagesSection />{/* Personal Statement Section */}
        <PersonalStatementSection />

        {/* Blog Section */}
        <BlogSection />
      </main>

      {/* Footer with Contact Information */}
      <ContactFooterSection />
    </div>
  );
}
