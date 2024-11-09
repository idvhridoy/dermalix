'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <motion.section 
        className="min-h-screen relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-primary/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            style={{ opacity, scale, y }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform Your Skin
              <br />
              <span className="text-foreground">With Science</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-foreground/80 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experience the future of skincare with our advanced dermatological solutions
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white font-semibold text-lg 
                          hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Products
              </motion.button>
              <motion.button
                className="px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold text-lg 
                          hover:bg-primary/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Product Cards */}
        <div className="container mx-auto px-4 pb-32">
          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              {
                title: "Anti-Aging Serum",
                description: "Advanced formula with retinol and peptides",
                gradient: "from-blue-500 to-purple-500"
              },
              {
                title: "Hydrating Cream",
                description: "24-hour moisture with hyaluronic acid",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "Vitamin C Complex",
                description: "Brightening and antioxidant protection",
                gradient: "from-pink-500 to-red-500"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/20 p-6
                          hover:shadow-lg hover:shadow-primary/20 transition-all duration-500"
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                     style={{
                       backgroundImage: `linear-gradient(to bottom right, var(--${product.gradient}))`
                     }} />
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-foreground/70">{product.description}</p>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    backgroundImage: `linear-gradient(to right, var(--${product.gradient}))`
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h2 
                className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Science-Backed Innovation
              </motion.h2>
              <motion.p
                className="text-lg text-foreground/80 mb-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Our products are developed using cutting-edge dermatological research and advanced biotechnology, 
                ensuring optimal results for your skin health and beauty.
              </motion.p>
              <motion.ul
                className="space-y-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {[
                  "Clinically proven ingredients",
                  "Advanced delivery systems",
                  "Sustainable formulations",
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
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square rounded-full bg-gradient-to-br from-primary/20 to-purple-600/20 animate-pulse" />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full border-2 border-primary/20 rounded-full" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
