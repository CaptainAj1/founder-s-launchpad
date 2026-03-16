import { Container, SectionLabel, SectionHeading } from "@/components/shared/UIElements";

const steps = [
  { num: "01", title: "Submit Your Application", time: "10–15 mins", desc: "Complete our application form with details about yourself, your idea, and your motivations. Be honest, we value authenticity over polish." },
  { num: "02", title: "Initial Review", time: "Up to 2 weeks", desc: "Our team reviews every application carefully. We assess fit, potential, and mindset, not just the business idea. You will hear back within two weeks." },
  { num: "03", title: "Discovery Conversation", time: "30 mins", desc: "Shortlisted candidates are invited to a 30-minute conversation with a member of the Internwise team. This is a two-way discussion, come with questions." },
  { num: "04", title: "Final Decision", time: "1 week", desc: "Successful candidates receive a formal offer to join the next cohort. We provide clear onboarding details and a programme start date." },
];

const SelectionProcess = () => (
  <section className="py-24 lg:py-32 bg-white">
    <Container>
      <div className="text-center mb-16">
        <SectionLabel>Applying</SectionLabel>
        <SectionHeading>Selection Process</SectionHeading>
        <p className="text-foreground/60 font-body mt-4 max-w-2xl mx-auto">
          We keep our process straightforward and human. No assessments, no group exercises, just real conversations about real ideas.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {/* Connector line (desktop) */}
        <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-light-gray" />

        {steps.map((step) => (
          <div key={step.num} className="bg-light-gray rounded-2xl p-6 group hover:bg-navy hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative">
            <span className="text-sky font-display font-bold text-sm">{step.num}</span>
            <h4 className="font-display font-bold text-navy group-hover:text-white text-lg mt-2 transition-colors">{step.title}</h4>
            <span className="inline-block bg-white/80 group-hover:bg-white/20 text-navy/60 group-hover:text-white/60 text-xs font-body px-2 py-0.5 rounded-full mt-2 transition-colors">{step.time}</span>
            <p className="text-foreground/60 group-hover:text-white/70 text-sm font-body mt-3 transition-colors">{step.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default SelectionProcess;
