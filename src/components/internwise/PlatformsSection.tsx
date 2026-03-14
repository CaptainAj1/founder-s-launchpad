import { Link } from "wouter";
import { Container, SectionLabel, SectionHeading } from "@/components/shared/UIElements";
import { ExternalLink } from "lucide-react";

const PlatformsSection = () => (
  <section id="platforms" className="py-24 lg:py-32 bg-light-gray">
    <Container>
      <div className="text-center mb-16">
        <SectionLabel>Live Platforms</SectionLabel>
        <SectionHeading>Our Platforms</SectionHeading>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* UK Card */}
        <a
          href="https://internwise.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-navy rounded-2xl p-8 text-white group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
        >
          <span className="absolute top-4 right-4 bg-coral text-white text-xs font-semibold px-3 py-1 rounded-full">Flagship</span>
          <span className="text-4xl mb-4 block">🇬🇧</span>
          <h3 className="font-display text-2xl font-bold mb-2">United Kingdom</h3>
          <p className="text-white/60 font-body text-sm mb-4">Our flagship platform connecting UK graduates with internship opportunities across every sector.</p>
          <span className="inline-flex items-center gap-1 text-sky text-sm font-medium font-body">
            internwise.co.uk <ExternalLink className="w-3.5 h-3.5" />
          </span>
        </a>

        {/* Europe Card */}
        <a
          href="https://internwise.eu"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-2xl p-8 group hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          <span className="text-4xl mb-4 block">🇪🇺</span>
          <h3 className="font-display text-2xl font-bold text-navy mb-2">Europe</h3>
          <p className="text-foreground/60 font-body text-sm mb-4">Expanding across the European market, connecting graduates with cross-border internship opportunities.</p>
          <span className="inline-flex items-center gap-1 text-sky text-sm font-medium font-body">
            internwise.eu <ExternalLink className="w-3.5 h-3.5" />
          </span>
        </a>

        {/* Founder Partnership */}
        <Link
          href="/founders"
          className="bg-gradient-to-br from-coral to-coral-dark rounded-2xl p-8 text-white group hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          <span className="text-4xl mb-4 block">🚀</span>
          <h3 className="font-display text-2xl font-bold mb-2">Founder Partnership</h3>
          <p className="text-white/80 font-body text-sm mb-4">A structured 12-month programme backing ambitious graduates to build real businesses from scratch.</p>
          <span className="inline-flex items-center gap-1 text-white/90 text-sm font-medium font-body">
            Learn more →
          </span>
        </Link>
      </div>
    </Container>
  </section>
);

export default PlatformsSection;
