import Image from "next/image";
import Link from "next/link";
import PageHeroVideo from "@/components/PageHeroVideo";

export default function ServicesPage() {
  const services = [
    {
      title: "Custom AI/ML",
      bullets: [
        "Security-first strategy with data privacy baked in",
        "Expert systems trained on your data",
        "Automate manual tasks, enhance decision-making, surface insights",
      ],
    },
    {
      title: "Cloud Migration, Hosting & Optimization",
      bullets: [
        "Cost controls and governance",
        "Observability (logs, metrics, traces)",
        "Completely outsourced cloud operations available",
      ],
    },
    {
      title: "Automation",
      bullets: [
        "Assessment & roadmap for DevSecOps maturity",
        "Steamline your workflows",
        "Enable one button deploys with confidence",
      ],
    },
  ];

  return (
    <main>
      {/* Floating logo & tagline (fixed + clickable) */}
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
        folder="services"
        title="Services"
        subtitle="AI/ML • Cloud • Automation — delivered with discipline and speed."
        fullScreen={false}
      />

      <section className="container mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 text-gray-200">
        <div className="space-y-10">
          <h1 className="text-3xl font-semibold text-white">What We Offer</h1>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-3 hover:border-[#37CC97] transition-colors"
              >
                <h2 className="text-xl font-semibold text-white">{s.title}</h2>
                <ul className="list-disc pl-5 text-white space-y-1">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-[#37CC97] transition-colors">
            <h3 className="text-lg font-semibold text-white">How We Work</h3>
            <p className="text-gray-300 mt-2">
              Start with a focused assessment → prioritize gaps →
              implement a POC (Proof of Concept) for an early win. 
              Iterate, automate, and scale.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
