import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Team | Dermalix",
  description: "Meet the innovative minds behind Dermalix's revolutionary skincare solutions.",
};

const teamMembers = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Chief Scientific Officer",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    bio: "Ph.D. in Biochemistry with 15+ years of experience in skincare innovation",
  },
  {
    id: 2,
    name: "Michael Roberts",
    role: "Chief Executive Officer",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
    bio: "Former VP at leading beauty companies with a focus on sustainable innovation",
  },
  {
    id: 3,
    name: "Dr. James Wilson",
    role: "Head of Research",
    imageUrl: "https://images.unsplash.com/photo-1578496781197-b85385c7f0b3?auto=format&fit=crop&q=80",
    bio: "Specialized in advanced delivery systems and molecular biology",
  }
];

const departments = [
  {
    name: "Research & Development",
    description: "Pioneering breakthrough skincare technologies",
  },
  {
    name: "Clinical Research",
    description: "Validating product efficacy through rigorous studies",
  },
  {
    name: "Sustainability",
    description: "Driving eco-friendly innovation in skincare",
  }
];

export default function TeamPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-4">
        Meet Our Team
      </h1>
      <p className="text-lg text-center text-foreground/80 mb-16 max-w-3xl mx-auto">
        Pioneering the future of skincare through science, innovation, and sustainability
      </p>

      {/* Leadership Team */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-background/50 rounded-lg overflow-hidden border border-primary/10 
                         hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary/80 mb-4">{member.role}</p>
                <p className="text-foreground/70">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Departments */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Our Departments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-background/50 p-8 rounded-lg border border-primary/10 
                         hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{dept.name}</h3>
              <p className="text-foreground/70">{dept.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join Our Team */}
      <section className="text-center bg-primary/5 rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
        <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
          We're always looking for passionate individuals to join our mission of revolutionizing
          skincare through science and sustainability.
        </p>
        <button className="bg-primary text-white py-3 px-8 rounded-full hover:bg-primary/90
                         transition-all duration-300">
          View Open Positions
        </button>
      </section>
    </div>
  );
}
