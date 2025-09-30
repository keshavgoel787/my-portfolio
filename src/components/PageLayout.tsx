// src/components/PageLayout.tsx
import { Box } from "@mui/material";
import ThreeScene from "./ThreeScene";
import ErrorBoundary from "./ErrorBoundary";
import type { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  withBackground?: boolean;
}

export default function PageLayout({
  children,
  withBackground = true
}: PageLayoutProps) {
  return (
    <>
      {withBackground && (
        <ErrorBoundary>
          <ThreeScene />
        </ErrorBoundary>
      )}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        {children}
      </Box>
    </>
  );
}
