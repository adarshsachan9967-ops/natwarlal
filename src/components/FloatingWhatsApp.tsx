"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingWhatsApp() {
  const { lang, t } = useLanguage();
  const [tooltipVisible, setTooltipVisible] = useState(false);

  // Configurable public number or fallback official office WhatsApp
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919415200000";
  
  const defaultMessage = lang === "hi"
    ? "नमस्कार, मुझे वेबसाइट पर दी गई जानकारी के संबंध में संपर्क करना है।"
    : "Hello, I would like to get in touch regarding the information provided on the official website.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside 
      aria-label={t("व्हाट्सएप संपर्क", "WhatsApp Contact")}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 group print:hidden select-none"
    >
      {/* Tooltip */}
      <div
        className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111827] text-white text-xs font-medium shadow-lg transition-all duration-200 border border-slate-700 ${
          tooltipVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
        <span>{t("सम्पर्क करें (WhatsApp)", "Chat on WhatsApp")}</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("व्हाट्सएप पर आधिकारिक कार्यालय से संपर्क करें", "Contact official camp office on WhatsApp")}
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
      </a>
    </aside>
  );
}
