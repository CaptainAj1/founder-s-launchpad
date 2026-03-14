import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const InternwiseNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const navLinks = [
    { label: "About Us", href: "#about" },
    { label: "Our Mission", href: "#mission" },
    { label: "Platforms", href: "#platforms" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className={`font-display font-bold text-xl ${scrolled ? "text-navy" : "text-white"}`}>
              Internwise
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`text-sm font-medium transition-colors hover:text-sky ${scrolled ? "text-navy/70" : "text-white/80"}`}
              >
                {link.label}
              </button>
            ))}
            <Link href="/founders" className={`text-sm font-medium transition-colors hover:text-coral ${scrolled ? "text-navy" : "text-white"}`}>
              ✨ Founder Partnership
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://internwise.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors ${scrolled ? "border-navy text-navy hover:bg-navy hover:text-white" : "border-white/60 text-white hover:bg-white/10"}`}
            >
              Find Internships
            </a>
            <a
              href="https://internwise.co.uk/employers"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full text-sm font-semibold bg-coral hover:bg-coral-hover text-white transition-colors"
            >
              Post a Role
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-navy" : "bg-white"} ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-navy" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-navy" : "bg-white"} ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <button key={link.href} onClick={() => scrollTo(link.href)} className="block text-navy font-medium">
                {link.label}
              </button>
            ))}
            <Link href="/founders" className="block text-coral font-medium">✨ Founder Partnership</Link>
            <div className="pt-3 space-y-2">
              <a href="https://internwise.co.uk" className="block text-center px-5 py-2 rounded-full border border-navy text-navy font-semibold text-sm">Find Internships</a>
              <a href="https://internwise.co.uk/employers" className="block text-center px-5 py-2 rounded-full bg-coral text-white font-semibold text-sm">Post a Role</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default InternwiseNavbar;
