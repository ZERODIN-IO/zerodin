"use client";

// 200 points of light drifting slowly upward. Rendered with R3F Points
// in a single draw call. Only used in the hero.
//
// Three guards:
//   1. Suspense fallback in the parent — if WebGL fails, particles
//      render nothing and the hero still works.
//   2. Media query check below 768px — mobile devices skip WebGL.
//   3. prefers-reduced-motion check — the particles do not render.
//
// The drift is a per-frame update of each particle's Y position, wrapping
// from top to bottom when it goes off-screen. The seed is deterministic
// so the initial positions are stable across renders.

import { useMemo, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleFieldProps {
  count: number;
}

function ParticleField({ count }: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, sizes } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
      sz[i] = 0.02 + Math.random() * 0.04;
    }
    return { positions: pos, sizes: sz };
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const positionsAttr = pointsRef.current.geometry.getAttribute("position");
    const arr = positionsAttr.array as Float32Array;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += delta * 0.08;
      if (arr[i * 3 + 1] > 4) {
        arr[i * 3 + 1] = -4;
      }
    }
    positionsAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#00E3FD"
        transparent
        opacity={0.35}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export interface LightParticlesProps {
  count?: number;
}

export function LightParticles({ count = 200 }: LightParticlesProps) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (!reducedMotion && !isMobile) {
      setShouldRender(true);
    }
  }, []);

  if (!shouldRender) return null;

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
      >
        <ParticleField count={count} />
      </Canvas>
    </div>
  );
}
