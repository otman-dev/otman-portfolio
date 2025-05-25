export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  github: string;
  bio: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  type: 'work' | 'research' | 'leadership';
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  keywords: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  highlights: string[];
  category: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  description?: string;
}

export interface Competition {
  id: string;
  title: string;
  organization: string;
  date: string;
  type: 'robotics' | 'hackathon' | 'communication' | 'programming';
  achievement: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  color: string;
  items: string[];
}

export interface Skills {
  programming: string[];
  frameworks: string[];
  aiMl: string[];
  embedded: string[];
  tools: string[];
  databases: string[];
  cloud: string[];
  specializations: string[];
  languages: string[];
  softSkills: string[];
}

export interface UIButton {
  primary: string;
  secondary: string;
}

export interface UISection {
  heading: string;
  [key: string]: any;
}

export interface NavigationItem {
  id: string;
  label: string;
}

export interface UIContent {
  hero: {
    welcomeBadge: string;
    mainHeading: string;
    description: string;
    ctaButtons: UIButton;
  };
  about: {
    heading: string;
    coreSkills: Array<{
      name: string;
      category: string;
      color: string;
    }>;
    paragraphs: string[];
    profileOverlay: {
      name: string;
      title: string;
    };
    ctaButtons: {
      contact: string;
      cv: string;
    };
  };
  personalStatement: {
    quote: string;
  };
  work: {
    heading: string;
    categories: Array<{
      name: string;
      icon: string;
      description: string;
      technologies: string[];
      color: string;
    }>;
  };
  skills: {
    heading: string;
    categories: SkillCategory[];
  };
  seo: {
    title: string;
    description: string;
  };
  buttons: {
    showMore: string;
    showLess: string;
    viewAll: string;
    downloadCV: string;
  };
  footer: {
    thankYou: string;
    copyright: string;
    cvButton: {
      label: string;
      sublabel: string;
    };
    socialLinks: {
      email: {
        label: string;
        text: string;
      };
      linkedin: {
        label: string;
        text: string;
      };
    };
  };
  certifications: UISection;
  experience: {
    heading: string;
    buttons: {
      showMore: string;
      showLess: string;
    };
  };
  languages: {
    heading: string;
    categories: {
      languages: {
        title: string;
        items: Array<{
          name: string;
          level: string;
        }>;
      };
      softSkills: {
        title: string;
        items: string[];
      };
    };
  };
  navigation: {
    items: NavigationItem[];
  };
}

export interface PortfolioData {
  personal: PersonalInfo;
  ui: UIContent;
  education: Education[];
  experiences: Experience[];
  projects: Project[];
  skills: Skills;
  certifications: Certification[];
  
  // Helper functions
  getExperiencesByType: (type: string) => Experience[];
  getProjectsByCategory: (category: string) => Project[];
  searchExperiences: (query: string) => Experience[];
  getRecentExperiences: (count?: number) => Experience[];
  getFeaturedProjects: () => Project[];
  getTechnologiesUsed: () => string[];
  getAchievements: () => Array<{achievement: string, company: string, year: string}>;
}
