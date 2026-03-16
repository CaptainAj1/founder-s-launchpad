import { Container, SectionLabel, SectionHeading } from "@/components/shared/UIElements";

const items = [
  { num: "01", title: "Your Idea", desc: "Bring us the spark, a problem you have noticed, an opportunity you have spotted, or a vision you cannot stop thinking about. It does not need to be perfect." },
  { num: "02", title: "Your Commitment", desc: "Full engagement with the programme, its milestones, and its community. This is a real undertaking, and we expect real effort in return." },
  { num: "03", title: "Your Honesty", desc: "We cannot help you if you hide what is not working. Bring your real challenges, your doubts, and your setbacks, that is where the real work happens." },
  { num: "04", title: "Your Ambition", desc: "The desire to build something meaningful, not just something profitable. We back founders who want to leave things better than they found them." },
];

const WhatYouBring = () => (
  <section className="py-24 lg:py-32 bg-white">
    <Container>
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <SectionLabel>Your Side</SectionLabel>
          <SectionHeading>What You Bring</SectionHeading>
          <p className="text-foreground/60 font-body mt-6 mb-4">
            You do not need a CV full of accolades or a business plan approved by a bank. What you need is the right foundation, the rest we help you build.
          </p>
          <div className="w-16 h-1 bg-coral" />
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.num} className="bg-light-gray rounded-2xl p-6 group hover:bg-navy hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <span className="text-sky font-display font-bold text-sm">{item.num}</span>
              <h4 className="font-display font-bold text-navy group-hover:text-white text-lg mt-1 transition-colors">{item.title}</h4>
              <p className="text-foreground/60 group-hover:text-white/70 text-sm font-body mt-2 transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

export default WhatYouBring;
