import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useStore } from "@/lib/store";

const FoundersNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const { settings } = useStore();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Programme", href: "#how-it-works" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "FAQs", href: "#faq" },
  ];

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/founders" className="flex items-center gap-2">
            <span className={`font-display font-bold text-lg ${scrolled ? "text-navy" : "text-white"}`}>Internwise</span>
            <span className="text-coral font-semibold text-sm font-body">Founder Partnership</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button key={link.href} onClick={() => scrollTo(link.href)} className={`text-sm font-medium transition-colors hover:text-sky ${scrolled ? "text-navy/70" : "text-white/80"}`}>
                {link.label}
              </button>
            ))}
            <Link href="/" className={`text-sm font-medium transition-colors hover:text-sky ${scrolled ? "text-navy/70" : "text-white/80"}`}>
              ← Internwise Home
            </Link>
          </div>

          <a
            href={settings.applicationFormUrl}
            target={settings.applicationFormUrl.startsWith("http") ? "_blank" : undefined}
            className="hidden lg:inline-flex px-5 py-2 rounded-full text-sm font-semibold bg-coral hover:bg-coral-hover text-white transition-colors"
          >
            Apply Now
          </a>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
            <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-navy" : "bg-white"} ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-navy" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-navy" : "bg-white"} ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <button key={link.href} onClick={() => scrollTo(link.href)} className="block text-navy font-medium">{link.label}</button>
          ))}
          <Link href="/" className="block text-navy/70 font-medium">← Internwise Home</Link>
          <a href={settings.applicationFormUrl} className="block text-center bg-coral text-white rounded-full py-2 font-semibold text-sm">Apply Now</a>
        </div>
      )}
    </nav>
  );
};

export default FoundersNavbar;
