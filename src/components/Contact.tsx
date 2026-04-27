"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import { useSiteUI } from "@/components/providers/SiteProvider";
import { translations } from "@/lib/translations";

export function Contact() {
  const { locale } = useSiteUI();
  const t = translations[locale].contact;

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-zinc-100 mb-4">
            {t.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-zinc-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-950 rounded-2xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-zinc-100 mb-2 text-lg">
                  {t.addressTitle}
                </div>
                <div className="text-gray-600 dark:text-zinc-300">
                  {t.addressLine1}
                  <br />
                  {t.addressLine2}
                  <br />
                  {t.addressLine3}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-950 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-7 h-7 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-zinc-100 mb-2 text-lg">
                  {t.phoneTitle}
                </div>
                <a
                  href="tel:+1234567890"
                  className="text-blue-600 hover:text-blue-700 transition-colors text-lg"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-950 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-7 h-7 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-zinc-100 mb-2 text-lg">
                  {t.hoursTitle}
                </div>
                <div className="text-gray-600 dark:text-zinc-300 space-y-1">
                  <div>{t.hour1}</div>
                  <div>{t.hour2}</div>
                  <div>{t.hour3}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl dark:shadow-zinc-950/70 h-[400px] lg:h-full min-h-[400px] bg-gray-100 dark:bg-zinc-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6739764381847!2d-73.98784668459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t.mapTitle}
            />
          </div>
        </div>
      </div>

      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-zinc-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-zinc-400">
          <p>&copy; 2026 DentalCare. {t.footer}</p>
        </div>
      </footer>
    </section>
  );
}
