"use client";

import { Phone, Star, Users, Award } from "lucide-react";
import { useSiteUI } from "@/components/providers/SiteProvider";
import { translations } from "@/lib/translations";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onBookClick: () => void;
}

export function Hero({ onBookClick }: HeroProps) {
  const { locale } = useSiteUI();
  const t = translations[locale].hero;

  return (
    <section className="pt-16 sm:pt-20 bg-gradient-to-b from-blue-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-full text-sm mb-6">
              {t.badge}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-zinc-100 mb-6 leading-tight">
              {t.title}
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-zinc-300 mb-8 max-w-xl mx-auto lg:mx-0">
              {t.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={onBookClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg transition-all shadow-lg hover:shadow-xl"
              >
                {t.bookButton}
              </button>
              <a
                href="tel:+1234567890"
                className="bg-white dark:bg-zinc-900 hover:bg-gray-50 dark:hover:bg-zinc-800 text-gray-900 dark:text-zinc-100 border-2 border-gray-200 dark:border-zinc-700 px-8 py-4 rounded-full text-lg transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <Phone className="w-5 h-5" />
                {t.callNow}
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <div className="font-bold text-gray-900 dark:text-zinc-100">
                  {t.stats.experienceValue}
                </div>
                <div className="text-sm text-gray-600 dark:text-zinc-400">
                  {t.stats.experienceLabel}
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div className="font-bold text-gray-900 dark:text-zinc-100">
                  {t.stats.patientsValue}
                </div>
                <div className="text-sm text-gray-600 dark:text-zinc-400">
                  {t.stats.patientsLabel}
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                </div>
                <div className="font-bold text-gray-900 dark:text-zinc-100">
                  {t.stats.ratingValue}
                </div>
                <div className="text-sm text-gray-600 dark:text-zinc-400">
                  {t.stats.ratingLabel}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt={t.heroImageAlt}
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl dark:shadow-zinc-950/70 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-zinc-100">
                    {t.trustTitle}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-zinc-400">
                    {t.trustSince}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
