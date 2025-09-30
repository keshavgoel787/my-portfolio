// src/pages/AboutPage.tsx
import { useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import PageLayout from "../components/PageLayout";
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
        <Box
          sx={{
            width: LAYOUT.CARD_WIDTH,
            bgcolor: "rgba(30, 30, 30, 0.4)",
            color: colors.text.primary,
            borderRadius: 2,
            p: { xs: 3, sm: 4 },
            boxShadow: `0 0 20px ${colors.cyan}22`,
            backdropFilter: "blur(10px)",
            border: `1px solid ${colors.cyan}44`,
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: `0 0 30px ${colors.cyan}66`,
              border: `1px solid ${colors.cyan}88`,
              transform: "translateY(-4px)",
            },
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              background: "linear-gradient(135deg, #9b59b6 0%, #66eaff 50%, #3498db 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            About Me
          </Typography>

          <Typography paragraph>Hey there! 👋</Typography>

          <Typography paragraph>
            I'm Keshav, currently studying Data Science and Math at Northeastern (graduating 2027). Started coding in high school with Python and immediately got hooked on the idea of teaching computers to do cool stuff. Now I spend my days building AI tools, wrangling messy data, and occasionally pretending to understand all the math behind it.
          </Typography>

          <Typography paragraph>
            These days, I'm working at Johnson & Johnson building GenAI pipelines and microservices. Before that, I was helping recruiters at VDart with AI-powered resume parsing, and analyzing EPA data for environmental research at Northeastern.
          </Typography>

          <Typography paragraph>
            When I'm not staring at code, you'll find me at Bhangra practice (yes, I dance!), hunting for the best tacos in Boston, hiking, or expanding my Pokemon card collection. Always down to chat about tech, data science, or why Taco Bell is underrated. Fair warning: I'm a certified Professional Yapper™.
          </Typography>
        </Box>

        {/* Skills Card */}
        <Box
          sx={{
            width: LAYOUT.CARD_WIDTH,
            bgcolor: "rgba(30, 30, 30, 0.4)",
            color: colors.text.primary,
            borderRadius: 2,
            p: { xs: 3, sm: 4 },
            boxShadow: `0 0 20px ${colors.cyan}22`,
            backdropFilter: "blur(10px)",
            border: `1px solid ${colors.cyan}44`,
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: `0 0 30px ${colors.cyan}66`,
              border: `1px solid ${colors.cyan}88`,
              transform: "translateY(-4px)",
            },
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              background: "linear-gradient(135deg, #9b59b6 0%, #66eaff 50%, #3498db 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            What I Work With
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ color: colors.cyan, mb: 1 }}>
              Languages
            </Typography>
            <Typography>
              Python (my go-to), JavaScript, TypeScript, R, Java, C#, C, C++, HTML/CSS, SQL
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ color: colors.cyan, mb: 1 }}>
              Data Science & ML (where the magic happens)
            </Typography>
            <Typography>
              Scikit-learn, TensorFlow, Pandas, OpenCV, Ultralytics, HuggingFace, Ollama, Gemini, NLP, BeautifulSoup, Selenium
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ color: colors.cyan, mb: 1 }}>
              Web & Mobile
            </Typography>
            <Typography>
              React (like this site!), Node.js, Flutter, MongoDB, MySQL
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ color: colors.cyan, mb: 1 }}>
              Tools & Platforms
            </Typography>
            <Typography>
              Git, Docker, Linux, Tableau, Snowflake, AWS, Digital Ocean, and the usual suspects
            </Typography>
          </Box>
        </Box>

        {/* Education Card */}
        <Box
          sx={{
            width: LAYOUT.CARD_WIDTH,
            bgcolor: "rgba(30, 30, 30, 0.4)",
            color: colors.text.primary,
            borderRadius: 2,
            p: { xs: 3, sm: 4 },
            boxShadow: `0 0 20px ${colors.cyan}22`,
            backdropFilter: "blur(10px)",
            border: `1px solid ${colors.cyan}44`,
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: `0 0 30px ${colors.cyan}66`,
              border: `1px solid ${colors.cyan}88`,
              transform: "translateY(-4px)",
            },
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              background: "linear-gradient(135deg, #9b59b6 0%, #66eaff 50%, #3498db 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Education
          </Typography>

          <Typography variant="h6" sx={{ color: colors.cyan }}>
            Northeastern University
          </Typography>
          <Typography variant="body1" sx={{ fontStyle: "italic", mb: 1 }}>
            Bachelor of Science in Data Science and Mathematics
          </Typography>
          <Typography variant="body2" color="text.secondary">
            GPA: 3.88/4.00
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Expected Graduation: May 2027
          </Typography>
        </Box>

        {/* Resume Card */}
        <Box
          sx={{
            width: LAYOUT.CARD_WIDTH,
            bgcolor: "rgba(30, 30, 30, 0.4)",
            color: colors.text.primary,
            borderRadius: 2,
            p: { xs: 3, sm: 4 },
            boxShadow: `0 0 20px ${colors.cyan}22`,
            backdropFilter: "blur(10px)",
            border: `1px solid ${colors.cyan}44`,
            textAlign: "center",
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: `0 0 30px ${colors.cyan}66`,
              border: `1px solid ${colors.cyan}88`,
              transform: "translateY(-4px)",
            },
          }}
        >
          <Typography variant="h5" gutterBottom>
            ☕ Let's Connect
          </Typography>
          <Typography paragraph>
            Always down to chat about tech, data science, or the best taco spots. Grab my resume below or just reach out!
          </Typography>
          <Button
            variant="outlined"
            href={LINKS.RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<InsertDriveFileIcon />}
            sx={{
              color: colors.cyan,
              borderColor: colors.cyan,
              fontWeight: "bold",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#1a1a1a",
                borderColor: colors.cyan,
                boxShadow: `0 0 20px ${colors.cyan}66`,
                transform: "scale(1.05)",
              },
            }}
          >
            Grab My Resume
          </Button>
        </Box>
      </Box>
    </PageLayout>
  );
}
