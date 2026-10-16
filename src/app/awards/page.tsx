"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { AWARDS_DATA } from "@/data/awards";
import { Award, Building2, ShieldCheck, ArrowRight } from "lucide-react";

export default function AwardsPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Centered & Bold Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-3 pb-6 border-b border-[#E7E5E4]">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C6A15B] px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200">
            {t("सम्मान एवं अलंकरण", "Awards & Recognitions")}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] font-serif tracking-tight">
            {t("प्रामाणिक सम्मान एवं सार्वजनिक अलंकरण", "Verified Honors & Civic Citations")}
          </h1>
          <p className="text-sm sm:text-base text-[#667085] leading-relaxed mx-auto">
            {t(
              "मूल संदर्भ दस्तावेज (PDF) एवं सांगठनिक अभिलेखों में दर्ज ऐतिहासिक सम्मान, नागरिक अभिनंदन एवं उपलब्धियां।",
              "Documented civic citations, organizational awards, and state-level felicitations conferred upon Shri Vaishya Natwar Goyal."
            )}
          </p>
          <div className="w-20 h-1 bg-[#C6A15B] rounded-full mx-auto mt-2" />
        </div>
      </section>

      {/* Visual Honors Showcase using uploaded real photos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden border border-[#E7E5E4] bg-white shadow-2xs group">
            <div className="aspect-[16/11] overflow-hidden bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ik.imagekit.io/avdarinn/tr:f-auto,q-80/natwarlal/uploaded/IMG-20261015-WA0330.jpg"
                alt="Civic Honor Trophy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-bold text-[#C6A15B] uppercase">नागरिक अभिनंदन</span>
              <p className="text-sm font-bold text-[#111827] font-serif">स्मृति चिन्ह एवं प्रशस्ति पत्र अर्पण</p>
              <p className="text-xs text-[#667085]">लघु उद्योग निगम में मनोनयन पर व्यापार जगत द्वारा विशेष सम्मान।</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#E7E5E4] bg-white shadow-2xs group">
            <div className="aspect-[16/11] overflow-hidden bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ik.imagekit.io/avdarinn/tr:f-auto,q-80/natwarlal/uploaded/IMG-20261015-WA0340.jpg"
                alt="Lifetime Award"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-bold text-[#C6A15B] uppercase">जीवन साधना सम्मान</span>
              <p className="text-sm font-bold text-[#111827] font-serif">चार दशकों की निष्कलंक जनसेवा</p>
              <p className="text-xs text-[#667085]">सामाजिक समरसता और व्यापारी हितों के संरक्षण हेतु कृतज्ञता ज्ञापन।</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#E7E5E4] bg-white shadow-2xs group">
            <div className="aspect-[16/11] overflow-hidden bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ik.imagekit.io/avdarinn/tr:f-auto,q-80/natwarlal/uploaded/IMG-20261015-WA0309.jpg"
                alt="Traditional Headgear Honor"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-bold text-[#C6A15B] uppercase">पारंपरिक सम्मान</span>
              <p className="text-sm font-bold text-[#111827] font-serif">पगड़ी एवं साफा अर्पण समारोह</p>
              <p className="text-xs text-[#667085]">विभिन्न जनपदों में व्यापारियों व समाजसेवियों द्वारा आत्मीय अभिनंदन।</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {AWARDS_DATA.map((award) => (
          <div
            key={award.id}
            className="bg-white rounded-2xl border border-[#E7E5E4] p-6 sm:p-8 shadow-2xs hover:shadow-md transition-shadow relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-0.5 rounded bg-amber-50 text-[#C6A15B] font-bold text-xs border border-amber-200">
                    {award.year}
                  </span>
                  <span className="text-[11px] font-bold text-[#F4510B] uppercase tracking-wider bg-orange-50 px-2.5 py-0.5 rounded">
                    {t(award.categoryHi, award.categoryEn)}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] font-serif leading-snug">
                  {lang === "hi" ? award.titleHi : award.titleEn}
                </h2>

                <div className="space-y-1 text-xs text-[#667085]">
                  <div className="flex items-start gap-2">
                    <Building2 className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#111827]">{t("प्रदाता संस्था: ", "Conferred By: ")}</strong>
                      {lang === "hi" ? award.conferredByHi : award.conferredByEn}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#111827]">{t("दस्तावेजी संदर्भ: ", "Dossier Reference: ")}</strong>
                      {award.sourceNote}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed pt-2">
                  {lang === "hi" ? award.descriptionHi : award.descriptionEn}
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <div className="w-20 h-20 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-[#C6A15B]">
                  <Award className="w-10 h-10" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E7E5E4] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#1F2937] font-medium text-center sm:text-left">
            {t(
              "नागरिक सम्मान एवं अभिनंदन के संपूर्ण छायाचित्र फोटो गैलरी में उपलब्ध हैं।",
              "Complete photographic documentation of civic honors and citations is available in the gallery."
            )}
          </p>
          <Link
            href="/gallery"
            className="px-6 py-3 rounded-md bg-[#111827] hover:bg-black text-white font-semibold text-xs sm:text-sm transition-colors shrink-0 flex items-center gap-2 shadow-xs"
          >
            <span>{t("फोटो गैलरी देखें", "View Photo Gallery")}</span>
            <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
          </Link>
        </div>
      </section>
    </div>
  );
}
