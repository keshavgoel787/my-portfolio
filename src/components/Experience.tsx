import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Box, Typography, Collapse } from "@mui/material";
import { useState } from "react";
import { experiences } from "../data/experience";
import { colors } from "../config/theme";

export default function Experiences() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <Box sx={{ color: colors.neon, py: 8, px: { xs: 2, md: 6 }, minHeight: "100vh" }}>
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
              background: colors.neon,
              color: colors.background.dark,
            }}
            icon={exp.icon}
            contentStyle={{
              background: colors.background.medium,
              color: colors.neon,
              borderTop: `3px solid ${colors.neon}`,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            contentArrowStyle={{ borderRight: `7px solid ${colors.neon}` }}
            onTimelineElementClick={() => toggle(idx)}
          >
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {exp.title}
            </Typography>
            <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
              {exp.company}
            </Typography>

            <Collapse in={expandedIndex === idx} timeout="auto" unmountOnExit>
              <Box sx={{ mt: 2, pl: 1 }}>
                <ul style={{ paddingLeft: 16 }}>
                  {exp.description.map((line, i) => (
                    <li key={i}>
                      <Typography variant="body2" sx={{ mt: 0.5 }}>
                        {line}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Box>
            </Collapse>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Box>
  );
}
