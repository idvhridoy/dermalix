'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { InteractiveParticles } from '@/components/interactive-particles';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star, ArrowRight, Brain, Sparkles, Zap, Timer, Sun, Shield, Droplet, BadgeAlert } from 'lucide-react';
import { useState, useEffect } from 'react';
import { MouseTrailEffect } from '@/components/mouse-trail-effect';

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
  { 
    name: 'Acne & Breakouts', 
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15',  
    href: '/concerns/acne' 
  },
  { 
    name: 'Anti-Aging', 
    image: 'https://images.unsplash.com/photo-1601412436009-d964bd02edbc',  
    href: '/concerns/aging' 
  },
  { 
    name: 'Hyperpigmentation', 
    image: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072',  
    href: '/concerns/pigmentation' 
  },
  { 
    name: 'Sensitive Skin', 
    image: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53',  
    href: '/concerns/sensitive' 
  },
  { 
    name: 'Dryness', 
    image: 'https://images.unsplash.com/photo-1523263685509-57c1d050d19b',  
    href: '/concerns/dryness' 
  },
  { 
    name: 'Oily Skin', 
    image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70',
    href: '/concerns/oily' 
  },
];

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Skincare Enthusiast",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    review: "The anti-aging serum has transformed my skin completely. Fine lines have visibly reduced, and my skin feels so much firmer!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Professional Model",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    review: "As a model, my skin needs to look perfect. Dermalix products have become an essential part of my daily routine. The results are amazing!",
    rating: 5
  },
  {
    name: "Emma Thompson",
    role: "Beauty Blogger",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    review: "I've tried countless skincare products, but Dermalix stands out. Their natural ingredients and scientific approach really deliver results.",
    rating: 5
  },
  {
    name: "David Rodriguez",
    role: "Dermatologist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    review: "I recommend Dermalix to my patients. The formulations are backed by science, and the results speak for themselves.",
    rating: 5
  },
  {
    name: "Sophia Kim",
    role: "Makeup Artist",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
    review: "My clients always ask about my skincare secrets. Dermalix products create the perfect canvas for makeup application.",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "Fitness Trainer",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
    review: "The post-workout recovery cream is incredible. It keeps my skin healthy and fresh even after intense training sessions.",
    rating: 5
  },
  {
    name: "Olivia Martinez",
    role: "Yoga Instructor",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    review: "The natural ingredients align perfectly with my holistic lifestyle. My skin has never felt more balanced and radiant.",
    rating: 5
  },
  {
    name: "Alexander Lee",
    role: "Tech Executive",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    review: "Working long hours in air-conditioned offices was tough on my skin. Dermalix's hydrating line has been a game-changer.",
    rating: 5
  },
  {
    name: "Isabella Rossi",
    role: "Fashion Designer",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
    review: "The attention to detail in these products is remarkable. From packaging to performance, everything is simply luxurious.",
    rating: 5
  }
];

const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1621798744997-3c56ee0d54b7',
    alt: 'Woman with glowing skin close-up'
  },
  {
    url: 'https://images.unsplash.com/photo-1605462863863-10d9e47e15ee',
    alt: 'Luxury skincare products on marble'
  },
  {
    url: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9',
    alt: 'Woman applying face cream'
  },
  {
    url: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273',
    alt: 'Close-up of woman with perfect skin'
  },
  {
    url: 'https://images.unsplash.com/photo-1597931752949-98c74b5b159f',
    alt: 'Natural skincare ingredients'
  },
  {
    url: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c',
    alt: 'Woman with radiant skin'
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev >= 6) return 0;
        return prev + 3;
      });
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    if (currentIndex < 6) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  // Next slide function
  const nextHeroSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  // Previous slide function
  const prevHeroSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  // Auto-slide functionality for hero section
  useEffect(() => {
    const timer = setInterval(nextHeroSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <MouseTrailEffect />
      <InteractiveParticles />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="min-h-[70vh] relative flex items-center overflow-hidden"
      >
        {/* Background Slider */}
        <div className="absolute inset-0">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ 
                duration: 0.7,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="relative w-full h-full"
            >
              <Image
                src={heroImages[currentSlide].url}
                alt={heroImages[currentSlide].alt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/50 to-background/95" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content */}
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

        {/* Arrow Controls */}
        <button
          onClick={prevHeroSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 border border-primary/20 
                   hover:bg-background hover:border-primary/40 transition-all duration-300 backdrop-blur-sm
                   group z-20"
          aria-label="Previous slide"
        >
          <ChevronRight className="w-6 h-6 rotate-180 text-primary group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button
          onClick={nextHeroSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 border border-primary/20 
                   hover:bg-background hover:border-primary/40 transition-all duration-300 backdrop-blur-sm
                   group z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-primary group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-8 bg-primary' 
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
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
                className="group relative p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition-colors overflow-hidden"
              >
                <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={concern.image}
                    alt={concern.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-medium mb-2 text-center">{concern.name}</h3>
                <Button variant="ghost" className="w-full group-hover:text-primary">
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
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
                    className="object-cover"
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
                    className="object-cover"
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
                Get personalized skincare recommendations based on advanced AI analysis of your skin's unique characteristics.
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
                src="https://plus.unsplash.com/premium_photo-1683121718643-fb18d2668d53?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        className="py-20 bg-background/50 backdrop-blur-sm overflow-hidden"
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

          <div className="relative">
            <motion.div
              className="flex transition-all duration-500 ease-in-out"
              animate={{
                x: `${-currentIndex * 33.333}%`
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {reviews.map((review, index) => (
                <motion.div
                  key={review.name}
                  className="w-1/3 flex-shrink-0 px-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={reviewsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-background/80 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 h-full">
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
                        <p className="text-sm text-muted-foreground">{review.role}</p>
                        <div className="flex">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-foreground/70">{review.review}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * 3)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / 3) === index 
                      ? 'bg-primary w-4' 
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to review group ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 border border-primary/20 
                       hover:bg-background hover:border-primary/40 transition-all duration-300"
              disabled={currentIndex === 0}
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 border border-primary/20 
                       hover:bg-background hover:border-primary/40 transition-all duration-300"
              disabled={currentIndex >= 6}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
