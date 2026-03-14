import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import AdminLayout from "@/components/admin/AdminLayout";
import { useStore, type CMSPage } from "@/lib/store";
import { toast } from "sonner";

const empty: CMSPage = { id: "", title: "", slug: "", content: "", status: "draft", metaTitle: "", metaDescription: "", createdAt: "", updatedAt: "" };

export default function AdminPagesEditor({ params }: { params: { id: string } }) {
  const { pages, setPages } = useStore();
  const [, navigate] = useLocation();
  const isNew = params.id === "new";
  const [form, setForm] = useState<CMSPage>(empty);

  useEffect(() => { if (!isNew) { const f = pages.find(p => p.id === params.id); if (f) setForm(f); } }, [params.id, isNew, pages]);

  const save = () => {
    if (!form.title) { toast.error("Title required"); return; }
    const slug = form.slug || form.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const now = new Date().toISOString().split("T")[0];
    if (isNew) { setPages([...pages, { ...form, id: Date.now().toString(), slug, createdAt: now, updatedAt: now }]); toast.success("Page created"); navigate("/admin/pages"); }
    else { setPages(pages.map(p => p.id === form.id ? { ...form, slug, updatedAt: now } : p)); toast.success("Saved"); }
  };

  const set = (k: keyof CMSPage, v: string) => setForm(f => ({ ...f, [k]: v }));

  return (
    <AdminLayout>
      <div className="max-w-3xl space-y-6">
        <div className="flex justify-between items-center"><h2 className="font-display text-xl font-bold text-navy">{isNew ? "New Page" : "Edit Page"}</h2><button onClick={save} className="bg-navy text-white px-5 py-2 rounded-xl text-sm font-semibold">Save</button></div>
        <input value={form.title} onChange={e => set("title", e.target.value)} placeholder="Page title..." className="w-full text-2xl font-display font-bold text-navy border-b border-light-gray pb-3 focus:outline-none bg-transparent" />
        <textarea value={form.content} onChange={e => set("content", e.target.value)} placeholder="Content (HTML)..." rows={15} className="w-full px-4 py-3 rounded-xl border border-light-gray font-body text-sm focus:outline-none focus:ring-2 focus:ring-sky/40 font-mono resize-none" />
        <select value={form.status} onChange={e => set("status", e.target.value as "draft" | "published")} className="px-4 py-3 rounded-xl border border-light-gray font-body text-sm"><option value="draft">Draft</option><option value="published">Published</option></select>
      </div>
    </AdminLayout>
  );
}
