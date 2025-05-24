"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/utils/data/skills";

const LanguagesSection: React.FC = () => {
  return (
    <section 
      id="languages" 
      className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8"
      data-section="languages"
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
            Languages & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Soft Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Communication abilities and interpersonal skills that drive collaboration and success
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Languages Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
          >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Content */}
            <div className="relative z-10">
              {/* Icon and Title */}
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  Languages
                </h3>
              </div>

              {/* Languages List */}
              <div className="space-y-4">
                {skillsData.languages.map((language, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + (index * 0.1) }}
                    className="flex items-center group/item"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-4 group-hover/item:scale-125 transition-transform" />
                    <span className="text-gray-300 group-hover/item:text-white transition-colors text-lg font-medium">
                      {language}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 pt-6 border-t border-gray-600"
              >
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Fluency Level</span>
                  <span className="text-blue-400 font-medium">Professional</span>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-white/3 to-transparent rounded-full blur-lg group-hover:scale-125 transition-transform duration-700" />
          </motion.div>

          {/* Soft Skills Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/30 transition-all duration-300 overflow-hidden"
          >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Content */}
            <div className="relative z-10">
              {/* Icon and Title */}
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  Soft Skills
                </h3>
              </div>

              {/* Soft Skills List */}
              <div className="space-y-4">
                {skillsData.softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                    className="flex items-center group/item"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4 group-hover/item:scale-125 transition-transform" />
                    <span className="text-gray-300 group-hover/item:text-white transition-colors text-lg font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 pt-6 border-t border-gray-600"
              >
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Experience Level</span>
                  <span className="text-purple-400 font-medium">Advanced</span>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-white/3 to-transparent rounded-full blur-lg group-hover:scale-125 transition-transform duration-700" />
          </motion.div>
        </div>

        {/* Bottom Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-800/20 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Communication & Collaboration
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Building bridges across cultures and teams through effective communication 
              and strong interpersonal skills in diverse environments.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <motion.span 
                className="bg-blue-500/10 border border-blue-500/20 text-blue-300 px-4 py-2 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                Multilingual
              </motion.span>
              <motion.span 
                className="bg-purple-500/10 border border-purple-500/20 text-purple-300 px-4 py-2 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                Team Leadership
              </motion.span>
              <motion.span 
                className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 px-4 py-2 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                Cross-Cultural
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LanguagesSection;
