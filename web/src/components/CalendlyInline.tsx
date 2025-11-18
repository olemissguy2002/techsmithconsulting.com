"use client";

import { useEffect, useRef } from "react";

const CALENDLY_SRC = "https://assets.calendly.com/assets/external/widget.js";
let calendlyLoader: Promise<void> | null = null;

function loadCalendlyScript(): Promise<void> {
  if (calendlyLoader) return calendlyLoader;

  calendlyLoader = new Promise<void>((resolve) => {
    // Already loaded
    if (typeof window !== "undefined" && (window as any).Calendly) {
      resolve();
      return;
    }

    if (typeof document === "undefined") {
      resolve();
      return;
    }

    const existing = document.querySelector(`script[src="${CALENDLY_SRC}"]`) as HTMLScriptElement | null;
    const script = existing ?? document.createElement("script");

    const finish = () => resolve();

    if (!existing) {
      script.src = CALENDLY_SRC;
      script.async = true;
      script.addEventListener("load", finish, { once: true });
      document.body.appendChild(script);
    } else if ((window as any).Calendly) {
      finish();
    } else {
      existing.addEventListener("load", finish, { once: true });
    }
  });

  return calendlyLoader;
}

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

    const init = async () => {
      await loadCalendlyScript();
      if (canceled || !containerRef.current) return;

      // Clear any existing injected markup before re-init.
      containerRef.current.innerHTML = "";
      const Calendly = (window as typeof window & { Calendly?: { initInlineWidget?: (opts: { url: string; parentElement: HTMLElement }) => void } }).Calendly;
      Calendly?.initInlineWidget?.({
        url,
        parentElement: containerRef.current,
      });
    };

    void init();

    return () => {
      canceled = true;
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, [url]);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-container"
      style={{ minWidth: `${minWidth}px`, height }}
    />
  );
}
