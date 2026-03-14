import AdminLayout from "@/components/admin/AdminLayout";
import { useStore } from "@/lib/store";
import { toast } from "sonner";
import { useLocation } from "wouter";

export default function AdminSettings() {
  const { settings, setSettings, logout } = useStore();
  const [, navigate] = useLocation();

  return (
    <AdminLayout>
      <div className="max-w-2xl space-y-8">
        <div className="bg-white rounded-2xl border border-light-gray p-6 space-y-4">
          <h3 className="font-display font-bold text-navy">Application Form URL</h3>
          <p className="text-sm font-body text-foreground/50">External URL for all "Apply Now" buttons</p>
          <input value={settings.applicationFormUrl} onChange={e => setSettings({ ...settings, applicationFormUrl: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-light-gray font-body text-sm focus:outline-none focus:ring-2 focus:ring-sky/40" />
          <button onClick={() => toast.success("Saved")} className="bg-navy text-white px-5 py-2 rounded-xl text-sm font-semibold">Save</button>
        </div>

        <div className="bg-white rounded-2xl border border-red-200 p-6">
          <h3 className="font-display font-bold text-red-600 mb-3">Danger Zone</h3>
          <button onClick={() => { logout(); navigate("/admin/sign-in"); }} className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-colors">
            Sign Out
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}
