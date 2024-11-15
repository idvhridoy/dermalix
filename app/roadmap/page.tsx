import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Roadmap | Dermalix",
  description: "Explore our vision for the future of skincare and upcoming product innovations.",
};

export default function RoadmapPage() {
  const roadmapItems = [
    {
      quarter: "Q2 2024",
      title: "Advanced Anti-Aging Line",
      description: "Launching our revolutionary peptide complex serum and retinol night cream.",
      status: "In Development",
      items: [
        "Peptide Complex Serum with 5 targeted peptides",
        "Advanced Retinol Night Cream (0.5%)",
        "Clinical trials completion",
        "Package design finalization"
      ]
    },
    {
      quarter: "Q3 2024",
      title: "Sensitive Skin Solutions",
      description: "Expanding our range with gentle yet effective products for sensitive skin.",
      status: "Planning",
      items: [
        "Calming Barrier Repair Cream",
        "Centella Asiatica Serum",
        "Gentle Enzyme Exfoliator",
        "Sensitivity testing protocols"
      ]
    },
    {
      quarter: "Q4 2024",
      title: "Sustainable Packaging Initiative",
      description: "Transitioning to fully recyclable and eco-friendly packaging.",
      status: "Research",
      items: [
        "Bio-based plastic alternatives research",
        "Refill program pilot",
        "Carbon-neutral shipping program",
        "Packaging reduction strategy"
      ]
    },
    {
      quarter: "Q1 2025",
      title: "Digital Skin Analysis Platform",
      description: "Launching AI-powered skin analysis and personalized recommendations.",
      status: "Early Planning",
      items: [
        "AI algorithm development",
        "Mobile app beta testing",
        "Personalization engine",
        "Expert consultation integration"
      ]
    }
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Product Roadmap</h1>
      <p className="text-lg text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
        Discover our vision for the future of skincare and the innovative products we're developing.
      </p>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {roadmapItems.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-px before:h-full before:bg-primary/20"
            >
              <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary -translate-x-[5px]" />
              
              <div className="bg-background/50 rounded-lg p-6 border border-primary/10">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {item.quarter}
                    </span>
                    <h2 className="text-2xl font-semibold mt-2">{item.title}</h2>
                  </div>
                  <span className="px-4 py-1 rounded-full text-sm font-medium bg-foreground/10">
                    {item.status}
                  </span>
                </div>
                
                <p className="text-foreground/80 mb-6">{item.description}</p>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {item.items.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="flex items-center space-x-2 text-foreground/70"
                    >
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{subItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
