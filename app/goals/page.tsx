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

export default function GoalsPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/5 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
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
            Our Goals
          </h1>
          <motion.p 
            className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Setting ambitious targets that drive our innovation, growth, and commitment to excellence in skincare.
          </motion.p>
        </motion.div>

        <motion.section className="space-y-12">
          <div>
            <motion.h2 
              className="text-2xl font-semibold mb-8 text-center"
              variants={itemVariants}
            >
              Short-Term Goals (2024)
            </motion.h2>
            <motion.div 
              className="grid gap-6 md:grid-cols-2"
              variants={containerVariants}
            >
              {[
                {
                  title: "Product Innovation",
                  status: "In Progress",
                  items: [
                    "Launch 5 new scientifically advanced formulations",
                    "Develop custom packaging solutions with 80% less plastic",
                    "Implement AI-driven skin analysis tool"
                  ],
                  gradient: "from-blue-500 to-primary"
                },
                {
                  title: "Market Expansion",
                  status: "Ongoing",
                  items: [
                    "Establish presence in 10 new international markets",
                    "Partner with 50+ dermatology clinics worldwide",
                    "Achieve 200% growth in online sales"
                  ],
                  gradient: "from-primary to-purple-600"
                }
              ].map((goal, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/20 p-8
                            hover:shadow-lg hover:shadow-primary/20 transition-all duration-500"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${goal.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">{goal.title}</h3>
                      <span className="px-3 py-1 text-sm bg-primary/10 rounded-full">{goal.status}</span>
                    </div>
                    <ul className="space-y-3">
                      {goal.items.map((item, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start space-x-3"
                          whileHover={{ x: 10 }}
                        >
                          <motion.span 
                            className="mt-1.5 w-2 h-2 bg-primary rounded-full"
                            whileHover={{ scale: 1.5 }}
                          />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <motion.div
                    className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${goal.gradient}`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-8 text-center">Long-Term Goals (2025-2027)</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div 
                className="space-y-4"
                variants={containerVariants}
              >
                <h3 className="text-xl font-semibold">Sustainability</h3>
                <div className="space-y-3">
                  {[
                    { goal: "Carbon Neutral Operations", year: "2025" },
                    { goal: "100% Renewable Energy", year: "2026" },
                    { goal: "Zero Waste Production", year: "2027" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="group flex items-center justify-between p-4 rounded-xl bg-green-50/5 border border-primary/10
                                hover:bg-primary/5 transition-all duration-300"
                      whileHover={{ x: 10, scale: 1.02 }}
                    >
                      <span>{item.goal}</span>
                      <span className="text-sm text-primary">{item.year}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="space-y-4"
                variants={containerVariants}
              >
                <h3 className="text-xl font-semibold">Research & Development</h3>
                <div className="space-y-3">
                  {[
                    { goal: "Advanced Biotech Lab", year: "2025" },
                    { goal: "Patent 10 New Technologies", year: "2026" },
                    { goal: "Global Research Center", year: "2027" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="group flex items-center justify-between p-4 rounded-xl bg-blue-50/5 border border-primary/10
                                hover:bg-primary/5 transition-all duration-300"
                      whileHover={{ x: 10, scale: 1.02 }}
                    >
                      <span>{item.goal}</span>
                      <span className="text-sm text-primary">{item.year}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.section>

          <motion.section 
            className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-background to-purple-600/5 backdrop-blur-sm border border-primary/20"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-semibold mb-8 text-center">Community Impact Goals</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { value: "1M+", label: "Lives improved through skincare education" },
                { value: "500K", label: "Trees planted through our green initiative" },
                { value: "100+", label: "Community skincare clinics supported" }
              ].map((impact, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {impact.value}
                  </motion.div>
                  <motion.p
                    className="text-foreground/70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                  >
                    {impact.label}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.section>
      </motion.div>
    </div>
  );
}
