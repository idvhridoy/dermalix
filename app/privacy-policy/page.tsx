import React from 'react'

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <div className="space-y-6">
        <p className="text-lg">
          Last updated: January 2024
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
          <div className="space-y-2">
            <h3 className="text-xl font-medium">Personal Information</h3>
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="list-disc ml-6">
              <li>Name and contact information</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information</li>
              <li>Email address</li>
              <li>Phone number</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc ml-6">
            <li>Process your orders and payments</li>
            <li>Communicate with you about your orders</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Improve our products and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Information Sharing</h2>
          <p>We do not sell your personal information. We may share your information with:</p>
          <ul className="list-disc ml-6">
            <li>Service providers who assist in our operations</li>
            <li>Payment processors for secure transactions</li>
            <li>Shipping partners for order delivery</li>
            <li>Legal authorities when required by law</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information. 
            However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc ml-6">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <p className="mt-2">
            Email: privacy@dermalix.com<br />
            Phone: +1 (555) 123-4567
          </p>
        </section>
      </div>
    </div>
  )
}
