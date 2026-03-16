import { useState } from "react";
import { Container, SectionLabel, SectionHeading, DotGrid } from "@/components/shared/UIElements";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Do I need to have a fully formed business idea to apply?", a: "No. You need a direction, a problem you want to solve or an opportunity you want to pursue. We help you validate, develop, and build. You do not need a polished plan." },
  { q: "Is there a cost to join the programme?", a: "Details of any programme fees or cost structures are provided during the application process. Our focus is on backing the right founders, we will always be transparent about what is involved." },
  { q: "What year of graduation do I need to be?", a: "The programme is open to recent graduates and those in their final year of study. Your degree discipline does not matter, your entrepreneurial mindset does." },
  { q: "Can I apply if I already have a co-founder?", a: "Absolutely. Co-founder teams are welcome. Both individuals would need to complete the application, and we assess the team dynamic as part of the process." },
  { q: "How much time do I need to commit each week?", a: "The programme is intensive. You should treat it as a significant commitment alongside, or instead of, other work. We will be clearer on exact time expectations during the application process." },
  { q: "Does Internwise take equity in my business?", a: "The Internwise Founder Partnership is not an investment arrangement. We do not take equity as part of programme participation. Any commercial arrangements are discussed transparently." },
  { q: "What happens after the 12 months?", a: "Completing the programme connects you permanently to the Internwise alumni network. Many founders continue to receive mentorship informally, and there are opportunities to participate in future cohorts as a mentor yourself." },
  { q: "I am not based in the UK, can I still apply?", a: "The programme is currently designed for UK-based founders. If you are planning to relocate to the UK, please get in touch and we will discuss your situation individually." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-navy overflow-hidden">
      <DotGrid opacity={5} />
      <Container className="relative z-10">
        <div className="text-center mb-16">
          <SectionLabel>Questions</SectionLabel>
          <SectionHeading light>Frequently Asked Questions</SectionHeading>
          <p className="text-white/60 font-body mt-4 max-w-2xl mx-auto">
            Something not covered here? Reach out, we are happy to talk through your specific situation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={`rounded-2xl transition-all duration-300 ${isOpen ? "bg-white" : "bg-white/[0.08] border border-white/10"}`}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-display font-bold text-lg pr-4 ${isOpen ? "text-navy" : "text-white"}`}>{faq.q}</span>
                  <Plus className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? "text-navy rotate-45" : "text-white/60"}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 -mt-2">
                    <p className="text-foreground/60 text-sm font-body">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
