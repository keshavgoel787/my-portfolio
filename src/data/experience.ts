// src/data/experience.ts
import type { Experience } from "../types";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { createElement } from "react";

export const experiences: Experience[] = [
  {
    title: "Software & Data Engineering Co-op",
    company: "Johnson & Johnson",
    date: "June 2025 – Present",
    description: [
      "Built Slack microservices on Kubernetes, reducing latency by 60%",
      "Deployed AWS EC2 imaging server with 90% faster load times",
      "Led GenAI RAG pipeline that saved 200+ hours of manual research",
    ],
    icon: createElement(RocketLaunchIcon),
  },
  {
    title: "AI Product Intern",
    company: "VDart Group",
    date: "May – Aug 2024",
    description: [
      "Created resume-parsing LLM pipeline using SpaCy + Ollama",
      "Deployed FastAPI backend and MongoDB integration for scalable parsing",
      "Boosted candidate-score accuracy and recruiter efficiency by 35%",
    ],
    icon: createElement(WorkIcon),
  },
  {
    title: "Data Research Assistant",
    company: "Northeastern University",
    date: "Oct 2024 – Present",
    description: [
      "Analyzed 20,000+ records for EPA policy violations across states",
      "Created Tableau dashboards to visualize WPS enforcement trends",
      "Improved inspection targeting precision by 88%",
    ],
    icon: createElement(SchoolIcon),
  },
  {
    title: "Harpur Fellow",
    company: "Binghamton University",
    date: "Summer 2023",
    description: [
      "Led cervical cancer education workshops across rural Tamil Nadu",
      "Partnered with local clinics to screen 100+ women",
      "Managed $4,000 grant to execute multilingual educational campaign",
    ],
    icon: createElement(VolunteerActivismIcon),
  },
];
