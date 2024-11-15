import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ | Dermalix",
  description: "Frequently asked questions about Dermalix products, shipping, and skincare.",
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Products",
      items: [
        {
          question: "What makes Dermalix products unique?",
          answer: "Dermalix products are formulated with scientifically-proven ingredients at optimal concentrations. We focus on clean, effective formulations without unnecessary fillers or harmful additives."
        },
        {
          question: "Are your products suitable for sensitive skin?",
          answer: "Yes, our products are dermatologically tested and suitable for sensitive skin. However, we always recommend doing a patch test before using any new skincare product."
        },
        {
          question: "How long does it take to see results?",
          answer: "Results vary depending on the product and skin condition. Generally, you may start seeing improvements within 4-8 weeks of consistent use."
        }
      ]
    },
    {
      category: "Shipping & Returns",
      items: [
        {
          question: "What are your shipping options?",
          answer: "We offer free standard shipping on orders over $50. Express shipping is available for an additional fee. International shipping is available to select countries."
        },
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, you can return it for a full refund."
        }
      ]
    },
    {
      category: "Skincare Advice",
      items: [
        {
          question: "How should I layer my skincare products?",
          answer: "Generally, apply products from thinnest to thickest consistency. Start with cleanser, then toner, serums, moisturizer, and finally sunscreen (during the day)."
        },
        {
          question: "Can I use multiple serums together?",
          answer: "Yes, you can use multiple serums, but we recommend introducing them gradually and being mindful of ingredient interactions. Some ingredients work best at different times of day."
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <p className="text-lg text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
        Find answers to common questions about our products, shipping, and skincare advice.
      </p>

      <div className="max-w-3xl mx-auto space-y-8">
        {faqs.map((category, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {category.items.map((item, itemIndex) => (
                <AccordionItem key={itemIndex} value={`item-${index}-${itemIndex}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-foreground/80">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
        <p className="text-foreground/80 mb-6">
          Our customer support team is here to help you with any questions you may have.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
