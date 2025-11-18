"use client";

import { useEffect, useRef } from "react";

interface CalendlyInlineProps {
  url: string;
  minWidth?: number;
  height?: number;
}

export default function CalendlyInline({
  url,
  minWidth = 320,
  height = 700,
}: CalendlyInlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let canceled = false;

    const initWidget = () => {
      if (canceled || !containerRef.current) return;
      const Calendly = (window as typeof window & { Calendly?: { initInlineWidget?: (opts: { url: string; parentElement: HTMLElement }) => void } }).Calendly;
      Calendly?.initInlineWidget?.({
        url,
        parentElement: containerRef.current,
      });
    };

    // If Calendly script already loaded (e.g., due to client-side navigation), init immediately.
    if (typeof window !== "undefined" && (window as any).Calendly) {
      initWidget();
      return () => {
        canceled = true;
      };
    }

    // Otherwise, inject script and init on load.
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => initWidget();
    document.body.appendChild(script);

    return () => {
      canceled = true;
      script.onload = null;
    };
  }, [url]);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget"
      style={{ minWidth: `${minWidth}px`, height }}
      data-url={url}
    />
  );
}
