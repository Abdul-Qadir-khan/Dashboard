"use client"; // ensures it's a client component

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function CheapInteractiveEarth() {
  const earthRef = useRef();
  const cloudsRef = useRef();

  const particleCount = 50;
  const [particles] = useState(
    Array.from({ length: particleCount }).map(() => ({
      radius: 2 + Math.random(),
      angle: Math.random() * Math.PI * 2,
      speed: 0.002 + Math.random() * 0.003,
      size: 0.04 + Math.random() * 0.04,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`,
      glow: 0.4 + Math.random() * 0.4,
    }))
  );

  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (earthRef.current) earthRef.current.rotation.y += 0.0015;
    if (cloudsRef.current) cloudsRef.current.rotation.y += 0.0008;

    particles.forEach((p) => {
      p.angle += p.speed * (hovered ? 3 : 1);
      p.x = p.radius * Math.cos(p.angle);
      p.z = p.radius * Math.sin(p.angle);
    });
  });

  const handleClick = () => {
    particles.forEach((p) => (p.size += 0.05));
    setTimeout(() => particles.forEach((p) => (p.size -= 0.05)), 200);
  };

  return (
    <group
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
    >
      {/* Clouds */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[2.05, 32, 32]} />
        <meshPhongMaterial color="#fff" transparent opacity={0.3} shininess={5} />
      </mesh>

      {/* Earth */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshPhongMaterial color="#0a6eff" specular="#fff" shininess={20} />
      </mesh>

      {/* Atmosphere glow */}
      <mesh>
        <sphereGeometry args={[2.15, 32, 32]} />
        <meshBasicMaterial color="#0ff" transparent opacity={0.05} side={THREE.BackSide} />
      </mesh>

      {/* Particles */}
      {particles.map((p, i) => (
        <mesh key={i} position={[p.x, 0, p.z]}>
          <sphereGeometry args={[p.size, 6, 6]} />
          <meshBasicMaterial color={p.color} transparent opacity={p.glow} />
        </mesh>
      ))}
    </group>
  );
}