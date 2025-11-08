import Image from "next/image";
import Link from "next/link";
import PageHeroVideo from "@/components/PageHeroVideo";

export default function CaseStudiesPage() {
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
        folder="case_studies"
        title="Case Studies"
        subtitle="Selected engagements and measurable outcomes from past client projects."
        fullScreen={false}
      />

      <section className="container mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 text-gray-200">
        <div className="space-y-10">
          <h2 className="text-3xl font-semibold text-white mb-4">Our Work</h2>
          <p className="text-gray-300 max-w-3xl">
            These case studies highlight where disciplined DevSecOps, secure automation, and AI-driven insights 
            produced measurable results.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-[#37CC97] transition-colors space-y-3">
              <h3 className="text-xl font-semibold text-white">Medicaid Optumization</h3>
              <ul className="list-disc pl-5 text-white space-y-1">
                <li>Designed and implemented robust load and stress testing.</li>
                <li>Implemented deep dive analysis along with monitoring of stress/load testing.</li>
                <li>Achieved a <strong className="text-[#37CC97]">70% increase</strong> in performance.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-[#37CC97] transition-colors space-y-3">
              <h3 className="text-xl font-semibold text-white">DEA CI/CD and Security Hardening</h3>
              <ul className="list-disc pl-5 text-white space-y-1">
                <li>Implemented DevSecOps for software development platform.</li>
                <li>Integrated policy gates into CI/CD pipelines.</li>
                <li>Reduced deployment risk while maintaining velocity.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-[#37CC97] transition-colors space-y-3">
              <h3 className="text-xl font-semibold text-white">NASA Content Delivery System</h3>
              <ul className="list-disc pl-5 text-white space-y-1">
                <li>Designed and implemented distibuted system.</li>
                <li>Established repeatable release governance.</li>
                <li>Developed and implemented 3D gaming inspired geo-referencing exercises.</li>
              </ul>
            </div>
          </div>

          {/* Placeholder for future child pages */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-[#37CC97] transition-colors">
            <h3 className="text-xl font-semibold text-white mb-4">Coming Soon</h3>
            <p className="text-gray-400 mb-4">
              Each case study will have its own page with deeper technical and business details.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#"
                className="px-4 py-2 rounded-lg border border-white/20 text-white hover:text-[#37CC97] hover:border-[#37CC97] transition-colors text-sm"
              >
                View All Case Studies
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-lg border border-white/20 text-white hover:text-[#37CC97] hover:border-[#37CC97] transition-colors text-sm"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
