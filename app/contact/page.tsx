'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/5">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary">
            Contact Us
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            We&apos;re here to help! Send us a message and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form Section */}
          <div className="group relative overflow-hidden rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/20 p-8
                       hover:shadow-lg hover:shadow-primary/20 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input id="name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea id="message" required className="min-h-[150px]" />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-8">
            <div className="group relative overflow-hidden rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/20 p-8
                         hover:shadow-lg hover:shadow-primary/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Get in Touch</h2>
                <div className="grid gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Email</h3>
                    <p className="text-foreground/80">support@dermalix.com</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Phone</h3>
                    <p className="text-foreground/80">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Business Hours</h3>
                    <p className="text-foreground/80">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Address</h3>
                    <div className="text-foreground/80">
                      <p>123 Skincare Boulevard</p>
                      <p>Suite 100</p>
                      <p>New York, NY 10001</p>
                      <p>United States</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="aspect-video relative overflow-hidden rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/20
                         hover:shadow-lg hover:shadow-primary/20 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5375391157!2d90.37215181744384!3d23.738993100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c782345c8eb9%3A0x2c3a375972e1f506!2seMartWay%20Skincare%20Limited!5e0!3m2!1sen!2sbd!4v1707922408043!5m2!1sen!2sbd"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary">
            Frequently Asked Questions
          </h2>
          {/* FAQSection */}
        </div>
      </div>
    </div>
  )
}
