import { Content } from './types';

export const contentEn: Content = {
  nav: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    greeting: 'Hi there,',
    namePrefix: "I'm",
    name: 'Hassan Ahmed',
    role: [ 'Computational Biology Student', 'AI & Data Science Enthusiast', 'Full-Stack Learner'],
    description: 'I\'m a first-year undergraduate combining biology with software engineering. I focus on building practical computational tools and AI models to better understand biological data and learn by doing.',
    btnAbout: 'About Me',
    btnProjects: 'View Projects',
  },
  about: {
    title: 'About Me',
    p1: 'I am a first-year undergraduate at the <strong>Faculty of Agriculture, Alexandria University</strong>. My academic journey is driven by a deep interest in both biological sciences and computation. Instead of just studying biological systems theoretically, I spend my time learning how to build software and AI models to analyze them practically.',
    p2: 'Over the past year, I\'ve worked on projects ranging from GPU-accelerated protein refinement pipelines to explainable tumor classifiers, teaching myself full-stack development and machine learning along the way. I am also continuously expanding my horizons through programs like the <strong>NASA Space Apps Challenge</strong> and my upcoming participation in the <strong>GCI 2026 program at Matsuo Lab, University of Tokyo</strong>. My ultimate goal is to keep building, learn in public, and contribute to open-source science.',
    btnLinkedin: 'View LinkedIn Profile',
  },
  experience: {
    title: 'Professional Experience',
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
  services: {
    title: 'Skills & Expertise',
    items: [
      {
        title: 'Technical Skills',
        description: 'Python (Pandas,Biopython), Bioinformatics & Genomic Data Analysis, Public Health Data Analysis, Data Visualization, GitHub, R (Basics).',
        iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
      },
      {
        title: 'Research',
        description: 'Research Methodology, Scientific Writing, Literature Review, Open Science Practices, Scenario Analysis.',
        iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.206 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.832 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.794 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.168 18 16.5 18s-3.332.477-4.5 1.253'
      },
      {
        title: 'Soft Skills',
        description: 'Youth Engagement Strategy, Digital Facilitation, Leadership, Critical Thinking, Public Speaking.',
        iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20v-2c0-.656-.126-1.283-.356-1.857M9 20H4v-2a3 3 0 015-2.236M9 20v-2c0-.656-.126-1.283-.356-1.857m-4.735-3.143A8 8 0 0112 12c.706 0 1.378.163 1.996.444M12 12c-3.197 0-6.236-.884-8-2.5m16 2.5a8 8 0 00-8-8 8 8 0 00-8 8'
      },
      {
        title: 'AI Literacy & Safety',
        description: 'Designing workshops for responsible AI use, digital wellbeing, and online safety awareness.',
        iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.008 12.008 0 002 15c0 4.848 3.447 8.521 7.24 9.077l.5.077c1.77.25 3.56-.27 4.96-1.57a12.002 12.002 0 007.24-9.077c.216-2.52.216-5.11 0-7.63z'
      },
      {
        title: 'Problem Solving',
        description: 'Rapid prototyping and applying research thinking to global challenges (NASA Space Apps).',
        iconPath: 'M9.75 17L9.25 10M17.25 17L17.75 10M13.5 6L11.5 10M11.5 10L9.75 10M11.5 10L17.75 10M12 21a9 9 0 110-18 9 9 0 010 18z'
      },
      {
        title: 'Languages',
        description: 'Arabic (Native), English (Upper-Intermediate). Capable of bilingual technical communication.',
        iconPath: 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9 4.418 4.418 0 005 5.917M19 18v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2h1m4.417 4.962l-.417.438'
      }
    ]
  },
  projects: {
    title: 'Featured Projects',
    viewAll: 'View All Projects',
    items: [
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
    title: 'Research Preprints (Zenodo)',
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
  },
  footer: {
    col1Title: "Hassan Ahmed",
    col1Text: 'Bioinformatics & Data Science Student. Building tools at the intersection of biology and code. Let\'s connect.',
    col2Title: 'Quick Links',
    col3Title: 'Contact Info',
    copyright: '© 2026 Hassan Ahmed Hassan Zaki. All rights reserved.',
    contactInfo: {
      phone: '+20 122 982 6538',
      email: 'hassanahmed07.e9@gmail.com',
      location: 'Alexandria, Egypt'
    }
  }
};

export const contentAr: Content = {
  nav: [
    { id: 'home', label: 'الرئيسية' },
    { id: 'about', label: 'نبذة' },
    { id: 'experience', label: 'الخبرات' },
    { id: 'certifications', label: 'الشهادات' },
    { id: 'projects', label: 'المشاريع' },
    { id: 'publications', label: 'الأبحاث' },
    { id: 'contact', label: 'تواصل' },
  ],
  hero: {
    greeting: 'مرحباً،',
    namePrefix: 'أنا',
    name: 'حسن أحمد',
    role: ['طالب معلوماتية حيوية', 'مهتم بعلوم البيانات والذكاء الاصطناعي', 'مطور ويب في مرحلة التعلم'],
    description: 'أنا طالب في السنة الأولى أجمع بين دراسة علم الأحياء وهندسة البرمجيات. أركز على بناء أدوات حاسوبية عملية ونماذج ذكاء اصطناعي لفهم البيانات البيولوجية بشكل أفضل والتعلم من خلال التطبيق الفعلي.',
    btnAbout: 'عني',
    btnProjects: 'عرض المشاريع',
  },
  about: {
    title: 'نبذة عني',
    p1: 'أنا طالب في السنة الأولى بـ <strong>كلية الزراعة، جامعة الإسكندرية</strong>. دراستي تنبع من اهتمام عميق بالعلوم البيولوجية والحوسبة معاً. بدلاً من الاكتفاء بالدراسة النظرية للأنظمة الحيوية، أقضي وقتي في تعلم كيفية بناء برمجيات ونماذج ذكاء اصطناعي لتحليلها بشكل تطبيقي.',
    p2: 'خلال العام الماضي، عملت على مشاريع تتراوح بين تطوير مسارات لتحسين البروتينات باستخدام الـ GPU ومصنفات أورام تعتمد على الذكاء الاصطناعي، متعلمًا تطوير الويب (Full-Stack) وتعلم الآلة خلال الرحلة. أحرص دائمًا على التطور من خلال المبادرات البحثية، حيث شاركت في هاكاثون <strong>NASA Space Apps</strong> وقُبلت مؤخراً في <strong>برنامج GCI 2026 بمختبر ماتسو بجامعة طوكيو</strong>. هدفي هو الاستمرار في التعلم، بناء أدوات مفيدة، والمساهمة في العلم المفتوح.',
    btnLinkedin: 'عرض ملف لينكد إن',
  },
  experience: {
    title: 'الخبرات المهنية',
    items: [
      {
        role: 'متدرب في أكاديمية إيراسموس+ للموجهين',
        company: 'مشروع التجديد الجديد (الاتحاد الأوروبي)',
        period: 'نوفمبر 2025 – الآن',
        location: 'عن بعد',
        description: [
          'تم اختياري لأكاديمية الموجهين (Erasmus+ ID: 101193651).',
          'المشاركة في برنامج بناء قدرات لمدة 6 أشهر لموجهي الشباب في أوروبا والشرق الأوسط.',
          'التدريب على التيسير الرقمي، والوساطة بين الثقافات، والتكنولوجيا المدنية.',
          'الاستعداد لدعم أفواج الشباب المستقبلية في تقديم الأكاديمية الافتراضية.'
        ]
      },
      {
        role: 'سفير طلاب جوجل جيمناي',
        company: 'بشر سوفت (WUZZUF / فرصنا)',
        period: 'أكتوبر 2025',
        location: 'هجين',
        description: [
          'تيسير الوصول إلى Gemini Pro لأكثر من 800 طالب في مصر.',
          'تقديم التوجيه حول الاستخدام المسؤول للذكاء الاصطناعي والرفاهية الرقمية.',
          'المساهمة في واحدة من أكبر مبادرات التوعية بالذكاء الاصطناعي التي يقودها الطلاب في المنطقة.'
        ]
      },
      {
        role: 'عضو فوج البحث العلمي',
        company: 'مؤسسة مصر الخير',
        period: 'أكتوبر 2025 – الآن',
        location: 'عن بعد',
        description: [
          'تم اختياري عبر عملية وطنية تنافسية لمسار أبحاث العلوم الاجتماعية.',
          'بناء ملف بحثي للنشر في المجلات المحكمة.',
          'تلقي الإرشاد في منهجية البحث والكتابة الأكاديمية.'
        ]
      },
      {
        role: 'عضو الفريق الأساسي (البيانات والأبحاث)',
        company: 'Neuroverse Youth Power',
        period: 'أكتوبر 2025 – الآن',
        location: 'عن بعد',
        description: [
          'دعم لجنة البيانات والأبحاث بالتحليل القائم على بايثون.',
          'تطوير تحليلات المتعلمين لتحسين معايير تعليم علم الأعصاب.',
          'التعاون مع فرق شبابية متعددة التخصصات في ابتكارات STEM.'
        ]
      },
      {
        role: 'سفير GreenAura',
        company: 'برنامج سفراء GreenAura',
        period: 'أغسطس 2025 – نوفمبر 2025',
        location: 'عن بعد',
        description: [
          'قيادة مشاريع العمل المناخي المجتمعي وتيسير ورش عمل لأكثر من 50 مشاركاً.',
          'تلقي التوجيه من خبراء من جامعتي ستانفورد وجونز هوبكنز.',
          'الحصول على شهادة سفير لتدخلات الحياة المستدامة.'
        ]
      },
      {
        role: 'قائد فريق شبابي',
        company: 'Save the Children International (Safe-Surf)',
        period: 'يوليو 2025 – الآن',
        location: 'هجين',
        description: [
          'قيادة مبادرات الأمان الرقمي المجتمعية التي تستهدف مدرسي المدارس.',
          'تصميم ورش عمل حول معالجة المحتوى الضار عبر الإنترنت وتأثيراته السلوكية.',
          'التعاون مع المعلمين للمواءمة مع أطر عمل اليونيسف للأمان الرقمي.'
        ]
      },
      {
        role: 'حلال المشكلات المجري',
        company: 'تحدي تطبيقات ناسا للفضاء',
        period: 'أكتوبر 2025 – نوفمبر 2025',
        location: 'عن بعد',
        description: [
          'إكمال مسار حل المشكلات العلمية العالمي في سباق 48 ساعة.',
          'تطبيق النمذجة الأولية السريعة وتحليل السيناريوهات باستخدام بايثون.',
          'تطوير رؤى تحليلية للتحديات المتعلقة بالفضاء.'
        ]
      },
      {
        role: 'باحث في برنامج Future M.Ds+ في STEM',
        company: 'MedSTEMPowered',
        period: 'يوليو 2025 – سبتمبر 2025',
        location: 'عن بعد',
        description: [
          'إكمال البرنامج التنافسي بامتياز.',
          'المشاركة في 6 ساعات من التظليل الطبي والتدريب على محو الأمية البحثية.',
          'تطوير مهارات التفكير السريري والتواصل العلمي.'
        ]
      }
    ]
  },
  certifications: {
    title: 'الشهادات',
   items: [
     {
title: 'البرنامج التدريبي الصيفي من NVIDIA DLI: الذكاء الاصطناعي التوليدي (مستوى مبتدئ)',
issuer: 'معهد تكنولوجيا المعلومات (ITI)',
date: 'فبراير 2026',
link: 'https://drive.google.com/file/d/1ZseW0jSZTZUz4HR2rmnOUrYA1Ewl3ErG/view?usp=sharing'
}, 
     {
        title: 'الإحصاء لعلوم الجينات',
        issuer: 'جامعة جونز هوبكنز (كورسيرا)',
        date: 'ديسمبر 2025',
        link: 'https://drive.google.com/file/d/1nU1GLfaYrmFy8yB3a1Ee431ZmBIHHCEu/view?usp=sharing'
      },
     {
       title: 'مقدمة في التقنيات الجينومية',
        issuer: 'جامعة جونز هوبكنز (كورسيرا)',
        date: 'ديسمبر 2025',
        link: 'https://drive.google.com/file/d/1GWnTGK-CNaxsEs10DyRgVXcSOjnTBO-F/view?usp=sharing'
      },
        {
        title: 'بايثون لعلم البيانات الجينومية',
        issuer: 'جامعة جونز هوبكنز (كورسيرا)',
        date: 'ديسمبر 2025',
        link: 'https://drive.google.com/file/d/1WViQR7Lot852iQK-tVYblpD1RIqbzlAq/view?usp=sharing'
      },
      {
        title: 'علم البيانات: أساسيات R',
        issuer: 'HarvardX & edX',
        date: '2025',
        link: 'https://courses.edx.org/certificates/ba0dee375d4547bdae9ea24452efc7ea'
      },
      {
        title: 'أساسيات بايثون لعلم البيانات',
        issuer: 'IBM & edX',
        date: 'أكتوبر 2025',
        link: 'https://courses.edx.org/certificates/58e8a3f01d2d4078a51c5be27854aa23'
      },
      {
        title: 'أساسيات تحليل البيانات',
        issuer: 'IBM & edX',
        date: 'أكتوبر 2025',
        link: 'https://courses.edx.org/certificates/cb0af907204e42b3bc92a766cdf6ccb2'
      },
      {
        title: 'سفير طلاب جوجل جيمناي',
        issuer: 'بشر سوفت',
        date: 'أكتوبر 2025',
        link: 'https://drive.google.com/file/d/15AtT1YRmh_g_NqkvYRViYee74HpRgu3x/view?usp=sharing'
      },
      {
        title: 'حلال المشكلات المجري',
        issuer: 'تطبيقات ناسا للفضاء',
        date: 'أكتوبر 2025',
        link: 'https://drive.google.com/file/d/1w_lL6_4CizcAddg9nRfslSpMJN6Iw6pC/view?usp=sharing'
      },
      {
        title: 'باحث Future M.Ds+ في STEM',
        issuer: 'MedSTEMPowered',
        date: 'يوليو 2025',
        link: 'https://drive.google.com/file/d/1qziNxAe6wPe5mJdrEqvT2KeX6gptvLqz/view?usp=sharing'
      },
      {
        title: 'سفير GreenAura',
        issuer: 'GreenAura',
        date: '2025',
        link: 'https://drive.google.com/file/d/1UjSHyqCEHqHHjPtW2UKogIz5QmKnqFGg/view?usp=sharing'
      }
    ]
  },
  services: {
    title: 'المهارات والخبرات',
    items: [
      {
        title: 'المهارات التقنية',
        description: 'بايثون (Pandas، Biopython)، تحليل البيانات الجينومية والمعلوماتية الحيوية، تحليل بيانات الصحة العامة، تصور البيانات، GitHub، أساسيات R.',
        iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
      },
      {
        title: 'البحث العلمي',
        description: 'منهجية البحث، الكتابة العلمية، مراجعة الأدبيات، ممارسات العلوم المفتوحة، تحليل السيناريوهات.',
        iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.206 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.832 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.794 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.168 18 16.5 18s-3.332.477-4.5 1.253'
      },
      {
        title: 'المهارات الشخصية',
        description: 'استراتيجية إشراك الشباب، التيسير الرقمي، القيادة، التفكير النقدي، التحدث أمام الجمهور.',
        iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20v-2c0-.656-.126-1.283-.356-1.857M9 20H4v-2a3 3 0 015-2.236M9 20v-2c0-.656-.126-1.283-.356-1.857m-4.735-3.143A8 8 0 0112 12c.706 0 1.378.163 1.996.444M12 12c-3.197 0-6.236-.884-8-2.5m16 2.5a8 8 0 00-8-8 8 8 0 00-8 8'
      },
      {
        title: 'محو الأمية بالذكاء الاصطناعي',
        description: 'تصميم ورش عمل للاستخدام المسؤول للذكاء الاصطناعي، والرفاهية الرقمية، والتوعية بالأمان عبر الإنترنت.',
        iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.008 12.008 0 002 15c0 4.848 3.447 8.521 7.24 9.077l.5.077c1.77.25 3.56-.27 4.96-1.57a12.002 12.002 0 007.24-9.077c.216-2.52.216-5.11 0-7.63z'
      },
      {
        title: 'حل المشكلات',
        description: 'النمذجة الأولية السريعة وتطبيق التفكير البحثي على التحديات العالمية (ناسا Space Apps).',
        iconPath: 'M9.75 17L9.25 10M17.25 17L17.75 10M13.5 6L11.5 10M11.5 10L9.75 10M11.5 10L17.75 10M12 21a9 9 0 110-18 9 9 0 010 18z'
      },
      {
        title: 'اللغات',
        description: 'العربية (اللغة الأم)، الإنجليزية (مستوى متقدم). القدرة على التواصل التقني ثنائي اللغة.',
        iconPath: 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9 4.418 4.418 0 005 5.917M19 18v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2h1m4.417 4.962l-.417.438'
      }
    ]
  },
  projects: {
    title: 'مشاريع مختارة',
    viewAll: 'عرض جميع المشاريع',
    items: [
      {
        title: 'BioPhys Refinement Lab',
        description: 'منصة معلوماتية حيوية متكاملة لتحويل هياكل البروتين الأولية المتوقعة بالذكاء الاصطناعي إلى أشكال مستقرة وجاهزة للالتحام الجزيئي باستخدام ديناميكيات الجزيئات المسرعة بوحدات معالجة الرسومات (GPU).',
        demoLink: 'https://biophys-refinement-4gj5w26hx-hassanahmed2has-projects.vercel.app',
        codeLink: 'https://github.com/HassanAhmed2Ha/biophys-refinement-lab',
        type: 'المعلوماتية الحيوية',
        tags: ['FastAPI', 'React', 'OpenMM', 'Modal (GPU)']
      },
      {
        title: 'NeuroScan AI: تصنيف الأورام القابل للتفسير',
        description: 'نظام ذكاء اصطناعي طبي متكامل لتصنيف أورام الثدي لحظياً. تم بناؤه باستخدام TensorFlow و FastAPI و React، مع دمج تقنية SHAP لتوفير تفسير دقيق لقرارات النموذج وحل مشكلة الصندوق الأسود.',
        demoLink: 'https://tumor-diagnosis-frontend.vercel.app',
        codeLink: 'https://github.com/HassanAhmed2Ha/NeuroScan-AI',
        type: 'Machine Learning',
        tags: ['Python', 'TensorFlow', 'FastAPI', 'React', 'SHAP']
      },
      {
        title: 'قالب بورتفوليو مفتوح المصدر',
        description: 'قالب معرض أعمال شخصي مجاني ومفتوح المصدر، تم بناؤه من الصفر لخدمة الطلاب والباحثين. يهدف لتعزيز التمكين الرقمي وتوفير هوية احترافية باستخدام React وTypeScript.',
        demoLink: 'https://hassan-ahmed-portfolio.vercel.app',
        codeLink: 'https://github.com/HassanAhmed2Ha/Hassan-Ahmed-Portfolio',
        type: 'Web Development',
        tags: ['React', 'TypeScript', 'Tailwind CSS']
      }
    ]
  },
  publications: {
    title: 'الأبحاث المنشورة (Preprints)',
    items: [
      {
        title: 'التحليل الكيميائي لتلوث المياه وتأثيره على الصحة العامة',
        meta: '2025 — الصحة البيئية',
        description: 'يستكشف الملوثات الكيميائية في موارد المياه ومخاطرها طويلة المدى على صحة المجتمع.',
        doi: '10.5281/zenodo.17527523',
        tags: ['Environmental Health', 'Data Analysis', 'Public Health']
      },
      {
        title: 'إطار متكامل لتقييم مخاطر تأثير الكويكبات',
        meta: '2025 — سلامة الفضاء',
        description: 'يقترح إطاراً هيكلياً لتقييم المخاطر يجمع بين البيانات ونمذجة السيناريوهات ودعم القرار.',
        doi: '10.5281/zenodo.17527414',
        tags: ['Risk Modeling', 'Data Visualization', 'Space Safety']
      },
      {
        title: 'الوعي المتكامل: تأثير الذكاء الاصطناعي على الاستقلالية المعرفية البشرية',
        meta: '2025 — أخلاقيات الذكاء الاصطناعي',
        description: 'يدرس كيفية تفاعل أنظمة الذكاء الاصطناعي المتقدمة مع الإدراك البشري، ويسلط الضوء على المخاطر والضمانات.',
        doi: '10.5281/zenodo.17527597',
        tags: ['AI Ethics', 'Cognitive Science', 'Human-AI Interaction']
      }
    ]
  },
  contact: {
    title: 'تواصل معي',
    btnSend: 'إرسال الرسالة',
    placeholders: {
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف (اختياري)',
      subject: 'الموضوع (اختياري)',
      message: 'الرسالة'
    }
  },
  footer: {
    col1Title: "حسن أحمد",
    col1Text: 'طالب مهتم بالمعلوماتية الحيوية وعلوم البيانات. أبني أدوات برمجية في التقاطع بين علم الأحياء والبرمجة. دعنا نتواصل.',
    col2Title: 'روابط سريعة',
    col3Title: 'معلومات الاتصال',
    copyright: '© 2026 حسن أحمد حسن زكي. جميع الحقوق محفوظة.',
    contactInfo: {
      phone: '+20 122 982 6538',
      email: 'hassanahmed07.e9@gmail.com',
      location: 'الإسكندرية، مصر'
    }
  }
};
