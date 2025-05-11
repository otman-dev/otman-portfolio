"use client";

import React from "react";

const CertificationsSection: React.FC = () => {
  return (
    <section 
      id="certifications" 
      className="min-h-screen flex flex-col justify-center border-t border-gray-200 py-16 px-4 sm:px-6"
      style={{minHeight: '100vh', paddingTop: '10vh', paddingBottom: '10vh'}}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 inline-block border-b-2 border-blue-500 pb-1 text-center">Certifications</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
          <div className="flex items-center bg-gradient-to-r from-blue-50 to-white px-5 py-4 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
            <svg className="w-6 h-6 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
            </svg>
            <span className="font-medium">AWS Solutions Architect</span>
          </div>
          <div className="flex items-center bg-gradient-to-r from-purple-50 to-white px-5 py-4 rounded-xl border border-purple-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
            <svg className="w-6 h-6 mr-3 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
            </svg>
            <span className="font-medium">TensorFlow Developer</span>
          </div>
          <div className="flex items-center bg-gradient-to-r from-indigo-50 to-white px-5 py-4 rounded-xl border border-indigo-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
            <svg className="w-6 h-6 mr-3 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
            <span className="font-medium">Microsoft Azure Data Engineer</span>
          </div>
          <div className="flex items-center bg-gradient-to-r from-green-50 to-white px-5 py-4 rounded-xl border border-green-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
            <svg className="w-6 h-6 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
            </svg>
            <span className="font-medium">Google Cloud Professional</span>
          </div>
          <div className="flex items-center bg-gradient-to-r from-cyan-50 to-white px-5 py-4 rounded-xl border border-cyan-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
            <svg className="w-6 h-6 mr-3 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
            </svg>
            <span className="font-medium">Cisco IoT Specialist</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
