import Image from "next/image";
import Link from "next/link";
import PageHeroVideo from "@/components/PageHeroVideo";

const offerings = [
  "Responsible AI assessments, governance frameworks, and policy alignment",
  "Domain-tuned copilots, agents, and retrieval augmented generation (RAG)",
  "Data engineering pipelines, feature stores, and vector-ready storage",
  "Prompt operations: evaluation harnesses, benchmarking, and drift monitoring",
  "Secure deployment: private endpoints, on-prem acceleration, and access controls",
];

export default function AiServicesPage() {
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
        folder="services/ai"
        title="AI & Machine Learning Services"
        subtitle="Translate AI hype into measurable outcomes with disciplined data practices and production-ready delivery."
      />

      <section className="container mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 space-y-10 text-gray-200">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#37CC97]/80">Approach</p>
            <h1 className="text-3xl font-semibold text-white">AI that respects your data, users, and regulators</h1>
            <p className="text-gray-300">
              We guide organizations from ideation to production with a balanced focus on governance, human-centered design, and technical depth. Expect honest guidance about feasibility, total cost, and the change management required to land AI responsibly.
            </p>
            <p className="text-gray-300">
              Whether you need a lightweight proof of concept, an embedded enabling team, or a managed platform, we align model choice, infrastructure, and success metrics so you can defend ROI to leadership.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 space-y-4">
            <h2 className="text-xl font-semibold text-white">Signature services</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              {offerings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-[#37CC97] px-5 py-3 font-semibold text-black hover:bg-[#2ea77c]"
            >
              Schedule an AI workshop
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-white">Typical engagement flow</h2>
          <ol className="list-decimal pl-6 text-gray-300 space-y-2">
            <li>Discovery sprints to map processes, data maturity, and responsible AI requirements.</li>
            <li>Use-case prioritization with measurable success metrics and stakeholder alignment.</li>
            <li>Pilot build-out (copilot, automation, or insights) with rapid evaluation loops.</li>
            <li>Production hardening: monitoring, alerts, fallback experiences, and enablement.</li>
            <li>Operational runbooks and change management support to scale across teams.</li>
          </ol>
        </div>
      </section>
    </main>
  );
}
