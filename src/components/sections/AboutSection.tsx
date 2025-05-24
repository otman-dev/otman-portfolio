"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { Icons } from "@/components/ui/icons";

const AboutSection: React.FC = () => {  const skills = [
    { 
      icon: <Icons.Code className="w-6 h-6" />, 
      title: "Full-Stack Development", 
      description: "Modern web applications with React, Next.js, Node.js" 
    },
    { 
      icon: <Icons.CPU className="w-6 h-6" />, 
      title: "AI & Machine Learning", 
      description: "Intelligent solutions with Python, TensorFlow, OpenAI" 
    },
    { 
      icon: <Icons.Cloud className="w-6 h-6" />, 
      title: "Cloud Architecture", 
      description: "Scalable infrastructure with AWS, Docker, Kubernetes" 
    },
    { 
      icon: <Icons.Database className="w-6 h-6" />, 
      title: "Data Engineering", 
      description: "Big data processing and analytics pipelines" 
    }
  ];

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Delivered" },
    { value: "15+", label: "Technologies Mastered" },
    { value: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section 
      id="about" 
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
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate developer crafting innovative solutions at the intersection of technology and creativity
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="text-blue-400 font-semibold">5+ years</span> crafting digital solutions that matter. 
                I transform complex ideas into <span className="text-purple-400 font-semibold">scalable applications</span> 
                using cutting-edge technologies.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                From <span className="text-cyan-400 font-semibold">AI-powered backends</span> to 
                <span className="text-blue-400 font-semibold"> pixel-perfect frontends</span> — 
                I build the full stack with precision and passion.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >                <span className="flex items-center justify-center gap-2">
                  Let's Connect
                  <Icons.Arrow className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.a
                href="/CV_OtmanMouhib.pdf"
                download
                className="group px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg transition-all duration-300 hover:border-blue-400 hover:text-blue-400"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <Icons.Download className="w-4 h-4" />
                  Download CV
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                {/* Gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-2xl p-1">
                  <div className="w-full h-full bg-gray-900 rounded-2xl overflow-hidden">
                    <Image
                      src="/profile_photo.jpg"
                      alt="Otman Mouhib"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Core <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Expertise</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{skill.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
