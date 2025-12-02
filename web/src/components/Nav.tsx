// web/src/components/Nav.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // subtle shadow on scroll (optional)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 bg-black text-white border-b border-white/10",
        scrolled ? "shadow-[0_2px_10px_rgba(0,0,0,0.35)]" : "",
      ].join(" ")}
    >
      <nav className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="flex w-full items-center justify-end py-0">
          {/* Desktop links (right-justified) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-7">
            <Link href="/" className="text-sm lg:text-base text-white hover:text-[#37CC97] transition">
              Home
            </Link>
            <Link href="/services" className="text-sm lg:text-base text-white hover:text-[#37CC97] transition">
              Services
            </Link>
            <Link href="/case-studies" className="text-sm lg:text-base text-white hover:text-[#37CC97] transition">
              Case Studies
            </Link>
            {/* <Link href="/ai-portfolio" className="text-sm lg:text-base text-white hover:text-[#37CC97] transition">
              AI Portfolio
            </Link> */}
            <Link href="/about" className="text-sm lg:text-base text-white hover:text-[#37CC97] transition">
              About
            </Link>
            <Link href="/contact" className="text-sm lg:text-base text-white hover:text-[#37CC97] transition">
              Contact
            </Link>
          </div>

          {/* Mobile menu button (right) */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#37CC97]/60"
          >
            {/* simple hamburger / close */}
            <span className="relative block h-5 w-6">
              <span
                className={[
                  "absolute left-0 top-0 h-0.5 w-full bg-white transition-transform",
                  open ? "translate-y-2.5 rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-2.5 h-0.5 w-full bg-white transition-opacity",
                  open ? "opacity-0" : "opacity-100",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 bottom-0 h-0.5 w-full bg-white transition-transform",
                  open ? "-translate-y-2.5 -rotate-45" : "",
                ].join(" ")}
              />
            </span>
          </button>
        </div>

        {/* Mobile panel (right-aligned) */}
        {open && (
          <div className="md:hidden">
            <div className="mt-2 mb-3 flex flex-col items-end gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <Link
                href="/"
                className="text-base text-white hover:text-[#37CC97] transition"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-base text-white hover:text-[#37CC97] transition"
                onClick={() => setOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/case-studies"
                className="text-base text-white hover:text-[#37CC97] transition"
                onClick={() => setOpen(false)}
              >
                Case Studies
              </Link>
              {/* <Link
                href="/ai-portfolio"
                className="text-base text-white hover:text-[#37CC97] transition"
                onClick={() => setOpen(false)}
              >
                AI Portfolio
              </Link> */}
              <Link
                href="/about"
                className="text-base text-white hover:text-[#37CC97] transition"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-base text-white hover:text-[#37CC97] transition"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
