import Link from "next/link";
import PageHeroVideo from "@/components/PageHeroVideo";
import FloatingLogo from "@/components/FloatingLogo";

const pillars = [
  {
    title: "Policy-as-code",
    detail: "DoD/DHS baseline controls encoded as reusable checks that run automatically within pipelines and runtime clusters.",
  },
  {
    title: "Secure supply chain",
    detail: "SBOM generation, signing, and artifact provenance tracked across build stages to meet FedRAMP+ expectations.",
  },
  {
    title: "Mission-ready delivery",
    detail: "Release trains coordinated with field offices so investigative tooling shipped predictably without downtime.",
  },
];

export default function DeaCaseStudyPage() {
  return (
    <main>
      <FloatingLogo />

      <PageHeroVideo
        folder="case_studies/dea"
        title="DEA CI/CD & Security Hardening"
        subtitle="DevSecOps platform that fused zero-trust governance with rapid delivery for investigative workloads."
      />

      <section className="container mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 space-y-10 text-gray-200">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#37CC97]/80">Mission</p>
            <h1 className="text-3xl font-semibold text-white">Modern tooling with uncompromising security</h1>
            <p className="text-gray-300">
              The DEA’s investigative teams rely on specialized software to coordinate field operations. Legacy delivery processes slowed feature velocity and made it hard to prove compliance across agencies.
            </p>
            <p className="text-gray-300">
              We partnered with in-house engineers to implement a hardened DevSecOps platform—introducing automated governance, safer releases, and dashboards that satisfied both cyber and mission leadership.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 space-y-4">
            <h2 className="text-xl font-semibold text-white">Impact snapshot</h2>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><strong className="text-white">40% faster release cadence</strong> with no critical findings in ATO reviews.</li>
              <li><strong className="text-white">Automated gates</strong> blocked misconfigured infrastructure before it reached production.</li>
              <li><strong className="text-white">Shared observability</strong> connected cyber teams and mission owners via one dashboard.</li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-[#37CC97] px-5 py-3 font-semibold text-black hover:bg-[#2ea77c]"
            >
              Discuss secure delivery
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-[#37CC97]/80">{pillar.title}</p>
              <p className="text-sm text-gray-300">{pillar.detail}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-white">What we delivered</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Reusable IaC modules with STIG-compliant defaults.</li>
            <li>End-to-end CI/CD pipelines with SAST, DAST, dependency scanning, and policy-as-code stages.</li>
            <li>Centralized SBOM + artifact signing for every build.</li>
            <li>Playbooks aligning release trains with mission planning cycles.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
