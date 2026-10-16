"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { SOCIAL_WORK_ACTIVITIES } from "@/data/socialWork";
import { MapPin, Calendar, ShieldCheck, ArrowRight, HeartHandshake } from "lucide-react";

export default function SocialWorkPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Centered & Bold Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-3 pb-6 border-b border-[#E7E5E4]">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F4510B] px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200">
            {t("लोक सेवा एवं सामाजिक सरोकार", "Social & Community Service")}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] font-serif tracking-tight">
            {t("सामाजिक एवं सामुदायिक गतिविधियाँ", "Social & Community Initiatives")}
          </h1>
          <p className="text-sm sm:text-base text-[#667085] leading-relaxed mx-auto">
            {t(
              "नागरिक राहत, ग्रामीण शिक्षा के उन्नयन, वैश्य समाज के उत्थान, सामूहिक विवाह सम्मेलनों एवं छात्रवृत्ति अभियानों में श्री वैश्य नटवर गोयल का प्रमाणित अवदान।",
              "Documented civic relief, educational governance, mass marriage sammelans, and community welfare drives undertaken across Uttar Pradesh."
            )}
          </p>
          <div className="w-20 h-1 bg-[#F4510B] rounded-full mx-auto mt-2" />
        </div>
      </section>

      {/* Visual Authentic Moments Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden border border-[#E7E5E4] bg-white shadow-2xs group">
            <div className="aspect-[16/10] overflow-hidden bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ik.imagekit.io/avdarinn/tr:f-auto,q-80/natwarlal/uploaded/IMG-20261015-WA0321.jpg"
                alt="Mass Marriage Sammelan"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-bold text-[#F4510B] uppercase">सामूहिक विवाह सम्मेलन</span>
              <p className="text-sm font-bold text-[#111827] font-serif">नवदम्पतियों को उपहार व आशीर्वाद</p>
              <p className="text-xs text-[#667085]">गरीब परिवारों की कन्याओं हेतु निरंतर सामूहिक विवाह आयोजनों का नेतृत्व।</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#E7E5E4] bg-white shadow-2xs group">
            <div className="aspect-[16/10] overflow-hidden bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ik.imagekit.io/avdarinn/tr:f-auto,q-80/natwarlal/uploaded/IMG-20261015-WA0320.jpg"
                alt="Student Merit Awards"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-bold text-[#F4510B] uppercase">शिक्षा एवं छात्रवृत्ति</span>
              <p className="text-sm font-bold text-[#111827] font-serif">मेधावी छात्र-छात्रा प्रतिभा सम्मान</p>
              <p className="text-xs text-[#667085]">प्रतिभावान विद्यार्थियों को पदक, प्रमाण पत्र व उच्च शिक्षा हेतु आर्थिक संबल।</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#E7E5E4] bg-white shadow-2xs group">
            <div className="aspect-[16/10] overflow-hidden bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ik.imagekit.io/avdarinn/tr:f-auto,q-80/natwarlal/uploaded/IMG-20261015-WA0333.jpg"
                alt="Women Entrepreneurship"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-bold text-[#F4510B] uppercase">महिला स्वावलंबन</span>
              <p className="text-sm font-bold text-[#111827] font-serif">स्वयं सहायता समूह एवं कुटीर उद्योग</p>
              <p className="text-xs text-[#667085]">महिला उद्यमियों को ऋण सुविधा और बाज़ार संपर्क उपलब्ध कराने का अभियान।</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SOCIAL_WORK_ACTIVITIES.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-[#E7E5E4] p-6 sm:p-7 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E7E5E4]/60 pb-3">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider text-[#F4510B] bg-orange-50">
                    {t(item.categoryHi, item.categoryEn)}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#667085] font-mono">
                    <Calendar className="w-3.5 h-3.5 text-[#F4510B]" />
                    <span>{item.year}</span>
                  </div>
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-[#111827] font-serif leading-snug">
                  {t(item.titleHi, item.titleEn)}
                </h2>

                <div className="flex items-center gap-1.5 text-xs text-[#667085]">
                  <MapPin className="w-3.5 h-3.5 text-[#F4510B]" />
                  <span>{t(item.locationHi, item.locationEn)}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed pt-1">
                  {t(item.descriptionHi, item.descriptionEn)}
                </p>
              </div>

              {/* Source verification footer */}
              <div className="pt-3 border-t border-[#E7E5E4]/60 flex items-center justify-between text-[11px] text-[#667085]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t("सत्यापित संदर्भ: ", "Verified Source: ")}{lang === "hi" ? item.organizationRefHi : item.organizationRefEn}</span>
                </span>
                <span className="text-[#F4510B] font-semibold">{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Link */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E7E5E4] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#1F2937] font-medium text-center sm:text-left">
            {t(
              "सामूहिक विवाह, छात्र सम्मान एवं सामाजिक कार्यक्रमों की तस्वीरें गैलरी में उपलब्ध हैं।",
              "Photographs from community welfare events and student award ceremonies are available in the gallery."
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
