import { Github, Linkedin, Mail, Dribbble } from 'lucide-react';
import { Project, SkillCategory, SocialLink, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Programming', path: '/programming' },
  { label: 'UI/UX', path: '/ui-ux' },
  { label: '3D Design', path: 'https://jereshansinan.netlify.app/' },
  { label: 'AI', path: '/ai' },
  { label: 'Data Engineering', path: '/data' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AI Pathfinding Visualizer",
    description: "An interactive web application demonstrating various graph theory algorithms including A*, Dijkstra, and BFS in real-time.",
    tags: ["React", "TypeScript", "Algorithms", "Tailwind"],
    imageUrl: "https://picsum.photos/seed/algo/600/400",
    repoUrl: "https://github.com",
    demoUrl: "https://demo.com"
  },
  {
    id: 2,
    title: "EcoTrack Mobile App",
    description: "A cross-platform mobile application built with React Native helping users track their carbon footprint and suggest eco-friendly habits.",
    tags: ["React Native", "Firebase", "Node.js"],
    imageUrl: "https://picsum.photos/seed/eco/600/400",
    repoUrl: "https://github.com"
  },
  {
    id: 3,
    title: "Distributed Cloud Storage",
    description: "A decentralized file storage system using IPFS protocol simulation for secure and redundant data management.",
    tags: ["Go", "Docker", "Distributed Systems"],
    imageUrl: "https://picsum.photos/seed/cloud/600/400",
    repoUrl: "https://github.com",
    demoUrl: "https://demo.com"
  },
  {
    id: 4,
    title: "Neural Network from Scratch",
    description: "Implementation of a multi-layer perceptron in C++ without external ML libraries to recognize handwritten digits (MNIST).",
    tags: ["C++", "Machine Learning", "Math"],
    imageUrl: "https://picsum.photos/seed/neural/600/400",
    repoUrl: "https://github.com"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "C++", "SQL", "Go"]
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Three.js", "Redux", "HTML5/CSS3"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "GraphQL"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Kubernetes", "AWS", "Git", "CI/CD", "Linux"]
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com", icon: Github },
  { platform: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
  { platform: "Behance", url: "https://behance.net", icon: Dribbble },
];