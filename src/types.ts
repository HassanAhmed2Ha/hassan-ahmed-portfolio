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

export interface CompetencyDomain {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  iconType: 'brain' | 'server' | 'cloud' | 'flask';
  competencies: string[];
  tools: string[];
}

export interface Project {
  title: string;
  description: string;
  demoLink?: string;
  codeLink?: string;
  type: string;
  tags: string[];
  highlights?: string[];
  metrics?: { label: string; value: string }[];
  image?: string;
  videoUrl?: string;
  status?: string;
  accentColor?: string;
  peekCapsule?: string;
}

export interface Publication {
  title: string;
  meta: string;
  description: string;
  doi: string;
  tags: string[];
}

export interface OpenScienceData {
  sectionTitle: string;
  sectionSubtitle: string;
  itemNumber: string;
  title: string;
  subtitle: string;
  repoId: string;
  repoUrl: string;
  status: string;
  peekCapsule: string;
  description: string;
  metrics: { label: string; value: string }[];
  highlights: string[];
  tags: string[];
  bibtexCitation: string;
  orcid: string;
  orcidUrl: string;
}

export interface PublicationsData {
  sectionTitle: string;
  sectionSubtitle: string;
  quote: string;
  subtext: string;
  ctaText: string;
  ctaLink: string;
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
    description?: string[];
    skillGroups: SkillGroup[];
    competencyDomains: CompetencyDomain[];
  };
  techStackMarquee: TechLogo[];
  experience: {
    title: string;
    description?: string;
    items: ExperienceItem[];
  };
  certifications: {
    title: string;
    description?: string;
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
  openScience: OpenScienceData;
  publications: PublicationsData;
  contact: {
    title: string;
    description?: string;
    directEmail?: string;
    phone?: string;
    whatsapp?: string;
    whatsappUrl?: string;
    location?: string;
    availability?: string;
    responseTime?: string;
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