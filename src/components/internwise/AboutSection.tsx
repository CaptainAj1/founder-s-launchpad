import { Container, SectionLabel, SectionHeading, DotGrid, BlobDecoration } from "@/components/shared/UIElements";
import { Shield, Globe, GraduationCap, Heart } from "lucide-react";

const values = [
  { icon: GraduationCap, title: "Graduate-First", body: "Everything we build starts with the graduate experience, making the transition from education to employment as simple and supported as possible." },
  { icon: Shield, title: "Trusted by Employers", body: "Over 15,000 employers have used Internwise to find early-career talent, trusting our platform to deliver quality candidates efficiently." },
  { icon: Globe, title: "UK & Europe Focus", body: "We operate where the need is greatest, across the United Kingdom and Europe, with dedicated platforms for each region." },
  { icon: Heart, title: "Independent & Purpose-Driven", body: "Internwise is an independently owned platform, driven by mission rather than shareholders. We exist to make a difference." },
];

const AboutSection = () => (
  <section id="about" className="relative py-24 lg:py-32 bg-navy overflow-hidden">
    <DotGrid opacity={5} />
    <BlobDecoration color="sky" className="w-96 h-96 -top-40 -right-40 opacity-10 animate-blob" />
    <BlobDecoration color="coral" className="w-72 h-72 bottom-20 -left-20 opacity-10 animate-blob animation-delay-2000" />

    <Container className="relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 mb-20">
        <div>
          <SectionLabel>About Us</SectionLabel>
          <SectionHeading light>An Entrepreneur&apos;s Passion, Built into a Platform</SectionHeading>
          <blockquote className="border-l-4 border-coral pl-6 mt-8 italic text-white/70 font-body">
            &ldquo;I built Internwise because I saw the gap between what graduates needed and what existed. The recruitment industry was not built for them, so I decided to build something that was.&rdquo;
            <span className="block mt-3 text-coral not-italic font-semibold text-sm">- Nuno Dhiren, Founder</span>
          </blockquote>
        </div>
        <div className="space-y-4 font-body text-white/70">
          <p>Internwise was founded in 2010 by Nuno Dhiren, an entrepreneur who saw a fundamental gap in the recruitment market: graduates and students had no dedicated, specialist platform to find internship opportunities.</p>
          <p>What began as a single UK-based platform has grown into a cross-border operation spanning the United Kingdom and Europe, with over 15,000 employers and 500,000 registered candidates.</p>
          <p>Internwise is part of the Kape Strategy Ltd group and continues to operate independently, driven by its founding mission to reduce youth unemployment through better, fairer access to internship opportunities.</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map(({ icon: Icon, title, body }) => (
          <div key={title} className="bg-white/[0.08] border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-sky" />
            </div>
            <h3 className="font-display font-bold text-white text-lg mb-2">{title}</h3>
            <p className="text-white/60 text-sm font-body">{body}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default AboutSection;
