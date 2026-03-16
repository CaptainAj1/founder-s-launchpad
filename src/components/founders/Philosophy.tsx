import { Container, SectionLabel, SectionHeading } from "@/components/shared/UIElements";

const sectors = [
  "Technology & Digital", "Social Impact", "Education", "Health & Wellbeing",
  "Sustainability", "Creative Industries", "Professional Services",
  "E-commerce & Retail", "Community & Society", "Food & Hospitality",
];

const Philosophy = () => (
  <section id="philosophy" className="py-24 lg:py-32 bg-light-gray">
    <Container>
      <div className="text-center mb-16">
        <SectionLabel>Our Belief</SectionLabel>
        <SectionHeading>Profit with Purpose</SectionHeading>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-4 font-body text-foreground/70">
          <p>We believe that the best businesses are built with intention. Profit is not a dirty word, but profit without purpose is a missed opportunity.</p>
          <p>The founders we back are not just building companies. They are building solutions to problems they care about, in industries that matter, for customers who deserve better.</p>
          <p className="font-semibold text-navy">We are not looking for the next unicorn. We are looking for the next generation of responsible business leaders.</p>
          <blockquote className="border-l-4 border-coral pl-6 mt-6 italic text-foreground/60">
            &ldquo;Every great business started as someone refusing to accept the world as it was.&rdquo;
          </blockquote>
        </div>

        <div>
          <h3 className="font-display font-bold text-navy text-xl mb-6">Sectors We Welcome</h3>
          <div className="flex flex-wrap gap-3 mb-6">
            {sectors.map((s) => (
              <span key={s} className="bg-white px-4 py-2 rounded-full text-sm font-medium font-body text-navy border border-light-gray hover:bg-navy hover:text-white hover:border-navy transition-colors cursor-default">
                {s}
              </span>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-5 border border-light-gray">
            <p className="text-sm font-body text-foreground/60">
              <span className="font-semibold text-navy">Not your sector?</span> If your idea is genuine and you meet the criteria, we would love to hear from you regardless. The sectors above are a guide, not a limit.
            </p>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default Philosophy;
