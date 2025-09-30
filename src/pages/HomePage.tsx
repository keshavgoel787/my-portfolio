// src/pages/HomePage.tsx
import { useEffect } from "react";
import IntroTyper from "../components/IntroTyper";
import ThreeScene from "../components/ThreeScene";
import ErrorBoundary from "../components/ErrorBoundary";
import { LAYOUT } from "../config/constants";

export default function HomePage() {
  /* lock scroll only while this component is mounted */
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, []);

  return (
    <section
      style={{
        position: "relative",
        height: `calc(100vh - ${LAYOUT.NAV_HEIGHT}px)`,
        paddingTop: LAYOUT.NAV_HEIGHT,
        overflow: "hidden",
      }}
    >
      <ErrorBoundary>
        <ThreeScene />
      </ErrorBoundary>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          pointerEvents: "none",
        }}
      >
        <IntroTyper />
      </div>
    </section>
  );
}
