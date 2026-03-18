export const personalInfo = {
  name: 'Krati Jain',
  firstName: 'Krati',
  title: 'Full Stack Developer',
  roles: [
    'Android Developer',
    'Web Developer',
    'Competitive Programmer',
    'Flutter Developer',
    'Tech Enthusiast',
  ],
  bio: "Hi! I'm Krati Jain, a Computer Science Engineering graduate from Shri Govindram Seksaria Institute of Technology and Science (SGSITS), Indore. I'm passionate about building impactful web and mobile applications — from crafting intuitive UIs to architecting scalable backends. I love solving complex problems, exploring emerging technologies, and giving back to the developer community.",
  bioShort:
    'CS graduate from SGSITS, Indore. Building web & mobile experiences with Flutter, React, and Node.js. Passionate about clean code and community impact.',
  email: 'kratijain1600@gmail.com',
  location: 'Indore, Madhya Pradesh, India',
  availability: 'Open to opportunities',
  social: {
    github: 'https://github.com/kratijain1606',
    linkedin: 'https://www.linkedin.com/in/krati-jain-aa2494180/',
    twitter: 'https://twitter.com/Krati04619551',
  },
  stats: [
    { label: 'Projects Built', value: '5+' },
    { label: 'Coding Platforms', value: '3' },
    { label: 'Tech Stack', value: '10+' },
    { label: 'Years Coding', value: '4+' },
  ],
}

export type ProjectCategory = 'all' | 'web' | 'mobile' | 'backend'

export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tech: string[]
  category: Exclude<ProjectCategory, 'all'>
  github: string
  demo: string | null
  featured: boolean
  icon: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Coronout',
    description:
      'COVID-19 case tracker with real-time global statistics and a donation platform featuring introductory blockchain functionality for transparent fund management.',
    longDescription:
      'A cross-platform mobile application built with Flutter and Dart that tracks COVID-19 cases worldwide using public health APIs. Integrated a donation module leveraging blockchain concepts to ensure transparency and traceability of contributions.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Blockchain', 'REST API'],
    category: 'mobile',
    github: 'https://github.com/kratijain1606/Coronout',
    demo: null,
    featured: true,
    icon: '🦠',
  },
  {
    id: 2,
    title: '21DC — Daily Coding Challenge',
    description:
      'A 21-day coding challenge initiative to help developers build consistent habits, with curated problems and a supportive community-driven video series.',
    longDescription:
      'An initiative and accompanying web project designed to onboard beginners into competitive programming through a structured 21-day challenge. Included a video series and community engagement components.',
    tech: ['HTML', 'CSS', 'JavaScript', 'YouTube API'],
    category: 'web',
    github: 'https://github.com/kratijain1606/21DC',
    demo: null,
    featured: true,
    icon: '🎯',
  },
  {
    id: 3,
    title: 'Adgram',
    description:
      'An advertising platform project connecting businesses with their audience through an intuitive, efficient ad management and delivery system.',
    longDescription:
      'Contributed to an advertising platform designed to streamline how businesses reach their target audiences. Worked on the frontend interface and ad management modules.',
    tech: ['JavaScript', 'Node.js', 'CSS', 'HTML'],
    category: 'web',
    github: 'https://github.com/kudosware-com/adgram',
    demo: null,
    featured: false,
    icon: '📣',
  },
  {
    id: 4,
    title: 'Server-side Development',
    description:
      'A comprehensive backend project exploring REST API design, server architecture, database management, and modern Node.js development patterns.',
    longDescription:
      'Built a structured backend application exploring REST API design principles, middleware patterns, database integration with MongoDB, and authentication flows using Node.js and Express.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'JWT'],
    category: 'backend',
    github: 'https://github.com/kratijain1606/Server-side-Development',
    demo: null,
    featured: false,
    icon: '⚙️',
  },
  {
    id: 5,
    title: 'Summer Internship 2021',
    description:
      'Projects and learnings from an intensive full-stack development internship program covering modern web development practices end-to-end.',
    longDescription:
      'Completed an intensive summer internship focusing on full-stack web development. Built multiple mini-projects covering frontend design, backend APIs, and database management.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Node.js'],
    category: 'web',
    github: 'https://github.com/kratijain1606/SummerInternship2021',
    demo: null,
    featured: false,
    icon: '💼',
  },
]

export interface ExperienceItem {
  id: number
  role: string
  company: string
  duration: string
  description: string[]
  type: 'project' | 'workshop' | 'achievement' | 'internship'
}

export const experience: ExperienceItem[] = [
  {
    id: 1,
    role: 'Android App Developer',
    company: 'Personal Project — Coronout',
    duration: '2021',
    description: [
      'Developed a cross-platform COVID-19 tracker app using Flutter and Dart',
      'Integrated real-time data from public health APIs for global case statistics',
      'Implemented a donation module with introductory blockchain functionality',
      'Managed end-to-end development from UI design to deployment',
    ],
    type: 'project',
  },
  {
    id: 2,
    role: 'Summer Intern — Full Stack Development',
    company: 'Industry Internship Program',
    duration: 'Summer 2021',
    description: [
      'Completed an intensive internship focused on full-stack web development',
      'Built projects covering frontend (HTML/CSS/JS) and backend (Node.js/Express)',
      'Gained hands-on experience with REST APIs and database integration',
      'Collaborated with mentors to follow industry-standard coding practices',
    ],
    type: 'internship',
  },
  {
    id: 3,
    role: 'Workshop Facilitator — Electronics & Robotics',
    company: 'SGSITS, Indore',
    duration: '2020',
    description: [
      'Conducted a hands-on hardware workshop for batchmates and junior students',
      'Built and demonstrated a robotic arm controlled via a custom mobile app',
      'Taught fundamentals of electronics, sensors, and mobile-to-hardware communication',
      'Received positive feedback for clarity and engagement',
    ],
    type: 'workshop',
  },
  {
    id: 4,
    role: 'Competitive Programmer',
    company: 'Codechef · LeetCode · Codeforces',
    duration: '2019 — Present',
    description: [
      'Actively solving data structure and algorithm problems across 3 platforms',
      'Launched the 21DC video series to help beginners start competitive programming',
      'Focused on community upliftment and making CP accessible to newcomers',
      'Consistent problem-solving practice building analytical and optimization skills',
    ],
    type: 'achievement',
  },
]

export interface SkillItem {
  name: string
  level: number
  icon?: string
}

export interface SkillCategory {
  category: string
  label: string
  color: string
  skills: SkillItem[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'frontend',
    label: 'Frontend',
    color: 'from-purple-500 to-violet-500',
    skills: [
      { name: 'HTML5 / CSS3', level: 90 },
      { name: 'SCSS / Sass', level: 85 },
      { name: 'Bootstrap', level: 82 },
      { name: 'JavaScript (ES6+)', level: 75 },
      { name: 'React', level: 60 },
      { name: 'Tailwind CSS', level: 70 },
    ],
  },
  {
    category: 'mobile',
    label: 'Mobile',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Flutter', level: 85 },
      { name: 'Dart', level: 82 },
      { name: 'Android Development', level: 75 },
      { name: 'Firebase', level: 70 },
    ],
  },
  {
    category: 'backend',
    label: 'Backend',
    color: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'Node.js', level: 70 },
      { name: 'Express.js', level: 68 },
      { name: 'MongoDB', level: 65 },
      { name: 'REST APIs', level: 72 },
    ],
  },
  {
    category: 'tools',
    label: 'Tools & Others',
    color: 'from-amber-500 to-orange-500',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'VS Code', level: 92 },
      { name: 'Competitive Programming', level: 75 },
      { name: 'Blockchain (Basics)', level: 45 },
    ],
  },
]

export const techStack = [
  'Flutter',
  'Dart',
  'React',
  'Node.js',
  'MongoDB',
  'Firebase',
  'TypeScript',
  'Tailwind CSS',
  'Git',
  'Bootstrap',
  'Express.js',
  'HTML5',
]
