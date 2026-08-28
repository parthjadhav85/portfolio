/**
 * =============================================================================
 * Portfolio Data Configuration (Single Source of Truth)
 * =============================================================================
 * Customize all content for your multi-page portfolio here.
 * Edit any section, add projects, blog posts, skills, or experience entries.
 * =============================================================================
 */

const portfolioData = {
  // ===========================================================================
  // 1. Personal & Hero Information (Used on Home, Navbar, Footer, and Meta)
  // ===========================================================================
  personal: {
    name: 'Parth Jadhav',
    firstName: 'Parth.dev',
    lastName: 'Jadhav',
    title: 'Computer Science Undergraduate',
    tagline: 'Building innovative solutions through code and creativity. Explore my work to see what I\'ve been creating.',
    typewriterWords: [
      'Student',
      'Developer',
      'Gamer',
      'Designer',
      'Thinker',
    ],
    email: 'parth.dev.contact@gmail.com',
    phone: '+91 9321529020',
    location: 'Navi Mumbai, India',
    resumeUrl: 'https://drive.google.com/', // Link to your resume / CV
    achievementsDriveUrl: 'https://drive.google.com/', // Link to achievements drive
    profileImage: null, // Image URL or null for stylized avatar
    bio: [
      "I am Parth Jadhav, a Computer Science student passionate about building practical software, full-stack applications, backend systems, and data-driven solutions.",
      "I am currently developing and strengthening my skills across Java, Spring Boot, JavaScript, TypeScript, React, Node.js, relational databases, cloud technologies, and modern developer tooling.",
      "I learn primarily by building hands-on projects, working with real development tools, and solving problems that balance usability, performance, and clean architecture.",
      "Outside tech, I follow sports, listen to great music, and recharge with creative hobbies and gaming.",
    ],
  },

  // ===========================================================================
  // 2. Navigation Links (Multi-page Routes)
  // ===========================================================================
  navLinks: [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Projects', path: '/projects' },
    { title: 'Skills', path: '/skills' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact', path: '/contact' },
  ],

  // ===========================================================================
  // 3. Social & Coding Profiles
  // ===========================================================================
  social: {
    github: 'https://github.com/parthjadhav85',
    linkedin: 'https://www.linkedin.com/in/parthjadhav85/',
    leetcode: 'https://leetcode.com/u/3eeQeHbIv6/',
    geeksforgeeks: 'https://www.geeksforgeeks.org/profile/parthjadhav85',
    email: 'mailto:parth.dev.contact@gmail.com',
    phone: 'tel:+91 9321529020',
  },

  // ===========================================================================
  // 4. Skills Categorized (Skills Page - Matching Reference Screenshot)
  // ===========================================================================
  skillCategories: [
    {
      title: 'Programming Languages',
      skills: ['Java', 'JavaScript', 'Python', 'SQL', 'HTML5', 'CSS3', 'TypeScript'],
    },
    {
      title: 'Frameworks / Runtime',
      skills: ['Spring Boot', 'Node.js', 'Express', 'React', 'Vite', 'Tailwind CSS'],
    },
    {
      title: 'Databases / Data',
      skills: ['PostgreSQL', 'MySQL', 'Supabase', 'Pandas', 'NumPy'],
    },
    {
      title: 'Cloud / Deployment',
      skills: ['AWS', 'Vercel', 'Render'],
    },
    {
      title: 'Development / Tools',
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'IntelliJ IDEA'],
    },
    {
      title: 'Core CS & Operating Systems',
      skills: ['Data Structures', 'Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks', 'REST APIs', 'Linux', 'Windows'],
    },
  ],

  // ===========================================================================
  // 5. Certifications & Achievements (Skills Page)
  // ===========================================================================
  certificationsAndAchievements: [
    {
      title: 'StashBox — Full-Stack Project Built & Deployed',
      description: 'Built and deployed StashBox, a full-stack bookmark management platform with React, Express, Supabase/PostgreSQL, authentication, hierarchical collections, metadata extraction, and production deployment.',
    },
    {
      title: 'Open-Source Contribution — DevTrack',
      description: 'Contributed an improvement to the DevTrack open-source project by implementing an empty state for the contribution heatmap when no commits exist in the selected date range.',
    },
    {
      title: '1st Rank in Academics — FY 2024–2025',
      description: 'Ranked 1st in academics during FY 2024–2025.',
    },
  ],

  // ===========================================================================
  // 6. Projects (Projects Page)
  // ===========================================================================
  projects: [
    {
      id: 'stashbox',
      title: 'StashBox',
      period: 'Jul 2026 – Aug 2026',
      status: 'Completed / Deployed',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=compress&cs=tinysrgb&w=800',
      tags: [
        'React',
        'Vite',
        'Tailwind CSS',
        'Node.js',
        'Express',
        'Supabase',
        'PostgreSQL',
      ],
      description: 'StashBox is a full-stack bookmark management platform for saving, organizing, searching, and managing web bookmarks through hierarchical collections. Users can save bookmarks, automatically extract webpage metadata, organize bookmarks into nested collections, search their saved links, and manage favorites and archived bookmarks.',
      github: 'https://github.com/parthjadhav85/StashBox',
      live: 'https://stash-box-three.vercel.app/',
    },
    {
      id: 'subtrack',
      title: 'SubTrack',
      period: 'Jul 2026 – Present',
      status: 'In Development / Under Development',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=compress&cs=tinysrgb&w=800',
      tags: [
        'Next.js',
        'React',
        'TypeScript',
        'Supabase',
        'Tailwind CSS',
        'Recharts',
        'Lucide React',
      ],
      description: 'SubTrack is a subscription management application currently under development, designed to help users manage and track their recurring subscriptions in one place.',
      github: 'https://github.com/parthjadhav85/SubTrack',
    },
  ],

  // ===========================================================================
  // 7. Blog Posts (Blog Page - Matching Reference Screenshot)
  // ===========================================================================
  blogs: [
    {
      id: 'finding-my-way-back',
      slug: 'finding-my-way-back',
      title: 'Finding My Way Back',
      date: 'August 18, 2025',
      readTime: '2 min read',
      tags: ['Personal Journey', 'Computer Science', 'Coding', 'Growth'],
      excerpt: 'Finishing 12th grade came with a setback I wasn\'t prepared for. Here is how staying busy, exploring new interests, and focusing on coding helped me find my direction.',
      content: [
        'Finishing 12th grade came with a setback I wasn\'t prepared for. My results were much lower than I had hoped, and for a while, I felt lost and started doubting myself. After spending some time stuck in that disappointment, I realized that thinking about the result wasn\'t going to change anything. I needed to move forward.',
        'I started keeping myself busy by exploring different things that interested me—YouTube, video editing, scripting, 3D modelling, software tools, and of course, coding. Some interests lasted longer than others, but each one taught me something and helped me stay productive.',
        'Programming was the one thing I kept coming back to. I had already explored C++ and microcontrollers, and I gradually moved into Python, HTML, CSS, and JavaScript. The more I built, the more I enjoyed solving problems and turning ideas into something real.',
        'In 2024, I started my BSc in Computer Science at the University of Mumbai. Since then, I have gone deeper into full-stack development, databases, backend technologies, and cloud tools while building projects like StashBox and SubTrack. I have also started exploring open-source development through GitHub.',
        'Looking back, my 12th-grade result didn\'t magically change, but my perspective did. I realized that one score doesn\'t define what I can become. I kept learning, kept building, and slowly found the direction I wanted to pursue.',
        'I\'m still learning, still experimenting, and still building—and that\'s what matters to me now.',
      ],
    },
  ],

  // ===========================================================================
  // 8. Contact Channels (Contact Page - Matching Reference Screenshot)
  // ===========================================================================
  contactChannels: [
    {
      type: 'Email',
      value: 'parth.dev.contact@gmail.com',
      link: 'mailto:parth.dev.contact@gmail.com',
      icon: 'mail',
    },
    {
      type: 'Phone',
      value: '+91 9321529020',
      link: 'tel:+919321529020',
      icon: 'phone',
    },
    {
      type: 'GitHub',
      value: 'github.com/parthjadhav85',
      link: 'https://github.com/parthjadhav85',
      icon: 'github',
    },
    {
      type: 'LinkedIn',
      value: 'linkedin.com/in/parthjadhav85',
      link: 'https://www.linkedin.com/in/parthjadhav85/',
      icon: 'linkedin',
    },
    {
      type: 'LeetCode',
      value: 'leetcode.com/u/3eeQeHbIv6',
      link: 'https://leetcode.com/u/parthjadhav85/',
      icon: 'code',
    },
    {
      type: 'GeeksForGeeks',
      value: 'geeksforgeeks.org/profile/parthjadhav85',
      link: 'https://www.geeksforgeeks.org/profile/parthjadhav85',
      icon: 'terminal',
    },
  ],

  // ===========================================================================
  // 9. About Page Timeline, Education, Experience, Responsibility, Languages
  // ===========================================================================
  journey: [
    {
      year: '2023',
      technologies: ['C++', 'Microcontrollers', 'Arduino / basic embedded systems'],
      description: 'Started exploring programming and hardware during 12th grade, learning C++ fundamentals and working with microcontrollers and basic embedded projects.',
    },
    {
      year: '2024',
      technologies: ['Python', 'HTML', 'CSS', 'JavaScript'],
      description: 'Expanded from basic programming into web development while continuing to strengthen programming fundamentals through Python and frontend technologies.',
    },
    {
      year: '2025',
      technologies: [
        'JavaScript',
        'TypeScript',
        'React',
        'Vite',
        'Tailwind CSS',
        'Node.js',
        'Express',
        'SQL',
        'PostgreSQL',
        'MySQL',
        'Supabase',
      ],
      description: 'Focused on full-stack development, building practical applications with modern frontend technologies, backend APIs, and relational databases.',
    },
    {
      year: '2026',
      technologies: [
        'Java',
        'Spring Boot',
        'AWS',
        'Git',
        'GitHub',
        'Postman',
        'Vercel',
        'Render',
        'IntelliJ IDEA',
        'Pandas',
        'NumPy',
      ],
      description: 'Currently strengthening backend and professional development skills with Java and Spring Boot while expanding into cloud, APIs, development tooling, and production-oriented practices.',
    },
  ],

  education: [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Mumbai — JVM Mehta College, Navi Mumbai',
      period: '2024 – Present',
      details: [
        'Coursework: Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, AI & Machine Learning.',
        'Focus: Building practical full-stack applications (StashBox, SubTrack), backend development with Java & Spring Boot, relational databases & Supabase, and cloud deployment on AWS, Vercel & Render.',
        'Active contributor to collegiate coding events and tech symposiums.',
      ],
    },
    {
      degree: 'Higher Secondary Certificate (HSC) – Science',
      institution: 'S.D.V. Jr. College, Navi Mumbai',
      period: '2022 – 2024',
      details: [
        'Subjects: Physics, Chemistry, Mathematics, Computer Science.',
        'Built foundational programming skills with C++',
        'Explored microcontrollers and basic embedded systems',
        'Developed an early interest in computer science through practical programming and technology projects',
      ],
    },
  ],

  experience: [],

  positionsOfResponsibility: [],

  spokenLanguages: [
    { name: 'English', proficiency: 'Professional Working', flag: '🇬🇧' },
    { name: 'Hindi', proficiency: 'Full Professional', flag: '🇮🇳' },
    { name: 'Marathi', proficiency: 'Native / Conversational', flag: '🇮🇳' },
  ],

  beyondWork: [
    { name: 'Sports', description: 'Following sports matches, fitness, and staying active.' },
    { name: 'Music', description: 'Listening to synth-wave, R&B, and soundtrack scores.' },
    { name: 'Gaming', description: 'Enjoying immersive story and strategy games.' },
  ],

  // ===========================================================================
  // 10. Footer Configuration
  // ===========================================================================
  footer: {
    copyrightYear: '2026',
    tagline: 'All rights reserved.',
  },
};

export default portfolioData;
