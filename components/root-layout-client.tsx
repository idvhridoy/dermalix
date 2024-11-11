'use client';

import { Inter } from 'next/font/google';
import { Navigation } from './navigation';
import { Footer } from './footer';
import { ThemeProvider } from './theme-provider';
import { VisitorStats } from './visitor-stats';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useLayoutEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

// Cyberpunk particle animation component
function ParticleBackground() {
  const [windowHeight, setWindowHeight] = useState(1000); // Default fallback height

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="particle absolute w-1 h-1 bg-primary/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [-10, -windowHeight],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        />
      ))}
    </div>
  );
}

// Grid background component
function CyberpunkGrid() {
  return (
    <div className="fixed inset-0 cyberpunk-grid pointer-events-none" />
  );
}

export function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <body className={`${inter.className} min-h-screen bg-background text-foreground relative`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {/* Background Effects */}
        <ParticleBackground />
        <CyberpunkGrid />

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <Navigation />
          
          {/* Page Content with Transitions */}
          <main className="flex-grow px-[10px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* Visitor Stats */}
          <VisitorStats />

          {/* Footer */}
          <div className="px-[10px]">
            <Footer />
          </div>

          {/* Neon Accent Lines */}
          <div className="fixed top-0 left-0 w-1 h-screen bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50 opacity-50" />
          <div className="fixed top-0 right-0 w-1 h-screen bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50 opacity-50" />
        </div>

        {/* Radial Gradient Overlay */}
        <div className="fixed inset-0 bg-gradient-radial from-transparent via-background/50 to-background pointer-events-none" />
      </ThemeProvider>
    </body>
  );
}
