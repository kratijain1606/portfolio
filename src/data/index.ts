// ─── Personal Info ────────────────────────────────────────────────────────────
export const personalInfo = {
  name: 'Krati Jain',
  firstName: 'Krati',
  title: 'Software Engineer',
  roles: [
    'Software Engineer',
    'Full Stack Developer',
    'MSSE Student @ SJSU',
    'Backend Engineer',
    'Mobile Developer',
    'Tech Community Leader',
  ],
  bio: "Hi! I'm Krati Jain, a Software Engineer and current MSSE student at San Jose State University. I bring 3+ years of industry experience as an Associate at Goldman Sachs, where I built compliance-critical Java applications, led end-to-end development of a 10b5-1 trading plan management system, and drove a major MongoDB-to-Kafka data pipeline migration. I'm passionate about building scalable, impactful systems — from distributed backends to cross-platform mobile apps.",
  bioShort:
    'Software Engineer & MSSE student at SJSU. Ex–Goldman Sachs Associate with expertise in Java, Kafka, Spring Boot, React, and Flutter.',
  email: 'kratijain1600@gmail.com',
  phone: '+1 (your US number)',
  location: 'San Jose, CA',
  availability: 'Open to full-time roles · May 2026',
  social: {
    github: 'https://github.com/kratijain1606',
    linkedin: 'https://www.linkedin.com/in/krati-jain-aa2494180/',
    twitter: 'https://twitter.com/Krati04619551',
  },
  stats: [
    { label: 'Years of Experience', value: '3+' },
    { label: 'Companies Worked At', value: '4' },
    { label: 'Projects Delivered', value: '10+' },
    { label: 'Tech Stack', value: '20+' },
  ],
}

// ─── Education ────────────────────────────────────────────────────────────────
export interface EducationItem {
  id: number
  institution: string
  degree: string
  field: string
  duration: string
  gpa?: string
  current?: boolean
  location: string
}

export const education: EducationItem[] = [
  {
    id: 1,
    institution: 'San Jose State University',
    degree: 'Master of Science',
    field: 'Software Engineering (MSSE)',
    duration: '2026 – Present',
    current: true,
    location: 'San Jose, CA, USA',
  },
  {
    id: 2,
    institution: 'Shri G.S. Institute of Technology and Science (SGSITS)',
    degree: 'Bachelor of Engineering',
    field: 'Computer Science Engineering',
    duration: '2018 – 2022',
    gpa: '7.93 / 10',
    location: 'Indore, MP, India',
  },
]

// ─── Achievements ─────────────────────────────────────────────────────────────
export interface Achievement {
  id: number
  title: string
  org: string
  year: string
  icon: string
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: 'National Finalist',
    org: 'GHC\'20 Rakuten Rakathon',
    year: '2020',
    icon: '🏆',
  },
  {
    id: 2,
    title: 'Winner — Best Use of GCP',
    org: 'HACKON Hackathon',
    year: '2020',
    icon: '🥇',
  },
  {
    id: 3,
    title: 'Top 150 Teams',
    org: 'Uber HackTag Solution Challenge',
    year: '2021',
    icon: '🚀',
  },
  {
    id: 4,
    title: 'Campus Facilitator',
    org: '30 Days of Google Cloud',
    year: '2021',
    icon: '☁️',
  },
]

// ─── Leadership ───────────────────────────────────────────────────────────────
export interface LeadershipItem {
  id: number
  role: string
  org: string
  duration: string
  icon: string
}

export const leadership: LeadershipItem[] = [
  { id: 1, role: 'Campus Google DSC Lead', org: 'Google Developer Student Club — SGSITS', duration: '2020 – 2021', icon: '👩‍💻' },
  { id: 2, role: 'Microsoft Learn Student Ambassador', org: 'Microsoft', duration: '2020 – 2021', icon: '🎓' },
  { id: 3, role: 'CTO', org: 'SGSITS Robotics Club', duration: '2020 – 2021', icon: '🤖' },
  { id: 4, role: 'Student Placement Coordinator', org: 'SGSITS', duration: 'Jan 2019 – Nov 2020', icon: '📋' },
]

// ─── Projects ─────────────────────────────────────────────────────────────────
export type ProjectCategory = 'all' | 'web' | 'mobile' | 'backend' | 'data'

export interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  category: Exclude<ProjectCategory, 'all'>
  github: string | null
  demo: string | null
  featured: boolean
  icon: string
  company?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: '10b5-1 Trading Plan Management System',
    description:
      'Led end-to-end development of a compliance-critical order management system at Goldman Sachs — handling HNW trade plans under SEC 10b5-1 rules to prevent price gouging. Built backend in Java, frontend in JavaScript with full automation and audit trail.',
    tech: ['Java', 'JavaScript', 'Spring Boot', 'REST APIs', 'MongoDB', 'SEC Compliance'],
    category: 'web',
    github: null,
    demo: null,
    featured: true,
    icon: '📈',
    company: 'Goldman Sachs',
  },
  {
    id: 2,
    title: 'MongoDB → Kafka Data Pipeline Migration',
    description:
      'Designed and implemented a large-scale data pipeline migration from MongoDB to Apache Kafka at Goldman Sachs, boosting real-time processing and scalability of compliance systems handling critical SEC regulatory filings.',
    tech: ['Apache Kafka', 'MongoDB', 'Java', 'Microservices', 'Spring Boot'],
    category: 'data',
    github: null,
    demo: null,
    featured: true,
    icon: '🔄',
    company: 'Goldman Sachs',
  },
  {
    id: 3,
    title: 'Android Boot Loading Optimizer',
    description:
      'Worked on kernel-level Android boot optimization at Samsung R&D India. Conducted in-depth performance analysis of kernel bottlenecks, achieving measurable improvements in device boot time and RAM utilization.',
    tech: ['Android', 'Linux Kernel', 'C', 'C++', 'Performance Profiling'],
    category: 'mobile',
    github: null,
    demo: null,
    featured: true,
    icon: '⚡',
    company: 'Samsung R&D India',
  },
  {
    id: 4,
    title: 'Cloud-Native Event-Driven Data Pipeline',
    description:
      'Built priority-based data scheduling using Kafka and developed cloud-native pipelines leveraging Azure Event Hubs and HBase at Optum Global, improving system scalability and availability.',
    tech: ['Apache Kafka', 'Azure Event Hubs', 'HBase', 'Python', 'Microservices'],
    category: 'data',
    github: null,
    demo: null,
    featured: false,
    icon: '☁️',
    company: 'Optum Global Solutions',
  },
  {
    id: 5,
    title: 'Adgram — Cross-Platform Flutter App',
    description:
      'Built a Flutter-based cross-platform mobile application at Kudosware, integrated with a Firebase backend and Razorpay payment gateway. Enhanced UI/UX and backend synchronization for a seamless experience.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Razorpay', 'Android', 'iOS'],
    category: 'mobile',
    github: 'https://github.com/kudosware-com/adgram',
    demo: null,
    featured: true,
    icon: '📱',
    company: 'Kudosware',
  },
  {
    id: 6,
    title: 'Coronout — COVID-19 Tracker',
    description:
      'A cross-platform COVID-19 case tracking app with real-time global statistics, built with Flutter. Integrated a donation module with introductory blockchain functionality for transparent fund management.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Blockchain', 'REST API'],
    category: 'mobile',
    github: 'https://github.com/kratijain1606/Coronout',
    demo: null,
    featured: false,
    icon: '🦠',
  },
  {
    id: 7,
    title: '21DC — Daily Coding Challenge',
    description:
      'A 21-day coding challenge initiative to help developers build consistent habits. Included a web project, curated problem sets, and a community video series across Codechef, LeetCode & Codeforces.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Community'],
    category: 'web',
    github: 'https://github.com/kratijain1606/21DC',
    demo: null,
    featured: false,
    icon: '🎯',
  },
  {
    id: 8,
    title: 'Server-side Development Playground',
    description:
      'A backend exploration project covering REST API design, Express middleware, JWT authentication, and MongoDB integration — built as a learning ground for Node.js backend patterns.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API'],
    category: 'backend',
    github: 'https://github.com/kratijain1606/Server-side-Development',
    demo: null,
    featured: false,
    icon: '⚙️',
  },
]

// ─── Experience ───────────────────────────────────────────────────────────────
export interface ExperienceItem {
  id: number
  role: string
  company: string
  companyType: string
  duration: string
  location: string
  description: string[]
  tech: string[]
  type: 'fulltime' | 'intern' | 'workshop' | 'achievement'
}

export const experience: ExperienceItem[] = [
  {
    id: 1,
    role: 'Associate — Software Engineer',
    company: 'Goldman Sachs & Co.',
    companyType: 'Full-time',
    duration: 'Jul 2022 – Jan 2026',
    location: 'Bengaluru, India',
    description: [
      'Built and maintained a Java-based order management system for HNW trade plans, enforcing SEC 10b5-1 compliance rules to prevent price gouging.',
      'Led end-to-end development of a 10b5-1 trading plan management application — architecture design, Java backend services, and JavaScript frontend — significantly improving automation, auditability, and UX for internal stakeholders.',
      'Designed and executed a major data pipeline migration from MongoDB to Apache Kafka, scaling real-time processing for compliance systems handling critical SEC regulatory filings.',
      'Built highly responsive, modular web UIs using modern JavaScript frameworks, enabling users to configure, view, and track regulatory submissions (SEC filings).',
    ],
    tech: ['Java', 'JavaScript', 'Spring Boot', 'Apache Kafka', 'MongoDB', 'REST APIs', 'Microservices', 'JIRA'],
    type: 'fulltime',
  },
  {
    id: 2,
    role: 'System R&D Intern',
    company: 'Samsung R&D India',
    companyType: 'Internship',
    duration: 'Jan 2021 – Jun 2022',
    location: 'Noida, India',
    description: [
      'Worked on Android boot loading optimization to improve device startup performance and reduce memory utilization.',
      'Conducted in-depth analysis of kernel-level performance bottlenecks, resulting in measurable improvements in boot time and RAM usage.',
    ],
    tech: ['Android', 'Linux Kernel', 'C', 'C++', 'Performance Profiling'],
    type: 'intern',
  },
  {
    id: 3,
    role: 'Software Engineering Intern',
    company: 'Optum Global Solutions',
    companyType: 'Internship',
    duration: 'May 2021 – Jul 2021',
    location: 'Hyderabad, India',
    description: [
      'Implemented load balancing and priority-based data scheduling using Kafka to optimize event-driven systems.',
      'Developed cloud-native data pipelines leveraging Azure Event Hubs and HBase, improving scalability and data availability.',
    ],
    tech: ['Apache Kafka', 'Azure Event Hubs', 'HBase', 'Python', 'Cloud'],
    type: 'intern',
  },
  {
    id: 4,
    role: 'Software Developer Intern',
    company: 'Kudosware',
    companyType: 'Internship',
    duration: 'Aug 2020 – Nov 2020',
    location: 'Remote',
    description: [
      'Built a Flutter-based cross-platform mobile application integrated with Firebase backend and Razorpay payment gateway.',
      'Enhanced UI/UX across multiple screens and implemented backend synchronization for seamless user experiences.',
    ],
    tech: ['Flutter', 'Dart', 'Firebase', 'Razorpay', 'Android', 'iOS'],
    type: 'intern',
  },
]

// ─── Skills ───────────────────────────────────────────────────────────────────
export interface SkillItem {
  name: string
  level: number
}

export interface SkillCategory {
  category: string
  label: string
  color: string
  skills: SkillItem[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'languages',
    label: 'Languages',
    color: 'from-violet-500 to-purple-600',
    skills: [
      { name: 'Java', level: 92 },
      { name: 'JavaScript / TypeScript', level: 85 },
      { name: 'Python', level: 78 },
      { name: 'Dart', level: 82 },
      { name: 'C / C++', level: 72 },
      { name: 'HTML5 / CSS3', level: 88 },
    ],
  },
  {
    category: 'backend',
    label: 'Backend & Frameworks',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Spring Boot', level: 88 },
      { name: 'REST APIs / Microservices', level: 90 },
      { name: 'Node.js / Express.js', level: 72 },
      { name: 'Django', level: 65 },
      { name: 'Apache Kafka', level: 85 },
      { name: 'Azure Event Hubs', level: 78 },
    ],
  },
  {
    category: 'frontend',
    label: 'Frontend & Mobile',
    color: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'React', level: 80 },
      { name: 'Angular', level: 75 },
      { name: 'Flutter', level: 85 },
      { name: 'Bootstrap / Tailwind', level: 82 },
    ],
  },
  {
    category: 'data',
    label: 'Data & Cloud',
    color: 'from-amber-500 to-orange-500',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL / NoSQL', level: 80 },
      { name: 'HBase', level: 72 },
      { name: 'Firebase', level: 80 },
      { name: 'System Design', level: 82 },
      { name: 'CI/CD / JIRA', level: 78 },
    ],
  },
]

export const techStack = [
  'Java', 'Spring Boot', 'Apache Kafka', 'React', 'Angular',
  'Flutter', 'Dart', 'Python', 'Node.js', 'MongoDB',
  'MySQL', 'HBase', 'Azure', 'Firebase', 'Docker',
  'Git', 'Microservices', 'REST APIs', 'CI/CD',
]
