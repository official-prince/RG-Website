import { Link } from "react-router-dom";
import { Calendar, Phone, CheckCircle } from "lucide-react";
import MainLayout from "@/components/MainLayout";

export default function Services() {
  const services = [
    {
      icon: "🌿",
      title: "Natural Hair Care & Treatment",
      description:
        "Comprehensive treatments designed to nourish, strengthen, and restore your natural hair. We use premium products that preserve hair integrity and promote long-term health.",
      benefits: [
        "Deep conditioning treatments",
        "Protein enrichment",
        "Moisture restoration",
        "Scalp treatment & massage",
      ],
    },
    {
      icon: "✨",
      title: "Hair Restoration & Repair",
      description:
        "Specialized services for damaged, over-processed, or weakened hair. Our expert stylists work to restore elasticity, strength, and natural beauty to your locks.",
      benefits: [
        "Damage assessment & repair plan",
        "Strengthening treatments",
        "Elasticity restoration",
        "Hair recovery program",
      ],
    },
    {
      icon: "💇‍♀️",
      title: "Styling & Maintenance",
      description:
        "Professional styling services to keep your hair looking fresh and fabulous. From everyday looks to special occasion styles, we've got you covered.",
      benefits: [
        "Blowouts & styling",
        "Twist-outs & set styles",
        "Braiding & protective styles",
        "Maintenance appointments",
      ],
    },
    {
      icon: "🗣️",
      title: "Hair Consultations",
      description:
        "One-on-one personalized consultations to assess your hair, understand your goals, and create a customized care plan tailored to your specific needs.",
      benefits: [
        "Hair health assessment",
        "Goal setting & planning",
        "Product recommendations",
        "Care routine guidance",
      ],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Consultation",
      description:
        "We start with a thorough consultation to understand your hair type, concerns, and goals.",
    },
    {
      number: "02",
      title: "Assessment",
      description:
        "Our expert stylists assess your hair's current condition and create a personalized treatment plan.",
    },
    {
      number: "03",
      title: "Treatment",
      description:
        "We apply premium products and proven techniques to achieve the best results for your hair.",
    },
    {
      number: "04",
      title: "Follow-up",
      description:
        "We provide guidance on maintaining your results and recommend a personalized home care routine.",
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-red-50 via-white to-orange-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold font-display text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Comprehensive hair care solutions designed to restore, maintain, and
              celebrate your natural hair. From treatment to styling, we have
              everything you need for healthy, beautiful hair.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-16 text-center">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold font-display text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-red-700 transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-16 text-center">
            Our Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-xl border border-border h-full">
                  <div className="text-5xl font-bold font-display text-primary/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold font-display text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < process.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-12 text-primary">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-12 text-center">
            Why Choose Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-muted p-6 rounded-lg border border-border text-center">
              <div className="text-4xl mb-3">👩‍⚕️</div>
              <h3 className="font-semibold text-foreground mb-2">Expert Team</h3>
              <p className="text-sm text-muted-foreground">
                Certified professionals with years of experience in hair care
              </p>
            </div>

            <div className="bg-muted p-6 rounded-lg border border-border text-center">
              <div className="text-4xl mb-3">🧴</div>
              <h3 className="font-semibold text-foreground mb-2">
                Premium Products
              </h3>
              <p className="text-sm text-muted-foreground">
                We use only the highest quality products for optimal results
              </p>
            </div>

            <div className="bg-muted p-6 rounded-lg border border-border text-center">
              <div className="text-4xl mb-3">⏱️</div>
              <h3 className="font-semibold text-foreground mb-2">
                Personalized Care
              </h3>
              <p className="text-sm text-muted-foreground">
                Customized treatments tailored to your specific hair needs
              </p>
            </div>

            <div className="bg-muted p-6 rounded-lg border border-border text-center">
              <div className="text-4xl mb-3">💚</div>
              <h3 className="font-semibold text-foreground mb-2">Hair Health</h3>
              <p className="text-sm text-muted-foreground">
                We prioritize the integrity and long-term health of your hair
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Booking Section */}
      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-center">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 opacity-95 text-center max-w-2xl mx-auto">
            Book your consultation or service appointment today. Our team is
            excited to work with you on your hair journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Link>
            <a
              href="tel:024-211-1964"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-muted p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                How often should I get treatments?
              </h3>
              <p className="text-muted-foreground">
                This depends on your hair type and condition. During your
                consultation, we'll recommend a personalized schedule that works
                best for your hair goals.
              </p>
            </div>

            <div className="bg-muted p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                What products do you use?
              </h3>
              <p className="text-muted-foreground">
                We use premium, professional-grade products selected specifically
                for their ability to strengthen and restore hair health without
                harmful chemicals.
              </p>
            </div>

            <div className="bg-muted p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Do you offer consultations?
              </h3>
              <p className="text-muted-foreground">
                Absolutely! We encourage all clients to start with a consultation.
                This helps us understand your hair, goals, and create the perfect
                treatment plan for you.
              </p>
            </div>

            <div className="bg-muted p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                How do I book an appointment?
              </h3>
              <p className="text-muted-foreground">
                You can book directly by calling us at 024 211 1964, or use our
                online contact form. We'll confirm your appointment and answer any
                questions you might have.
              </p>
            </div>

            <div className="bg-muted p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Is there a first-time customer special?
              </h3>
              <p className="text-muted-foreground">
                Contact us directly to ask about current promotions and special
                offers for new clients. We love welcoming new members to our Red
                Ginger family!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Transform Your Hair Today
          </h2>
          <p className="text-lg mb-8 opacity-95">
            Experience the Red Ginger For Hair difference
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
