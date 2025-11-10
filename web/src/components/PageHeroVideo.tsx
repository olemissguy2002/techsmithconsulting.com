// web/src/components/PageHeroVideo.tsx
"use client";

import { useEffect, useRef } from "react";

type Props = {
  folder: string;                    // e.g. "services"
  title: string;                     // heading text
  subtitle?: string;                 // optional subheading
  fullScreen?: boolean;              // true = min-h-screen, false = ~70vh
};

export default function PageHeroVideo({
  folder,
  title,
  subtitle,
  fullScreen = false,
}: Props) {
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

  const encodePath = (value: string) =>
    value
      .split("/")
      .map((segment) => encodeURIComponent(segment.trim()))
      .join("/");

  const base = `/videos/${encodePath(folder)}`;

  return (
    <section
      className={[
        "relative isolate flex items-center justify-center text-center overflow-hidden",
        fullScreen ? "min-h-screen" : "min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh]",
      ].join(" ")}
    >
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        loop
        muted
        playsInline
        preload="metadata"
        poster={`${base}/hero_poster.jpg`}
      >
        <source src={`${base}/hero_mobile.mp4`} type="video/mp4" media="(max-width: 640px)" />
        <source src={`${base}/hero.mp4`} type="video/mp4" />
      </video>

      {/* Readability overlays */}
      <div className="absolute inset-0 bg-black/40 sm:bg-black/35 md:bg-black/30" />
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-28 bg-gradient-to-b from-transparent to-black" />

      {/* Centered content */}
      <div className="relative z-10 max-w-4xl px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-md leading-tight sm:leading-tight md:leading-[1.1] mb-4 sm:mb-5 md:mb-6">
          {title}
        </h1>

        {subtitle && (
          <p className="text-base sm:text-lg md:text-xl text-gray-200 drop-shadow max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
