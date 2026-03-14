import { Container, SectionLabel, SectionHeading } from "@/components/shared/UIElements";
import { Check, X } from "lucide-react";

const thisIs = [
  { title: "A structured partnership", desc: "A 12-month engagement with clear milestones, accountability, and genuine two-way commitment." },
  { title: "Real mentorship", desc: "Direct access to experienced founders and operators who have built and scaled businesses." },
  { title: "Idea-stage welcome", desc: "You do not need a polished business plan. A genuine idea and the drive to act on it is enough." },
  { title: "Built for graduates", desc: "Designed specifically for those early in their career — your lack of experience is not a barrier." },
  { title: "Responsibility-led", desc: "We back businesses with a conscience — profitable, sustainable, and built to last." },
];

const thisIsnt = [
  { title: "A course or qualification", desc: "We are not an education provider. This is a live, real-world business-building experience." },
  { title: "A funding round", desc: "We are not investors taking equity in exchange for capital. This is operational and strategic support." },
  { title: "A casual commitment", desc: "This programme demands genuine effort. If you are looking for a light-touch network, this is not it." },
  { title: "For those without an idea", desc: "You should arrive with a direction — even a rough one. We help you validate and build, not generate ideas from scratch." },
  { title: "A guarantee of success", desc: "We give you the best possible environment to succeed, but the outcomes depend on the work you put in." },
];

const WhatThisIs = () => (
  <section id="about" className="py-24 lg:py-32 bg-white">
    <Container>
      <div className="text-center mb-16">
        <SectionLabel>The Programme</SectionLabel>
        <SectionHeading>What This Is. What It Isn&apos;t.</SectionHeading>
        <p className="text-foreground/60 font-body mt-4 max-w-2xl mx-auto">
          The Internwise Founder Partnership is a selective, structured programme — not an incubator, not a course.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-navy rounded-2xl p-8">
          <span className="inline-block bg-sky/20 text-sky text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-6">✓ This Is</span>
          <div className="space-y-6">
            {thisIs.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-sky/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-sky" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-lg">{item.title}</h4>
                  <p className="text-white/60 text-sm font-body mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-light-gray rounded-2xl p-8">
          <span className="inline-block bg-navy/10 text-navy text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-6">✗ This Isn&apos;t</span>
          <div className="space-y-6">
            {thisIsnt.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-4 h-4 text-foreground/40" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy text-lg">{item.title}</h4>
                  <p className="text-foreground/60 text-sm font-body mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default WhatThisIs;
