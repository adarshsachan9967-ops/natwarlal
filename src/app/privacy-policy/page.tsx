"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, Lock, Mail, ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="border-b border-[#E7E5E4] pb-8 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#F4510B]">
            {t("विधिक एवं नीतिगत दस्तावेज", "Legal & Policy Documentation")}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#111827] font-serif tracking-tight">
            {t("गोपनीयता नीति (Privacy Policy)", "Privacy Policy")}
          </h1>
          <p className="text-xs text-[#667085]">
            {t("अंतिम संशोधन: 2026", "Last Updated: 2026")}
          </p>
        </div>
      </section>

      {/* Main Policy Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-[#1F2937] text-sm sm:text-base leading-relaxed">
        <div className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-[#111827] font-serif flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>{t("1. प्रस्तावना एवं उद्देश्य", "1. Introduction & Purpose")}</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#667085]">
            {t(
              "यह गोपनीयता नीति 'श्री वैश्य नटवर गोयल' की आधिकारिक सार्वजनिक सूचना वेबसाइट पर लागू होती है। हमारा उद्देश्य नागरिकों, व्यापारियों और शुभचिंतकों को प्रामाणिक जानकारी उपलब्ध कराना तथा उनकी निजता का पूर्ण सम्मान करना है।",
              "This Privacy Policy governs the official public informational portal of Shri Vaishya Natwar Goyal. Our objective is to furnish verified public information while respecting user privacy."
            )}
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-[#111827] font-serif flex items-center gap-2">
            <Mail className="w-5 h-5 text-[#F4510B]" />
            <span>{t("2. सम्पर्क प्रपत्र द्वारा सूचना संग्रह", "2. Data Collected via Contact Forms")}</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#667085]">
            {t(
              "वेबसाइट का अवलोकन करते समय किसी प्रकार की अनिवार्य व्यक्तिगत सूचना नहीं मांगी जाती। केवल तब जब उपयोगकर्ता स्वेच्छा से 'सम्पर्क' प्रपत्र के माध्यम से ज्ञापन, प्रश्न अथवा सुझाव भेजता है, तब निम्नलिखित जानकारी एकत्र की जाती है:",
              "Browsing this website does not require submitting personal identifying details. Only when a visitor voluntarily submits a public query or representation through the Contact form, we collect:"
            )}
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-xs text-[#667085]">
            <li>{t("उपयोगकर्ता का नाम (Full Name)", "Your full name")}</li>
            <li>{t("ईमेल पता (Email Address)", "Email address for official communication")}</li>
            <li>{t("दूरभाष संख्या, यदि स्वेच्छा से दी गई हो (Phone Number, if provided)", "Phone number (if optionally provided)")}</li>
            <li>{t("संदेश अथवा ज्ञापन की सामग्री (Subject and Message Content)", "Subject and content of the representation")}</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-[#111827] font-serif">
            {t("3. सूचना की सुरक्षा एवं गोपनीयता", "3. Security of Collected Information")}
          </h2>
          <p className="text-xs sm:text-sm text-[#667085]">
            {t(
              "हम प्रेषित सूचनाओं को किसी भी वाणिज्यिक अथवा तृतीय-पक्ष संस्था के साथ साझा, विक्रय अथवा व्यापार नहीं करते। एकत्र किया गया डाटा केवल कार्यालय सचिव द्वारा ज्ञापन की समीक्षा एवं प्रत्युत्तर हेतु उपयोग में लाया जाता है।",
              "Submitted messages are strictly confidential and never rented, shared, or commercialized. They are solely processed by the camp office secretariat for grievance redressal and formal correspondence."
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
