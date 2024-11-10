'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
}

export function InteractiveParticles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);

  // Create smooth mouse movement
  const smoothX = useSpring(0, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(0, { damping: 50, stiffness: 400 });

  useEffect(() => {
    // Initialize particles
    const initialParticles: Particle[] = Array.from({ length: 50 }, () => ({
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
      y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
      size: Math.random() * 3 + 1,
      color: `hsla(${Math.random() * 360}, 70%, 70%, 0.3)`
    }));
    setParticles(initialParticles);

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
        smoothX.set(x);
        smoothY.set(y);
      }
    };

    const handleResize = () => {
      if (containerRef.current) {
        setParticles(prev => prev.map(particle => ({
          ...particle,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight
        })));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [smoothX, smoothY]);

  // Update particle positions based on mouse movement
  useEffect(() => {
    const updateParticles = () => {
      setParticles(prev => prev.map(particle => {
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          return {
            ...particle,
            x: particle.x - (dx * force * 0.02),
            y: particle.y - (dy * force * 0.02)
          };
        }

        // Slowly return to original position
        return {
          ...particle,
          x: particle.x + (Math.random() - 0.5) * 0.5,
          y: particle.y + (Math.random() - 0.5) * 0.5
        };
      }));
    };

    const animationFrame = requestAnimationFrame(updateParticles);
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePosition]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Mouse trail */}
      <motion.div
        className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-lg"
        style={{
          x: smoothX,
          y: smoothY,
        }}
      />

      {/* Particles */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          animate={{
            x: particle.x,
            y: particle.y,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
        />
      ))}
    </div>
  );
}
