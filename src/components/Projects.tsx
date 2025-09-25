// src/components/Projects.tsx
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Button,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const projects = [
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

const neon = "#2c96a6ff";

export default function Projects() {
  return (
    <Box sx={{color: neon, py: 8, px: { xs: 2, md: 6 } }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          mb: 6,
          fontFamily: "Orbitron",
          fontWeight: 700,
        }}
      >
        🛠️ Mission Builds
      </Typography>

      <Stack spacing={4}>
        {projects.map((proj, idx) => (
          <Card
            key={idx}
            sx={{
              bgcolor: "#1e1e1e",
              color: neon,
              border: `1px solid ${neon}`,
              boxShadow: "0 0 10px rgba(102, 234, 255, 0.2)",
              borderRadius: 3,
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                {proj.title}
              </Typography>

              <Typography variant="body1" sx={{ my: 1 }}>
                {proj.description}
              </Typography>

              <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", my: 1 }}>
                {proj.tech.map((tech, i) => (
                  <Chip
                    key={i}
                    label={tech}
                    size="small"
                    sx={{
                      bgcolor: "#222",
                      border: `1px solid ${neon}`,
                      color: neon,
                      fontFamily: "monospace",
                    }}
                  />
                ))}
              </Stack>

              {proj.link && (
                <Button
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<LaunchIcon />}
                  sx={{
                    mt: 1,
                    color: neon,
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  View Project
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
