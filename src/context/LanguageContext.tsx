"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { TRANSLATIONS, Locale, Translations } from "@/data/translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "zh",
  setLocale: () => {},
  t: TRANSLATIONS.zh,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>("zh");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("portfolio_locale") as Locale | null;
    if (saved && (saved === "zh" || saved === "en")) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem("portfolio_locale", newLocale);
    } catch {
      // ignore storage error
    }
  };

  const currentTranslations = mounted ? TRANSLATIONS[locale] : TRANSLATIONS.zh;

  return (
    <LanguageContext.Provider
      value={{
        locale: mounted ? locale : "zh",
        setLocale,
        t: currentTranslations,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
