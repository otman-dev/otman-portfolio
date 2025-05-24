"use client";

import React from "react";
import { motion } from "framer-motion";
import { uiData } from "@/utils/data/ui";

const PersonalStatementSection: React.FC = () => {
  return (
    <section 
      id="statement" 
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
            Personal <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Statement</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My philosophy and vision for creating meaningful impact through technology
          </p>
        </motion.div>

        {/* Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="group relative bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700 hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Quote Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-6 left-6 md:top-8 md:left-8"
            >
              <svg className="h-16 w-16 md:h-20 md:w-20 text-blue-400/20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </motion.div>

            {/* Quote Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative z-10 pt-8 md:pt-12 pl-4 md:pl-8"
            >
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 italic font-light leading-relaxed mb-8">
                "{uiData.personalStatement.quote}"
              </p>
              
              {/* Author signature */}
              <div className="flex items-center justify-end">
                <div className="text-right">
                  <div className="text-lg font-semibold text-white mb-1">Otman Mouhib</div>
                  <div className="text-sm text-gray-400">Software Engineer & Innovator</div>
                </div>
                <div className="ml-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">O</span>
                </div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-tr from-white/3 to-transparent rounded-full blur-lg group-hover:scale-125 transition-transform duration-700" />
          </div>
        </motion.div>

        {/* Vision Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto"
        >
          {[
            {
              title: "Innovation",
              description: "Pushing boundaries with creative solutions",
              icon: "💡",
              gradient: "from-yellow-500 to-orange-500"
            },
            {
              title: "Impact",
              description: "Creating meaningful change through technology",
              icon: "🚀",
              gradient: "from-blue-500 to-cyan-500"
            },
            {
              title: "Excellence",
              description: "Delivering quality in every project",
              icon: "⭐",
              gradient: "from-purple-500 to-pink-500"
            }
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className={`text-xl font-bold bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent mb-2`}>
                {value.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalStatementSection;
