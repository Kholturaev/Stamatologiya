"use client";

import { Award, GraduationCap, Heart } from "lucide-react";
import { useSiteUI } from "@/components/providers/SiteProvider";
import { translations } from "@/lib/translations";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const { locale } = useSiteUI();
  const t = translations[locale].about;

  return (
    <section
      className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-zinc-900 dark:to-zinc-950"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1729162128021-f37dca3ff30d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwZG9jdG9yJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc3Mjc2NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Dr. Michael Chen"
                className="w-full h-[500px] sm:h-[600px] object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl hidden sm:block">
              <div className="text-4xl font-bold">10+</div>
              <div className="text-sm">{t.yearsExperience}</div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-full text-sm mb-6">
              {t.badge}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-zinc-100 mb-6">
              {t.title}
            </h2>

            <p className="text-lg text-gray-600 dark:text-zinc-300 mb-6 leading-relaxed">
              {t.paragraph1}
            </p>

            <p className="text-lg text-gray-600 dark:text-zinc-300 mb-8 leading-relaxed">
              {t.paragraph2}
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-zinc-100 mb-1">
                    {t.educationTitle}
                  </div>
                  <div className="text-gray-600 dark:text-zinc-300">
                    {t.educationValue}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-zinc-100 mb-1">
                    {t.specialistTitle}
                  </div>
                  <div className="text-gray-600 dark:text-zinc-300">
                    {t.specialistValue}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-zinc-100 mb-1">
                    {t.careTitle}
                  </div>
                  <div className="text-gray-600 dark:text-zinc-300">
                    {t.careValue}
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
