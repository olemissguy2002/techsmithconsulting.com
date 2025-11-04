export const metadata = { title: "Medicaid modernization" };

export default function MedicaidStudy() {
  return (
    <main className="container py-12 space-y-8">
      <h1 className="text-3xl font-semibold">Medicaid modernization</h1>
      <p className="text-gray-700 max-w-3xl">
        Release governance overhaul and DevSecOps enabling work across a multi-vendor program.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border p-5">
          <h2 className="font-medium">Industry</h2><p>State Medicaid</p>
        </div>
        <div className="rounded-2xl border p-5">
          <h2 className="font-medium">Duration</h2><p>9 months</p>
        </div>
        <div className="rounded-2xl border p-5">
          <h2 className="font-medium">Outcomes</h2><p>↓ lead time 30%, clear go/no-go criteria</p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Challenge</h2>
        <p className="text-gray-700">Fragmented releases, unclear gates, compliance friction.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Approach</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Standardized readiness checks (security, accessibility, rollback).</li>
          <li>Pipelines with SBOM and policy-as-code</li>
          <li>Weekly cadence with visible risks/blockers</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Results</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>30% faster lead time to prod</li>
          <li>Fewer late surprises; calmer cutovers</li>
          <li>Auditable path to compliance</li>
        </ul>
      </section>
    </main>
  );
}
