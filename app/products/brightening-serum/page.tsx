'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function BrighteningSerumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/5">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary">
              Brightening Serum
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Alpha Arbutin 2% & Niacinamide 2% - For radiant, even-toned skin
            </p>
            <div className="space-y-4">
              <p className="text-lg text-foreground/80">
                ✨ Brightens and evens skin tone
              </p>
              <p className="text-lg text-foreground/80">
                🌟 Reduces dark spots and hyperpigmentation
              </p>
              <p className="text-lg text-foreground/80">
                💫 Enhances skin's natural radiance
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
              alt="Brightening Serum"
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
              <h3 className="text-xl font-semibold mb-4">Alpha Arbutin 2%</h3>
              <p className="text-foreground/80">
                A highly effective brightening agent that reduces the appearance of dark spots and hyperpigmentation
                by inhibiting tyrosinase, the enzyme responsible for melanin production.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/20">
              <h3 className="text-xl font-semibold mb-4">Niacinamide 2%</h3>
              <p className="text-foreground/80">
                A powerful form of Vitamin B3 that helps improve skin brightness, reduce inflammation, and enhance
                the skin barrier while regulating melanin production for a more even skin tone.
              </p>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">How to Use</h2>
          <div className="max-w-2xl mx-auto space-y-4 text-foreground/80">
            <p>1. Start with clean, dry skin</p>
            <p>2. Apply 2-3 drops of serum to face and neck</p>
            <p>3. Gently pat and massage into the skin</p>
            <p>4. Follow with moisturizer and sunscreen (during day)</p>
            <p>5. Use twice daily for optimal results</p>
            <p className="mt-4 text-sm">Note: When using this product, always apply sunscreen during the day for best results.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
