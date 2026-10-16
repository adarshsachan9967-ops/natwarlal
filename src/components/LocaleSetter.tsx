"use client";

import { useEffect } from "react";
import { useLanguage, Language } from "@/context/LanguageContext";

export default function LocaleSetter({ targetLang }: { targetLang: Language }) {
  const { setLang, lang } = useLanguage();

  useEffect(() => {
    if (lang !== targetLang) {
      setLang(targetLang);
    }
  }, [targetLang, lang, setLang]);

  return null;
}
