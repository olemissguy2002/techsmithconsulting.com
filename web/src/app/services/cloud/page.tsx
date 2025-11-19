import Link from "next/link";
import PageHeroVideo from "@/components/PageHeroVideo";
import FloatingLogo from "@/components/FloatingLogo";

type CloudSection = {
  heading?: string;
  bullets: string[];
};

type CloudCategory = {
  title: string;
  sections: CloudSection[];
};

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

const cloudOfferings: CloudCategory[] = [
  {
    title: "Strategy & Readiness",
    sections: [
      {
        heading: "Cloud business cases",
        bullets: [
          "Total cost models, savings projections, and ROI narratives.",
          "Roadmaps that sequence quick wins, migrations, and modernization.",
          "Executive-ready materials for approvals and funding cycles.",
        ],
      },
      {
        heading: "Landing zone assessments",
        bullets: [
          "Scorecards for identity, networking, logging, and compliance.",
          "Gap remediation plans with prioritized control implementation.",
          "Reference architectures tailored to regulated workloads.",
        ],
      },
    ],
  },
  {
    title: "Migration & Modernization",
    sections: [
      {
        heading: "App & data migrations",
        bullets: [
          "Portfolio rationalization and wave planning.",
          "Refactor vs. rehost playbooks with automation pipelines.",
          "Data estate migrations (warehouses, lakes, analytics).",
        ],
      },
      {
        heading: "Legacy modernization",
        bullets: [
          "Containerization, serverless rewrites, and event-driven patterns.",
          "Strangler patterns with blue/green and canary deployment strategies.",
          "Mainframe or ERP integration via APIs and managed services.",
        ],
      },
    ],
  },
  {
    title: "Platform Engineering",
    sections: [
      {
        heading: "Developer experience",
        bullets: [
          "Golden paths with scaffolding CLIs and automated guardrails.",
          "Internal developer portals with service catalogs and scorecards.",
          "Self-service environment provisioning with policy-as-code.",
        ],
      },
      {
        heading: "Infrastructure automation",
        bullets: [
          "Terraform/CDK libraries with versioning and testing.",
          "GitOps pipelines (Argo, Flux) and deployment choreographies.",
          "Reusable patterns for data, ML, and integration workloads.",
        ],
      },
    ],
  },
  {
    title: "Operations & Reliability",
    sections: [
      {
        heading: "SRE enablement",
        bullets: [
          "SLI/SLO design and error-budget policies.",
          "Observability platforms covering logs, metrics, traces, and RUM.",
          "Incident command training, tabletop exercises, and chaos testing.",
        ],
      },
      {
        heading: "Managed operations",
        bullets: [
          "24/7 runbooks for patching, scaling, and backup validation.",
          "Cost, performance, and capacity reviews with actionable backlogs.",
          "On-call augmentation with automated escalation workflows.",
        ],
      },
    ],
  },
  {
    title: "Security & Compliance",
    sections: [
      {
        heading: "Governance & controls",
        bullets: [
          "Identity, network, and data-control baselines mapped to frameworks.",
          "Policy-as-code enforcement plus drift alerting.",
          "Audit evidence automation for FedRAMP, HIPAA, CJIS, and more.",
        ],
      },
      {
        heading: "Threat detection",
        bullets: [
          "Cloud-native SIEM tuning and runbooks.",
          "Automated incident response for key workloads.",
          "Vulnerability management tied to risk scoring and patch SLAs.",
        ],
      },
    ],
  },
  {
    title: "FinOps & Optimization",
    sections: [
      {
        bullets: [
          "Unit-cost KPIs with tagging strategies and anomaly alerts.",
          "Reserved capacity and savings-plan optimization.",
          "Chargeback models, showback dashboards, and executive reporting.",
        ],
      },
    ],
  },
];

export default function CloudServicesPage() {
  return (
    <main>
      <FloatingLogo />

      <PageHeroVideo
        folder="services/cloud"
        title="Cloud & Platform Services"
        subtitle="Modernize, migrate, and operate with confidence—balancing speed, resiliency, and compliance."
      />

      <section className="container mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 space-y-10 text-gray-200">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-[#37CC97]/80">Offerings</p>
          <h2 className="text-3xl font-semibold text-white">Cloud programs we run end-to-end</h2>
          <ol className="list-decimal pl-6 text-gray-300 space-y-6">
            {cloudOfferings.map((category) => (
              <li key={category.title} className="space-y-2">
                <p className="text-xl font-semibold text-white">{category.title}</p>
                <div className="space-y-3">
                  {category.sections.map((section, idx) => (
                    <div key={`${category.title}-${section.heading ?? idx}`} className="space-y-1">
                      {section.heading && <p className="font-semibold text-white">{section.heading}</p>}
                      <ul className="list-disc pl-6 space-y-1">
                        {section.bullets.map((bullet) => (
                          <li key={`${category.title}-${section.heading ?? idx}-${bullet}`} className="text-gray-300">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>

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
