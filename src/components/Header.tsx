import { useEffect, useState } from "react";
import { Menu, Moon, Phone, Sun, X } from "lucide-react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: t.navHome },
    { href: "#services", label: t.navServices },
    { href: "#about", label: t.navAbout },
    { href: "#gallery", label: t.navGallery },
    { href: "#testimonials", label: t.navTestimonials },
    { href: "#contact", label: t.navContact },
  ];

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
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

            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

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

              <button
                onClick={onBookClick}
                className="hidden lg:inline-flex bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all shadow-md hover:shadow-lg"
              >
                {t.bookNow}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden w-10 h-10 rounded-full border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-700 dark:text-zinc-100 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors flex items-center justify-center"
                aria-label={t.openMenu}
              >
                <Menu className="w-5 h-5" />
              </button>

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

      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-white dark:bg-zinc-900 shadow-2xl z-50 transform transition-transform duration-300 ease-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-zinc-700">
          <div className="font-semibold text-gray-900 dark:text-zinc-100">
            DentalCare
          </div>
          <button
            onClick={closeMenu}
            className="w-9 h-9 rounded-full border border-gray-200 dark:border-zinc-700 flex items-center justify-center text-gray-700 dark:text-zinc-100"
            aria-label={t.closeMenu}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="block px-4 py-3 rounded-xl text-gray-700 dark:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-zinc-700">
          <button
            onClick={() => {
              closeMenu();
              onBookClick();
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all shadow-md hover:shadow-lg"
          >
            {t.bookNow}
          </button>
        </div>
      </aside>
    </>
  );
}
