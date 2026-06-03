"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "../../messages/en.json";
import fr from "../../messages/fr.json";

type Language = "en" | "fr";
type Messages = typeof en;

const messages: Record<Language, Messages> = { en, fr };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Messages;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: en,
});

const STORAGE_KEY = "drn-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLang] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (saved === "en" || saved === "fr") setLang(saved);
  }, []);

  function setLanguage(lang: Language) {
    localStorage.setItem(STORAGE_KEY, lang);
    setLang(lang);
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: messages[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
