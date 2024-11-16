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
    setIsOpen(false);
    setActiveMegaMenu(null);
  }, [pathname]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300 
        ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/logo.svg" 
              alt="Dermalix Logo" 
              width={40} 
              height={40} 
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-foreground">Dermalix</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {routes.map((route, index) => (
              <div 
                key={index} 
                className="relative group"
                onMouseEnter={() => route.megaMenu && setActiveMegaMenu(route.megaMenu)}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <Link 
                  href={route.href || '#'}
                  className={cn(
                    "text-foreground/70 hover:text-primary transition-colors",
                    pathname === route.href && "text-primary font-semibold"
                  )}
                >
                  {route.label}
                  {route.children && <ChevronDown className="inline-block ml-1 w-4 h-4" />}
                </Link>
                
                {route.megaMenu && activeMegaMenu === route.megaMenu && (
                  <AnimatePresence>
                    <MegaMenu 
                      content={megaMenuContent[route.megaMenu]} 
                      onClose={() => setActiveMegaMenu(null)} 
                    />
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              className={`
                fixed top-4 right-4 z-60 
                bg-background/80 backdrop-blur-md 
                hover:bg-primary/10 
                w-12 h-12 rounded-full 
                shadow-lg 
                transition-all duration-300
                ${isOpen ? 'rotate-90' : ''}
              `}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-background/95 backdrop-blur-md z-40 lg:hidden"
              >
                <div className="container mx-auto px-4 py-8 mt-16">
                  <div className="space-y-4">
                    {routes.map((route, index) => (
                      <div key={index} className="border-b border-foreground/10 pb-4">
                        {route.children ? (
                          <div>
                            <div 
                              className="flex items-center justify-between text-xl font-semibold text-foreground/90"
                              onClick={() => setActiveMegaMenu(
                                activeMegaMenu === route.megaMenu ? null : route.megaMenu
                              )}
                            >
                              {route.label}
                              <ChevronDown 
                                className={`
                                  w-6 h-6 transition-transform 
                                  ${activeMegaMenu === route.megaMenu ? 'rotate-180' : ''}
                                `} 
                              />
                            </div>
                            {activeMegaMenu === route.megaMenu && (
                              <div className="mt-4 space-y-3">
                                {route.children.map((child, childIndex) => (
                                  <Link
                                    key={childIndex}
                                    href={child.href}
                                    onClick={closeMobileMenu}
                                    className="block py-2 text-foreground/70 hover:text-primary"
                                  >
                                    {child.label}
                                    {child.description && (
                                      <p className="text-sm text-foreground/50 mt-1">
                                        {child.description}
                                      </p>
                                    )}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            href={route.href || '#'}
                            onClick={closeMobileMenu}
                            className="block text-xl font-semibold text-foreground/90 hover:text-primary"
                          >
                            {route.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
