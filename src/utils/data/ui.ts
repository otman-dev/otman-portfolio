import { UIContent } from '../types/portfolio';

export const uiData: UIContent = {
  hero: {
    welcomeBadge: "Welcome to my digital space",
    mainHeading: "Transforming Ideas into Digital Reality",
    description: "I create intelligent systems where hardware meets software, and innovation meets implementation.",
    ctaButtons: {
      primary: "Explore My Work",
      secondary: "Get in Touch"
    }
  },
  about: {
    heading: "About Me",
    coreSkills: [
      { name: "AI Research", category: "ai", color: "bg-blue-50" },
      { name: "IoT Systems", category: "iot", color: "bg-indigo-50" },
      { name: "Full-Stack", category: "web", color: "bg-purple-50" },
      { name: "Data Engineering", category: "data", color: "bg-cyan-50" }
    ],
    paragraphs: [
      "I'm an engineer with a passion for bridging hardware and software through innovative solutions. My specialty lies in developing intelligent systems that solve real-world problems.",
      "My approach combines analytical thinking with hands-on implementation, creating solutions that are scalable, maintainable, and focused on user needs."
    ],
    profileOverlay: {
      name: "Otman Mouhib",
      title: "Computer Engineer"
    },
    ctaButtons: {
      contact: "Get in Touch",
      cv: "Download CV"
    }
  },
  personalStatement: {
    quote: "I design with care, code with intent, and build with purpose. My work aspires to bring together the elegance of mathematics, the creativity of engineering, and the practicality of business needs to create solutions that make a difference."
  },
  work: {
    heading: "What I Build",
    categories: [
      {
        name: "Web & Data Engineering",
        icon: "🌐",
        description: "Modern web applications with robust data pipelines and analytics capabilities.",
        technologies: ["React", "Next.js", "TypeScript", "PostgreSQL"],
        color: "blue"
      },
      {
        name: "AI & Predictive Systems", 
        icon: "🧠",
        description: "Intelligent systems that learn, adapt, and deliver insights from complex data.",
        technologies: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"],
        color: "purple"
      },
      {
        name: "Embedded & IoT Systems",
        icon: "⚙️", 
        description: "Connected devices and embedded systems that bridge the physical and digital worlds.",
        technologies: ["ESP32", "LoRa", "MQTT", "Microcontrollers"],
        color: "green"
      }
    ]
  },
  skills: {
    heading: "Technical Skills",
    categories: [
      {
        name: "Languages",
        icon: "code",
        color: "blue",
        items: ["Python", "JavaScript/TypeScript", "C/C++", "SQL", "Java"]
      },
      {
        name: "Web Development", 
        icon: "web",
        color: "purple",
        items: ["React, Next.js", "Node.js, Express", "RESTful APIs, GraphQL", "HTML5, CSS3, Tailwind", "UI/UX Design"]
      },
      {
        name: "Data Engineering",
        icon: "database", 
        color: "green",
        items: ["PostgreSQL, MongoDB", "ETL Pipelines", "Data Warehousing", "Big Data (Spark, Hadoop)", "Data Visualization"]
      },
      {
        name: "IoT & Embedded",
        icon: "iot",
        color: "red", 
        items: ["Microcontrollers", "Sensor Integration", "MQTT, CoAP", "Real-time Systems", "PCB Design"]
      },
      {
        name: "Machine Learning",
        icon: "ai",
        color: "indigo",
        items: ["TensorFlow, PyTorch", "Computer Vision", "NLP", "Time Series Analysis", "MLOps"]
      },
      {
        name: "Tools & Platforms",
        icon: "tools",
        color: "yellow", 
        items: ["Git, GitHub Actions", "Docker, Kubernetes", "AWS, Azure, GCP", "Linux, Bash", "CI/CD"]
      }
    ]
  },
  seo: {
    title: "Otman Mouhib | Computer Engineer",
    description: "Portfolio of Otman Mouhib - Computer Engineer specializing in AI, IoT, Full-Stack Development and Data Engineering"
  },
  buttons: {
    showMore: "Show More",
    showLess: "Show Less",
    viewAll: "View All {count} {type}",
    downloadCV: "Download Resume"
  },
  footer: {
    thankYou: "Thank you for visiting my portfolio. I look forward to connecting with you!",
    copyright: "© {year} Otman Mouhib. All rights reserved.",
    cvButton: {
      label: "Get my Complete Resume",
      sublabel: "Get my"
    },
    socialLinks: {
      email: {
        label: "Email me at",
        text: "mouhib.otman@gmail.com"
      },
      linkedin: {
        label: "Connect on",
        text: "LinkedIn Profile"
      }
    }
  },
  certifications: {
    heading: "Certifications & Achievements"
  },
  experience: {
    heading: "Professional Experience",
    buttons: {
      showMore: "Show More",
      showLess: "Show Less"
    }
  },
  languages: {
    heading: "Languages & Skills",
    categories: {
      languages: {
        title: "Languages",
        items: [
          { name: "French (Native)", level: "native" },
          { name: "English (Fluent)", level: "fluent" },
          { name: "Arabic (Fluent)", level: "fluent" }
        ]
      },
      softSkills: {
        title: "Soft Skills",
        items: [
          "Agile Methodologies (Scrum, Kanban)",
          "Team Leadership & Collaboration", 
          "Technical Documentation",
          "Project Management",
          "Client Communication"
        ]
      }
    }
  },
  navigation: {
    items: [
      { id: "hero", label: "Home" },
      { id: "about", label: "About" },
      { id: "work", label: "Work" },
      { id: "experience", label: "Experience" },
      { id: "skills", label: "Skills" },
      { id: "certifications", label: "Certifications" },
      { id: "languages", label: "Languages" }
    ]
  }
};
