"use client";

import { Phone, Calendar, MessageCircle } from "lucide-react";
import { useSiteUI } from "@/components/providers/SiteProvider";
import { translations } from "@/lib/translations";

interface StickyBottomBarProps {
  onBookClick: () => void;
}

export function StickyBottomBar({ onBookClick }: StickyBottomBarProps) {
  const { locale } = useSiteUI();
  const t = translations[locale].sticky;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 border-t-2 border-gray-200 dark:border-zinc-700 shadow-2xl dark:shadow-zinc-950/70 z-40 sm:hidden">
      <div className="grid grid-cols-3 gap-2 p-3">
        <a
          href="tel:+1234567890"
          className="flex flex-col items-center justify-center gap-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-xs font-medium">{t.call}</span>
        </a>

        <button
          onClick={onBookClick}
          className="flex flex-col items-center justify-center gap-1 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-colors"
        >
          <Calendar className="w-5 h-5" />
          <span className="text-xs font-medium">{t.book}</span>
        </button>

        <a
          href="https://t.me/yourdentalclinic"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs font-medium">{t.telegram}</span>
        </a>
      </div>
    </div>
  );
}
