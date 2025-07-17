// src/pages/HomePage.tsx  (or wherever your hero lives)
import { useEffect } from "react";
import IntroTyper from "../components/IntroTyper";
import ThreeScene from "../components/ThreeScene";

export default function HomePage() {
  /* lock scroll only while this component is mounted */
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, []);

  const NAV_HEIGHT = 64; // same value you padded earlier

  return (
    <section
      style={{
        position: "relative",
        height: `calc(100vh - ${NAV_HEIGHT}px)`,
        paddingTop: NAV_HEIGHT,
        overflow: "hidden", // content can't scroll inside section
      }}
    >
      <ThreeScene />
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
