"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { NEWS_ARTICLES } from "@/data/news";
import {
  Calendar,
  Clock,
  ExternalLink,
  ChevronRight,
  Share2,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";

export default function NewsArticleDetailClient({ slug }: { slug: string }) {
  const { lang, t } = useLanguage();

  const article = NEWS_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-[#111827] font-serif">
          {t("समाचार नहीं मिला", "Article Not Found")}
        </h1>
        <p className="text-xs text-[#667085]">
          {t("यह समाचार उपलब्ध नहीं है अथवा हटा दिया गया है।", "This article is not available.")}
        </p>
        <Link
          href="/news"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#111827] text-white font-semibold text-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t("समस्त समाचारों पर लौटें", "Back to All News")}</span>
        </Link>
      </div>
    );
  }

  const relatedArticles = NEWS_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  const handleShare = () => {
    if (typeof window !== "undefined" && navigator.share) {
      navigator.share({
        title: article.titleHi,
        text: article.excerptHi,
        url: window.location.href,
      }).catch(() => {});
    } else if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      alert(t("लिंक कॉपी हो गया!", "Link copied to clipboard!"));
    }
  };

  return (
    <div className="py-10 sm:py-16 space-y-12">
      {/* Breadcrumb Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center gap-2 text-xs text-[#667085] font-medium">
          <Link href="/" className="hover:text-[#111827] transition-colors">
            {t("होम", "Home")}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#667085]" />
          <Link href="/news" className="hover:text-[#111827] transition-colors">
            {t("समाचार", "News & Media")}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#667085]" />
          <span className="text-[#111827] font-semibold truncate max-w-[200px] sm:max-w-xs">
            {lang === "hi" ? article.titleHi : article.titleEn}
          </span>
        </nav>
      </div>

      {/* Main Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Title & Metadata */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5 text-xs">
            <span className="px-2.5 py-0.5 rounded bg-orange-50 text-[#F4510B] font-bold uppercase tracking-wider text-[11px]">
              {article.category}
            </span>
            <span className="flex items-center gap-1.5 text-[#667085]">
              <Calendar className="w-3.5 h-3.5 text-[#667085]" />
              <span>{article.date}</span>
            </span>
            <span className="flex items-center gap-1 text-[#667085]">
              <Clock className="w-3.5 h-3.5 text-[#667085]" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827] font-serif leading-snug">
            {lang === "hi" ? article.titleHi : article.titleEn}
          </h1>

          {/* Source Attribution Box */}
          <div className="p-4 bg-white rounded-xl border border-[#E7E5E4] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-[#667085]">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                <strong className="text-[#111827]">{t("स्रोत: ", "Source: ")}</strong>
                {lang === "hi" ? article.sourceNameHi : article.sourceNameEn}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#F4510B] hover:underline font-semibold"
              >
                <span>{t("मूल संदर्भ लिंक", "Source URL")}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={handleShare}
                className="p-1.5 rounded-md hover:bg-slate-100 text-[#667085] transition-colors"
                title={t("शेयर करें", "Share Article")}
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden border border-[#E7E5E4] bg-slate-100 shadow-2xs">
          <div className="relative aspect-[16/9] w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.image}
              alt={lang === "hi" ? article.titleHi : article.titleEn}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Excerpt Lead */}
        <div className="p-5 rounded-2xl bg-[#FAF8F4] border-l-4 border-[#F4510B] text-sm sm:text-base font-medium text-[#111827] leading-relaxed">
          {lang === "hi" ? article.excerptHi : article.excerptEn}
        </div>

        {/* Article Paragraphs */}
        <div className="space-y-4 text-sm sm:text-base text-[#1F2937] leading-relaxed">
          {(lang === "hi" ? article.contentHi : article.contentEn).map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Related Articles Strip */}
        <div className="pt-10 border-t border-[#E7E5E4] space-y-6">
          <h2 className="text-lg font-bold text-[#111827] font-serif">
            {t("अन्य संबंधित समाचार", "Related Articles")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.slug}
                className="p-5 rounded-2xl border border-[#E7E5E4] bg-white shadow-2xs space-y-2"
              >
                <span className="text-[11px] font-semibold text-[#F4510B]">
                  {rel.date}
                </span>
                <h3 className="text-sm font-bold text-[#111827] hover:text-[#F4510B] leading-snug">
                  <Link href={`/news/${rel.slug}`}>
                    {lang === "hi" ? rel.titleHi : rel.titleEn}
                  </Link>
                </h3>
                <p className="text-xs text-[#667085] line-clamp-2">
                  {lang === "hi" ? rel.excerptHi : rel.excerptEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
