"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Eye, Keyboard, ArrowLeft } from "lucide-react";

export default function AccessibilityPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="border-b border-[#E7E5E4] pb-8 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#F4510B]">
            {t("सार्वजनिक सुगमता", "Universal Accessibility")}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#111827] font-serif tracking-tight">
            {t("अभिगम्यता कथन (Accessibility Statement)", "Accessibility Statement")}
          </h1>
          <p className="text-sm text-[#667085] leading-relaxed">
            {t(
              "सभी नागरिकों, दिव्यांगजनों एवं विभिन्न उपकरणों के उपयोगकर्ताओं के लिए सुगम, पारदर्शी और पठनीय डिजिटल अनुभव।",
              "Our commitment to providing an inclusive, navigable, and barrier-free digital experience for all citizens and screen reader users."
            )}
          </p>
        </div>
      </section>

      {/* Main Checklist & Standards */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-[#1F2937] text-sm sm:text-base leading-relaxed">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-[#111827] font-serif">
            {t("कार्यान्वित सुगमता मानक", "Implemented Accessibility Features")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white border border-[#E7E5E4] shadow-2xs space-y-2">
              <div className="flex items-center gap-2 text-[#F4510B] font-bold text-sm">
                <Keyboard className="w-4 h-4" />
                <span>{t("कीबोर्ड नेविगेशन", "Full Keyboard Navigation")}</span>
              </div>
              <p className="text-xs text-[#667085] leading-relaxed">
                {t(
                  "सभी लिंक, बटन, फॉर्म फील्ड और फोटो लाइटबॉक्स कीबोर्ड (Tab, Enter, Space, Escape, Arrow keys) द्वारा संचालित किए जा सकते हैं।",
                  "All interactive elements, buttons, forms, and photo lightboxes can be navigated without a mouse using Tab, Escape, and Arrow keys."
                )}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E7E5E4] shadow-2xs space-y-2">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                <Eye className="w-4 h-4" />
                <span>{t("स्क्रीन रीडर समर्थन", "Screen Reader Compatibility")}</span>
              </div>
              <p className="text-xs text-[#667085] leading-relaxed">
                {t(
                  "सिमेंटिक HTML टैग्स (header, nav, main, footer, article) एवं उपयोगी ARIA लेबल्स का प्रयोग किया गया है।",
                  "Built with semantic HTML5 elements and descriptive ARIA landmarks for assistive technology support."
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-[#111827] font-serif">
            {t("फॉन्ट एवं दृश्य सुगमता (Typography & Contrast)", "Typography & Contrast Standards")}
          </h2>
          <p className="text-xs sm:text-sm text-[#667085]">
            {t(
              "देवनागरी लिपि के लिए विशेष रूप से अनुकूलित फोंट्स का उपयोग किया गया है ताकि पठनीयता उत्कृष्ट बनी रहे। कंट्रास्ट अनुपात WCAG 2.1 AA मानकों के अनुरूप रखा गया है।",
              "Devanagari text is rendered using optimized fonts ensuring clear glyph presentation. Color contrast ratios adhere to WCAG 2.1 AA specifications."
            )}
          </p>
        </div>

        <div className="pt-6 border-t border-[#E7E5E4]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#111827] hover:text-[#F4510B]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t("मुख्य पृष्ठ पर वापस जाएं", "Return to Home")}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
