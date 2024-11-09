import React from 'react'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      
      <div className="space-y-6">
        <p className="text-lg">
          We&apos;re here to help and answer any question you might have. We look forward to hearing from you.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Email</h3>
              <p>support@dermalix.com</p>
            </div>

            <div>
              <h3 className="font-medium">Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>

            <div>
              <h3 className="font-medium">Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
            </div>

            <div>
              <h3 className="font-medium">Address</h3>
              <p>123 Skincare Boulevard</p>
              <p>Suite 100</p>
              <p>New York, NY 10001</p>
              <p>United States</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Customer Support</h2>
          <p>
            For the fastest response to your inquiries, please include:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Your full name</li>
            <li>Order number (if applicable)</li>
            <li>Detailed description of your inquiry</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
