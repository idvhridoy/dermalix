'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';
import Link from 'next/link';

const announcements = [
  {
    id: 1,
    text: " New Arrival: Advanced Anti-Aging Serum - Shop Now!",
    link: "/products/anti-aging-serum"
  },
  {
    id: 2,
    text: " Free Shipping on Orders Over $50",
    link: "/shipping"
  },
  {
    id: 3,
    text: " Get 20% Off Your First Purchase - Use Code: WELCOME20",
    link: "/offers"
  },
  {
    id: 4,
    text: " Join Our Loyalty Program for Exclusive Benefits",
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
    <div className="relative bg-gradient-to-r from-primary/5 via-background to-primary/5 backdrop-blur-sm border-b border-primary/20 overflow-hidden mt-16">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-center h-10">
          {/* Previous button */}
          <button
            onClick={() => setCurrentSlide(prev => prev === 0 ? announcements.length - 1 : prev - 1)}
            className="absolute left-0 p-1 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Previous announcement"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Announcements */}
          <div className="overflow-hidden w-full">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center text-sm text-center"
              >
                <Link 
                  href={announcements[currentSlide].link}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {announcements[currentSlide].text}
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next button */}
          <button
            onClick={() => setCurrentSlide(prev => prev >= announcements.length - 1 ? 0 : prev + 1)}
            className="absolute right-0 p-1 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Next announcement"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 p-1 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Close announcements"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
