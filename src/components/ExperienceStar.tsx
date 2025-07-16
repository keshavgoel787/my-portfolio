// src/components/ExperienceStar.tsx
import { Html } from "@react-three/drei";
import { useState } from "react";
import * as THREE from "three";

interface Props {
  position: [number, number, number];
  title: string;
  company: string;
  description: string;
  year: string;
}

export default function ExperienceStar({ position, title, company, description, year }: Props) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <mesh
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setClicked(true)}
    >
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color={hovered ? "#66eaff" : "white"} />

      {hovered && (
        <Html distanceFactor={10}>
          <div className="bg-white text-black px-2 py-1 rounded text-xs shadow">
            {title} @ {company}
          </div>
        </Html>
      )}

      {clicked && (
        <Html>
          <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded max-w-md">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="text-sm text-gray-700">{company} • {year}</p>
              <p className="mt-2 text-sm">{description}</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => setClicked(false)}
              >
                Close
              </button>
            </div>
          </div>
        </Html>
      )}
    </mesh>
  );
}
