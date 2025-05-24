import { useMemo } from 'react';
import { 
  personalData, 
  experiencesData, 
  projectsData, 
  skillsData, 
  certificationsData, 
  educationData, 
  uiData,
  type Experience,
  type Project,
  type PortfolioData
} from '../data';

export const usePortfolioData = (): PortfolioData => {
  return useMemo(() => ({
    personal: personalData,
    ui: uiData,
    education: educationData,
    experiences: experiencesData,
    projects: projectsData,
    skills: skillsData,
    certifications: certificationsData,

    // Helper functions
    getExperiencesByType: (type: string): Experience[] => 
      experiencesData.filter(exp => exp.type === type),

    getProjectsByCategory: (category: string): Project[] => 
      projectsData.filter(proj => proj.category === category),

    searchExperiences: (query: string): Experience[] => 
      experiencesData.filter(exp => 
        exp.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase())) ||
        exp.title.toLowerCase().includes(query.toLowerCase()) ||
        exp.company.toLowerCase().includes(query.toLowerCase())
      ),

    getRecentExperiences: (count: number = 5): Experience[] =>
      experiencesData.slice(0, count),

    getFeaturedProjects: (): Project[] =>
      projectsData.filter(proj => 
        proj.highlights.length > 0 || proj.url
      ),

    getTechnologiesUsed: (): string[] => {
      const allTechs = new Set<string>();
      experiencesData.forEach(exp => 
        exp.technologies.forEach(tech => allTechs.add(tech))
      );
      projectsData.forEach(proj => 
        proj.technologies.forEach(tech => allTechs.add(tech))
      );
      return Array.from(allTechs);
    },

    getAchievements: (): Array<{achievement: string, company: string, year: string}> => {
      const achievements: Array<{achievement: string, company: string, year: string}> = [];
      experiencesData.forEach(exp => {
        if (exp.achievements) {
          achievements.push(...exp.achievements.map(achievement => ({
            achievement,
            company: exp.company,
            year: exp.duration
          })));
        }
      });
      return achievements;
    }
  }), []);
};

// Convenience hooks for specific data types
export const usePersonalData = () => {
  const { personal } = usePortfolioData();
  return personal;
};

export const useExperiences = () => {
  const { experiences, getExperiencesByType, searchExperiences, getRecentExperiences } = usePortfolioData();
  return { experiences, getExperiencesByType, searchExperiences, getRecentExperiences };
};

export const useProjects = () => {
  const { projects, getProjectsByCategory, getFeaturedProjects } = usePortfolioData();
  return { projects, getProjectsByCategory, getFeaturedProjects };
};

export const useSkills = () => {
  const { skills, getTechnologiesUsed } = usePortfolioData();
  return { skills, getTechnologiesUsed };
};

export const useUIContent = () => {
  const { ui } = usePortfolioData();
  return ui;
};
