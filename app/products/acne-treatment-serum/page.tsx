'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function AcneTreatmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/5">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary">
              Acne Treatment Serum
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Salicylic Acid 2% & Niacinamide 2% - Your solution for clear, healthy skin
            </p>
            <div className="space-y-4">
              <p className="text-lg text-foreground/80">
                ✨ Targets acne and prevents breakouts
              </p>
              <p className="text-lg text-foreground/80">
                🌿 Reduces inflammation and redness
              </p>
              <p className="text-lg text-foreground/80">
                💧 Controls excess oil production
              </p>
            </div>
            <Button className="mt-8" size="lg">
              Shop Now
            </Button>
          </div>
          
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 mix-blend-overlay z-10" />
            <Image
              src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b"
              alt="Acne Treatment Serum"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Key Ingredients */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Ingredients</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/20">
              <h3 className="text-xl font-semibold mb-4">Salicylic Acid 2%</h3>
              <p className="text-foreground/80">
                A beta hydroxy acid (BHA) that penetrates deep into pores to remove excess oil and dead skin cells,
                effectively treating and preventing acne.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/20">
              <h3 className="text-xl font-semibold mb-4">Niacinamide 2%</h3>
              <p className="text-foreground/80">
                Also known as Vitamin B3, helps regulate oil production, reduce inflammation, and strengthen the skin barrier
                while minimizing the appearance of pores.
              </p>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">How to Use</h2>
          <div className="max-w-2xl mx-auto space-y-4 text-foreground/80">
            <p>1. Cleanse your face thoroughly and pat dry</p>
            <p>2. Apply a few drops of serum to your entire face</p>
            <p>3. Gently massage into the skin until absorbed</p>
            <p>4. Follow with moisturizer</p>
            <p>5. Use morning and evening for best results</p>
          </div>
        </section>
      </div>
    </div>
  );
}
