// src/components/Constellation.tsx
import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const Constellation = () => {
  const points = useRef();

  // Generate random points for stars
  const positions = useMemo(() => {
    const count = 1000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Points ref={points} positions={positions} stride={3}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </Canvas>
  );
};

export default Constellation;
