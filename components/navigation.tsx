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
  megaMenu?: string;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

interface MegaMenuProps {
  content: MegaMenuContent;
  onClose: () => void;
}

const megaMenuContent: Record<string, MegaMenuContent> = {
  about: {
    categories: [
      {
        title: 'Our Story',
        items: [
          { label: 'Overview', href: '/about' },
          { label: 'Mission', href: '/about/mission' },
          { label: 'Vision', href: '/about/vision' },
          { label: 'Goals', href: '/about/goals' },
          { label: 'Achievements', href: '/about/achievements' },
          { label: 'Roadmap', href: '/about/roadmap' },
          { label: 'Values', href: '/about/values' }
        ]
      },
      {
        title: 'Innovation',
        items: [
          { label: 'Research & Development', href: '/about/research' },
          { label: 'Technology', href: '/about/technology' },
          { label: 'Clinical Studies', href: '/about/clinical-studies' },
          { label: 'Sustainability', href: '/about/sustainability' }
        ]
      },
      {
        title: 'Company',
        items: [
          { label: 'Team', href: '/about/team' },
          { label: 'Press', href: '/about/press' },
          { label: 'Careers', href: '/about/careers' },
          { label: 'Contact', href: '/about/contact' }
        ]
      }
    ],
    featured: [
      {
        title: 'Meet Our Team',
        image: '/images/featured/team-lab.jpg',
        href: '/about/team'
      },
      {
        title: 'Latest Research',
        href: '/about/clinical-studies',
        image: '/images/featured/research-lab.jpg'
      }
    ]
  }
};

const routes: Route[] = [
  { href: '/', label: 'Home' },
  { 
    label: 'Products',
    children: [
      {
        label: 'Acne Treatment Serum',
        href: '/products/acne-treatment-serum',
        description: 'Salicylic Acid 2% & Niacinamide 2% for effective acne control'
      },
      {
        label: 'Brightening Serum',
        href: '/products/brightening-serum',
        description: 'Alpha Arbutin 2% & Niacinamide 2% for radiant skin'
      }
    ]
  },
  { label: 'About', megaMenu: 'about' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

const MegaMenu: React.FC<MegaMenuProps> = ({ content, onClose }) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm border-y border-primary/10 shadow-lg z-50"
    >
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-12 gap-8">
          {/* Categories Section - 9 columns */}
          <div className="col-span-9 grid grid-cols-3 gap-8">
            {content.categories.map((category, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground/90">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <Link
                        href={item.href}
                        onClick={handleLinkClick}
                        className="text-foreground/70 hover:text-primary transition-colors block py-1.5"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Section - 3 columns */}
          <div className="col-span-3 space-y-6">
            {content.featured.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={handleLinkClick}
                className="block group relative overflow-hidden rounded-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4">
                    <h4 className="text-lg font-semibold text-white group-hover:text-blue-200 transition-colors duration-300">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mega menu when route changes
  useEffect(() => {
    setActiveMegaMenu(null);
  }, [pathname]);

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

  const toggleMegaMenu = (menuKey: string | null) => {
    if (activeMegaMenu === menuKey) {
      setActiveMegaMenu(null);
    } else {
      setActiveMegaMenu(menuKey);
    }
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
            {routes.map((route, idx) => (
              <div key={idx} className="relative group">
                {route.href ? (
                  <Link
                    href={route.href}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  >
                    {route.label}
                  </Link>
                ) : route.children ? (
                  <div>
                    <button
                      className="flex items-center text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                      onClick={() => route.megaMenu && toggleMegaMenu(route.megaMenu)}
                    >
                      {route.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-background/95 backdrop-blur-sm border border-primary/10 rounded-lg shadow-lg p-4 min-w-[200px]">
                        {route.children.map((child, childIdx) => (
                          <Link
                            key={childIdx}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                          >
                            <div className="font-medium">{child.label}</div>
                            {child.description && (
                              <div className="text-xs text-foreground/60 mt-1">{child.description}</div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : route.megaMenu ? (
                  <button
                    className="flex items-center text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                    onClick={() => toggleMegaMenu(route.megaMenu)}
                  >
                    {route.label}
                    <ChevronDown className={cn(
                      "ml-1 h-4 w-4 transition-transform duration-200",
                      activeMegaMenu === route.megaMenu ? "rotate-180" : ""
                    )} />
                  </button>
                ) : null}

                {route.megaMenu && activeMegaMenu === route.megaMenu && (
                  <AnimatePresence>
                    <MegaMenu
                      content={megaMenuContent[route.megaMenu]}
                      onClose={() => toggleMegaMenu(null)}
                    />
                  </AnimatePresence>
                )}
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
