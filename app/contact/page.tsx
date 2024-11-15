'use client';

import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';
import { ContactForm } from '@/components/contact-form';
import { FAQSection } from '@/components/faq-section';

const mapCenter = { lat: 40.7128, lng: -74.0060 }; // New York coordinates

export default function ContactPage() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/5">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary">
            Contact Us
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </div>
      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form Section */}
          <div className="group relative overflow-hidden rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/20 p-8
                       hover:shadow-lg hover:shadow-primary/20 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-8">
            <div className="group relative overflow-hidden rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/20 p-8
                         hover:shadow-lg hover:shadow-primary/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Get in Touch</h2>
                <div className="grid gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Email</h3>
                    <p className="text-foreground/80">support@dermalix.com</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Phone</h3>
                    <p className="text-foreground/80">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Business Hours</h3>
                    <p className="text-foreground/80">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Address</h3>
                    <div className="text-foreground/80">
                      <p>123 Skincare Boulevard</p>
                      <p>Suite 100</p>
                      <p>New York, NY 10001</p>
                      <p>United States</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="aspect-video relative overflow-hidden rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/20
                         hover:shadow-lg hover:shadow-primary/20 transition-all duration-500">
              {isLoaded ? (
                <GoogleMap
                  zoom={14}
                  center={mapCenter}
                  mapContainerClassName="w-full h-full"
                  options={{
                    styles: [
                      {
                        featureType: 'all',
                        elementType: 'all',
                        stylers: [{ saturation: -100 }]
                      }
                    ]
                  }}
                >
                  <MarkerF position={mapCenter} />
                </GoogleMap>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-foreground/80">
                  Loading map...
                </div>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary">
            Frequently Asked Questions
          </h2>
          <FAQSection />
        </div>
      </div>
    </div>
  )
}
