"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { TIMELINE_MILESTONES, TimelineCategory } from "@/data/timeline";
import {
  Calendar,
  Building2,
  Briefcase,
  Users,
  Award,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export default function PoliticalJourneyPage() {
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<"all" | TimelineCategory>("all");

  const filterTabs: { id: "all" | TimelineCategory; labelHi: string; labelEn: string; icon: any }[] = [
    { id: "all", labelHi: "समस्त पड़ाव", labelEn: "All Milestones", icon: Calendar },
    { id: "political", labelHi: "शासकीय दायित्व", labelEn: "Political & Governance", icon: Building2 },
    { id: "trade", labelHi: "व्यापारिक संगठन", labelEn: "Trade Organizations", icon: Briefcase },
    { id: "social", labelHi: "सामाजिक एवं वैश्य संगठन", labelEn: "Social & Community", icon: Users },
    { id: "awards", labelHi: "सम्मान एवं अलंकरण", labelEn: "Awards & Recognitions", icon: Award },
  ];

  const filteredMilestones =
    selectedCategory === "all"
      ? TIMELINE_MILESTONES
      : TIMELINE_MILESTONES.filter((m) => m.category === selectedCategory);

  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Centered & Bold Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-3 pb-6 border-b border-[#E7E5E4]">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F4510B] px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200">
            {t("ऐतिहासिक कालक्रम (1984 – 2024)", "Historical Timeline (1984–2024)")}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] font-serif tracking-tight">
            {t("राजनैतिक, व्यापारिक एवं सामाजिक यात्रा", "Political, Trade & Civic Journey")}
          </h1>
          <p className="text-sm sm:text-base text-[#667085] leading-relaxed mx-auto">
            {t(
              "काशी अग्रवाल समाज की आजीवन सदस्यता से लेकर उत्तर प्रदेश लघु उद्योग निगम के उपाध्यक्ष पद तक—चार दशकों के निरंतर दायित्वों का प्रमाणित कालक्रम।",
              "A documented four-decade chronological journey from youth civic memberships to state corporation leadership and national trade representation."
            )}
          </p>
          <div className="w-20 h-1 bg-[#F4510B] rounded-full mx-auto mt-2" />
        </div>
      </section>

      {/* Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 bg-white rounded-2xl border border-[#E7E5E4] shadow-xs">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-[#111827] text-white shadow-xs"
                    : "text-[#667085] hover:text-[#111827] hover:bg-[#FAF8F4]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#F4510B]" : "text-[#667085]"}`} />
                <span>{t(tab.labelHi, tab.labelEn)}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Timeline Section with 2-Column Responsive Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Timeline Cards (Left 8 cols) */}
          <div className="lg:col-span-8">
            <div className="relative border-l-2 border-[#E7E5E4] ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-8">
              {filteredMilestones.map((milestone) => (
                <div key={milestone.id} className="relative group">
                  {/* Pin on line */}
                  <div className="absolute -left-[31px] sm:-left-[47px] top-2 w-4 h-4 rounded-full bg-white border-2 border-[#F4510B] group-hover:scale-125 transition-transform shadow-xs" />

                  {/* Card */}
                  <div className="bg-white rounded-2xl border border-[#E7E5E4] p-6 shadow-2xs hover:shadow-md transition-shadow space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E7E5E4]/60 pb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-[#111827] text-white">
                          {milestone.year}
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#F4510B] bg-orange-50 px-2 py-0.5 rounded">
                          {t(milestone.roleHi, milestone.roleEn)}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#667085] font-medium flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{milestone.sourceNote}</span>
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#111827] font-serif group-hover:text-[#F4510B] transition-colors leading-snug">
                      {t(milestone.titleHi, milestone.titleEn)}
                    </h3>

                    <p className="text-xs font-semibold text-[#1F2937]">
                      {t(milestone.organizationHi, milestone.organizationEn)}
                    </p>

                    <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                      {t(milestone.descriptionHi, milestone.descriptionEn)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky Right Side Dossier (Right 4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="bg-[#111827] text-white p-6 rounded-3xl space-y-5 shadow-lg border border-white/10">
              <span className="px-3 py-1 rounded-full bg-[#F4510B] text-white text-[11px] font-bold uppercase tracking-wider">
                {t("सार्वजनिक सेवा अभिलेख", "Official Dossier")}
              </span>
              <h3 className="text-xl font-bold font-serif leading-snug">
                {t("चार दशकों की अटूट सांगठनिक सेवा", "Four Decades of Continuous Service")}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t(
                  "1984 में काशी से शुरू हुआ यह सफर आज उत्तर प्रदेश के सभी 75 जनपदों में व्यापारियों, लघु उद्यमियों और समाज के विभिन्न वर्गों के सशक्तिकरण का संबल बना हुआ है।",
                  "Originating from Kashi in 1984, this journey continues to empower merchants, entrepreneurs, and communities across 75 districts."
                )}
              </p>
              <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://ik.imagekit.io/avdarinn/tr:f-auto,q-80/natwarlal/uploaded/IMG-20261015-WA0313.jpg"
                  alt="Assuming Charge"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-2">
                <Link
                  href="/gallery"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                >
                  <span>{t("संबंधित छायाचित्र देखें", "View Journey Photos")}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F4510B]" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#E7E5E4] shadow-2xs space-y-3 text-xs text-[#667085]">
              <p className="font-bold text-[#111827]">प्रमाणित शासकीय एवं सांगठनिक अभिलेख</p>
              <p>बायोग्राफी संकलन (PDF) एवं शासकीय अधिसूचनाओं द्वारा सत्यापित तिथियां एवं पदभार विवरण।</p>
              <Link href="/biography" className="inline-flex items-center gap-1 text-[#F4510B] font-bold">
                <span>बायोग्राफी विवरण पढ़ें →</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E7E5E4] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#1F2937] font-medium text-center sm:text-left">
            {t(
              "इन सभी ऐतिहासिक पड़ावों और सांगठनिक बैठकों के प्रामाणिक छायाचित्र फोटो गैलरी में उपलब्ध हैं।",
              "Authentic photographs from these historic assemblies and leadership meetings are available in the gallery."
            )}
          </p>
          <Link
            href="/gallery"
            className="px-6 py-3 rounded-md bg-[#111827] hover:bg-black text-white font-semibold text-xs sm:text-sm transition-colors shrink-0 flex items-center gap-2 shadow-xs"
          >
            <span>{t("फोटो गैलरी देखें", "View Gallery Archive")}</span>
            <ArrowRight className="w-4 h-4 text-[#F4510B]" />
          </Link>
        </div>
      </section>
    </div>
  );
}
