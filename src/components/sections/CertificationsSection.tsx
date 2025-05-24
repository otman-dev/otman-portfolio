"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { certificationsData } from "@/utils/data/certifications";

const CertificationsSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  
  // Get certifications to display based on showAll state
  const displayCertifications = showAll 
    ? certificationsData
    : certificationsData.slice(0, 8);

  // Function to get icon and gradient based on issuer
  const getIconAndGradient = (issuer: string) => {
    if (issuer.toLowerCase().includes('ibm')) {
      return {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
          </svg>
        ),
        gradient: "from-blue-500 to-cyan-500",
        borderColor: "border-blue-500/30"
      };
    } else if (issuer.toLowerCase().includes('coursera')) {
      return {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        ),
        gradient: "from-blue-500 to-indigo-500",
        borderColor: "border-indigo-500/30"
      };
    } else if (issuer.toLowerCase().includes('mongodb')) {
      return {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
            <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
            <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
          </svg>
        ),
        gradient: "from-green-500 to-emerald-500",
        borderColor: "border-green-500/30"
      };
    } else if (issuer.toLowerCase().includes('nokia') || issuer.toLowerCase().includes('competition')) {
      return {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ),
        gradient: "from-yellow-500 to-orange-500",
        borderColor: "border-yellow-500/30"
      };
    } else if (issuer.toLowerCase().includes('pypi')) {
      return {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
          </svg>
        ),
        gradient: "from-orange-500 to-red-500",
        borderColor: "border-orange-500/30"
      };
    } else {
      return {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        ),
        gradient: "from-purple-500 to-pink-500",
        borderColor: "border-purple-500/30"
      };
    }
  };
  return (
    <section 
      id="certifications" 
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
            Professional <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Industry-recognized credentials showcasing expertise across diverse technology domains
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayCertifications.map((certification, index) => {
            const { icon, gradient, borderColor } = getIconAndGradient(certification.issuer);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border ${borderColor} hover:border-opacity-60 transition-all duration-300 overflow-hidden`}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {icon}
                  </div>

                  {/* Certification Name */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                    {certification.name}
                  </h3>

                  {/* Issuer */}
                  <p className="text-sm font-medium text-gray-300 mb-2">
                    {certification.issuer}
                  </p>

                  {/* Date */}
                  <p className="text-sm text-gray-400 mb-3">
                    {certification.date}
                  </p>

                  {/* Description */}
                  {certification.description && (
                    <p className="text-xs text-gray-500 italic leading-relaxed">
                      {certification.description}
                    </p>
                  )}
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-tr from-white/3 to-transparent rounded-full blur-lg group-hover:scale-125 transition-transform duration-700" />
              </motion.div>
            );
          })}
        </div>

        {/* Show more/less button */}
        {certificationsData.length > 8 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <motion.button 
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {showAll 
                ? `Show Less` 
                : `View All ${certificationsData.length} Certifications`
              }
            </motion.button>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-800/20 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Professional Development
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Committed to staying current with industry standards and emerging technologies 
              through continuous learning and professional certification.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <motion.span 
                className="bg-blue-500/10 border border-blue-500/20 text-blue-300 px-4 py-2 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                {certificationsData.length}+ Certifications
              </motion.span>
              <motion.span 
                className="bg-purple-500/10 border border-purple-500/20 text-purple-300 px-4 py-2 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                Multiple Platforms
              </motion.span>
              <motion.span 
                className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 px-4 py-2 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                Industry Recognized
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
