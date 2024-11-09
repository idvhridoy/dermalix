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

export default function MissionPage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/5">
      <motion.div 
        className="container mx-auto px-4 py-16 max-w-4xl"
        style={{ opacity, scale }}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary">
            Our Mission
          </h1>
          <motion.p 
            className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            At Dermalix, our mission is to revolutionize skincare through innovative, 
            science-backed solutions that enhance and protect the natural beauty of every individual.
          </motion.p>
        </motion.div>

        <motion.section className="space-y-12">
          <motion.div 
            className="grid gap-8 md:grid-cols-2"
            variants={containerVariants}
          >
            {[
              {
                title: "Innovation",
                description: "Continuously researching and developing breakthrough formulations that address diverse skin concerns.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Quality",
                description: "Maintaining the highest standards in ingredient selection and manufacturing processes.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Sustainability",
                description: "Implementing eco-friendly practices throughout our production and packaging processes.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                )
              },
              {
                title: "Accessibility",
                description: "Making advanced skincare solutions accessible to people from all walks of life.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              }
            ].map((commitment, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/20 p-8
                          hover:shadow-lg hover:shadow-primary/20 transition-all duration-500"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <motion.div 
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    {commitment.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{commitment.title}</h3>
                  <p className="text-foreground/70">{commitment.description}</p>
                </div>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-600"
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
            <h2 className="text-2xl font-semibold mb-6">Our Approach</h2>
            <div className="space-y-4">
              {[
                "Scientific research and clinical testing",
                "Natural and sustainable ingredients",
                "Customer education and support",
                "Continuous product improvement based on feedback",
                "Ethical business practices"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-primary/5 transition-colors duration-300"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.span 
                    className="w-2 h-2 bg-primary rounded-full"
                    whileHover={{ scale: 1.5 }}
                  />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section 
            className="text-center mt-16"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-semibold mb-6">Join Our Journey</h2>
            <motion.p 
              className="text-lg text-foreground/80 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              We invite you to be part of our mission to transform the skincare industry. 
              Together, we can create a future where everyone has access to effective, 
              sustainable, and scientifically-proven skincare solutions.
            </motion.p>
            <motion.button
              className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white font-semibold
                        hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Our Impact
            </motion.button>
          </motion.section>
        </motion.section>
      </motion.div>
    </div>
  );
}
