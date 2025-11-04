"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const NavLinks = ({ vertical = false }: { vertical?: boolean }) => (
    <div className={(vertical ? "flex-col items-start" : "items-center") + " flex gap-6"}>
      <Link href="/services" className="text-sm text-gray-700 hover:text-black">Services</Link>
      <Link href="/case-studies" className="text-sm text-gray-700 hover:text-black">Case Studies</Link>
      <Link href="/about" className="text-sm text-gray-700 hover:text-black">About</Link>
      <Link
        href="/contact"
        className="text-sm px-3 py-1.5 rounded-lg bg-black text-white hover:opacity-90 transition"
      >
        Contact
      </Link>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b">
      <nav className="container flex h-14 items-center gap-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          {/* Swap the src once you add /public/logo.svg or .png */}
          <Image src="/logo.svg" alt="TechSmith Consulting" width={28} height={28} />
          <span className="hidden sm:inline">TechSmith Consulting</span>
        </Link>

        {/* Desktop links */}
        <div className="ml-auto hidden md:block">
          <NavLinks />
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          className="ml-auto md:hidden rounded-md border px-3 py-1.5"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-4">
            <NavLinks vertical />
          </div>
        </div>
      )}
    </header>
  );
}
