import Link from "next/link";
import PageHeroVideo from "@/components/PageHeroVideo";
import FloatingLogo from "@/components/FloatingLogo";

const highlights = [
  {
    title: "Bottleneck discovery",
    detail: "Synthetic load, soak, and chaos tests mapped how eligibility calculations, payment adjudication, and document generation behaved under load surges.",
  },
  {
    title: "Observability everywhere",
    detail: "We wired application tracing, infra telemetry, and business KPIs into a single command center so executives could see user impact in real time.",
  },
  {
    title: "Actionable playbooks",
    detail: "Capacity runbooks, cost-rightsizing guidance, and compliance-ready documentation ensured the state partner could sustain improvements long term.",
  },
];

export default function MedicaidOptimizationCaseStudy() {
  return (
    <main>
      <FloatingLogo />

      <PageHeroVideo
        folder="case_studies/medicaid_optimization"
        title="Medicaid Optimization Program"
        subtitle="Load testing, telemetry, and automation that lifted throughput 70% while reducing infrastructure spend 30%."
      />

      <section className="container mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 space-y-10 text-gray-200">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#37CC97]/80">Challenge</p>
            <h1 className="text-3xl font-semibold text-white">Keeping Medicaid access reliable during surge season</h1>
            <p className="text-gray-300">
              The state partner’s eligibility and payment platform served hundreds of thousands of residents, infrastructure migrations exposed brittle infrastructure and manual release practices. The result: slow determinations, frustrated constituents, and expensive war rooms.
            </p>
            <p className="text-gray-300">
              We delivered a cross-functional tiger team to model realistic traffic, uncover cascading performance issues, and automate remediation so the program could scale confidently.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 space-y-4">
            <h2 className="text-xl font-semibold text-white">Impact snapshot</h2>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><strong className="text-white">70% throughput lift</strong> on the most critical workflows.</li>
              <li><strong className="text-white">30% infrastructure savings</strong> by right-sizing compute and storage tiers.</li>
              <li><strong className="text-white">Zero priority-one incidents</strong> during the subsequent enrollment period.</li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-[#37CC97] px-5 py-3 font-semibold text-black hover:bg-[#2ea77c]"
            >
              Explore similar engagement
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-[#37CC97]/80">{item.title}</p>
              <p className="text-sm text-gray-300">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-white">What we delivered</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Performance lab with automated load/stress tests mapped directly to service-level objectives.</li>
            <li>Golden signals and KPIs pushed into a single pane of glass for business + engineering leadership.</li>
            <li>Modules to scale horizontally and rollback safely.</li>
            <li>Runbooks and tabletop exercises that trained engineering teams on capacity management best practices.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
