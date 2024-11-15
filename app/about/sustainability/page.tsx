import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability | Dermalix",
  description: "Learn about our commitment to environmental responsibility and sustainable practices.",
};

export default function SustainabilityPage() {
  const initiatives = [
    {
      title: "Sustainable Sourcing",
      description: "Our commitment to environmentally responsible ingredient sourcing.",
      practices: [
        {
          name: "Ethical Harvesting",
          description: "Working with suppliers who follow sustainable harvesting practices to protect biodiversity."
        },
        {
          name: "Local Partnerships",
          description: "Collaborating with local communities to source ingredients while supporting economic development."
        },
        {
          name: "Organic Certification",
          description: "Prioritizing certified organic ingredients to ensure environmental stewardship."
        }
      ]
    },
    {
      title: "Green Manufacturing",
      description: "Implementing eco-friendly production processes to minimize environmental impact.",
      practices: [
        {
          name: "Energy Efficiency",
          description: "Using renewable energy and optimizing production processes to reduce energy consumption."
        },
        {
          name: "Water Conservation",
          description: "Implementing closed-loop water systems and water recycling in our manufacturing facilities."
        },
        {
          name: "Waste Reduction",
          description: "Zero-waste initiatives and comprehensive recycling programs throughout our operations."
        }
      ]
    },
    {
      title: "Sustainable Packaging",
      description: "Innovative packaging solutions that reduce environmental impact.",
      practices: [
        {
          name: "Recycled Materials",
          description: "Using post-consumer recycled materials in our packaging to reduce virgin plastic use."
        },
        {
          name: "Biodegradable Options",
          description: "Developing biodegradable packaging alternatives for select product lines."
        },
        {
          name: "Refill Program",
          description: "Offering product refills to reduce packaging waste and promote reuse."
        }
      ]
    }
  ];

  const goals = [
    {
      year: "2024",
      targets: [
        "100% recyclable packaging",
        "50% reduction in water usage",
        "75% renewable energy use"
      ]
    },
    {
      year: "2025",
      targets: [
        "Carbon neutral operations",
        "Zero waste to landfill",
        "100% sustainable ingredient sourcing"
      ]
    },
    {
      year: "2026",
      targets: [
        "Fully biodegradable packaging line",
        "Net-positive water impact",
        "Complete supply chain transparency"
      ]
    }
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Commitment to Sustainability</h1>
      <p className="text-lg text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
        We're dedicated to creating effective skincare solutions while protecting our planet for future generations.
      </p>

      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="bg-background/50 rounded-lg p-6 border border-primary/10"
            >
              <h2 className="text-xl font-semibold mb-4">{initiative.title}</h2>
              <p className="text-foreground/70 mb-6">{initiative.description}</p>
              <div className="space-y-4">
                {initiative.practices.map((practice, practiceIndex) => (
                  <div key={practiceIndex}>
                    <h3 className="font-medium mb-2">{practice.name}</h3>
                    <p className="text-sm text-foreground/70">{practice.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Sustainability Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="bg-background/50 rounded-lg p-6 border border-primary/10"
            >
              <h3 className="text-xl font-semibold mb-4">{goal.year} Targets</h3>
              <ul className="space-y-3">
                {goal.targets.map((target, targetIndex) => (
                  <li key={targetIndex} className="flex items-center text-foreground/70">
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {target}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8">Environmental Impact Report</h2>
        <div className="bg-background/50 rounded-lg p-8 border border-primary/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">75%</div>
              <p className="text-foreground/70">Reduction in plastic use since 2022</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">90%</div>
              <p className="text-foreground/70">Renewable energy powered operations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-foreground/70">Recyclable packaging by 2024</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button className="bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary/90 transition-colors">
              Download Full Report
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
