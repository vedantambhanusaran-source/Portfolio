import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  current?: boolean;
}

export interface MediaItem {
  type: 'image' | 'video' | 'link';
  url: string;
  label?: string;
  thumbnail?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string; // Main thumbnail fallback
  gallery?: string[]; // Optional gallery for specific projects
  mediaItems?: MediaItem[]; // Optional split view for media
  description: string;
  tools: string[];
  link?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
}

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}