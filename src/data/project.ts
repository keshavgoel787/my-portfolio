// src/data/projects.ts
import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "NUPathfinder",
    description:
      "Deployed full-stack platform matching student skills to co-op requirements, supporting 50+ students and advisors across 3 departments. Achieved 85% match satisfaction rate through MySQL querying, relational DB design, iterative A/B testing, and REST APIs.",
    why: "Built this because I saw friends struggling to find the right co-ops, spending weeks manually searching job postings. Wanted to make job hunting less painful and more data-driven. Successfully helped students discover co-ops they wouldn't have found otherwise.",
    tech: ["Streamlit", "Flask", "MySQL", "Docker", "REST APIs"],
    link: "https://github.com/keshavgoel/NUPathfinder",
  },
  {
    title: "BreatheEasy",
    description:
      "Won 1st place out of 400+ teams at HackBeanpot 2024 for an eco-friendly route planning app using Google Maps + AQI data APIs. Scaled backend services to handle 10K+ API requests/day with Shelf and Docker, providing real-time air quality routing for urban commuters.",
    why: "Wanted to help people breathe better in cities after learning about air pollution's health impacts. Plus, winning a hackathon is always fun. Biggest challenge was optimizing route calculations to balance air quality with travel time—learned a ton about algorithmic trade-offs and real-time API integration under pressure.",
    tech: ["Flutter", "Dart", "Google Maps API", "Shelf", "Docker"],
    link: "https://github.com/keshavgoel/BreatheEasy",
  },
  {
    title: "Textmate",
    description:
      "Created a modular NLP pipeline analyzing 1,000+ sports articles for global sentiment trends across games. Automated sentiment extraction with web scraping, NLTK lemmatization, and Plotly visualizations, achieving 82% sentiment classification accuracy.",
    why: "I love sports and data—this was my excuse to combine both and predict game vibes based on media coverage. The challenge was dealing with inconsistent article formats and sports jargon that confused NLP models. Learned how to fine-tune preprocessing pipelines for domain-specific language.",
    tech: ["Python", "NLTK", "OpenAI", "Pandas", "Plotly"],
    link: "https://github.com/keshavgoel/TextMate",
  },
  {
    title: "Bububble",
    description:
      "Developed a bubble-based UI enabling users to visualize and dynamically update skills through 'popping'. Delivered personalized recommendations using OpenAI with Edge Functions and User Knowledge Graphs, creating an engaging gamified learning experience.",
    why: "Traditional skill trackers are boring spreadsheets. Made this to gamify learning and make progress feel satisfying—watching bubbles pop when you master a skill just hits different. Toughest part was designing the bubble physics to feel responsive without being overwhelming. Learned a lot about UI/UX psychology.",
    tech: ["Next.js", "TailwindCSS", "Supabase", "OpenAI"],
    link: "https://github.com/keshavgoel/Bububble",
  },
];
