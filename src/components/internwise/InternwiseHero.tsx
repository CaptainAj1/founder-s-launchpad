import { Container, DotGrid, BlobDecoration } from "@/components/shared/UIElements";

const InternwiseHero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-navy-mid to-navy-dark">
    <DotGrid opacity={7} />
    <BlobDecoration color="sky" className="w-96 h-96 top-20 -left-20 opacity-20 animate-blob" />
    <BlobDecoration color="sky" className="w-80 h-80 bottom-20 right-10 opacity-15 animate-blob animation-delay-2000" />
    <BlobDecoration color="coral" className="w-72 h-72 top-1/2 left-1/2 opacity-10 animate-blob animation-delay-4000" />

    <Container className="relative z-10 text-center pt-24 pb-16">
      <div className="animate-fade-in-up">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-sky animate-pulse-dot" />
          <span className="text-white/90 text-sm font-body font-medium">Your Internship Specialist — Since 2010</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
          Connecting Global Employers{" "}
          <span className="text-sky">with Global Talent</span>
        </h1>

        <p className="text-white/80 text-lg lg:text-xl max-w-3xl mx-auto mb-4 font-body">
          Internwise is the internship recruitment specialist — helping graduates take their first career step and giving employers direct access to fresh, motivated talent.
        </p>
        <p className="text-white/50 text-base lg:text-lg max-w-2xl mx-auto mb-10 font-body">
          Operating across the UK and Europe with a single mission: reduce youth unemployment by making internship connections simple, fast, and effective.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="https://internwise.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-coral hover:bg-coral-hover text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
          >
            Find Your Internship
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <a
            href="https://internwise.co.uk/employers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/20 transition-colors"
          >
            Post a Role
          </a>
        </div>

        {/* Region pills */}
        <div className="flex items-center justify-center gap-3 text-white/60 text-sm mb-16">
          <span>Available in</span>
          <a href="https://internwise.co.uk" target="_blank" rel="noopener noreferrer" className="bg-white/10 px-4 py-1.5 rounded-full text-white/90 hover:bg-white/20 transition-colors">🇬🇧 UK</a>
          <a href="https://internwise.eu" target="_blank" rel="noopener noreferrer" className="bg-white/10 px-4 py-1.5 rounded-full text-white/90 hover:bg-white/20 transition-colors">🇪🇺 Europe</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs tracking-widest uppercase font-body">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-scroll-line origin-top" />
      </div>
    </Container>
  </section>
);

export default InternwiseHero;
