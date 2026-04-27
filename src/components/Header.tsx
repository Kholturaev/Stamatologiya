import { Moon, Phone, Sun } from "lucide-react";
import { type Locale, translations } from "@/lib/translations";

interface HeaderProps {
  onBookClick: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export function Header({
  onBookClick,
  isDarkMode,
  onToggleTheme,
  locale,
  onLocaleChange,
}: HeaderProps) {
  const t = translations[locale].header;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm shadow-sm dark:shadow-zinc-800/60 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-950 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-xl">✨</span>
              </div>
              <span className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-zinc-100">
                DentalCare
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center rounded-full border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-1">
              <button
                onClick={() => onLocaleChange("ru")}
                className={`px-2 py-1 text-xs rounded-full transition-colors ${
                  locale === "ru"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-700"
                }`}
                aria-label={`${t.languageLabel}: RU`}
              >
                RU
              </button>
              <button
                onClick={() => onLocaleChange("uz")}
                className={`px-2 py-1 text-xs rounded-full transition-colors ${
                  locale === "uz"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-700"
                }`}
                aria-label={`${t.languageLabel}: UZ`}
              >
                UZ
              </button>
            </div>
            <button
              onClick={onToggleTheme}
              className="w-10 h-10 rounded-full border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-700 dark:text-zinc-100 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors flex items-center justify-center"
              aria-label={isDarkMode ? t.switchToLight : t.switchToDark}
              title={isDarkMode ? t.lightMode : t.darkMode}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <a
              href="tel:+1234567890"
              className="hidden sm:flex items-center gap-2 text-gray-700 dark:text-zinc-200 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>{t.phone}</span>
            </a>
            {/* <button
              onClick={onBookClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all shadow-md hover:shadow-lg"
            >
              {t.bookNow}
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
}
