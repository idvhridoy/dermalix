'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: 'drop' | 'bubble' | 'leaf' | 'molecule';
  rotation: number;
}

const generateParticles = (count: number): Particle[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 16 + 8, // Smaller size range for more professional look
    duration: Math.random() * 15 + 20, // Slower, more elegant movement
    delay: Math.random() * 10,
    rotation: Math.random() * 360,
    type: ['drop', 'bubble', 'leaf', 'molecule'][Math.floor(Math.random() * 4)] as Particle['type']
  }));
};

const ParticleSvg = ({ type, className }: { type: Particle['type']; className: string }) => {
  switch (type) {
    case 'drop':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21C15.866 21 19 17.866 19 14C19 10.134 12 3 12 3C12 3 5 10.134 5 14C5 17.866 8.13401 21 12 21Z" 
                fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'bubble':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="9" cy="10" r="2" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      );
    case 'leaf':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12 21V12M12 12L16 8M12 12L8 8" 
                fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'molecule':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="3" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="19" cy="12" r="2" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="5" cy="12" r="2" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="12" cy="19" r="2" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="12" cy="5" r="2" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="12" y1="7" x2="12" y2="10" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="12" y1="14" x2="12" y2="17" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="14" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="7" y1="12" x2="10" y2="12" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      );
  }
};

export function SkincareParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(generateParticles(12)); // Reduced count for cleaner look
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          initial={{
            x: `${particle.x}%`,
            y: '120%',
            opacity: 0,
            scale: 0,
            rotate: particle.rotation
          }}
          animate={{
            x: [
              `${particle.x}%`,
              `${particle.x + (Math.random() * 10 - 5)}%`, // Reduced movement range
              `${particle.x + (Math.random() * 10 - 5)}%`,
              `${particle.x}%`
            ],
            y: [
              '120%',
              `${particle.y}%`,
              `${particle.y - 20}%`,
              '-20%'
            ],
            opacity: [0, 0.3, 0.3, 0], // Increased opacity
            scale: [0, 1, 1, 0],
            rotate: [particle.rotation, particle.rotation + 180] // Smooth rotation
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <ParticleSvg 
            type={particle.type}
            className="w-full h-full text-primary"
          />
        </motion.div>
      ))}
    </div>
  );
}
