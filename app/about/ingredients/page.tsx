import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ingredients | Dermalix",
  description: "Learn about the premium ingredients that power our skincare products.",
};

export default function IngredientsPage() {
  const ingredients = [
    {
      category: "Active Ingredients",
      items: [
        {
          name: "Hyaluronic Acid",
          description: "A powerful humectant that can hold up to 1000x its weight in water, providing deep hydration.",
          benefits: ["Intense hydration", "Plumping effect", "Reduces fine lines"]
        },
        {
          name: "Niacinamide",
          description: "A form of vitamin B3 that helps improve skin barrier function and reduce inflammation.",
          benefits: ["Pore refinement", "Oil control", "Even skin tone"]
        },
        {
          name: "Peptides",
          description: "Short chains of amino acids that signal skin cells to produce collagen and other proteins.",
          benefits: ["Collagen production", "Skin firmness", "Anti-aging"]
        }
      ]
    },
    {
      category: "Botanical Extracts",
      items: [
        {
          name: "Green Tea Extract",
          description: "Rich in polyphenols and antioxidants that protect against environmental damage.",
          benefits: ["Antioxidant protection", "Soothing", "Anti-inflammatory"]
        },
        {
          name: "Centella Asiatica",
          description: "An herb known for its healing and anti-inflammatory properties.",
          benefits: ["Wound healing", "Calming", "Collagen synthesis"]
        },
        {
          name: "Licorice Root",
          description: "Natural ingredient that helps brighten skin and reduce hyperpigmentation.",
          benefits: ["Brightening", "Soothing", "Even tone"]
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Premium Ingredients</h1>
      <p className="text-lg text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
        We carefully select and combine premium ingredients to create effective, science-backed skincare formulations.
      </p>

      {ingredients.map((category, index) => (
        <div key={index} className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">{category.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {category.items.map((ingredient, itemIndex) => (
              <div
                key={itemIndex}
                className="bg-background/50 rounded-lg p-6 border border-primary/10"
              >
                <h3 className="text-xl font-medium mb-4">{ingredient.name}</h3>
                <p className="text-foreground/70 mb-6">{ingredient.description}</p>
                <div>
                  <h4 className="font-medium mb-2">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {ingredient.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-foreground/70">
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
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold mb-6">Our Ingredient Standards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-background/50 rounded-lg p-6 border border-primary/10">
            <h3 className="text-xl font-medium mb-4">Quality Sourcing</h3>
            <p className="text-foreground/70">
              We partner with leading suppliers to source the highest quality ingredients that meet our strict purity standards.
            </p>
          </div>
          <div className="bg-background/50 rounded-lg p-6 border border-primary/10">
            <h3 className="text-xl font-medium mb-4">Scientific Validation</h3>
            <p className="text-foreground/70">
              Every ingredient is backed by scientific research and clinical studies to ensure efficacy and safety.
            </p>
          </div>
          <div className="bg-background/50 rounded-lg p-6 border border-primary/10">
            <h3 className="text-xl font-medium mb-4">Clean Beauty</h3>
            <p className="text-foreground/70">
              We exclude harmful ingredients and prioritize clean, sustainable alternatives without compromising effectiveness.
            </p>
          </div>
          <div className="bg-background/50 rounded-lg p-6 border border-primary/10">
            <h3 className="text-xl font-medium mb-4">Optimal Concentrations</h3>
            <p className="text-foreground/70">
              Each ingredient is used at its scientifically-proven optimal concentration for maximum effectiveness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
