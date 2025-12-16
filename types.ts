import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  path: string;
}