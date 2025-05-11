"use client";

import React from "react";

const WorkSection: React.FC = () => {
  return (
    <section 
      id="work" 
      className="min-h-screen flex flex-col justify-center border-t border-gray-200 py-16 px-4 sm:px-6"
      style={{minHeight: '100vh', paddingTop: '10vh', paddingBottom: '10vh'}}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 inline-block border-b-2 border-blue-500 pb-1 text-center">What I Build</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl mx-auto">
          {/* Web & Data Engineering */}
          <div className="bg-gradient-to-br from-white to-blue-50 p-5 md:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl mb-4 bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center text-blue-600 mx-auto md:mx-0">🌐</div>
            <h3 className="text-xl font-semibold mb-3 text-center md:text-left">Web & Data Engineering</h3>
            <p className="text-gray-700 mb-4 text-center md:text-left">
              Modern web applications with robust data pipelines and analytics capabilities.
            </p>
            <div className="flex flex-wrap gap-2 text-xs justify-center md:justify-start">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">React</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Next.js</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">TypeScript</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">PostgreSQL</span>
            </div>
          </div>
          
          {/* AI & Predictive Systems */}
          <div className="bg-gradient-to-br from-white to-purple-50 p-5 md:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl mb-4 bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center text-purple-600 mx-auto md:mx-0">🧠</div>
            <h3 className="text-xl font-semibold mb-3 text-center md:text-left">AI & Predictive Systems</h3>
            <p className="text-gray-700 mb-4 text-center md:text-left">
              Intelligent systems that learn, adapt, and deliver insights from complex data.
            </p>
            <div className="flex flex-wrap gap-2 text-xs justify-center md:justify-start">
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">TensorFlow</span>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">PyTorch</span>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">NLP</span>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Computer Vision</span>
            </div>
          </div>
          
          {/* Embedded & IoT Systems */}
          <div className="bg-gradient-to-br from-white to-green-50 p-5 md:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl mb-4 bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center text-green-600 mx-auto md:mx-0">⚙️</div>
            <h3 className="text-xl font-semibold mb-3 text-center md:text-left">Embedded & IoT Systems</h3>
            <p className="text-gray-700 mb-4 text-center md:text-left">
              Connected hardware solutions with efficient processing and communication.
            </p>
            <div className="flex flex-wrap gap-2 text-xs justify-center md:justify-start">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">Arduino</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">Raspberry Pi</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">ESP32</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">C/C++</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
