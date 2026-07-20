export type Language = 'en' | 'ar';

export interface TechLogo {
  name: string;
  logoUrl: string;
  inverse?: boolean;
}

export interface SkillGroup {
  category: string;
  items: string[];
}



export interface Project {
  title: string;
  description: string;
  demoLink?: string;
  codeLink?: string;
  type: string;
  tags: string[];
}

export interface Publication {
  title: string;
  meta: string;
  description: string;
  doi: string;
  tags: string[];
}



export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  link: string;
}

export interface Content {
  header: {
    logoPart1: string;
    logoPart2: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    titleLine1: string;
    titleLine2: string;
    role: string[];
    description: string;
  };
  about: {
    title: string;
    tagline: string;
    skillGroups: SkillGroup[];
  };
  techStackMarquee: TechLogo[];
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  certifications: {
    title: string;
    verifyLabel: string;
    items: CertificationItem[];
  };
  projects: {
    title: string;
    description: string;
    labels: {
      code: string;
      demo: string;
    };
    items: Project[];
  };
  publications: {
    title: string;
    description: string;
    labels: {
      doiPrefix: string;
      zenodoRecord: string;
    };
    items: Publication[];
  };
  contact: {
    title: string;
    placeholders: {
      name: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
    };
    btnSend: string;
  };
}