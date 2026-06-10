/**
 * Central content file for the portfolio.
 * Edit the values below to customize every section of the site.
 */

export const siteConfig = {
  name: "Sahani Rajapakshe",
  initials: "SR",
  title: "AI & Full Stack Software Engineer",
  location: "Sri Lanka / Dubai, UAE",
  locationDetail: "Open to remote & hybrid roles globally",
  email: "sahanisineka@gmail.com",
  phones: ["+971 55 237 4987", "+971 50 466 7598"],
  linkedin: "https://www.linkedin.com/in/sahanirajapakshe/",
  github: "https://github.com/sahani94rajapakshe",
  resumeFile: "/Resume_Sahani-Rajapakshe.pdf",
};

export const hero = {
  greeting: "Hi, I'm",
  headline: "Sahani Rajapakshe",
  typedRoles: [
    "AI & Full Stack Software Engineer",
    "Generative AI Developer",
    "Backend Systems Engineer",
    "React & .NET Specialist",
  ],
  summary:
    "I build scalable enterprise applications, AI-powered search systems, and distributed backend services — turning LLMs, vector embeddings, and solid engineering into production-grade products.",
  stats: [
    { value: "4+", label: "Years Experience" },
    { value: "3", label: "Companies" },
    { value: "AI + Fintech", label: "Core Domains" },
  ],
};

export const about = {
  paragraphs: [
    "I'm an AI-focused Full Stack Software Engineer with 4+ years of experience building scalable enterprise applications, AI-powered search systems, and distributed backend services across fintech and healthcare-tech domains.",
    "My core strengths span ReactJS, Node.js, .NET, and Java Spring Boot on the application side, with PostgreSQL (pgvector), LangChain, and RAG pipelines powering the AI layer. I design RESTful microservice architectures secured with OAuth2/JWT and optimized with Redis caching and CI/CD automation.",
    "I'm experienced in semantic search, vector embeddings, AI insight systems, and production-grade backend engineering — and I love shipping features that make complex data genuinely useful.",
  ],
  highlights: [
    "Semantic search & RAG systems",
    "Microservices architecture",
    "OAuth2 / JWT / RBAC security",
    "CI/CD & DevOps automation",
    "Performance optimization",
    "Production support & SLA delivery",
  ],
};

export type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: ["TypeScript", "JavaScript", "C#", "SQL"],
  },
  {
    title: "Frontend Technologies",
    icon: "layout",
    skills: ["ReactJS", "Next.js", "Material UI (MUI)", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend & API Development",
    icon: "server",
    skills: [
      "NestJS",
      "ASP.NET Core",
      ".NET",
      "Spring Boot",
      "REST APIs",
      "GraphQL",
      "Microservices",
    ],
  },
  {
    title: "Databases & Data Systems",
    icon: "database",
    skills: ["PostgreSQL (pgvector)", "MySQL", "SQL Server", "Redis"],
  },
  {
    title: "Generative AI",
    icon: "sparkles",
    skills: ["Semantic Search", "Vector Embeddings", "RAG", "LangChain"],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: ["Azure", "Docker", "GitHub Actions", "CI/CD"],
  },
  {
    title: "Architecture & Practices",
    icon: "shield",
    skills: ["OAuth2", "JWT", "RBAC", "Distributed Systems", "Agile/Scrum"],
  },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  achievements: string[];
  /** Show this many bullets before "Show more" (mobile-friendly). */
  featuredCount?: number;
  techStack: string[];
};

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Mediio.net",
    location: "South Korea (Remote)",
    period: "Oct 2025 – Present",
    current: true,
    featuredCount: 4,
    achievements: [
      "Designed and implemented AI-powered semantic search and recommendation systems using vector embeddings and PostgreSQL (pgvector) to improve information retrieval accuracy.",
      "Built an AI Insight feature analyzing structured and unstructured datasets to generate decision-support summaries.",
      "Developed an AI medical assistant using LLM and RAG-based retrieval to identify doctor-patient conversations and generate medical reports from discussions and clinical notes.",
      "Developed scalable microservices using Node.js (NestJS) and Java-based services for distributed enterprise applications.",
      "Implemented secure Identity & Access Management using OAuth2.0, JWT, and RBAC.",
      "Applied Redis caching and performance optimization strategies to reduce latency, with structured logging and monitoring for observability.",
      "Contributed to CI/CD pipelines (Docker, GitHub Actions) ensuring high-quality, automated deployments.",
    ],
    techStack: [
      "ReactJS",
      "Next.js",
      "TypeScript",
      "NestJS",
      "Java",
      "PostgreSQL (pgvector)",
      "LLM",
      "RAG",
      "Redis",
      "Docker",
    ],
  },
  {
    role: "Associate Software Engineer | Full Stack / .NET",
    company: "Synapsys LTD",
    location: "Sri Lanka",
    period: "Apr 2022 – Sep 2025",
    featuredCount: 4,
    achievements: [
      "Migrated enterprise banking systems from .NET Framework to .NET Core using Onion Architecture.",
      "Designed and implemented high-volume secure REST APIs for financial transaction processing.",
      "Optimized complex SQL queries and stored procedures improving transaction throughput by 80%.",
      "Implemented secure authentication using JWT and OAuth2.0 standards.",
      "Integrated Redis and message queues (RabbitMQ) for distributed reliability.",
      "Developed frontend modules using React and JavaScript; maintained high unit test coverage and CI/CD pipeline automation.",
      "Troubleshot production issues, delivered defect fixes with minimal rework, and collaborated within Agile SDLC using Jira & Confluence.",
    ],
    techStack: [
      "C#",
      ".NET Core (3.1–9)",
      "ASP.NET Core",
      "Entity Framework",
      "SQL Server",
      "Redis",
      "RabbitMQ",
      "ML.NET",
      "Azure",
      "GitHub Actions",
    ],
  },
  {
    role: "Trainee Software Developer",
    company: "MobiOs Pvt Ltd",
    location: "Sri Lanka",
    period: "Sep 2019 – Mar 2020",
    achievements: [
      "Developed backend REST APIs using Java and SQL Server.",
      "Built frontend UI modules using React and JavaScript.",
      "Documented APIs and supported integration testing.",
    ],
    techStack: ["Java", "SQL Server", "REST APIs", "React", "JavaScript"],
  },
];

export type Project = {
  title: string;
  description: string;
  highlights: string[];
  techStack: string[];
  category: "personal" | "professional";
  company?: string;
  githubUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "AI Medical Assistant",
    category: "professional",
    company: "Mediio.net",
    description:
      "Production RAG system that analyzes doctor–patient conversations and clinical notes to generate structured medical reports.",
    highlights: [
      "LLM-powered retrieval over unstructured clinical data with context-aware report generation.",
      "Integrated with NestJS microservices and PostgreSQL for secure, scalable healthcare workflows.",
      "Designed for accuracy and observability in a regulated healthcare environment.",
    ],
    techStack: ["LLM", "RAG", "NestJS", "PostgreSQL", "TypeScript"],
  },
  {
    title: "Semantic Search & AI Insights",
    category: "professional",
    company: "Mediio.net",
    description:
      "Vector-embedding search and analytics platform improving information retrieval across structured and unstructured enterprise data.",
    highlights: [
      "Built semantic search and recommendation using pgvector and embedding pipelines.",
      "AI Insight feature surfaces decision-support summaries from complex datasets.",
      "Redis caching and monitoring reduced latency for high-traffic queries.",
    ],
    techStack: ["pgvector", "PostgreSQL", "Redis", "NestJS", "ReactJS"],
  },
  {
    title: "Enterprise Banking Platform Migration",
    category: "professional",
    company: "Synapsys LTD",
    description:
      "Large-scale migration of core banking systems from .NET Framework to .NET Core with improved throughput and maintainability.",
    highlights: [
      "Migrated monolithic banking modules to .NET Core using Onion Architecture.",
      "Delivered high-volume secure REST APIs for financial transaction processing.",
      "Optimized SQL workloads, improving transaction throughput by 80%.",
    ],
    techStack: [".NET Core", "ASP.NET Core", "SQL Server", "Redis", "RabbitMQ"],
  },
  {
    title: "Secure Auth API with Anomaly Detection",
    category: "personal",
    description:
      "A security-first authentication API combining modern .NET with machine learning to detect suspicious login activity in real time.",
    highlights: [
      "Developed secure REST APIs using .NET 9 with OAuth2.0 and JWT authentication.",
      "Implemented ML.NET anomaly detection to identify suspicious login activity.",
      "Integrated CI/CD pipeline for automated build and deployment.",
    ],
    techStack: [".NET 9", "OAuth2.0", "JWT", "ML.NET", "CI/CD"],
    githubUrl: "https://github.com/sahani94rajapakshe/auth-api-anomaly-detection",
  },
  {
    title: "Book Price Scraper",
    category: "personal",
    description:
      "An automated price-monitoring tool that tracks book prices over time with scheduled scraping and persistent storage.",
    highlights: [
      "Python-based scraper using BeautifulSoup with pagination and category navigation.",
      "Automated backups and Excel export for historical price tracking.",
    ],
    techStack: ["Python", "BeautifulSoup", "SQLite", "Automation"],
    githubUrl: "https://github.com/sahani94rajapakshe/book-price-scraper",
    demoUrl: "https://youtu.be/cskb73iJlo4",
  },
];

export const education = [
  {
    degree: "BSc. (Hons.) Software Engineering",
    institution: "University of Kelaniya, Sri Lanka",
    detail: "GPA: 3.59 / 4.0 — Second Class Upper Division",
    focus: "Major: Web Development | Minor: Machine Learning",
  },
];

export const certifications = [
  {
    title: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    status: "In Progress",
    target: "Expected 2026",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

