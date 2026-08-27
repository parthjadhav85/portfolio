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
      "Hey, I'm Parth Jadhav — a Computer Science student passionate about building practical, AI-driven, and scalable solutions.",
      "I explore full-stack web development, GenAI integrations, data systems, and automation, applying my skills through hands-on projects like smart security systems, cloud platforms, and developer tooling.",
      "I am strengthening my DSA skills via LeetCode and GFG, and enjoy crafting tools that balance usability, performance, and impact.",
      "Outside tech, I follow sports, vibe to great music, and recharge with creative hobbies."
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
    linkedin: 'https://linkedin.com/in/yourusername',
    leetcode: 'https://leetcode.com/u/yourusername',
    geeksforgeeks: 'https://geeksforgeeks.org/user/yourusername',
    email: 'mailto:parth.dev.contact@gmail.com',
    phone: 'tel:+91 9321529020',
  },

  // ===========================================================================
  // 4. Skills Categorized (Skills Page - Matching Reference Screenshot)
  // ===========================================================================
  skillCategories: [
    {
      title: 'Programming Languages',
      skills: ['Python', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SQL', 'C++',],
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React.js', 'OpenCV', 'OCR', 'Node.js', 'Express.js', 'TailwindCSS', 'Tesseract', 'REFramework'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['VS Code', 'GitHub', 'AWS Cloud', 'Dev C++', 'Netlify', 'MongoDB',],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
    },
    {
      title: 'Operating Systems',
      skills: ['Windows', 'Linux', 'Ubuntu'],
    },
    {
      title: 'Soft Skills',
      skills: [
        'Leadership',
        'Team Management',
        'Problem Solving',
        'Communication',
        'Time Management',
        'Event Organization',
      ],
    },
  ],

  // ===========================================================================
  // 5. Certifications & Achievements (Skills & About Page)
  // ===========================================================================
  certificationsAndAchievements: [
    {
      title: 'Runner-Up – 2023 Promethean Idea Presentation',
      organization: 'SIES GST',
      details: 'Presented innovative technical solution in collegiate competition.',
    },
    {
      title: 'AWS Academy Graduate – AWS Cloud Foundations',
      organization: 'Amazon Web Services',
      details: 'Completed foundational cloud architecture and deployment curriculum.',
    },
    {
      title: 'Shortlisted Participant – Techxter 14.0 Paper Presentation',
      organization: 'IETE Students Forum - SIESGST',
      details: 'Authored and presented research on computer vision and security automation.',
    },
    {
      title: 'Top 5% on LeetCode & GeeksForGeeks',
      organization: 'Algorithmic Problem Solving',
      details: '500+ problems solved across data structures, graph theory, and dynamic programming.',
    },
  ],

  // ===========================================================================
  // 6. Projects (Projects Page - Matching Reference Screenshot)
  // ===========================================================================
  projects: [
    {
      id: 'criminal-record-management',
      title: 'Cloud-Based Criminal Record Management System',
      period: 'Nov 2024 – Jan 2025',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=compress&cs=tinysrgb&w=800',
      tags: ['Cloud Computing', 'Database Management', 'Security', 'Web Development'],
      description: 'Developed a comprehensive cloud-based system for managing criminal records with authentication. The system provides secure access control, data encryption, and real-time synchronization. Implemented role-based authentication and audit trails for enhanced security and compliance.',
      github: 'https://github.com/yourusername/criminal-record-system',
      report: 'https://drive.google.com/',
    },
    {
      id: 'smart-society-security',
      title: 'Smart Society Security System',
      period: 'Jan 2025 – Apr 2025',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=compress&cs=tinysrgb&w=800',
      tags: ['Streamlit', 'OpenCV', 'OCR', 'Machine Learning'],
      description: 'Developed a comprehensive security system for residential societies using facial recognition and text recognition technologies. The system provides automated access control, visitor management, and security alerts through a Streamlit dashboard. Integrated with cloud storage for secure data management and retrieval.',
      github: 'https://github.com/yourusername/smart-society-security',
      report: 'https://drive.google.com/',
    },
    {
      id: 'student-feedback-system',
      title: 'Online Student Feedback System',
      period: 'Jun 2024 – Oct 2024',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=compress&cs=tinysrgb&w=800',
      tags: ['React.js', 'Database Management'],
      description: 'Created a responsive feedback platform for educational institutions that enables students to provide anonymous feedback on courses and instructors. The system generates live reports and analytics for administrators. Deployed with real-time data synchronization and comprehensive reporting features.',
      github: 'https://github.com/yourusername/student-feedback-system',
      report: 'https://drive.google.com/',
    },
    {
      id: 'home-energy-monitoring',
      title: 'Home Energy Monitoring System',
      period: 'Jan 2024 – May 2024',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=compress&cs=tinysrgb&w=800',
      tags: ['Arduino IDE', 'Python', 'PHP', 'MySQL'],
      description: 'Built a real-time energy monitoring system that tracks household power consumption. The system uses Arduino-based sensors to collect data, processes it using Python, and displays analytics through a PHP-based dashboard. Enables users to optimize energy usage and reduce power bills.',
      github: 'https://github.com/yourusername/home-energy-monitor',
      report: 'https://drive.google.com/',
    },
    {
      id: 'morse-code-caesar-cipher',
      title: 'Morse Code & Caesar Cipher ENDEC',
      period: 'Aug 2023 – Oct 2023',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=compress&cs=tinysrgb&w=800',
      tags: ['Arduino', 'C/C++'],
      description: 'Implemented a hardware-based encoder/decoder for Morse code with additional Caesar Cipher encryption. The system can detect optical Morse signals and translate them to text, as well as convert text input to Morse code output. Provides multiple encryption layers for secure communication.',
      github: 'https://github.com/yourusername/morse-caesar-endec',
      report: 'https://drive.google.com/',
    },
  ],

  // ===========================================================================
  // 7. Blog Posts (Blog Page - Matching Reference Screenshot)
  // ===========================================================================
  blogs: [
    {
      id: 'finding-my-stride-computer-engineering',
      slug: 'finding-my-stride-computer-engineering',
      title: 'Finding My Stride: A Computer Engineer’s Journey',
      date: 'July 12, 2025',
      readTime: '4 min read',
      tags: ['Personal Journey', 'Computer Engineering', 'Web Development', 'Growth'],
      excerpt: 'My journey in Computer Engineering started with uncertainty and self-doubt, but slowly transformed into a story of resilience, learning, and growth. From struggling with the basics to diving deep into web development and forming meaningful connections, here\'s how I found my footing.',
      content: [
        'When I began my Computer Engineering degree in 2022, I wasn\'t sure what to expect—or if I even belonged. Every subject felt foreign, and I constantly felt like I was playing catch-up. Everyone seemed to be moving faster, understanding things I couldn\'t yet wrap my head around. I was overwhelmed.',
        'Despite that, I didn\'t give up. I kept trying. I explored front-end web development out of curiosity—HTML, CSS, a bit of JavaScript. It felt like the first thing that clicked. I still remember the excitement of seeing my first working webpage. That small spark lit a fire.',
        'By 2023, things started shifting. I made some great friends—people who motivated me, studied with me, and reminded me I wasn\'t alone. Slowly, I began stepping up in academics. I didn\'t become a topper overnight, but I was showing up and staying consistent.',
        'Then came third year. That\'s when I really went all in. I dove deep into tools and technologies—React, Git, automation, Python, cloud tools, and more. I started building. Small projects, meaningful projects. I also got the opportunity to intern during this time, which added some practical perspective to what I was learning.',
        'Looking back now, I\'ve come a long way. I may have started unsure, but I\'ve found my stride. Computer Engineering isn\'t just a degree anymore—it\'s part of who I am. And the best part? I know this is just the beginning.',
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
      value: 'linkedin.com/in/yourusername',
      link: 'https://linkedin.com/in/yourusername',
      icon: 'linkedin',
    },
    {
      type: 'LeetCode',
      value: 'leetcode.com/u/yourusername',
      link: 'https://leetcode.com',
      icon: 'code',
    },
    {
      type: 'GeeksForGeeks',
      value: 'geeksforgeeks.org/user/yourusername',
      link: 'https://geeksforgeeks.org',
      icon: 'terminal',
    },
  ],

  // ===========================================================================
  // 9. About Page Timeline, Education, Experience, Responsibility, Languages
  // ===========================================================================
  journey: [
    {
      year: '2022',
      technologies: ['Python', 'SQL'],
      description: 'Started my programming journey with Python and database fundamentals.',
    },
    {
      year: '2023',
      technologies: ['Python', 'Java', 'C Programming', 'Arduino IDE', 'DSA'],
      description: 'Began doing DSA as coursework, while implementing projects using Arduino.',
    },
    {
      year: '2024',
      technologies: ['Streamlit', 'GenAI APIs', 'PostgreSQL', 'MongoDB', 'Javascript'],
      description: 'Dove into web development and databases.',
    },
    {
      year: '2025',
      technologies: ['RPA + AI integrations', 'Deep Learning', 'Machine Learning', 'Data Visualization & Analytics'],
      description: 'Focusing on advanced AI integrations, automation and data analysis and representation.',
    },
  ],

  education: [
    {
      degree: 'Bachelor of Engineering in Computer Engineering',
      institution: 'Your University',
      period: '2022 – 2026',
      details: [
        'Coursework: Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, AI & Machine Learning.',
        'Active contributor to collegiate coding events and tech symposiums.',
      ],
    },
    {
      degree: 'Higher Secondary Certificate (HSC) - Science',
      institution: 'Your Junior College / High School',
      period: '2020 – 2022',
      details: [
        'Subjects: Physics, Chemistry, Mathematics, Computer Science.',
        'Graduated with distinction and honors.',
      ],
    },
  ],

  experience: [
    {
      title: 'Software Engineering Intern',
      company: 'Tech Solutions Inc.',
      period: 'Jun 2024 – Aug 2024',
      description: 'Worked on front-end development and API integrations for enterprise analytics dashboards.',
      details: [
        'Built responsive web views in React and integrated REST APIs.',
        'Collaborated on database query optimization and performance testing.',
      ],
      technologies: ['React.js', 'Node.js', 'PostgreSQL', 'Git'],
    },
  ],

  positionsOfResponsibility: [
    {
      title: 'Technical Head',
      organization: 'Computer Society Chapter',
      period: '2024 – Present',
      description: 'Spearheaded technical events, coding contests, and workshops for over 200+ students.',
    },
  ],

  spokenLanguages: [
    { name: 'English', proficiency: 'Professional Working', flag: '🇬🇧' },
    { name: 'Hindi', proficiency: 'Full Professional', flag: '🇮🇳' },
    { name: 'Regional / Other', proficiency: 'Native / Conversational', flag: '🌐' },
  ],

  beyondWork: [
    { name: 'Football', description: 'Following European football and playing weekly matches.', emoji: '⚽' },
    { name: 'Music', description: 'Listening to synth-wave, R&B, and soundtrack scores.', emoji: '🎧' },
    { name: 'Gaming', description: 'Enjoying immersive story and strategy games.', emoji: '🎮' },
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
