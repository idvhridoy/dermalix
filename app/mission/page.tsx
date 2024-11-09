import React from 'react';

export default function MissionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Our Mission</h1>
      
      <div className="space-y-6">
        <section className="space-y-4">
          <p className="text-lg leading-relaxed">
            At Dermalix, our mission is to revolutionize skincare through innovative, science-backed solutions 
            that enhance and protect the natural beauty of every individual. We are committed to developing 
            products that combine cutting-edge dermatological research with natural ingredients, ensuring 
            optimal skin health and radiance for our customers.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Core Commitments</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 bg-secondary/10 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Innovation</h3>
              <p>
                Continuously researching and developing breakthrough formulations that address diverse skin concerns.
              </p>
            </div>
            <div className="p-4 bg-secondary/10 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Quality</h3>
              <p>
                Maintaining the highest standards in ingredient selection and manufacturing processes.
              </p>
            </div>
            <div className="p-4 bg-secondary/10 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Sustainability</h3>
              <p>
                Implementing eco-friendly practices throughout our production and packaging processes.
              </p>
            </div>
            <div className="p-4 bg-secondary/10 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Accessibility</h3>
              <p>
                Making advanced skincare solutions accessible to people from all walks of life.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Approach</h2>
          <p className="text-lg leading-relaxed">
            We believe in a holistic approach to skincare that combines:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Scientific research and clinical testing</li>
            <li>Natural and sustainable ingredients</li>
            <li>Customer education and support</li>
            <li>Continuous product improvement based on feedback</li>
            <li>Ethical business practices</li>
          </ul>
        </section>

        <section className="mt-8 p-6 bg-primary/5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Join Our Journey</h2>
          <p className="text-lg leading-relaxed">
            We invite you to be part of our mission to transform the skincare industry. Together, 
            we can create a future where everyone has access to effective, sustainable, and 
            scientifically-proven skincare solutions.
          </p>
        </section>
      </div>
    </div>
  );
}
