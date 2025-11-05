import { Box, type SxProps, type Theme } from "@mui/material";
import { type ReactNode } from "react";
import { LAYOUT } from "../config/constants";
import { colors } from "../config/theme";

interface CardProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}

export default function Card({ children, sx = {} }: CardProps) {
  return (
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
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
