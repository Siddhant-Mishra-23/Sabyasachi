import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        {/* CDO / Transformation Icon */}
        <path d="M20 4L4 12l16 8 16-8-16-8z" opacity="0.5" />
        <path d="M4 12v16l16 8 16-8V12L20 20 4 12z" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="20" r="4" opacity="0.8" />
        <path d="M20 16v8M16 20h8" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "Fractional CDO & Transformation",
    paragraph:
      "Driving organizational transformation as a Fractional Chief Digital Officer. Expertise in Digital Solutions, Enterprise Mobility, IoT, and Automation to future-proof businesses.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        {/* Data & AI Icon */}
        <rect x="8" y="8" width="8" height="8" rx="1" opacity="0.4" />
        <rect x="24" y="8" width="8" height="8" rx="1" opacity="0.4" />
        <rect x="8" y="24" width="8" height="8" rx="1" opacity="0.4" />
        <rect x="24" y="24" width="8" height="8" rx="1" opacity="0.4" />
        <path d="M12 16v8M28 16v8M16 12h8M16 28h8" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "Data Engineering, AI & Analytics",
    paragraph:
      "Deep expertise in End-to-End Data Engineering, Analytics, and AI/ML/DL services. Helping enterprises leverage data for actionable insights and competitive advantage.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        {/* Techno-Commercial Icon */}
        <path d="M6 20h28" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" opacity="0.3" />
        <rect x="8" y="10" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="28" cy="16" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M28 22v8" stroke="currentColor" strokeWidth="2" />
        <path d="M24 30h8" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "Techno-Commercial Leadership",
    paragraph:
      "20+ years of juggling business-impacting roles: Client Acquisition, Partner Management, Practice Management, Presales, and Solutions across global engagements.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        {/* Industry/Manufacturing Icon */}
        <path d="M4 32V18l10-6 10 6v14" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="28" y="12" width="8" height="20" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M14 12v6M32 16v4" stroke="currentColor" strokeWidth="2" />
        <path d="M4 32h32" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "Industry Experience",
    paragraph:
      "Rich history with industry leaders like Motherson Group (Digital & Analytics Growth), Tech Mahindra, SoftDEL Systems, Orane Technologies, and Hindustan Aeronautics Ltd.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        {/* Rocket/DevSecOps Icon */}
        <path d="M20 4c-4 0-8 8-8 16 0 4 2 8 4 10h8c2-2 4-6 4-10 0-8-4-16-8-16z" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M12 20h16" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <circle cx="20" cy="16" r="3" fill="currentColor" opacity="0.3" />
        <path d="M16 30l-4 4M24 30l4 4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "DevSecOps & Open Source",
    paragraph:
      "Championing DevSecOps practices and Open Source technologies to build secure, scalable, and efficient software delivery pipelines for modern enterprises.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        {/* Globe/Global Icon */}
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M20 6v28M6 20h28" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <ellipse cx="20" cy="20" rx="6" ry="14" stroke="currentColor" strokeWidth="1" opacity="0.5" fill="none" />
      </svg>
    ),
    title: "Global Client Engagement",
    paragraph:
      "Extensive experience in managing customer engagements across the globe, understanding diverse market needs, and delivering tailored solution strategies.",
  },
];

export default featuresData;
