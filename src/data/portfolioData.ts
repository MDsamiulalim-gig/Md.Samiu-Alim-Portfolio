import { Project, SkillCategoryGroup, EducationItem, ExperienceItem, CertificationItem, HobbyItem } from '../types';

export const PERSONAL_INFO = {
  name: 'MD Samiul Alim',
  shortName: 'Samiul',
  headline: "Hi, I'm MD Samiul Alim",
  subHeadline: 'CSE Graduate | Information Systems | Full-Stack Developer | AI & Data Enthusiast',
  location: 'Bishwal Center, Kuril, Dhaka, Bangladesh',
  locationPill: '📍 Bishwal Center, Kuril, Dhaka',
  email: 'mdsamiulalim4@gmail.com',
  phone: '+880 1776652566',
  linkedin: 'https://linkedin.com/in/md-samiul-alim-17s08',
  github: 'https://github.com/MDsamiulalim-gig',
  profileImageUrl: 'https://i.ibb.co/C5hxWxbH/Whats-App-Image-2026-08-17-at-10-25-11-PM.jpg',
  bioSummary:
    'Motivated and adaptable CSE graduate with a strong foundation in software development, problem-solving, analytical thinking, and backend development. Experienced in building REST APIs, optimizing databases, and deploying authentication logic.',
  aboutStory: [
    'Hi, I’m MD Samiul Alim, a Computer Science and Engineering graduate from American International University-Bangladesh (AIUB), passionate about software development, web technologies, AI, and backend engineering. I have hands-on experience working with JavaScript, Node.js, Next.js, Express.js, Laravel, Python, C++, C#, and MySQL, and I enjoy building practical, scalable applications that solve real-world problems.',
    'Currently, I’m focused on backend and full-stack development, while continuously exploring AI, machine learning, and modern technologies. I’m a quick learner who enjoys taking on new challenges, learning new technologies, and turning ideas into working solutions. I also value teamwork, collaboration, problem-solving, and continuous improvement. I’m always looking for opportunities to grow, contribute to meaningful projects, and build technology that makes a real impact.',
    'Thanks for visiting my portfolio. Let’s build something meaningful together.'
  ],
  stats: [
    { value: '10+', label: 'Core Development Projects', description: 'Production web apps, REST APIs, course systems & platforms' },
    { value: '3.20', label: 'B.Sc. CSE CGPA', description: 'American International University - Bangladesh' },
    { value: '100%', label: 'Commitment to Quality', description: 'Clean architecture, zero critical bug test suites' },
    { value: '2+', label: 'Verified Certifications', description: 'Microsoft C# & MIST Innovation Club recognition' }
  ]
};

export const SKILL_GROUPS: SkillCategoryGroup[] = [
  {
    name: 'Programming Languages',
    badge: 'Core Syntax',
    skills: [
      { name: 'C++', level: 70, description: 'Object-oriented programming, data structures, algorithms, and problem solving' },
      { name: 'JavaScript (ES6+)', level: 70, description: 'Modern JavaScript, asynchronous programming, promises, modules, and backend development' },
      { name: 'Python', level: 75, description: 'Programming, data processing, automation, scripting, and AI/ML fundamentals' },
      { name: 'SQL', level: 75, description: 'MySQL, database design, JOIN queries, CRUD operations, and normalization' },
      { name: 'PHP', level: 50, description: 'Server-side programming, form handling, sessions, and database integration' },
      { name: 'HTML5 & CSS3', level: 75, description: 'Semantic HTML, responsive design, Flexbox, Grid, and modern web interfaces' }
    ]
  },
  {
    name: 'Frameworks & Web Technologies',
    badge: 'App & Server Engines',
    skills: [
      { name: 'Node.js', level: 60, description: 'Backend development, REST APIs, asynchronous programming, authentication, and server-side applications' },
      { name: 'Express.js', level: 55, description: 'RESTful API development, routing, middleware, authentication, and backend architecture' },
      { name: 'React.js', level: 50, description: 'Component-based UI development, hooks, state management, API integration, and responsive interfaces' },
      { name: 'Next.js', level: 55, description: 'Full-stack web applications, routing, server-side rendering, API integration, and modern React development' },
      { name: 'Express.js & Laravel', level: 55, description: 'Middleware pipelines, MVC architecture, secure route guards' }
    ]
  },
  {
    name: 'API Architecture & Security',
    badge: 'Data Exchange & Auth',
    skills: [
      { name: 'REST APIs', level: 60, description: 'RESTful endpoint design, HTTP status codes, structured JSON payloads' },
      { name: 'JSON', level: 65, description: 'Serialization, deserialization, data exchange contracts, schema validation' },
      { name: 'Authentication Logic', level: 65, description: 'JWT authentication, password hashing (bcrypt), role-based access control (RBAC)' }
    ]
  },
  {
    name: 'Databases & Architecture',
    badge: 'Data Modeling',
    skills: [
      { name: 'SQL Database Design', level: 62, description: 'Eliminating data redundancy, ERD creation, ACID transaction integrity' }
    ]
  },
  {
    name: 'Developer Tools & Networking',
    badge: 'Tooling & Protocols',
    skills: [
      { name: 'Postman', level: 75, description: 'Automated API endpoint test suites, environment variables, mock servers' },
      { name: 'Git & GitHub', level: 80, description: 'Version control workflows, branching strategies, collaborative pull requests' },
      { name: 'VS Code', level: 90, description: 'Productivity configuration, linting, debugging tools, terminal integration' },
      { name: 'TCP/IP & Networking', level: 55, description: 'LAN/WAN protocols, IP addressing, DNS resolution, client-server models' }
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-aiub',
    number: '01',
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'American International University - Bangladesh (AIUB)',
    period: '2022 — 2026',
    location: 'Dhaka, Bangladesh',
    cgpaOrGpa: 'CGPA: 3.20 / 4.00',
    coursework: [
      'Database Management Systems',
      'Management Information Systems (MIS)',
      'Software Engineering',
      'Web Technologies',
      'Machine Learning'
    ],
    description:
      'Pursuing comprehensive undergraduate studies in Computer Science and Engineering with an emphasis on system design, database architecture, algorithms, and practical software development.'
  },
  {
    id: 'edu-hsc',
    number: '02',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Kushtia Government College',
    period: '2020',
    location: 'Kushtia, Bangladesh',
    cgpaOrGpa: 'Result: GPA 5.00 / 5.00',
    description:
      'Graduated with maximum distinction (GPA 5.00) in the Science discipline, building high academic rigor in mathematics, physics, and analytical logic.'
  },
  {
    id: 'edu-ssc',
    number: '03',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Kushtia Zila School',
    period: '2018',
    location: 'Kushtia, Bangladesh',
    cgpaOrGpa: 'Result: GPA 5.00 / 5.00',
    description:
      'Graduated with maximum distinction (GPA 5.00) in the Science discipline, developing strong foundational knowledge in mathematics, physics, and computer science.'
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-luminar',
    number: '01',
    role: 'Backend Developer Intern',
    company: 'Luminar Technologies (Backend Team)',
    period: 'June 2026 — September 2026',
    location: 'Dhaka, Bangladesh / Hybrid',
    isCurrent: false,
    bulletPoints: [
      'Developed and maintained robust backend API endpoints utilizing Node.js and Next.js.',
      'Built high-performance RESTful API functionality and optimized complex SQL queries for rapid data access.',
      'Implemented secure API authentication logic, token management, and route protection mechanisms.'
    ]
  },
  {
    id: 'exp-club',
    number: '02',
    role: 'Executive',
    company: 'AIUB Computer Club',
    period: '2024 — 2025',
    location: 'AIUB Campus, Dhaka',
    isCurrent: false,
    bulletPoints: [
      'Coordinated technical logistics and participant communication for university-wide club competitions and tech conferences.',
      'Collaborated across multidisciplinary executive teams to organize developer workshops and student tech sessions.',
      'Engaged with students and guest speakers to facilitate competitive programming and tech community events.'
    ]
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'cert-csharp',
    title: 'Foundational C# with Microsoft',
    issuer: 'Microsoft & freeCodeCamp',
    date: 'January 9, 2025',
    description:
      'Completed comprehensive developer certification demonstrating mastery of C# language fundamentals, object-oriented concepts, algorithm design, and application logic.',
    verifyUrl:
      'https://freecodecamp.org/certification/fcc47405aa7-e347-417f-9b5b-4f1cc0f1359c/foundational-c-sharp-with-microsoft',
    certificateImage: 'https://i.ibb.co/spW76vP3/Screenshot-2026-09-07-011334.png',
    badgeText: 'Developer Certification'
  },
  {
    id: 'cert-mist',
    title: 'Certificate of Appreciation — Lead the Future 2025 (INVENTIOUS 4.1)',
    issuer: 'Military Institute of Science & Technology (MIST) Innovation Club',
    date: 'March 7–8, 2025',
    description:
      'Awarded to Md. Samiul Alim as part of Team SMT Blaze for participating in the national event INVENTIOUS 4.1, recognized for leadership, teamwork, and analytical problem-solving under competitive pressure.',
    certificateImage: 'https://i.ibb.co/5gc8TjnV/7dbee671-9bae-49b4-8f80-e90dba0497ba.jpg',
    badgeText: 'National Competition Recognition'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'project-favicon',
    title: 'Favicon E-Shop',
    subtitle: 'Full-Stack E-Commerce Platform & REST API',
    description:
      'Developed a REST API supporting comprehensive e-commerce functionality, authentication, and role-based access control. Designed Postman test suites achieving zero critical release bugs.',
    detailedDescription:
      'Favicon E-Shop is a full-featured e-commerce backend and shopping platform. It features structured product cataloging, order processing, customer cart management, and role-based access control (RBAC). A comprehensive Postman test suite was engineered to validate all edge cases and ensure 100% bug-free deployments.',
    category: 'Backend',
    tags: ['REST API', 'Postman', 'Authentication', 'Node.js', 'Express', 'MySQL'],
    githubUrl: 'https://github.com/MDsamiulalim-gig/favicon-eshop-api',
    featured: true,
    metrics: 'Zero critical release bugs achieved via automated Postman test suites',
    challenges: [
      'Architecting secure role-based access control for customers vs administrators',
      'Preventing race conditions during inventory count decrements on checkout'
    ],
    keyFeatures: [
      'Secure JWT authentication & bcrypt password encryption',
      'Role-based access control (Admin, Vendor, Customer)',
      'Automated Postman collection tests for continuous validation',
      'Optimized SQL queries for fast product listing & order filtering'
    ]
  },
  {
    id: 'project-course',
    title: 'Student Course Management System',
    subtitle: 'Full-Stack Academic Course & Enrollment Web App',
    description:
      'Diagnosed data redundancy issues and redesigned the database schema to ensure data consistency and reliability across course enrollment pipelines.',
    detailedDescription:
      'Designed for university course coordination, this full-stack application allows students to browse courses, register for semesters, and track prerequisites. Identified severe redundancy flaws in legacy data structures and completely restructured the relational schema into Third Normal Form (3NF).',
    category: 'Full Stack',
    tags: ['Database Design', 'Full-Stack Web Development', 'SQL', 'PHP', 'JavaScript'],
    githubUrl: 'https://github.com/MDsamiulalim-gig/Student-Course-Management-App',
    featured: true,
    metrics: 'Eliminated data anomalies and reduced redundant storage footprints',
    challenges: [
      'Normalizing complex prerequisite dependency chains without query latency degradation',
      'Enforcing strict credit limit constraints during high-load registration periods'
    ],
    keyFeatures: [
      'Normalized 3NF relational database schema',
      'Student and faculty portal dashboards with role separation',
      'Automated prerequisite validation before course confirmation',
      'Real-time seat availability tracking'
    ]
  },
  {
    id: 'project-b2b',
    title: 'B2B Marketplace Platform',
    subtitle: 'Multi-Vendor Commercial Trading Web Application',
    description:
      'Built secure user authentication and buy/sell product listings. Engineered data handling for concurrent buyer and seller commercial transactions.',
    detailedDescription:
      'A multi-vendor enterprise marketplace facilitating high-volume B2B transactions. Features corporate authentication, vendor store management, quote negotiation workflows, and concurrent transactional order states.',
    category: 'Web App',
    tags: ['PHP', 'JavaScript', 'MySQL', 'Authentication', 'Web Architecture'],
    githubUrl: 'https://github.com/zohayer-mehtab/b2b_marketplace',
    featured: true,
    metrics: 'Robust concurrency handling for multi-tenant vendor transactions',
    challenges: [
      'Handling concurrent purchases across disparate vendor inventories',
      'Ensuring data isolation between competing business storefronts'
    ],
    keyFeatures: [
      'Multi-vendor product management and storefront customization',
      'Dual-party secure session management for buyers and corporate sellers',
      'Transactional order tracking and negotiation requests',
      'Optimized MySQL indexing for high-traffic search queries'
    ]
  }
];

export const HOBBIES_DATA: HobbyItem[] = [
  {
    id: 'hobby-sports',
    title: 'Sports & Active Fitness',
    description:
      'Passionate about playing and following sports, outdoor games, and staying active to maintain discipline, energy, and a competitive spirit.',
    icon: 'Activity',
    tag: 'Active Life',
    accent: '#00E5FF'
  },
  {
    id: 'hobby-movies',
    title: 'Watching Movies & Cinema',
    description:
      'Love watching movies and captivating films, appreciating immersive storytelling, cinematic visuals, character depth, and diverse genres.',
    icon: 'Film',
    tag: 'Cinema & Arts',
    accent: '#FF4D8D'
  },
  {
    id: 'hobby-touring',
    title: 'Traveling & Going on Tours',
    description:
      'Love to go for tours, discover scenic destinations, take refreshing road trips, and explore new cultures and natural environments.',
    icon: 'Compass',
    tag: 'Adventure',
    accent: '#00E5FF'
  },
  {
    id: 'hobby-problem',
    title: 'Problem Solving & Logic Puzzles',
    description:
      'Tackling challenging algorithmic problems, optimizing mathematical models, and dissecting corner-case scenarios that sharpen programming instincts.',
    icon: 'Brain',
    tag: 'Analytical',
    accent: '#FF4D8D'
  },
  {
    id: 'hobby-chess',
    title: 'Strategic Thinking & Chess',
    description:
      'Enjoying strategic board games and chess analysis to cultivate foresight, tactical patience, and calculated decision-making under pressure.',
    icon: 'Trophy',
    tag: 'Strategy',
    accent: '#FFB800'
  }
];
