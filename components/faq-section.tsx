'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "What is Dermalix's return policy?",
    answer: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund."
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping typically takes 3-5 business days within the US. International shipping can take 7-14 business days depending on the destination."
  },
  {
    question: "Are your products cruelty-free?",
    answer: "Yes, all Dermalix products are cruelty-free and have never been tested on animals. We're committed to ethical and sustainable beauty practices."
  },
  {
    question: "Can I track my order?",
    answer: "Yes, once your order ships, you'll receive a tracking number via email that you can use to monitor your delivery status."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location."
  }
];

export function FAQSection() {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className="space-y-4"
    >
      {faqs.map((faq, index) => (
        <Accordion.Item
          key={index}
          value={`item-${index}`}
          className="group relative overflow-hidden rounded-lg bg-background/50 backdrop-blur-sm border border-primary/20"
        >
          <Accordion.Header>
            <Accordion.Trigger className="flex w-full items-center justify-between px-6 py-4 text-left">
              <span className="text-lg font-medium text-foreground">{faq.question}</span>
              <ChevronDown className="h-5 w-5 text-primary transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="px-6 py-4 text-foreground/80">
              {faq.answer}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
