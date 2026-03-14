import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import AdminLayout from "@/components/admin/AdminLayout";
import { useStore, type BlogPost } from "@/lib/store";
import { toast } from "sonner";

const empty: BlogPost = { id: "", title: "", slug: "", excerpt: "", content: "", coverImage: "", status: "draft", metaTitle: "", metaDescription: "", createdAt: new Date().toISOString().split("T")[0], updatedAt: "" };

export default function AdminBlogEditor({ params }: { params: { id: string } }) {
  const { posts, setPosts } = useStore();
  const [, navigate] = useLocation();
  const isNew = params.id === "new";
  const [form, setForm] = useState<BlogPost>(empty);

  useEffect(() => {
    if (!isNew) {
      const found = posts.find(p => p.id === params.id);
      if (found) setForm(found);
    }
  }, [params.id, isNew, posts]);

  const save = () => {
    if (!form.title) { toast.error("Title is required"); return; }
    const slug = form.slug || form.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const now = new Date().toISOString().split("T")[0];
    if (isNew) {
      const newPost = { ...form, id: Date.now().toString(), slug, createdAt: now, updatedAt: now };
      setPosts([...posts, newPost]);
      toast.success("Post created"); navigate("/admin/blog");
    } else {
      setPosts(posts.map(p => p.id === form.id ? { ...form, slug, updatedAt: now } : p));
      toast.success("Post saved");
    }
  };

  const set = (key: keyof BlogPost, val: string) => setForm(f => ({ ...f, [key]: val }));

  return (
    <AdminLayout>
      <div className="max-w-3xl space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="font-display text-xl font-bold text-navy">{isNew ? "New Post" : "Edit Post"}</h2>
          <button onClick={save} className="bg-navy hover:bg-navy-dark text-white px-5 py-2 rounded-xl text-sm font-semibold transition-colors">Save</button>
        </div>
        <input value={form.title} onChange={e => set("title", e.target.value)} placeholder="Post title..." className="w-full text-2xl font-display font-bold text-navy border-0 border-b border-light-gray pb-3 focus:outline-none focus:border-sky bg-transparent" />
        <input value={form.slug} onChange={e => set("slug", e.target.value)} placeholder="slug-auto-generated" className="w-full text-sm font-body text-foreground/40 border-0 focus:outline-none bg-transparent" />
        <textarea value={form.excerpt} onChange={e => set("excerpt", e.target.value)} placeholder="Excerpt..." rows={3} className="w-full px-4 py-3 rounded-xl border border-light-gray font-body text-sm focus:outline-none focus:ring-2 focus:ring-sky/40 resize-none" />
        <textarea value={form.content} onChange={e => set("content", e.target.value)} placeholder="Content (HTML)..." rows={12} className="w-full px-4 py-3 rounded-xl border border-light-gray font-body text-sm focus:outline-none focus:ring-2 focus:ring-sky/40 font-mono" />
        <div className="grid sm:grid-cols-2 gap-4">
          <input value={form.coverImage} onChange={e => set("coverImage", e.target.value)} placeholder="Cover image URL" className="w-full px-4 py-3 rounded-xl border border-light-gray font-body text-sm focus:outline-none focus:ring-2 focus:ring-sky/40" />
          <select value={form.status} onChange={e => set("status", e.target.value as "draft" | "published")} className="w-full px-4 py-3 rounded-xl border border-light-gray font-body text-sm focus:outline-none focus:ring-2 focus:ring-sky/40">
            <option value="draft">Draft</option><option value="published">Published</option>
          </select>
        </div>
        <div className="space-y-3">
          <h3 className="font-display font-bold text-navy text-sm">SEO</h3>
          <input value={form.metaTitle} onChange={e => set("metaTitle", e.target.value)} placeholder="Meta title" className="w-full px-4 py-3 rounded-xl border border-light-gray font-body text-sm focus:outline-none focus:ring-2 focus:ring-sky/40" />
          <div className="relative">
            <textarea value={form.metaDescription} onChange={e => set("metaDescription", e.target.value)} placeholder="Meta description" rows={2} className="w-full px-4 py-3 rounded-xl border border-light-gray font-body text-sm focus:outline-none focus:ring-2 focus:ring-sky/40 resize-none" />
            <span className="absolute bottom-3 right-3 text-xs text-foreground/30 font-body">{form.metaDescription.length}/160</span>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
