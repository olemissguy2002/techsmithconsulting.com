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
  const initializedRef = useRef(false);

  useEffect(() => {
    let canceled = false;

    const initWidget = () => {
      if (canceled || !containerRef.current || initializedRef.current) return;
      const Calendly = (window as typeof window & { Calendly?: { initInlineWidget?: (opts: { url: string; parentElement: HTMLElement }) => void } }).Calendly;
      Calendly?.initInlineWidget?.({
        url,
        parentElement: containerRef.current,
      });
      initializedRef.current = true;
    };

    // If Calendly script already loaded (e.g., due to client-side navigation), init immediately.
    if (typeof window !== "undefined" && (window as any).Calendly) {
      initWidget();
      return () => {
        canceled = true;
        initializedRef.current = false;
        if (containerRef.current) containerRef.current.innerHTML = "";
      };
    }

    // Otherwise, inject script and init on load.
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]') as HTMLScriptElement | null;
    const script = existingScript ?? document.createElement("script");
    if (!existingScript) {
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
    if (script.onload === null) {
      script.onload = () => initWidget();
    } else {
      // If the script already loaded earlier, initialize immediately.
      if ((window as any).Calendly) initWidget();
    }

    return () => {
      canceled = true;
      initializedRef.current = false;
      if (containerRef.current) containerRef.current.innerHTML = "";
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
