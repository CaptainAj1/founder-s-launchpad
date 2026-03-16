import { Container, SectionLabel, SectionHeading } from "@/components/shared/UIElements";
import { GraduationCap, Lightbulb, MapPin, Zap, Users, Globe } from "lucide-react";

const criteria = [
  { icon: GraduationCap, emoji: "🎓", title: "A Graduate", desc: "You have recently graduated or are in your final year. Your degree discipline does not matter, your mindset does." },
  { icon: Lightbulb, emoji: "💡", title: "Idea-Stage Ready", desc: "You have a business idea, however rough. It does not need to be polished, validated, or fully formed. You just need to believe in it." },
  { icon: MapPin, emoji: "📍", title: "UK-Based", desc: "The programme operates in the United Kingdom. You should be based here or planning to be during the programme." },
  { icon: Zap, emoji: "⚡", title: "Entrepreneurially Driven", desc: "You are not looking for a job. You want to build something, and you are willing to commit fully to making it happen." },
  { icon: Users, emoji: "👥", title: "Coachable", desc: "You are open to feedback, challenge, and being pushed beyond your comfort zone. You listen as much as you lead." },
  { icon: Globe, emoji: "🌍", title: "Purpose-Led", desc: "You want to build something that matters beyond the balance sheet, responsible, sustainable, and genuinely valuable to the people it serves." },
];

const WhoItsFor = () => (
  <section className="py-24 lg:py-32 bg-light-gray">
    <Container>
      <div className="text-center mb-16">
        <SectionLabel>Eligibility</SectionLabel>
        <SectionHeading>Who This Is For</SectionHeading>
        <p className="text-foreground/60 font-body mt-4 max-w-2xl mx-auto">
          The Internwise Founder Partnership is selective, not because we are exclusive, but because we invest deeply in every founder we back.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {criteria.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-white rounded-2xl p-8 group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-light-gray flex items-center justify-center mb-5 group-hover:bg-navy transition-colors">
              <Icon className="w-7 h-7 text-navy group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-display font-bold text-navy text-xl mb-2">{title}</h3>
            <p className="text-foreground/60 text-sm font-body">{desc}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default WhoItsFor;
