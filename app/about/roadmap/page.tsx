import { Metadata } from "next";
import { motion } from "framer-motion";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Roadmap | Dermalix",
  description: "Discover Dermalix's vision and plans for the future of skincare innovation.",
};

const roadmapItems = [
  {
    phase: "Phase 1: Foundation (2024 Q1-Q2)",
    items: [
      "Launch next-generation peptide delivery system",
      "Complete clinical trials for anti-aging line",
      "Establish research partnerships in Asia and Europe"
    ]
  },
  {
    phase: "Phase 2: Expansion (2024 Q3-Q4)",
    items: [
      "Roll out sustainable packaging initiative",
      "Open new research facilities in key markets",
      "Launch personalized skincare platform"
    ]
  },
  {
    phase: "Phase 3: Innovation (2025 Q1-Q2)",
    items: [
      "Introduce AI-powered skin analysis technology",
      "Release advanced hyperpigmentation treatment",
      "Expand clinical research program"
    ]
  },
  {
    phase: "Phase 4: Global Impact (2025 Q3-Q4)",
    items: [
      "Achieve carbon-neutral operations",
      "Launch global skincare education initiative",
      "Establish presence in 50+ countries"
    ]
  }
];

const initiatives = [
  {
    title: "Research & Development",
    description: "Advancing skincare science through innovative research and clinical studies",
    objectives: [
      "Develop new active ingredients",
      "Enhance delivery systems",
      "Optimize formulations"
    ]
  },
  {
    title: "Sustainability",
    description: "Leading the industry in eco-friendly practices and sustainable operations",
    objectives: [
      "Zero-waste packaging",
      "Renewable energy adoption",
      "Sustainable sourcing"
    ]
  },
  {
    title: "Digital Transformation",
    description: "Leveraging technology to enhance skincare solutions and customer experience",
    objectives: [
      "AI-powered diagnostics",
      "Virtual consultations",
      "Smart product tracking"
    ]
  }
];

export default function RoadmapPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Roadmap</h1>
      <p className="text-lg text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
        Charting our course for the future of skincare innovation and sustainability.
      </p>

      {/* Vision Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/images/roadmap/future-vision.jpg"
            alt="Future Vision"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Future Vision</h2>
          <p className="text-foreground/70 mb-4">
            Our roadmap represents our commitment to pushing the boundaries of skincare
            innovation while maintaining our focus on sustainability and scientific excellence.
          </p>
          <p className="text-foreground/70">
            Through strategic planning and continuous innovation, we aim to transform the
            skincare industry and set new standards for effectiveness and sustainability.
          </p>
        </div>
      </div>

      {/* Roadmap Timeline */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Development Timeline</h2>
        <div className="space-y-8">
          {roadmapItems.map((phase, index) => (
            <div key={index} className="bg-background/50 rounded-lg p-8 border border-primary/10">
              <h3 className="text-2xl font-bold text-primary mb-4">{phase.phase}</h3>
              <ul className="space-y-4">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-foreground/70">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Key Initiatives */}
      <div>
        <h2 className="text-3xl font-bold mb-8">Key Initiatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <div key={index} className="bg-background/50 rounded-lg p-8 border border-primary/10">
              <h3 className="text-xl font-bold mb-4">{initiative.title}</h3>
              <p className="text-foreground/70 mb-4">{initiative.description}</p>
              <ul className="space-y-2">
                {initiative.objectives.map((objective, objIndex) => (
                  <li key={objIndex} className="flex items-center text-foreground/70">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {objective}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
