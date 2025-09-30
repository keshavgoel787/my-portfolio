// src/config/theme.ts
import { createTheme } from "@mui/material";

export const colors = {
  primary: "#00e0ff",
  cyan: "#66eaff",
  neon: "#2c96a6ff",
  background: {
    dark: "#121212",
    medium: "#1e1e1e",
    card: "rgba(50,50,50,0.85)",
    nav: "#212121",
    navTransparent: "rgba(33, 33, 33, 0.8)",
  },
  text: {
    primary: "#f0f0f0",  // Increased from #e0e0e0 for better contrast (WCAG AAA compliant)
    light: "#ffffff",
  },
} as const;

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: colors.primary },
    text: {
      primary: colors.text.primary,
      secondary: "rgba(240, 240, 240, 0.7)",
    },
  },
  typography: {
    fontFamily: `"Fira Code", monospace`,
  },
});
