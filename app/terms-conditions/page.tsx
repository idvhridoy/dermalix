import React from 'react'

export default function TermsConditionsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      
      <div className="space-y-6">
        <p className="text-lg">
          Last updated: January 2024
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
            If you do not agree to abide by these terms, please do not use this website.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on Dermalix&apos;s website for personal, non-commercial transitory viewing only.</p>
          <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul className="list-disc ml-6">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or &apos;mirror&apos; the materials on any other server</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Product Information</h2>
          <p>
            We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions 
            or prices are accurate, complete, reliable, current, or error-free. If a product is not as described, your sole remedy 
            is to return it in unused condition.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Ordering and Payment</h2>
          <p>By placing an order, you warrant that:</p>
          <ul className="list-disc ml-6">
            <li>You are legally capable of entering into binding contracts</li>
            <li>All information you provide is true and accurate</li>
            <li>You are an authorized user of the payment method provided</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Shipping and Delivery</h2>
          <p>
            We aim to process and ship orders promptly. However, delivery times may vary based on location and circumstances. 
            We are not responsible for delays beyond our control.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Returns and Refunds</h2>
          <p>
            Our return policy allows returns within 30 days of receipt. Items must be unused and in original packaging. 
            Refunds will be processed to the original payment method.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Disclaimer</h2>
          <p>
            The materials on Dermalix&apos;s website are provided on an &apos;as is&apos; basis. Dermalix makes no warranties, 
            expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied 
            warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property 
            or other violation of rights.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">8. Contact Information</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at:
          </p>
          <p className="mt-2">
            Email: legal@dermalix.com<br />
            Phone: +1 (555) 123-4567
          </p>
        </section>
      </div>
    </div>
  )
}
