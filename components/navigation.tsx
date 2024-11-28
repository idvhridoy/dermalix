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
  const [isOpen, setIsOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveMegaMenu(null);
  }, [pathname]);

  const routes: Route[] = [
    { label: 'Home', href: '/' },
    {
      label: 'About',
      megaMenu: 'about'
    },
    {
      label: 'Products',
      href: '/products',
      children: [
        { label: 'All Products', href: '/products' },
        { label: 'Cleansers', href: '/products/cleansers' },
        { label: 'Serums', href: '/products/serums' },
        { label: 'Moisturizers', href: '/products/moisturizers' }
      ]
    },
    { label: 'Quiz', href: '/quiz' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-lg transition-all duration-200 z-50",
          isScrolled && "shadow-md"
        )}
      >
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Dermalix Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold">Dermalix</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {routes.map((route) => (
                <div
                  key={route.label}
                  className="relative"
                  onMouseEnter={() => route.megaMenu && setActiveMegaMenu(route.megaMenu)}
                  onMouseLeave={() => setActiveMegaMenu(null)}
                >
                  {route.href ? (
                    <Link
                      href={route.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        pathname === route.href ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      <span className="flex items-center gap-1">
                        {route.label}
                        {(route.megaMenu || route.children) && (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </span>
                    </Link>
                  ) : (
                    <button
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary flex items-center gap-1",
                        activeMegaMenu === route.megaMenu ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      {route.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  )}

                  {/* Dropdown for regular menu items */}
                  {route.children && !route.megaMenu && (
                    <div className={cn(
                      "absolute top-full left-0 w-48 bg-background border rounded-md shadow-lg py-2 transition-all duration-200",
                      activeMegaMenu === route.label ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
                    )}>
                      {route.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:bg-primary/5 hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Mega menu */}
                  {route.megaMenu && activeMegaMenu === route.megaMenu && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-7xl mx-auto">
                      <MegaMenu 
                        content={megaMenuContent[route.megaMenu]} 
                        onClose={() => setActiveMegaMenu(null)}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right side icons */}
            <div className="hidden md:flex items-center space-x-4">
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

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t"
            >
              <div className="container mx-auto px-4 py-4">
                {routes.map((route) => (
                  <div key={route.label}>
                    {route.href ? (
                      <Link
                        href={route.href}
                        className={cn(
                          "block py-2 text-base font-medium transition-colors hover:text-primary",
                          pathname === route.href ? "text-primary" : "text-muted-foreground"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {route.label}
                      </Link>
                    ) : (
                      <button
                        className="w-full text-left py-2 text-base font-medium text-muted-foreground hover:text-primary"
                        onClick={() => setActiveMegaMenu(route.megaMenu || null)}
                      >
                        {route.label}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      
      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  );
}
