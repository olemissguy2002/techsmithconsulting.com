import Link from "next/link";
import PageHeroVideo from "@/components/PageHeroVideo";
import FloatingLogo from "@/components/FloatingLogo";

const serviceTiles = [
  {
    title: "AI & Machine Learning",
    summary: "Strategy, data readiness, and production-grade applied AI that respects governance from day one.",
    bullets: [
      "Responsible AI assessments & guardrail design",
      "Domain-tuned copilots, RAG, and agentic workflows",
      "Model observability, prompt management, and evals",
    ],
    href: "/services/ai",
  },
  {
    title: "Cloud & Platform",
    summary: "Landing zones, modernization, and SRE operations tailored for regulated teams.",
    bullets: [
      "Migrations with cost and compliance controls",
      "Kubernetes, serverless, and edge architectures",
      "24/7 observability, incident response, and FinOps",
    ],
    href: "/services/cloud",
  },
  {
    title: "Web Experience",
    summary: "High-performing marketing sites and web apps that weave brand, accessibility, and conversion.",
    bullets: [
      "Custom Next.js / React builds with CMS integrations",
      "Design systems, localization, and SEO baked in",
      "Secure hosting, analytics, and growth experiments",
    ],
    href: "/services/web",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Floating logo & tagline (fixed + clickable) */}
      <FloatingLogo />

      <PageHeroVideo
        folder="services"
        title="Services"
        subtitle="AI/ML • Cloud • Automation — delivered with discipline and speed."
        fullScreen={false}
      />

      <section className="container mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 text-gray-200">
        <div className="space-y-10">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-3xl font-semibold text-white">What We Offer</h1>
            <p className="text-gray-300">
              Whether you need an embedded tiger team or a turnkey outcome, every engagement pairs modern engineering discipline with executive-level accountability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceTiles.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-3 hover:border-[#37CC97] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#37CC97]/60"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#37CC97]/70">Service Line</p>
                  <h2 className="text-xl font-semibold text-white mt-2">{service.title}</h2>
                  <p className="text-sm text-gray-400 mt-1">{service.summary}</p>
                </div>
                <ul className="list-disc pl-5 text-white space-y-1">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <span className="inline-flex items-center text-sm font-semibold text-[#37CC97]">
                  Dive deeper →
                </span>
              </Link>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-[#37CC97] transition-colors">
            <h3 className="text-lg font-semibold text-white">How We Work</h3>
            <p className="text-gray-300 mt-2">
              Start with a focused assessment → prioritize gaps → implement a POC (Proof of Concept) for an early win.
              Iterate, automate, and scale while keeping stakeholders informed at every checkpoint.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
