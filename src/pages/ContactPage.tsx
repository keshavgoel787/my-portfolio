// HomePage.tsx (inside your hero section)
import IntroTyper from "../components/IntroTyper";
import ThreeScene from "../components/ThreeScene";

// HomePage.tsx  (or wherever you place ThreeScene + IntroTyper)
export default function HomePage() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",          // full viewport
        overflow: "hidden",
      }}
    >
      <ThreeScene />

      {/* text overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pointerEvents: "none",
        }}
      >
        <IntroTyper />
      </div>
    </section>
  );
}
