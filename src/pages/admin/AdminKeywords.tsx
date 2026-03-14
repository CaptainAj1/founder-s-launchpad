import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { useStore, type Keyword } from "@/lib/store";
import { Plus, Pencil, Trash2, X } from "lucide-react";

export default function AdminKeywords() {
  const { keywords, setKeywords } = useStore();
  const [modal, setModal] = useState<Keyword | null>(null);

  const save = (kw: Keyword) => {
    if (keywords.find(k => k.id === kw.id)) setKeywords(keywords.map(k => k.id === kw.id ? kw : k));
    else setKeywords([...keywords, { ...kw, id: Date.now().toString() }]);
    setModal(null);
  };

  const del = (id: string) => { if (confirm("Delete?")) setKeywords(keywords.filter(k => k.id !== id)); };
  const priorityColor = (p: string) => p === "high" ? "bg-red-100 text-red-700" : p === "medium" ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-500";

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-display text-xl font-bold text-navy">Keyword Tracker</h2>
        <button onClick={() => setModal({ id: "", keyword: "", targetPage: "", priority: "medium", notes: "" })} className="inline-flex items-center gap-2 bg-coral text-white px-4 py-2 rounded-xl text-sm font-semibold"><Plus className="w-4 h-4" />Add Keyword</button>
      </div>
      <div className="bg-white rounded-2xl border border-light-gray overflow-hidden">
        {keywords.length === 0 ? <p className="p-8 text-center text-foreground/40 font-body">No keywords tracked</p> : (
          <table className="w-full"><thead><tr className="border-b border-light-gray bg-light-gray/30"><th className="px-6 py-3 text-left text-xs font-body font-semibold text-foreground/50">Keyword</th><th className="px-6 py-3 text-left text-xs font-body font-semibold text-foreground/50">Page</th><th className="px-6 py-3 text-left text-xs font-body font-semibold text-foreground/50">Priority</th><th className="px-6 py-3" /></tr></thead><tbody>
            {keywords.map(k => (
              <tr key={k.id} className="border-b border-light-gray last:border-0">
                <td className="px-6 py-3 font-body text-sm text-navy font-medium">{k.keyword}</td>
                <td className="px-6 py-3 text-sm font-body text-foreground/50">{k.targetPage}</td>
                <td className="px-6 py-3"><span className={`text-xs px-2 py-0.5 rounded-full font-body ${priorityColor(k.priority)}`}>{k.priority}</span></td>
                <td className="px-6 py-3 flex gap-2 justify-end">
                  <button onClick={() => setModal(k)} className="p-1.5 rounded-lg hover:bg-light-gray"><Pencil className="w-4 h-4 text-foreground/40" /></button>
                  <button onClick={() => del(k.id)} className="p-1.5 rounded-lg hover:bg-red-50"><Trash2 className="w-4 h-4 text-red-400" /></button>
                </td>
              </tr>
            ))}
          </tbody></table>
        )}
      </div>
      {modal && <KeywordModal kw={modal} onSave={save} onClose={() => setModal(null)} />}
    </AdminLayout>
  );
}

function KeywordModal({ kw, onSave, onClose }: { kw: Keyword; onSave: (k: Keyword) => void; onClose: () => void }) {
  const [form, setForm] = useState(kw);
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md space-y-4">
        <div className="flex justify-between"><h3 className="font-display font-bold text-navy">{kw.id ? "Edit" : "Add"} Keyword</h3><button onClick={onClose}><X className="w-5 h-5 text-foreground/40" /></button></div>
        <input value={form.keyword} onChange={e => setForm({ ...form, keyword: e.target.value })} placeholder="Keyword" className="w-full px-4 py-3 rounded-xl border border-light-gray font-body text-sm focus:outline-none focus:ring-2 focus:ring-sky/40" />
        <input value={form.targetPage} onChange={e => setForm({ ...form, targetPage: e.target.value })} placeholder="Target page" className="w-full px-4 py-3 rounded-xl border border-light-gray font-body text-sm focus:outline-none focus:ring-2 focus:ring-sky/40" />
        <select value={form.priority} onChange={e => setForm({ ...form, priority: e.target.value as Keyword["priority"] })} className="w-full px-4 py-3 rounded-xl border border-light-gray font-body text-sm"><option value="high">High</option><option value="medium">Medium</option><option value="low">Low</option></select>
        <textarea value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} placeholder="Notes" rows={2} className="w-full px-4 py-3 rounded-xl border border-light-gray font-body text-sm resize-none focus:outline-none focus:ring-2 focus:ring-sky/40" />
        <button onClick={() => onSave(form)} className="w-full bg-navy text-white py-3 rounded-xl font-semibold text-sm">Save</button>
      </div>
    </div>
  );
}
