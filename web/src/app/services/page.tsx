export default function ServicesPage() {
  const services = [
    {
      title: "DevSecOps Enablement",
      bullets: [
        "CI/CD hardening: CodeQL, Dependabot, secret scanning",
        "SBOM + policy gates (break-glass paths defined)",
        "Golden paths and developer self-service",
      ],
    },
    {
      title: "Release Management",
      bullets: [
        "Cadence & risk-based approvals",
        "Readiness dashboard (envs, risks, blockers)",
        "Runbooks, checklists, incident learnings → standards",
      ],
    },
    {
      title: "Cloud Migrations (AWS)",
      bullets: [
        "Assessment and landing zone guidance",
        "Observability (logs, metrics, traces) day-one",
        "Cost/controls baked in (tags, budgets, guardrails)",
      ],
    },
  ];
  return (
    <main className="container py-12 space-y-10">
      <h1 className="text-3xl font-semibold">Services</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border p-6 space-y-3">
            <h2 className="text-xl font-medium">{s.title}</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {s.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border p-6">
        <h3 className="text-lg font-semibold">How we work</h3>
        <p className="text-gray-700 mt-2">
          Start with a 2-week assessment → prioritize gaps → implement the smallest change with the biggest safety win.
        </p>
      </div>
    </main>
  );
}
