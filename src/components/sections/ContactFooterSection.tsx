"use client";

import React from "react";

const ContactFooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      id="contact" 
      className="min-h-screen flex flex-col justify-center border-t border-gray-200 bg-gradient-to-b from-gray-50 to-gray-100"
      style={{minHeight: '100vh', paddingTop: '10vh', paddingBottom: '10vh'}}
    >
      <div className="max-w-screen-lg mx-auto px-4 flex-grow flex flex-col justify-center">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 inline-block text-transparent bg-clip-text">Let&apos;s Connect</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Interested in collaborating or have a project in mind? Feel free to reach out through any of the channels below.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
          <a href="mailto:contact@otmanmouhib.com" className="w-full md:w-auto text-center bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 group">
            <span className="bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <div className="text-left">
              <div className="text-xs text-gray-500">Email me at</div>
              <div className="font-medium text-gray-800">contact@otmanmouhib.com</div>
            </div>
          </a>
          <a href="https://linkedin.com/in/otmanmouhib" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto text-center bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 group">
            <span className="bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </span>
            <div className="text-left">
              <div className="text-xs text-gray-500">Connect on</div>
              <div className="font-medium text-gray-800">LinkedIn Profile</div>
            </div>
          </a>
          <a href="/CV_OtmanMouhib.pdf" download className="w-full md:w-auto text-center bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 group">
            <span className="bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
            <div className="text-left">
              <div className="text-xs text-gray-500">Get my</div>
              <div className="font-medium text-gray-800">Complete Resume</div>
            </div>
          </a>
        </div>
        
        <div className="text-center border-t border-gray-200 pt-8">
          <p className="text-gray-600 mb-4">
            Thank you for visiting my portfolio. I look forward to connecting with you!
          </p>
          <p className="text-gray-500 text-sm">
            © {currentYear} Otman Mouhib. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooterSection;
