"use client";

import { Calendar, MessageCircle, Phone } from "lucide-react";
import { useSiteUI } from "@/components/providers/SiteProvider";
import { translations } from "@/lib/translations";

interface FloatingButtonsProps {
  onBookClick: () => void;
}

export function FloatingButtons({ onBookClick }: FloatingButtonsProps) {
  const { locale } = useSiteUI();
  const t = translations[locale].floating;

  return (
    <div className="fixed right-4 bottom-24 sm:bottom-6 flex flex-col gap-3 z-40">
      <button
        onClick={onBookClick}
        className="w-14 h-14 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all group"
        title={t.bookTitle}
      >
        <Calendar className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
      </button>

      <a
        href="https://t.me/yourdentalclinic"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all group"
        title={t.telegramTitle}
      >
        <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
      </a>

      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all group"
        title={t.whatsappTitle}
      >
        <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
      </a>

      <a
        href="tel:+1234567890"
        className="w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all group sm:hidden"
        title={t.callTitle}
      >
        <Phone className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
}
