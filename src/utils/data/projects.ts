import { Project } from '../types/portfolio';

export const projectsData: Project[] = [
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
];
