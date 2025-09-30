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
        }}
      >
        🛠️ Mission Builds
      </Typography>

      <Stack spacing={4}>
        {projects.map((proj, idx) => (
          <Card
            key={idx}
            sx={{
              bgcolor: colors.background.medium,
              color: colors.neon,
              border: `1px solid ${colors.neon}`,
              boxShadow: `0 0 10px ${colors.cyan}33`,
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
