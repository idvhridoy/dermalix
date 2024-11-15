import { Metadata } from "next";
import { motion } from "framer-motion";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Values | Dermalix",
  description: "Discover the core values that drive Dermalix's commitment to skincare innovation.",
};

export default function ValuesPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Values</h1>
      <p className="text-lg text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
        The principles that guide our mission to transform skincare through science and innovation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/images/values/team-collaboration.jpg"
            alt="Team Collaboration"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Guiding Principles</h2>
          <p className="text-foreground/70 mb-4">
            At Dermalix, our values are the foundation of everything we do. They shape our decisions,
            guide our research, and define our relationships with customers and partners.
          </p>
          <p className="text-foreground/70">
            These core principles ensure that we maintain the highest standards of excellence while
            pursuing our mission of revolutionizing skincare through science and sustainability.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="bg-background/50 rounded-lg p-8 border border-primary/10">
          <h3 className="text-xl font-semibold mb-4">Scientific Excellence</h3>
          <p className="text-foreground/70">
            Commitment to rigorous research and evidence-based innovation in skincare solutions.
          </p>
          <ul className="mt-4 space-y-2 text-foreground/70">
            <li>• Data-driven research</li>
            <li>• Continuous innovation</li>
            <li>• Quality assurance</li>
          </ul>
        </div>
        <div className="bg-background/50 rounded-lg p-8 border border-primary/10">
          <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
          <p className="text-foreground/70">
            Dedicated to environmental responsibility in every aspect of our operations.
          </p>
          <ul className="mt-4 space-y-2 text-foreground/70">
            <li>• Eco-friendly packaging</li>
            <li>• Sustainable sourcing</li>
            <li>• Carbon footprint reduction</li>
          </ul>
        </div>
        <div className="bg-background/50 rounded-lg p-8 border border-primary/10">
          <h3 className="text-xl font-semibold mb-4">Customer Focus</h3>
          <p className="text-foreground/70">
            Putting our customers first in everything we do, from product development to support.
          </p>
          <ul className="mt-4 space-y-2 text-foreground/70">
            <li>• Personalized solutions</li>
            <li>• Transparent communication</li>
            <li>• Continuous improvement</li>
          </ul>
        </div>
      </div>

      <div className="bg-background/50 rounded-lg p-8 border border-primary/10 text-center">
        <h2 className="text-3xl font-bold mb-6">Living Our Values</h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Every day, we strive to embody these values in our work, our research, and our interactions
          with customers and partners. They are not just words on a page but principles that drive
          our actions and decisions.
        </p>
      </div>
    </div>
  );
}
