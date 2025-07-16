// src/components/ConstellationScene.tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import ExperienceStar from "./ExperienceStar";

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Google",
    year: "2024",
    description: "Built internal tools with React and Flask.",
    position: [-2, 0, -5],
  },
  {
    title: "Teaching Assistant",
    company: "Northeastern",
    year: "2024-25",
    description: "Tutored students in Python and data science.",
    position: [1, 1.5, -4],
  },
  {
    title: "Research Assistant",
    company: "WPS Lab",
    year: "2024",
    description: "Worked with agriculture datasets using Pandas and SQL.",
    position: [3, -1, -6],
  },
];

export default function ConstellationScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <Stars radius={100} depth={50} count={2000} factor={4} fade />

      {experiences.map((exp, i) => (
        <ExperienceStar key={i} {...exp} />
      ))}

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
