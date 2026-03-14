import { Container, SectionLabel, SectionHeading, DotGrid, BlobDecoration } from "@/components/shared/UIElements";
import { Users, Network, Wrench, Route } from "lucide-react";

const cards = [
  { icon: Users, title: "Expert Mentorship", desc: "Regular one-to-one sessions with experienced founders and business builders who have navigated the exact challenges you will face.", gradient: "from-navy to-[#2a57b0]" },
  { icon: Network, title: "Industry Network", desc: "Access to a curated network of professionals, potential partners, and like-minded founders across the Internwise ecosystem and beyond.", gradient: "from-sky to-[#2a9cd1]" },
  { icon: Wrench, title: "Practical Resources", desc: "Tools, templates, frameworks, and research that remove friction and let you focus on what matters — building, validating, and growing.", gradient: "from-coral to-coral-dark" },
  { icon: Route, title: "A Clear Structure", desc: "A two-phase programme with defined milestones, regular check-ins, and a roadmap that keeps you accountable and on track.", gradient: "from-navy to-sky" },
];

const WhatWeBring = () => (
  <section className="relative py-24 lg:py-32 bg-navy overflow-hidden">
    <DotGrid opacity={5} />
    <BlobDecoration color="sky" className="w-80 h-80 -top-20 right-20 opacity-10 animate-blob" />
    <BlobDecoration color="coral" className="w-64 h-64 bottom-10 -left-10 opacity-10 animate-blob animation-delay-2000" />

    <Container className="relative z-10">
      <div className="text-center mb-16">
        <SectionLabel>Our Commitment</SectionLabel>
        <SectionHeading light>What We Bring</SectionHeading>
        <p className="text-white/60 font-body mt-4 max-w-2xl mx-auto">
          Our contribution is not passive. We are active partners in your journey, invested in your success from the first conversation.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map(({ icon: Icon, title, desc, gradient }) => (
          <div key={title} className="bg-white/[0.08] border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-display font-bold text-white text-lg mb-2">{title}</h3>
            <p className="text-white/60 text-sm font-body">{desc}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default WhatWeBring;
