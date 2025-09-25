import { Box } from "@mui/material";
import Projects from "../components/Projects";
import ThreeScene from "../components/ThreeScene";

export default function ProjectsPage() {
  return (
    <>
      <ThreeScene />
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Projects />
      </Box>
    </>
  );
}
