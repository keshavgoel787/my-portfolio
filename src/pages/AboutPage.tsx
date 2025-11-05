// src/pages/AboutPage.tsx
import { useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import PageLayout from "../components/PageLayout";
import ContactForm from "../components/ContactForm";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import { LAYOUT, LINKS } from "../config/constants";
import { colors } from "../config/theme";

export default function AboutPage() {
  useEffect(() => {
    document.body.classList.remove("no-scroll");
  }, []);

  return (
    <PageLayout>
      <Box
        component="main"
        sx={{
          minHeight: "100vh",
          pt: `${LAYOUT.NAV_HEIGHT + 24}px`,
          pb: 6,
          px: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* About Me Card */}
        <Card>
          <SectionTitle>About Me</SectionTitle>
          <Typography sx={{ mb: 2 }}>
            Data Science & Math student at Northeastern (graduating 2027), building GenAI pipelines and microservices at Johnson & Johnson. Previously at VDart doing AI-powered resume parsing, and analyzing EPA data for environmental research.
          </Typography>
          <Typography>
            When I'm not coding, you'll find me at Bhangra practice, hunting for Boston's best tacos, or expanding my Pokemon card collection.
          </Typography>
        </Card>

        {/* Highlights Card */}
        <Card>
          <SectionTitle>Highlights</SectionTitle>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box>
              <Typography variant="h6" sx={{ color: colors.cyan, mb: 0.5 }}>
                🏆 2nd Place - HackRU 2025 | 1st Place - CSBase Climate Hacks 2024
              </Typography>
              <Typography variant="body2">
                Beat 400+ teams with innovative AI solutions
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ color: colors.cyan, mb: 0.5 }}>
                🎓 GPA: 3.88/4.00 - Dean's List
              </Typography>
              <Typography variant="body2">
                Data Science & Mathematics at Northeastern
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ color: colors.cyan, mb: 0.5 }}>
                🚀 Production Impact
              </Typography>
              <Typography variant="body2">
                Built systems handling 2,000+ daily messages and 10K+ API requests
              </Typography>
            </Box>
          </Box>
        </Card>

        {/* Skills Card */}
        <Card>
          <SectionTitle>Tech Stack</SectionTitle>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ color: colors.cyan, mb: 1 }}>
              Core Languages
            </Typography>
            <Typography>
              Python, JavaScript, TypeScript, SQL, Java, C++
            </Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ color: colors.cyan, mb: 1 }}>
              Data Science & ML
            </Typography>
            <Typography>
              TensorFlow, Scikit-learn, Pandas, HuggingFace, Ollama, NLP
            </Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ color: colors.cyan, mb: 1 }}>
              Web Development
            </Typography>
            <Typography>
              React, Node.js, Flask, MongoDB, MySQL
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ color: colors.cyan, mb: 1 }}>
              Tools & Cloud
            </Typography>
            <Typography>
              Docker, Kubernetes, Git, AWS, Snowflake, Tableau
            </Typography>
          </Box>
        </Card>

        {/* Contact Card */}
        <Card>
          <SectionTitle>Let's Connect</SectionTitle>
          <Typography sx={{ mb: 3 }}>
            Always down to chat about tech, data science, or the best taco spots!
          </Typography>

          <ContactForm />

          <Box sx={{ mt: 3, pt: 3, borderTop: `1px solid ${colors.cyan}33` }}>
            <Button
              variant="outlined"
              href={LINKS.RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<InsertDriveFileIcon />}
              fullWidth
              sx={{
                color: colors.cyan,
                borderColor: colors.cyan,
                fontWeight: "bold",
                py: 1.5,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: `${colors.cyan}22`,
                  borderColor: colors.cyan,
                  boxShadow: `0 0 20px ${colors.cyan}66`,
                  transform: "scale(1.02)",
                },
              }}
            >
              Download My Resume
            </Button>
          </Box>
        </Card>
      </Box>
    </PageLayout>
  );
}
