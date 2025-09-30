// src/components/ShootingStar.tsx
import { useEffect, useState } from "react";

interface Star {
  id: number;
  top: number;
  left: number;
  delay: number;
}

export default function ShootingStar() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const createStar = () => {
      const newStar: Star = {
        id: Date.now(),
        top: Math.random() * 50, // Top 50% of screen
        left: Math.random() * 100,
        delay: 0,
      };

      setStars((prev) => [...prev, newStar]);

      // Remove star after animation completes
      setTimeout(() => {
        setStars((prev) => prev.filter((s) => s.id !== newStar.id));
      }, 3000);
    };

    // Create shooting star every 6-12 seconds
    const interval = setInterval(() => {
      if (Math.random() > 0.5) {
        createStar();
      }
    }, 8000);

    // Create first star after 3 seconds
    setTimeout(createStar, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            position: "fixed",
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: "2px",
            height: "2px",
            background: "#66eaff",
            borderRadius: "50%",
            boxShadow: "0 0 6px 2px #66eaff",
            zIndex: 10,
            pointerEvents: "none",
            animation: "shootingStar 2s ease-out forwards",
          }}
        />
      ))}
      <style>{`
        @keyframes shootingStar {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translate(200px, 200px) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
