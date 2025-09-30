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
  words = ["a Data Scientist", "a Software Engineer", "building GenAI pipelines", "optimizing RAG systems", "a Bhangra Dancer", "debugging with coffee", "a Taco Bell enthusiast", "wrangling messy data", "deploying on Kubernetes", "training ML models", "obsessed with Pokemon cards", "fine-tuning LLMs", "a Professional Yapper", "shipping production code", "your next teammate"],
  typeSpeed = 90,
  deleteSpeed = 60,
  delayBetweenWords = 1400,
  cursorGlyph = "|",
}: Props) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── headline typing ─────────────────────────────── */
  const [headTxt, setHeadTxt]   = useState(prefersReducedMotion ? headline : "");
  const [headlineDone, setDone] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let i = 0;
    const id = setInterval(() => {
      setHeadTxt(headline.slice(0, ++i));
      if (i === headline.length) {
        clearInterval(id);
        setDone(true);
      }
    }, typeSpeed);
    return () => clearInterval(id);
  }, [headline, typeSpeed, prefersReducedMotion]);

  /* ── rotating sub-heading ────────────────────────── */
  const [wordIdx, setWordIdx]   = useState(0);
  const [subTxt, setSubTxt]     = useState(prefersReducedMotion ? words[0] : "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!headlineDone || prefersReducedMotion) return;
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
    prefersReducedMotion,
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
        {!headlineDone && !prefersReducedMotion && renderCursor()}
      </h1>

      {headlineDone && (
        <h2 style={{ marginTop: "0.6rem", opacity: 0.9 }}>
          {subTxt}
          {!prefersReducedMotion && renderCursor()}
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
        @media (prefers-reduced-motion: reduce) {
          .caret {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
