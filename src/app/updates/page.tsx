"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { OFFICIAL_UPDATES } from "@/data/updates";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

export default function UpdatesPage() {
  const { lang, t } = useLanguage();
  const [filterStatus, setFilterStatus] = useState<"all" | "completed" | "upcoming">("all");

  const filteredUpdates =
    filterStatus === "all"
      ? OFFICIAL_UPDATES
      : OFFICIAL_UPDATES.filter((u) => u.status === filterStatus);

  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#E7E5E4] pb-8 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#F4510B]">
            {t("सार्वजनिक सूचनाएं", "Official Bulletins")}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] font-serif tracking-tight">
            {t("आधिकारिक अद्यतन एवं घोषणाएं", "Official Updates & Announcements")}
          </h1>
          <p className="text-sm sm:text-base text-[#667085] max-w-3xl leading-relaxed">
            {t(
              "उत्तर प्रदेश लघु उद्योग निगम एवं कार्यालय द्वारा जारी औपचारिक सूचनाएं, समीक्षा बैठकें एवं कार्यक्रम विवरण।",
              "Public notifications, executive meetings, and verified administrative updates from the Office of Vice Chairman, UPSIC."
            )}
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-1.5 p-1 bg-white rounded-xl border border-[#E7E5E4] text-xs">
          <button
            onClick={() => setFilterStatus("all")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              filterStatus === "all" ? "bg-[#111827] text-white font-semibold shadow-xs" : "text-[#667085] hover:text-[#111827]"
            }`}
          >
            {t("समस्त सूचनाएं", "All Bulletins")}
          </button>
          <button
            onClick={() => setFilterStatus("completed")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              filterStatus === "completed" ? "bg-[#111827] text-white font-semibold shadow-xs" : "text-[#667085] hover:text-[#111827]"
            }`}
          >
            {t("सम्पन्न गतिविधियाँ", "Completed Updates")}
          </button>
          <button
            onClick={() => setFilterStatus("upcoming")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              filterStatus === "upcoming" ? "bg-[#111827] text-white font-semibold shadow-xs" : "text-[#667085] hover:text-[#111827]"
            }`}
          >
            {t("आगामी कार्यक्रम", "Scheduled Upcoming")}
          </button>
        </div>
      </section>

      {/* Updates Cards List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {filteredUpdates.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-[#E7E5E4] p-6 shadow-2xs hover:shadow-md transition-shadow space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E7E5E4]/60 pb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F4510B] bg-orange-50 px-2.5 py-0.5 rounded">
                {item.category === "notification"
                  ? t("शासकीय विज्ञप्ति", "Notification")
                  : item.category === "meeting"
                  ? t("समीक्षा बैठक", "Review Meeting")
                  : t("सार्वजनिक आयोजन", "Public Event")}
              </span>
              <div className="flex items-center gap-3 text-xs text-[#667085]">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#F4510B]" />
                  <span>{item.date}</span>
                </span>
                {item.venueHi && (
                  <>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#667085]" />
                      <span>{lang === "hi" ? item.venueHi : item.venueEn}</span>
                    </span>
                  </>
                )}
              </div>
            </div>

            <h2 className="text-base sm:text-lg font-bold text-[#111827] font-serif">
              {lang === "hi" ? item.titleHi : item.titleEn}
            </h2>

            <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
              {lang === "hi" ? item.contentHi : item.contentEn}
            </p>
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E7E5E4] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-[#111827] font-serif">
              {t("कार्यालय संवाद एवं प्रतिवेदन", "Official Inquiries & Memoranda")}
            </h3>
            <p className="text-xs text-[#667085] mt-0.5">
              {t("किसी विशिष्ट आयोजन अथवा ज्ञापन हेतु आधिकारिक सम्पर्क प्रपत्र भरें।", "For appointments or representations, submit via the official contact form.")}
            </p>
          </div>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-md bg-[#F4510B] hover:bg-[#D94205] text-white font-medium text-xs transition-colors shrink-0 flex items-center gap-2"
          >
            <span>{t("सम्पर्क प्रपत्र", "Contact Office")}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
