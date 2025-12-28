import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0f15e3cf6c4b4dbe975f84d05943754e%2Ff17ba81f72c2462a8dc0a4924b1671a8?format=webp&width=200"
                alt="Red Ginger For Hair"
                className="h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:024-211-1964"
                className="inline-flex items-center gap-2 salon-btn-primary"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-3 border-t border-border pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:024-211-1964"
                className="block w-full text-center salon-btn-primary mt-4"
              >
                <span className="inline-flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </span>
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-muted mt-16 border-t border-border">
        <div className="container mx-auto max-w-6xl px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand Info */}
            <div>
              <h3 className="text-lg font-bold font-display text-primary mb-3">
                Red Ginger For Hair
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Healthy hair. Expert care. Beautiful results.
              </p>
              <div className="flex gap-3">
                {/* Social links placeholder */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm hover:bg-red-700 transition-colors"
                >
                  f
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm hover:bg-red-700 transition-colors"
                >
                  i
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.slice(0, 3).map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">More</h4>
              <ul className="space-y-2">
                {navLinks.slice(3).map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href="tel:024-211-1964"
                    className="hover:text-primary transition-colors"
                  >
                    📞 024 211 1964
                  </a>
                </li>
                <li>
                  <a
                    href="https://goo.gl/maps/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    📍 Jungle Ave, Accra
                  </a>
                </li>
                <li>
                  <span>🕐 Mon-Sat: 8am–6pm</span>
                </li>
                <li>
                  <span>🕐 Sunday: Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>
              © 2024 Red Ginger For Hair. All rights reserved. Healthy hair,
              healthy life.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
