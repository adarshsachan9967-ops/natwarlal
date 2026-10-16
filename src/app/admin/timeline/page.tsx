"use client";

import React, { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { TIMELINE_MILESTONES, TimelineMilestone } from "@/data/timeline";
import { Calendar, Plus, Edit2, Trash2, ShieldCheck, Check, X } from "lucide-react";

export default function AdminTimelinePage() {
  const [milestones, setMilestones] = useState<TimelineMilestone[]>(TIMELINE_MILESTONES);
  const [editingMilestone, setEditingMilestone] = useState<TimelineMilestone | null>(null);
  const [message, setMessage] = useState("");

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingMilestone) return;

    setMilestones((prev) =>
      prev.map((m) => (m.id === editingMilestone.id ? editingMilestone : m))
    );
    setMessage("टाइमलाइन पड़ाव सफलतापूर्वक अद्यतन किया गया!");
    setEditingMilestone(null);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
              राजनैतिक व सांगठनिक कालक्रम (Timeline CMS)
            </h1>
            <p className="text-xs text-slate-500">
              वर्ष 1984 से वर्तमान तक कुल {milestones.length} ऐतिहासिक पड़ाव दर्ज हैं।
            </p>
          </div>
        </div>

        {message && (
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center justify-between">
            <span>{message}</span>
            <button onClick={() => setMessage("")}><X className="w-4 h-4" /></button>
          </div>
        )}

        {/* Edit Modal */}
        {editingMilestone && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b pb-3">
                <h3 className="font-bold text-slate-900 text-sm">
                  टाइमलाइन पड़ाव संपादन
                </h3>
                <button onClick={() => setEditingMilestone(null)} className="text-slate-400 hover:text-slate-600">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveEdit} className="space-y-3 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">
                      वर्ष / अवधि
                    </label>
                    <input
                      type="text"
                      value={editingMilestone.year}
                      onChange={(e) => setEditingMilestone({ ...editingMilestone, year: e.target.value })}
                      className="w-full p-2.5 rounded-lg border border-slate-300 text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">
                      पदनाम (Role)
                    </label>
                    <input
                      type="text"
                      value={editingMilestone.roleHi}
                      onChange={(e) => setEditingMilestone({ ...editingMilestone, roleHi: e.target.value })}
                      className="w-full p-2.5 rounded-lg border border-slate-300 text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">
                    शीर्षक (हिन्दी)
                  </label>
                  <input
                    type="text"
                    value={editingMilestone.titleHi}
                    onChange={(e) => setEditingMilestone({ ...editingMilestone, titleHi: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-slate-300 text-slate-900"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">
                    संस्था / संगठन
                  </label>
                  <input
                    type="text"
                    value={editingMilestone.organizationHi}
                    onChange={(e) => setEditingMilestone({ ...editingMilestone, organizationHi: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-slate-300 text-slate-900"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">
                    विवरण (हिन्दी)
                  </label>
                  <textarea
                    rows={3}
                    value={editingMilestone.descriptionHi}
                    onChange={(e) => setEditingMilestone({ ...editingMilestone, descriptionHi: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-slate-300 text-slate-900"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setEditingMilestone(null)}
                    className="px-3.5 py-1.5 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-50"
                  >
                    रद्द करें
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 rounded-lg bg-orange-600 text-white font-semibold hover:bg-orange-700"
                  >
                    सहेजें (Save)
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Milestones List */}
        <div className="space-y-3">
          {milestones.map((m) => (
            <div
              key={m.id}
              className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
            >
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-900">
                    {m.year}
                  </span>
                  <span className="font-semibold text-slate-500 uppercase">{m.category}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm">
                  {m.titleHi}
                </h3>
                <p className="text-slate-600 line-clamp-1">{m.organizationHi} — {m.descriptionHi}</p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setEditingMilestone(m)}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold flex items-center gap-1"
                >
                  <Edit2 className="w-3.5 h-3.5 text-orange-600" />
                  <span>संपादित करें</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
