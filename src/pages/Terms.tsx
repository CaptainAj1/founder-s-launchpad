import { Container, DotGrid } from "@/components/shared/UIElements";
import InternwiseNavbar from "@/components/internwise/InternwiseNavbar";
import InternwiseFooter from "@/components/internwise/InternwiseFooter";

const sections = [
  { title: "Acceptance of Terms", content: "By accessing and using the Internwise platform, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services." },
  { title: "Service Description", content: "Internwise provides an online platform connecting graduates and students with internship opportunities offered by employers across the UK and Europe." },
  { title: "User Accounts", content: "You may need to create an account to access certain features. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account." },
  { title: "Eligibility", content: "Our services are available to individuals who are at least 18 years old or have reached the age of majority in their jurisdiction." },
  { title: "User Conduct", content: "You agree to use our platform lawfully, not to submit false or misleading information, and not to interfere with the platform's operation or other users' experience." },
  { title: "Content Submission", content: "By submitting content (CVs, profiles, applications), you grant us a non-exclusive licence to use, store, and share that content as necessary to provide our services." },
  { title: "Employer Responsibilities", content: "Employers using our platform agree to provide accurate role descriptions, comply with employment law, and treat all candidates fairly and without discrimination." },
  { title: "Intellectual Property", content: "All content, designs, logos, and technology on the Internwise platform are owned by Kape Strategy Ltd and protected by intellectual property laws." },
  { title: "Limitation of Liability", content: "Internwise acts as an intermediary and does not guarantee employment outcomes. We are not liable for the actions of employers or candidates using our platform." },
  { title: "Payment Terms", content: "Where fees apply for employer services, payment terms will be specified in the relevant service agreement. All fees are exclusive of VAT unless stated otherwise." },
  { title: "Data Protection", content: "We process personal data in accordance with our Privacy Policy and applicable data protection legislation, including the UK GDPR." },
  { title: "Termination", content: "We reserve the right to suspend or terminate accounts that violate these terms, and users may close their accounts at any time by contacting us." },
  { title: "Modifications", content: "We may modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the updated terms." },
  { title: "Indemnification", content: "You agree to indemnify and hold harmless Kape Strategy Ltd from any claims, damages, or expenses arising from your use of the platform or violation of these terms." },
  { title: "Third-Party Links", content: "Our platform may contain links to third-party websites. We are not responsible for the content or practices of these external sites." },
  { title: "Force Majeure", content: "We shall not be liable for any failure to perform our obligations where such failure results from events beyond our reasonable control." },
  { title: "Severability", content: "If any provision of these terms is found to be unenforceable, the remaining provisions shall continue in full force and effect." },
  { title: "Entire Agreement", content: "These Terms and Conditions, together with our Privacy Policy, constitute the entire agreement between you and Kape Strategy Ltd regarding the use of Internwise." },
  { title: "Governing Law", content: "These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the English courts." },
  { title: "Contact", content: "For any questions regarding these terms, please contact us at help@internwise.co.uk or write to Kape Strategy Ltd, London, United Kingdom." },
];

const Terms = () => (
  <>
    <InternwiseNavbar />
    <section className="relative pt-32 pb-16 bg-gradient-to-br from-navy via-navy-mid to-navy-dark overflow-hidden">
      <DotGrid opacity={7} />
      <Container className="relative z-10 text-center">
        <span className="text-sky text-xs font-semibold tracking-widest uppercase font-body">Legal</span>
        <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mt-3">Terms & Conditions</h1>
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
        </div>
      </Container>
    </section>
    <InternwiseFooter />
  </>
);

export default Terms;
