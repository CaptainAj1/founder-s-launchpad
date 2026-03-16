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
          <img src="/logo.png" alt="Internwise" className="h-12 mx-auto mb-3" />
          <h1 className="font-display text-xl font-bold text-navy">Admin Panel</h1>
          <p className="text-foreground/50 text-sm font-body">Internwise Founder Partnership</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <p className="text-red-500 text-sm text-center font-body">{error}</p>}
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full px-4 py-3 rounded-xl border border-light-gray font-body text-sm focus:outline-none focus:ring-2 focus:ring-sky/40" />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full px-4 py-3 rounded-xl border border-light-gray font-body text-sm focus:outline-none focus:ring-2 focus:ring-sky/40" />
          <button type="submit" className="w-full py-3 rounded-xl bg-navy text-white font-semibold text-sm hover:bg-navy-dark transition-colors">Sign In</button>
        </form>
      </div>
    </div>
  );
}
