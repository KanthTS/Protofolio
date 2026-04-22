const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

// Customize your profile details here without touching component markup.
export const profile = {
  fullName: 'Lakshmi Kanth Talamari Sidda',
  firstName: 'Lakshmi Kanth',
  lastName: 'Talamari Sidda',
  role: 'B.Tech CSE Student | Full Stack Developer',
  tagline: 'MERN + Java Full Stack Developer',
  location: 'Hyderabad, India',
  education: 'Pre-Final Year B.Tech CSE at VNR VJIET',
  email: 'tsiddakanth@gmail.com',
  github: 'https://github.com/KanthTS',
  linkedIn: 'https://www.linkedin.com/in/kanth-ts-784263287',
  githubBio:
    'MERN Stack and Java Full Stack Developer, focused on practical full-stack product development.',
  // Your current uploaded photo in /public
  profileImage: withBase('/professionalImage.jpeg'),
  // Keep resume in /public/resume.pdf
  resumeUrl: withBase('/Main%28one%29.pdf'),
};

// Update these links with your exact usernames if needed.
export const codingProfiles = [
  {
    label: 'LeetCode',
    handle: 'leetcode.com/u/Kanth_TS/',
    url: 'https://leetcode.com/u/Kanth_TS/',
    icon: 'leetcode',
  },
  {
    label: 'CodeChef',
    handle: 'codechef.com/users/kanth45',
    url: 'https://www.codechef.com/users/kanth45',
    icon: 'codechef',
  },
  {
    label: 'GeeksforGeeks',
    handle: 'geeksforgeeks.org/profile/tsidda0y7d',
    url: 'https://www.geeksforgeeks.org/profile/tsidda0y7d?tab=activity',
    icon: 'gfg',
  },
  {
    label: 'CodePen',
    handle: 'codepen.io/Kanth-TS',
    url: 'https://codepen.io/Kanth-TS',
    icon: 'codepen',
  },
];

// Update this summary as your experience grows.
export const aboutText =
  'I am Lakshmi Kanth Talamari Sidda, a pre-final-year B.Tech CSE student at VNR VJIET and a full stack developer based in Hyderabad. I build end-to-end web applications with a strong focus on clean architecture, responsive user interfaces, and practical problem solving. I enjoy taking products from idea to deployment using MERN and Java/Spring ecosystems.';

// Add or remove skills based on the role you are targeting.
export const skills = [
  'Python',
  'Java',
  'JavaScript',
  'SQL',
  'C',
  'React.js',
  'Node.js',
  'Express.js',
  'HTML',
  'CSS',
  'Bootstrap',
  'Spring',
  'Spring Boot',
  'Spring Security',
  'Hibernate',
  'MongoDB',
  'MySQL',
  'MERN Stack',
  'REST APIs',
  'JWT Authentication',
  'Tailwind CSS',
  'Windows',
  'Linux',
  'VS Code',
  'Eclipse',
  'Jupyter Notebook',
  'Git & GitHub',
  'Postman',
  'Vite',
];

// Keep project descriptions concise and impact-focused.
export const projects = [
  {
    title: 'Farmer-Labor Job Portal',
    tech: 'MERN Stack',
    description:
      'Location-aware portal that connects farmers with available labor, simplifying rural hiring workflows.',
    hrPitch: 'Real-world rural hiring challenge solved with scalable full-stack architecture.',
    problemStatement:
      'Rural employers struggle to find reliable workers quickly, while laborers lack a simple way to discover nearby work opportunities.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs'],
    features: [
  'Built 8+ RESTful APIs using Node.js and Express.js for scalable backend workflows',
  'Optimized database queries in MongoDB to ensure high performance and scalability',
  'Implemented secure authentication and role-based access using JWT',
  'Designed modular, multi-language React.js UI components for better accessibility and user experience'
],
    impact:
      'Reduced hiring friction by centralizing job discovery and communication in one accessible platform.',
    githubUrl: 'https://github.com/KanthTS/FarmLabour',
    mediaUrl: withBase('/project-media/farmer-labor.jpg'),
  },
  {
    title: 'Craftify - Artisan E-Commerce Platform',
    tech: 'MERN Stack',
    description:
      'E-commerce platform for handcrafted products with clean browsing, product management, and order flows.',
    hrPitch: 'Product-focused e-commerce build with strong UX and secure backend flows.',
    problemStatement:
      'Independent artisans often lack affordable digital storefronts to reach buyers and manage orders efficiently.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'REST APIs'],
    features: [
      'Product listings with category and search filters',
      'Cart and checkout flow with order tracking',
      'Admin controls for products and inventory',
      'Secure authentication and protected routes',
    ],
    impact:
      'Enabled artisan-first digital selling by combining storefront UX and backend commerce workflows.',
    githubUrl: 'https://github.com/KanthTS/finalprojectofhandmade',
    mediaUrl: withBase('/project-media/craftify-pottery.svg'),
  },
  {
    title: 'Ghibli Art Generator',
    tech: 'Spring Boot + React',
    description:
      'Creative web app where users generate stylized art outputs through a full-stack interactive pipeline.',
    hrPitch: 'Creative AI-style app demonstrating Java backend + modern frontend integration.',
    problemStatement:
      'Users want a quick way to experiment with stylized art generation without dealing with complex tooling or setup.',
    techStack: ['React.js', 'Spring Boot', 'Java', 'REST APIs', 'Image Processing'],
    features: [
      'Prompt-based art generation workflow',
      'Backend processing pipeline with API integration',
      'Simple preview and regeneration experience',
      'Clean frontend with fast interaction feedback',
    ],
    impact:
      'Made creative experimentation more accessible through a lightweight full-stack interface.',
    githubUrl: 'https://github.com/KanthTS/GhibiliArt-Using-Java',
    mediaUrl: withBase('/project-media/ghibli-art.jpg'),
  },
  {
    title: 'SlotSwapper - Peer Slot Exchange Platform',
    tech: 'MERN + JWT',
    description:
      'Peer-to-peer calendar slot swapping app with secure authentication and swap workflow management.',
    hrPitch: 'Workflow-heavy system with robust state transitions and authentication logic.',
    problemStatement:
      'Students and teams often need to exchange scheduled time slots but lack a structured, trackable, and secure workflow.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt'],
    features: [
      'JWT-based authentication with protected routes',
      'CRUD event calendar with swappable slot status',
      'Swap request and response workflow',
      'Ownership transfer logic on accepted slot swaps',
    ],
    impact:
      'Streamlined peer slot coordination with a clear end-to-end swapping process and robust backend state handling.',
    githubUrl: 'https://github.com/KanthTS/SlotSwapper',
    mediaUrl: withBase('/project-media/slot-swapper.jpg'),
  },
];

// Certifications sourced from your resume.
export const certifications = [
  {
    title: 'JPMC Advanced Software Engineering Virtual Experience - Forage',
    url: 'https://drive.google.com/file/d/1R9HPpQjQvB3qj-0IACnAv_C8u6wkhuG-/view',
  },
  {
    title: 'NPTEL Certification - Cyber Security and Privacy (12 Week Course, Jul-Oct 2025)',
    url: 'https://drive.google.com/file/d/1UPWcVHE4jGtOFC_P5ThrInvwmM1r7rPH/view',
  },
  {
    title: 'AWS Solutions Architecture Job Simulation - Forage',
    url: 'https://drive.google.com/file/d/1s86L4iZDOuTJczXOxo-oUDs4DlPm8prF/view?usp=drive_link',
  },
];
