"use client";

import React from "react";
import { motion } from "framer-motion";
import { educationData } from "@/utils/data/education";

const EducationSection: React.FC = () => {
  return (
    <section 
      id="education" 
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
            Academic <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Background</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A solid foundation in computer science and engineering built through rigorous academic programs
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full rounded-full" />
          
          {/* Education Items */}
          <div className="space-y-16">
            {educationData.map((education, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 
                    ? 'md:flex-row-reverse md:text-right' 
                    : 'md:flex-row md:text-left'
                } flex-col text-center`}
              >
                {/* Content Card */}
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/30 transition-all duration-300 overflow-hidden md:w-5/12 w-full"
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Year Badge */}
                    <motion.div 
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-blue-300 font-medium text-sm">{education.year}</span>
                    </motion.div>

                    {/* Degree */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {education.degree}
                    </h3>

                    {/* Institution */}
                    <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {education.institution}
                      </span>
                    </div>

                    {/* Location - since it's in Fez, Morocco */}
                    <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-400 text-sm">Fez, Morocco</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed">
                      {education.description}
                    </p>

                    {/* Specialization Tags for the main degree */}
                    {index === 0 && (
                      <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
                        {["DATA", "IOT", "AI", "Software Engineering"].map((spec, specIndex) => (
                          <motion.span 
                            key={specIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.5 + specIndex * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-300 px-3 py-1 rounded-lg text-xs font-medium hover:bg-blue-500/20 transition-colors cursor-default"
                          >
                            {spec}
                          </motion.span>
                        ))}
                      </div>
                    )}

                    {/* Subjects Tags for preparatory classes */}
                    {index === 1 && (
                      <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
                        {["Mathematics", "Physics", "Computer Science"].map((subject, subIndex) => (
                          <motion.span 
                            key={subIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.5 + subIndex * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                            className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-300 px-3 py-1 rounded-lg text-xs font-medium hover:bg-purple-500/20 transition-colors cursor-default"
                          >
                            {subject}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-tr from-white/3 to-transparent rounded-full blur-lg group-hover:scale-125 transition-transform duration-700" />
                </motion.div>

                {/* Timeline Node */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className="relative z-10 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 shadow-lg md:mx-8 my-8 md:my-0 flex-shrink-0"
                >
                  {/* Pulsing animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping opacity-20" />
                </motion.div>

                {/* Spacer for opposite side */}
                <div className="md:w-5/12 w-full" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic Achievement Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="bg-gray-800/20 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Academic Excellence & Foundation
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Built on a strong academic foundation with rigorous preparation in mathematics, physics, 
              and computer science, leading to specialized engineering education in modern technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <motion.span 
                className="bg-blue-500/10 border border-blue-500/20 text-blue-300 px-4 py-2 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                5+ Years Study
              </motion.span>
              <motion.span 
                className="bg-purple-500/10 border border-purple-500/20 text-purple-300 px-4 py-2 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                Engineering Focus
              </motion.span>
              <motion.span 
                className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 px-4 py-2 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                Technology Specialization
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
