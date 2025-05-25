"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/utils/data/projects";
import { Icons } from "@/components/ui/icons";

const ProjectsSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  // Display 6 projects initially, all when expanded
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 6);
  const getCategoryIcon = (category: string) => {
    const iconMap: Record<string, React.ReactElement> = {
      "AI/ML": <Icons.CPU className="w-5 h-5" />,
      "IoT": <Icons.Server className="w-5 h-5" />,
      "Healthcare AI": <Icons.CPU className="w-5 h-5" />,
      "NLP": <Icons.Code className="w-5 h-5" />,
      "Privacy AI": <Icons.CPU className="w-5 h-5" />,
      "Computer Vision": <Icons.CPU className="w-5 h-5" />,
      "Robotics": <Icons.Server className="w-5 h-5" />,
      "Industrial Software": <Icons.Database className="w-5 h-5" />,
      "Web Development": <Icons.Code className="w-5 h-5" />
    };
    return iconMap[category] || <Icons.Code className="w-5 h-5" />;
  };

  const getColorClasses = (category: string) => {
    const colorMap: Record<string, any> = {
      "AI/ML": { 
        gradient: "from-purple-500/20 to-pink-500/20", 
        border: "border-purple-500/30",
        icon: "bg-gradient-to-br from-purple-500 to-pink-500",
        tag: "bg-purple-500/10 border-purple-500/20 text-purple-300"
      },
      "IoT": { 
        gradient: "from-emerald-500/20 to-teal-500/20", 
        border: "border-emerald-500/30",
        icon: "bg-gradient-to-br from-emerald-500 to-teal-500",
        tag: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
      },
      "Healthcare AI": { 
        gradient: "from-red-500/20 to-orange-500/20", 
        border: "border-red-500/30",
        icon: "bg-gradient-to-br from-red-500 to-orange-500",
        tag: "bg-red-500/10 border-red-500/20 text-red-300"
      },
      "Computer Vision": { 
        gradient: "from-blue-500/20 to-indigo-500/20", 
        border: "border-blue-500/30",
        icon: "bg-gradient-to-br from-blue-500 to-indigo-500",
        tag: "bg-blue-500/10 border-blue-500/20 text-blue-300"
      },
      "Robotics": { 
        gradient: "from-yellow-500/20 to-orange-500/20", 
        border: "border-yellow-500/30",
        icon: "bg-gradient-to-br from-yellow-500 to-orange-500",
        tag: "bg-yellow-500/10 border-yellow-500/20 text-yellow-300"
      }
    };
    return colorMap[category] || {
      gradient: "from-gray-500/20 to-slate-500/20", 
      border: "border-gray-500/30",
      icon: "bg-gradient-to-br from-gray-500 to-slate-500",
      tag: "bg-gray-500/10 border-gray-500/20 text-gray-300"
    };
  };

  return (
    <section 
      id="projects" 
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
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of innovative solutions spanning AI, robotics, IoT, and web development
          </p>        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => {
            const colors = getColorClasses(project.category);
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:${colors.border} transition-all duration-300 overflow-hidden`}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 ${colors.icon} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                      {getCategoryIcon(project.category)}
                    </div>                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Icons.External className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Status Badge */}
                  <div className="mb-4">
                    <span className={`${colors.tag} border px-2 py-1 rounded text-xs font-medium`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Highlights */}
                  {project.highlights.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Key Highlights</p>
                      <ul className="space-y-1">
                        {project.highlights.slice(0, 2).map((highlight, idx) => (
                          <li key={idx} className="text-xs text-gray-300 flex items-center">
                            <div className="w-1 h-1 bg-blue-400 rounded-full mr-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs font-medium hover:bg-gray-600/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="bg-gray-700/50 text-gray-400 px-2 py-1 rounded text-xs">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-tr from-white/3 to-transparent rounded-full blur-lg group-hover:scale-125 transition-transform duration-700" />
              </motion.div>
            );
          })}        </div>

        {/* Show More/Less Button */}
        {projectsData.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-gray-800/50 hover:bg-gray-700/50 text-white font-medium rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? `Show Less` : `Show More (${projectsData.length - 6} more projects)`}
            </motion.button>
          </motion.div>
        )}

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
              Want to See More?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              These projects represent just a glimpse of my work. Let's connect to explore 
              more detailed case studies and discuss potential collaborations.
            </p>
            <motion.button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
