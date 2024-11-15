import { Metadata } from "next";
import { motion } from "framer-motion";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Vision | Dermalix",
  description: "Discover Dermalix's vision for the future of skincare and beauty.",
};

export default function VisionPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Vision</h1>
      <p className="text-lg text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
        Shaping the future of skincare through pioneering research and sustainable innovation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/images/vision/future-lab.jpg"
            alt="Future of Skincare"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">The Future We See</h2>
          <p className="text-foreground/70 mb-4">
            We envision a world where skincare is not just about beauty, but about holistic health and environmental responsibility. Our vision extends beyond creating effective products – we aim to revolutionize how skincare solutions are developed, produced, and delivered.
          </p>
          <p className="text-foreground/70">
            Through continuous innovation and research, we strive to make personalized, science-backed skincare accessible to everyone while maintaining our commitment to sustainability and ethical practices.
          </p>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Strategic Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-background/50 rounded-lg p-6 border border-primary/10">
            <h3 className="text-xl font-semibold mb-4">Research Leadership</h3>
            <p className="text-foreground/70">
              Becoming the global leader in innovative skincare research and development, setting new standards for the industry.
            </p>
          </div>
          <div className="bg-background/50 rounded-lg p-6 border border-primary/10">
            <h3 className="text-xl font-semibold mb-4">Sustainable Innovation</h3>
            <p className="text-foreground/70">
              Pioneering eco-friendly practices and sustainable solutions that protect both skin and planet.
            </p>
          </div>
          <div className="bg-background/50 rounded-lg p-6 border border-primary/10">
            <h3 className="text-xl font-semibold mb-4">Global Impact</h3>
            <p className="text-foreground/70">
              Expanding our reach to provide effective skincare solutions to diverse communities worldwide.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-center mb-12">Looking Ahead</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-background/50 rounded-lg p-6 border border-primary/10">
            <h3 className="text-xl font-semibold mb-4">2024-2025</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-foreground/70">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Expand research facilities and capabilities
              </li>
              <li className="flex items-center text-foreground/70">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Launch innovative product lines
              </li>
              <li className="flex items-center text-foreground/70">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Strengthen global partnerships
              </li>
            </ul>
          </div>
          <div className="bg-background/50 rounded-lg p-6 border border-primary/10">
            <h3 className="text-xl font-semibold mb-4">2025-2026</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-foreground/70">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Achieve carbon neutrality
              </li>
              <li className="flex items-center text-foreground/70">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Implement AI-driven personalization
              </li>
              <li className="flex items-center text-foreground/70">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Establish global research centers
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
