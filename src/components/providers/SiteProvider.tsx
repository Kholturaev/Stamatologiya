"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { BookingForm } from "@/components/BookingForm";
import { Header } from "@/components/Header";
import { type Locale } from "@/lib/translations";

type ThemeMode = "light" | "dark";

type SiteUIContextValue = {
  openBooking: () => void;
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const SiteUIContext = createContext<SiteUIContextValue | null>(null);

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const savedTheme = localStorage.getItem("theme-mode");
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return "uz";
    }

    const savedLocale = localStorage.getItem("site-locale");
    if (savedLocale === "ru" || savedLocale === "uz") {
      return savedLocale;
    }

    return navigator.language.toLowerCase().startsWith("ru") ? "ru" : "uz";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", themeMode === "dark");
    localStorage.setItem("theme-mode", themeMode);
  }, [themeMode]);

  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem("site-locale", locale);
  }, [locale]);

  const openBooking = useCallback(() => {
    setIsBookingOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setIsBookingOpen(false);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeMode((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark",
    );
  }, []);

  const contextValue = useMemo(
    () => ({
      openBooking,
      locale,
      setLocale,
    }),
    [openBooking, locale],
  );

  return (
    <SiteUIContext.Provider value={contextValue}>
      <Header
        onBookClick={openBooking}
        isDarkMode={themeMode === "dark"}
        onToggleTheme={toggleTheme}
        locale={locale}
        onLocaleChange={setLocale}
      />
      {children}
      <BookingForm isOpen={isBookingOpen} onClose={closeBooking} />
    </SiteUIContext.Provider>
  );
}

export function useSiteUI() {
  const context = useContext(SiteUIContext);

  if (!context) {
    throw new Error("useSiteUI must be used within a SiteProvider");
  }

  return context;
}
