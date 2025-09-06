// src/pages/AboutPage.tsx
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import ThreeScene from "../components/ThreeScene";

/* height of your fixed AppBar (desktop default 64 px) */
const NAV_HEIGHT = 64;

export default function AboutPage() {
  useEffect(() => {
    document.body.classList.remove("no-scroll");
  }, []);

  return (
    <>
      {/* Galaxy background (already fixed + zIndex:-1) */}
      <ThreeScene />

      {/* Main scrollable content */}
      <Box
        component="main"
        sx={{
          position: "relative",
          zIndex: 1,                 // above the canvas
          minHeight: "100vh",
          pt: `${NAV_HEIGHT + 24}px`,// push below nav + some air
          pb: 6,
          px: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* Grey card in the middle */}
        <Box
          sx={{
            width: { xs: "100%", sm: "80%", md: "60%", lg: "50%" },
            bgcolor: "rgba(50,50,50,0.85)",
            color: "#e0e0e0",
            borderRadius: 2,
            p: { xs: 3, sm: 4 },
            boxShadow: 3,
            backdropFilter: "blur(2px)",
          }}
        >
          <Typography variant="h4" gutterBottom>
            About Me
          </Typography>

          <Typography paragraph>
            Hello There 👋
          </Typography>

          <Typography paragraph>
            I’m Keshav, a Data Science and Math Major at Northeastern. I’m passionate about applying data and machine learning to bridge gaps and make global impacts. I aim to apply my skills at the intersection of Data and various fields such as Health Care, Business, Entertainment, and Biology, with a focus on Computer Visions, NLP, and much more! When I’m not busy coding, you can find me at Bhangra practice, out hiking, or simply in my room listening to latest big music album. If you share these interests or have any questions, feel free to just say hi or reach out for a chat (I love to yap)! 

          </Typography>

          <Typography paragraph>
            Skills: Python, R, MySQL, Java, C#, C, C++,  HTML/CSS/JS, MongoDB, React, Node.js, Flutter, R, JavaScript, TypeScript, Scikit-learn, Tensorflow, Shelf, BeautifulSoup, Selenium, Pandas, Tableau, MS Suite, Pandas, Git, Postman, NLP, Linux, Snowflake, Ultralytics, OpenCV, HuggingFace, Ollama, Gemini, Digital Ocean, AWS.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
