import { useLocation } from "react-router-dom";
import MainLayout from "@/components/MainLayout";
import { ArrowRight } from "lucide-react";

const pageInfo: Record<
  string,
  { title: string; description: string; emoji: string }
> = {
  services: {
    title: "Services",
    description:
      "Natural hair care & treatment, Hair restoration & repair, Styling & maintenance, Consultations",
    emoji: "✂️",
  },
  reviews: {
    title: "Reviews & Testimonials",
    description:
      "Read what our clients say about their experience at Red Ginger For Hair",
    emoji: "⭐",
  },
  gallery: {
    title: "Gallery",
    description:
      "Explore our salon interior, hair transformations, and our stylists at work",
    emoji: "📸",
  },
  contact: {
    title: "Contact Us",
    description:
      "Get in touch with Red Ginger For Hair. We'd love to hear from you and answer any questions.",
    emoji: "💬",
  },
};

export default function Placeholder() {
  const location = useLocation();
  const pageName = location.pathname.slice(1);
  const info = pageInfo[pageName] || {
    title: "Page",
    description: "This page is being developed.",
    emoji: "🚀",
  };

  return (
    <MainLayout>
      <section className="py-32 md:py-40 bg-gradient-to-br from-red-50 via-white to-orange-50">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <div className="text-7xl md:text-8xl mb-6">{info.emoji}</div>
          <h1 className="text-5xl md:text-6xl font-bold font-display text-foreground mb-6">
            {info.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {info.description}
          </p>
          <div className="bg-muted p-8 rounded-xl border border-border max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-6">
              This page is currently being customized to showcase the best of Red
              Ginger For Hair. We're working on making it beautiful and informative.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 salon-btn-primary"
              >
                <ArrowRight className="w-5 h-5" />
                Back to Home
              </a>
              <a
                href="tel:024-211-1964"
                className="inline-flex items-center justify-center gap-2 salon-btn-secondary"
              >
                📞 Call Us
              </a>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-8">
            In the meantime, feel free to{" "}
            <a
              href="tel:024-211-1964"
              className="text-primary hover:underline font-semibold"
            >
              call us
            </a>{" "}
            to learn more or book an appointment.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}
