// src/config/constants.ts

export const LAYOUT = {
  NAV_HEIGHT: 64,
  CARD_WIDTH: { xs: "100%", sm: "80%", md: "60%", lg: "50%" },
} as const;

export const ANIMATION = {
  TYPE_SPEED: 90,
  DELETE_SPEED: 60,
  DELAY_BETWEEN_WORDS: 1400,
  CURSOR_GLYPH: "|",
} as const;

export const LINKS = {
  GITHUB: "https://github.com/keshavgoel787",
  LINKEDIN: "https://linkedin.com/in/goel-keshav/",
  RESUME_PATH: "/Keshav_Goel_Resume.pdf",
  EMAIL: "kgoel9657@gmail.com",
} as const;
