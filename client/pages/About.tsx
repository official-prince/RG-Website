import { Link } from "react-router-dom";
import { Calendar, Phone } from "lucide-react";
import MainLayout from "@/components/MainLayout";

export default function About() {
  const teamMembers = [
    {
      name: "Christine",
      role: "Founder & Lead Hair Care Specialist",
      bio: "With over 10 years of experience in natural hair care, Christine brings passion and expertise to every client consultation. She founded Red Ginger For Hair with a vision to provide transformative, patient-centered hair care in Accra.",
      image: "https://cdn.builder.io/api/v1/image/assets%2F0f15e3cf6c4b4dbe975f84d05943754e%2Fe7ee557c5e6c4714b403ccf1ddb14277?format=webp&width=800",
      featured: true,
    },
    {
      name: "Emily",
      role: "Hair Restoration Expert",
      bio: "Emily specializes in repairing and restoring damaged hair to its natural health and beauty.",
    },
    {
      name: "The Team",
      role: "Dedicated Stylists",
      bio: "Our entire team is committed to providing patient, personalized care and building long-term relationships with clients.",
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-red-50 via-white to-orange-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold font-display text-foreground mb-6">
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Red Ginger For Hair was founded on a simple belief: every client
              deserves professional, patient, and personalized hair care that
              prioritizes the health and integrity of their natural hair.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Story */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Located in the heart of Accra on Jungle Ave, Red Ginger For
                  Hair is more than just a salon. We're a sanctuary for hair
                  health and transformation. Our team combines technical
                  expertise with genuine care for every client who walks through
                  our doors.
                </p>
                <p>
                  We understand that damaged hair tells a story—and we're here to
                  help you write a new chapter. Whether you're dealing with
                  over-processed hair, seeking to restore your natural texture,
                  or simply looking for expert maintenance, we approach each
                  client with patience, respect, and a commitment to excellence.
                </p>
                <p>
                  Our philosophy is simple: healthy hair starts with healthy
                  practices. We use quality products, proven techniques, and
                  personalized consultations to ensure your hair not only looks
                  beautiful but feels healthy too.
                </p>
              </div>
            </div>

            {/* Right Column - Values */}
            <div className="bg-muted p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold font-display text-foreground mb-6">
                Our Commitment
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    ✓ Professionalism
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Our stylists are certified and continually trained in the
                    latest techniques and best practices for hair health.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    ✓ Patience
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Hair restoration takes time. We work at your hair's pace,
                    never rushing, always listening to your needs.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    ✓ Personalized Care
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Every head of hair is unique. We create customized treatment
                    plans tailored to your specific hair goals.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    ✓ Hair Integrity
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Your hair's health is our priority. All treatments are
                    designed to strengthen, protect, and restore.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 py-8 border-y border-border">
            <div className="text-center">
              <div className="text-4xl font-bold font-display text-primary mb-2">
                4.6★
              </div>
              <p className="text-muted-foreground">Rating from 97 clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-display text-secondary mb-2">
                100%
              </div>
              <p className="text-muted-foreground">Client satisfaction focus</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-display text-primary mb-2">
                10+
              </div>
              <p className="text-muted-foreground">Years of combined expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
              Meet the Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate professionals dedicated to transforming your hair
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl border border-border overflow-hidden transition-transform hover:scale-105 ${
                  member.featured ? "md:col-span-1 shadow-xl" : ""
                }`}
              >
                {member.image ? (
                  <div className="w-full h-96 bg-primary/10 overflow-hidden flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-48 bg-primary/10 flex items-center justify-center">
                    <span className="text-6xl">💇‍♀️</span>
                  </div>
                )}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold font-display text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-3 text-sm">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-8">
                Visit Us
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Address</h3>
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
                    Plus Code: JRRX+VF Accra
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                  <a
                    href="tel:024-211-1964"
                    className="text-muted-foreground hover:text-primary transition-colors text-lg"
                  >
                    024 211 1964
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                  <div className="text-muted-foreground text-sm space-y-1">
                    <p>Monday – Friday: 8am–6pm</p>
                    <p>Saturday: 8am–6pm</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-muted rounded-xl overflow-hidden border border-border h-80 flex items-center justify-center">
              <a
                href="https://maps.google.com/?q=Jungle+Ave+Accra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center"
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
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Ready to Begin Your Hair Journey?
          </h2>
          <p className="text-lg mb-8 opacity-95">
            Book your consultation with our team today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Link>
            <a
              href="tel:024-211-1964"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
