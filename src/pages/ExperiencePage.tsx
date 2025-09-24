import { Box } from "@mui/material";
import Experiences from "../components/Experience";
import ThreeScene from "../components/ThreeScene";

export default function ExperiencePage() {
  return (
    <>
      <ThreeScene />
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Experiences />
      </Box>
    </>
  );
}
