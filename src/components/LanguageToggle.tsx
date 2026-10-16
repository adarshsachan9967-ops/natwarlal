"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-lg bg-[#FAF8F4] p-1 border border-[#E7E5E4] text-xs ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <div className="flex items-center pl-1 pr-1.5 text-[#667085]">
        <Globe className="w-3.5 h-3.5" />
      </div>
      <button
        type="button"
        onClick={() => setLang("hi")}
        className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-150 ${
          lang === "hi"
            ? "bg-[#111827] text-white font-semibold shadow-xs"
            : "text-[#667085] hover:text-[#111827]"
        }`}
        aria-pressed={lang === "hi"}
      >
        हिन्दी
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-150 ${
          lang === "en"
            ? "bg-[#111827] text-white font-semibold shadow-xs"
            : "text-[#667085] hover:text-[#111827]"
        }`}
        aria-pressed={lang === "en"}
      >
        English
      </button>
    </div>
  );
}
