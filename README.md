# Hassan Zaki | Bioinformatics & AI Portfolio Template

[![Framework: Next.js](https://img.shields.io/badge/Framework-Next.js%2015.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Library: React](https://img.shields.io/badge/Library-React%2018.2-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![Styling: Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS%203.3-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Language: TypeScript](https://img.shields.io/badge/Language-TypeScript%205.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Deployment: Vercel](https://img.shields.io/badge/Deployment-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

A production-grade, highly optimized, single-page application (SPA) portfolio template engineered for students, self-learners, and early-career researchers. Featuring a premium, responsive, and bioluminescent theme tailored for data science, artificial intelligence, and bioinformatics.

**Live Portfolio:** [https://hassan-ahmed-portfolio.vercel.app](https://hassan-ahmed-portfolio.vercel.app)  
**GitHub Repository:** [https://github.com/HassanAhmed2Ha/Hassan-Ahmed-Portfolio](https://github.com/HassanAhmed2Ha/Hassan-Ahmed-Portfolio)

---

## 📖 The Story & Philosophy

### Digital Empowerment as a Core Right
In the modern academic and technical landscape, a traditional two-page PDF CV is no longer sufficient to capture the depth of a candidate’s skills, continuous learning, and driving vision. However, most professional portfolio builders are gatekept by subscription fees, and open-source alternatives often demand advanced full-stack experience to customize and deploy. 

This repository was born out of that gap. Built during an intense, three-day development sprint, this portfolio was structured from the ground up to establish a free, accessible, and high-performance framework. The core philosophy is **digital empowerment through simplification**: giving students, high-school scholars, and community leaders a polished digital identity that stands out in applications for fellowships, exchange programs, and research opportunities, without incurring financial costs or lost development hours.

---

## 🏗️ Architecture: Decoupled Data-Driven Design

Unlike traditional templates where text and layouts are heavily intertwined, this codebase implements a **decoupled, data-driven architecture**. UI logic is completely isolated from content. All textual content, SEO metadata, experience descriptions, project credentials, and research preprints are centralized in a single data store: `src/data.ts`.

### Layout-Data Flow
```
                                 [ src/types.ts ]
                                         │  (Defines strict typings)
                                         ▼
                                  [ src/data.ts ] 
                                         │  (Exports contentEn object)
                                         ▼
                                [ pages/index.tsx ]
                     (Main entry page, imports content data)
                                         │
        ┌───────────────────┬────────────┼────────────┬───────────────────┐
        ▼                   ▼            ▼            ▼                   ▼
[ components/Layout.tsx ]   │   [ About.tsx ]   [ Experience.tsx ]  [ Contact.tsx ]
(Dynamic SEO Metatags)      │   (Skill groups)  (Vertical Timeline) (Form fields)
                            ▼                                             
                     [ Work.tsx ] ---> [ WorkGrid.tsx ]
                     (Featured projects grid)                             
```

### Key Architectural Advantages
- **Component Integrity**: You never need to touch complex React code, React Hooks, or JSX markup to update your portfolio. Modifying `src/data.ts` safely feeds new data straight into the UI.
- **Strict Typing Safety**: The content structure is strictly validated by TypeScript interface schemas (`src/types.ts`). If you make a syntax error, the compiler catches it during the build process instead of crashing at runtime.
- **Fast Build Times**: Decoupled structures allow for clean static generation, resulting in maximum Lighthouse performance scores.

---

## 🌟 Key Features

1. **Branding & Layout Configuration**: Dynamically configurable logo headers and fully customizable, responsive layout wrappers.
2. **Dynamic SEO Metatags**: Automatic injection of site titles, page descriptions, and keywords directly from the content data block to guarantee search engine optimization.
3. **Hero Section with Typewriter Effect**: An interactive landing section utilizing a looping typewriter script to display multiple professional roles sequentially.
4. **DNA Bioluminescent Animations**: High-performance SVG and canvas-based animations, including floating DNA holograms and background interactive particles, matching a bioinformatics aesthetic.
5. **Timeline Experience Block**: A responsive vertical timeline tracking professional roles, companies, dates, and bulleted project descriptions.
6. **Credential & Certification Cards**: A clean card grid rendering certifications, issuing institutions, dates, and direct document verification URLs.
7. **Featured Projects Showcase**: An interactive grid linking to live demos and GitHub repositories, categorized with clean tech-stack pill tags.
8. **Research Preprints Section**: Built specifically for open science, providing a structured showcase for preprints with direct DOI and Zenodo record integration.
9. **Responsive Scroll-Spy Navigation**: A sleek floating navigation menu that tracks page scroll heights and dynamically highlights the active section.
10. **Integrated Contact Service**: A functional email contact form powered by EmailJS, allowing visitors to send messages directly to your inbox without a dedicated backend server.

---

## 🛠️ Technical Setup & Local Development

### Prerequisites
- **Node.js**: `v18.x` or higher (LTS recommended)
- **Package Manager**: `npm` (packaged with Node.js)

### Local Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/HassanAhmed2Ha/Hassan-Ahmed-Portfolio.git
   cd Hassan-Ahmed-Portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

4. Run ESLint to check for syntax or style warnings:
   ```bash
   npm run lint
   ```
5. Build the application for production:
   ```bash
   npm run build
   ```

---

## ✍️ Customization Guide

### 1. Centralized Content Customization (`src/data.ts`)
To customize your portfolio's texts, open [src/data.ts](file:///home/hassan/Documents/projects/hassan-ahmed-portfolio/src/data.ts) and modify the strings within the exported `contentEn` object. 

The structure of the data object maps directly to the UI sections:

```typescript
export const contentEn: Content = {
  // Website branding logo
  header: {
    logoPart1: 'hassan ',
    logoPart2: 'Zaki',
  },
  
  // Search engine metadata (Title tags, SEO description)
  seo: {
    title: "Hassan Zaki | Bioinformatics & AI Portfolio",
    description: "Computational Biology Student and AI Enthusiast building tools for biological data analysis.",
    keywords: ["Bioinformatics", "AI", "Computational Biology", "Python", "Hassan Zaki"],
  },
  
  // Home/Landing Page details
  hero: {
    titleLine1: 'Decoding Life\'s Code',
    titleLine2: 'As a ',
    role: ['Computational Biology Student', ' Data Scientist', 'AI Enthusiast'], // Rotated words
    description: 'Bridging the gap between biological complexity and artificial intelligence...',
  },

  // Profile introduction & skills
  about: {
    title: 'About Me',
    tagline: 'At the intersection of biology and computation...',
    skillGroups: [
      { category: 'Technical Skills', items: ['Python', 'Bioinformatics', 'Machine Learning'] },
      { category: 'Languages', items: ['Arabic (Native)', 'English (Professional)'] },
    ],
  },

  // Professional roles vertical timeline
  experience: {
    title: 'Professional Experience',
    items: [
      {
        role: 'Erasmus+ Mentors Academy Trainee',
        company: 'New Regeneration Project (EU)',
        period: 'Nov 2025 – Present',
        location: 'Remote',
        description: [
          'Selected for the New Regeneration Mentors Academy.',
          'Training in digital facilitation, intercultural mediation, and civic tech.'
        ]
      }
    ]
  },

  // Credentials and certificates grid
  certifications: {
    title: 'Certifications',
    verifyLabel: 'Verify',
    items: [
      {
        title: 'Python for Genomic Data Science',
        issuer: 'Johns Hopkins University (Coursera)',
        date: 'Dec 2025',
        link: 'https://drive.google.com/file/d/...'
      }
    ]
  },

  // Project cards grid
  projects: {
    title: 'Featured Projects',
    description: 'A curated collection of my research applications...',
    labels: { code: 'Code', demo: 'Demo' },
    items: [
      {
        title: 'BioPhys Refinement Lab',
        description: 'A production-grade bioinformatics platform that transforms raw AI-predicted protein structures...',
        demoLink: 'https://biophys-refinement...',
        codeLink: 'https://github.com/...',
        type: 'Computational Biology',
        tags: ['FastAPI', 'React', 'OpenMM']
      }
    ]
  },

  // Scientific papers or preprints grid
  publications: {
    title: 'Research Preprints',
    description: 'A selection of my ongoing research in computational biology...',
    labels: { doiPrefix: 'DOI:', zenodoRecord: 'Zenodo Record' },
    items: [
      {
        title: 'Chemical Analysis of Water Pollution and Its Impact on Public Health',
        meta: '2025 — Environmental Health',
        description: 'Explores chemical contaminants in water resources...',
        doi: '10.5281/zenodo.17527523',
        tags: ['Environmental Health', 'Data Analysis']
      }
    ]
  },

  // Contact form language mappings
  contact: {
    title: 'Get In Touch',
    btnSend: 'Send Message',
    placeholders: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone (Optional)',
      subject: 'Subject (Optional)',
      message: 'Message'
    }
  }
};
```

### 2. Customizing Social Media Profiles (`components/Socials.tsx`)
Social media links are managed directly inside the navigation header/footer files. Open [components/Socials.tsx](file:///home/hassan/Documents/projects/hassan-ahmed-portfolio/components/Socials.tsx) and update the `socialData` list:

```typescript
export const socialData = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/your-profile",
    Icon: RiLinkedinLine,
  },
  {
    name: "Github",
    link: "https://github.com/your-username",
    Icon: RiGithubLine,
  },
  {
    name: "Orcid",
    link: "https://orcid.org/xxxx-xxxx-xxxx-xxxx",
    Icon: OrcidIcon, // SVG graphic
  },
];
```

### 3. Updating Your Profile Avatar
The profile image is loaded statically from the `public` directory.
1. Save your new portrait photo as `avatar.png` (dimensions matching roughly `737x678` pixels for optimal alignment).
2. Save it inside the `public/` directory, overwriting the default `public/avatar.png`.
3. If you want to use a different filename (e.g. `me.jpg`), copy it to the `public/` folder, then open [components/Avatar.tsx](file:///home/hassan/Documents/projects/hassan-ahmed-portfolio/components/Avatar.tsx) and update the `src` attribute of the Next.js `<Image>` component:
   ```typescript
   <Image
     src="/me.jpg"
     alt="avatar"
     width={width}
     height={height}
     className={className}
     priority
   />
   ```

### 4. Setting up the Contact Form (EmailJS Integration)
To activate the email sending service, you need to sign up for a free account at [EmailJS](https://www.emailjs.com/) and replace the API keys. 

1. Create a free EmailJS account.
2. In the EmailJS Dashboard, add a new **Email Service** (e.g., connect your Gmail account). Copy the **Service ID**.
3. Go to **Email Templates**, create a new template, and design it. Use mapping variables like `{{name}}`, `{{email}}`, `{{phone}}`, `{{title}}`, and `{{message}}`. Copy the **Template ID**.
4. Go to **Account API Keys** and copy your **Public Key**.
5. Open [components/sections/Contact.tsx](file:///home/hassan/Documents/projects/hassan-ahmed-portfolio/components/sections/Contact.tsx) and update the local variables inside the `handleSubmit` function (lines 33–35):
   ```typescript
   const SERVICE_ID = "YOUR_SERVICE_ID";
   const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
   const PUBLIC_KEY = "YOUR_PUBLIC_KEY";
   ```
6. (Optional) For redundancy, you can also update these parameters in [src/contactService.ts](file:///home/hassan/Documents/projects/hassan-ahmed-portfolio/src/contactService.ts).

---

## 🚀 Deployment: Vercel & GitHub Pipeline

The template is fully optimized for zero-config deployment to **Vercel** with integrated continuous delivery pipelines.

### Setup Continuous Delivery Workflow:
1. **Fork this repository** to your own GitHub account using the "Fork" button in the upper-right corner.
2. Create an account on [Vercel](https://vercel.com/) and link it to your GitHub profile.
3. Click the **"Add New"** button in Vercel, select **Project**, and import your forked repository.
4. Vercel automatically detects Next.js configurations. Keep all settings default and click **Deploy**.
5. Within 60 seconds, your site will be live on a production-ready, custom `vercel.app` URL.

> [!TIP]
> **Continuous Integration**: Every time you commit and push changes (such as editing `src/data.ts` or updating photos) to your GitHub repository, Vercel will trigger a webhook, build your project automatically, and update your live site seamlessly without manual deployment.

---

## 📜 License & Credits

- Codebase distributed under the **MIT License**.
- Inspired by modern portfolio design trends in developer communities.
- Dedicated to fostering accessible digital identity solutions.
