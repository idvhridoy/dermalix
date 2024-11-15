import { Metadata } from "next";
import { motion } from "framer-motion";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Goals | Dermalix",
  description: "Explore Dermalix's strategic goals and vision for the future of skincare.",
};

export default function GoalsPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Goals</h1>
      <p className="text-lg text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
        Setting new standards in skincare through ambitious goals and measurable outcomes.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-6">Strategic Objectives</h2>
          <p className="text-foreground/70 mb-4">
            Our goals are designed to drive innovation in skincare while maintaining our commitment
            to sustainability and scientific excellence. We believe in setting ambitious targets
            that challenge us to push the boundaries of what's possible.
          </p>
          <p className="text-foreground/70">
            Each goal is carefully chosen to align with our mission and values, ensuring that
            we continue to lead the industry in both research and sustainable practices.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/images/goals/strategic-planning.jpg"
            alt="Strategic Planning"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="bg-background/50 rounded-lg p-8 border border-primary/10">
          <h3 className="text-xl font-semibold mb-4">Research & Innovation</h3>
          <ul className="space-y-4">
            <li className="flex items-center text-foreground/70">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Develop 5 breakthrough skincare formulations by 2025
            </li>
            <li className="flex items-center text-foreground/70">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Establish 3 new research partnerships with leading institutions
            </li>
            <li className="flex items-center text-foreground/70">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              File 10 new patents for innovative skincare technologies
            </li>
          </ul>
        </div>
        <div className="bg-background/50 rounded-lg p-8 border border-primary/10">
          <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
          <ul className="space-y-4">
            <li className="flex items-center text-foreground/70">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Achieve carbon neutrality in operations by 2024
            </li>
            <li className="flex items-center text-foreground/70">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Transition to 100% recyclable packaging by 2025
            </li>
            <li className="flex items-center text-foreground/70">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Reduce water consumption in production by 50%
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="bg-background/50 rounded-lg p-8 border border-primary/10">
          <h3 className="text-xl font-semibold mb-4">Market Leadership</h3>
          <ul className="space-y-4">
            <li className="flex items-center text-foreground/70">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Expand presence to 25 new markets globally
            </li>
            <li className="flex items-center text-foreground/70">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Achieve 95% customer satisfaction rating
            </li>
            <li className="flex items-center text-foreground/70">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Launch 3 new product lines targeting specific skin concerns
            </li>
          </ul>
        </div>
        <div className="bg-background/50 rounded-lg p-8 border border-primary/10">
          <h3 className="text-xl font-semibold mb-4">Community Impact</h3>
          <ul className="space-y-4">
            <li className="flex items-center text-foreground/70">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Establish skincare education programs in 100 communities
            </li>
            <li className="flex items-center text-foreground/70">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Partner with 50 dermatologists for pro-bono services
            </li>
            <li className="flex items-center text-foreground/70">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Create 1000 new jobs in sustainable skincare production
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-background/50 rounded-lg p-8 border border-primary/10 text-center">
        <h2 className="text-3xl font-bold mb-6">Measuring Success</h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          We believe in transparency and accountability. Each goal is tracked and measured
          regularly, with progress reports shared with our stakeholders. This ensures we
          stay focused on our commitments while adapting to new challenges and opportunities.
        </p>
      </div>
    </div>
  );
}
