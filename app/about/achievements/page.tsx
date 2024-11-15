import { Metadata } from "next";
import { motion } from "framer-motion";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Achievements | Dermalix",
  description: "Celebrating Dermalix's milestones and achievements in skincare innovation.",
};

const achievements = [
  {
    year: "2023",
    items: [
      "Launched revolutionary peptide-based anti-aging serum",
      "Achieved 100% sustainable packaging across product line",
      "Expanded to 15 new international markets"
    ]
  },
  {
    year: "2022",
    items: [
      "Received FDA approval for innovative acne treatment",
      "Opened state-of-the-art research facility",
      "Reached 1 million satisfied customers globally"
    ]
  },
  {
    year: "2021",
    items: [
      "Patented breakthrough delivery system technology",
      "Established partnerships with leading dermatologists",
      "Won Industry Innovation Award"
    ]
  }
];

const awards = [
  {
    title: "Sustainability Excellence",
    year: "2023",
    organization: "Global Skincare Alliance",
    description: "Recognition for eco-friendly practices and sustainable innovation"
  },
  {
    title: "Best in Innovation",
    year: "2022",
    organization: "Cosmetics Industry Awards",
    description: "Outstanding achievement in skincare technology development"
  },
  {
    title: "Research Excellence",
    year: "2021",
    organization: "Dermatology Innovation Forum",
    description: "Breakthrough research in skin barrier protection"
  }
];

export default function AchievementsPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Achievements</h1>
      <p className="text-lg text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
        A timeline of our milestones and contributions to skincare innovation.
      </p>

      {/* Key Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="bg-background/50 rounded-lg p-8 border border-primary/10 text-center">
          <div className="text-4xl font-bold text-primary mb-2">1M+</div>
          <div className="text-lg text-foreground/70">Satisfied Customers</div>
        </div>
        <div className="bg-background/50 rounded-lg p-8 border border-primary/10 text-center">
          <div className="text-4xl font-bold text-primary mb-2">25+</div>
          <div className="text-lg text-foreground/70">Patents Filed</div>
        </div>
        <div className="bg-background/50 rounded-lg p-8 border border-primary/10 text-center">
          <div className="text-4xl font-bold text-primary mb-2">30+</div>
          <div className="text-lg text-foreground/70">Countries Reached</div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Milestone Timeline</h2>
        <div className="space-y-8">
          {achievements.map((year, index) => (
            <div key={index} className="bg-background/50 rounded-lg p-8 border border-primary/10">
              <h3 className="text-2xl font-bold text-primary mb-4">{year.year}</h3>
              <ul className="space-y-4">
                {year.items.map((item, itemIndex) => (
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

      {/* Awards */}
      <div>
        <h2 className="text-3xl font-bold mb-8">Awards & Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="bg-background/50 rounded-lg p-8 border border-primary/10">
              <div className="text-primary font-semibold mb-2">{award.year}</div>
              <h3 className="text-xl font-bold mb-2">{award.title}</h3>
              <div className="text-sm text-foreground/60 mb-4">{award.organization}</div>
              <p className="text-foreground/70">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
