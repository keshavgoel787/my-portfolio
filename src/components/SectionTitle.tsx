import { Typography } from "@mui/material";
import { type ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
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
      {children}
    </Typography>
  );
}
