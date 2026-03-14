import { Container, SectionLabel, SectionHeading } from "@/components/shared/UIElements";
import { Check } from "lucide-react";

const audiences = [
  {
    emoji: "🎓",
    label: "For Career Starters",
    title: "Graduates & Students",
    desc: "Whether you are finishing your degree or recently graduated, Internwise connects you with real internship opportunities across the UK and Europe.",
    points: [
      "Browse thousands of internship listings across every sector",
      "Create a profile that gets you seen by top employers",
      "Access roles from SMEs to multinational corporations",
      "Free to use — always",
    ],
    cta: { text: "Find Internships", href: "https://internwise.co.uk", variant: "navy" as const },
    dark: false,
  },
  {
    emoji: "🏢",
    label: "For Hiring Teams",
    title: "Employers",
    desc: "Reach motivated, qualified graduates actively searching for internship opportunities. Post roles, manage applications, and find the right fit — fast.",
    points: [
      "Post internship roles in minutes",
      "Access a pool of over 500,000 registered candidates",
      "Filter by location, degree, availability, and more",
      "Dedicated support for your recruitment needs",
    ],
    cta: { text: "Post a Role", href: "https://internwise.co.uk/employers", variant: "coral" as const },
    dark: true,
  },
  {
    emoji: "🏛️",
    label: "For Institutions",
    title: "Universities",
    desc: "Partner with Internwise to give your students a head start. Our platform integrates with your careers service to expand the opportunities available to your graduates.",
    points: [
      "White-label internship boards for your institution",
      "Analytics and reporting on student engagement",
      "Direct employer partnerships for your graduates",
      "Dedicated account management",
    ],
    cta: { text: "Explore Partnerships", href: "#contact", variant: "navy" as const },
    dark: false,
  },
];

const AudienceSection = () => (
  <section className="py-24 lg:py-32 bg-white">
    <Container>
      <div className="text-center mb-16">
        <SectionLabel>Who We Serve</SectionLabel>
        <SectionHeading>Built for Everyone in the Journey</SectionHeading>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {audiences.map((a) => (
          <div
            key={a.title}
            className={`rounded-2xl p-8 flex flex-col ${a.dark ? "bg-navy text-white" : "bg-white border border-light-gray"} hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
          >
            <span className="text-4xl mb-3">{a.emoji}</span>
            <span className={`text-xs font-semibold tracking-widest uppercase font-body mb-2 ${a.dark ? "text-sky" : "text-sky"}`}>{a.label}</span>
            <h3 className={`font-display text-2xl font-bold mb-3 ${a.dark ? "text-white" : "text-navy"}`}>{a.title}</h3>
            <p className={`text-sm font-body mb-6 ${a.dark ? "text-white/70" : "text-foreground/60"}`}>{a.desc}</p>

            <ul className="space-y-3 mb-8 flex-1">
              {a.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm font-body">
                  <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${a.dark ? "text-sky" : "text-sky"}`} />
                  <span className={a.dark ? "text-white/80" : "text-foreground/70"}>{point}</span>
                </li>
              ))}
            </ul>

            <a
              href={a.cta.href}
              target={a.cta.href.startsWith("http") ? "_blank" : undefined}
              rel={a.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`block text-center w-full py-3 rounded-xl font-semibold text-sm transition-colors ${
                a.cta.variant === "coral"
                  ? "bg-coral hover:bg-coral-hover text-white"
                  : "bg-navy hover:bg-navy-dark text-white"
              }`}
            >
              {a.cta.text}
            </a>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default AudienceSection;
