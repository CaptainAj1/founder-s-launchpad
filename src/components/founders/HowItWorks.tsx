import { Container, SectionLabel, SectionHeading } from "@/components/shared/UIElements";
import { Check, Circle } from "lucide-react";

const phase1Steps = [
  "Deep-dive onboarding and goal-setting",
  "Business concept validation and market research",
  "Define your target customer and core value proposition",
  "Build your first minimum viable product or service",
  "Initial go-to-market testing and early customer feedback",
  "Monthly mentor sessions and peer cohort reviews",
];

const phase2Steps = [
  "Full commercial launch strategy",
  "Revenue model refinement and pricing optimisation",
  "Sales, marketing, and customer acquisition",
  "Operational and financial foundations",
  "Scaling plan and growth roadmap",
  "End-of-programme review and next-step planning",
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 lg:py-32 bg-white">
    <Container>
      <div className="text-center mb-16">
        <SectionLabel>The Journey</SectionLabel>
        <SectionHeading>How It Works</SectionHeading>
        <p className="text-foreground/60 font-body mt-4 max-w-2xl mx-auto">
          A 12-month structured programme split into two distinct phases — each designed to build on the last.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 relative">
        {/* Center connector (desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-light-gray -translate-x-1/2" />
        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-light-gray border-4 border-white z-10 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-sky" />
        </div>

        {/* Phase 1 */}
        <div className="bg-white border border-light-gray rounded-2xl overflow-hidden">
          <div className="bg-navy px-6 py-4">
            <span className="text-sky text-xs font-semibold tracking-widest uppercase font-body">Phase 1</span>
            <h3 className="font-display text-xl font-bold text-white">Months 1–6: Validate & Build</h3>
          </div>
          <div className="p-6 space-y-4">
            {phase1Steps.map((step, i) => (
              <div key={step} className="flex gap-3 items-start">
                {i < 2 ? (
                  <Check className="w-5 h-5 text-sky flex-shrink-0 mt-0.5" />
                ) : (
                  <Circle className="w-5 h-5 text-foreground/20 flex-shrink-0 mt-0.5" />
                )}
                <span className="text-sm font-body text-foreground/70">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Phase 2 */}
        <div className="bg-white border border-light-gray rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-coral to-coral-dark px-6 py-4">
            <span className="text-white/80 text-xs font-semibold tracking-widest uppercase font-body">Phase 2</span>
            <h3 className="font-display text-xl font-bold text-white">Months 7–12: Launch & Grow</h3>
          </div>
          <div className="p-6 space-y-4">
            {phase2Steps.map((step, i) => (
              <div key={step} className="flex gap-3 items-start">
                {i < 2 ? (
                  <Check className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                ) : (
                  <Circle className="w-5 h-5 text-foreground/20 flex-shrink-0 mt-0.5" />
                )}
                <span className="text-sm font-body text-foreground/70">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 bg-light-gray rounded-2xl p-6 text-center">
        <p className="text-sm font-body text-foreground/60">
          <span className="font-semibold text-navy">Throughout both phases:</span> Regular group sessions with your cohort, access to the Internwise network, and ongoing support from our team.
        </p>
      </div>
    </Container>
  </section>
);

export default HowItWorks;
