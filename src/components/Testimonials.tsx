"use client";

import { Star } from "lucide-react";
import { useSiteUI } from "@/components/providers/SiteProvider";
import { translations } from "@/lib/translations";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Sarah Johnson",
    image:
      "https://images.unsplash.com/photo-1749700332103-cbd639404ebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBlcnNvbiUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzc3Mjc2NDkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    image:
      "https://images.unsplash.com/photo-1579420593648-0deba81fd762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxoYXBweSUyMHBlcnNvbiUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzc3Mjc2NDkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5,
  },
  {
    name: "Emily Chen",
    image:
      "https://images.unsplash.com/photo-1672527838035-90ae2ad2e813?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxoYXBweSUyMHBlcnNvbiUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzc3Mjc2NDkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5,
  },
];

export function Testimonials() {
  const { locale } = useSiteUI();
  const t = translations[locale].testimonials;

  return (
    <section
      className="py-16 sm:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-zinc-900 dark:to-zinc-950"
      id="testimonials"
    >
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
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white dark:bg-zinc-800 rounded-3xl p-8 shadow-lg dark:shadow-zinc-950/70 hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-zinc-100">
                    {testimonial.name}
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-zinc-300 leading-relaxed italic">
                &quot;{t.texts[index]}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
