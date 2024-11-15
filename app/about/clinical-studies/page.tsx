import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Clinical Studies | Dermalix",
  description: "Explore our rigorous clinical studies and scientific research validating our skincare solutions.",
};

export default function ClinicalStudiesPage() {
  const studies = [
    {
      id: 1,
      title: "Advanced Hydration Complex Efficacy Study",
      date: "2023",
      participants: 120,
      duration: "12 weeks",
      results: [
        "94% reported improved skin hydration",
        "87% noticed reduced fine lines",
        "91% experienced enhanced skin barrier function"
      ],
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80",
      methodology: "Double-blind, randomized controlled trial"
    },
    {
      id: 2,
      title: "Peptide-Based Anti-Aging Formula Study",
      date: "2023",
      participants: 150,
      duration: "16 weeks",
      results: [
        "89% showed reduced wrinkle depth",
        "92% had improved skin firmness",
        "85% reported more even skin tone"
      ],
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80",
      methodology: "Split-face, controlled clinical trial"
    },
    {
      id: 3,
      title: "Microbiome Balance Research",
      date: "2022",
      participants: 200,
      duration: "8 weeks",
      results: [
        "95% maintained healthy skin microbiome",
        "88% reported reduced skin sensitivity",
        "90% showed improved skin clarity"
      ],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
      methodology: "Longitudinal observational study"
    }
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-5xl font-bold text-center mb-4">
        Clinical Studies
      </h1>
      
      <p className="text-xl text-center text-foreground/80 mb-16 max-w-3xl mx-auto">
        Our products are backed by rigorous scientific research and clinical studies,
        demonstrating their efficacy and safety.
      </p>

      <div className="space-y-16">
        {studies.map((study) => (
          <div
            key={study.id}
            className="bg-background/50 rounded-2xl p-8 border border-primary/10 
                       hover:border-primary/30 transition-all duration-300
                       group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-foreground/70">{study.methodology}</p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{study.participants}</div>
                    <div className="text-sm text-foreground/70">Participants</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{study.duration}</div>
                    <div className="text-sm text-foreground/70">Duration</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{study.date}</div>
                    <div className="text-sm text-foreground/70">Year</div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Key Findings:</h3>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li
                        key={resultIndex}
                        className="flex items-center text-foreground/70"
                      >
                        <svg
                          className="w-5 h-5 text-primary mr-2 flex-shrink-0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
