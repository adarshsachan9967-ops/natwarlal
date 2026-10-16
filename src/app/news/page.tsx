"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { NEWS_ARTICLES } from "@/data/news";
import { Search, ArrowRight, ExternalLink, Clock, Newspaper } from "lucide-react";

export default function NewsPage() {
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", labelHi: "समस्त समाचार", labelEn: "All News" },
    { id: "appointment", labelHi: "शासकीय दायित्व व पदभार", labelEn: "Appointments" },
    { id: "public_event", labelHi: "सार्वजनिक प्रवास व स्वागत", labelEn: "Public Tours" },
    { id: "msme", labelHi: "लघु उद्योग व एमएसएमई नीतियां", labelEn: "MSME Policies" },
    { id: "community", labelHi: "व्यापारिक व नागरिक अभिनंदन", labelEn: "Civic Honors" },
  ];

  const filteredNews = NEWS_ARTICLES.filter((article) => {
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      article.titleHi.toLowerCase().includes(query) ||
      article.titleEn.toLowerCase().includes(query) ||
      article.excerptHi.toLowerCase().includes(query) ||
      article.excerptEn.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Centered & Bold Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-3 pb-6 border-b border-[#E7E5E4]">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F4510B] px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200">
            {t("प्रेस विज्ञप्ति एवं मीडिया", "Press & Media Center")}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] font-serif tracking-tight">
            {t("समाचार एवं प्रेस कवरेज", "News & Media Coverage")}
          </h1>
          <p className="text-sm sm:text-base text-[#667085] leading-relaxed mx-auto">
            {t(
              "उत्तर प्रदेश लघु उद्योग निगम, व्यापारिक प्रतिनिधि सम्मेलनों और सामाजिक आयोजनों से संबंधित प्रमाणित समाचार व प्रेस सारांश।",
              "Verified news updates, media reports, and press summaries documenting official events and public appearances."
            )}
          </p>
          <div className="w-20 h-1 bg-[#F4510B] rounded-full mx-auto mt-2" />
        </div>
      </section>

      {/* Search and Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-white rounded-xl border border-[#E7E5E4] w-full md:w-auto shadow-2xs">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-[#111827] text-white shadow-xs"
                      : "text-[#667085] hover:text-[#111827] hover:bg-[#FAF8F4]"
                  }`}
                >
                  {t(cat.labelHi, cat.labelEn)}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#667085] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("समाचार खोजें...", "Search news...")}
              className="w-full pl-9 pr-3 py-2 bg-white rounded-xl border border-[#E7E5E4] text-xs focus:outline-none focus:ring-2 focus:ring-[#F4510B]"
            />
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredNews.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#E7E5E4] p-12 text-center text-[#667085] text-sm">
            {t("कोई समाचार नहीं मिला।", "No articles found matching your criteria.")}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-2xl border border-[#E7E5E4] overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={article.image}
                      alt={lang === "hi" ? article.titleHi : article.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 text-white text-[11px] font-medium backdrop-blur-xs">
                      {article.date}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#667085]">
                      <span className="font-semibold text-[#F4510B]">
                        {lang === "hi" ? article.sourceNameHi : article.sourceNameEn}
                      </span>
                      <span className="flex items-center gap-1 text-[11px]">
                        <Clock className="w-3 h-3 text-[#667085]" />
                        <span>{article.readTime}</span>
                      </span>
                    </div>

                    <h2 className="text-base sm:text-lg font-bold text-[#111827] font-serif leading-snug group-hover:text-[#F4510B] transition-colors">
                      <Link href={`/news/${article.slug}`}>
                        {lang === "hi" ? article.titleHi : article.titleEn}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-[#667085] line-clamp-3 leading-relaxed">
                      {lang === "hi" ? article.excerptHi : article.excerptEn}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-[#E7E5E4]/60 flex items-center justify-between text-xs">
                  <Link
                    href={`/news/${article.slug}`}
                    className="font-semibold text-[#111827] hover:text-[#F4510B] flex items-center gap-1"
                  >
                    <span>{t("विस्तार से पढ़ें", "Read Full Article")}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F4510B]" />
                  </Link>

                  <a
                    href={article.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#667085] hover:text-[#111827] flex items-center gap-1"
                    title={t("मूल समाचार स्रोत", "Original Media Source")}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
