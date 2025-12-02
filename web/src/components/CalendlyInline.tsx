"use client";

interface CalendlyInlineProps {
  url: string;
  minWidth?: number;
  height?: number;
}

const CALENDLY_SCRIPT_SRC = "https://calendly.com/daryl-smith-consulting/30min";

export default function CalendlyInline({
  url,
  minWidth = 320,
  height = 700,
}: CalendlyInlineProps) {
  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth: `${minWidth}px`, height }}
      />
      <script type="text/javascript" src={CALENDLY_SCRIPT_SRC} async />
    </>
  );
}
