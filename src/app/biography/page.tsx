"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { BIOGRAPHY_SECTIONS, PROFILE_FACTS } from "@/data/biography";
import { ShieldCheck, ArrowRight, BookOpen, GraduationCap, MapPin, Building2, Users } from "lucide-react";

export default function BiographyPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Centered & Bold Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-3 pb-6 border-b border-[#E7E5E4]">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F4510B] px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200">
            {t("आधिकारिक जीवन-वृत्त", "Official Biography")}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] font-serif tracking-tight">
            {t("श्री वैश्य नटवर गोयल: जीवन-यात्रा एवं कृतित्व", "Shri Vaishya Natwar Goyal: Life & Public Service")}
          </h1>
          <p className="text-sm sm:text-base text-[#667085] leading-relaxed mx-auto">
            {t(
              "आरंभिक जीवन, पारिवारिक संस्कार, चार दशकों का सांगठनिक संघर्ष और उत्तर प्रदेश में औद्योगिक व सामाजिक नेतृत्व का प्रमाणित इतिहास।",
              "A comprehensive biographical narrative documenting early background, four decades of trade representation, and dedicated public governance."
            )}
          </p>
          <div className="w-20 h-1 bg-[#F4510B] rounded-full mx-auto mt-2" />
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Long-form Biography Sections (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {BIOGRAPHY_SECTIONS.map((section, idx) => (
              <article key={section.id} className="space-y-4">
                <div className="border-l-2 border-[#F4510B] pl-4 space-y-1">
                  <span className="text-[11px] font-bold text-[#F4510B] uppercase tracking-widest">
                    {t(`अध्याय ${idx + 1}`, `Chapter ${idx + 1}`)}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#111827] font-serif">
                    {t(section.titleHi, section.titleEn)}
                  </h2>
                  {section.subtitleHi && (
                    <p className="text-xs sm:text-sm text-[#667085]">
                      {t(section.subtitleHi, section.subtitleEn || "")}
                    </p>
                  )}
                </div>

                {/* Section Image if present */}
                {section.image && (
                  <div className="rounded-2xl overflow-hidden border border-[#E7E5E4] bg-slate-100 shadow-2xs my-4">
                    <div className="relative aspect-[16/9] w-full">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={section.image}
                        alt={t(section.titleHi, section.titleEn)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {section.imageCaptionHi && (
                      <div className="p-3 bg-[#111827] text-white text-xs">
                        <p>{t(section.imageCaptionHi, section.imageCaptionEn || "")}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Paragraphs */}
                <div className="space-y-3.5 text-[#1F2937] leading-relaxed text-sm sm:text-base">
                  {(lang === "hi" ? section.contentHi : section.contentEn).map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Right Column: Verified Profile Facts & Photo Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Authentic Portrait Card */}
            <div className="rounded-2xl overflow-hidden border border-[#E7E5E4] bg-white shadow-xs">
              <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://ik.imagekit.io/avdarinn/tr:f-auto,q-80/natwarlal/uploaded/IMG-20261015-WA0313.jpg"
                  alt="Shri Vaishya Natwar Goyal"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-4 bg-[#FAF8F4] border-t border-[#E7E5E4] text-center">
                <p className="text-sm font-bold text-[#111827]">श्री वैश्य नटवर गोयल</p>
                <p className="text-xs text-[#F4510B] font-semibold mt-0.5">उपाध्यक्ष, उ०प्र० लघु उद्योग निगम (राज्यमंत्री स्तर)</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-[#E7E5E4] bg-white space-y-4 shadow-xs sticky top-24">
              <div className="border-b border-[#E7E5E4] pb-3">
                <h3 className="text-sm font-bold text-[#111827] uppercase tracking-wider">
                  {t("सत्यापित जीवन विवरण", "Verified Profile Details")}
                </h3>
                <p className="text-[11px] text-[#667085]">
                  {t("दस्तावेज एवं अभिलेख संदर्भ", "Dossier & Public Record Sources")}
                </p>
              </div>

              <div className="space-y-3.5 divide-y divide-[#E7E5E4]/60 text-xs">
                {PROFILE_FACTS.slice(0, 8).map((fact) => (
                  <div key={fact.id} className="pt-3 first:pt-0">
                    <p className="text-[11px] text-[#667085] font-medium">
                      {t(fact.labelHi, fact.labelEn)}
                    </p>
                    <p className="text-sm font-semibold text-[#111827] mt-0.5">
                      {t(fact.valueHi, fact.valueEn)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/political-journey"
                  className="w-full py-2.5 px-3 rounded-md bg-[#FAF8F4] border border-[#E7E5E4] hover:bg-slate-50 text-xs font-semibold text-[#111827] transition-colors flex items-center justify-between"
                >
                  <span>{t("सांगठनिक टाइमलाइन देखें", "View Journey Timeline")}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F4510B]" />
                </Link>
              </div>
            </div>
          </aside>

        </div>
      </section>
    </div>
  );
}
