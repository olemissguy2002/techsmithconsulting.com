// web/src/components/HeroVideo.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Respect prefers-reduced-motion
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const vid = videoRef.current;
    if (!vid) return;

    const apply = () => {
      if (media.matches) {
        vid.pause();
        vid.removeAttribute("autoPlay");
        vid.currentTime = 0;
      } else {
        vid.setAttribute("autoPlay", "");
        vid.play().catch(() => {});
      }
    };
    apply();
    media.addEventListener?.("change", apply);
    return () => media.removeEventListener?.("change", apply);
  }, []);

  return (
    <section className="relative isolate min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        loop
        muted
        playsInline
        preload="metadata"
        poster="/videos/home/hero_poster.jpg"
      >
        <source src="/videos/home/hero_mobile.mp4" type="video/mp4" media="(max-width: 640px)" />
        <source src="/videos/home/hero.mp4" type="video/mp4" />
      </video>

      {/* Subtle dark overlay for legibility */}
      <div className="absolute inset-0 bg-black/40 sm:bg-black/35 md:bg-black/30" />
      {/* Bottom fade into page background */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-28 bg-linear-to-b from-transparent to-black" />

      {/* Centered content */}
      <div className="relative z-10 max-w-4xl px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-md leading-tight sm:leading-tight md:leading-[1.1] mb-4 sm:mb-5 md:mb-6">
          Don’t fall behind in the tech arms race!
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 drop-shadow max-w-2xl mx-auto mb-6 sm:mb-7 md:mb-8">
          Custom AI, Cloud, and Web Solutions
        </p>

        <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
          <Link
            href="/services"
            className="px-4 py-2 sm:px-5 sm:py-3 rounded-xl border border-white/80 text-white hover:bg-white hover:text-black transition text-sm sm:text-base"
          >
            Explore services
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 sm:px-5 sm:py-3 rounded-xl border border-white/80 text-white hover:bg-white hover:text-black transition text-sm sm:text-base"
          >
            Book a consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
