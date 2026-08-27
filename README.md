# Modern Developer Portfolio Website

A pixel-perfect, high-performance, and fully customizable portfolio website built with **React**, **Vite**, and **Vanilla CSS**. Replicated and enhanced based on the modern developer portfolio design specifications.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```

---

## 🎨 How to Customize Your Portfolio

All website content is centralized in **`src/data/portfolio.js`**. You do not need to modify the UI components to change your information or add new entries.

### 1. Change Personal Information
Open `src/data/portfolio.js` and edit the `personal` object:
```javascript
personal: {
  name: 'Your Full Name',
  firstName: 'Your',
  lastName: 'Name',
  role: 'Software Engineer / Full Stack Developer',
  tagline: 'Building digital experiences that make an impact',
  email: 'your.email@example.com',
  phone: '+1 (123) 456-7890',
  location: 'City, Country',
  resumeUrl: '/resume.pdf', // Link to your resume PDF or cloud link
  profileImage: null,        // Pass image path or URL, or null for avatar placeholder
  bio: 'Your personal summary...',
  about: 'Detailed about me description...',
}
```

### 2. Update Social Links
Edit the `social` object in `src/data/portfolio.js`:
```javascript
social: {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
  instagram: 'https://instagram.com/yourusername',
  email: 'mailto:your.email@example.com',
}
```

### 3. Add or Modify Projects
Add items to the `projects` array in `src/data/portfolio.js`:
```javascript
{
  title: 'My Awesome Project',
  description: 'A brief description of what this project does and what problems it solves.',
  image: null, // Link to project screenshot or null
  technologies: ['React', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
  github: 'https://github.com/yourusername/my-project',
  live: 'https://myproject.com',
  featured: true, // Set to true to highlight in the Featured filter
}
```

### 4. Add Skills
Edit or add skill categories and skill items in `src/data/portfolio.js`:
```javascript
{
  title: 'Languages',
  icon: 'code', // 'code', 'framework', 'tools', or 'other'
  items: [
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Rust', color: '#DEA584' },
    // Add more skills with their brand hex color
  ],
}
```

### 5. Add Experience, Education & Certifications
Simply add new objects to the `experience`, `education`, and `certifications` arrays in `src/data/portfolio.js`.

---

## 🛠 Features

- **Dark & Light Mode**: Default dark theme with smooth toggle, persisting preference in `localStorage`
- **Responsive Layout**: Fluid breakpoints for Mobile, Tablet, Laptop, and Desktop screens
- **Scroll Reveal Animations**: IntersectionObserver-based animations on elements as they enter the viewport
- **Interactive Mobile Drawer**: Slide-out navigation drawer with smooth animations and backdrop blur
- **Timeline Experience**: Clean vertical timeline with company links, duration badges, and bullet points
- **Project Showcase**: Filterable project gallery with GitHub & Live Demo action links
- **Contact Form**: Interactive contact form with status feedback
- **Smooth Navigation**: One-click smooth scrolling with active section indicator
- **Back to Top**: Floating button appearing on scroll with smooth return to top
- **Zero Heavy Framework Bloat**: Fast load times with minimal dependencies (`react`, `react-icons`)

---

## 📁 Project Structure

```
portfolio/
├── index.html                 # HTML entry point with meta tags & fonts
├── package.json               # Dependencies and build scripts
├── vite.config.js             # Vite configuration
├── public/
│   └── favicon.svg            # Custom code bracket favicon
└── src/
    ├── main.jsx               # React DOM render entry
    ├── App.jsx                # Theme state, loader & layout assembly
    ├── index.css              # Complete vanilla CSS design system
    ├── data/
    │   └── portfolio.js       # Centralized data store (customize here!)
    └── components/
        ├── ScrollReveal.jsx   # Scroll animation wrapper
        ├── Navbar.jsx         # Header & mobile drawer
        ├── Hero.jsx           # Hero landing section
        ├── About.jsx          # Bio, highlights & photo
        ├── Skills.jsx         # Technical skills cards & tags
        ├── Projects.jsx       # Projects grid & filters
        ├── Experience.jsx     # Work experience timeline
        ├── Education.jsx      # Degrees, certifications & achievements
        ├── Contact.jsx        # Contact info & message form
        └── Footer.jsx         # Footer & back-to-top button
```
