"use client";

import { Reveal } from "@/components/Reveal";
import { useSiteUI } from "@/components/providers/SiteProvider";
import { translations } from "@/lib/translations";

export function Prices() {
  const { locale } = useSiteUI();
  const t = translations[locale].prices;

  return (
    <section
      id="prices"
      className="py-16 sm:py-24 scroll-mt-24 bg-gradient-to-b from-gray-50 to-white dark:from-zinc-950 dark:to-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-zinc-100 mb-4">
            {t.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-zinc-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </Reveal>

        <Reveal className="rounded-3xl overflow-hidden border border-gray-200 dark:border-zinc-700 shadow-xl dark:shadow-zinc-950/70 bg-white dark:bg-zinc-900">
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-blue-50 dark:bg-zinc-800">
                  <th className="px-6 py-4 text-sm font-semibold text-gray-800 dark:text-zinc-100 uppercase tracking-wide">
                    {t.serviceColumn}
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-800 dark:text-zinc-100 uppercase tracking-wide text-right">
                    {t.priceColumn}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.items.map((item, index) => (
                  <tr
                    key={item.service}
                    className={
                      index % 2 === 0
                        ? "bg-white dark:bg-zinc-900"
                        : "bg-gray-50 dark:bg-zinc-800/70"
                    }
                  >
                    <td className="px-6 py-4 text-gray-700 dark:text-zinc-200 font-medium">
                      {item.service}
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-blue-700 dark:text-blue-300">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden divide-y divide-gray-200 dark:divide-zinc-700">
            {t.items.map((item, index) => (
              <div
                key={item.service}
                className={`px-4 py-4 ${
                  index % 2 === 0
                    ? "bg-white dark:bg-zinc-900"
                    : "bg-gray-50 dark:bg-zinc-800/70"
                }`}
              >
                <div className="text-gray-800 dark:text-zinc-100 font-medium mb-1">
                  {item.service}
                </div>
                <div className="text-blue-700 dark:text-blue-300 font-semibold">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal
          className="mt-5 text-sm text-gray-500 dark:text-zinc-400 text-center"
          delayMs={100}
        >
          {t.note}
        </Reveal>
      </div>
    </section>
  );
}
