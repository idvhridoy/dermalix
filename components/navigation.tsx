'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const routes = [
  { href: '/', label: 'Home' },
  {
    label: 'About',
    children: [
      { href: '/about', label: 'Overview' },
      { href: '/mission', label: 'Mission' },
      { href: '/vision', label: 'Vision' },
      { href: '/goals', label: 'Goals' },
      { href: '/achievements', label: 'Achievements' },
    ]
  },
  { href: '/products', label: 'Products' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
];

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3 }
  }
};

const dropdownVariants = {
  hidden: { 
    opacity: 0, 
    y: -10,
    clipPath: 'inset(0% 50% 100% 50% round 10px)'
  },
  visible: { 
    opacity: 1, 
    y: 0,
    clipPath: 'inset(0% 0% 0% 0% round 10px)',
    transition: {
      type: "spring",
      duration: 0.4,
      staggerChildren: 0.05
    }
  }
};

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="sticky top-0 z-50 w-full backdrop-blur-xl bg-background/60 border-b border-primary/20"
    >
      <div className="container mx-auto px-[10px]">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="relative group">
            <motion.div 
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary neon-text"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Dermalix
            </motion.div>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {routes.map((route) => 
              route.children ? (
                <motion.div key={route.label} className="relative group" variants={itemVariants}>
                  <button
                    className={cn(
                      'flex items-center space-x-1 transition-all duration-300 hover:text-primary group',
                      pathname?.startsWith('/about') ? 'text-primary neon-text' : 'text-foreground/80'
                    )}
                    onMouseEnter={() => setIsAboutOpen(true)}
                    onMouseLeave={() => setIsAboutOpen(false)}
                  >
                    <span>{route.label}</span>
                    <motion.div
                      animate={{ rotate: isAboutOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isAboutOpen && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                        className="absolute left-0 mt-2 w-48 rounded-xl backdrop-blur-xl bg-background/95 border border-primary/20 shadow-lg shadow-primary/20"
                        onMouseEnter={() => setIsAboutOpen(true)}
                        onMouseLeave={() => setIsAboutOpen(false)}
                      >
                        <div className="py-2">
                          {route.children.map((child) => (
                            <motion.div
                              key={child.href}
                              variants={itemVariants}
                              whileHover={{ x: 5 }}
                            >
                              <Link
                                href={child.href}
                                className={cn(
                                  'block px-4 py-2 text-sm transition-colors duration-200',
                                  pathname === child.href
                                    ? 'bg-primary/10 text-primary neon-text'
                                    : 'hover:bg-primary/5 hover:text-primary'
                                )}
                                onClick={() => setIsAboutOpen(false)}
                              >
                                {child.label}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div key={route.href} variants={itemVariants}>
                  <Link
                    href={route.href}
                    className={cn(
                      'relative group-item transition-colors duration-300',
                      pathname === route.href ? 'text-primary neon-text' : 'text-foreground/80 hover:text-primary'
                    )}
                  >
                    <span className="relative z-10">{route.label}</span>
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary/50 to-secondary/50 transform scale-x-0 group-item-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                </motion.div>
              )
            )}
          </nav>

          {/* Cart Button */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Button 
              variant="ghost" 
              size="icon"
              className="relative overflow-hidden group neon-border"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="relative z-10"
              >
                <ShoppingCart className="h-5 w-5 text-primary" />
              </motion.div>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="inline-flex items-center justify-center rounded-md p-2.5 text-primary md:hidden neon-border"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden backdrop-blur-xl bg-background/95"
            >
              <div className="space-y-1 px-2 pb-3 pt-2">
                {routes.map((route) => 
                  route.children ? (
                    <motion.div 
                      key={route.label}
                      variants={itemVariants}
                    >
                      <button
                        className={cn(
                          'flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium transition-colors duration-200',
                          pathname?.startsWith('/about')
                            ? 'bg-primary/10 text-primary neon-text'
                            : 'text-foreground/80 hover:bg-primary/5 hover:text-primary'
                        )}
                        onClick={() => setIsAboutOpen(!isAboutOpen)}
                      >
                        {route.label}
                        <motion.div
                          animate={{ rotate: isAboutOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {isAboutOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="pl-4"
                          >
                            {route.children.map((child) => (
                              <motion.div
                                key={child.href}
                                variants={itemVariants}
                                whileHover={{ x: 5 }}
                              >
                                <Link
                                  href={child.href}
                                  className={cn(
                                    'block rounded-md px-3 py-2 text-base font-medium transition-colors duration-200',
                                    pathname === child.href
                                      ? 'bg-primary/10 text-primary neon-text'
                                      : 'text-foreground/80 hover:bg-primary/5 hover:text-primary'
                                  )}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setIsAboutOpen(false);
                                  }}
                                >
                                  {child.label}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={route.href}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                    >
                      <Link
                        href={route.href}
                        className={cn(
                          'block rounded-md px-3 py-2 text-base font-medium transition-colors duration-200',
                          pathname === route.href
                            ? 'bg-primary/10 text-primary neon-text'
                            : 'text-foreground/80 hover:bg-primary/5 hover:text-primary'
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {route.label}
                      </Link>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
