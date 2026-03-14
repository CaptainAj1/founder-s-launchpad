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
              <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
                <svg className="w-5 h-5 text-sky" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0114 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L10 6.477V16h2a1 1 0 110 2H8a1 1 0 110-2h2V6.477L7.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 016 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L10 4.323V3a1 1 0 011-1z" /></svg>
              </div>
              <div>
                <span className="font-display font-bold text-white">Internwise</span>
                <span className="text-coral text-sm font-body ml-1">Founder Partnership</span>
              </div>
            </div>
            <p className="text-white/50 text-sm font-body mb-4 max-w-sm">Backing ambitious graduates to build profitable, responsible businesses — from idea to reality.</p>
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
