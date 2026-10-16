"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "hi" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (hiText: string, enText: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "hi",
  setLang: () => {},
  toggleLang: () => {},
  t: (hiText) => hiText,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("hi");

  useEffect(() => {
    const saved = localStorage.getItem("preferred_lang") as Language;
    if (saved === "hi" || saved === "en") {
      setLangState(saved);
    } else {
      // Default to Hindi
      setLangState("hi");
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("preferred_lang", newLang);
    document.documentElement.lang = newLang;
  };

  const toggleLang = () => {
    const nextLang = lang === "hi" ? "en" : "hi";
    setLang(nextLang);
  };

  const t = (hiText: string, enText: string) => {
    return lang === "hi" ? hiText : enText;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
