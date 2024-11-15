import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Press & Media | Dermalix",
  description: "Latest news, press releases, and media coverage about Dermalix's innovative skincare solutions.",
};

export default function PressPage() {
  const pressReleases = [
    {
      id: 1,
      title: "Dermalix Launches Revolutionary Anti-Aging Formula",
      date: "December 15, 2023",
      source: "Business Insider",
      excerpt: "Dermalix's latest breakthrough in peptide technology promises to revolutionize the skincare industry...",
      image: "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?auto=format&fit=crop&q=80",
      category: "Product Launch",
      link: "#"
    },
    {
      id: 2,
      title: "Sustainability Initiative Receives Global Recognition",
      date: "November 28, 2023",
      source: "Forbes",
      excerpt: "Dermalix's commitment to sustainable practices sets new industry standards...",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80",
      category: "Sustainability",
      link: "#"
    },
    {
      id: 3,
      title: "Research Partnership with Leading University Announced",
      date: "October 10, 2023",
      source: "Science Daily",
      excerpt: "Groundbreaking collaboration aims to advance skincare science...",
      image: "https://images.unsplash.com/photo-1581093458791-9d15482778a1?auto=format&fit=crop&q=80",
      category: "Research",
      link: "#"
    }
  ];

  const mediaFeatures = [
    {
      id: 1,
      outlet: "Vogue",
      title: "The Future of Skincare",
      quote: "Dermalix's innovative approach to skincare is setting new standards in the industry",
      image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      outlet: "Elle",
      title: "Beauty Innovations 2023",
      quote: "A game-changing brand that combines science and sustainability",
      image: "https://images.unsplash.com/photo-1614859324967-c7f7c6c7f1f2?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      outlet: "Forbes",
      title: "Top Beauty Startups",
      quote: "Leading the revolution in personalized skincare solutions",
      image: "https://images.unsplash.com/photo-1587855049254-351f4e55fe05?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-5xl font-bold text-center mb-4">
        Press & Media
      </h1>
      
      <p className="text-xl text-center text-foreground/80 mb-16 max-w-3xl mx-auto">
        Stay updated with the latest news and coverage about Dermalix's innovations in skincare
      </p>

      {/* Featured Press Releases */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Latest Press Releases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressReleases.map((press) => (
            <article
              key={press.id}
              className="bg-background/50 rounded-2xl overflow-hidden border border-primary/10 
                         hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="relative h-48">
                <Image
                  src={press.image}
                  alt={press.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-white text-sm rounded-full">
                    {press.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-sm text-foreground/60">{press.date}</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm font-medium text-primary">{press.source}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {press.title}
                </h3>
                <p className="text-foreground/70 mb-4">{press.excerpt}</p>
                <a
                  href={press.link}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Media Features */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Media Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediaFeatures.map((feature) => (
            <div
              key={feature.id}
              className="bg-background/50 rounded-xl overflow-hidden border border-primary/10 
                         hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="relative h-40">
                <Image
                  src={feature.image}
                  alt={feature.outlet}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{feature.outlet}</h3>
                <h4 className="text-lg text-primary mb-3">{feature.title}</h4>
                <p className="text-foreground/70 italic">"{feature.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Press Contact */}
      <section className="mt-20 text-center bg-primary/5 rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-4">Press Contact</h2>
        <p className="text-lg text-foreground/70 mb-8">
          For press inquiries, please contact our media relations team.
        </p>
        <button className="bg-primary text-white py-3 px-8 rounded-full hover:bg-primary/90
                         transition-all duration-300">
          Contact Press Team
        </button>
      </section>
    </div>
  );
}
