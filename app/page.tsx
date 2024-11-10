'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { InteractiveParticles } from '@/components/interactive-particles';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star, ArrowRight, Brain, Sparkles } from 'lucide-react';

const categories = [
  { name: 'Cleansers', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03', href: '/products/cleansers' },
  { name: 'Serums', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be', href: '/products/serums' },
  { name: 'Moisturizers', image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19', href: '/products/moisturizers' },
  { name: 'Treatments', image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b', href: '/products/treatments' },
];

const topProducts = [
  {
    name: 'Vitamin C Brightening Serum',
    description: 'Advanced formula for radiant skin',
    price: '$49.99',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be',
    rating: 4.9,
    reviews: 128
  },
  {
    name: 'Hyaluronic Acid Moisturizer',
    description: '24-hour hydration boost',
    price: '$39.99',
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19',
    rating: 4.8,
    reviews: 96
  },
  {
    name: 'Retinol Night Cream',
    description: 'Anti-aging overnight treatment',
    price: '$59.99',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b',
    rating: 4.7,
    reviews: 156
  }
];

const concerns = [
  { name: 'Acne & Breakouts', icon: '🔍', href: '/concerns/acne' },
  { name: 'Anti-Aging', icon: '✨', href: '/concerns/aging' },
  { name: 'Hyperpigmentation', icon: '🌟', href: '/concerns/pigmentation' },
  { name: 'Sensitive Skin', icon: '🌸', href: '/concerns/sensitive' },
  { name: 'Dryness', icon: '💧', href: '/concerns/dryness' },
  { name: 'Oily Skin', icon: '🍃', href: '/concerns/oily' },
];

const reviews = [
  {
    name: 'Sarah M.',
    rating: 5,
    comment: 'Amazing results! My skin has never looked better.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
  },
  {
    name: 'Michael R.',
    rating: 5,
    comment: 'The products are worth every penny. Seeing great improvements!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
  },
  {
    name: 'Emma L.',
    rating: 5,
    comment: 'Finally found products that work for my sensitive skin.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb'
  }
];

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [categoriesRef, categoriesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [productsRef, productsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [concernsRef, concernsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aiRef, aiInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [reviewsRef, reviewsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="relative">
      <InteractiveParticles />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="min-h-[90vh] relative flex items-center overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary">
              Transform Your Skin
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8">
              Advanced skincare solutions backed by science
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Shop Now
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Take Skin Quiz
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section
        ref={categoriesRef}
        className="py-20 bg-background/50 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Shop By Category</h2>
            <p className="text-foreground/70">Find the perfect products for your skincare routine</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="relative h-80">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-semibold text-white mb-2">{category.name}</h3>
                    <Button variant="ghost" className="text-white group-hover:translate-x-2 transition-transform">
                      Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Products Section */}
      <section
        ref={productsRef}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={productsInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Best Sellers</h2>
            <p className="text-foreground/70">Our most loved products</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={productsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="group bg-background/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary/10"
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-foreground/70 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold">{product.price}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="ml-1 text-sm">{product.rating}</span>
                      <span className="ml-1 text-sm text-foreground/70">({product.reviews})</span>
                    </div>
                  </div>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Concern Section */}
      <section
        ref={concernsRef}
        className="py-20 bg-background/50 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={concernsInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Shop by Concern</h2>
            <p className="text-foreground/70">Target your specific skincare needs</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {concerns.map((concern, index) => (
              <motion.div
                key={concern.name}
                initial={{ opacity: 0, y: 20 }}
                animate={concernsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="group relative p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <div className="text-3xl mb-4">{concern.icon}</div>
                <h3 className="text-lg font-medium mb-2">{concern.name}</h3>
                <Button variant="ghost" className="w-full group-hover:text-primary">
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Skin Analysis Section */}
      <section
        ref={aiRef}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={aiInView ? { opacity: 1, x: 0 } : {}}
            >
              <h2 className="text-3xl font-bold mb-6">AI-Powered Skin Analysis</h2>
              <p className="text-foreground/70 mb-8">
                Get personalized skincare recommendations based on advanced AI analysis of your skin&apos;s unique characteristics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  <Brain className="mr-2 h-5 w-5" />
                  Start Analysis
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={aiInView ? { opacity: 1, x: 0 } : {}}
              className="relative h-[500px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1614859324967-bdf413c35a5b"
                alt="AI Skin Analysis"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section
        ref={reviewsRef}
        className="py-20 bg-background/50 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={reviewsInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-foreground/70">Real results from real people</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                animate={reviewsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-background/80 backdrop-blur-sm p-6 rounded-2xl border border-primary/10"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <div className="flex">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-foreground/70">{review.comment}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
