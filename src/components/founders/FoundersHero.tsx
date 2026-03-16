import { Container, DotGrid, BlobDecoration } from "@/components/shared/UIElements";
import { useStore } from "@/lib/store";

const FoundersHero = () => {
  const { settings } = useStore();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-navy-mid to-[#0f2454]">
      <DotGrid opacity={10} />
      <BlobDecoration color="sky" className="w-96 h-96 top-20 -left-20 opacity-20 animate-blob" />
      <BlobDecoration color="sky" className="w-80 h-80 bottom-20 right-10 opacity-15 animate-blob animation-delay-2000" />
      <BlobDecoration color="coral" className="w-72 h-72 top-1/2 left-1/2 opacity-10 animate-blob animation-delay-4000" />

      <Container className="relative z-10 text-center pt-24 pb-32">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-sky animate-pulse-dot" />
            <span className="text-white/90 text-sm font-body font-medium">Now Accepting Applications</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
            Turn Your Idea Into{" "}
            <span className="relative inline-block">
              <span className="text-sky">A Real Business</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 8C50 2 100 2 150 6C200 10 250 4 298 6" stroke="#ff9961" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="text-white/80 text-lg lg:text-xl max-w-3xl mx-auto mb-4 font-body">
            The Internwise Founder Partnership backs ambitious graduates with the structure, mentorship, and resources to build profitable, responsible businesses, from day one.
          </p>
          <p className="text-white/50 text-base lg:text-lg max-w-2xl mx-auto mb-10 font-body">
            No prior experience required. No corporate track record needed. Just a genuine drive to build something that matters.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={settings.applicationFormUrl}
              target={settings.applicationFormUrl.startsWith("http") ? "_blank" : undefined}
              className="inline-flex items-center justify-center gap-2 bg-coral hover:bg-coral-hover text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Start Your Application
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <button
              onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/20 transition-colors"
            >
              Learn More
            </button>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-8 text-white/70 text-sm font-body">
            {[
              { num: "12", label: "Months of Support" },
              { num: "UK", label: "Based Programme" },
              { num: "2", label: "Structured Phases" },
            ].map(({ num, label }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-sky font-display font-bold text-xl">{num}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs tracking-widest uppercase font-body">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-scroll-line origin-top" />
      </div>
    </section>
  );
};

export default FoundersHero;
