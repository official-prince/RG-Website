import { Link } from "react-router-dom";
import { Phone, Calendar, Star } from "lucide-react";
import MainLayout from "@/components/MainLayout";

export default function Home() {
  const strengths = [
    {
      icon: "👩‍💼",
      title: "Professional & Experienced Stylists",
      description:
        "Our team of certified stylists brings years of expertise in hair care and transformation.",
    },
    {
      icon: "✨",
      title: "Hair Health & Elasticity Preservation",
      description:
        "We prioritize the health and integrity of your natural hair with specialized treatments.",
    },
    {
      icon: "💝",
      title: "Excellent Customer Service",
      description:
        "Your comfort and satisfaction are our top priorities. We listen, we care, we deliver.",
    },
  ];

  const reviews = [
    {
      name: "Susan Brownlee",
      rating: 5,
      text: "The patience shown and hair recovery has been amazing!",
    },
    {
      name: "c pluz",
      rating: 5,
      text: "Excellent customer service and professional team.",
    },
    {
      name: "Fasena",
      rating: 5,
      text: "Professional, attentive, and personalized care. Highly recommended!",
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-red-50 via-white to-orange-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full -ml-40 -mb-40"></div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold font-display text-foreground mb-6 leading-tight">
              Healthy Hair.
              <span className="text-primary"> Expert Care.</span>
              <span className="text-secondary"> Beautiful Results.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              At Red Ginger For Hair, we believe that healthy hair is a journey, not a
              destination. Our dedicated team in Accra is committed to restoring,
              maintaining, and celebrating your natural hair with professional care
              that prioritizes hair integrity above all else.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 salon-btn-primary"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Link>
              <a
                href="tel:024-211-1964"
                className="inline-flex items-center justify-center gap-2 salon-btn-secondary"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center salon-btn-outline"
              >
                View Services
              </Link>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="font-semibold text-foreground">4.6 / 5</span>
              <span className="text-muted-foreground">from 97 clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Strengths Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three core values that guide everything we do at Red Ginger For Hair
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="group p-8 bg-muted rounded-xl border border-border hover:border-primary/30 hover:bg-white transition-all duration-300"
              >
                <div className="text-5xl mb-4">{strength.icon}</div>
                <h3 className="text-xl font-bold font-display text-foreground mb-3">
                  {strength.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Reviews Section */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real testimonials from real clients who trust us with their hair
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-border">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                <p className="font-semibold text-foreground">— {review.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/reviews" className="salon-btn-outline">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Ready to Transform Your Hair?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Start your hair health journey with Red Ginger For Hair today. Book
            your consultation or give us a call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Book Now
            </Link>
            <a
              href="tel:024-211-1964"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              024 211 1964
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
