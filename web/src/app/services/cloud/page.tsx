import Image from "next/image";
import Link from "next/link";
import PageHeroVideo from "@/components/PageHeroVideo";

const focusAreas = [
  {
    title: "Landing zones & migrations",
    detail: "Blueprint secure AWS/Azure/GCP foundations, then move workloads with automated guardrails and FinOps visibility.",
  },
  {
    title: "Platform engineering",
    detail: "Developer platforms with golden paths, Kubernetes/operator automation, and built-in policy compliance.",
  },
  {
    title: "SRE & operations",
    detail: "24/7 observability, incident playbooks, chaos drills, and performance tuning to keep critical missions online.",
  },
];

export default function CloudServicesPage() {
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
        folder="services/cloud"
        title="Cloud & Platform Services"
        subtitle="Modernize, migrate, and operate with confidence—balancing speed, resiliency, and compliance."
      />

      <section className="container mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 space-y-10 text-gray-200">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#37CC97]/80">Mission-ready cloud</p>
            <h1 className="text-3xl font-semibold text-white">From assessment to always-on operations</h1>
            <p className="text-gray-300">
              We have led large-scale migrations for public sector, aerospace, and commercial teams that can’t afford downtime. Our approach blends automation, documentation, and hands-on enablement so your teams inherit a platform they can trust.
            </p>
            <p className="text-gray-300">
              Engagements can be structured as fixed-scope projects, embedded squads, or managed services to cover day-two operations.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 space-y-4">
            <h2 className="text-xl font-semibold text-white">Where we focus</h2>
            <div className="space-y-4">
              {focusAreas.map((area) => (
                <div key={area.title}>
                  <p className="text-sm font-semibold text-white">{area.title}</p>
                  <p className="text-sm text-gray-300">{area.detail}</p>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-[#37CC97] px-5 py-3 font-semibold text-black hover:bg-[#2ea77c]"
            >
              Plan a cloud review
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-white">Example deliverables</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Cloud economic models, capacity forecasts, and cost-optimization backlogs.</li>
            <li>IaC modules (Terraform/CDK) with automated policy checks and drift detection.</li>
            <li>Observability stack spanning logs, metrics, traces, and user experience monitoring.</li>
            <li>Incident response playbooks, chaos engineering drills, and training workshops.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
