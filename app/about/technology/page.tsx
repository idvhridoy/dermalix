import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology | Dermalix",
  description: "Discover the innovative technologies behind our skincare solutions.",
};

export default function TechnologyPage() {
  const technologies = [
    {
      title: "Advanced Delivery Systems",
      description: "Our proprietary delivery systems ensure optimal penetration and effectiveness of active ingredients.",
      features: [
        "Liposomal encapsulation",
        "Time-release technology",
        "Nano-emulsion systems",
        "Targeted delivery mechanisms"
      ]
    },
    {
      title: "Formulation Technology",
      description: "State-of-the-art formulation techniques that maximize stability and efficacy.",
      features: [
        "pH-optimized formulations",
        "Stability-enhanced compounds",
        "Synergistic ingredient combinations",
        "Advanced preservation systems"
      ]
    },
    {
      title: "Digital Innovation",
      description: "Leveraging technology to personalize and enhance the skincare experience.",
      features: [
        "AI-powered skin analysis",
        "Custom formulation algorithms",
        "Real-time efficacy tracking",
        "Virtual skincare consultation"
      ]
    }
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Technology</h1>
      <p className="text-lg text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
        At Dermalix, we combine cutting-edge technology with scientific expertise to create innovative skincare solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-background/50 rounded-lg p-6 border border-primary/10"
          >
            <h2 className="text-xl font-semibold mb-4">{tech.title}</h2>
            <p className="text-foreground/70 mb-6">{tech.description}</p>
            <ul className="space-y-2">
              {tech.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-foreground/70">
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
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Innovation Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-background/50 rounded-lg p-6 border border-primary/10">
            <h3 className="text-xl font-medium mb-4">Research & Development</h3>
            <p className="text-foreground/70">
              Our dedicated R&D team works tirelessly to develop and test new technologies that push the boundaries of skincare innovation.
            </p>
          </div>
          <div className="bg-background/50 rounded-lg p-6 border border-primary/10">
            <h3 className="text-xl font-medium mb-4">Clinical Validation</h3>
            <p className="text-foreground/70">
              Every technology undergoes rigorous clinical testing to ensure safety, efficacy, and optimal results for our customers.
            </p>
          </div>
          <div className="bg-background/50 rounded-lg p-6 border border-primary/10">
            <h3 className="text-xl font-medium mb-4">Quality Assurance</h3>
            <p className="text-foreground/70">
              Advanced quality control processes and state-of-the-art equipment ensure consistent product excellence.
            </p>
          </div>
          <div className="bg-background/50 rounded-lg p-6 border border-primary/10">
            <h3 className="text-xl font-medium mb-4">Continuous Improvement</h3>
            <p className="text-foreground/70">
              We continuously monitor and improve our technologies based on scientific advances and customer feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
