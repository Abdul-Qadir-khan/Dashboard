"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Earth from "@/components/Earth";

gsap.registerPlugin(ScrollTrigger);

export default function FuturisticEarthPage() {
  const canvasRef = useRef();
  const [particles, setParticles] = useState([]);

  // Generate orbiting particles client-side
  useEffect(() => {
    const generated = Array.from({ length: 150 }).map(() => ({
      radius: 3 + Math.random() * 2,
      angle: Math.random() * Math.PI * 2,
      speed: 0.001 + Math.random() * 0.003,
      size: 0.03 + Math.random() * 0.05,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`,
    }));
    setParticles(generated);
  }, []);

  // Scroll-triggered Earth rotation
  useEffect(() => {
    if (!canvasRef.current) return;
    gsap.to(canvasRef.current.rotation, {
      y: Math.PI * 2,
      scrollTrigger: {
        trigger: "#earthSection",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);
{/* Floating Cosmic Dots */}
{Array.from({ length: 20 }).map((_, i) => (
  <div
    key={i}
    className="absolute rounded-full"
    style={{
      width: `${10 + Math.random() * 40}px`,
      height: `${10 + Math.random() * 40}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      backgroundColor: `hsl(${220 + Math.random() * 40}, 60%, ${50 + Math.random() * 20}%)`,
      opacity: 0.3 + Math.random() * 0.4,
    }}
  ></div>
))}
  return (
    <div
  id="earthSection"
  className="w-full min-h-screen bg-black flex flex-col items-center justify-center"
>
  <h1 className="text-5xl font-bold text-center mb-10 text-white">
    Cosmic Interactive Earth 🌌
  </h1>
  <div className="w-full h-[80vh]">
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      {/* Lights */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />

      {/* Stars / Galaxy */}
      <Stars radius={200} depth={50} count={15000} factor={4} saturation={0} fade />

      {/* Interactive Earth */}
      <Earth />

      <OrbitControls enableZoom={true} enablePan={false} />
    </Canvas>
  </div>
  <p className="text-gray-300 text-center mt-10 max-w-2xl">
    Move your mouse over the Earth, click to burst colorful particles, and watch the cosmic scene come alive.
  </p>
</div>
  );
}