"use client";

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { useSiteUI } from "@/components/providers/SiteProvider";
import { Services } from "@/components/Services";
import { StickyBottomBar } from "@/components/StickyBottomBar";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  const { openBooking } = useSiteUI();

  return (
    <>
      <Hero onBookClick={openBooking} />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <FloatingButtons onBookClick={openBooking} />
      <StickyBottomBar onBookClick={openBooking} />
    </>
  );
}
