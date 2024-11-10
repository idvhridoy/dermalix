'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';
import Image from 'next/image';

const HeroParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-16 bg-gradient-to-b from-primary/40 to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default function HomePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="min-h-screen relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroParticles />

        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1629200017674-a43e0ac2d230"
            alt="Futuristic Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            style={{ opacity, y }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary neon-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Future of
              <br />
              <span className="text-foreground neon-text-green">Skincare</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-foreground/80 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experience the next generation of dermatological innovation
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg 
                          hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 neon-border"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discover Products
              </motion.button>
              <motion.button
                className="px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold text-lg 
                          hover:bg-primary/10 transition-all duration-300 neon-border"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Product Cards */}
        <motion.div 
          className="container mx-auto px-4 pb-32"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Anti-Aging Serum",
                description: "Advanced formula with retinol and peptides",
                image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be"
              },
              {
                title: "Hydrating Cream",
                description: "24-hour moisture with hyaluronic acid",
                image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19"
              },
              {
                title: "Vitamin C Complex",
                description: "Brightening and antioxidant protection",
                image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/20
                          hover:shadow-lg hover:shadow-primary/20 transition-all duration-500"
                whileHover={{ y: -10 }}
              >
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 neon-text">{product.title}</h3>
                  <p className="text-foreground/70">{product.description}</p>
                </div>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background pointer-events-none" />
        
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.h2 
                className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary neon-text"
                initial={{ opacity: 0, x: -50 }}
                animate={featuresInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Revolutionary Science
              </motion.h2>
              <motion.p
                className="text-lg text-foreground/80 mb-8"
                initial={{ opacity: 0, x: -50 }}
                animate={featuresInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Our products combine cutting-edge dermatological research with advanced biotechnology, 
                ensuring optimal results for your skin health and beauty.
              </motion.p>
              <motion.ul
                className="space-y-4"
                initial={{ opacity: 0, x: -50 }}
                animate={featuresInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {[
                  "AI-powered skin analysis",
                  "Nano-delivery systems",
                  "Bio-compatible formulations",
                  "Personalized solutions"
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center space-x-3"
                    whileHover={{ x: 10 }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={featuresInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1614859324967-bdf413c35a5b"
                  alt="Scientific Research"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              <motion.div
                className="absolute inset-0 border-2 border-primary/20 rounded-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
