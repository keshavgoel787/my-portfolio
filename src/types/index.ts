// src/types/index.ts

export interface Experience {
  title: string;
  company: string;
  date: string;
  description: string[];
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  why?: string;
  tech: string[];
  link: string;
  video?: string;
  images?: string[];
  thumbnail?: string;
}

export interface NavLink {
  label: string;
  to: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export interface TyperConfig {
  headline?: string;
  words?: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
  cursorGlyph?: string;
}
