export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Data Science' | 'AI & CV' | 'Software & Graphics' | 'DBMS';
  description: string;
  tech: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  badge?: string;
  iconName: string;
  details: {
    problem: string;
    approach: string;
    tools: string[];
    keyFeatures: string[];
    whatILearned: string;
    isConceptOrPrototype?: boolean;
    statusNote?: string;
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  color: string;
  skills: {
    name: string;
    levelTag?: string;
    description?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'Internship / Learning' | 'Leadership / Club' | 'Hackathon / Project Team';
  highlights: string[];
  tags: string[];
  badge?: string;
  certificateId?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  category: string;
  description: string;
  date?: string;
  icon: string;
  badge?: string;
  highlights?: string[];
  certificateId?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  expectedGraduation: string;
  currentSemester: string;
  highlights: string[];
  coreSubjects: string[];
}

export interface LearningItem {
  topic: string;
  area: string;
  progress: string;
  currentFocus: string;
  icon: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issuerBadge?: string;
  year: string;
  description: string;
  focusAreas: string[];
  certificateUrl?: string;
  isExternalLink?: boolean;
  type: 'Course Certification' | 'Professional Skill' | 'Internship' | 'Hackathon Participation';
  note?: string;
}
