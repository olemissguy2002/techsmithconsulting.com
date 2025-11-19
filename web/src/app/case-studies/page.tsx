import Link from "next/link";
import PageHeroVideo from "@/components/PageHeroVideo";
import FloatingLogo from "@/components/FloatingLogo";

const studies = [
  {
    title: "Medicaid Optimization Program",
    summary: "Scaled an eligibility and payment platform to handle seasonal surges without compromising accuracy.",
    bullets: [
      "Advanced load / soak testing paired with observability deep dives",
      "Automated regression harness to replay real-world traffic",
      "Achieved a 70% performance boost while cutting infra spend 30%",
    ],
    href: "/case-studies/medicaid_optimization",
  },
  {
    title: "DEA CI/CD & Security Hardening",
    summary: "Modernized releases for sensitive investigative workloads with policy-as-code and zero-trust guardrails.",
    bullets: [
      "Blended DevSecOps platform with STIG-based baselines",
      "Integrated policy gates into multi-stage pipelines",
      "Reduced deployment risk while maintaining velocity",
    ],
    href: "/case-studies/dea",
  },
  {
    title: "NASA Content Delivery System",
    summary: "Built a resilient data platform to move telemetry, science packets, and immersive training assets worldwide.",
    bullets: [
      "Designed distributed caching and replication",
      "Established repeatable release governance",
      "3D gamified geo-referencing exercises for students",
    ],
    href: "/case-studies/nasa",
  },
];

export default function CaseStudiesPage() {
  return (
    <main>
      {/* Floating logo & tagline (fixed + clickable) */}
      <FloatingLogo />

      <PageHeroVideo
        folder="case_studies"
        title="Case Studies"
        subtitle="Selected engagements and measurable outcomes from past client projects."
        fullScreen={false}
      />

      <section className="container mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 text-gray-200">
        <div className="space-y-10">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-3xl font-semibold text-white">Our Work</h2>
            <p className="text-gray-300">
              These case studies highlight where disciplined DevSecOps, secure automation, and AI-driven insights
              produced measurable results. Dive deeper into each engagement below.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {studies.map((study) => (
              <Link
                key={study.title}
                href={study.href}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-[#37CC97] transition-colors space-y-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#37CC97]/60"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#37CC97]/70">Case Study</p>
                  <h3 className="text-xl font-semibold text-white mt-2">{study.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">{study.summary}</p>
                </div>
                <ul className="list-disc pl-5 text-white space-y-1">
                  {study.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <span className="inline-flex items-center text-sm font-semibold text-[#37CC97]">
                  Read the full story →
                </span>
              </Link>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-[#37CC97] transition-colors">
            <h3 className="text-xl font-semibold text-white mb-4">Bring Your Mission Next</h3>
            <p className="text-gray-400 mb-4">
              Have a similarly complex program or modernization effort? We can tailor an on-site intensive, targeted assessment, or POC to accelerate value.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="px-4 py-2 rounded-lg border border-white/20 text-white hover:text-[#37CC97] hover:border-[#37CC97] transition-colors text-sm"
              >
                Start a Conversation
              </Link>
              <Link
                href="/services"
                className="px-4 py-2 rounded-lg border border-white/20 text-white hover:text-[#37CC97] hover:border-[#37CC97] transition-colors text-sm"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
