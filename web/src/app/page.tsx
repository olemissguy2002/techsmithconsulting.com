import HeroVideo from "@/components/HeroVideo";
import FloatingLogo from "@/components/FloatingLogo";

export const metadata = {
  title: "Home | Daryl Smith Consulting",
  description: "AI, Cloud, DevSecOps, and automation consulting that delivers secure, modern solutions for regulated and growth-focused teams.",
};

export default function HomePage() {
  return (
    <main>
      <h1 className="sr-only">Affordable AI, Cloud, Automation & DevSecOps Consulting</h1>
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
