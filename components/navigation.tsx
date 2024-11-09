'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

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

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold">Dermalix</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {routes.map((route) => 
              route.children ? (
                <div key={route.label} className="relative group">
                  <button
                    className={cn(
                      'flex items-center space-x-1 transition-colors hover:text-foreground/80',
                      pathname?.startsWith('/about') ? 'text-foreground' : 'text-foreground/60'
                    )}
                    onClick={() => setIsAboutOpen(!isAboutOpen)}
                  >
                    <span>{route.label}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className={cn(
                    'absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-background border',
                    isAboutOpen ? 'block' : 'hidden'
                  )}>
                    <div className="py-1">
                      {route.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            'block px-4 py-2 text-sm',
                            pathname === child.href
                              ? 'bg-primary/5 text-foreground'
                              : 'text-foreground/60 hover:bg-primary/5'
                          )}
                          onClick={() => setIsAboutOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    'transition-colors hover:text-foreground/80',
                    pathname === route.href ? 'text-foreground' : 'text-foreground/60'
                  )}
                >
                  {route.label}
                </Link>
              )
            )}
          </nav>
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {routes.map((route) => 
              route.children ? (
                <div key={route.label}>
                  <button
                    className={cn(
                      'flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium',
                      pathname?.startsWith('/about')
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:bg-gray-50'
                    )}
                    onClick={() => setIsAboutOpen(!isAboutOpen)}
                  >
                    {route.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {isAboutOpen && (
                    <div className="pl-4">
                      {route.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            'block rounded-md px-3 py-2 text-base font-medium',
                            pathname === child.href
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-700 hover:bg-gray-50'
                          )}
                          onClick={() => {
                            setIsOpen(false);
                            setIsAboutOpen(false);
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    'block rounded-md px-3 py-2 text-base font-medium',
                    pathname === route.href
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {route.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
