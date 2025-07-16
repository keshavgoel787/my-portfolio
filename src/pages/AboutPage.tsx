// src/pages/AboutPage.tsx
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import ThreeScene from "../components/ThreeScene";

/* height of your fixed AppBar (desktop default 64 px) */
const NAV_HEIGHT = 64;

export default function AboutPage() {
  /* ⚠️  Make sure scrolling is ON for this route */
  useEffect(() => {
    document.body.classList.remove("no-scroll"); // the class we added on Home
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
            I’m Keshav Goel, a data-science and math undergrad who loves turning
            messy datasets into clear stories. Whether I’m hacking away at a
            hackathon, teaching Python to freshmen, or researching how air-
            quality data can guide eco-friendly routes, I’m happiest when code
            meets impact.
          </Typography>

          <Typography paragraph>
            Off the keyboard you’ll catch me dancing Bhangra, hiking new
            trails, or hunting for the perfect Dr Pepper refill. My long-term
            goal: use machine learning to close healthcare gaps—one model, one
            community at a time.
          </Typography>

          <Typography paragraph>
            Feel free to explore my projects, shoot me a message, or just say
            hi. I’m always up for a good data chat!
          </Typography>
        </Box>
      </Box>
    </>
  );
}
