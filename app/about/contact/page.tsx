import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Dermalix",
  description: "Get in touch with our team for inquiries, support, or partnership opportunities.",
};

export default function ContactPage() {
  const contactMethods = [
    {
      title: "Customer Support",
      description: "Questions about our products or your order?",
      email: "support@dermalix.com",
      phone: "+1 (800) 123-4567",
      hours: "Mon-Fri: 9AM-6PM PST"
    },
    {
      title: "Business Inquiries",
      description: "Interested in partnering with us?",
      email: "partnerships@dermalix.com",
      phone: "+1 (800) 234-5678",
      hours: "Mon-Fri: 9AM-5PM PST"
    },
    {
      title: "Press & Media",
      description: "Media inquiries and press kit requests.",
      email: "press@dermalix.com",
      phone: "+1 (800) 345-6789",
      hours: "Mon-Fri: 9AM-5PM PST"
    }
  ];

  const locations = [
    {
      name: "Headquarters",
      address: ["123 Innovation Drive", "San Francisco, CA 94105", "United States"],
      type: "Corporate Office"
    },
    {
      name: "Research Center",
      address: ["456 Science Park", "Boston, MA 02110", "United States"],
      type: "R&D Facility"
    },
    {
      name: "Manufacturing",
      address: ["789 Production Way", "Austin, TX 78701", "United States"],
      type: "Production Facility"
    }
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-lg text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
        Have questions or want to learn more about Dermalix? We're here to help.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {contactMethods.map((method, index) => (
          <div
            key={index}
            className="bg-background/50 rounded-lg p-6 border border-primary/10"
          >
            <h2 className="text-xl font-semibold mb-2">{method.title}</h2>
            <p className="text-foreground/70 mb-4">{method.description}</p>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-primary mr-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${method.email}`} className="text-primary hover:underline">
                  {method.email}
                </a>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-primary mr-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-foreground/70">{method.phone}</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-primary mr-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-foreground/70">{method.hours}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Our Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-background/50 rounded-lg p-6 border border-primary/10"
            >
              <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
              <p className="text-primary mb-4">{location.type}</p>
              <address className="text-foreground/70 not-italic">
                {location.address.map((line, lineIndex) => (
                  <div key={lineIndex}>{line}</div>
                ))}
              </address>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8">Send Us a Message</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">First Name</label>
              <input
                type="text"
                className="w-full p-2 rounded-lg border border-primary/10 bg-background/50"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Last Name</label>
              <input
                type="text"
                className="w-full p-2 rounded-lg border border-primary/10 bg-background/50"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 rounded-lg border border-primary/10 bg-background/50"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Subject</label>
            <select className="w-full p-2 rounded-lg border border-primary/10 bg-background/50">
              <option>General Inquiry</option>
              <option>Product Support</option>
              <option>Partnership Opportunity</option>
              <option>Press Inquiry</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              className="w-full p-2 rounded-lg border border-primary/10 bg-background/50 h-32"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
