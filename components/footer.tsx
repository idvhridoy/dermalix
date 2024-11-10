'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 }
  }
};

export function Footer() {
  return (
    <motion.footer 
      className="relative mt-16 border-t border-primary/20 backdrop-blur-xl bg-background/60"
      initial="hidden"
      whileInView="visible"
      variants={footerVariants}
      viewport={{ once: true }}
    >
      {/* Neon Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50" />

      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary neon-text">
              Dermalix
            </h3>
            <p className="text-sm text-foreground/70">
              Revolutionizing skincare through science and innovation. Your journey to radiant skin begins here.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Youtube, href: '#' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-foreground/70 hover:text-primary transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-primary neon-text">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Products', href: '/products' },
                { label: 'Reviews', href: '/reviews' },
                { label: 'Contact', href: '/contact' }
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-primary neon-text">Legal</h3>
            <ul className="space-y-2">
              {[
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms & Conditions', href: '/terms-conditions' },
                { label: 'Shipping Policy', href: '#' },
                { label: 'Return Policy', href: '#' }
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-primary neon-text">Contact Us</h3>
            <ul className="space-y-3">
              {[
                { icon: Mail, content: 'contact@dermalix.com' },
                { icon: Phone, content: '+1 (555) 123-4567' },
                { icon: MapPin, content: '123 Innovation Drive, Tech City, TC 12345' }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start space-x-2 text-sm text-foreground/70"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon className="w-4 h-4 mt-1 text-primary" />
                  <span>{item.content}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-primary/20 text-center"
        >
          <p className="text-sm text-foreground/50">
            © 2024 Dermalix. All rights reserved. 
            <span className="mx-2">|</span>
            Crafted with 
            <motion.span
              className="inline-block text-primary mx-1"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ♥
            </motion.span>
            for better skin
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
