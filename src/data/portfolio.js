import mirajPhoto from '../assets/miraj.jpg.jpeg';
import agribotImage from '../assets/agribot.jpg';
import ecoriseImage from '../assets/ecorise.png';
import pharmacyImage from '../assets/pharmacy.jpg.jpg';
import fcommerceOrderDeskImage from '../assets/fcommerce-order-desk.png';
import ragChatImage from '../assets/rag-chat.png';
import tomatoMaturityImage from '../assets/tomato-maturity.jpg';

export const portfolioData = {
  hero: {
    name: "Miraj Hossain",
    title: "Software Engineer | Full-Stack & AI Developer",
    intro: "Computer Science & Engineering graduate focused on clean, secure backend code and deep learning at the edge.",
    portrait: {
      image: mirajPhoto,
      fallbackInitials: 'MH',
      chip1: 'OPEN TO INTERNSHIPS',
      chip2: 'Hello World 😊'
    }
  },
  about: {
    summary: "Computer Science & Engineering graduate (AI & Information Systems). I build full-stack web applications with React, PHP, and MySQL, including REST APIs, secure authentication, and role-based access control. I also deploy low-latency deep learning models on edge hardware using Python and OpenCV. Comfortable with Git, Linux, and Node.js, and eager to write clean, testable, secure backend code.",
    location: "Gazipur, Dhaka, Bangladesh",
    resumeLink: "#" // TODO: Add resume link
  },
  skills: [
    {
      category: "Languages",
      items: ["Python", "JavaScript", "PHP", "SQL", "HTML5", "CSS3", "R"]
    },
    {
      category: "Backend & APIs",
      items: ["Node.js", "RESTful API design", "microservice architecture", "Redis", "authentication", "role-based access control", "data validation"]
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "responsive web design", "UX fundamentals"]
    },
    {
      category: "Databases",
      items: ["MySQL", "RDBMS", "PL/SQL", "schema design"]
    },
    {
      category: "Tools & Practices",
      items: ["Git", "Docker", "Linux", "performance optimization"]
    },
    {
      category: "AI & Computer Vision",
      items: ["OpenCV", "MobileNetV3", "YOLO (v8, v9, v11)", "deep learning", "Edge AI", "AI API integration"]
    },
    {
      category: "Hardware & IoT",
      items: ["Raspberry Pi", "ESP32-CAM", "IoT sensors"]
    }
  ],
  contact: {
    email: "mirajh417@gmail.com",
    phone: "+880 1813-609364",
    address: "Gazipur, Dhaka 1230, Bangladesh",
    socials: {
      github: "https://github.com/MirajHossain22",
      linkedin: "https://www.linkedin.com/in/miraj-hossain-075590257"
    },
    socialNetworks: [
      { name: 'GitHub', url: 'https://github.com/MirajHossain22', icon: 'github' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/miraj-hossain-075590257', icon: 'linkedin' },
      { name: 'Facebook', url: 'https://www.facebook.com/share/1DojQrFgY9/', icon: 'facebook' },
      { name: 'Instagram', url: 'https://www.instagram.com/mirajh417?srtk=NDdyNGMyOXl2MXhu', icon: 'instagram' },
      { name: 'Twitter/X', url: 'https://x.com/HMiraj183', icon: 'twitter' },
      { name: 'WhatsApp', url: 'https://wa.me/8801813609364', icon: 'whatsapp' },
      { name: 'Discord', url: 'https://discord.com/users/1005893539089100810', icon: 'discord' }
    ]
  },
  projects: [
    {
      id: 6,
      title: "AI-Powered PDF Document Chat (RAG)",
      tags: ["TypeScript", "Next.js", "PostgreSQL", "pgvector (HNSW index)", "Supabase", "Redis", "Google Gemini", "Vercel"],
      description: "A full-stack app where users upload private PDFs and chat with them, getting streamed answers with page-level citations.",
      highlights: ["Passwordless auth, row-level security, Zod validation, and Redis per-user rate limiting.", "93.8% top-1 retrieval accuracy on a 20-question evaluation, with ~3.0 s average latency."],
      image: ragChatImage,
      imageAlt: "AI-Powered PDF Document Chat interface",
      github: "https://github.com/MirajHossain22/RAG-chat",
      demo: "https://rag-chat-swart.vercel.app/"
    },
    {
      id: 7,
      title: "F-Commerce Order Desk (Python Backend & REST API)",
      tags: ["Python", "FastAPI", "SQLite", "SQL", "Pydantic", "Gemini API", "Docker", "pytest", "GitHub Actions"],
      description: "FastAPI backend for social-commerce sellers that uses Gemini to turn Bangla, Banglish and English chat messages into validated orders.",
      highlights: ["Transactional order confirmation, inventory deduction, stale-update checks, seller auth, per-seller data isolation, and CSRF protection.", "241 pytest tests, CI, and Docker deployment."],
      image: fcommerceOrderDeskImage,
      imageAlt: "F-Commerce Order Desk project dashboard",
      imagePosition: "top",
      github: "https://github.com/MirajHossain22/Fcommerce-order-extractor",
      demo: "https://fcommerce-order-extractor.onrender.com/"
    },
    {
      id: 8,
      title: "Task Tracker API (Mini-Jira Backend)",
      tags: ["C#", "ASP.NET Core 8", "PostgreSQL", "Redis", "EF Core", "Docker", "xUnit", "GitHub Actions"],
      description: "A Jira-style task management REST API.",
      highlights: ["JWT auth with BCrypt, owner-scoped access, layered architecture (Controllers → Services → Repositories), FluentValidation, filtering/sorting/pagination, and a workflow state machine.", "Parameterized SQL reporting, Redis caching with version-based invalidation, 10 xUnit/Moq tests, and Swagger docs."],
      github: "https://github.com/MirajHossain22/mini-jira",
      demo: null
    },
    {
      id: 1,
      title: "EcoRise: Full-Stack Sustainability & Eco-Audit Platform",
      tags: ["React", "PHP", "MySQL", "REST API"],
      description: "Built a full-stack sustainability web app backed by 10+ relational database schemas and dynamic user views. Designed responsive REST API endpoints and state management workflows that reduced client-side payload latency on the reporting dashboard. Integrated React components with PHP server logic across multi-step audit forms, validating input on both client and server. Implemented secure authentication and role-based access control.",
      image: ecoriseImage,
      imageAlt: "EcoRise project logo",
      imageFit: "contain",
      github: "https://github.com/MirajHossain22/EcoRise.git",
      demo: "#"
    },
    {
      id: 2,
      title: "AgriBot: Edge AI Crop Disease Diagnostic & Web Advisory System",
      tags: ["Python", "OpenCV", "MobileNetV3", "Raspberry Pi"],
      description: "Undergrad thesis (Ongoing). Deployed MobileNetV3 on a Raspberry Pi for low-latency classification of 38 crop condition classes. Built an OpenCV pipeline that filtered redundant and motion-blurred frames, cutting redundant downstream computation by over 50%. Added automated leaf ROI extraction and white-background normalization to reduce field-background domain shift before classification. Integrated a web interface with an external AI API (REST) to log edge telemetry and generate structured treatment guidance.",
      image: agribotImage,
      imageAlt: "AgriBot autonomous crop diagnostic robot",
      imagePosition: "center",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Custom CNN for Tomato Maturity Classification",
      tags: ["Python", "PyTorch", "NumPy", "scikit-learn", "Deep Learning"],
      description: "Built a custom CNN from scratch in PyTorch to classify tomatoes into four maturity classes: Mature, Immature, Fresh, and Rotten. Prepared a 2,000-image dataset with preprocessing and augmentation, compared variants with Batch Normalization and Dropout, and evaluated them using accuracy, precision, recall, F1-score, confusion matrices, and training-validation curves.",
      image: tomatoMaturityImage,
      imageAlt: "Custom CNN tomato maturity classification overview",
      imagePosition: "center",
      github: "https://github.com/MirajHossain22/Custom-CNN-to-classify-Tomato-Maturity.git",
      demo: null
    },
    {
      id: 4,
      title: "Pharmacy Expiry Shelf Check",
      tags: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Vercel"],
      description: "Built a responsive React and Next.js SPA that flags near-expiry pharmacy stock within the 60-day distributor return window. It calculates dynamic date tiers and real-time Value at Risk in BDT client-side, with instant KPI updates and item archiving after return confirmation—without page reloads.",
      image: pharmacyImage,
      imageAlt: "Pharmacy Expiry Shelf Check dashboard",
      imagePosition: "center",
      github: null,
      demo: "https://lsh26-t001-p02.vercel.app/"
    },
    /* {
    // Legacy project data retained for reference; not rendered.
      id: 99,
      title: "Pharmacy Expiry Shelf Check",
      tags: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Vercel"],
      description: "Built a responsive React and Next.js SPA that flags near-expiry pharmacy stock within the 60-day distributor return window. It calculates dynamic date tiers and real-time Value at Risk in BDT client-side, with instant KPI updates and item archiving after return confirmation—without page reloads.",
      image: null,
      imageAlt: "Pharmacy Expiry Shelf Check dashboard",
      imagePosition: "center",
      github: null,
      demo: "https://lsh26-t001-p02.vercel.app/"
    },
    {
      id: 100,
      title: "F-Commerce Order Extractor",
      tags: ["Python", "FastAPI", "Gemini API", "SQLite", "Docker", "GitHub Actions"],
      description: "AI order extractor for Bangladeshi F-commerce: Bangla, Banglish, or English chat in; validated orders, checkout, tracking, and inventory out. Built with FastAPI, Gemini, and SQLite, with Bangla digit conversion, strict Bangladeshi phone validation, tokenized links, atomic inventory updates, 241 offline tests, CI, and evaluation against a regex baseline.",
      image: null,
      imageAlt: "F-Commerce Order Extractor seller dashboard",
      imagePosition: "top",
      github: null,
      demo: null
    }
    */
  ],
  education: [
    {
      id: 1,
      degree: "BSc in Computer Science & Engineering",
      institution: "American International University-Bangladesh",
      period: "2022 – 2026",
      details: "Major: Information Systems & Artificial Intelligence. Coursework: Data Structures and Algorithms, Database Management Systems, Web Technologies, Artificial Intelligence."
    },
    {
      id: 2,
      degree: "HSC",
      institution: "Uttara Model College, Dhaka",
      period: "2019 – 2021",
      details: "GPA 5.00"
    },
    {
      id: 3,
      degree: "SSC",
      institution: "Rayerdia High School, Kaligonj",
      period: "2015 – 2019",
      details: "GPA 4.50"
    }
  ],
  publications: [
    {
      id: 1,
      title: "Development and Implementation of an IoT-Based Autonomous Agribot for Precision Farming",
      conference: "Proceedings of the 6th Annual Paper Meet (IEB-EE APM2025)",
      location: "Dhaka, Bangladesh",
      date: "Dec 2025",
      description: "Co-authored peer-reviewed paper on an autonomous agricultural diagnostic robot integrating ESP32-CAM video streaming with multi-sensor telemetry."
    }
  ]
};
