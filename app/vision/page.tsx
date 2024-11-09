'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function VisionPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/5 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-20 bg-gradient-to-b from-primary/20 to-transparent rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3,
            }}
            animate={{
              y: [0, 100, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="container mx-auto px-4 py-16 max-w-4xl relative z-10"
        style={{ y, opacity }}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary">
            Our Vision
          </h1>
          <motion.p 
            className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Dermalix envisions a world where everyone has access to personalized, effective skincare 
            solutions that enhance their natural beauty and boost their confidence.
          </motion.p>
        </motion.div>

        <motion.section className="space-y-12">
          <motion.div 
            className="grid gap-8"
            variants={containerVariants}
          >
            {[
              {
                title: "Global Impact",
                description: "We aim to expand our reach globally, making advanced skincare solutions accessible to diverse populations while respecting local skincare traditions and needs.",
                gradient: "from-blue-500 to-primary"
              },
              {
                title: "Technological Innovation",
                description: "Leading the industry in incorporating cutting-edge technology and AI-driven personalization in skincare product development and customer experience.",
                gradient: "from-primary to-purple-600"
              },
              {
                title: "Sustainability Leadership",
                description: "Setting new benchmarks for sustainable practices in the beauty industry, from ingredient sourcing to packaging and distribution.",
                gradient: "from-purple-600 to-pink-500"
              }
            ].map((aspiration, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/20 p-8
                          hover:shadow-lg hover:shadow-primary/20 transition-all duration-500"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${aspiration.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <motion.h3 
                    className="text-2xl font-semibold mb-4"
                    whileHover={{ x: 10 }}
                  >
                    {aspiration.title}
                  </motion.h3>
                  <p className="text-foreground/70 text-lg">{aspiration.description}</p>
                </div>
                <motion.div
                  className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${aspiration.gradient}`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.section 
            className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-background to-purple-600/5 backdrop-blur-sm border border-primary/20"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-semibold mb-8 text-center">2025 Strategic Goals</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { value: "100%", label: "Sustainable packaging materials" },
                { value: "50+", label: "Countries reached worldwide" },
                { value: "1M+", label: "Satisfied customers globally" },
                { value: "0%", label: "Carbon footprint by 2025" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-xl p-6 bg-background/30 border border-primary/10
                            hover:bg-primary/5 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {stat.value}
                  </motion.div>
                  <motion.p
                    className="text-foreground/70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                  >
                    {stat.label}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section 
            className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-background to-purple-600/5 backdrop-blur-sm border border-primary/20"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-semibold mb-6">Innovation Pipeline</h2>
            <div className="space-y-4">
              {[
                "AI-powered skin analysis technology",
                "Personalized formula customization",
                "Biodegradable packaging solutions",
                "Advanced delivery systems for active ingredients"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-primary/5 transition-colors duration-300"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-primary rounded-full"
                    whileHover={{ scale: 1.5 }}
                  />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.div 
            className="text-center mt-16"
            variants={itemVariants}
          >
            <motion.button
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white font-semibold
                        hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Vision
            </motion.button>
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
}
