import { Content, TechLogo } from './types';

const createSkill = (title: string, iconId: string): TechLogo => ({
  name: title,
  logoUrl: `https://skillicons.dev/icons?i=${iconId}`,
  inverse: false,
});

export const contentEn: Content = {
  header: {
    logoPart1: 'hassan ',
    logoPart2: 'Zaki',
  },
  seo: {
    title: "Hassan Zaki | Bioinformatics & AI Portfolio",
    description: "Computational Biology Student and AI Enthusiast building practical tools for biological data analysis.",
    keywords: ["Bioinformatics", "AI", "Computational Biology", "Python", "Data Science", "Hassan Zaki"],
  },
  hero: {
    titleLine1: 'Decoding Life\'s Code',
    titleLine2: 'As a ',
    role: [' Data Scientist', 'Computational Biology Student', 'AI Builder'],
    description: 'Bridging the gap between biological complexity and artificial intelligence. I build data-driven architectures to translate life\'s code into meaningful insights, committed to advancing human health and sustainability through computational innovation.',
  },
  about: {
    title: 'About Me',
    tagline: 'At the intersection of biology and computation, decoding life’s mechanisms to drive innovation in agriculture and neuroscience.',
    skillGroups: [
      { category: 'Technical Skills', items: ['Python', 'Bioinformatics', 'Data Science', 'Machine Learning'] },
      { category: 'Research', items: ['Genomics', 'Transcriptomics', 'Academic Writing', 'Scientific Publishing'] },
      { category: 'Soft Skills', items: ['Leadership', 'Intercultural Mediation', 'Team Collaboration', 'Digital Facilitation'] },
      { category: 'AI Literacy & Safety', items: ['Prompt Engineering', 'Responsible AI', 'AI Ethics', 'Multi-Agent Systems'] },
      { category: 'Problem Solving', items: ['Rapid Prototyping', 'Scenario Analysis', 'AgriTech Innovation'] },
      { category: 'Languages', items: ['Arabic (Native)', 'English (Proficient)'] },
    ],
  },
  techStackMarquee: [
    createSkill("Python", "py"),
    createSkill("Next.js", "nextjs"),
    createSkill("Docker", "docker"),
    createSkill("JavaScript", "js"),
    createSkill("FastAPI", "fastapi"),
    createSkill("TensorFlow", "tensorflow"),
    createSkill("PyTorch", "pytorch"),
    createSkill("Git", "git"),
    createSkill("Linux", "linux"),
    createSkill("GitHub", "github"),
    createSkill("PostgreSQL", "postgresql"),
  ],
  experience: {
    title: 'Professional Experience & Programs ',
    items: [
      {
        role: 'Erasmus+ Mentors Academy Trainee',
        company: 'New Regeneration Project (EU)',
        period: 'Nov 2025 – Present',
        location: 'Remote',
        description: [
          'Selected for the New Regeneration Mentors Academy (Erasmus+ ID: 101193651).',
          'Participating in a 6-month capacity-building program for youth mentors in Europe and MENA.',
          'Training in digital facilitation, intercultural mediation, and civic tech.',
          'Preparing to support future youth cohorts in virtual academy delivery.'
        ]
      },
      {
        role: 'Google Gemini Student Ambassador',
        company: 'BasharSoft (WUZZUF / Forasna)',
        period: 'Oct 2025',
        location: 'Hybrid',
        description: [
          'Facilitated access to Gemini Pro for over 800 students in Egypt.',
          'Delivered guidance on responsible AI use and digital wellbeing.',
          'Contributed to one of the largest student-led AI awareness initiatives in the region.'
        ]
      },
      {
        role: 'Research Cohort Member',
        company: 'Misr El Kheir Foundation (MEK)',
        period: 'Oct 2025 – Present',
        location: 'Remote',
        description: [
          'Selected via competitive national process for the Social Science Research Track.',
          'Building a research portfolio for peer-reviewed publication.',
          'Receiving mentorship in research methodology and academic writing.'
        ]
      },
      {
        role: 'Core Team Member (Data & Research)',
        company: 'Neuroverse Youth Power',
        period: 'Oct 2025 – Present',
        location: 'Remote',
        description: [
          'Supporting Data & Research Committee with Python-based analysis.',
          'Developing learner analytics to enhance neuroscience education standards.',
          'Collaborating with multidisciplinary youth teams on STEM innovation.'
        ]
      },
      {
        role: 'GreenAura Ambassador',
        company: 'GreenAura Ambassadors Program',
        period: 'Aug 2025 – Nov 2025',
        location: 'Remote',
        description: [
          'Led community climate action projects and facilitated workshops for 50+ participants.',
          'Mentored by experts from Stanford and Johns Hopkins University.',
          'Certified as an Ambassador for sustainable living interventions.'
        ]
      },
      {
        role: 'Youth Team Leader',
        company: 'Save the Children International (Safe-Surf)',
        period: 'Jul 2025 – Present',
        location: 'Hybrid',
        description: [
          'Leading community digital safety initiatives targeting school teachers.',
          'Designed workshops on addressing harmful online content and behavioral impacts.',
          'Collaborating with educators to align with UNICEF digital safety frameworks.'
        ]
      },
      {
        role: 'Galactic Problem Solver',
        company: 'NASA International Space Apps Challenge',
        period: 'Oct 2025 – Nov 2025',
        location: 'Remote',
        description: [
          'Completed a global scientific problem-solving track in a 48-hour sprint.',
          'Applied rapid prototyping and scenario analysis using Python.',
          'Developed analytical insights for space-related challenges.'
        ]
      },
      {
        role: 'Future M.Ds+ in STEM Scholar',
        company: 'MedSTEMPowered',
        period: 'Jul 2025 – Sep 2025',
        location: 'Remote',
        description: [
          'Completed competitive program with Excellence.',
          'Engaged in 6 hours of medical shadowing and research literacy training.',
          'Developed skills in clinical reasoning and scientific communication.'
        ]
      }
    ]
  },
  certifications: {
    title: 'Certifications',
    verifyLabel: 'Verify',
    items: [
      {
        title: 'NVIDIA DLI : Generative AI (Beginner Level)',
        issuer: 'Information Technology Institute (ITI)',
        date: 'Feb 2026',
        link: 'https://drive.google.com/file/d/1ZseW0jSZTZUz4HR2rmnOUrYA1Ewl3ErG/view?usp=sharing'
      },
      {
        title: 'Statistics for Genomic Data Science',
        issuer: 'Johns Hopkins University (Coursera)',
        date: 'Dec 2025',
        link: 'https://drive.google.com/file/d/1nU1GLfaYrmFy8yB3a1Ee431ZmBIHHCEu/view?usp=sharing'
      },
      {
        title: 'Introduction to Genomic Technologies',
        issuer: 'Johns Hopkins University (Coursera)',
        date: 'Dec 2025',
        link: 'https://drive.google.com/file/d/1GWnTGK-CNaxsEs10DyRgVXcSOjnTBO-F/view?usp=sharing'
      },
      {
        title: 'Python for Genomic Data Science',
        issuer: 'Johns Hopkins University (Coursera)',
        date: 'Dec 2025',
        link: 'https://drive.google.com/file/d/1WViQR7Lot852iQK-tVYblpD1RIqbzlAq/view?usp=sharing'
      },
      {
        title: 'Data Science: R Basics',
        issuer: 'HarvardX & edX',
        date: '2025',
        link: 'https://courses.edx.org/certificates/ba0dee375d4547bdae9ea24452efc7ea'
      },
      {
        title: 'Python Basics for Data Science',
        issuer: 'IBM & edX',
        date: 'Oct 2025',
        link: 'https://courses.edx.org/certificates/58e8a3f01d2d4078a51c5be27854aa23'
      },
      {
        title: 'Data Analytics Basics',
        issuer: 'IBM & edX',
        date: 'Oct 2025',
        link: 'https://courses.edx.org/certificates/cb0af907204e42b3bc92a766cdf6ccb2'
      },
      {
        title: 'Google Gemini Student Ambassador',
        issuer: 'BasharSoft',
        date: 'Oct 2025',
        link: 'https://drive.google.com/file/d/15AtT1YRmh_g_NqkvYRViYee74HpRgu3x/view?usp=sharing'
      },
      {
        title: 'Galactic Problem Solver',
        issuer: 'NASA Space Apps',
        date: 'Oct 2025',
        link: 'https://drive.google.com/file/d/1w_lL6_4CizcAddg9nRfslSpMJN6Iw6pC/view?usp=sharing'
      },
      {
        title: 'Future M.Ds+ in STEM Scholar',
        issuer: 'MedSTEMPowered',
        date: 'Jul 2025',
        link: 'https://drive.google.com/file/d/1qziNxAe6wPe5mJdrEqvT2KeX6gptvLqz/view?usp=sharing'
      },
      {
        title: 'GreenAura Ambassadors',
        issuer: 'GreenAura',
        date: '2025',
        link: 'https://drive.google.com/file/d/1UjSHyqCEHqHHjPtW2UKogIz5QmKnqFGg/view?usp=sharing'
      }
    ]
  },

  projects: {
    title: 'Featured Projects',
    description: 'A curated collection of my research applications, tools, and open-source contributions in computational biology, machine learning, and full-stack development.',
    labels: {
      code: 'Code',
      demo: 'Demo',
    },
    items: [

      {
        title: 'Flood Intelligence AI',
        description: 'A geospatial intelligence platform detecting flood extent from Sentinel-1/2 satellite imagery using a U-Net deep learning model. Features a 3D tactical HUD for wide-area damage assessment and smart SAR fallback for cloud obscuration.',
        demoLink: 'https://flood-saas-project.pages.dev',
        codeLink: 'https://github.com/HassanAhmed2Hassan/Flood_SaaS_Project',
        type: 'Geospatial AI',
        tags: ['Python', 'TensorFlow', 'FastAPI', 'Three.js', 'Earth Engine']
      },


      {
        title: 'BioPhys Refinement Lab',
        description: 'A production-grade bioinformatics platform that transforms raw AI-predicted protein structures into docking-ready conformations using GPU-accelerated molecular dynamics.',
        demoLink: 'https://biophys-refinement-4gj5w26hx-hassanahmed2has-projects.vercel.app',
        codeLink: 'https://github.com/HassanAhmed2Ha/biophys-refinement-lab',
        type: 'Computational Biology',
        tags: ['FastAPI', 'React', 'OpenMM', 'Modal (GPU)']
      },
      {
        title: 'NeuroScan AI: Explainable Tumor Classification',
        description: 'A full-stack medical AI system for real-time breast tumor classification. Built with TensorFlow, FastAPI, and React, integrating SHAP to provide feature-level clinical interpretability and resolve the AI black-box problem.',
        demoLink: 'https://tumor-diagnosis-frontend.vercel.app',
        codeLink: 'https://github.com/HassanAhmed2Ha/NeuroScan-AI',
        type: 'Machine Learning',
        tags: ['Python', 'TensorFlow', 'FastAPI', 'React', 'SHAP']
      },
      {
        title: 'Open-Source Portfolio Template',
        description: 'A fully reusable, open-source personal portfolio template built from scratch for students and researchers. Designed with React & TypeScript to provide digital empowerment and a professional identity without cost.',
        demoLink: 'https://hassan-ahmed-portfolio.vercel.app',
        codeLink: 'https://github.com/HassanAhmed2Ha/Hassan-Ahmed-Portfolio',
        type: 'Web Development',
        tags: ['React', 'TypeScript', 'Tailwind CSS']
      }
    ]
  },
  publications: {
    title: 'Research Preprints',
    description: 'A selection of my ongoing research in computational biology and neuroscience. These preprints highlight my focus on applying machine learning and network science to understand complex biological systems.',
    labels: {
      doiPrefix: 'DOI:',
      zenodoRecord: 'Zenodo Record',
    },
    items: [
      {
        title: 'Chemical Analysis of Water Pollution and Its Impact on Public Health',
        meta: '2025 — Environmental Health',
        description: 'Explores chemical contaminants in water resources and their long-term risks on community health.',
        doi: '10.5281/zenodo.17527523',
        tags: ['Environmental Health', 'Data Analysis', 'Public Health']
      },
      {
        title: 'An Integrated Framework for Asteroid Impact Risk Assessment',
        meta: '2025 — Space Safety & Risk Modeling',
        description: 'Proposes a structured risk assessment framework combining data, scenario modeling, and decision-support.',
        doi: '10.5281/zenodo.17527414',
        tags: ['Risk Modeling', 'Data Visualization', 'Space Safety']
      },
      {
        title: 'Integrated Consciousness: AI Impact on Human Cognitive Autonomy',
        meta: '2025 — AI Ethics & Cognition',
        description: 'Examines how advanced AI systems interact with human cognition and autonomy, highlighting risks and safeguards.',
        doi: '10.5281/zenodo.17527597',
        tags: ['AI Ethics', 'Cognitive Science', 'Human-AI Interaction']
      }
    ]
  },
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

