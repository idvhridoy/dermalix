'use client';

import React, { useState, useEffect } from 'react';
import { Activity, Users, Globe, Map } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Helper function to generate random visitor data
function generateRandomVisitors() {
  return {
    total: Math.floor(Math.random() * 10000) + 5000,
    active: Math.floor(Math.random() * 500) + 100,
    countries: [
      { name: 'United States', count: Math.floor(Math.random() * 1000) + 500 },
      { name: 'United Kingdom', count: Math.floor(Math.random() * 500) + 200 },
      { name: 'Germany', count: Math.floor(Math.random() * 300) + 100 },
      { name: 'Japan', count: Math.floor(Math.random() * 200) + 50 },
    ],
  };
}

export function VisitorStats() {
  const [stats, setStats] = useState(generateRandomVisitors());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Update stats every 5 seconds
    const interval = setInterval(() => {
      setStats(generateRandomVisitors());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-[50%] right-4 z-50 translate-y-1/2"
    >
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="flex items-center space-x-2 px-3 py-2 rounded-full bg-red-600/90 border border-primary/20 
                   hover:border-primary/40 transition-all duration-300 neon-border hover:bg-red-500/90"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -10, 10, -10, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          <Activity className="w-5 h-5 text-white" />
          <div className="absolute inset-0 animate-ping bg-white/30 rounded-full" />
        </motion.div>
        <motion.span 
          animate={{ 
            opacity: [1, 0.7, 1],
            scale: [1, 1.02, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-sm text-white neon-text hidden md:inline"
        >
          Live Visitors
        </motion.span>
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="absolute right-0 top-[calc(50%-120px)] mb-2 w-80 p-4 rounded-lg bg-background/90 backdrop-blur-lg 
                     border border-primary/20 neon-border"
          >
            <button
              onClick={() => setIsVisible(false)}
              className="absolute -top-3 -right-3 p-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="relative space-y-4 pt-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm">Total Visitors</span>
                </div>
                <motion.span 
                  key={stats.total}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-lg font-bold text-primary neon-text"
                >
                  {stats.total}
                </motion.span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-secondary" />
                  <span className="text-sm">Active Now</span>
                </div>
                <motion.span 
                  key={stats.active}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-lg font-bold text-secondary neon-text-green"
                >
                  {stats.active}
                </motion.span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-sm">Top Countries</span>
                </div>
                <div className="space-y-1">
                  {stats.countries.map((country, index) => (
                    <motion.div
                      key={country.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-foreground/70">{country.name}</span>
                      <span className="text-primary">{country.count}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-primary/20">
                <div className="flex items-center justify-between text-xs text-foreground/50">
                  <span>Updated live every 5s</span>
                  <Map className="w-3 h-3" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
