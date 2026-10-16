"use client";

import React, { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { GALLERY_ITEMS, GalleryItem } from "@/data/gallery";
import { Image as ImageIcon, Plus, Edit2, Trash2, Calendar, MapPin, Check, X } from "lucide-react";

export default function AdminGalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>(GALLERY_ITEMS);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
  const [message, setMessage] = useState("");

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    setItems((prev) =>
      prev.map((item) => (item.id === editingItem.id ? editingItem : item))
    );
    setMessage("छायाचित्र विवरण सफलतापूर्वक अद्यतन किया गया! (Updated)");
    setEditingItem(null);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
              फोटो गैलरी प्रबंधन (Gallery CMS)
            </h1>
            <p className="text-xs text-slate-500">
              कुल {items.length} प्रामाणिक छायाचित्र प्रकाशित हैं।
            </p>
          </div>

          <button
            onClick={() => alert("नई छवि अपलोड हेतु सर्वर स्टोरेज कनेक्ट करें। (Upload functionality enabled for authorized admins)")}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold shadow-sm transition-colors self-start sm:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>नया छायाचित्र जोड़ें (Add Image)</span>
          </button>
        </div>

        {message && (
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center justify-between">
            <span>{message}</span>
            <button onClick={() => setMessage("")}><X className="w-4 h-4" /></button>
          </div>
        )}

        {/* Edit Modal */}
        {editingItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b pb-3">
                <h3 className="font-bold text-slate-900 text-sm">
                  छायाचित्र संपादन (Edit Photo Details)
                </h3>
                <button onClick={() => setEditingItem(null)} className="text-slate-400 hover:text-slate-600">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveEdit} className="space-y-3 text-xs">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">
                    शीर्षक (हिन्दी)
                  </label>
                  <input
                    type="text"
                    value={editingItem.titleHi}
                    onChange={(e) => setEditingItem({ ...editingItem, titleHi: e.target.value })}
                    className="w-full p-2 rounded-lg border border-slate-300 text-slate-900"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">
                    Title (English)
                  </label>
                  <input
                    type="text"
                    value={editingItem.titleEn}
                    onChange={(e) => setEditingItem({ ...editingItem, titleEn: e.target.value })}
                    className="w-full p-2 rounded-lg border border-slate-300 text-slate-900"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">
                    कैप्शन (हिन्दी विवरण)
                  </label>
                  <textarea
                    rows={2}
                    value={editingItem.captionHi}
                    onChange={(e) => setEditingItem({ ...editingItem, captionHi: e.target.value })}
                    className="w-full p-2 rounded-lg border border-slate-300 text-slate-900"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">
                    तिथि / वर्ष
                  </label>
                  <input
                    type="text"
                    value={editingItem.dateStr || ""}
                    onChange={(e) => setEditingItem({ ...editingItem, dateStr: e.target.value })}
                    className="w-full p-2 rounded-lg border border-slate-300 text-slate-900"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setEditingItem(null)}
                    className="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-50"
                  >
                    रद्द करें
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 rounded-lg bg-orange-600 text-white font-semibold hover:bg-orange-700"
                  >
                    सहेजें (Save Changes)
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Gallery Items Table / Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/9] w-full bg-slate-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.titleHi}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 text-white text-[10px] font-mono">
                    {item.category}
                  </span>
                </div>

                <div className="p-4 space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-xs line-clamp-1">
                    {item.titleHi}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-2">
                    {item.captionHi}
                  </p>
                  <div className="text-[10px] text-slate-400 flex items-center gap-2 pt-1">
                    <span>{item.dateStr}</span>
                    <span>•</span>
                    <span>{item.locationHi}</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <button
                  onClick={() => setEditingItem(item)}
                  className="inline-flex items-center gap-1 font-semibold text-orange-700 hover:text-orange-900"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>संपादित करें</span>
                </button>
                <button
                  onClick={() => {
                    if (confirm("क्या आप इसे हटाना चाहते हैं?")) {
                      setItems((prev) => prev.filter((i) => i.id !== item.id));
                    }
                  }}
                  className="text-slate-400 hover:text-red-600"
                  title="हटाएं"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
