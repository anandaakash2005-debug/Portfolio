import stratifyDemoMp4 from "@/assets/stratify-demo.mp4";
import stratifyDemoWebm from "@/assets/stratify-demo.webm";

import payrollLoopMp4 from "@/assets/payroll-demo-loop.mp4";
import payrollLoopWebm from "@/assets/payroll-demo-loop.webm";

import jansetuDemoMp4 from "@/assets/jansetu-demo.mp4";
import jansetuDemoWebm from "@/assets/jansetu-demo.webm";

export const profile = {
  name: "Akash Mahapatra",
  email: "anandaakash2005@gmail.com",
  linkedin: "https://www.linkedin.com/in/akash-mahapatra-291597363",
  github: "https://github.com/anandaakash2005-debug",
  instagram: "https://www.instagram.com/mahapatra2166",
};

export type Project = {
  id: string;
  name: string;
  category: string;
  summary: string;
  problem: string;
  built: string;
  capabilities: string[];
  tech: string[];
  liveUrl?: string;
  liveLabel?: string;
  repoUrl?: string;
  note?: string;
  videoId?: string;
  videoSources?: { src: string; type: string }[];
  motif: "sat" | "graph" | "health" | "flow" | "layers";
  caseStudy: { approach: string; architecture: string[]; learned?: string };
};

export const projects: Project[] = [
  {
    id: "satquery",
    name: "SatQuery AI",
    category: "Remote Sensing & Geospatial AI Platform",
    summary:
      "A multimodal satellite-image analysis platform that routes remote-sensing questions through task-appropriate vision, deep-learning and spectral-analysis methods.",
    problem:
      "Remote-sensing analysis often requires different methods for different questions rather than one universal model.",
    built:
      "SatQuery AI routes imagery and user questions through appropriate image-analysis methods and combines model outputs with deterministic remote-sensing evidence.",
    capabilities: [
      "Land-cover analysis and object localization",
      "Before-and-after image comparison",
      "GeoTIFF workflows with optical/SAR analysis",
      "Spectral indices for evidence-based verification",
    ],
    tech: [
      "Python",
      "PyTorch",
      "SegFormer",
      "Grounding DINO",
      "Siamese CNN",
      "GeoTIFF",
      "Spectral Indices",
    ],
    liveUrl: "https://satquery-ai-ris1.onrender.com/",
    videoId: "qjhBuW_rYPM",
    motif: "sat",
    caseStudy: {
      approach:
        "Instead of one model for every question, the system is task-dependent: only the methods relevant to a query are run, and their outputs are cross-checked against deterministic spectral evidence.",
      architecture: [
        "Query + imagery input",
        "Task-dependent routing",
        "SegFormer · Grounding DINO · MLP/CNN water analysis · Siamese CNN",
        "Spectral-index evidence",
        "Combined, evidence-backed answer",
      ],
    },
  },
  {
    id: "stratify",
    name: "Stratify.AI",
    category: "Hybrid AI Startup Intelligence Platform",
    summary:
      "A hybrid AI platform combining deterministic analytics, machine-learning classifiers, semantic retrieval and context-grounded LLM reasoning for startup intelligence.",
    problem:
      "Founders need structured feedback on runway, funding readiness and next steps — not just generic chatbot answers.",
    built:
      "A layered system where deterministic analytics and rule-based scoring sit alongside trained classifiers, embedding-based retrieval and LLM reasoning. The Founder Copilot can use startup-analysis context.",
    capabilities: [
      "Startup analysis with financial runway / burn analysis",
      "Funding readiness and intent classification",
      "Founder Copilot grounded in analysis context",
      "Mentor recommendations via semantic similarity",
    ],
    tech: [
      "Python",
      "FastAPI",
      "Supabase",
      "PostgreSQL",
      "Scikit-learn",
      "Sentence Transformers",
      "MiniLM",
      "LLM APIs",
      "Render",
    ],
    liveUrl: "https://stratify-ai-nydb.onrender.com/",
    videoSources: [
      { src: stratifyDemoWebm, type: "video/webm" },
      { src: stratifyDemoMp4, type: "video/mp4" },
    ],
    note: "Secured 4th position at GenFusion.",
    motif: "graph",
    caseStudy: {
      approach:
        "Each signal uses the simplest reliable method: deterministic math for finances, rules for scoring, trained classifiers only where classification is needed, embeddings for similarity and an LLM for reasoning over that context.",
      architecture: [
        "Deterministic analytics",
        "Rule-based scoring",
        "Trained ML classifiers",
        "Embedding-based retrieval",
        "LLM reasoning",
      ],
    },
  },
  {
    id: "payroll",
    name: "Employee Payroll Management System",
    category: "Java Full-Stack · Secure REST Application",
    summary:
      "A layered Java application with a Swing desktop client, a Spring Boot REST API secured with JWT, and MySQL persistence for managing employees and payroll.",
    problem:
      "Maintaining employee details and calculating salaries manually leads to inconsistent records and calculation errors.",
    built:
      "A desktop GUI that talks to a Spring Boot backend over HTTP/JSON with Bearer JWT. An OOP employee hierarchy handles type-specific salary logic (full-time monthly vs. part-time hours × rate), with JPA/Hibernate persisting records to MySQL.",
    capabilities: [
      "Registration & login with BCrypt hashing and HS256 JWT",
      "Employee CRUD, search and type/department filtering",
      "Payroll summary: totals, counts and average salary",
      "Tested with JUnit, MockMvc, Spring Security Test and H2",
    ],
    tech: [
      "Java 17",
      "Spring Boot 3",
      "Spring Security",
      "JWT",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "Swing",
      "Maven",
      "JUnit",
    ],
    liveUrl: "https://anandaakash2005-debug.github.io/employee-payroll-management-system/",
    liveLabel: "Live Demo",
    videoSources: [
      { src: payrollLoopWebm, type: "video/webm" },
      { src: payrollLoopMp4, type: "video/mp4" },
    ],
    motif: "layers",
    caseStudy: {
      approach:
        "Clear separation of concerns: the desktop UI, REST endpoints, business logic and persistence each live in their own layer, so salary rules and security can be tested independently of the interface.",
      architecture: [
        "Java Swing GUI",
        "ApiClient · HTTP + JSON · Bearer JWT",
        "Spring Security JWT filter",
        "REST controller → PayrollService",
        "JPA / Hibernate → MySQL",
      ],
    },
  },
  {
    id: "jansetu",
    name: "JanSetu",
    category: "Government Scheme Accessibility Platform",
    summary:
      "An AI-assisted government-scheme accessibility platform designed to help citizens discover potentially relevant welfare schemes based on demographic and socioeconomic profile information.",
    problem:
      "Government-scheme information can be scattered and eligibility rules may be difficult for citizens to understand.",
    built:
      "A Next.js application with a profile/authentication workflow, API routes backed by MySQL and a multilingual UI architecture. AI-based recommendation is a planned layer on top of eligibility matching.",
    capabilities: [
      "Citizen profile: age, state, residence, caste, disability, profession, BPL status",
      "Registration flow via API routes to MySQL",
      "Multilingual UI architecture",
      "Planned: AI recommendation layer",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MySQL"],
    liveUrl: "https://jansetu-plum.vercel.app/",
    videoSources: [
      { src: jansetuDemoWebm, type: "video/webm" },
      { src: jansetuDemoMp4, type: "video/mp4" },
    ],
    note: "Independent project — not affiliated with any government body.",
    motif: "flow",
    caseStudy: {
      approach:
        "Start from the citizen's profile and match it against eligibility rules, so people see schemes they may qualify for instead of searching blind.",
      architecture: [
        "Profile UI",
        "/api/register",
        "Server/API logic",
        "MySQL",
        "Eligibility / recommendation layer (planned AI)",
      ],
    },
  },
  {
    id: "mediguide",
    name: "MediGuide AI",
    category: "AI-Powered Personal Health Guidance Platform",
    summary:
      "A full-stack health assistance platform that generates condition-based educational health guidance while emphasizing transparency, safety and responsible AI use.",
    problem:
      "Reliable, condition-oriented lifestyle guidance is hard to find in one place, and AI health tools often overstate what they can do.",
    built:
      "A platform that generates educational health plans — diet, exercise, medicine reference information, specialization-based doctor recommendations and reminders — with disclaimers and guideline metadata built in.",
    capabilities: [
      "Diet guidance: foods to consider and avoid",
      "Structured exercise routines",
      "Specialization-based doctor recommendations",
      "Medication and meal reminders",
    ],
    tech: ["Full-stack", "LLM-generated guidance"],
    note: "MediGuide AI provides educational information and does not replace professional medical advice, diagnosis or treatment.",
    videoId: "z-tBilOgID8",
    motif: "health",
    caseStudy: {
      approach:
        "Designed with public-health guidance and safety disclaimers in mind. Guidance is positioned as educational support, not diagnosis.",
      architecture: [
        "User condition input",
        "Health-plan generation",
        "Diet · Exercise · Medicine reference",
        "Doctor recommendations · Reminders",
        "Disclaimer & guideline metadata",
      ],
    },
  },
];

export const stack: { group: string; items: string[]; learning?: boolean }[] = [
  {
    group: "Programming & Data",
    items: ["Python", "SQL", "Java", "TypeScript", "JavaScript", "NumPy", "Pandas"],
  },
  {
    group: "Machine Learning & Deep Learning",
    items: [
      "Scikit-learn",
      "PyTorch",
      "Machine Learning",
      "Deep Learning",
      "CNNs",
      "Transformers",
      "Sentence Embeddings",
      "Model Training",
      "Evaluation & Inference",
    ],
  },
  {
    group: "Computer Vision & Geospatial AI",
    items: [
      "SegFormer",
      "Grounding DINO",
      "Siamese CNN",
      "Image Segmentation",
      "Object Detection",
      "GeoTIFF",
      "Optical & SAR Analysis",
      "Spectral Indices",
      "NDVI",
      "Remote Sensing",
    ],
  },
  {
    group: "Generative AI & Intelligent Systems",
    items: [
      "LLM APIs",
      "Semantic Similarity",
      "Intent Classification",
      "Evidence-Grounded Analysis",
      "Model Inference Pipelines",
      "AI-Assisted Workflows",
    ],
  },
  {
    group: "Backend & Application Engineering",
    items: [
      "FastAPI",
      "React",
      "Next.js",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "REST APIs",
      "JPA / Hibernate",
      "PostgreSQL",
      "MySQL",
      "Supabase",
    ],
  },
  {
    group: "Automation & Integration",
    items: [
      "n8n",
      "GitHub Webhooks",
      "Event-Driven Workflows",
      "Telegram Integration",
      "API Integration",
    ],
  },
  { group: "Engineering Tools", items: ["Git", "GitHub", "VS Code", "Render"] },
  {
    group: "Emerging Engineering Domains",
    items: [
      "Edge AI",
      "UAV / UAS",
      "Autonomous Systems",
      "IoT",
      "Sensors",
      "Robotics",
      "Embedded Systems",
    ],
    learning: true,
  },
];

export const achievements = [
  {
    place: "3rd",
    title: "Internal Smart India Hackathon (SIH)",
    desc: "Secured 3rd position in the college's internal SIH competition.",
  },
  { place: "4th", title: "GenFusion", desc: "Secured 4th position with Stratify.AI." },
  {
    place: "5th",
    title: "Electronovation",
    desc: "Secured 5th position in the technical innovation competition.",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
};
export const certifications: Certification[] = [];
