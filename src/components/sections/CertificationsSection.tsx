"use client";

import React, { useState } from "react";
import { certificationsData } from "@/utils/data/certifications";

const CertificationsSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
    // Get certifications to display based on showAll state
  const displayCertifications = showAll 
    ? certificationsData
    : certificationsData.slice(0, 8);

  // Function to get icon based on issuer
  const getIconForIssuer = (issuer: string) => {
    if (issuer.toLowerCase().includes('ibm')) {
      return (
        <svg className="w-6 h-6 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
        </svg>
      );
    } else if (issuer.toLowerCase().includes('coursera')) {
      return (
        <svg className="w-6 h-6 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
      );
    } else if (issuer.toLowerCase().includes('mongodb')) {
      return (
        <svg className="w-6 h-6 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
        </svg>
      );
    } else if (issuer.toLowerCase().includes('nokia') || issuer.toLowerCase().includes('competition')) {
      return (
        <svg className="w-6 h-6 mr-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    } else if (issuer.toLowerCase().includes('pypi')) {
      return (
        <svg className="w-6 h-6 mr-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
        </svg>
      );
    } else {
      return (
        <svg className="w-6 h-6 mr-3 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
        </svg>
      );
    }
  };

  // Function to get color class based on issuer
  const getColorClass = (issuer: string) => {
    if (issuer.toLowerCase().includes('ibm')) {
      return 'from-blue-50 to-white border-blue-100';
    } else if (issuer.toLowerCase().includes('coursera')) {
      return 'from-blue-50 to-white border-blue-100';
    } else if (issuer.toLowerCase().includes('mongodb')) {
      return 'from-green-50 to-white border-green-100';
    } else if (issuer.toLowerCase().includes('nokia') || issuer.toLowerCase().includes('competition')) {
      return 'from-yellow-50 to-white border-yellow-100';
    } else if (issuer.toLowerCase().includes('pypi')) {
      return 'from-orange-50 to-white border-orange-100';
    } else {
      return 'from-purple-50 to-white border-purple-100';
    }
  };

  return (
    <section 
      id="certifications" 
      className="min-h-screen flex flex-col justify-center border-t border-gray-200 py-16 px-4 sm:px-6"
      style={{minHeight: '100vh', paddingTop: '10vh', paddingBottom: '10vh'}}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 inline-block border-b-2 border-blue-500 pb-1 text-center">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {displayCertifications.map((certification, index) => (
            <div 
              key={index} 
              className={`flex flex-col backdrop-blur-sm border ${certification.issuer.toLowerCase().includes('ibm') ? 'border-blue-100' : certification.issuer.toLowerCase().includes('mongodb') ? 'border-green-100' : certification.issuer.toLowerCase().includes('nokia') ? 'border-yellow-100' : certification.issuer.toLowerCase().includes('pypi') ? 'border-orange-100' : 'border-purple-100'} px-4 py-4 rounded-xl hover:shadow-md transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex items-start mb-2">
                {getIconForIssuer(certification.issuer)}
                <div className="flex-1">
                  <h3 className="font-semibold text-sm leading-tight">{certification.name}</h3>
                </div>
              </div>
              <div className="mt-auto">
                <p className="text-xs text-gray-600 font-medium">{certification.issuer}</p>
                <p className="text-xs text-gray-500">{certification.date}</p>
                {certification.description && (
                  <p className="text-xs text-gray-700 mt-1 italic">{certification.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
          {/* Show more/less button */}
        {certificationsData.length > 8 && (
          <div className="mt-8">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {showAll 
                ? `Show Less` 
                : `View All ${certificationsData.length} Certifications`
              }
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificationsSection;
