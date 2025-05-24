export const portfolioData = {  personal: {
    name: "Mouhib Otman",
    title: "AI & Embedded Systems Engineer",
    email: "contact@otmanmouhib.com",
    linkedin: "https://www.linkedin.com/in/otmanmouhib",
    github: "https://github.com/otmanmouhib",
    bio: "Mouhib Otman is an AI & Embedded Systems Engineer with extensive experience in research, industrial applications, and competitive robotics. His expertise spans from multicore performance modeling and deep learning to IoT systems and autonomous robotics. With a proven track record of national championships, international competition rankings, and published research, Otman specializes in bridging the gap between cutting-edge AI research and practical real-world implementations."
  },  education: [
    {
      degree: "Engineering Degree in Computer Science",
      institution: "Université Privée de Fès",
      year: "2020-2025",
      description: "Specialized in Artificial Intelligence, Embedded Systems, and Robotics. Completed research internship at LS2N (CNRS) focusing on multicore performance modeling. Led multiple robotics teams to national championships and published research in AI applications."
    }
  ],
    experiences: [
    {
      id: "exp1",
      title: "AI & Embedded Systems Research Engineer – Multicore Performance Modeling",
      company: "LS2N (CNRS)",
      location: "Nantes, France",
      duration: "2025",
      type: "research",
      description: "Research internship focusing on multicore performance modeling for ARM Cortex-A53 systems",
      responsibilities: [
        "Developed Python-based predictive models to estimate instruction throughput and memory interference in ARM Cortex-A53 multicore systems",
        "Implemented low-level C++ instrumentation using Performance Monitoring Units (PMUs) and perf on Linux for benchmark profiling",
        "Designed modular testing pipelines for automated instruction-level analysis and system performance benchmarking",
        "Configured Conda-based environments and dependency isolation for reproducible research workflows",
        "Integrated results into CI pipelines to enable performance regression checks and anomaly detection",
        "Contributed to infrastructure monitoring strategies using Python tooling and Linux-native performance counters"
      ],
      technologies: ["Python", "C++", "ARM Cortex-A53", "Linux", "PMU", "perf", "Conda", "CI/CD"],
      achievements: ["Advanced multicore performance modeling research", "Automated performance regression detection"],
      keywords: ["AI", "embedded systems", "performance modeling", "ARM", "multicore", "research"]
    },
    {
      id: "exp2",
      title: "Embedded AI Systems Engineer – IoT & Autonomous Monitoring",
      company: "Atlantic Dunes",
      location: "Tangier, Morocco",
      duration: "2024",
      type: "work",
      description: "Developed autonomous IoT monitoring systems with embedded AI capabilities",
      responsibilities: [
        "Developed a Python-based embedded monitoring system using ESP32 microcontrollers to autonomously collect and analyze sensor data (pH, EC, temperature)",
        "Built a secure, containerized backend environment with Conda for firmware OTA updates and real-time analytics on a self-hosted Ubuntu server",
        "Configured user roles and access control for device and dashboard management using internal authentication workflows",
        "Implemented MQTT-based message queues to support scalable and fault-tolerant communication between nodes",
        "Created a full-stack interface for live monitoring, manual overrides, and system logs, using React and Node.js",
        "Engineered a modular C++/Python library for managing sensors, relays, and messaging protocols, improving development speed and reliability",
        "Integrated automated testing routines and health checks to optimize system responsiveness and ensure stability in edge deployment scenarios"
      ],
      technologies: ["Python", "ESP32", "React", "Node.js", "MQTT", "Ubuntu", "Conda", "C++"],
      achievements: ["Full-stack IoT monitoring system", "Scalable edge deployment"],
      keywords: ["IoT", "autonomous monitoring", "ESP32", "MQTT", "full-stack", "embedded AI"]
    },
    {
      id: "exp3",
      title: "AI Research Engineer – Deep Learning & Diagnostic Assistance",
      company: "AI & Healthcare Project",
      location: "Fez, Morocco",
      duration: "2024",
      type: "research",
      description: "Developed deep learning models for medical diagnostic assistance",
      responsibilities: [
        "Developed and trained deep learning models (RNNs, CNNs) in Python using Conda-managed environments for reproducible training pipelines",
        "Configured and optimized Anaconda environments for GPU-enabled medical imaging workflows, managing dependencies and model versions",
        "Simulated end-to-end diagnostic pipelines with integrated visual outputs, supporting explainable AI and real-time image classification",
        "Deployed the prototype on a secured local environment with minimal latency for clinical demonstration and feedback",
        "Presented the solution to investors with technical demos and performance dashboards, highlighting system responsiveness and reliability"
      ],
      technologies: ["Python", "RNN", "CNN", "Conda", "GPU", "Medical Imaging", "Explainable AI"],
      achievements: ["Successful investor presentation", "Clinical prototype deployment"],
      keywords: ["deep learning", "medical AI", "diagnostic assistance", "CNNs", "RNNs", "healthcare"]
    },
    {
      id: "exp4",
      title: "AI Engineer – Document Understanding & Intelligent Interfaces",
      company: "Nokia",
      location: "Salé, Morocco",
      duration: "2024",
      type: "work",
      description: "Built secure AI pipelines for document processing and intelligent interfaces",
      responsibilities: [
        "Built a secure on-premise AI pipeline using Python, OCR, and NLP for extracting structured data from noisy and handwritten scanned documents",
        "Managed Anaconda environments to isolate dependencies and maintain consistent behavior across development and deployment phases",
        "Developed internal web interfaces for user interaction with NLP-generated outputs, incorporating access control and authentication layers",
        "Optimized inference pipelines for local processing and edge deployment, reducing latency while preserving privacy constraints",
        "Implemented monitoring routines and system logs to ensure robustness, traceability, and secure document handling workflows"
      ],
      technologies: ["Python", "OCR", "NLP", "Anaconda", "Web Interfaces", "Edge Deployment"],
      achievements: ["Secure document processing pipeline", "Privacy-preserving AI implementation"],
      keywords: ["document understanding", "OCR", "NLP", "Nokia", "secure AI", "edge deployment"]
    },
    {
      id: "exp5",
      title: "AI/NLP Engineer – Privacy-Aware Language Models & Automation",
      company: "Nokia (International)",
      location: "Remote",
      duration: "2024",
      type: "work",
      description: "Developed privacy-aware LLM pipelines for international competition",
      responsibilities: [
        "Designed a real-time LLM input anonymization pipeline using Python, spaCy, custom regex filters, and contextual redaction logic",
        "Utilized Named Entity Recognition (NER), pattern matching, and rule-based token masking to sanitize user prompts in secure NLP workflows",
        "Benchmarked anonymization latency and system responsiveness using local execution under limited resource constraints",
        "Employed Git for version control and lightweight shell scripts to automate test cycles during competition",
        "Ranked in the top 3 out of 50+ international teams; demonstrated robustness and security awareness in privacy-sensitive AI pipelines"
      ],
      technologies: ["Python", "spaCy", "NER", "LLM", "Git", "Shell Scripting"],
      achievements: ["Top 3 ranking in international competition (50+ teams)", "Privacy-aware AI pipeline"],
      keywords: ["NLP", "LLM", "privacy", "anonymization", "competition", "Nokia", "international"]
    },
    {
      id: "exp6",
      title: "Computer Vision Engineer – Real-Time Detection & Edge AI",
      company: "Welyne",
      location: "Tunis, Tunisia",
      duration: "2023",
      type: "work",
      description: "Developed computer vision solutions for real-time detection and edge deployment",
      responsibilities: [
        "Built modular command-line pipelines in Bash and Python for developing and evaluating computer vision models",
        "Developed and published 'atar' — a Python package for automation and tracking of anomaly recognition pipelines",
        "Integrated YOLOv8 for real-time forest fire detection from camera feeds, simulating industrial visual inspection tasks",
        "Optimized full computer vision workflow (data preparation, model training, inference) for edge deployment in resource-constrained environments",
        "Applied real-time visual inference models in embedded use cases, supporting robotics and aerospace inspection systems"
      ],
      technologies: ["Python", "Bash", "YOLOv8", "Computer Vision", "Edge AI", "PyPI"],
      achievements: ["Published Python package 'atar' on PyPI", "Real-time fire detection system"],
      keywords: ["computer vision", "YOLOv8", "edge AI", "real-time detection", "PyPI package", "forest fire"]
    },
    {
      id: "exp7",
      title: "Embedded Systems Engineer – IoT & Wireless Automation",
      company: "Atlantic Dunes",
      location: "Tangier, Morocco",
      duration: "2022",
      type: "work",
      description: "Developed IoT systems with wireless automation for smart irrigation",
      responsibilities: [
        "Developed a smart irrigation system using ESP32 and LoRa for low-power, long-range wireless communication across distributed field nodes",
        "Integrated soil moisture and temperature sensors with real-time automation logic to control irrigation actuators",
        "Implemented robust LoRa communication topologies (point-to-point, star) ensuring reliable edge-to-central data transmission",
        "Designed and deployed a Python-based backend with REST APIs hosted on a secure self-managed Linux server",
        "Created a web dashboard for real-time monitoring, manual overrides, and system analytics, with user access control",
        "Extended a modular ESP32 C++ library for sensor/actuator handling and LoRa messaging, supporting scalable deployments"
      ],
      technologies: ["ESP32", "LoRa", "Python", "REST API", "Linux", "C++", "IoT"],
      achievements: ["Smart irrigation system deployment", "Scalable LoRa communication network"],
      keywords: ["IoT", "smart irrigation", "LoRa", "ESP32", "wireless automation", "embedded systems"]
    },
    {
      id: "exp8",
      title: "Technical Team Lead – Student Robotics & Innovation Club",
      company: "ID Club – Université Privée de Fès",
      location: "Fez, Morocco",
      duration: "Oct 2021 - Oct 2022",
      type: "leadership",
      description: "Led student robotics teams and innovation projects",
      responsibilities: [
        "Led and supported student teams through the development of embedded robotics projects combining automation, AI, and real-time control",
        "Designed Python-based automation scripts and assisted in integrating AI-based image processing for autonomous navigation and object detection",
        "Provided technical mentorship on microcontroller programming, motor control, and sensor-actuator coordination in competitive environments",
        "Coached and prepared the competition team that won 1st place nationally, demonstrating strong system integration and real-time performance",
        "Organized robotics workshops and hackathons to encourage innovation in embedded intelligence, AI-assisted robotics, and mechatronics"
      ],
      technologies: ["Python", "AI", "Image Processing", "Microcontrollers", "Robotics", "Automation"],
      achievements: ["1st place national robotics competition", "National Robotics Champion"],
      keywords: ["robotics", "team leadership", "national champion", "AI robotics", "student mentorship"]
    },
    {
      id: "exp9",
      title: "Software Engineer – Real-Time Inventory Systems & Operator Interfaces",
      company: "SEBN-MA",
      location: "Tangier, Morocco",
      duration: "Jul 2021 - Oct 2021",
      type: "work",
      description: "Developed real-time inventory management systems for automotive production",
      responsibilities: [
        "Designed and implemented a Python-backed web application (Stock App) for real-time inventory management using industrial barcode scanners",
        "Automated component tracking on the factory floor with real-time scan ingestion and backend updates to maintain accurate logistics flow",
        "Built operator-facing UI components with streamlined workflows, improving usability for non-technical factory staff",
        "Assisted with infrastructure diagnostics, system monitoring, and enhancement of IT tools used in automotive production systems",
        "Contributed to improving data accuracy and process traceability through responsive feedback and real-time database updates"
      ],
      technologies: ["Python", "Web Applications", "Barcode Scanners", "Real-time Systems", "UI/UX"],
      achievements: ["Real-time inventory system implementation", "Improved factory floor efficiency"],
      keywords: ["inventory management", "automotive", "real-time systems", "barcode scanning", "factory automation"]
    },
    {
      id: "exp10",
      title: "Robotics Engineer – Embedded Systems & Autonomous Logic (SPARKY Team)",
      company: "Robotics Club – Université Privée de Fès",
      location: "Fez, Morocco",
      duration: "Sep 2020 - Nov 2021",
      type: "work",
      description: "Developed autonomous mobile robots for competitive robotics",
      responsibilities: [
        "Designed and programmed embedded control systems for autonomous mobile robots using microcontrollers and sensor-actuator integration",
        "Developed real-time logic sequences in Python and C/C++ for motion planning, task automation, and environment interaction",
        "Built and tested functional robotic prototypes used in national competitions, focusing on autonomy and robustness under time constraints",
        "Led technical development that contributed to winning 1st place nationally, earning recognition as National Robotics Champion",
        "Collaborated on full-cycle design, hardware interfacing, and troubleshooting for real-time robot behavior in dynamic environments"
      ],
      technologies: ["Python", "C/C++", "Microcontrollers", "Autonomous Systems", "Motion Planning"],
      achievements: ["1st place national competition", "National Robotics Champion recognition"],
      keywords: ["autonomous robotics", "embedded systems", "national champion", "SPARKY", "competition robotics"]
    }
  ],  projects: [
    {
      id: "proj1",
      name: "ATAR - Anomaly Recognition Pipeline",
      description: "Python package for automation and tracking of anomaly recognition pipelines, published on PyPI",
      technologies: ["Python", "Computer Vision", "Machine Learning", "PyPI"],
      url: "https://pypi.org/project/atar/1.0.13/",
      highlights: ["Published open-source package", "Automated anomaly detection", "Modular pipeline architecture"],
      category: "AI/ML",
      status: "completed"
    },
    {
      id: "proj2",
      name: "Smart Irrigation IoT System",
      description: "ESP32-based smart irrigation system with LoRa communication for distributed field monitoring",
      technologies: ["ESP32", "LoRa", "Python", "IoT", "Sensors", "REST API"],
      highlights: ["Long-range wireless communication", "Real-time monitoring dashboard", "Scalable deployment"],
      category: "IoT",
      status: "completed"
    },
    {
      id: "proj3",
      name: "Medical AI Diagnostic Assistant",
      description: "Deep learning models for medical diagnostic assistance with explainable AI features",
      technologies: ["Python", "CNN", "RNN", "Medical Imaging", "Explainable AI"],
      highlights: ["Clinical prototype deployment", "Investor presentation success", "Real-time image classification"],
      category: "Healthcare AI",
      status: "completed"
    },
    {
      id: "proj4",
      name: "Document Understanding AI Pipeline",
      description: "Secure on-premise AI pipeline for extracting structured data from scanned documents",
      technologies: ["Python", "OCR", "NLP", "Web Interfaces", "Edge Deployment"],
      highlights: ["Privacy-preserving AI", "Handwritten document processing", "Secure authentication layers"],
      category: "NLP",
      status: "completed"
    },
    {
      id: "proj5",
      name: "Privacy-Aware LLM Anonymization",
      description: "Real-time LLM input anonymization pipeline for privacy-sensitive applications",
      technologies: ["Python", "spaCy", "NER", "LLM", "Privacy AI"],
      highlights: ["Top 3 in international competition", "Real-time anonymization", "50+ international teams"],
      category: "Privacy AI",
      status: "completed"
    },
    {
      id: "proj6",
      name: "Forest Fire Detection System",
      description: "Real-time forest fire detection using YOLOv8 and computer vision for industrial inspection",
      technologies: ["YOLOv8", "Computer Vision", "Python", "Edge AI", "Real-time Detection"],
      highlights: ["Real-time camera feed processing", "Edge deployment optimization", "Industrial visual inspection"],
      category: "Computer Vision",
      status: "completed"
    },
    {
      id: "proj7",
      name: "SPARKY Autonomous Robot",
      description: "National championship-winning autonomous mobile robot with advanced navigation",
      technologies: ["Python", "C/C++", "Microcontrollers", "Autonomous Systems", "Motion Planning"],
      highlights: ["1st place national competition", "National Robotics Champion", "Real-time autonomous navigation"],
      category: "Robotics",
      status: "completed"
    },
    {
      id: "proj8",
      name: "Stock Management System",
      description: "Real-time inventory management system for automotive production with barcode scanning",
      technologies: ["Python", "Web Applications", "Barcode Scanners", "Real-time Systems"],
      highlights: ["Factory floor automation", "Real-time data accuracy", "Improved logistics flow"],
      category: "Industrial Software",
      status: "completed"
    },
    {
      id: "proj9",
      name: "Portfolio Website with AI Chat",
      description: "Modern portfolio website with AI-powered chat assistant using Groq API",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Groq API"],
      url: "https://otmanmouhib.com",
      highlights: ["AI-powered chat assistant", "Responsive design", "Performance optimized"],
      category: "Web Development",
      status: "completed"
    }
  ],  skills: {
    programming: ["Python", "JavaScript", "TypeScript", "C/C++", "Java", "SQL", "HTML/CSS", "Bash"],
    frameworks: ["React", "Next.js", "Node.js", "Express", "TensorFlow", "PyTorch", "Flask", "Django", "spaCy"],
    aiMl: ["Deep Learning", "Computer Vision", "NLP", "CNN", "RNN", "YOLOv8", "Machine Learning", "Explainable AI", "Privacy AI"],
    embedded: ["ESP32", "ARM Cortex-A53", "Microcontrollers", "IoT", "LoRa", "MQTT", "Embedded Systems"],
    tools: ["Docker", "Git", "Linux", "Conda", "CI/CD", "perf", "PMU", "REST API"],
    databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    cloud: ["AWS", "Google Cloud", "Self-hosted servers", "Ubuntu Server"],
    specializations: ["Robotics", "Performance Modeling", "Edge AI", "Medical AI", "Industrial Automation"],
    languages: ["English (Fluent)", "French (Fluent)", "Arabic (Native)"]
  },  certifications: [
    {
      name: "National Robotics Champion",
      issuer: "Morocco National Robotics Competition",
      date: "2021",
      description: "1st place in national robotics competition with SPARKY team"
    },
    {
      name: "International AI Competition - Top 3",
      issuer: "Nokia International Competition",
      date: "2024",
      description: "Ranked top 3 out of 50+ international teams for privacy-aware AI pipeline"
    },
    {
      name: "Published Python Package",
      issuer: "PyPI",
      date: "2023",
      description: "Published 'atar' package for anomaly recognition pipelines"
    },
    {
      name: "Artificial Intelligence Analyst",
      issuer: "IBM",
      date: "Jun 2024"
    },
    {
      name: "Data Analysis with Python",
      issuer: "IBM",
      date: "2024"
    },
    {
      name: "Machine Learning Pipelines with Azure ML Studio",
      issuer: "Coursera",
      date: "2024"
    },
    {
      name: "Machine Learning with PySpark: Customer Churn",
      issuer: "Coursera",
      date: "2024"
    },
    {
      name: "Machine Learning with ChatGPT: Image Classification",
      issuer: "Coursera",
      date: "2024"
    },
    {
      name: "Build a ML Web App with Streamlit and Python",
      issuer: "Coursera",
      date: "2024"
    },
    {
      name: "MongoDB Basics",
      issuer: "MongoDB University",
      date: "2024"
    },
    {
      name: "Analyser vos données avec Python",
      issuer: "Coursera",
      date: "2024"
    },
    {
      name: "Getting Started with Azure DevOps Boards",
      issuer: "Coursera",
      date: "2024"
    },
    {
      name: "Create a Virtual Private Cloud (VPC) Using AWS",
      issuer: "Coursera",
      date: "2024"
    },
    {
      name: "Scripting Bash – Découverte du Langage de Programmation",
      issuer: "Coursera",
      date: "2024"
    },
    {
      name: "How to Create a Jira SCRUM Project",
      issuer: "Coursera",
      date: "2024"
    },
    {
      name: "Build Dashboards in Power BI",
      issuer: "Coursera",
      date: "2024"
    },
    {
      name: "Create a Sales Dashboard using Power BI",
      issuer: "Coursera",
      date: "2024"
    },
    {
      name: "Getting Started with Power BI Desktop",
      issuer: "Coursera",
      date: "2024"
    },
    {
      name: "Prepare, Clean, Transform, and Load Data using Power BI",
      issuer: "Coursera",
      date: "2024"
    },
    {
      name: "Business Model Canvas",
      issuer: "Coursera",
      date: "2024"
    },
    {
      name: "Creating a Product-Market Fit with Value Proposition Canvas",
      issuer: "Coursera",
      date: "2024"
    },
    {
      name: "Blockchain Basics",
      issuer: "Coursera",
      date: "2024"
    }
  ],
  // Helper functions for data access
  getExperiencesByType: (type: string) => 
    portfolioData.experiences.filter(exp => exp.type === type),

  getProjectsByCategory: (category: string) => 
    portfolioData.projects.filter(proj => proj.category === category),

  searchExperiences: (query: string) => 
    portfolioData.experiences.filter(exp => 
      exp.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase())) ||
      exp.title.toLowerCase().includes(query.toLowerCase()) ||
      exp.company.toLowerCase().includes(query.toLowerCase())
    ),

  getRecentExperiences: (count: number = 5) =>
    portfolioData.experiences.slice(0, count),

  getFeaturedProjects: () =>
    portfolioData.projects.filter(proj => 
      proj.highlights.length > 0 || proj.url
    ),

  getTechnologiesUsed: () => {
    const allTechs = new Set();
    portfolioData.experiences.forEach(exp => 
      exp.technologies.forEach(tech => allTechs.add(tech))
    );
    portfolioData.projects.forEach(proj => 
      proj.technologies.forEach(tech => allTechs.add(tech))
    );
    return Array.from(allTechs);
  },
  getAchievements: () => {
    const achievements: Array<{achievement: string, company: string, year: string}> = [];
    portfolioData.experiences.forEach(exp => {
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
};
