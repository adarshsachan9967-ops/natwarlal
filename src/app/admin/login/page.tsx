"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, User, ShieldCheck, ArrowRight, AlertCircle, KeyRound } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      // Configurable secure credentials or default setup credential
      const storedPass = localStorage.getItem("admin_portal_password") || "Natwar@2024";
      const storedUser = localStorage.getItem("admin_portal_user") || "admin";

      if (username.trim() === storedUser && password === storedPass) {
        sessionStorage.setItem("admin_session", "true");
        sessionStorage.setItem("admin_user", username.trim());
        router.push("/admin/dashboard");
      } else {
        setError("अमान्य यूज़रनेम अथवा पासवर्ड। कृपया पुनः प्रयास करें। (Invalid credentials)");
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-600 to-amber-700 flex items-center justify-center mx-auto text-white shadow-lg">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            प्रशासन प्रबंधन पोर्टल
          </h1>
          <p className="text-xs text-slate-400">
            Shri Vaishya Natwar Goyal • Official CMS Login
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4 text-xs sm:text-sm">
          {error && (
            <div className="p-3 rounded-xl bg-red-950/50 border border-red-800 text-red-200 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{error}</span>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="font-semibold text-slate-300 block">
              यूज़रनेम / Username
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500 text-xs sm:text-sm"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="font-semibold text-slate-300 block">
              पासवर्ड / Password
            </label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500 text-xs sm:text-sm"
              />
            </div>
          </div>

          <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/80 text-[11px] text-slate-400 space-y-1">
            <p className="font-semibold text-slate-300">डिफ़ॉल्ट व्यवस्थापक क्रेडेंशियल (Demo Access):</p>
            <p>Username: <code className="text-orange-400 font-mono">admin</code> | Password: <code className="text-orange-400 font-mono">Natwar@2024</code></p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-500 disabled:opacity-50 text-white font-semibold text-xs sm:text-sm transition-colors shadow-md flex items-center justify-center gap-2"
          >
            <span>{loading ? "सत्यापन जारी..." : "लॉगिन करें (Sign In)"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center pt-2 border-t border-slate-800">
          <Link href="/" className="text-xs text-slate-400 hover:text-white transition-colors">
            ← मुख्य वेबसाइट पर वापस जाएं (Back to Live Site)
          </Link>
        </div>
      </div>
    </div>
  );
}
