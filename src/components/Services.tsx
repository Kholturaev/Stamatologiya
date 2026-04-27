"use client";

import { Sparkles, Smile, AlignJustify } from "lucide-react";
import { useSiteUI } from "@/components/providers/SiteProvider";
import { translations } from "@/lib/translations";

const services = [
  {
    icon: Sparkles,
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Smile,
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: AlignJustify,
    color: "bg-green-50 text-green-600",
  },
];

export function Services() {
  const { locale } = useSiteUI();
  const t = translations[locale].services;

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-zinc-100 mb-4">
            {t.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-zinc-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 rounded-3xl p-8 hover:shadow-xl dark:hover:shadow-zinc-950/70 transition-all duration-300 group"
              >
                <div
                  className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-zinc-100 mb-4">
                  {t.items[index]?.title}
                </h3>
                <p className="text-gray-600 dark:text-zinc-300 leading-relaxed">
                  {t.items[index]?.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
