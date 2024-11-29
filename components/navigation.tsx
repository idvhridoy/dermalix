'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../lib/utils';
import { Button } from './ui/button';
import { ShoppingCart, Menu, X, ChevronDown, Search, User, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
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
        image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800&h=600',
        href: '/about/team'
      },
      {
        title: 'Latest Research',
        href: '/about/clinical-studies',
        image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=800&h=600'
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
                <div className="relative h-48 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                    quality={85}
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

const mainNav = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'Concerns', href: '/concerns' },
  { 
    name: 'About',
    href: '/about',
    submenu: [
      { 
        name: 'Our Story',
        href: '/about/story',
        submenu: [
          { name: 'Overview', href: '/about/overview' },
          { name: 'Mission', href: '/about/mission' },
          { name: 'Vision', href: '/about/vision' },
          { name: 'Goals', href: '/about/goals' },
          { name: 'Achievements', href: '/about/achievements' },
          { name: 'Roadmap', href: '/about/roadmap' },
        ]
      },
      {
        name: 'Values',
        href: '/about/values',
      },
      {
        name: 'Innovation',
        href: '/about/innovation',
        submenu: [
          { name: 'Research & Development', href: '/about/research' },
          { name: 'Technology', href: '/about/technology' },
          { name: 'Clinical Studies', href: '/about/studies' },
        ]
      },
      { name: 'Sustainability', href: '/about/sustainability' },
      {
        name: 'Company',
        href: '/about/company',
        submenu: [
          { name: 'Team', href: '/about/team' },
          { name: 'Press', href: '/about/press' },
          { name: 'Careers', href: '/about/careers' },
          { name: 'Contact', href: '/about/contact' },
        ]
      },
    ]
  },
  { name: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset menus on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveMenu(null);
    setActiveSubmenu(null);
  }, [pathname]);

  const handleMenuClick = (itemName: string) => {
    if (activeMenu === itemName) {
      setActiveMenu(null);
      setActiveSubmenu(null);
    } else {
      setActiveMenu(itemName);
      setActiveSubmenu(null);
    }
  };

  const handleSubmenuClick = (itemName: string, subItemName: string, event: React.MouseEvent) => {
    event.stopPropagation();
    const menuKey = `${itemName}-${subItemName}`;
    if (activeSubmenu === menuKey) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(menuKey);
    }
  };

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-primary">
              The Dermalix
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {routes.map((route) => (
                <div
                  key={route.label}
                  className="relative"
                  onMouseEnter={() => route.megaMenu && setActiveMenu(route.megaMenu)}
                  onMouseLeave={() => setActiveMenu(null)}
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
                        activeMenu === route.megaMenu ? "text-primary" : "text-muted-foreground"
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
                      activeMenu === route.label ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
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
                  {route.megaMenu && activeMenu === route.megaMenu && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-7xl mx-auto">
                      <MegaMenu 
                        content={megaMenuContent[route.megaMenu]} 
                        onClose={() => setActiveMenu(null)}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Actions */}
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

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-4">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden overflow-hidden bg-background/95 backdrop-blur-lg border-t border-primary/10"
              >
                <div className="px-4 py-2 space-y-1">
                  {mainNav.map((item) => (
                    <div key={item.name}>
                      {item.submenu ? (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <button
                            onClick={() => handleMenuClick(item.name)}
                            className={`flex items-center justify-between w-full py-2 text-base font-medium transition-colors ${
                              pathname.startsWith(item.href) ? 'text-primary' : 'text-foreground/70'
                            }`}
                          >
                            {item.name}
                            <ChevronDown 
                              className={`w-4 h-4 transition-transform ${
                                activeMenu === item.name ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {activeMenu === item.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="pl-4 space-y-1"
                              >
                                {item.submenu.map((subItem) => (
                                  <motion.div
                                    key={subItem.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    {subItem.submenu ? (
                                      <div>
                                        <button
                                          onClick={(e) => handleSubmenuClick(item.name, subItem.name, e)}
                                          className={`flex items-center justify-between w-full py-2 text-sm transition-colors ${
                                            pathname.startsWith(subItem.href) ? 'text-primary' : 'text-foreground/70'
                                          }`}
                                        >
                                          <span className="flex items-center">
                                            <ChevronRight className="w-4 h-4 mr-2" />
                                            {subItem.name}
                                          </span>
                                          <ChevronDown 
                                            className={`w-3 h-3 transition-transform ${
                                              activeSubmenu === `${item.name}-${subItem.name}` ? 'rotate-180' : ''
                                            }`}
                                          />
                                        </button>
                                        <AnimatePresence>
                                          {activeSubmenu === `${item.name}-${subItem.name}` && (
                                            <motion.div
                                              initial={{ opacity: 0, height: 0 }}
                                              animate={{ opacity: 1, height: 'auto' }}
                                              exit={{ opacity: 0, height: 0 }}
                                              transition={{ duration: 0.2 }}
                                              className="pl-6 space-y-1"
                                            >
                                              {subItem.submenu.map((subSubItem) => (
                                                <motion.div
                                                  key={subSubItem.name}
                                                  initial={{ opacity: 0, x: -20 }}
                                                  animate={{ opacity: 1, x: 0 }}
                                                  transition={{ duration: 0.2 }}
                                                >
                                                  <Link
                                                    href={subSubItem.href}
                                                    className={`flex items-center py-2 text-sm transition-colors ${
                                                      pathname === subSubItem.href ? 'text-primary' : 'text-foreground/70'
                                                    }`}
                                                  >
                                                    <ChevronRight className="w-3 h-3 mr-2" />
                                                    {subSubItem.name}
                                                  </Link>
                                                </motion.div>
                                              ))}
                                            </motion.div>
                                          )}
                                        </AnimatePresence>
                                      </div>
                                    ) : (
                                      <Link
                                        href={subItem.href}
                                        className={`flex items-center py-2 text-sm transition-colors ${
                                          pathname === subItem.href ? 'text-primary' : 'text-foreground/70'
                                        }`}
                                      >
                                        <ChevronRight className="w-4 h-4 mr-2" />
                                        {subItem.name}
                                      </Link>
                                    )}
                                  </motion.div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link
                            href={item.href}
                            className={`block py-2 text-base font-medium transition-colors ${
                              pathname === item.href ? 'text-primary' : 'text-foreground/70'
                            }`}
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      )}
                    </div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className="pt-2 pb-3 border-t border-primary/10"
                  >
                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="sm" className="flex-1">
                        <Search className="h-4 w-4 mr-2" />
                        Search
                      </Button>
                      <Button variant="ghost" size="sm" className="flex-1">
                        <User className="h-4 w-4 mr-2" />
                        Account
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  );
}
