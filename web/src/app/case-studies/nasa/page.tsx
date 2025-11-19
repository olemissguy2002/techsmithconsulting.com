import Link from "next/link";
import PageHeroVideo from "@/components/PageHeroVideo";
import FloatingLogo from "@/components/FloatingLogo";

const tracks = [
  {
    title: "Global content mesh",
    detail: "Satellite, lab, and training data synchronized across multiple regions.",
  },
  {
    title: "Immersive training",
    detail: "3D gaming-inspired geo-referencing exercises helped students internalize mission-critical procedures.",
  },
  {
    title: "Governed releases",
    detail: "Repeatable change management playbooks aligned contractors, NASA stakeholders, and partner agencies.",
  },
];

export default function NasaCaseStudyPage() {
  return (
    <main>
      <FloatingLogo />

      <PageHeroVideo
        folder="case_studies/nasa"
        title="NASA Content Delivery System"
        subtitle="Distributed platform that moved science, telemetry, and immersive training media at mission speed."
      />

      <section className="container mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 space-y-10 text-gray-200">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#37CC97]/80">Exploration</p>
            <h1 className="text-3xl font-semibold text-white">Delivering mission data everywhere</h1>
            <p className="text-gray-300">
              NASA teams needed to stream telemetry, high-fidelity imagery, and interactive simulations to collaborators across the globe. We designed and implemented systems which could handle the blend of real-time feeds, archived assets, and immersive training modules.
            </p>
            <p className="text-gray-300">
              We engineered a distributed content delivery mesh with automated replication, data governance, and release controls so critical information reached students, scientists, and external partners without delay.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 space-y-4">
            <h2 className="text-xl font-semibold text-white">Impact snapshot</h2>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><strong className="text-white">99.95% availability</strong> across global data mirrors.</li>
              <li><strong className="text-white">Faster training cycles</strong> with immersive geo exercises.</li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-[#37CC97] px-5 py-3 font-semibold text-black hover:bg-[#2ea77c]"
            >
              Plan your platform
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tracks.map((track) => (
            <div key={track.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-[#37CC97]/80">{track.title}</p>
              <p className="text-sm text-gray-300">{track.detail}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-white">What we delivered</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Multi-region content delivery network tuned for mixed workloads (streaming + bulk transfer).</li>
            <li>Automated metadata tagging, retention enforcement, and partner-specific access controls.</li>
            <li>Interactive 3D geo-referenced training applications built with gaming engines.</li>
            <li>Release governance and readiness reviews aligned with NASA requirements.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
