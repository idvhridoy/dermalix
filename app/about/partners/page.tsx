import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners | Dermalix",
  description: "Discover our strategic partnerships and collaborations in skincare innovation.",
};

export default function PartnersPage() {
  const partners = [
    {
      category: "Research Institutions",
      description: "Leading academic and research organizations we collaborate with to advance skincare science.",
      organizations: [
        {
          name: "Stanford Dermatology Research Center",
          description: "Collaborative research on advanced skin barrier protection and repair mechanisms.",
          collaboration: [
            "Joint clinical trials",
            "Research paper publications",
            "Student internship program",
            "Technology transfer initiatives"
          ]
        },
        {
          name: "MIT Bioengineering Lab",
          description: "Partnership focused on developing innovative delivery systems for skincare ingredients.",
          collaboration: [
            "Nanoparticle research",
            "Biomaterial development",
            "Stability studies",
            "Patent development"
          ]
        }
      ]
    },
    {
      category: "Technology Partners",
      description: "Innovative companies helping us leverage cutting-edge technology in skincare.",
      organizations: [
        {
          name: "AI Skin Analytics",
          description: "AI-powered skin analysis and personalized skincare recommendations.",
          collaboration: [
            "Machine learning models",
            "Computer vision technology",
            "Mobile app integration",
            "Data analytics"
          ]
        },
        {
          name: "BioTech Solutions",
          description: "Advanced biotechnology solutions for ingredient development and testing.",
          collaboration: [
            "Bioactive compounds",
            "Molecular testing",
            "Safety assessments",
            "Quality control"
          ]
        }
      ]
    },
    {
      category: "Sustainability Partners",
      description: "Organizations helping us achieve our sustainability goals and reduce environmental impact.",
      organizations: [
        {
          name: "Green Chemistry Alliance",
          description: "Promoting sustainable practices in skincare formulation and manufacturing.",
          collaboration: [
            "Eco-friendly processes",
            "Sustainable packaging",
            "Carbon footprint reduction",
            "Waste management"
          ]
        },
        {
          name: "Organic Botanicals Co-op",
          description: "Sustainable sourcing of natural and organic ingredients.",
          collaboration: [
            "Ethical sourcing",
            "Fair trade practices",
            "Organic certification",
            "Biodiversity protection"
          ]
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Partners</h1>
        <p className="text-lg text-muted-foreground">
          We&apos;re proud to work with industry leaders who share our commitment to excellence
        </p>
      </div>

      <div className="space-y-16">
        {partners.map((category, index) => (
          <section key={index}>
            <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
            <p className="text-foreground/70 mb-8">{category.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.organizations.map((org, orgIndex) => (
                <div
                  key={orgIndex}
                  className="bg-background/50 rounded-lg p-6 border border-primary/10"
                >
                  <h3 className="text-xl font-semibold mb-4">{org.name}</h3>
                  <p className="text-foreground/70 mb-6">{org.description}</p>
                  <div>
                    <h4 className="font-medium mb-3">Areas of Collaboration:</h4>
                    <ul className="space-y-2">
                      {org.collaboration.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-foreground/70">
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
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8">Partner With Us</h2>
        <div className="bg-background/50 rounded-lg p-8 border border-primary/10">
          <p className="text-foreground/70 mb-6">
            We&apos;re always looking for innovative organizations to collaborate with in our mission to revolutionize skincare.
            If you&apos;re interested in partnering with Dermalix, we&apos;d love to hear from you.
          </p>
          <button className="bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary/90 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
