"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useSiteUI } from "@/components/providers/SiteProvider";
import { translations } from "@/lib/translations";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type BeforeAfterSlide = {
  before: string;
  after: string;
  beforePosition?: string;
  afterPosition?: string;
};

const beforeAfter: BeforeAfterSlide[] = [
  {
    before: "/assets/bafore1.png",
    after: "/assets/after1.png",
    afterPosition: "center 24%",
  },
  {
    before: "/assets/before2.png",
    after: "/assets/after2.png",
  },
];

export function Gallery() {
  const { locale } = useSiteUI();
  const t = translations[locale].gallery;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfter.length);
    setSliderPosition(50);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + beforeAfter.length) % beforeAfter.length,
    );
    setSliderPosition(50);
  };

  const handleSliderMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const current = beforeAfter[currentIndex];

  return (
    <section
      className="py-16 sm:py-24 scroll-mt-24 bg-white dark:bg-zinc-900"
      id="gallery"
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

        <Reveal className="max-w-4xl mx-auto" delayMs={120}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl dark:shadow-zinc-950/70 bg-gray-100 dark:bg-zinc-800">
            <div ref={containerRef} className="relative h-[400px] sm:h-[500px]">
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={current.after}
                  alt={t.after}
                  className="w-full h-full object-cover"
                  style={
                    current.afterPosition
                      ? { objectPosition: current.afterPosition }
                      : undefined
                  }
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {t.after}
                </div>
              </div>

              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <ImageWithFallback
                  src={current.before}
                  alt={t.before}
                  className="w-full h-full object-cover"
                  style={
                    current.beforePosition
                      ? { objectPosition: current.beforePosition }
                      : undefined
                  }
                />
                <div className="absolute top-4 left-4 bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {t.before}
                </div>
              </div>

              <div
                className="absolute top-0 bottom-0 w-1 bg-white dark:bg-zinc-100 cursor-ew-resize z-10 shadow-lg"
                style={{
                  left: `${sliderPosition}%`,
                  transform: "translateX(-50%)",
                }}
                onMouseDown={() => {
                  const onMouseMove = (e: MouseEvent) => {
                    handleSliderMove(e.clientX);
                  };
                  const onMouseUp = () => {
                    document.removeEventListener("mousemove", onMouseMove);
                    document.removeEventListener("mouseup", onMouseUp);
                  };
                  document.addEventListener("mousemove", onMouseMove);
                  document.addEventListener("mouseup", onMouseUp);
                }}
                onTouchStart={() => {
                  const onTouchMove = (e: TouchEvent) => {
                    if (e.touches[0]) {
                      handleSliderMove(e.touches[0].clientX);
                    }
                  };
                  const onTouchEnd = () => {
                    document.removeEventListener("touchmove", onTouchMove);
                    document.removeEventListener("touchend", onTouchEnd);
                  };
                  document.addEventListener("touchmove", onTouchMove);
                  document.addEventListener("touchend", onTouchEnd);
                }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-zinc-800 rounded-full shadow-lg flex items-center justify-center">
                  <div className="flex gap-1">
                    <ChevronLeft className="w-4 h-4 text-gray-700 dark:text-zinc-200" />
                    <ChevronRight className="w-4 h-4 text-gray-700 dark:text-zinc-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 bg-white dark:bg-zinc-800 border-2 border-gray-200 dark:border-zinc-700 rounded-full flex items-center justify-center hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-zinc-200" />
            </button>

            <div className="text-center">
              <div className="font-semibold text-gray-900 dark:text-zinc-100 text-lg mb-1">
                {t.cases[currentIndex]}
              </div>
              <div className="text-gray-600 dark:text-zinc-400 text-sm">
                {currentIndex + 1} / {beforeAfter.length}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 bg-white dark:bg-zinc-800 border-2 border-gray-200 dark:border-zinc-700 rounded-full flex items-center justify-center hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-700 dark:text-zinc-200" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
