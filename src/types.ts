export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription?: string;
  category: 'Full Stack' | 'Backend' | 'Web App';
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
  metrics?: string;
  challenges?: string[];
  keyFeatures?: string[];
}

export interface SkillCategoryGroup {
  name: string;
  badge: string;
  skills: {
    name: string;
    level: number;
    description: string;
    tag?: string;
  }[];
}

export interface EducationItem {
  id: string;
  number: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  cgpaOrGpa?: string;
  coursework?: string[];
  description?: string;
}

export interface ExperienceItem {
  id: string;
  number: string;
  role: string;
  company: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  bulletPoints: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  verifyUrl?: string;
  certificateImage: string;
  badgeText: string;
}

export interface HobbyItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  tag: string;
  accent: string;
}
