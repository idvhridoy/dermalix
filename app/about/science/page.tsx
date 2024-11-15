import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Science | Dermalix",
  description: "Explore the scientific foundation behind our skincare innovations.",
};

export default function SciencePage() {
  const researchAreas = [
    {
      title: "Skin Barrier Research",
      description: "Understanding and enhancing the skin's natural protective barrier.",
      highlights: [
        "Lipid matrix studies",
        "Microbiome research",
        "Barrier repair mechanisms",
        "Environmental protection"
      ]
    },
    {
      title: "Active Ingredient Development",
      description: "Developing and optimizing active ingredients for maximum efficacy.",
      highlights: [
        "Molecular design",
        "Stability testing",
        "Bioavailability studies",
        "Synergy research"
      ]
    },
    {
      title: "Clinical Studies",
      description: "Rigorous testing to validate product safety and effectiveness.",
      highlights: [
        "Double-blind trials",
        "Long-term safety studies",
        "Efficacy measurements",
        "Consumer testing"
      ]
    }
  ];

  const publications = [
    {
      title: "Advances in Skin Barrier Protection",
      journal: "Journal of Dermatological Science",
      year: "2023",
      authors: "Smith et al."
    },
    {
      title: "Novel Delivery Systems in Skincare",
      journal: "International Journal of Cosmetic Science",
      year: "2023",
      authors: "Johnson et al."
    },
    {
      title: "Microbiome-Friendly Formulation Strategies",
      journal: "Frontiers in Skin Science",
      year: "2022",
      authors: "Williams et al."
    }
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">The Science Behind Dermalix</h1>
      <p className="text-lg text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
        Our commitment to scientific excellence drives every aspect of our product development process.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {researchAreas.map((area, index) => (
          <div
            key={index}
            className="bg-background/50 rounded-lg p-6 border border-primary/10"
          >
            <h2 className="text-xl font-semibold mb-4">{area.title}</h2>
            <p className="text-foreground/70 mb-6">{area.description}</p>
            <ul className="space-y-2">
              {area.highlights.map((highlight, highlightIndex) => (
                <li key={highlightIndex} className="flex items-center text-foreground/70">
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
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Research Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-background/50 rounded-lg p-6 border border-primary/10">
            <h3 className="text-xl font-medium mb-4">Discovery Phase</h3>
            <p className="text-foreground/70">
              Our scientists identify promising ingredients and technologies through extensive literature review and preliminary testing.
            </p>
          </div>
          <div className="bg-background/50 rounded-lg p-6 border border-primary/10">
            <h3 className="text-xl font-medium mb-4">Development</h3>
            <p className="text-foreground/70">
              Rigorous formulation development and optimization ensure maximum stability and efficacy of our products.
            </p>
          </div>
          <div className="bg-background/50 rounded-lg p-6 border border-primary/10">
            <h3 className="text-xl font-medium mb-4">Clinical Testing</h3>
            <p className="text-foreground/70">
              Comprehensive clinical trials validate the safety and effectiveness of our formulations.
            </p>
          </div>
          <div className="bg-background/50 rounded-lg p-6 border border-primary/10">
            <h3 className="text-xl font-medium mb-4">Validation</h3>
            <p className="text-foreground/70">
              Independent laboratory testing confirms our research findings and product claims.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Recent Publications</h2>
        <div className="space-y-4">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-background/50 rounded-lg p-6 border border-primary/10"
            >
              <h3 className="text-xl font-medium mb-2">{pub.title}</h3>
              <p className="text-foreground/70">
                {pub.authors} - {pub.journal} ({pub.year})
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
