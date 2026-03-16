import { Link } from "wouter";
import { Container } from "@/components/shared/UIElements";

const InternwiseFooter = () => (
  <footer className="bg-navy-darker py-16">
    <Container>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <img src="/logo-horizontal.png" alt="Internwise" className="h-8 brightness-0 invert mb-3" />
          <p className="text-white/50 text-sm font-body">Your Internship Specialist - connecting graduates with employers since 2010.</p>
        </div>

        {/* Platforms */}
        <div>
          <h4 className="font-display font-bold text-white mb-4">Platforms</h4>
          <ul className="space-y-2 font-body text-sm">
            <li><a href="https://internwise.co.uk" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-sky transition-colors">Internwise UK</a></li>
            <li><a href="https://internwise.eu" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-sky transition-colors">Internwise Europe</a></li>
          </ul>
        </div>

        {/* Group */}
        <div>
          <h4 className="font-display font-bold text-white mb-4">Group</h4>
          <ul className="space-y-2 font-body text-sm">
            <li><button onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })} className="text-white/50 hover:text-sky transition-colors">About Us</button></li>
            <li><Link href="/founders" className="text-white/50 hover:text-sky transition-colors">Founder Partnership</Link></li>
            <li><Link href="/blog" className="text-white/50 hover:text-sky transition-colors">Blog</Link></li>
            <li><button onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })} className="text-white/50 hover:text-sky transition-colors">Contact</button></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-display font-bold text-white mb-4">Legal</h4>
          <ul className="space-y-2 font-body text-sm">
            <li><Link href="/privacy" className="text-white/50 hover:text-sky transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-white/50 hover:text-sky transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-white/30 text-xs font-body">© 2026 Internwise. A brand under Kape Strategy Ltd.</p>
        <div className="flex gap-4 text-xs font-body">
          <Link href="/privacy" className="text-white/30 hover:text-white/60 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-white/30 hover:text-white/60 transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </Container>
  </footer>
);

export default InternwiseFooter;
