import Image from "next/image";
import Link from "next/link";
import PageHeroVideo from "@/components/PageHeroVideo";

const capabilities = [
  "Brand workshops, UX research, and component-driven design systems",
  "Custom Next.js / React builds with CMS or headless commerce integrations",
  "Performance, SEO, and accessibility baked into every release",
  "Marketing automation, analytics, and experimentation frameworks",
  "Managed hosting, incident response, and lifecycle support",
];

export default function WebServicesPage() {
  return (
    <main>
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

      <PageHeroVideo
        folder="services/web"
        title="Web & Experience Services"
        subtitle="Purpose-built sites and apps that blend storytelling, performance, and measurable growth."
      />

      <section className="container mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 space-y-10 text-gray-200">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#37CC97]/80">Experience matters</p>
            <h1 className="text-3xl font-semibold text-white">From brand vision to high-performing builds</h1>
            <p className="text-gray-300">
              We partner with founders and marketing teams to craft websites that communicate clearly and convert. Our team spans strategy, UX, design, and engineering so you get a single accountable partner from concept through launch.
            </p>
            <p className="text-gray-300">
              Need to evolve quickly? We build design systems and component libraries that keep future iterations fast and consistent.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 space-y-4">
            <h2 className="text-xl font-semibold text-white">What’s included</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              {capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-[#37CC97] px-5 py-3 font-semibold text-black hover:bg-[#2ea77c]"
            >
              Plan your next launch
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-white">Delivery playbook</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Discovery sessions, brand audits, and content strategy alignment.</li>
            <li>Wireframes → high-fidelity design → componentized implementation.</li>
            <li>Automated testing, performance budgets, and accessibility verification.</li>
            <li>Handoff documentation or ongoing retainers for optimizations and operations.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
