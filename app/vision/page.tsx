import React from 'react';

export default function VisionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Our Vision</h1>
      
      <div className="space-y-6">
        <section className="space-y-4">
          <p className="text-lg leading-relaxed">
            Dermalix envisions a world where everyone has access to personalized, effective skincare 
            solutions that enhance their natural beauty and boost their confidence. We strive to be 
            at the forefront of dermatological innovation, setting new standards in the skincare industry.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Future Aspirations</h2>
          <div className="grid gap-6">
            <div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
              <h3 className="text-xl font-medium mb-3">Global Impact</h3>
              <p className="leading-relaxed">
                We aim to expand our reach globally, making advanced skincare solutions accessible 
                to diverse populations while respecting local skincare traditions and needs.
              </p>
            </div>
            
            <div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
              <h3 className="text-xl font-medium mb-3">Technological Innovation</h3>
              <p className="leading-relaxed">
                Leading the industry in incorporating cutting-edge technology and AI-driven 
                personalization in skincare product development and customer experience.
              </p>
            </div>
            
            <div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
              <h3 className="text-xl font-medium mb-3">Sustainability Leadership</h3>
              <p className="leading-relaxed">
                Setting new benchmarks for sustainable practices in the beauty industry, from 
                ingredient sourcing to packaging and distribution.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2025 Strategic Goals</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center space-x-3 p-4 bg-secondary/10 rounded-lg">
              <div className="text-2xl font-bold">100%</div>
              <p>Sustainable packaging materials</p>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-secondary/10 rounded-lg">
              <div className="text-2xl font-bold">50+</div>
              <p>Countries reached worldwide</p>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-secondary/10 rounded-lg">
              <div className="text-2xl font-bold">1M+</div>
              <p>Satisfied customers globally</p>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-secondary/10 rounded-lg">
              <div className="text-2xl font-bold">0%</div>
              <p>Carbon footprint by 2025</p>
            </div>
          </div>
        </section>

        <section className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Innovation Pipeline</h2>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>AI-powered skin analysis technology</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>Personalized formula customization</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>Biodegradable packaging solutions</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>Advanced delivery systems for active ingredients</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
