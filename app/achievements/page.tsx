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

export default function AchievementsPage() {
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
            className="absolute w-1 h-16 bg-gradient-to-t from-primary/20 to-transparent rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3,
            }}
            animate={{
              height: [64, 96, 64],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 4,
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
            Our Achievements
          </h1>
          <motion.p 
            className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Celebrating milestones in our journey of innovation and excellence in skincare.
          </motion.p>
        </motion.div>

        <motion.section className="space-y-12">
          <div>
            <motion.h2 
              className="text-2xl font-semibold mb-8"
              variants={itemVariants}
            >
              Industry Recognition
            </motion.h2>
            <motion.div 
              className="grid gap-6 md:grid-cols-2"
              variants={containerVariants}
            >
              {[
                {
                  title: "Best Innovation Award",
                  event: "Skincare Excellence Awards 2023",
                  description: "Recognized for our breakthrough anti-aging formula incorporating advanced biotechnology.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )
                },
                {
                  title: "Sustainability Excellence",
                  event: "Green Business Awards 2023",
                  description: "Awarded for our commitment to eco-friendly packaging and sustainable manufacturing practices.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  )
                }
              ].map((award, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/20 p-8
                            hover:shadow-lg hover:shadow-primary/20 transition-all duration-500"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <motion.div 
                        className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        {award.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold">{award.title}</h3>
                        <p className="text-sm text-primary">{award.event}</p>
                      </div>
                    </div>
                    <p className="text-foreground/70">{award.description}</p>
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
          </div>

          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-8">Key Milestones</h2>
            <div className="space-y-6">
              {[
                {
                  year: "2023",
                  title: "Global Expansion",
                  description: "Successfully launched in 25 new international markets, reaching over 1 million customers worldwide."
                },
                {
                  year: "2022",
                  title: "Research Breakthrough",
                  description: "Patented our revolutionary skin renewal technology, setting new standards in anti-aging solutions."
                },
                {
                  year: "2021",
                  title: "Sustainability Initiative",
                  description: "Achieved 100% recyclable packaging across all product lines and carbon-neutral operations."
                }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-primary/20 last:pb-0"
                  variants={itemVariants}
                >
                  <motion.div 
                    className="absolute left-[-8px] w-4 h-4 bg-primary rounded-full"
                    whileHover={{ scale: 1.5 }}
                  />
                  <div className="mb-1">
                    <motion.span 
                      className="text-sm font-medium bg-primary/10 px-2 py-1 rounded"
                      whileHover={{ scale: 1.1 }}
                    >
                      {milestone.year}
                    </motion.span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-foreground/70">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section 
            className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-background to-purple-600/5 backdrop-blur-sm border border-primary/20"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-semibold mb-8 text-center">Impact Numbers</h2>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                { value: "1M+", label: "Happy Customers" },
                { value: "25+", label: "Countries Served" },
                { value: "15+", label: "Patents Secured" },
                { value: "100%", label: "Sustainable Packaging" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div 
                    className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 mb-2"
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
            className="text-center mt-16"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-semibold mb-4">Looking Forward</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              As we continue to grow and innovate, we remain committed to our core values of excellence, 
              sustainability, and customer satisfaction. Our achievements are just the beginning of our 
              journey to revolutionize skincare.
            </p>
          </motion.section>
        </motion.section>
      </motion.div>
    </div>
  );
}
