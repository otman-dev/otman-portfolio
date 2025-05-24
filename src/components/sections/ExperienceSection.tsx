"use client";

import React, { useState } from "react";
import { portfolioData } from "@/utils/portfolioKnowledgeBase";

const ExperienceSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  
  // Get experiences to display based on showAll state
  const displayExperiences = showAll 
    ? portfolioData.experiences 
    : portfolioData.experiences.slice(0, 6);

  return (
    <section 
      id="experience" 
      className="min-h-screen flex flex-col justify-center border-t border-gray-200 py-16 px-4 sm:px-6"
      style={{minHeight: '100vh', paddingTop: '10vh', paddingBottom: '10vh'}}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 inline-block border-b-2 border-blue-500 pb-1 text-center">Professional Experience</h2>
        <div className="space-y-8 w-full max-w-4xl">
          {displayExperiences.map((experience, index) => (
            <div key={experience.id} className="relative pl-8 md:pl-0 bg-white/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-blue-100"></div>
              <div className="md:ml-12 relative">
                <div className="hidden md:flex absolute -left-12 w-10 h-10 rounded-full bg-blue-100 items-center justify-center shadow">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold flex items-center">
                    <span className="md:hidden mr-3 text-blue-500">●</span>
                    {experience.title}
                  </h3>
                  <span className="text-sm text-gray-500 md:ml-4">{experience.duration}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center mb-3">
                  <p className="text-blue-600 font-medium">{experience.company}</p>
                  <span className="text-gray-500 text-sm md:ml-2">• {experience.location}</span>
                </div>
                <p className="text-gray-700 mb-4">{experience.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {experience.technologies.slice(0, 5).map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                  {experience.technologies.length > 5 && (
                    <span className="text-gray-500 text-xs">+{experience.technologies.length - 5} more</span>
                  )}
                </div>

                {/* Key achievements */}
                {experience.achievements && experience.achievements.length > 0 && (
                  <div className="mt-3">
                    <p className="text-sm font-medium text-gray-600 mb-1">Key Achievements:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {experience.achievements.slice(0, 2).map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
          {/* Show more/less button */}
        {portfolioData.experiences.length > 6 && (
          <div className="mt-8">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {showAll 
                ? `Show Less` 
                : `View All ${portfolioData.experiences.length} Experiences`
              }
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
