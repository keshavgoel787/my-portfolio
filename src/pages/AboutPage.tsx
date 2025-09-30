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

          <Typography paragraph>Hello There 👋</Typography>

          <Typography paragraph>
            I'm Keshav, a Data Science and Math Major at Northeastern. I'm passionate about applying data and machine learning to bridge gaps and make global impacts. I aim to apply my skills at the intersection of Data and various fields such as Health Care, Business, Entertainment, and Biology, with a focus on Computer Visions, NLP, and much more! When I'm not busy coding, you can find me at Bhangra practice, out hiking, or simply in my room listening to latest big music album. If you share these interests or have any questions, feel free to just say hi or reach out for a chat (I love to yap)!
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
            Skills
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ color: colors.cyan, mb: 1 }}>
              Languages
            </Typography>
            <Typography>
              Python, R, Java, C#, C, C++, JavaScript, TypeScript, HTML/CSS, SQL
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ color: colors.cyan, mb: 1 }}>
              Data Science & ML
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
              React, Node.js, Flutter, MongoDB, MySQL
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ color: colors.cyan, mb: 1 }}>
              Tools & Platforms
            </Typography>
            <Typography>
              Git, Postman, Docker, Linux, Tableau, Snowflake, AWS, Digital Ocean, MS Suite
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
            📄 My Resume
          </Typography>
          <Typography paragraph>
            Here's a quick look at my latest resume. Feel free to download or reach out for the latest version!
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
            View Resume
          </Button>
        </Box>
      </Box>
    </PageLayout>
  );
}
