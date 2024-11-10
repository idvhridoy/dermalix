'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Users, Activity, Map } from 'lucide-react';

// Simulated visitor data - In a real app, this would come from your analytics backend
const generateRandomVisitors = () => {
  return {
    total: Math.floor(Math.random() * 1000) + 500,
    active: Math.floor(Math.random() * 100) + 50,
    countries: [
      { name: 'United States', count: Math.floor(Math.random() * 100) + 50 },
      { name: 'United Kingdom', count: Math.floor(Math.random() * 50) + 30 },
      { name: 'Germany', count: Math.floor(Math.random() * 40) + 20 },
      { name: 'Japan', count: Math.floor(Math.random() * 30) + 15 },
      { name: 'Canada', count: Math.floor(Math.random() * 25) + 10 },
    ]
  };
};

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
      className="fixed bottom-4 right-4 z-50"
    >
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="flex items-center space-x-2 px-4 py-2 rounded-full bg-background/90 border border-primary/20 
                   hover:border-primary/40 transition-all duration-300 neon-border"
      >
        <Activity className="w-4 h-4 text-primary" />
        <span className="text-sm text-primary neon-text">Live Visitors</span>
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="absolute bottom-full right-0 mb-2 w-80 p-4 rounded-lg bg-background/90 backdrop-blur-lg 
                     border border-primary/20 neon-border"
          >
            <div className="space-y-4">
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
