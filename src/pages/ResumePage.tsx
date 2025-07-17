import { Box } from "@mui/material";
import ThreeScene from "../components/ThreeScene";

export default function ResumePage() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", paddingTop: 64 }}>
      <ThreeScene />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
        }}
      >
        <Box
          sx={{
            width: "min(90vw, 900px)",
            height: "90vh",
            bgcolor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 2,
            backdropFilter: "blur(6px)",
            overflow: "hidden",
            boxShadow: 3,
          }}
        >
          <iframe
            src="/Keshav_Goel_Resume.pdf"
            title="Resume"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </Box>
      </Box>
    </section>
  );
}
