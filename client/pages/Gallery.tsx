import { useState } from "react";
import { Link } from "react-router-dom";
import { X, Phone, Calendar } from "lucide-react";
import MainLayout from "@/components/MainLayout";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "Bold Color Transformation",
      category: "Transformation",
      image: "https://cdn.builder.io/api/v1/image/assets%2F0f15e3cf6c4b4dbe975f84d05943754e%2F9faeeaaf1edb44e4aec0b487e221344e?format=webp&width=800",
    },
    {
      id: 2,
      title: "Hair Restoration & Styling",
      category: "Transformation",
      image: "https://cdn.builder.io/api/v1/image/assets%2F0f15e3cf6c4b4dbe975f84d05943754e%2Ff23505d6d4ed40f88cbbd9c45f27dd7c?format=webp&width=800",
    },
    {
      id: 3,
      title: "Professional Color Work",
      category: "Transformation",
      image: "https://cdn.builder.io/api/v1/image/assets%2F0f15e3cf6c4b4dbe975f84d05943754e%2F043bfe575b8d40a5a83d9a4a47f0564e?format=webp&width=800",
    },
    {
      id: 4,
      title: "Complete Hair Transformation",
      category: "Transformation",
      image: "https://cdn.builder.io/api/v1/image/assets%2F0f15e3cf6c4b4dbe975f84d05943754e%2F6a1e3533fca64fa0a8f19668ec93ec4f?format=webp&width=800",
    },
    {
      id: 5,
      title: "Professional Blowout",
      category: "Styling",
      image: "https://cdn.builder.io/api/v1/image/assets%2F0f15e3cf6c4b4dbe975f84d05943754e%2F5d4a0204bc0e4978a4b2d1627ddbbc83?format=webp&width=800",
    },
    {
      id: 6,
      title: "Elegant Wave Styling",
      category: "Styling",
      image: "https://cdn.builder.io/api/v1/image/assets%2F0f15e3cf6c4b4dbe975f84d05943754e%2F77f78f3c034947408197ea57d46ec122?format=webp&width=800",
    },
    {
      id: 7,
      title: "Long Hair Care",
      category: "Treatment",
      image: "https://cdn.builder.io/api/v1/image/assets%2F0f15e3cf6c4b4dbe975f84d05943754e%2F5bbdcd2c66cd46159385b41193ab4eb6?format=webp&width=800",
    },
    {
      id: 8,
      title: "Salon Portfolio",
      category: "Salon",
      image: "https://cdn.builder.io/api/v1/image/assets%2F0f15e3cf6c4b4dbe975f84d05943754e%2F31a88192c09a4566b2914e107e8913d3?format=webp&width=800",
    },
    {
      id: 9,
      title: "Fashion & Hair",
      category: "Styling",
      image: "https://cdn.builder.io/api/v1/image/assets%2F0f15e3cf6c4b4dbe975f84d05943754e%2F14444a269bc74a88b9c7668b5e2ef0bb?format=webp&width=800",
    },
    {
      id: 10,
      title: "Professional Care",
      category: "Treatment",
      image: "https://cdn.builder.io/api/v1/image/assets%2F0f15e3cf6c4b4dbe975f84d05943754e%2F4ac1284549da4bc0ad82357277024ab6?format=webp&width=800",
    },
    {
      id: 11,
      title: "Updo Styling",
      category: "Styling",
      image: "https://cdn.builder.io/api/v1/image/assets%2F0f15e3cf6c4b4dbe975f84d05943754e%2F8e71ed2337ac4dbd99295dd6b1dcbd8e?format=webp&width=800",
    },
    {
      id: 12,
      title: "Hair Health Treatment",
      category: "Treatment",
      image: "https://cdn.builder.io/api/v1/image/assets%2F0f15e3cf6c4b4dbe975f84d05943754e%2Ff631a21bf7504ed19e93493c4ef52a52?format=webp&width=800",
    },
    {
      id: 13,
      title: "Client Makeover",
      category: "Styling",
      image: "https://cdn.builder.io/api/v1/image/assets%2F0f15e3cf6c4b4dbe975f84d05943754e%2F3849fa75660345609fc26b1b335457f1?format=webp&width=800",
    },
    {
      id: 14,
      title: "Hair Restoration",
      category: "Treatment",
      image: "https://cdn.builder.io/api/v1/image/assets%2F0f15e3cf6c4b4dbe975f84d05943754e%2F3f5c87c2459d4d2bbcc4395deac090a6?format=webp&width=800",
    },
    {
      id: 15,
      title: "Specialty Styling",
      category: "Styling",
      image: "https://cdn.builder.io/api/v1/image/assets%2F0f15e3cf6c4b4dbe975f84d05943754e%2F5018ef2f854f4a3c9dc27db0f566a224?format=webp&width=800",
    },
  ];

  const categories = [
    "All",
    "Salon",
    "Styling",
    "Treatment",
    "Transformation",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-red-50 via-white to-orange-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold font-display text-foreground mb-6">
              Our Gallery
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Explore our salon interior, hair transformations, and the artistry
              of our expert stylists at work
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 md:py-16 bg-white border-b border-border">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-lg"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="relative group overflow-hidden rounded-xl border border-border cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                {/* Image Container */}
                <div className="relative w-full h-80 overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-start p-4">
                  <div className="text-white">
                    <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold font-display">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No images found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[selectedImage].image}
              alt={filteredItems[selectedImage].title}
              className="max-h-[70vh] w-auto object-contain rounded-lg"
            />
            <div className="text-white text-center mt-6">
              <span className="inline-block bg-primary px-4 py-2 rounded-full text-sm font-semibold mb-2">
                {filteredItems[selectedImage].category}
              </span>
              <h2 className="text-2xl font-bold font-display">
                {filteredItems[selectedImage].title}
              </h2>
            </div>

            {/* Navigation */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={() =>
                  setSelectedImage(
                    selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1
                  )
                }
                className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
              >
                ← Previous
              </button>
              <button
                onClick={() =>
                  setSelectedImage(
                    selectedImage === filteredItems.length - 1 ? 0 : selectedImage + 1
                  )
                }
                className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Why View Our Gallery Section */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-12 text-center">
            What You'll See
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-border text-center">
              <div className="text-4xl mb-3">🏛️</div>
              <h3 className="font-semibold text-foreground mb-2">
                Salon Interior
              </h3>
              <p className="text-sm text-muted-foreground">
                Our beautiful, welcoming salon space designed for comfort and elegance
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-border text-center">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="font-semibold text-foreground mb-2">
                Hair Transformations
              </h3>
              <p className="text-sm text-muted-foreground">
                Before and after results showcasing our expertise in hair restoration
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-border text-center">
              <div className="text-4xl mb-3">💇‍♀️</div>
              <h3 className="font-semibold text-foreground mb-2">
                Styling Services
              </h3>
              <p className="text-sm text-muted-foreground">
                Our stylists in action creating beautiful looks for our valued clients
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-border text-center">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="font-semibold text-foreground mb-2">
                Artistic Details
              </h3>
              <p className="text-sm text-muted-foreground">
                Close-up views of intricate styling techniques and treatments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Ready to See the Difference?
          </h2>
          <p className="text-lg mb-8 opacity-95">
            Schedule your appointment and experience Red Ginger For Hair yourself
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
    </MainLayout>
  );
}
