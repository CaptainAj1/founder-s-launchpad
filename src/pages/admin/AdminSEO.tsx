import AdminLayout from "@/components/admin/AdminLayout";
import { useStore } from "@/lib/store";
import { toast } from "sonner";

export default function AdminSEO() {
  const { seo, setSeo } = useStore();
  return (
    <AdminLayout>
      <div className="max-w-2xl">
        <h2 className="font-display text-xl font-bold text-navy mb-6">SEO Defaults</h2>
        <div className="bg-white rounded-2xl border border-light-gray p-6 space-y-4">
          <div><label className="text-xs font-body font-semibold text-foreground/50 mb-1 block">Site Title</label><input value={seo.siteTitle} onChange={e => setSeo({ ...seo, siteTitle: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-light-gray font-body text-sm focus:outline-none focus:ring-2 focus:ring-sky/40" /></div>
          <div className="relative"><label className="text-xs font-body font-semibold text-foreground/50 mb-1 block">Site Description</label><textarea value={seo.siteDescription} onChange={e => setSeo({ ...seo, siteDescription: e.target.value })} rows={3} className="w-full px-4 py-3 rounded-xl border border-light-gray font-body text-sm focus:outline-none focus:ring-2 focus:ring-sky/40 resize-none" /><span className="absolute bottom-3 right-3 text-xs text-foreground/30">{seo.siteDescription.length}/160</span></div>
          <div><label className="text-xs font-body font-semibold text-foreground/50 mb-1 block">OG Image URL</label><input value={seo.ogImage} onChange={e => setSeo({ ...seo, ogImage: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-light-gray font-body text-sm focus:outline-none focus:ring-2 focus:ring-sky/40" /></div>
          <button onClick={() => toast.success("SEO defaults saved")} className="bg-navy text-white px-5 py-2 rounded-xl text-sm font-semibold">Save</button>
        </div>
      </div>
    </AdminLayout>
  );
}
