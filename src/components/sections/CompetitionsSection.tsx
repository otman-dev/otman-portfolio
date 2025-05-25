"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { competitionsData } from '@/utils/data/competitions';

const CompetitionsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const getAchievementColor = (achievement: string) => {
    if (achievement.includes('First') || achievement.includes('Winners')) {
      return 'from-yellow-500 to-amber-500';
    } else if (achievement.includes('3rd')) {
      return 'from-orange-500 to-red-500';
    } else if (achievement.includes('Animator')) {
      return 'from-purple-500 to-indigo-500';
    }
    return 'from-blue-500 to-cyan-500';
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'robotics':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        );
      case 'hackathon':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'communication':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0v10a2 2 0 01-2 2H9a2 2 0 01-2-2V8m10 0H7" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        );
    }
  };

  return (
    <section id="competitions" className="py-24 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-xl" />
      </div>

      <div className="relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/30 border border-gray-700 rounded-full mb-6">
            <svg 
              className="w-5 h-5 text-yellow-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <span className="text-gray-300 text-sm font-medium">Achievements</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Competitions & <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Awards</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recognition and achievements in robotics competitions, hackathons, and leadership roles
          </p>
        </motion.div>

        {/* Competitions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {competitionsData.map((competition) => (
            <motion.div
              key={competition.id}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800/30 backdrop-blur-xl border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300 h-full"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 bg-gradient-to-r ${getAchievementColor(competition.achievement)} rounded-lg text-white`}>
                    {getTypeIcon(competition.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 bg-gradient-to-r ${getAchievementColor(competition.achievement)} text-white text-xs font-bold rounded-full`}>
                        {competition.achievement}
                      </span>
                      <span className="text-gray-500 text-sm">{competition.date}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                    {competition.title}
                  </h3>
                  
                  <p className="text-blue-400 font-medium text-sm mb-3">
                    {competition.organization}
                  </p>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {competition.description}
                  </p>
                </div>

                {/* Type Badge */}
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full capitalize">
                    {getTypeIcon(competition.type)}
                    <span className="ml-1">{competition.type}</span>
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitionsSection;
