'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  type: 'molecule' | 'drop' | 'star';
}

const molecules = [
  // Molecule SVG paths
  "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z", // Hyaluronic acid
  "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z", // Vitamin C
  "M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24l-7.19-.61L12 2z", // Retinol
];

const colors = [
  '#FF69B4', // Pink
  '#87CEEB', // Sky Blue
  '#98FB98', // Pale Green
  '#DDA0DD', // Plum
  '#F0E68C', // Khaki
];

export function MouseTrailEffect() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let particleCount = 0;
    const maxParticles = 15;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      particleCount++;
      const newParticle: Particle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        type: ['molecule', 'drop', 'star'][Math.floor(Math.random() * 3)] as 'molecule' | 'drop' | 'star',
      };

      setParticles(prev => [...prev, newParticle].slice(-maxParticles));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ 
              opacity: 1, 
              x: particle.x, 
              y: particle.y,
              scale: 1,
            }}
            animate={{ 
              opacity: 0,
              y: particle.y + 100,
              x: particle.x + (Math.random() - 0.5) * 100,
              scale: 0,
              rotate: Math.random() * 360,
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 1,
              ease: "easeOut"
            }}
            className="absolute"
            style={{
              transform: `translate(-50%, -50%)`,
            }}
          >
            {particle.type === 'molecule' ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={colors[Math.floor(Math.random() * colors.length)]}
              >
                <path d={molecules[Math.floor(Math.random() * molecules.length)]} />
              </svg>
            ) : particle.type === 'drop' ? (
              <div 
                className="w-3 h-3 rounded-full"
                style={{ 
                  background: colors[Math.floor(Math.random() * colors.length)],
                  filter: 'blur(1px)'
                }}
              />
            ) : (
              <div className="text-xl">✨</div>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
