import { Link } from "wouter";
import AdminLayout from "@/components/admin/AdminLayout";
import { useStore } from "@/lib/store";
import { FileText, Files, Search, Settings } from "lucide-react";

export default function AdminDashboard() {
  const { posts, pages, keywords } = useStore();
  const stats = [
    { label: "Blog Posts", value: posts.length, color: "bg-navy", icon: FileText },
    { label: "Pages", value: pages.length, color: "bg-sky", icon: Files },
    { label: "Keywords Tracked", value: keywords.length, color: "bg-coral", icon: Search },
  ];

  return (
    <AdminLayout>
      <div className="grid sm:grid-cols-3 gap-6 mb-8">
        {stats.map(({ label, value, color, icon: Icon }) => (
          <div key={label} className="bg-white rounded-2xl p-6 border border-light-gray">
            <div className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center mb-3`}><Icon className="w-5 h-5 text-white" /></div>
            <div className="font-display text-3xl font-bold text-navy">{value}</div>
            <div className="text-foreground/50 text-sm font-body">{label}</div>
          </div>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "New Blog Post", href: "/admin/blog/new", icon: FileText },
          { label: "New Page", href: "/admin/pages/new", icon: Files },
          { label: "SEO Manager", href: "/admin/seo", icon: Search },
          { label: "Settings", href: "/admin/settings", icon: Settings },
        ].map(({ label, href, icon: Icon }) => (
          <Link key={href} href={href} className="bg-white rounded-xl p-4 border border-light-gray hover:border-sky transition-colors flex items-center gap-3">
            <Icon className="w-4 h-4 text-sky" /><span className="text-sm font-body font-medium text-navy">{label}</span>
          </Link>
        ))}
      </div>
      {posts.length > 0 && (
        <div className="bg-white rounded-2xl border border-light-gray overflow-hidden">
          <div className="px-6 py-4 border-b border-light-gray"><h2 className="font-display font-bold text-navy">Recent Blog Posts</h2></div>
          <table className="w-full"><tbody>
            {posts.slice(0, 5).map(p => (
              <tr key={p.id} className="border-b border-light-gray last:border-0">
                <td className="px-6 py-3 font-body text-sm text-navy">{p.title}</td>
                <td className="px-6 py-3"><span className={`text-xs px-2 py-0.5 rounded-full font-body ${p.status === "published" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>{p.status}</span></td>
                <td className="px-6 py-3 text-xs text-foreground/40 font-body">{p.createdAt}</td>
              </tr>
            ))}
          </tbody></table>
        </div>
      )}
    </AdminLayout>
  );
}
