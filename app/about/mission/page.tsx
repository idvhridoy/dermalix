import { Metadata } from "next";
import { motion } from "framer-motion";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Mission | Dermalix",
  description: "Learn about Dermalix's mission to revolutionize skincare through science and sustainability.",
};

export default function MissionPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Mission</h1>
      <p className="text-lg text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
        Transforming skincare through science, innovation, and sustainability.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">What Drives Us</h2>
          <p className="text-foreground/70 mb-4">
            At Dermalix, we believe that everyone deserves access to effective, science-backed skincare solutions. Our mission is to revolutionize the skincare industry through innovative research, sustainable practices, and a commitment to excellence.
          </p>
          <p className="text-foreground/70 mb-4">
            We strive to create products that not only deliver exceptional results but also contribute to a healthier planet. Through our research and development, we aim to discover new ways to harness the power of science and nature for better skin health.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/images/mission/lab-research.jpg"
            alt="Dermalix Research Lab"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-background/50 rounded-lg p-6 border border-primary/10">
            <h3 className="text-xl font-semibold mb-4">Innovation</h3>
            <p className="text-foreground/70">
              Continuously pushing the boundaries of skincare science to develop groundbreaking solutions.
            </p>
          </div>
          <div className="bg-background/50 rounded-lg p-6 border border-primary/10">
            <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
            <p className="text-foreground/70">
              Committed to eco-friendly practices and responsible sourcing throughout our operations.
            </p>
          </div>
          <div className="bg-background/50 rounded-lg p-6 border border-primary/10">
            <h3 className="text-xl font-semibold mb-4">Excellence</h3>
            <p className="text-foreground/70">
              Maintaining the highest standards in research, development, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
