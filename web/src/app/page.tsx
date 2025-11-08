import HeroVideo from "@/components/HeroVideo";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* Floating logo & tagline (fixed + clickable) */}
      <Link
        href="/"
        aria-label="Go to home"
        className="group fixed top-4 md:top-6 left-4 md:left-6 z-[60] flex items-center gap-4 opacity-100 hover:opacity-70 transition-opacity duration-500 pointer-events-auto"
      >
        <Image
          src="/FullLogoTransparent.png"
          alt="TechSmith Consulting logo"
          width={800}
          height={320}
          className="w-auto h-48 object-contain"
          priority
        />
        <span
          className="text-lg md:text-xl font-semibold tracking-wide"
          style={{ color: "#37CC97" }}
        >
          Forging the Future
        </span>
      </Link>

      <HeroVideo />

      <section className="container py-20 space-y-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight"></h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto"></p>
      </section>
    </main>
  );
}
