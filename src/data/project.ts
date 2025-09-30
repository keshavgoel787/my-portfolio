// src/data/projects.ts
import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "BreatheEasy",
    description:
      "Mapped eco-friendly routes using Flutter, Docker, and Google Maps API. Won 1st at CSBase Climate Hackathon.",
    tech: ["Flutter", "Dart", "Google Maps API", "Docker"],
    link: "https://github.com/keshavgoel/BreatheEasy",
  },
  {
    title: "NUPathfinder",
    description:
      "Skill-matching platform using MySQL, Flask, and Streamlit to help students prepare for co-ops.",
    tech: ["Python", "MySQL", "Streamlit", "Flask"],
    link: "https://github.com/keshavgoel/NUPathfinder",
  },
  {
    title: "TextMate",
    description:
      "NLP-powered news summarizer that classifies sports articles and predicts game sentiment.",
    tech: ["Python", "OpenAI API", "NLTK", "Flask"],
    link: "https://github.com/keshavgoel/TextMate",
  },
];
