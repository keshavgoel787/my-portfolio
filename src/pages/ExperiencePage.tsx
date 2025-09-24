import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { Box, Typography, Collapse } from "@mui/material";
import { useState } from "react";


const experiences = [
  {
    title: "Software & Data Engineering Co-op",
    company: "Johnson & Johnson",
    date: "June 2025 – Present",
    description: [
      "Built Slack microservices on Kubernetes, reducing latency by 60%",
      "Deployed AWS EC2 imaging server with 90% faster load times",
      "Led GenAI RAG pipeline that saved 200+ hours of manual research",
    ],
    icon: <RocketLaunchIcon />,
    type: "work",
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
    icon: <WorkIcon />,
    type: "work",
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
    icon: <SchoolIcon />,
    type: "school",
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
    icon: <VolunteerActivismIcon />,
    type: "volunteer",
  },
];

const bgColor = "#121212";
const neon = "#66eaff";

export default function Experiences() {

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

const toggle = (idx: number) => {
  setExpandedIndex(expandedIndex === idx ? null : idx);
};


  return (
    <Box sx={{ bgcolor: bgColor, color: neon, py: 8, px: { xs: 2, md: 6 } }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          mb: 6,
          fontFamily: "Orbitron",
          fontWeight: 700,
        }}
      >
        🚀 Mission Logs
      </Typography>
      <VerticalTimeline>
        {experiences.map((exp, idx) => (
          <VerticalTimelineElement
            key={idx}
            date={exp.date}
            iconStyle={{
              background: neon,
              color: bgColor,
            }}
            icon={exp.icon}
            contentStyle={{
              background: "#1e1e1e",
              color: neon,
              borderTop: `3px solid ${neon}`,
              cursor: "pointer",
            }}
            contentArrowStyle={{ borderRight: `7px solid ${neon}` }}
            onTimelineElementClick={() => toggle(idx)}
          >
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {exp.title}
            </Typography>
            <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
              {exp.company}
            </Typography>

            <Collapse in={expandedIndex === idx}>
              <ul>
                {exp.description.map((line, i) => (
                  <li key={i}>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {line}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Collapse>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Box>
  );
}
