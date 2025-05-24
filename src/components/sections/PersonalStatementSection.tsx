"use client";

import React from "react";
import { uiData } from "@/utils/data/ui";

const PersonalStatementSection: React.FC = () => {
  return (
    <section 
      id="statement" 
      className="min-h-screen flex flex-col justify-center border-t border-gray-200 py-16 px-4 sm:px-6"
      style={{minHeight: '100vh', paddingTop: '10vh', paddingBottom: '10vh'}}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 inline-block border-b-2 border-blue-500 pb-1 text-center">Personal Statement</h2>
        
        <blockquote className="relative p-6 md:p-10 bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 max-w-3xl mx-auto w-full">
          <svg className="absolute h-12 w-12 md:h-16 md:w-16 text-blue-200 opacity-30 top-4 left-4 md:top-6 md:left-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>          <p className="italic text-gray-700 relative z-10 pl-6 md:pl-10 pt-4 md:pt-6 text-base md:text-lg leading-relaxed">
            "{uiData.personalStatement.quote}"
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default PersonalStatementSection;
