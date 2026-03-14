import { Container, DotGrid } from "@/components/shared/UIElements";
import InternwiseNavbar from "@/components/internwise/InternwiseNavbar";
import InternwiseFooter from "@/components/internwise/InternwiseFooter";

const sections = [
  { title: "Introduction", content: "Kape Strategy Ltd (\"we\", \"our\", \"us\") operates the Internwise platform, including internwise.com, internwise.co.uk, and internwise.eu. This Privacy Policy explains how we collect, use, and protect your personal data." },
  { title: "Data We Collect", content: "We may collect personal information including your name, email address, phone number, CV/resume details, employment history, education background, and any other information you provide when using our services." },
  { title: "How We Use Your Data", content: "We use your data to provide and improve our services, match candidates with internship opportunities, communicate with you about relevant roles and updates, and comply with legal obligations." },
  { title: "Legal Basis for Processing", content: "We process your data based on your consent, the performance of a contract, our legitimate interests in providing recruitment services, and compliance with legal obligations." },
  { title: "Data Sharing", content: "We may share your information with employers when you apply for roles, service providers who assist our operations, and regulatory authorities when required by law." },
  { title: "Data Retention", content: "We retain your personal data for as long as necessary to fulfil the purposes for which it was collected, typically for a period of 3 years from your last interaction with our platform." },
  { title: "Your Rights", content: "Under data protection law, you have the right to access, rectify, erase, restrict processing of, and port your personal data. You also have the right to object to processing and withdraw consent." },
  { title: "Cookies", content: "Our website uses cookies to enhance your experience, analyse site traffic, and serve targeted content. You can manage cookie preferences through your browser settings." },
  { title: "International Transfers", content: "Your data may be transferred to and processed in countries outside the UK and EEA. We ensure appropriate safeguards are in place for such transfers." },
  { title: "Security", content: "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction." },
  { title: "Changes to This Policy", content: "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our website." },
  { title: "Contact Us", content: "If you have any questions about this Privacy Policy or our data practices, please contact us at help@internwise.co.uk." },
];

const Privacy = () => (
  <>
    <InternwiseNavbar />
    <section className="relative pt-32 pb-16 bg-gradient-to-br from-navy via-navy-mid to-navy-dark overflow-hidden">
      <DotGrid opacity={7} />
      <Container className="relative z-10 text-center">
        <span className="text-sky text-xs font-semibold tracking-widest uppercase font-body">Legal</span>
        <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mt-3">Privacy Policy</h1>
      </Container>
    </section>

    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto space-y-10">
          {sections.map((s, i) => (
            <div key={i}>
              <div className="flex items-start gap-4 mb-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-navy text-white flex items-center justify-center font-display font-bold text-sm">{i + 1}</span>
                <h2 className="font-display text-xl font-bold text-navy">{s.title}</h2>
              </div>
              <p className="text-foreground/60 font-body text-sm pl-12">{s.content}</p>
            </div>
          ))}
          <div className="bg-light-gray rounded-2xl p-6 text-center mt-10">
            <p className="text-sm font-body text-foreground/60">Questions? Contact us at <a href="mailto:help@internwise.co.uk" className="text-sky font-semibold">help@internwise.co.uk</a></p>
          </div>
        </div>
      </Container>
    </section>
    <InternwiseFooter />
  </>
);

export default Privacy;
