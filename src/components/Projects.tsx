// src/components/Projects.tsx
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
  Button,
  ImageList,
  ImageListItem,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { projects } from "../data/project";
import { colors } from "../config/theme";

export default function Projects() {
  return (
    <Box sx={{color: colors.neon, py: 8, px: { xs: 2, md: 6 } }}>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          mb: 1,
          opacity: 0.8,
          fontStyle: "italic",
        }}
      >
        Here's some stuff I've built:
      </Typography>
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
            {/* Thumbnail/Video Section */}
            {proj.video && (
              <CardMedia
                component="video"
                controls
                src={proj.video}
                sx={{
                  width: "100%",
                  maxHeight: 400,
                  objectFit: "cover",
                }}
              />
            )}
            {!proj.video && proj.thumbnail && (
              <CardMedia
                component="img"
                image={proj.thumbnail}
                alt={`${proj.title} thumbnail`}
                sx={{
                  width: "100%",
                  maxHeight: 400,
                  objectFit: "cover",
                }}
              />
            )}

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

              {/* Additional Images Gallery */}
              {proj.images && proj.images.length > 0 && (
                <ImageList
                  sx={{ width: "100%", my: 2 }}
                  cols={proj.images.length > 2 ? 3 : proj.images.length}
                  rowHeight={200}
                  gap={8}
                >
                  {proj.images.map((image, i) => (
                    <ImageListItem key={i}>
                      <img
                        src={image}
                        alt={`${proj.title} screenshot ${i + 1}`}
                        loading="lazy"
                        style={{
                          objectFit: "cover",
                          borderRadius: "8px",
                          border: `1px solid ${colors.cyan}44`,
                        }}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              )}

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
