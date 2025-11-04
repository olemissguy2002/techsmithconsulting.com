export default function HomePage() {
  return (
    <main className="relative">
      {/* background layer */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-animated bg-noise absolute inset-0" />
      </div>

      <section className="container py-20 space-y-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Ship faster. Reduce risk. Prove compliance.
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We help healthcare and government teams modernize delivery on AWS with pragmatic DevSecOps and disciplined release management.
        </p>
        <div className="flex items-center justify-center gap-3">
          <a className="px-5 py-3 rounded-xl border hover:shadow-sm transition" href="/services">Explore services</a>
          <a className="px-5 py-3 rounded-xl bg-black text-white hover:opacity-90 transition" href="/contact">Book a 20-min consult</a>
        </div>
        <p className="text-sm text-gray-500">MS Medicaid • MITA • MMIS • Code Scanning • SBOM • FedRAMP context</p>
      </section>

      {/* feature cards, etc. ... (keep what you have) */}
    </main>
  );
}
