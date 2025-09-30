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
      "Shipped 5 Slack microservices (Excel data transcription, message exports) via Node.js apps on Kubernetes, handling 2k+ Msgs/day and cutting cross-team workflow latency by 60%",
      "Built 3 GenAI workflows (document summarization, internal tool discovery) using RAG pipelines, LangChain, and Snowflake, saving 200+ hours for 20 research teams",
      "Implemented AWS EC2-hosted DICOM imaging server, reducing scan transfer time by 90% and reducing data-sharing failures by 35% for 300 researchers",
    ],
    icon: createElement(RocketLaunchIcon),
  },
  {
    title: "Data Science Research Assistant",
    company: "Northeastern University",
    date: "Oct 2024 – Present",
    description: [
      "Modeled 20K+ EPA incident records with linear regression & time series forecasting on Meta Prophet, achieving 88% prediction precision and enabling analysts to prioritize inspections based on risk indicators",
      "Engineered Python & SQL ETL for 5TB data, improving data quality by 75% through schema filtering and consistency checks, accelerating insights by 35% via automated data cleaning",
    ],
    icon: createElement(SchoolIcon),
  },
  {
    title: "DS2000 Teaching Assistant",
    company: "Northeastern University",
    date: "Sep 2024 – May 2025",
    description: [
      "Mentored 100+ students through office hours and feedback sessions, improving assignment performance by 20%",
      "Guided students in mastering Python and Pandas, fostering problem-solving skills in data science",
    ],
    icon: createElement(SchoolIcon),
  },
  {
    title: "AI Product Intern",
    company: "VDart Inc.",
    date: "May – Aug 2024",
    description: [
      "Developed AI resume & interview platform using Ollama and HuggingFace, reducing recruiter screening time by 50%, enabling faster hiring decisions",
      "Architected database to process 5GB data with MongoDB and AWS S3, cutting profile retrieval time by 45%",
    ],
    icon: createElement(WorkIcon),
  },
];
