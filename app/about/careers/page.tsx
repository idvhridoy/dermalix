import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Dermalix",
  description: "Join our team of innovators shaping the future of skincare.",
};

export default function CareersPage() {
  const openPositions = [
    {
      department: "Research & Development",
      positions: [
        {
          title: "Senior Research Scientist",
          location: "San Francisco, CA",
          type: "Full-time",
          requirements: [
            "Ph.D. in Chemistry, Chemical Engineering, or related field",
            "5+ years experience in skincare formulation",
            "Strong background in clinical research",
            "Publication track record"
          ]
        },
        {
          title: "Formulation Chemist",
          location: "San Francisco, CA",
          type: "Full-time",
          requirements: [
            "M.S. in Chemistry or related field",
            "3+ years experience in cosmetic formulation",
            "Knowledge of stability testing",
            "Experience with natural ingredients"
          ]
        }
      ]
    },
    {
      department: "Technology",
      positions: [
        {
          title: "AI Research Engineer",
          location: "Remote",
          type: "Full-time",
          requirements: [
            "M.S./Ph.D. in Computer Science or related field",
            "Experience with machine learning in skincare",
            "Strong Python programming skills",
            "Background in computer vision"
          ]
        },
        {
          title: "Full Stack Developer",
          location: "Hybrid",
          type: "Full-time",
          requirements: [
            "5+ years full stack development experience",
            "Expertise in React and Node.js",
            "Experience with AWS",
            "Knowledge of e-commerce platforms"
          ]
        }
      ]
    }
  ];

  const benefits = [
    {
      title: "Health & Wellness",
      perks: [
        "Comprehensive health insurance",
        "Dental and vision coverage",
        "Mental health support",
        "Fitness membership reimbursement"
      ]
    },
    {
      title: "Work-Life Balance",
      perks: [
        "Flexible working hours",
        "Remote work options",
        "Unlimited PTO",
        "Paid parental leave"
      ]
    },
    {
      title: "Growth & Development",
      perks: [
        "Professional development budget",
        "Conference attendance",
        "Learning stipend",
        "Mentorship program"
      ]
    }
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Join Our Team</h1>
      <p className="text-lg text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
        Help us revolutionize the skincare industry through science and innovation.
      </p>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Open Positions</h2>
        <div className="space-y-8">
          {openPositions.map((dept, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-6">{dept.department}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dept.positions.map((position, posIndex) => (
                  <div
                    key={posIndex}
                    className="bg-background/50 rounded-lg p-6 border border-primary/10"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-lg font-semibold">{position.title}</h4>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {position.type}
                      </span>
                    </div>
                    <p className="text-foreground/70 mb-4">{position.location}</p>
                    <div>
                      <h5 className="font-medium mb-2">Requirements:</h5>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center text-foreground/70">
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
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="mt-6 w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-8">Benefits & Perks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-background/50 rounded-lg p-6 border border-primary/10"
            >
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <ul className="space-y-2">
                {benefit.perks.map((perk, perkIndex) => (
                  <li key={perkIndex} className="flex items-center text-foreground/70">
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
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
