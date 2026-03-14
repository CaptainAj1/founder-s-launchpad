import { Container, DotGrid, BlobDecoration } from "@/components/shared/UIElements";
import { useStore } from "@/lib/store";

const FinalCTA = () => {
  const { settings } = useStore();

  return (
    <section id="apply" className="py-24 lg:py-32 bg-white">
      <Container>
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-navy via-navy-mid to-[#0f2454] px-8 py-20 lg:px-16 lg:py-28">
          <DotGrid opacity={8} />
          <BlobDecoration color="sky" className="w-72 h-72 -top-20 -right-20 opacity-15 animate-blob" />
          <BlobDecoration color="coral" className="w-64 h-64 bottom-0 -left-10 opacity-10 animate-blob animation-delay-2000" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-sky animate-pulse-dot" />
              <span className="text-white/90 text-sm font-body font-medium">Applications Open</span>
            </div>

            <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build <span className="text-sky">Something Real?</span>
            </h2>

            <p className="text-white/70 font-body mb-3">
              The Internwise Founder Partnership is for graduates who are done waiting for the right moment. The right moment is now.
            </p>
            <p className="text-white/50 font-body mb-10">
              Your idea does not need to be perfect. You just need to be ready to commit to making it real.
            </p>

            <a
              href={settings.applicationFormUrl}
              target={settings.applicationFormUrl.startsWith("http") ? "_blank" : undefined}
              className="inline-flex items-center gap-2 bg-coral hover:bg-coral-hover text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Start Your Application
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>

            <p className="text-white/30 text-xs font-body mt-8">Part of the Internwise group — connecting graduates with opportunity since 2010.</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FinalCTA;
