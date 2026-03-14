import { Link } from "wouter";
import AdminLayout from "@/components/admin/AdminLayout";
import { useStore } from "@/lib/store";
import { Plus, Pencil, Trash2 } from "lucide-react";

export default function AdminBlog() {
  const { posts, setPosts } = useStore();
  const deletPost = (id: string) => { if (confirm("Delete this post?")) setPosts(posts.filter(p => p.id !== id)); };
  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-display text-xl font-bold text-navy">Blog Posts</h2>
        <Link href="/admin/blog/new" className="inline-flex items-center gap-2 bg-coral hover:bg-coral-hover text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors"><Plus className="w-4 h-4" />New Post</Link>
      </div>
      <div className="bg-white rounded-2xl border border-light-gray overflow-hidden">
        {posts.length === 0 ? <p className="p-8 text-center text-foreground/40 font-body">No posts yet</p> : (
          <table className="w-full"><thead><tr className="border-b border-light-gray bg-light-gray/30"><th className="px-6 py-3 text-left text-xs font-body font-semibold text-foreground/50">Title</th><th className="px-6 py-3 text-left text-xs font-body font-semibold text-foreground/50">Status</th><th className="px-6 py-3 text-left text-xs font-body font-semibold text-foreground/50">Date</th><th className="px-6 py-3" /></tr></thead><tbody>
            {posts.map(p => (
              <tr key={p.id} className="border-b border-light-gray last:border-0">
                <td className="px-6 py-3 font-body text-sm text-navy font-medium">{p.title}</td>
                <td className="px-6 py-3"><span className={`text-xs px-2 py-0.5 rounded-full font-body ${p.status === "published" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>{p.status}</span></td>
                <td className="px-6 py-3 text-xs text-foreground/40 font-body">{p.createdAt}</td>
                <td className="px-6 py-3 flex gap-2 justify-end">
                  <Link href={`/admin/blog/${p.id}`} className="p-1.5 rounded-lg hover:bg-light-gray transition-colors"><Pencil className="w-4 h-4 text-foreground/40" /></Link>
                  <button onClick={() => deletPost(p.id)} className="p-1.5 rounded-lg hover:bg-red-50 transition-colors"><Trash2 className="w-4 h-4 text-red-400" /></button>
                </td>
              </tr>
            ))}
          </tbody></table>
        )}
      </div>
    </AdminLayout>
  );
}
