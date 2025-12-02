"use client";

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
  return (
    <div
      className="flex flex-col items-center justify-center gap-3 text-center"
      style={{ minWidth: `${minWidth}px`, minHeight: height }}
    >
      <p className="text-sm text-gray-400">
        Scheduling is currently handled through Calendly. Use the link below to pick a time.
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white hover:border-[#37CC97] hover:bg-[#37CC97]/10 transition-colors"
      >
        Book a 30-minute consultation
      </a>
    </div>
  );
}
