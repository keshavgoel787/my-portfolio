// src/data/projects.ts
import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "NUPathfinder",
    description:
      "Deployed full-stack platform matching student skills to co-op requirements, supporting 50 students/advisors. Allowed for accurate matches through MySQL querying, relational DB design, iterative A/B testing, and APIs.",
    why: "Built this because I saw friends struggling to find the right co-ops. Wanted to make job hunting less painful.",
    tech: ["Streamlit", "Flask", "MySQL", "Docker", "REST APIs"],
    link: "https://github.com/keshavgoel/NUPathfinder",
  },
  {
    title: "BreatheEasy",
    description:
      "Won 1st place out of 400+ teams for an eco-friendly route planning app using Google Maps + AQI data APIs. Scaled backend services to handle 10K+ API requests/day with Shelf and Docker.",
    why: "Wanted to help people breathe better in cities. Plus, winning a hackathon is always fun.",
    tech: ["Flutter", "Dart", "Google Maps API", "Shelf", "Docker"],
    link: "https://github.com/keshavgoel/BreatheEasy",
  },
  {
    title: "Textmate",
    description:
      "Created a modular NLP pipeline analyzing 1,000+ sports articles for global sentiment trends across games. Automated sentiment extraction with web scraping, NLTK lemmatization, and Plotly visualizations.",
    why: "I love sports and data. This was my excuse to combine both and predict game vibes.",
    tech: ["Python", "NLTK", "OpenAI", "Pandas", "Plotly"],
    link: "https://github.com/keshavgoel/TextMate",
  },
  {
    title: "Bububble",
    description:
      "Developed a bubble-based UI enabling users to visualize and dynamically update skills through 'popping'. Delivered personalized recommendations using OpenAI with Edge Functions and User Knowledge Graphs.",
    why: "Traditional skill trackers are boring. Made this to gamify learning and make progress feel satisfying.",
    tech: ["Next.js", "TailwindCSS", "Supabase", "OpenAI"],
    link: "https://github.com/keshavgoel/Bububble",
  },
];
