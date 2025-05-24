"use client";

import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/utils/data/projects";
import { uiData } from "@/utils/data/ui";

const WorkSection: React.FC = () => {
  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { 
        gradient: "from-blue-500/20 to-cyan-500/20", 
        border: "border-blue-500/30",
        icon: "bg-gradient-to-br from-blue-500 to-cyan-500",
        tag: "bg-blue-500/10 border-blue-500/20 text-blue-300"
      },
      purple: { 
        gradient: "from-purple-500/20 to-pink-500/20", 
        border: "border-purple-500/30",
        icon: "bg-gradient-to-br from-purple-500 to-pink-500",
        tag: "bg-purple-500/10 border-purple-500/20 text-purple-300"
      },
      green: { 
        gradient: "from-emerald-500/20 to-teal-500/20", 
        border: "border-emerald-500/30",
        icon: "bg-gradient-to-br from-emerald-500 to-teal-500",
        tag: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section 
      id="work" 
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
            What I <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Build</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Crafting digital experiences across multiple domains with cutting-edge technologies
          </p>
        </motion.div>
        
        {/* Project Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uiData.work.categories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:${colors.border} transition-all duration-300 overflow-hidden`}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.icon} rounded-2xl text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {category.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {category.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className={`${colors.tag} border px-3 py-1 rounded-lg text-xs font-medium hover:scale-105 transition-transform cursor-default`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-tr from-white/3 to-transparent rounded-full blur-lg group-hover:scale-125 transition-transform duration-700" />
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-800/20 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in a Custom Solution?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Every project is unique. Let's discuss how I can bring your specific vision to life 
              with the perfect blend of technology and creativity.
            </p>
            <motion.button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Discuss Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
