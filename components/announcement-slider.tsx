'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';
import { SkincareParticles } from './skincare-particles';

const announcements = [
  {
    id: 1,
    text: "🌟 New Arrival: Advanced Anti-Aging Serum - Shop Now!",
    link: "/products/anti-aging-serum"
  },
  {
    id: 2,
    text: "✨ Free Shipping on Orders Over $50",
    link: "/shipping"
  },
  {
    id: 3,
    text: "🎁 Get 20% Off Your First Purchase - Use Code: WELCOME20",
    link: "/offers"
  },
  {
    id: 4,
    text: "💫 Join Our Loyalty Program for Exclusive Benefits",
    link: "/loyalty"
  }
];

export function AnnouncementSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      setCurrentSlide(prev => 
        prev >= announcements.length - 1 ? 0 : prev + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-primary/5 via-background to-primary/5 backdrop-blur-sm border-b border-primary/20 overflow-hidden">
      <SkincareParticles />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl relative">
        <div className="h-12 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center z-10"
            >
              <a 
                href={announcements[currentSlide].link}
                className="text-sm sm:text-base text-center hover:text-primary transition-colors duration-300"
              >
                {announcements[currentSlide].text}
              </a>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={() => setCurrentSlide(prev => prev === 0 ? announcements.length - 1 : prev - 1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-background/50 transition-colors duration-300 z-20"
            aria-label="Previous announcement"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCurrentSlide(prev => prev >= announcements.length - 1 ? 0 : prev + 1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-background/50 transition-colors duration-300 z-20"
            aria-label="Next announcement"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-background/50 transition-colors duration-300 z-20"
            aria-label="Close announcements"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary/10">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
}
