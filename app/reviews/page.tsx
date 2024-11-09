'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    name: "Sarah Johnson",
    initials: "SJ",
    rating: 5,
    product: "Anti-Aging Serum",
    review: "The anti-aging serum has made a remarkable difference in my skin's texture and appearance. After just a few weeks of use, I noticed significant improvement in fine lines."
  },
  {
    name: "Michael Parker",
    initials: "MP",
    rating: 5,
    product: "Hydrating Cream",
    review: "Finally found a moisturizer that doesn't irritate my sensitive skin. The hydrating cream is lightweight yet incredibly effective. My skin feels amazing!"
  },
  {
    name: "Emma Liu",
    initials: "EL",
    rating: 5,
    product: "Vitamin C Serum",
    review: "The vitamin C serum has completely transformed my skin. Dark spots have faded, and my complexion is noticeably brighter. Worth every penny!"
  },
  {
    name: "Robert Davis",
    initials: "RD",
    rating: 4,
    product: "Gentle Face Wash",
    review: "Great products overall. The face wash is gentle yet effective. Would love to see more options for combination skin in the future."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/5">
      <motion.div 
        className="container mx-auto px-4 py-16 max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary">
            Customer Reviews
          </h1>
          <div className="flex items-center justify-center space-x-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.svg
                key={star}
                className="w-8 h-8 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: star * 0.1 }}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </motion.svg>
            ))}
          </div>
          <motion.p 
            className="text-2xl font-medium mb-2"
            variants={itemVariants}
          >
            4.8 out of 5
          </motion.p>
          <motion.p 
            className="text-muted-foreground"
            variants={itemVariants}
          >
            Based on 1,482 verified reviews
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid gap-6 md:grid-cols-2"
          variants={containerVariants}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/20 p-6
                        hover:shadow-lg hover:shadow-primary/20 transition-all duration-500"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <motion.div 
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-lg font-semibold">{review.initials}</span>
                  </motion.div>
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <div className="flex space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <motion.svg
                          key={i}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          initial={{ rotate: -180, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </motion.svg>
                      ))}
                    </div>
                  </div>
                </div>
                <motion.p 
                  className="text-muted-foreground mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {review.review}
                </motion.p>
                <motion.p 
                  className="text-sm text-primary font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Verified Purchase - {review.product}
                </motion.p>
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
          <h2 className="text-2xl font-semibold mb-8 text-center">Customer Satisfaction</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { value: "98%", label: "Would recommend to friends" },
              { value: "95%", label: "Saw visible results" },
              { value: "92%", label: "Repeat customers" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
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
      </motion.div>
    </div>
  );
}
