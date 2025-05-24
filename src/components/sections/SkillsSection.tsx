"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/utils/data/skills";

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      ),
      skills: skillsData.programming,
      gradient: "from-blue-500 to-cyan-500",
      color: "blue"
    },
    {
      title: "Web Development",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      ),
      skills: skillsData.frameworks,
      gradient: "from-purple-500 to-pink-500",
      color: "purple"
    },
    {
      title: "AI & Machine Learning",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      ),
      skills: skillsData.aiMl,
      gradient: "from-indigo-500 to-purple-500",
      color: "indigo"
    },
    {
      title: "Data Engineering",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
          <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
          <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
        </svg>
      ),
      skills: [...skillsData.databases, ...skillsData.tools.slice(0, 3)],
      gradient: "from-emerald-500 to-teal-500",
      color: "emerald"
    },
    {
      title: "IoT & Embedded",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      skills: skillsData.embedded,
      gradient: "from-red-500 to-orange-500",
      color: "red"
    },
    {
      title: "Tools & Cloud",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
        </svg>
      ),
      skills: [...skillsData.tools.slice(3), ...skillsData.cloud],
      gradient: "from-yellow-500 to-amber-500",
      color: "yellow"
    }
  ];

  return (
    <section 
      id="skills" 
      className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit spanning multiple domains of modern technology
          </p>
        </motion.div>        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors">
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      className="flex items-center group/skill"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.gradient} rounded-full mr-3 group-hover/skill:scale-125 transition-transform`} />
                      <span className="text-gray-300 group-hover/skill:text-white transition-colors text-sm">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-white/3 to-transparent rounded-full blur-lg group-hover:scale-125 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-800/20 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning & Innovation
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. Always exploring new frameworks, 
              tools, and methodologies to stay at the forefront of innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <motion.span 
                className="bg-blue-500/10 border border-blue-500/20 text-blue-300 px-4 py-2 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                50+ Technologies
              </motion.span>
              <motion.span 
                className="bg-purple-500/10 border border-purple-500/20 text-purple-300 px-4 py-2 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                5+ Years Experience
              </motion.span>
              <motion.span 
                className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 px-4 py-2 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                Always Learning
              </motion.span>
            </div>          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
