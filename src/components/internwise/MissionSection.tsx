import { Container, SectionLabel, SectionHeading } from "@/components/shared/UIElements";

const stats = [
  { number: "15,000+", label: "Employers", desc: "trusting our platform" },
  { number: "500K+", label: "Candidates", desc: "registered across regions" },
  { number: "2", label: "Active Platforms", desc: "UK & Europe, live now" },
  { number: "Since 2010", label: "Established", desc: "over a decade of connections" },
];

const MissionSection = () => (
  <section id="mission" className="py-24 lg:py-32 bg-white">
    <Container>
      <div className="grid lg:grid-cols-2 gap-16 mb-20">
        <div>
          <SectionLabel>Why We Exist</SectionLabel>
          <SectionHeading>Reducing Youth Unemployment, One Internship at a Time</SectionHeading>
          <div className="w-16 h-1 bg-coral mt-6" />
        </div>
        <div className="space-y-4 font-body text-foreground/70">
          <p>Youth unemployment remains one of the most persistent social and economic challenges across Europe. Millions of graduates leave university each year with ambition, skills, and energy — but without a clear path into the working world.</p>
          <p>Internwise exists to solve that. Since 2010, we have connected graduates with meaningful internship opportunities, and given employers a simple, effective way to find motivated early-career talent.</p>
          <p className="font-semibold text-navy">We believe every graduate deserves a fair start, and every employer deserves access to the next generation of talent.</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-light-gray rounded-2xl p-8 text-center group hover:bg-navy hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-default"
          >
            <div className="font-display text-3xl font-bold text-navy group-hover:text-coral transition-colors">{stat.number}</div>
            <div className="font-display text-lg font-semibold text-navy group-hover:text-white mt-1 transition-colors">{stat.label}</div>
            <div className="text-sm text-foreground/50 group-hover:text-white/70 mt-1 font-body transition-colors">{stat.desc}</div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default MissionSection;
