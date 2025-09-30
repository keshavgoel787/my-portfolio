// src/components/IntroTyper.tsx
import { useEffect, useState } from "react";

interface Props {
  headline?: string;
  words?: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
  cursorGlyph?: string;
}

export default function IntroTyper({
  headline = "Hi, I'm Keshav",
  words = ["a Data Scientist", "a Software Engineer", "building cool things", "passionate about AI", "a Bhangra Dancer", "definitely NOT a morning person", "a Taco Bell enthusiast", "probably debugging right now", "a Math geek", "obsessed with Pokemon cards", "exploring the world", "binge-watching Marvel", "a Professional Yapper", "always learning something new", "your next teammate"],
  typeSpeed = 90,
  deleteSpeed = 60,
  delayBetweenWords = 1400,
  cursorGlyph = "|",
}: Props) {
  /* ── headline typing ─────────────────────────────── */
  const [headTxt, setHeadTxt]   = useState("");
  const [headlineDone, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setHeadTxt(headline.slice(0, ++i));
      if (i === headline.length) {
        clearInterval(id);
        setDone(true);
      }
    }, typeSpeed);
    return () => clearInterval(id);
  }, [headline, typeSpeed]);

  /* ── rotating sub-heading ────────────────────────── */
  const [wordIdx, setWordIdx]   = useState(0);
  const [subTxt, setSubTxt]     = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!headlineDone) return;
    const current = words[wordIdx % words.length];
    const speed   = deleting ? deleteSpeed : typeSpeed;

    const timer = setTimeout(() => {
      const nextLen = deleting ? subTxt.length - 1 : subTxt.length + 1;
      const nextStr = current.slice(0, nextLen);
      setSubTxt(nextStr);

      if (!deleting && nextStr === current) {
        setTimeout(() => setDeleting(true), delayBetweenWords);
      } else if (deleting && nextStr === "") {
        setDeleting(false);
        setWordIdx(i => i + 1);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [
    headlineDone,
    subTxt,
    deleting,
    wordIdx,
    words,
    typeSpeed,
    deleteSpeed,
    delayBetweenWords,
  ]);

  /* ── cursor placement: headline while typing, otherwise sub-heading ── */
  const renderCursor = () => (
    <span className="caret">{cursorGlyph}</span>
  );

  return (
    <div style={{ textAlign: "center" }}>
      <h1
        style={{
          margin: 0,
          fontSize: "clamp(3rem, 6vw, 6rem)",
          fontWeight: 500,
          background: "linear-gradient(135deg, #9b59b6 0%, #66eaff 50%, #3498db 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {headTxt}
        {!headlineDone && renderCursor()}
      </h1>

      {headlineDone && (
        <h2 style={{ marginTop: "0.6rem", opacity: 0.9 }}>
          {subTxt}
          {renderCursor()}
        </h2>
      )}

      {/* Blinking animation */}
      <style>{`
        .caret {
          display: inline-block;
          margin-left: 2px;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
