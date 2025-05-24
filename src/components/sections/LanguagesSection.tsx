"use client";

import React from "react";
import { skillsData } from "@/utils/data/skills";

const LanguagesSection: React.FC = () => {
  return (    <section 
      id="languages" 
      className="min-h-screen flex flex-col justify-center border-t border-gray-200 py-16 px-4 sm:px-6"
      style={{minHeight: '100vh', paddingTop: '10vh', paddingBottom: '10vh', scrollMarginTop: '5vh'}}
      data-section="languages"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 inline-block border-b-2 border-blue-500 pb-1 text-center">Languages & Extras</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl mx-auto">
          <div className="backdrop-blur-sm p-5 md:p-6 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="font-semibold mb-4 text-gray-800 inline-flex items-center justify-center md:justify-start w-full md:w-auto">
              <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"></path>
              </svg>
              <span className="text-center md:text-left">Languages</span>
            </h3>            <ul className="text-gray-700 space-y-3 flex flex-col items-center md:items-start">
              {skillsData.languages.map((language, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {language}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="backdrop-blur-sm p-5 md:p-6 rounded-lg border border-indigo-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="font-semibold mb-4 text-gray-800 inline-flex items-center justify-center md:justify-start w-full md:w-auto">
              <svg className="w-5 h-5 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z"></path>
              </svg>
              <span className="text-center md:text-left">Soft Skills</span>
            </h3>            <ul className="text-gray-700 space-y-3 flex flex-col items-center md:items-start">
              {skillsData.softSkills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
