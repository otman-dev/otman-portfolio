"use client";

import React from "react";

const ExperienceSection: React.FC = () => {
  return (
    <section 
      id="experience" 
      className="min-h-screen flex flex-col justify-center border-t border-gray-200 py-16 px-4 sm:px-6"
      style={{minHeight: '100vh', paddingTop: '10vh', paddingBottom: '10vh'}}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 inline-block border-b-2 border-blue-500 pb-1 text-center">Experience Overview</h2>
        <div className="space-y-8 w-full max-w-4xl">
          {/* Research Engineer */}
          <div className="relative pl-8 md:pl-0 bg-white/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-blue-100"></div>
            <div className="md:ml-12 relative">
              <div className="hidden md:flex absolute -left-12 w-10 h-10 rounded-full bg-blue-100 items-center justify-center shadow">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              </div>
              <h3 className="text-xl font-semibold flex items-center">
                <span className="md:hidden mr-3 text-blue-500">●</span>
                Research Engineer @ LS2N
              </h3>
              <p className="text-gray-700 mt-2">
                Developed and implemented advanced AI algorithms for predictive maintenance in industrial systems, resulting in <span className="text-blue-600 font-medium">30% reduction in downtime</span>. Used Python, TensorFlow, and time-series analysis.
              </p>
            </div>
          </div>
          
          {/* Data Engineer */}
          <div className="relative pl-8 md:pl-0 bg-white/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-blue-100"></div>
            <div className="md:ml-12 relative">
              <div className="hidden md:flex absolute -left-12 w-10 h-10 rounded-full bg-blue-100 items-center justify-center shadow">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              </div>
              <h3 className="text-xl font-semibold flex items-center">
                <span className="md:hidden mr-3 text-blue-500">●</span>
                Data Engineer @ Atlantic Dunes
              </h3>
              <p className="text-gray-700 mt-2">
                Designed and deployed an end-to-end IoT monitoring system for smart agriculture, improving crop yield by <span className="text-blue-600 font-medium">20%</span>. Utilized ESP32, MQTT, AWS IoT Core, and visualization dashboards.
              </p>
            </div>
          </div>
          
          {/* Full-Stack Developer */}
          <div className="relative pl-8 md:pl-0 bg-white/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-blue-100"></div>
            <div className="md:ml-12 relative">
              <div className="hidden md:flex absolute -left-12 w-10 h-10 rounded-full bg-blue-100 items-center justify-center shadow">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              </div>
              <h3 className="text-xl font-semibold flex items-center">
                <span className="md:hidden mr-3 text-blue-500">●</span>
                Full-Stack Developer @ Nokia
              </h3>
              <p className="text-gray-700 mt-2">
                Built telecommunications management interfaces integrating with backend systems, improving operator efficiency by <span className="text-blue-600 font-medium">25%</span>. Worked with React, Node.js, GraphQL, and WebSockets.
              </p>
            </div>
          </div>
          
          {/* Technical Lead */}
          <div className="relative pl-8 md:pl-0 bg-white/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-blue-100"></div>
            <div className="md:ml-12 relative">
              <div className="hidden md:flex absolute -left-12 w-10 h-10 rounded-full bg-blue-100 items-center justify-center shadow">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              </div>
              <h3 className="text-xl font-semibold flex items-center">
                <span className="md:hidden mr-3 text-blue-500">●</span>
                Technical Lead @ URCompetition
              </h3>
              <p className="text-gray-700 mt-2">
                Led development of robotics control systems for international competitions, achieving <span className="text-blue-600 font-medium">top-5 placement</span>. Implemented computer vision systems and real-time control algorithms using ROS and C++.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
