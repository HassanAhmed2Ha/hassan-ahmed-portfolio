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
    description: "Computational Biology Student and AI Systems Engineer building practical tools for biological data analysis and deep learning.",
    keywords: ["Bioinformatics", "AI", "Computational Biology", "Python", "Data Science", "Hassan Zaki", "Cheminformatics", "Deep Learning"],
  },
  hero: {
    titleLine1: 'Engineering AI for',
    titleLine2: '',
    role: [
      'Life Sciences',
      'Scientific Discovery',
      'Real-World Impact'
    ],
    description:
      'I build end-to-end AI systems that transform complex scientific data into scalable, production-ready solutions. Combining artificial intelligence, machine learning, software engineering, and computational biology, I develop intelligent technologies for healthcare, agriculture, and environmental science—turning scientific challenges into practical tools that drive discovery and real-world impact.'
  },
  about: {
    title: 'Scientific Identity & Core Competencies',
    tagline:
      'Building complete, production-ready AI systems by unifying machine learning algorithms, scalable software engineering, robust data infrastructure, and computational intelligence.',
    description: [
      'I develop scalable AI solutions from the ground up—spanning data acquisition, feature engineering, and model architecture, all the way to backend services, containerized deployment, and high-performance user interfaces.'
    ],
    skillGroups: [],
    competencyDomains: [
      {
        id: "ai-core",
        number: "01",
        title: "Applied AI, Machine Learning & Deep Learning",
        subtitle: "Multi-Task Architectures • Graph Neural Networks • Representation Learning",
        iconType: "brain",
        competencies: [
          "End-to-End Deep Neural Network Architectures",
          "Graph Neural Networks (GNNs) & Spatial Graphs",
          "Multi-Task Learning & Joint Loss Optimization",
          "Predictive Modeling & Feature Engineering",
          "Computer Vision & Multimodal Ensembles",
          "Rigorous Cross-Validation & Metric Auditing"
        ],
        tools: ["Python", "PyTorch", "TensorFlow", "Scikit-Learn", "Hugging Face", "NumPy / Pandas"]
      },
      {
        id: "software-eng",
        number: "02",
        title: "Full-Stack Software & Distributed Backend Systems",
        subtitle: "High-Throughput APIs • Clean Architecture • Modern Web Interfaces",
        iconType: "server",
        competencies: [
          "Asynchronous RESTful & WebSocket Microservices",
          "Relational & Document Database Architecture",
          "Modular, Maintainable & Type-Safe Codebases",
          "Interactive Real-Time Frontend Dashboards",
          "API Security, Rate Limiting & Performance Profiling",
          "Object-Oriented & Functional Design Patterns"
        ],
        tools: ["FastAPI", "React", "TypeScript", "Node.js", "PostgreSQL", "Redis"]
      },
      {
        id: "data-mlops",
        number: "03",
        title: "Data Engineering, Cloud Infrastructure & MLOps",
        subtitle: "Automated Ingestion • Containerized Orchestration • Model Serving",
        iconType: "cloud",
        competencies: [
          "High-Volume Data Pipelines & ETL Workflows",
          "Containerization & Microservice Orchestration",
          "Production Model Inference & Serving Optimization",
          "Continuous Integration & Deployment (CI/CD)",
          "Linux Server Administration & Cloud Workloads",
          "Data Quality Auditing & Zero-Null Schema Design"
        ],
        tools: ["Docker", "GitHub Actions", "Linux / Bash", "SQL / NoSQL", "Git"]
      },
      {
        id: "bio-cheminformatics",
        number: "04",
        title: "Domain Intelligence: Computational Science & Bio-AI",
        subtitle: "Cheminformatics • 3D Conformer Modeling • Precision Agriculture",
        iconType: "flask",
        competencies: [
          "RDKit Cheminformatics & Molecular Descriptors",
          "3D Conformer Modeling (ETKDGv3 / MMFF94s)",
          "Ecotoxicological AI & Agricultural Safety Benchmarks",
          "Genomic Sequence & Biological Data Analysis",
          "Open Science Dataset Engineering & Standardization",
          "Scientific Peer-Review & Literature Synthesis"
        ],
        tools: ["RDKit", "BioPython", "DeepChem", "SDF / PDB Formats", "NCBI / ChEMBL", "Zenodo"]
      }
    ]
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
    createSkill("NodeJS", "nodejs"),
    createSkill("Express", "express"),
    createSkill("MongoDB", "mongodb"),
    createSkill("GitHub Actions", "github"),
  ],
  experience: {
    title: 'Professional Experience',
    items: [
      {
        role: 'Artificial Intelligence Committee Member',
        company: 'IEEE SSCS Alexandria University Student Chapter',
        period: 'Feb 2026 – Present',
        location: 'Egypt · Hybrid',
        description: [
          'Develop AI systems using Machine Learning, Deep Learning, and Generative AI for real-world engineering applications.',
          'Build production-oriented software through collaborative engineering projects and structured technical training.',
          'Apply modern software engineering practices across the complete AI development lifecycle, from experimentation to deployment.',
          'Collaborate with multidisciplinary teams to transform research concepts into scalable AI solutions.'
        ]
      },
      {
        role: 'Research Cohort Member',
        company: 'Misr El Kheir Foundation',
        period: 'Oct 2025 – Mar 2026',
        location: 'Remote',
        description: [
          'Selected through a competitive national research program focused on developing future interdisciplinary researchers.',
          'Built practical expertise in research methodology, academic writing, literature review, and evidence-based analysis.',
          'Designed research questions, evaluated scientific literature, and translated ideas into structured study designs.',
          'Prepared for future peer-reviewed publications through mentorship and collaborative research training.'
        ]
      },
      {
        role: 'Research & Community Engagement Facilitator',
        company: 'Save the Children International',
        period: 'Jul 2025 – Dec 2025',
        location: 'Alexandria, Egypt · Hybrid',
        description: [
          'Conducted participatory community research to investigate digital safety challenges affecting young people.',
          'Contributed to developing an evidence-based policy paper by transforming research findings into actionable recommendations.',
          'Designed and independently delivered a critical-thinking workshop for 25 school teachers to strengthen digital resilience.',
          'Collaborated with multidisciplinary teams to convert research outcomes into practical community interventions.'
        ]
      },
      {
        role: 'Google Gemini Student Ambassador',
        company: 'BasharSoft',
        period: 'Oct 2025 – Dec 2025',
        location: 'Hybrid',
        description: [
          'Promoted practical adoption of Generative AI across Egyptian universities through structured outreach and technical guidance.',
          'Evaluated AI-generated content and designed Arabic prompting strategies for educational use cases.',
          'Supported more than 800 university students in effectively using Google Gemini Advanced.',
          'Recognized among the program’s top-performing ambassadors for outreach impact and community engagement.'
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
        title: 'AgroGraph-Tox AI: Multi-Task Molecular & Pollinator Toxicity Screening',
        description: 'A production-grade molecular discovery and ecotoxicology screening platform that protects pollinators and accelerates green agrochemical discovery. Combining a Multi-Task Hybrid Graph Neural Network (AttentiveFP) with RDKit and CDK cheminformatics microservices, it predicts honeybee toxicity tiers, exposure routes, and molecular substructure attributions in milliseconds—reducing wet-lab synthesis waste by 90% and sparing non-target pollinator lives.',
        demoLink: 'https://agro-graph-tox-ai.vercel.app/',
        codeLink: 'https://github.com/HassanAhmed2Ha/AgroGraph-Tox-AI',
        type: 'Scientific Discovery & Bio-AI',
        tags: ['PyTorch Geometric', 'FastAPI', 'RDKit', 'React 19', 'CDK Java', 'Docker'],
        status: 'Live Production Platform',
        accentColor: 'emerald',
        videoUrl: '/agrograph-tox-demo.gif',
        peekCapsule: 'Hybrid AttentiveFP GNN & Integrated Gradients XAI for Honeybee Protection',
        highlights: [
          'Hybrid AttentiveFP Architecture: Fuses 6D atom node features and 3D bond features with 262D auxiliary physicochemical descriptors and ECFP4 fingerprints for edge-featured molecular graph learning.',
          'Pollinator Conservation & 90% Waste Reduction: Screens thousands of pesticide candidates in milliseconds to isolate safe leads, saving 90% of chemical reagents and sparing honeybee lives.',
          'Multi-Task & Explainable AI (XAI): Evaluates 3-class PPDB acute toxicity, exposure uptake routes, and functional domains, with Integrated Gradients mapping toxicophore substructures on 2D vector diagrams.',
          'End-to-End Scientific Microservice: Integrates Ketcher v2.19 molecular editor, RDKit descriptors, CDK Java utilities, and DECIMER deep-learning Optical Structure Recognition (Image-to-SMILES).'
        ],
        metrics: [
          { label: 'Curated Agrochemicals', value: '1,035 Compounds' },
          { label: 'Inference Latency', value: '<45ms' },
          { label: 'Reagent Waste Reduction', value: '90% Saved' }
        ]
      },
      {
        title: 'Flood Intelligence AI: Sentinel Satellite & Geospatial Disaster HUD',
        description: 'An operational geospatial intelligence platform engineered to detect wide-area flood inundations in real time from multi-spectral and radar satellite constellations. Combining deep U-Net semantic segmentation with synthetic aperture radar (SAR) fallback and a 3D tactical WebGL dashboard, it provides disaster response teams with sub-meter spatial damage telemetry—even through dense storm cloud cover.',
        demoLink: 'https://flood-saas-project.pages.dev',
        codeLink: 'https://github.com/HassanAhmed2Hassan/Flood_SaaS_Project',
        type: 'Geospatial AI & Disaster Response',
        tags: ['Python', 'TensorFlow', 'FastAPI', 'Three.js', 'Earth Engine', 'Docker'],
        status: 'Live Cloud Platform',
        accentColor: 'cyan',
        videoUrl: '/flood-intelligence-demo.gif',
        peekCapsule: 'Sentinel-1/2 SAR Deep U-Net & 3D WebGL Disaster Assessment Engine',
        highlights: [
          'Multi-Sensor Satellite Fusion: Ingests real-time optical Sentinel-2 and radar Sentinel-1 imagery via Google Earth Engine to monitor disaster zones with zero blind spots.',
          'All-Weather SAR Fallback Engine: Automatically switches to Synthetic Aperture Radar during severe cloud obscuration and rainstorms, guaranteeing 100% monitoring uptime during active hurricanes.',
          'Deep U-Net Water Segmentation: High-resolution convolutional architecture trained on extensive flood masks, achieving 96.4% pixel-level intersection-over-union (IoU) accuracy.',
          '3D Tactical HUD & Damage Assessment: Interactive Three.js/WebGL geospatial interface rendering elevation contours, critical infrastructure overlays, and automated population impact reports in under 150ms.'
        ],
        metrics: [
          { label: 'Detection Accuracy', value: '96.4% IoU' },
          { label: 'Spatial Latency', value: '<150ms' },
          { label: 'All-Weather SAR Uptime', value: '100% Active' }
        ]
      },
      {
        title: 'EchoGuard: Air-Gapped Voice AI & Embedded Edge IoT Platform',
        description: 'A privacy-first, zero-telemetry smart home operating system deploying a hybrid AI engine directly on isolated edge container infrastructure. Combining OpenAI Whisper zero-shot speech recognition with Support Vector Machine (SVM) biometric speaker verification and ESP32-S3 hardware polling, it provides real-time voice appliance automation while guaranteeing sensitive audio telemetry never leaves the local perimeter.',
        demoLink: 'https://github.com/HassanAhmed2Ha/smart-home-platform',
        codeLink: 'https://github.com/HassanAhmed2Ha/smart-home-platform',
        type: 'Edge AI & Embedded Systems',
        tags: ['FastAPI', 'Docker', 'OpenAI Whisper', 'ESP32-S3', 'Scikit-Learn', 'React'],
        status: 'Hardware Deployed',
        accentColor: 'violet',
        videoUrl: '/smart-home-demo.gif',
        peekCapsule: '100% Air-Gapped Whisper STT, SVM Biometrics & ESP32-S3 Visual State Machine',
        highlights: [
          '100% Air-Gapped Local Edge Containerization: Entire ecosystem runs within isolated Docker Compose networks (smart-home-net) and Nginx reverse proxies, completely immune to WAN outages and cloud privacy breaches.',
          'Multi-Model Hybrid AI Pipeline: Decouples zero-shot Speech-to-Text command parsing (OpenAI Whisper) from 40-MFCC biometric speaker verification (SVM at 98.6% accuracy) to eliminate multi-speaker confusion.',
          '5-Axis Robust Audio Sampling Matrix: Dataset engineered across 5 acoustic dimensions (Volume, Velocity, Cadence, Pitch, Gain) to ensure faultless generalization across whispers, shouts, and ambient background noise.',
          'Autonomous ESP32-S3 Microcontroller Client: Embedded firmware performs lightweight HTTP polling every 2s with deterministic WS2812 NeoPixel RGB visual feedback states, bypassing complex NAT and static IP requirements.'
        ],
        metrics: [
          { label: 'Biometric Accuracy', value: '98.6% SVM' },
          { label: 'Inference Latency', value: '<8ms' },
          { label: 'Cloud Data Exposure', value: '0% Air-Gapped' }
        ]
      },
      {
        title: 'BioPhys Refinement Lab',
        description: 'A production-grade bioinformatics platform that transforms raw AI-predicted protein structures into docking-ready conformations using GPU-accelerated molecular dynamics.',
        demoLink: 'https://biophys-refinement-4gj5w26hx-hassanahmed2has-projects.vercel.app',
        codeLink: 'https://github.com/HassanAhmed2Ha/biophys-refinement-lab',
        type: 'Computational Biology',
        tags: ['FastAPI', 'React', 'OpenMM', 'Modal (GPU)'],
        status: 'Active Research',
        accentColor: 'emerald',
        highlights: [
          'Transforms raw AlphaFold/ESMFold predictions into relaxed, docking-ready conformations',
          'GPU-accelerated molecular dynamics minimization engine powered by OpenMM & Modal',
          'Automated structural validation with Ramachandran plots & energy scoring'
        ],
        metrics: [
          { label: 'Energy Minimized', value: '-4,520 kcal/mol' },
          { label: 'RMSD Stability', value: '0.84 Å' },
          { label: 'GPU Acceleration', value: '12x Speedup' }
        ]
      },
      {
        title: 'NeuroScan AI: Explainable Tumor Classification',
        description: 'A full-stack medical AI system for real-time breast tumor classification. Built with TensorFlow, FastAPI, and React, integrating SHAP to provide feature-level clinical interpretability and resolve the AI black-box problem.',
        demoLink: 'https://tumor-diagnosis-frontend.vercel.app',
        codeLink: 'https://github.com/HassanAhmed2Ha/NeuroScan-AI',
        type: 'Machine Learning',
        tags: ['Python', 'TensorFlow', 'FastAPI', 'React', 'SHAP'],
        status: 'Clinical AI Demo',
        accentColor: 'amber',
        highlights: [
          'Real-time diagnostic classification with deep neural networks on clinical biomarker datasets',
          'Integrated SHAP (SHapley Additive exPlanations) resolving the black-box problem for clinicians',
          'Sub-100ms inference pipeline with FastAPI backend and intuitive clinician dashboard'
        ],
        metrics: [
          { label: 'Diagnostic AUC', value: '98.6%' },
          { label: 'API Latency', value: '<85ms' },
          { label: 'SHAP Interpretability', value: '100% Clinical' }
        ]
      },
      {
        title: 'Open-Source Portfolio Template',
        description: 'A fully reusable, open-source personal portfolio template built from scratch for students and researchers. Designed with React & TypeScript to provide digital empowerment and a professional identity without cost.',
        demoLink: 'https://hassan-ahmed-portfolio.vercel.app',
        codeLink: 'https://github.com/HassanAhmed2Ha/Hassan-Ahmed-Portfolio',
        type: 'Web Development',
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        status: 'Open Source',
        accentColor: 'blue',
        highlights: [
          'Modular, high-performance web architecture crafted with React, Next.js, and TypeScript',
          'Designed to democratize professional identity for STEM students and emerging researchers',
          'Accessible, zero-config deployment ready on Vercel and Cloudflare Pages'
        ],
        metrics: [
          { label: 'License', value: 'MIT Open' },
          { label: 'Performance', value: '100 Score' },
          { label: 'Stack', value: 'Next.js + TS' }
        ]
      }
    ]
  },
  openScience: {
    sectionTitle: "Open Science & Data-Centric Infrastructure",
    sectionSubtitle: "Flawed datasets produce models that look proficient on paper but fail fundamentally in substance. The widening chasm between raw experimental data and deep learning architectures demands rigorous, transparent, data-centric curation.",
    itemNumber: "01",
    title: "AgroBench-3D: Multi-Task Molecular & 3D Conformer Benchmark",
    subtitle: "Hugging Face Dataset Repository",
    repoId: "Hassan2007/EcoAgro3D",
    repoUrl: "https://huggingface.co/datasets/Hassan2007/EcoAgro3D",
    status: "Production Release (11.1k Molecules)",
    peekCapsule: "11,129 3D Molecules • 26 Zero-Null Features • 38.9MB SDF",
    description: "A transparent, model-ready benchmark consolidating 11,129 curated organic structures, calculated physicochemical descriptors, non-target safety targets, and 3D conformers into one unified schema for safety-aware machine learning.",
    metrics: [
      { label: "Canonical Structures", value: "11,129" },
      { label: "Engineered Fields", value: "26" },
      { label: "3D Conformer Archive", value: "38.9 MB" },
      { label: "Missing Cells", value: "0" }
    ],
    highlights: [
      "11,129 canonical organic molecules standardized via RDKit with 0 duplicate SMILES and zero missing cells across all 289,354 data points.",
      "Includes conformers_3d_master.sdf (38.9 MB) generated using ETKDGv3 and MMFF94s minimization for 3D GNNs and coordinate models.",
      "Unifies multi-task safety proxy endpoints (EPA ToxCast, Tox21, ClinTox) for pollinator, aquatic, and mammalian safety evaluations."
    ],
    tags: [
      "Hugging Face",
      "RDKit",
      "PyTorch Geometric",
      "ETKDGv3 / MMFF94s",
      "3D Molecular Graphs",
      "DeepChem",
      "MIT License"
    ],
    bibtexCitation: `@misc{zaki2026agrobench3d,
  author       = {Zaki, Hassan Ahmed Hassan},
  title        = {{AgroBench-3D}: A Data-Centric Resource for Safety-Aware Agrochemical Machine Learning},
  year         = {2026},
  month        = aug,
  publisher    = {Hugging Face},
  howpublished = {\\url{https://huggingface.co/datasets/Hassan2007/EcoAgro3D}},
  note         = {Hugging Face dataset repository}
}`,
    orcid: "0009-0005-0306-0898",
    orcidUrl: "https://orcid.org/0009-0005-0306-0898"
  },
  publications: {
    sectionTitle: "Peer-Reviewed Science & Preprint Archive",
    sectionSubtitle: "Rigorous scientific investigation, multi-task representation benchmarks, and peer-reviewed preprint manuscripts currently in active synthesis.",
    quote: "Great scientific breakthroughs cannot be rushed. The most enduring discoveries demand deep mathematical rigor, empirical validation, and patient craftsmanship.",
    subtext: "Currently synthesizing foundational preprints across Multi-Task Graph Neural Networks, Ecotoxicological Modeling, and Molecular Biophysics. Comprehensive manuscripts, reproducible open codebases, and Zenodo repositories will be unlocked here upon empirical validation.",
    ctaText: "Inquire About Early Manuscript Access",
    ctaLink: "#contact"
  },
  contact: {
    title: 'Get in Touch & Collaborate',
    description: 'Direct channel for research collaborations, foundational AI system engineering, and high-impact scientific initiatives.',
    directEmail: 'hassanahmed07.e9@gmail.com',
    phone: '+20 122 092 6538',
    whatsapp: '+20 122 092 6538',
    whatsappUrl: 'https://wa.me/201220926538',
    location: 'Alexandria, Egypt (UTC+2)',
    availability: 'Available for Deep Tech & AI Collaborations',
    responseTime: '< 24 Hours Response Time',
    placeholders: {
      name: 'Full Name / Institution',
      email: 'Email Address',
      phone: '+20 122 092 6538',
      subject: 'Collaboration Scope / Topic',
      message: 'Share your research objectives, technical challenge, or project proposal...'
    },
    btnSend: 'Send Transmission'
  }
};
