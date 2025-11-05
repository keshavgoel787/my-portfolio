// src/components/ThreeScene.tsx
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Galaxy() {
  const pointsRef = useRef<THREE.Points | null>(null);

  /* Build geometry + per-star alpha once */
  const { geometry, material } = useMemo(() => {
    // Reduce star count on mobile for better performance
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    const starCount = isMobile ? 5_000 : 20_000;
    const positions = new Float32Array(starCount * 3);
    const alphas    = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      const r     = 4 + Math.random() * 4;             // radius 4–8
      const phi   = Math.random() * 2 * Math.PI;       // azimuth
      const theta = Math.acos(Math.random() * 2 - 1);  // polar

      const x = r * Math.sin(theta) * Math.cos(phi);
      const y = r * Math.sin(theta) * Math.sin(phi);
      const z = r * Math.cos(theta);

      positions.set([x, y, z], i * 3);

      const radial = Math.sqrt(x * x + y * y);
      const fade   = THREE.MathUtils.clamp(radial / 6, 0, 1);
      alphas[i]    = 0.2 + 0.8 * Math.pow(fade, 0.8);
    }

    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    g.setAttribute("alpha",    new THREE.BufferAttribute(alphas, 1));

    const m = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color("#66eaff") },
        uSize:  { value: 4.0 },
        uPR:    { value: 1 },
      },
      vertexShader: `
        attribute float alpha;
        varying float vAlpha;
        uniform float uSize;
        uniform float uPR;
        void main() {
          vAlpha = alpha;
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = uSize * uPR / -mvPos.z;
          gl_Position  = projectionMatrix * mvPos;
        }
      `,
      fragmentShader: `
        varying float vAlpha;
        uniform vec3 uColor;
        void main() {
          vec2 c = gl_PointCoord - 0.5;
          if(length(c) > 0.5) discard;
          gl_FragColor = vec4(uColor, vAlpha);
        }
      `,
      transparent: true,
      depthWrite:  false,
    });

    return { geometry: g, material: m };
  }, []);

  /* Animation: gentle autonomous spin + retina-aware point size */
  useFrame(({ gl }, delta) => {
    if (!pointsRef.current) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      pointsRef.current.rotation.y += delta * 0.04; // slow spin
      pointsRef.current.rotation.x += delta * 0.02; // slight wobble
    }

    // keep points crisp on HiDPI / zoom
    (pointsRef.current.material as THREE.ShaderMaterial).uniforms.uPR.value =
      gl.getPixelRatio();
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
}

// src/components/ThreeScene.tsx
export default function ThreeScene() {
  return (
    <Canvas
      /* fill the whole screen, even behind the app-bar */
      style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }}   // 👈 key lines
      camera={{ position: [0, 0, 8], fov: 60 }}
      gl={{ antialias: true }}
    >
      <ambientLight intensity={0.5} color="#226688" />
      <Galaxy />
    </Canvas>
  );
}
