import { Link } from "wouter";
import { Container } from "@/components/shared/UIElements";
import { useStore } from "@/lib/store";

const FoundersFooter = () => {
  const { settings } = useStore();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-darker py-16">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <img src="/logo-horizontal.png" alt="Internwise" className="h-8 brightness-0 invert" />
              <span className="text-coral text-sm font-body">Founder Partnership</span>
            </div>
            <p className="text-white/50 text-sm font-body mb-4 max-w-sm">Backing ambitious graduates to build profitable, responsible businesses, from idea to reality.</p>
            <a
              href={settings.applicationFormUrl}
              target={settings.applicationFormUrl.startsWith("http") ? "_blank" : undefined}
              className="inline-flex px-5 py-2 rounded-full text-sm font-semibold bg-coral hover:bg-coral-hover text-white transition-colors"
            >
              Apply Now
            </a>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-4">Programme</h4>
            <ul className="space-y-2 font-body text-sm">
              {[
                { label: "About", href: "#about" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Philosophy", href: "#philosophy" },
                { label: "Selection Process", href: "#selection" },
                { label: "FAQs", href: "#faq" },
              ].map(({ label, href }) => (
                <li key={href}><button onClick={() => scrollTo(href)} className="text-white/50 hover:text-sky transition-colors">{label}</button></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-4">Internwise Group</h4>
            <ul className="space-y-2 font-body text-sm">
              <li><a href="https://internwise.co.uk" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-sky transition-colors">Internwise.co.uk</a></li>
              <li><a href="https://internwise.eu" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-sky transition-colors">Internwise.eu</a></li>
              <li><Link href="/blog" className="text-white/50 hover:text-sky transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs font-body">© 2026 Internwise Founder Partnership. Part of Kape Strategy Ltd.</p>
          <div className="flex gap-4 text-xs font-body">
            <Link href="/privacy" className="text-white/30 hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/30 hover:text-white/60 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default FoundersFooter;
