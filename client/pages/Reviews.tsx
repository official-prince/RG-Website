import { Link } from "react-router-dom";
import { Star, Calendar, Phone } from "lucide-react";
import MainLayout from "@/components/MainLayout";

export default function Reviews() {
  const featuredReviews = [
    {
      name: "Susan Brownlee",
      title: "Local Guide · 40 reviews · 4 photos",
      rating: 5,
      date: "6 months ago",
      text: "After 6 months of shuttling from one hair salon to another to find a hairstylist I can trust, I think If found a salon I will be returning to. Emily was great and patient. I have a feeling she will work with me to get my hair back to its original glory after a number of hair snafus in Accra.",
      featured: true,
    },
    {
      name: "Fasena",
      title: "3 reviews",
      rating: 5,
      date: "4 years ago",
      text: "What a delight to have finally discovered the outstanding services at Red Ginger. Christine and her team are friendly and professional. I was surprised as Christine handled my first appointment personally and grateful that she understood my needs.",
      featured: true,
    },
    {
      name: "Kareen Obeng",
      title: "Local Guide · 45 reviews · 25 photos",
      rating: 5,
      date: "4 years ago",
      text: "The best Salon in Ghana in my opinion. Christine is talented and when she touches your hair it's golden. Always neat and professional and there's something about the way she does hair that makes it unique. You will always leave satisfied.",
      featured: true,
    },
    {
      name: "Rebecca Asamoah",
      title: "3 reviews",
      rating: 5,
      date: "4 years ago",
      text: "The salon and the restrooms are always clean. All the employees from the reception to the hairstylists are very professional, respectful and friendly. They render great services and are so good at what they do. Thank you Ms Christine and team!",
      featured: false,
    },
    {
      name: "c pluz",
      title: "Local Guide · 179 reviews · 922 photos",
      rating: 5,
      date: "4 years ago",
      text: "Good customer service and good work they do",
      featured: false,
    },
    {
      name: "Radha Hackman",
      title: "Local Guide · 9 reviews · 1 photo",
      rating: 5,
      date: "4 years ago",
      text: "Very clean and COVID conscious. Protocols are observed and enforced as best as they can. Staff are professional and very well trained. If you can catch her, Christine is the best!!",
      featured: false,
    },
    {
      name: "Elizabeth Dampson",
      title: "Local Guide · 11 reviews",
      rating: 5,
      date: "3 years ago",
      text: "They have an amazing experience and they're very good with hair and they really know what they are doing",
      featured: false,
    },
    {
      name: "Hikma F. A.",
      title: "Local Guide · 303 reviews · 1,823 photos",
      rating: 5,
      date: "5 years ago",
      text: "The service is definitely great. They know their stuff and their products are really good. They are however on the very high end in terms of price so load up! 🤣",
      featured: false,
    },
    {
      name: "Richmond Woblesseh",
      title: "Local Guide · 16 reviews · 1 photo",
      rating: 5,
      date: "6 years ago",
      text: "Red ginger for Hair is a wonderful place to fix your hair. It has carved out a reputation that makes it the perfect place to get your hair done.",
      featured: false,
    },
    {
      name: "Joselyn Dumas",
      title: "1 review",
      rating: 5,
      date: "6 years ago",
      text: "Excellent customer service. Great atmosphere and excellent hair care service",
      featured: false,
    },
    {
      name: "Caren",
      title: "Local Guide · 15 reviews · 2 photos",
      rating: 5,
      date: "7 years ago",
      text: "Friendly staff, good service, comfortable location. I highly recommend this establishment",
      featured: false,
    },
    {
      name: "shirley aboagye",
      title: "Local Guide · 16 reviews",
      rating: 5,
      date: "7 years ago",
      text: "Considering I didn't have an appointment I was seen to almost immediately. Loved my hair afterwards",
      featured: false,
    },
    {
      name: "John Taylor",
      title: "6 reviews · 3 photos",
      rating: 5,
      date: "6 years ago",
      text: "Excellent and amazing place for beautiful and gorgeous Salon",
      featured: false,
    },
    {
      name: "Tonia Udoh",
      title: "1 review",
      rating: 5,
      date: "7 years ago",
      text: "Good hair stylist plus you'd get pampered",
      featured: false,
    },
    {
      name: "Nana yaa seniagya boateng",
      title: "3 reviews",
      rating: 5,
      date: "5 years ago",
      text: "My go-to salon in Ghana. Excellent service",
      featured: false,
    },
    {
      name: "rebekah opuni",
      title: "10 reviews · 2 photos",
      rating: 5,
      date: "3 years ago",
      text: "Best salon in Ghana for mix race hair.",
      featured: false,
    },
    {
      name: "Anita Tawiah",
      title: "Local Guide · 60 reviews · 7 photos",
      rating: 5,
      date: "5 years ago",
      text: "Professional team and atmosphere",
      featured: false,
    },
    {
      name: "Alimatu Mohammed",
      title: "3 reviews · 10 photos",
      rating: 5,
      date: "8 years ago",
      text: "Quick and quality service",
      featured: false,
    },
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
      ))}
    </div>
  );

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-red-50 via-white to-orange-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold font-display text-foreground mb-6">
              What Our Clients Say
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Real testimonials from real clients who trust Red Ginger For Hair
              with their hair journey
            </p>
          </div>
        </div>
      </section>

      {/* Overall Rating Stats */}
      <section className="py-12 md:py-16 bg-muted border-b border-border">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold font-display text-primary mb-2">
                4.6
              </div>
              <StarRating rating={5} />
              <p className="text-muted-foreground mt-2">Out of 5 stars</p>
            </div>
            <div>
              <div className="text-5xl font-bold font-display text-secondary mb-2">
                97
              </div>
              <p className="text-muted-foreground">Client reviews</p>
            </div>
            <div>
              <div className="text-5xl font-bold font-display text-primary mb-2">
                100%
              </div>
              <p className="text-muted-foreground">5-star rated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-12">
            Featured Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featuredReviews
              .filter((review) => review.featured)
              .map((review, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl border-2 border-primary shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="mb-4">
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">
                      {review.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {review.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {review.date}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          {/* All Reviews Grid */}
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-8">
            All Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredReviews.map((review, index) => (
              <div key={index} className="bg-muted p-6 rounded-lg border border-border hover:border-primary/30 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-foreground">
                      {review.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {review.title}
                    </p>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  {review.text}
                </p>
                <p className="text-xs text-muted-foreground">{review.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Themes */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-12 text-center">
            What Clients Love About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-border text-center">
              <div className="text-4xl mb-3">👩‍💼</div>
              <h3 className="font-semibold text-foreground mb-2">
                Professional Staff
              </h3>
              <p className="text-sm text-muted-foreground">
                Certified stylists with expert knowledge and training
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border text-center">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="font-semibold text-foreground mb-2">
                Hair Expertise
              </h3>
              <p className="text-sm text-muted-foreground">
                Specialized in hair restoration and natural hair care
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border text-center">
              <div className="text-4xl mb-3">🏛️</div>
              <h3 className="font-semibold text-foreground mb-2">
                Clean & Welcoming
              </h3>
              <p className="text-sm text-muted-foreground">
                Immaculate facilities and comfortable atmosphere
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border text-center">
              <div className="text-4xl mb-3">💝</div>
              <h3 className="font-semibold text-foreground mb-2">
                Exceptional Service
              </h3>
              <p className="text-sm text-muted-foreground">
                Patient, friendly, and personalized care for every client
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Ready to Experience Red Ginger For Hair?
          </h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Join hundreds of satisfied clients and discover why Red Ginger For
            Hair is Ghana's most trusted salon
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
              024 211 1964
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
