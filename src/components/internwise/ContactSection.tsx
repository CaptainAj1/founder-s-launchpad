import { useState } from "react";
import { Container, SectionLabel, SectionHeading, DotGrid, BlobDecoration } from "@/components/shared/UIElements";
import { Mail, MapPin, Globe, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-navy overflow-hidden">
      <DotGrid opacity={5} />
      <BlobDecoration color="sky" className="w-80 h-80 top-10 right-10 opacity-10 animate-blob" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <SectionLabel>Get in Touch</SectionLabel>
            <SectionHeading light>Let&apos;s Talk</SectionHeading>
            <p className="text-white/60 font-body mt-6 mb-10">
              Whether you are a graduate looking for your first opportunity, an employer wanting to reach fresh talent, or a university exploring partnerships, we would love to hear from you.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "help@internwise.co.uk", href: "mailto:help@internwise.co.uk" },
                { icon: MapPin, label: "Location", value: "London, United Kingdom" },
                { icon: Globe, label: "Website", value: "internwise.co.uk", href: "https://internwise.co.uk" },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-sky" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs font-body uppercase tracking-wider">{label}</div>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="text-white font-medium font-body hover:text-sky transition-colors">{value}</a>
                    ) : (
                      <span className="text-white font-medium font-body">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="font-display text-2xl font-bold text-navy mb-2">Message Sent!</h3>
                <p className="text-foreground/60 font-body">We will get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-light-gray bg-light-gray/30 font-body text-sm focus:outline-none focus:ring-2 focus:ring-sky/40"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-light-gray bg-light-gray/30 font-body text-sm focus:outline-none focus:ring-2 focus:ring-sky/40"
                  />
                </div>
                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-light-gray bg-light-gray/30 font-body text-sm focus:outline-none focus:ring-2 focus:ring-sky/40"
                >
                  <option value="">Select a subject</option>
                  <option>General Enquiry</option>
                  <option>Graduate / Student</option>
                  <option>Employer</option>
                  <option>University Partnership</option>
                  <option>Founder Partnership</option>
                  <option>Other</option>
                </select>
                <textarea
                  placeholder="Your message..."
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-light-gray bg-light-gray/30 font-body text-sm focus:outline-none focus:ring-2 focus:ring-sky/40 resize-none"
                />
                <button type="submit" className="w-full py-3 rounded-xl bg-navy hover:bg-sky text-white font-semibold text-sm transition-colors">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
