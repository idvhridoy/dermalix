import React from 'react';

export default function GoalsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Our Goals</h1>
      
      <div className="space-y-8">
        <section className="space-y-4">
          <p className="text-lg leading-relaxed">
            At Dermalix, we set ambitious goals that drive our innovation, growth, and commitment 
            to excellence in skincare. Our objectives are designed to create lasting impact while 
            maintaining the highest standards of quality and sustainability.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Short-Term Goals (2024)</h2>
          <div className="grid gap-4">
            <div className="p-5 bg-primary/5 rounded-lg border border-primary/10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-medium">Product Innovation</h3>
                <span className="px-3 py-1 text-sm bg-primary/10 rounded-full">In Progress</span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="mt-1.5 w-2 h-2 bg-primary rounded-full"></span>
                  <span>Launch 5 new scientifically advanced skincare formulations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="mt-1.5 w-2 h-2 bg-primary rounded-full"></span>
                  <span>Develop custom packaging solutions with 80% less plastic</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="mt-1.5 w-2 h-2 bg-primary rounded-full"></span>
                  <span>Implement AI-driven skin analysis tool for personalized recommendations</span>
                </li>
              </ul>
            </div>

            <div className="p-5 bg-secondary/5 rounded-lg border border-secondary/10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-medium">Market Expansion</h3>
                <span className="px-3 py-1 text-sm bg-secondary/10 rounded-full">Ongoing</span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="mt-1.5 w-2 h-2 bg-secondary rounded-full"></span>
                  <span>Establish presence in 10 new international markets</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="mt-1.5 w-2 h-2 bg-secondary rounded-full"></span>
                  <span>Partner with 50+ dermatology clinics worldwide</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="mt-1.5 w-2 h-2 bg-secondary rounded-full"></span>
                  <span>Achieve 200% growth in online sales</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Long-Term Goals (2025-2027)</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Sustainability</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                  <span>Carbon Neutral Operations</span>
                  <span className="text-sm">2025</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                  <span>100% Renewable Energy</span>
                  <span className="text-sm">2026</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                  <span>Zero Waste Production</span>
                  <span className="text-sm">2027</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium">Research & Development</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                  <span>Advanced Biotech Lab</span>
                  <span className="text-sm">2025</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                  <span>Patent 10 New Technologies</span>
                  <span className="text-sm">2026</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                  <span>Global Research Center</span>
                  <span className="text-sm">2027</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Community Impact Goals</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4">
              <div className="text-3xl font-bold mb-2">1M+</div>
              <p>Lives improved through skincare education</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold mb-2">500K</div>
              <p>Trees planted through our green initiative</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold mb-2">100+</div>
              <p>Community skincare clinics supported</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
