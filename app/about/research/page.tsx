import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research & Development | Dermalix",
  description: "Learn about our innovative research and development process in skincare.",
};

export default function ResearchPage() {
  const researchAreas = [
    {
      title: "Advanced Ingredient Research",
      description: "Our team of scientists continuously explores new active ingredients and their potential applications in skincare.",
      points: [
        "Peptide synthesis and analysis",
        "Natural ingredient extraction methods",
        "Stability testing and formulation",
        "Bioavailability studies"
      ]
    },
    {
      title: "Clinical Studies",
      description: "Rigorous testing and validation of our formulations through comprehensive clinical trials.",
      points: [
        "Double-blind studies",
        "Long-term efficacy testing",
        "Safety assessments",
        "Consumer satisfaction surveys"
      ]
    },
    {
      title: "Innovation Lab",
      description: "State-of-the-art facilities dedicated to developing next-generation skincare solutions.",
      points: [
        "Advanced formulation techniques",
        "Delivery system development",
        "Texture and stability optimization",
        "Quality control protocols"
      ]
    }
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Research</h1>
        <p className="text-lg text-muted-foreground">
          We&apos;re committed to advancing skincare through scientific research and innovation
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {researchAreas.map((area, index) => (
          <div
            key={index}
            className="p-6 rounded-lg border bg-card"
          >
            <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
            <p className="text-muted-foreground">
              {area.description}
            </p>
            <ul className="space-y-2">
              {area.points.map((point, pointIndex) => (
                <li key={pointIndex} className="flex items-center text-muted-foreground">
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
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Our Research Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Discovery Phase</h3>
            <p className="text-muted-foreground">
              Our research begins with identifying key skincare challenges and exploring potential solutions through extensive literature review and preliminary studies.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Development</h3>
            <p className="text-muted-foreground">
              We develop and test multiple formulations, optimizing for efficacy, stability, and user experience through iterative improvements.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Clinical Testing</h3>
            <p className="text-muted-foreground">
              Rigorous clinical trials validate our formulations&apos; safety and effectiveness, ensuring they meet our high standards.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Quality Assurance</h3>
            <p className="text-muted-foreground">
              Comprehensive quality control measures ensure consistent product quality and compliance with regulatory standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
