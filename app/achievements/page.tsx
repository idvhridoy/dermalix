import React from 'react';

export default function AchievementsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Our Achievements</h1>
      
      <div className="space-y-8">
        <section className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-lg leading-relaxed">
            Since our inception, Dermalix has been committed to excellence in skincare innovation. 
            Our achievements reflect our dedication to quality, sustainability, and customer satisfaction.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Industry Recognition</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Best Innovation Award</h3>
                  <p className="text-sm text-muted-foreground">Skincare Excellence Awards 2023</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Recognized for our breakthrough anti-aging formula incorporating advanced biotechnology.
              </p>
            </div>

            <div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Sustainability Excellence</h3>
                  <p className="text-sm text-muted-foreground">Green Business Awards 2023</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Awarded for our commitment to eco-friendly packaging and sustainable manufacturing practices.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Key Milestones</h2>
          <div className="space-y-4">
            <div className="relative pl-8 pb-8 border-l-2 border-primary/20">
              <div className="absolute left-[-8px] w-4 h-4 bg-primary rounded-full"></div>
              <div className="mb-1">
                <span className="text-sm font-medium bg-primary/10 px-2 py-1 rounded">2023</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Expansion</h3>
              <p className="text-muted-foreground">
                Successfully launched in 25 new international markets, reaching over 1 million customers worldwide.
              </p>
            </div>

            <div className="relative pl-8 pb-8 border-l-2 border-primary/20">
              <div className="absolute left-[-8px] w-4 h-4 bg-primary rounded-full"></div>
              <div className="mb-1">
                <span className="text-sm font-medium bg-primary/10 px-2 py-1 rounded">2022</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Research Breakthrough</h3>
              <p className="text-muted-foreground">
                Patented our revolutionary skin renewal technology, setting new standards in anti-aging solutions.
              </p>
            </div>

            <div className="relative pl-8 pb-8 border-l-2 border-primary/20">
              <div className="absolute left-[-8px] w-4 h-4 bg-primary rounded-full"></div>
              <div className="mb-1">
                <span className="text-sm font-medium bg-primary/10 px-2 py-1 rounded">2021</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability Initiative</h3>
              <p className="text-muted-foreground">
                Achieved 100% recyclable packaging across all product lines and carbon-neutral operations.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Impact Numbers</h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1M+</div>
              <p className="text-sm">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25+</div>
              <p className="text-sm">Countries Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <p className="text-sm">Patents Secured</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-sm">Sustainable Packaging</p>
            </div>
          </div>
        </section>

        <section className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Looking Forward</h2>
          <p className="text-lg leading-relaxed">
            As we continue to grow and innovate, we remain committed to our core values of excellence, 
            sustainability, and customer satisfaction. Our achievements are just the beginning of our 
            journey to revolutionize skincare.
          </p>
        </section>
      </div>
    </div>
  );
}
