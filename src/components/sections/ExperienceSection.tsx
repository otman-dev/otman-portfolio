"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { experiencesData } from "@/utils/data/experiences";

const ExperienceSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
    // Get experiences to display based on showAll state
  const displayExperiences = showAll 
    ? experiencesData 
    : experiencesData.slice(0, 6);
  return (
    <section 
      id="experience" 
      className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A journey of innovation, leadership, and technical excellence
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-6 mb-12">
          {displayExperiences.map((experience, index) => (
            <motion.div 
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                
                {/* Left Content */}
                <div className="flex-1 space-y-4">
                  {/* Title and Duration */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {experience.title}
                    </h3>
                    <span className="text-sm font-medium text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">
                      {experience.duration}
                    </span>
                  </div>

                  {/* Company and Location */}
                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {experience.company}
                    </span>
                    <span className="text-gray-400 text-sm">
                      📍 {experience.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Key Achievements */}
                  {experience.achievements && experience.achievements.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-blue-400">Key Achievements:</p>
                      <ul className="space-y-1">
                        {experience.achievements.slice(0, 2).map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-gray-300 text-sm">
                            <span className="text-blue-400 mr-2 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Right Content - Technologies */}
                <div className="lg:w-80 space-y-3">
                  <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.slice(0, 8).map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-blue-500/10 border border-blue-500/20 text-blue-300 px-3 py-1 rounded-lg text-xs font-medium hover:bg-blue-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {experience.technologies.length > 8 && (
                      <span className="text-gray-500 text-xs font-medium bg-gray-700/30 px-3 py-1 rounded-lg">
                        +{experience.technologies.length - 8} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {experiencesData.length > 6 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.button 
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {showAll 
                ? 'Show Less Experiences' 
                : `View All ${experiencesData.length} Experiences`
              }
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
