"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icons } from "@/components/ui/icons";

const ContactFooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const contactMethods = [
    {
      icon: <Icons.Mail className="w-6 h-6" />,
      title: "Email",
      subtitle: "Drop me a line",
      value: "contact@otmanmouhib.com",
      href: "mailto:contact@otmanmouhib.com",
      color: "blue",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Icons.LinkedIn className="w-6 h-6" />,
      title: "LinkedIn",
      subtitle: "Let's connect",
      value: "Professional Network",
      href: "https://linkedin.com/in/otmanmouhib",
      color: "indigo",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Icons.Download className="w-6 h-6" />,
      title: "Resume",
      subtitle: "Download CV",
      value: "Complete Portfolio",
      href: "/CV_OtmanMouhib.pdf",
      color: "emerald",
      gradient: "from-emerald-500 to-teal-500",
      download: true
    }
  ];
  
  return (
    <footer 
      id="contact" 
      className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your next project to life? I'm always excited to discuss new opportunities 
            and innovative ideas. Let's create something amazing together!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              download={method.download || undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 text-center"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {method.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {method.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                {method.subtitle}
              </p>
              <p className="text-gray-300 font-medium">
                {method.value}
              </p>

              {/* Hover effect line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${method.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`} />
            </motion.a>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-16"
        >
          <div className="bg-gray-800/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Whether you're a startup looking to disrupt the market or an established company 
              seeking digital transformation, I'm here to help you achieve your goals.
            </p>
            <motion.button
              onClick={() => {
                window.location.href = 'mailto:contact@otmanmouhib.com?subject=Let\'s Work Together';
              }}
              className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                🚀 Start a Conversation
              </span>
            </motion.button>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center pt-8 border-t border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © {currentYear} Otman Mouhib. Crafted with passion and precision.
            </p>
            <div className="flex items-center gap-6 text-gray-500">
              <motion.span 
                whileHover={{ scale: 1.1, color: "#60a5fa" }}
                className="cursor-default transition-colors"
              >
                Made with ❤️
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.1, color: "#a855f7" }}
                className="cursor-default transition-colors"
              >
                Next.js
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.1, color: "#06b6d4" }}
                className="cursor-default transition-colors"
              >
                TypeScript
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default ContactFooterSection;
