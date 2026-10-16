"use client";

import React, { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { Settings, Lock, ShieldCheck, Check, KeyRound, Globe, Building2 } from "lucide-react";
import { InstagramIcon } from "@/components/icons";

export default function AdminSettingsPage() {
  const [currentUser, setCurrentUser] = useState(
    typeof window !== "undefined" ? localStorage.getItem("admin_portal_user") || "admin" : "admin"
  );
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setMsg("");
    setErr("");

    if (!newPass.trim() || newPass.length < 6) {
      setErr("पासवर्ड कम से कम 6 अक्षरों का होना चाहिए।");
      return;
    }
    if (newPass !== confirmPass) {
      setErr("पुष्टि पासवर्ड मेल नहीं खाता।");
      return;
    }

    localStorage.setItem("admin_portal_password", newPass);
    setMsg("पासवर्ड सफलतापूर्वक बदल दिया गया! (Password updated)");
    setNewPass("");
    setConfirmPass("");
  };

  return (
    <AdminLayout>
      <div className="space-y-8 max-w-2xl">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
            सिस्टम एवं प्रशासनिक सेटिंग्स (System Settings)
          </h1>
          <p className="text-xs text-slate-500">
            क्रेडेंशियल सुरक्षा, कार्यालय प्रोफाइल एवं सोशल मीडिया लिंक विन्यास।
          </p>
        </div>

        {/* Password Update Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm border-b border-slate-100 pb-3">
            <KeyRound className="w-4 h-4 text-orange-600" />
            <span>व्यवस्थापक पासवर्ड बदलें (Change Admin Password)</span>
          </div>

          {msg && <p className="p-2.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold">{msg}</p>}
          {err && <p className="p-2.5 rounded-lg bg-red-50 text-red-800 text-xs font-semibold">{err}</p>}

          <form onSubmit={handleUpdatePassword} className="space-y-3 text-xs">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                नया पासवर्ड (New Password)
              </label>
              <input
                type="password"
                required
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
                placeholder="कम से कम 6 अक्षर"
                className="w-full p-2.5 rounded-xl border border-slate-300 text-slate-900"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                पासवर्ड की पुष्टि करें (Confirm Password)
              </label>
              <input
                type="password"
                required
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                placeholder="पासवर्ड दोबारा दर्ज करें"
                className="w-full p-2.5 rounded-xl border border-slate-300 text-slate-900"
              />
            </div>

            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-orange-600 text-white font-semibold text-xs hover:bg-orange-700 transition-colors"
            >
              पासवर्ड सुरक्षित करें (Update Password)
            </button>
          </form>
        </div>

        {/* Official Channels Overview */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-xs">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm border-b border-slate-100 pb-3">
            <Globe className="w-4 h-4 text-orange-600" />
            <span>सत्यापित सार्वजनिक चैनल (Verified Handles)</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-semibold text-slate-700">Instagram Handle</span>
              <span className="font-mono text-orange-700 font-bold">@natwargoyal4bjp</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-semibold text-slate-700">UPSIC Corporate Portal</span>
              <span className="font-mono text-slate-800">ho.upsic.in</span>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
