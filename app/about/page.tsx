import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Award, Users, Leaf } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Dermalix</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pioneering the future of skincare through innovative science and natural ingredients.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2020, Dermalix emerged from a passion for combining cutting-edge science with natural skincare solutions. Our journey began with a simple mission: to create effective, safe, and innovative skincare products that deliver real results.
              </p>
              <p className="text-muted-foreground mb-6">
                Today, we continue to push the boundaries of skincare innovation, working with leading dermatologists and researchers to develop products that transform skin health.
              </p>
              <Link href="/products">
                <Button>Explore Our Products</Button>
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800"
                alt="Dermalix Lab"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <Award className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                Committed to the highest standards in everything we do
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Users className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-muted-foreground">
                Building lasting relationships with our customers
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Leaf className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-muted-foreground">
                Eco-friendly practices in all our operations
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}