export default function HomePage() {
  return (
    <main className="container py-16">
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Ship faster. Sleep better.</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          TechSmith Consulting helps teams modernize delivery with AWS, DevSecOps, and pragmatic release management.
        </p>
        <div className="flex items-center justify-center gap-3">
          <a href="/services" className="px-5 py-3 rounded-xl border">Our Services</a>
          <a href="/contact" className="px-5 py-3 rounded-xl bg-black text-white">Talk to us</a>
        </div>
      </section>
    </main>
  )
}
