'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Users, Globe, Map } from 'lucide-react';

interface CountryData {
  name: string;
  visitors: number;
}

export function LiveVisitors() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [totalVisitors, setTotalVisitors] = useState(829);
  const [activeVisitors, setActiveVisitors] = useState(84);
  const [countries, setCountries] = useState<CountryData[]>([
    { name: 'United States', visitors: 140 },
    { name: 'United Kingdom', visitors: 57 },
    { name: 'Germany', visitors: 24 },
    { name: 'Japan', visitors: 22 },
    { name: 'Canada', visitors: 31 },
  ]);

  useEffect(() => {
    // Update stats every 5 seconds
    const interval = setInterval(() => {
      setTotalVisitors(prev => prev + Math.floor(Math.random() * 3));
      setActiveVisitors(prev => Math.max(50, Math.min(150, prev + Math.floor(Math.random() * 7) - 3)));
      setCountries(prev => prev.map(country => ({
        ...country,
        visitors: Math.max(20, country.visitors + Math.floor(Math.random() * 5) - 2)
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-1/2 right-4 -translate-y-1/2 z-40"
    >
      <div className="relative">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center space-x-2 px-4 py-2 rounded-full bg-background/90 border border-primary/20 hover:border-primary/40 transition-all duration-300 neon-border"
        >
          <Activity className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary neon-text">Live Visitors</span>
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full right-0 mt-2 w-80 p-4 rounded-lg bg-background/90 backdrop-blur-lg border border-primary/20 neon-border"
            >
              <div className="space-y-4">
                {/* Total Visitors */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm">Total Visitors</span>
                  </div>
                  <motion.span
                    key={totalVisitors}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-lg font-bold text-primary neon-text"
                  >
                    {totalVisitors}
                  </motion.span>
                </div>

                {/* Active Visitors */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-secondary" />
                    <span className="text-sm">Active Now</span>
                  </div>
                  <motion.span
                    key={activeVisitors}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-lg font-bold text-secondary neon-text-green"
                  >
                    {activeVisitors}
                  </motion.span>
                </div>

                {/* Countries */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-primary" />
                    <span className="text-sm">Top Countries</span>
                  </div>
                  <div className="space-y-1">
                    {countries.map((country, index) => (
                      <motion.div
                        key={country.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-foreground/70">{country.name}</span>
                        <span className="text-primary">{country.visitors}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
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
      </div>
    </motion.div>
  );
}
