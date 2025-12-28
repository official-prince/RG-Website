import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import MainLayout from "@/components/MainLayout";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const businessHours = [
    { day: "Monday", hours: "8:00 AM – 6:00 PM" },
    { day: "Tuesday", hours: "8:00 AM – 6:00 PM" },
    { day: "Wednesday", hours: "8:00 AM – 6:00 PM" },
    { day: "Thursday", hours: "8:00 AM – 6:00 PM" },
    { day: "Friday", hours: "8:00 AM – 6:00 PM" },
    { day: "Saturday", hours: "8:00 AM – 6:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-red-50 via-white to-orange-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold font-display text-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Have questions? We'd love to hear from you. Reach out to Red Ginger
              For Hair and let's start your hair transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-muted p-8 rounded-xl border border-border hover:border-primary/30 transition-colors">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-display text-foreground mb-3">
                Call Us
              </h3>
              <a
                href="tel:024-211-1964"
                className="text-lg font-semibold text-primary hover:text-red-700 transition-colors"
              >
                024 211 1964
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                Available during business hours
              </p>
            </div>

            {/* Location */}
            <div className="bg-muted p-8 rounded-xl border border-border hover:border-primary/30 transition-colors">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-display text-foreground mb-3">
                Location
              </h3>
              <a
                href="https://maps.google.com/?q=Jungle+Ave+Accra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Red Ginger For Hair
                <br />
                Jungle Ave, Accra, Ghana
                <br />
                <span className="text-xs">Plus Code: JRRX+VF</span>
              </a>
            </div>

            {/* Email Info */}
            <div className="bg-muted p-8 rounded-xl border border-border hover:border-primary/30 transition-colors">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-display text-foreground mb-3">
                Hours
              </h3>
              <p className="text-sm text-muted-foreground">
                Monday – Saturday
                <br />
                8:00 AM – 6:00 PM
                <br />
                <span className="font-semibold">Sunday: Closed</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="024 211 1964"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us about your hair care needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full salon-btn-primary text-center"
                >
                  Send Message
                </button>

                {submitted && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    ✓ Thank you! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Business Hours & Map */}
            <div className="space-y-8">
              {/* Hours Schedule */}
              <div className="bg-white p-8 rounded-xl border border-border">
                <h3 className="text-2xl font-bold font-display text-foreground mb-6 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  Business Hours
                </h3>
                <div className="space-y-3">
                  {businessHours.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="font-medium text-foreground">{item.day}</span>
                      <span className={`text-sm ${item.hours === "Closed" ? "text-red-600 font-semibold" : "text-muted-foreground"}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-xl overflow-hidden border border-border h-96 flex items-center justify-center">
                <a
                  href="https://maps.google.com/?q=Jungle+Ave+Accra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center hover:no-underline"
                >
                  <p className="text-muted-foreground mb-4">
                    📍 Jungle Ave, Accra, Ghana
                  </p>
                  <button className="salon-btn-primary">
                    View on Google Maps
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Call Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-12 text-center">
            How We Can Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-muted p-6 rounded-lg border border-border text-center">
              <div className="text-4xl mb-3">💇‍♀️</div>
              <h3 className="font-semibold text-foreground mb-2">Consultations</h3>
              <p className="text-sm text-muted-foreground">
                Discuss your hair goals and treatment options
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg border border-border text-center">
              <div className="text-4xl mb-3">📅</div>
              <h3 className="font-semibold text-foreground mb-2">
                Appointments
              </h3>
              <p className="text-sm text-muted-foreground">
                Schedule your salon visit at your convenience
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg border border-border text-center">
              <div className="text-4xl mb-3">❓</div>
              <h3 className="font-semibold text-foreground mb-2">Questions</h3>
              <p className="text-sm text-muted-foreground">
                Ask anything about our services and products
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg border border-border text-center">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="font-semibold text-foreground mb-2">
                Special Requests
              </h3>
              <p className="text-sm text-muted-foreground">
                Tell us about your specific hair needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Ready to Transform Your Hair?
          </h2>
          <p className="text-lg mb-8 opacity-95">
            Call us today or fill out the form above to get started
          </p>
          <a
            href="tel:024-211-1964"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call Now: 024 211 1964
          </a>
        </div>
      </section>
    </MainLayout>
  );
}
