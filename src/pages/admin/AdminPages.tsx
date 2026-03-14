import { Link } from "wouter";
import AdminLayout from "@/components/admin/AdminLayout";
import { useStore } from "@/lib/store";
import { Plus, Pencil, Trash2 } from "lucide-react";

export default function AdminPages() {
  const { pages, setPages } = useStore();
  const del = (id: string) => { if (confirm("Delete?")) setPages(pages.filter(p => p.id !== id)); };
  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-display text-xl font-bold text-navy">Pages</h2>
        <Link href="/admin/pages/new" className="inline-flex items-center gap-2 bg-coral hover:bg-coral-hover text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors"><Plus className="w-4 h-4" />New Page</Link>
      </div>
      <div className="bg-white rounded-2xl border border-light-gray overflow-hidden">
        {pages.length === 0 ? <p className="p-8 text-center text-foreground/40 font-body">No pages yet</p> : (
          <table className="w-full"><tbody>
            {pages.map(p => (
              <tr key={p.id} className="border-b border-light-gray last:border-0">
                <td className="px-6 py-3 font-body text-sm text-navy font-medium">{p.title}</td>
                <td className="px-6 py-3"><span className={`text-xs px-2 py-0.5 rounded-full font-body ${p.status === "published" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>{p.status}</span></td>
                <td className="px-6 py-3 flex gap-2 justify-end">
                  <Link href={`/admin/pages/${p.id}`} className="p-1.5 rounded-lg hover:bg-light-gray"><Pencil className="w-4 h-4 text-foreground/40" /></Link>
                  <button onClick={() => del(p.id)} className="p-1.5 rounded-lg hover:bg-red-50"><Trash2 className="w-4 h-4 text-red-400" /></button>
                </td>
              </tr>
            ))}
          </tbody></table>
        )}
      </div>
    </AdminLayout>
  );
}
