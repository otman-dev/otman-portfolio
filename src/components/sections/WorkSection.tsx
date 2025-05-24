"use client";

import React from "react";
import { projectsData } from "@/utils/data/projects";
import { uiData } from "@/utils/data/ui";

const WorkSection: React.FC = () => {
  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: "from-white to-blue-50", card: "bg-blue-100", text: "text-blue-600", tag: "bg-blue-100 text-blue-800" },
      purple: { bg: "from-white to-purple-50", card: "bg-purple-100", text: "text-purple-600", tag: "bg-purple-100 text-purple-800" },
      green: { bg: "from-white to-green-50", card: "bg-green-100", text: "text-green-600", tag: "bg-green-100 text-green-800" }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section 
      id="work" 
      className="min-h-screen flex flex-col justify-center border-t border-gray-200 py-16 px-4 sm:px-6"
      style={{minHeight: '100vh', paddingTop: '10vh', paddingBottom: '10vh'}}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 inline-block border-b-2 border-blue-500 pb-1 text-center">{uiData.work.heading}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl mx-auto">
          {uiData.work.categories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <div key={index} className={`backdrop-blur-sm p-5 md:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                <div className={`text-4xl mb-4 ${colors.card} w-16 h-16 rounded-lg flex items-center justify-center ${colors.text} mx-auto md:mx-0`}>{category.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-center md:text-left">{category.name}</h3>
                <p className="text-gray-700 mb-4 text-center md:text-left">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2 text-xs justify-center md:justify-start">
                  {category.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={`${colors.tag} px-2 py-1 rounded-full`}>{tech}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
