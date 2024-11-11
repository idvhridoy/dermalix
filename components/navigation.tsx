'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../lib/utils';
import { Button } from './ui/button';
import { ShoppingCart, Menu, X, ChevronDown, Search, User } from 'lucide-react';
import { useState, useEffect, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface MenuItem {
  label: string;
  href: string;
}

interface CategorySection {
  title: string;
  items: MenuItem[];
}

interface FeaturedItem {
  title: string;
  image: string;
  href: string;
}

interface MegaMenuContent {
  categories: CategorySection[];
  featured: FeaturedItem[];
}

interface MegaMenuData {
  [key: string]: MegaMenuContent;
}

interface Route {
  href?: string;
  label: string;
  megaMenu?: keyof MegaMenuData;
}

interface MegaMenuProps {
  content: MegaMenuContent;
  onClose: () => void;
}

const megaMenuContent: MegaMenuData = {
  products: {
    categories: [
      {
        title: 'Shop By Category',
        items: [
          { label: 'Cleansers', href: '/products/cleansers' },
          { label: 'Serums', href: '/products/serums' },
          { label: 'Moisturizers', href: '/products/moisturizers' },
          { label: 'Sunscreens', href: '/products/sunscreens' },
          { label: 'Treatments', href: '/products/treatments' },
        ]
      },
      {
        title: 'Shop By Concern',
        items: [
          { label: 'Acne & Breakouts', href: '/concerns/acne' },
          { label: 'Anti-Aging', href: '/concerns/aging' },
          { label: 'Brightening', href: '/concerns/brightening' },
          { label: 'Hydration', href: '/concerns/hydration' },
          { label: 'Sensitive Skin', href: '/concerns/sensitive' },
        ]
      }
    ],
    featured: [
      {
        title: 'Best Sellers',
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be',
        href: '/products/bestsellers'
      },
      {
        title: 'New Arrivals',
        image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19',
        href: '/products/new'
      }
    ]
  },
  about: {
    categories: [
      {
        title: 'Our Story',
        items: [
          { label: 'Overview', href: '/about' },
          { label: 'Mission', href: '/mission' },
          { label: 'Vision', href: '/vision' },
          { label: 'Goals', href: '/goals' },
          { label: 'Achievements', href: '/achievements' },
        ]
      },
      {
        title: 'Innovation',
        items: [
          { label: 'Research & Development', href: '/about/research' },
          { label: 'Technology', href: '/about/technology' },
          { label: 'Sustainability', href: '/about/sustainability' },
          { label: 'Clinical Studies', href: '/about/studies' },
        ]
      }
    ],
    featured: [
      {
        title: 'Our Lab',
        image: 'https://images.unsplash.com/photo-1582719471327-5bd41fcf7f7f?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        href: '/about/lab'
      }
    ]
  }
};

const routes: Route[] = [
  { href: '/', label: 'Home' },
  { label: 'Products', megaMenu: 'products' },
  { label: 'About', megaMenu: 'about' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
];

const MegaMenu: React.FC<MegaMenuProps> = ({ content, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute left-0 right-0 mt-2 bg-background/95 backdrop-blur-xl border-y border-primary/20 shadow-lg shadow-primary/10"
    >
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Categories */}
          <div className="col-span-8 grid grid-cols-2 gap-8">
            {content.categories.map((category, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-lg mb-4 text-primary">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIdx) => (
                    <motion.li
                      key={itemIdx}
                      whileHover={{ x: 5 }}
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      <Link href={item.href} onClick={onClose}>
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Items */}
          <div className="col-span-4">
            <div className="grid gap-4">
              {content.featured.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={onClose}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<keyof MegaMenuData | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Initialize scroll position on mount
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      setIsScrolled(window.scrollY > 0);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMegaMenu = (menuKey: keyof MegaMenuData | null) => {
    setActiveMegaMenu(menuKey);
  };

  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "backdrop-blur-xl bg-background/60 shadow-md shadow-primary/5" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative group">
            <motion.div 
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary neon-text"
              whileHover={{ scale: 1.05 }}
            >
              Dermalix
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {routes.map((route) => (
              <div
                key={route.label}
                onMouseEnter={() => route.megaMenu && toggleMegaMenu(route.megaMenu)}
                onMouseLeave={() => toggleMegaMenu(null)}
                className="relative py-8"
              >
                {route.href ? (
                  <Link
                    href={route.href}
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-primary',
                      pathname === route.href ? 'text-primary' : 'text-foreground/80'
                    )}
                  >
                    {route.label}
                  </Link>
                ) : (
                  <button
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-primary flex items-center space-x-1',
                      activeMegaMenu === route.megaMenu ? 'text-primary' : 'text-foreground/80'
                    )}
                  >
                    <span>{route.label}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                )}

                {/* Mega Menu */}
                <AnimatePresence>
                  {route.megaMenu && activeMegaMenu === route.megaMenu && (
                    <MegaMenu 
                      content={megaMenuContent[route.megaMenu]}
                      onClose={() => toggleMegaMenu(null)}
                    />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-primary/10"
            >
              <div className="space-y-4 py-4">
                {routes.map((route) => (
                  <div key={route.label}>
                    {route.href ? (
                      <Link
                        href={route.href}
                        className={cn(
                          'block px-4 py-2 text-sm font-medium transition-colors',
                          pathname === route.href ? 'text-primary' : 'text-foreground/80'
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {route.label}
                      </Link>
                    ) : (
                      <div className="space-y-2">
                        <button
                          className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-foreground/80"
                          onClick={() => route.megaMenu && toggleMegaMenu(activeMegaMenu === route.megaMenu ? null : route.megaMenu)}
                        >
                          <span>{route.label}</span>
                          <ChevronDown className={cn(
                            "h-4 w-4 transition-transform",
                            activeMegaMenu === route.megaMenu && "rotate-180"
                          )} />
                        </button>
                        <AnimatePresence>
                          {route.megaMenu && activeMegaMenu === route.megaMenu && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              className="overflow-hidden bg-primary/5"
                            >
                              <div className="px-6 py-4 space-y-4">
                                {megaMenuContent[route.megaMenu].categories.map((category, idx) => (
                                  <div key={idx}>
                                    <h3 className="font-medium text-primary mb-2">{category.title}</h3>
                                    <ul className="space-y-2">
                                      {category.items.map((item, itemIdx) => (
                                        <li key={itemIdx}>
                                          <Link
                                            href={item.href}
                                            className="text-sm text-foreground/80 hover:text-primary"
                                            onClick={() => {
                                              setIsOpen(false);
                                              toggleMegaMenu(null);
                                            }}
                                          >
                                            {item.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
