import { Link, useLocation } from "wouter";
import { useStore } from "@/lib/store";
import { LayoutDashboard, FileText, Files, Search, Key, Settings, ExternalLink, Menu, X } from "lucide-react";
import { useState, useEffect, type ReactNode } from "react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
  { icon: FileText, label: "Blog Posts", href: "/admin/blog" },
  { icon: Files, label: "Pages", href: "/admin/pages" },
  { icon: Search, label: "SEO Manager", href: "/admin/seo" },
  { icon: Key, label: "Keywords", href: "/admin/keywords" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useStore();
  const [location, navigate] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) navigate("/admin/sign-in");
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-admin-bg flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-navy transform transition-transform lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-6">
          <div className="font-display font-bold text-white text-lg">Internwise</div>
          <div className="text-coral text-xs font-body">Admin Panel</div>
        </div>
        <nav className="px-3 space-y-1">
          {navItems.map(({ icon: Icon, label, href }) => (
            <Link key={href} href={href} onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-body transition-colors ${location === href ? "bg-white/10 text-white" : "text-white/60 hover:text-white hover:bg-white/5"}`}>
              <Icon className="w-4 h-4" />{label}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-6 left-0 right-0 px-6">
          <a href="/" target="_blank" className="flex items-center gap-2 text-white/40 text-xs font-body hover:text-white/60"><ExternalLink className="w-3 h-3" />View site</a>
        </div>
      </aside>

      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      <div className="flex-1 lg:ml-64">
        <header className="bg-white border-b border-light-gray px-6 py-4 flex items-center gap-4 sticky top-0 z-20">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden"><Menu className="w-5 h-5 text-navy" /></button>
          <h1 className="font-display font-bold text-navy text-lg">{navItems.find(n => n.href === location)?.label || "Admin"}</h1>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
