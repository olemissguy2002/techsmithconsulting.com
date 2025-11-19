import HeroVideo from "@/components/HeroVideo";
import FloatingLogo from "@/components/FloatingLogo";

export default function HomePage() {
  return (
    <main>
      {/* Floating logo & tagline (fixed + clickable) */}
      <FloatingLogo />

      <HeroVideo />

      <section className="container py-20 space-y-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight"></h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto"></p>
      </section>
    </main>
  );
}
