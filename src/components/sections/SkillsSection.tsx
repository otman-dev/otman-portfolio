"use client";

import React from "react";

const SkillsSection: React.FC = () => {
  return (
    <section 
      id="skills" 
      className="min-h-screen flex flex-col justify-center border-t border-gray-200 py-16 px-4 sm:px-6"
      style={{minHeight: '100vh', paddingTop: '10vh', paddingBottom: '10vh'}}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 inline-block border-b-2 border-blue-500 pb-1 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl mx-auto">
          {/* Languages */}
          <div className="bg-gradient-to-br from-white to-blue-50 p-5 md:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="font-semibold mb-4 text-gray-800 flex items-center justify-center md:justify-start">
              <span className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-lg">Languages</span>
            </h3>
            <ul className="text-gray-700 space-y-3 pl-4 mt-4 flex flex-col items-center md:items-start">
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3"></span>
                Python
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3"></span>
                JavaScript/TypeScript
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3"></span>
                C/C++
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3"></span>
                SQL
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3"></span>
                Java
              </li>
            </ul>
          </div>

          {/* Web Development */}
          <div className="bg-gradient-to-br from-white to-purple-50 p-5 md:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="font-semibold mb-4 text-gray-800 flex items-center justify-center md:justify-start">
              <span className="bg-purple-100 text-purple-600 p-3 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-lg">Web Development</span>
            </h3>
            <ul className="text-gray-700 space-y-3 pl-4 mt-4 flex flex-col items-center md:items-start">
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-purple-500 rounded-full mr-3"></span>
                React, Next.js
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-purple-500 rounded-full mr-3"></span>
                Node.js, Express
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-purple-500 rounded-full mr-3"></span>
                RESTful APIs, GraphQL
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-purple-500 rounded-full mr-3"></span>
                HTML5, CSS3, Tailwind
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-purple-500 rounded-full mr-3"></span>
                UI/UX Design
              </li>
            </ul>
          </div>

          {/* Data Engineering */}
          <div className="bg-gradient-to-br from-white to-green-50 p-5 md:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="font-semibold mb-4 text-gray-800 flex items-center justify-center md:justify-start">
              <span className="bg-green-100 text-green-600 p-3 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                  <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                  <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                </svg>
              </span>
              <span className="text-lg">Data Engineering</span>
            </h3>
            <ul className="text-gray-700 space-y-3 pl-4 mt-4 flex flex-col items-center md:items-start">
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-3"></span>
                PostgreSQL, MongoDB
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-3"></span>
                ETL Pipelines
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-3"></span>
                Data Warehousing
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-3"></span>
                Big Data (Spark, Hadoop)
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-3"></span>
                Data Visualization
              </li>
            </ul>
          </div>

          {/* IoT & Embedded */}
          <div className="bg-gradient-to-br from-white to-red-50 p-5 md:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="font-semibold mb-4 text-gray-800 flex items-center justify-center md:justify-start">
              <span className="bg-red-100 text-red-600 p-3 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-lg">IoT & Embedded</span>
            </h3>
            <ul className="text-gray-700 space-y-3 pl-4 mt-4 flex flex-col items-center md:items-start">
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full mr-3"></span>
                Microcontrollers
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full mr-3"></span>
                Sensor Integration
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full mr-3"></span>
                MQTT, CoAP
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full mr-3"></span>
                Real-time Systems
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full mr-3"></span>
                PCB Design
              </li>
            </ul>
          </div>

          {/* Machine Learning */}
          <div className="bg-gradient-to-br from-white to-indigo-50 p-5 md:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="font-semibold mb-4 text-gray-800 flex items-center justify-center md:justify-start">
              <span className="bg-indigo-100 text-indigo-600 p-3 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-lg">Machine Learning</span>
            </h3>
            <ul className="text-gray-700 space-y-3 pl-4 mt-4 flex flex-col items-center md:items-start">
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full mr-3"></span>
                TensorFlow, PyTorch
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full mr-3"></span>
                Computer Vision
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full mr-3"></span>
                NLP
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full mr-3"></span>
                Time Series Analysis
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full mr-3"></span>
                MLOps
              </li>
            </ul>
          </div>

          {/* Tools & Platforms */}
          <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold mb-3 text-gray-800 flex items-center">
              <span className="bg-yellow-100 text-yellow-600 p-2 rounded-md mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                </svg>
              </span>
              Tools & Platforms
            </h3>
            <ul className="text-gray-700 space-y-2 pl-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                Git, GitHub Actions
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                Docker, Kubernetes
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                AWS, Azure, GCP
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                Linux, Bash
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                CI/CD
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
