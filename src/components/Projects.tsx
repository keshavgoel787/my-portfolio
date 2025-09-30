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
import { projects } from "../data/project";
import { colors } from "../config/theme";

export default function Projects() {
  return (
    <Box sx={{color: colors.neon, py: 8, px: { xs: 2, md: 6 } }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          mb: 6,
          fontFamily: "Orbitron",
          fontWeight: 700,
          background: "linear-gradient(135deg, #9b59b6 0%, #66eaff 50%, #3498db 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        🛠️ Mission Builds
      </Typography>

      <Stack spacing={4}>
        {projects.map((proj, idx) => (
          <Card
            key={idx}
            sx={{
              bgcolor: "rgba(30, 30, 30, 0.4)",
              color: colors.neon,
              border: `1px solid ${colors.cyan}44`,
              boxShadow: `0 0 20px ${colors.cyan}22`,
              backdropFilter: "blur(10px)",
              borderRadius: 3,
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: `0 0 30px ${colors.cyan}66`,
                border: `1px solid ${colors.cyan}88`,
                transform: "translateY(-4px)",
              },
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                {proj.title}
              </Typography>

              {proj.why && (
                <Typography
                  variant="body2"
                  sx={{
                    my: 1,
                    fontStyle: "italic",
                    opacity: 0.9,
                    color: colors.cyan
                  }}
                >
                  💡 {proj.why}
                </Typography>
              )}

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
                      border: `1px solid ${colors.neon}`,
                      color: colors.neon,
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
                    color: colors.neon,
                    textTransform: "none",
                    fontWeight: 600,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: colors.cyan,
                      transform: "scale(1.05)",
                    },
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
