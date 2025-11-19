import PageHeroVideo from "@/components/PageHeroVideo";
import FloatingLogo from "@/components/FloatingLogo";
import Link from "next/link";

const projects = [
  {
    title: "Chatterbox TTS Studio",
    description:
      "Browser-based rapid prototyping for voice cloning experiments. Upload a reference sample, iterate on scripts, and generate shareable speech clips without exposing sensitive data.",
    link: "/tts",
    cta: "Launch TTS Studio",
    points: [
      "Session-isolated processing keeps experiments tidy",
      "Supports WAV prompt uploads for voice emulation",
      "Ideal for stakeholders to review tone and pacing",
    ],
  },
  {
    title: "Next AI Prototype",
    description:
      "We’re actively building additional accelerators for multi-agent workflows, retrieval augmented generation, and autonomy corner cases.",
    link: "/contact",
    cta: "Discuss roadmap",
    points: [
      "Data-protected GenAI copilots",
      "Domain-tuned RAG stacks",
      "Edge deployment options",
    ],
  },
];

export default function AiPortfolioPage() {
  return (
    <main>
      {/* Floating logo & tagline (consistent with other marketing pages) */}
      <FloatingLogo />

      <PageHeroVideo
        folder="AI Portfolio"
        title="AI Portfolio"
        subtitle="Live prototypes and proof-of-concept experiences demonstrating TechSmith Consulting’s applied AI capabilities."
      />

      <section className="container mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 space-y-10 text-gray-200">
        <div className="space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#37CC97]/80">Portfolio</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Explore our working AI accelerators
          </h1>
          <p className="text-base md:text-lg text-gray-300">
            Each artifact below represents a focused R&D investment to prove feasibility, de-risk a
            new workflow, or demonstrate value to stakeholders ahead of a production rollout.
            They’re intentionally lean, fast to iterate, and ready to tailor for your environment.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8 flex flex-col gap-4 hover:border-[#37CC97]/70 transition-colors"
            >
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
                <p className="text-sm uppercase tracking-[0.25em] text-[#37CC97]/70">Proof of Concept</p>
                <p className="text-base text-gray-300">{project.description}</p>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link
                href={project.link}
                className="inline-flex items-center justify-center rounded-2xl bg-[#37CC97] px-5 py-3 font-semibold text-black transition hover:bg-[#2ea77c]"
              >
                {project.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
