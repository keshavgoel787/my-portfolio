// src/data/experience.ts
import type { Experience } from "../types";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import { createElement } from "react";

export const experiences: Experience[] = [
  {
    title: "Software Engineering Co-op",
    company: "Johnson & Johnson",
    date: "June 2025 – Present",
    description: [
      "Building Slack bots that actually make people's lives easier—5 microservices running on Kubernetes that handle everything from transcribing Excel data to exporting message history. They're processing 2,000+ messages daily and cutting workflow time by 60% across teams",
      "Got to play with some cool GenAI stuff—built 3 AI workflows using RAG pipelines and LangChain for document summarization and internal tool discovery. Saved 20 research teams about 200+ hours of manual work (and probably a lot of headaches)",
      "Set up a DICOM imaging server on AWS EC2 that made medical scan transfers 90% faster for 300+ researchers. No more waiting around or failed transfers—just smooth, reliable data sharing",
    ],
    icon: createElement(RocketLaunchIcon),
  },
  {
    title: "Data Science Research Assistant",
    company: "Northeastern University",
    date: "Oct 2024 – Present",
    description: [
      "Working with 20,000+ EPA incident records to predict environmental violations using time series forecasting with Meta Prophet. Hit 88% prediction accuracy, which helps analysts figure out where to focus their inspections before things go wrong",
      "Spent a lot of time cleaning up 5TB of messy environmental data with Python and SQL—improved data quality by 75% through better filtering and consistency checks. Now the team gets insights 35% faster without manually fixing data issues",
    ],
    icon: createElement(SchoolIcon),
  },
  {
    title: "DS2000 Teaching Assistant",
    company: "Northeastern University",
    date: "Sep 2024 – May 2025",
    description: [
      "Helping 100+ students learn Python and data science through office hours and feedback sessions. Nothing beats that 'aha!' moment when debugging finally clicks—saw assignment performance improve by 20% over the semester",
      "Guiding students through Pandas, data wrangling, and problem-solving. It's basically just explaining why their code broke 50 times before it worked, and celebrating when it finally does",
    ],
    icon: createElement(SchoolIcon),
  },
  {
    title: "AI Product Intern",
    company: "VDart Inc.",
    date: "May – Aug 2024",
    description: [
      "Built an AI-powered resume screening and interview platform using Ollama and HuggingFace models. Cut recruiter screening time in half—turns out AI is pretty good at finding keywords and matching skills faster than humans scrolling through PDFs",
      "Set up a MongoDB + AWS S3 database architecture to handle 5GB of candidate data. Made profile searches 45% faster, so recruiters could actually find the candidates they needed without waiting forever",
    ],
    icon: createElement(WorkIcon),
  },
];
