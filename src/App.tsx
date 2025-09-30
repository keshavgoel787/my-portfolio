import { Route, Routes } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { useEffect, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import ShootingStar from "./components/ShootingStar";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ExperiencePage = lazy(() => import("./pages/ExperiencePage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));


export default function App() {
  useEffect(() => {
    console.log(
      "%c👋 Hey there, curious developer!",
      "font-size: 20px; font-weight: bold; color: #66eaff;"
    );
    console.log(
      "%cLike what you see? Let's chat!",
      "font-size: 14px; color: #9b59b6;"
    );
    console.log(
      "%c📧 Reach me at: keshavgoel@northeastern.edu",
      "font-size: 12px; color: #3498db;"
    );
    console.log(
      "%c💼 LinkedIn: linkedin.com/in/keshavgoel07",
      "font-size: 12px; color: #3498db;"
    );
    console.log(
      "%c🚀 GitHub: github.com/keshavgoel",
      "font-size: 12px; color: #3498db;"
    );
    console.log(
      "%c\n✨ P.S. This site was built with React + Three.js. Pretty cool, right?",
      "font-size: 11px; font-style: italic; color: #00e0ff;"
    );
  }, []);

  return (
    <>
      <ShootingStar />
      <Navbar />
      <Box component="main" sx={{ pt: 8 }}>
        <Suspense
          fallback={
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
              }}
            >
              <CircularProgress sx={{ color: "#00e0ff" }} />
            </Box>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </Suspense>
      </Box>
    </>
  );
}
