import { useState } from "react";
import { useLocation } from "wouter";
import { useStore } from "@/lib/store";

export default function AdminSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useStore();
  const [, navigate] = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(email, password)) { navigate("/admin"); }
    else { setError("Invalid credentials"); }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-navy-mid to-navy-dark flex items-center justify-center px-6">
      <div className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-xl">
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-sky/10 flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-sky" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0114 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L10 6.477V16h2a1 1 0 110 2H8a1 1 0 110-2h2V6.477L7.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 016 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L10 4.323V3a1 1 0 011-1z" /></svg>
          </div>
          <h1 className="font-display text-xl font-bold text-navy">Admin Panel</h1>
          <p className="text-foreground/50 text-sm font-body">Internwise Founder Partnership</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <p className="text-red-500 text-sm text-center font-body">{error}</p>}
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full px-4 py-3 rounded-xl border border-light-gray font-body text-sm focus:outline-none focus:ring-2 focus:ring-sky/40" />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full px-4 py-3 rounded-xl border border-light-gray font-body text-sm focus:outline-none focus:ring-2 focus:ring-sky/40" />
          <button type="submit" className="w-full py-3 rounded-xl bg-navy text-white font-semibold text-sm hover:bg-navy-dark transition-colors">Sign In</button>
        </form>
        <p className="text-xs text-foreground/30 text-center mt-4 font-body">admin@internwise.com / admin123</p>
      </div>
    </div>
  );
}
