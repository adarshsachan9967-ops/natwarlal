"use client";

import React, { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { NEWS_ARTICLES, NewsArticle } from "@/data/news";
import { Newspaper, Plus, Edit2, Trash2, Calendar, ExternalLink, X, Check } from "lucide-react";

export default function AdminNewsPage() {
  const [articles, setArticles] = useState<NewsArticle[]>(NEWS_ARTICLES);
  const [showAddModal, setShowAddModal] = useState(false);
  const [message, setMessage] = useState("");

  const [newTitleHi, setNewTitleHi] = useState("");
  const [newTitleEn, setNewTitleEn] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newSource, setNewSource] = useState("");
  const [newExcerpt, setNewExcerpt] = useState("");

  const handleAddArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitleHi.trim()) return;

    const newSlug = `news-${Date.now()}`;
    const newArt: NewsArticle = {
      slug: newSlug,
      titleHi: newTitleHi,
      titleEn: newTitleEn || newTitleHi,
      date: newDate || new Date().toLocaleDateString("hi-IN"),
      sourceNameHi: newSource || "कार्यालय प्रेस विज्ञप्ति",
      sourceNameEn: newSource || "Press Release",
      sourceUrl: "https://ho.upsic.in",
      category: "msme",
      image: "/images/gallery/walking-with-cm-yogi.jpg",
      excerptHi: newExcerpt,
      excerptEn: newExcerpt,
      contentHi: [newExcerpt],
      contentEn: [newExcerpt],
      readTime: "2 min read",
    };

    setArticles([newArt, ...articles]);
    setShowAddModal(false);
    setNewTitleHi("");
    setNewTitleEn("");
    setNewDate("");
    setNewSource("");
    setNewExcerpt("");
    setMessage("समाचार सफलतापूर्वक प्रकाशित किया गया!");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
              समाचार एवं प्रेस प्रबंधन (News & Media CMS)
            </h1>
            <p className="text-xs text-slate-500">
              कुल {articles.length} समाचार एवं आधिकारिक विज्ञप्तियां प्रकाशित हैं।
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold shadow-sm transition-colors self-start sm:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>नया समाचार जोड़ें (Add News)</span>
          </button>
        </div>

        {message && (
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center justify-between">
            <span>{message}</span>
            <button onClick={() => setMessage("")}><X className="w-4 h-4" /></button>
          </div>
        )}

        {/* Add News Modal */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b pb-3">
                <h3 className="font-bold text-slate-900 text-sm">
                  नया समाचार / प्रेस विज्ञप्ति तैयार करें
                </h3>
                <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-slate-600">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleAddArticle} className="space-y-3 text-xs">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">
                    समाचार शीर्षक (हिन्दी) *
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitleHi}
                    onChange={(e) => setNewTitleHi(e.target.value)}
                    placeholder="उदा. लघु उद्योग निगम की नई कार्ययोजना..."
                    className="w-full p-2.5 rounded-lg border border-slate-300 text-slate-900"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">
                    Title (English)
                  </label>
                  <input
                    type="text"
                    value={newTitleEn}
                    onChange={(e) => setNewTitleEn(e.target.value)}
                    placeholder="English headline..."
                    className="w-full p-2.5 rounded-lg border border-slate-300 text-slate-900"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">
                      प्रकाशन तिथि
                    </label>
                    <input
                      type="text"
                      value={newDate}
                      onChange={(e) => setNewDate(e.target.value)}
                      placeholder="उदा. 15 अक्टूबर 2024"
                      className="w-full p-2.5 rounded-lg border border-slate-300 text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">
                      स्रोत / एजेंसी
                    </label>
                    <input
                      type="text"
                      value={newSource}
                      onChange={(e) => setNewSource(e.target.value)}
                      placeholder="उदा. प्रेस विज्ञप्ति"
                      className="w-full p-2.5 rounded-lg border border-slate-300 text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">
                    संक्षिप्त सारांश (Excerpt) *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={newExcerpt}
                    onChange={(e) => setNewExcerpt(e.target.value)}
                    placeholder="समाचार का मुख्य सारांश लिखें..."
                    className="w-full p-2.5 rounded-lg border border-slate-300 text-slate-900"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-3.5 py-2 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-50"
                  >
                    रद्द करें
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-orange-600 text-white font-semibold hover:bg-orange-700"
                  >
                    प्रकाशित करें (Publish)
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Articles List */}
        <div className="space-y-4">
          {articles.map((art) => (
            <div
              key={art.slug}
              className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-mono">{art.date}</span>
                  <span>•</span>
                  <span className="font-semibold text-orange-700">{art.sourceNameHi}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  {art.titleHi}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-1">{art.excerptHi}</p>
              </div>

              <div className="flex items-center gap-3 shrink-0 text-xs">
                <a
                  href={`/news/${art.slug}`}
                  target="_blank"
                  className="font-semibold text-slate-600 hover:text-slate-900"
                >
                  देखें ↗
                </a>
                <button
                  onClick={() => {
                    if (confirm("क्या आप इस समाचार को हटाना चाहते हैं?")) {
                      setArticles((prev) => prev.filter((a) => a.slug !== art.slug));
                    }
                  }}
                  className="p-1.5 rounded text-slate-400 hover:text-red-600"
                  title="हटाएं"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
