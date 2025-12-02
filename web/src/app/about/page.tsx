import Link from "next/link";
import PageHeroVideo from "@/components/PageHeroVideo";
import FloatingLogo from "@/components/FloatingLogo";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main>
      {/* Floating logo & tagline (fixed + clickable) */}
      <FloatingLogo />

      <PageHeroVideo
        folder="about"
        title="About"
        subtitle="Delivering secure, automated, and reliable solutions for complex programs."
        fullScreen={false}
      />

      <section className="container mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 text-gray-200">
        <div className="space-y-10">
          <h2 className="text-3xl font-semibold text-white">Who We Are</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-3 hover:border-[#37CC97] transition-colors">
              <h3 className="text-xl font-semibold text-white">Profile</h3>
              <p className="text-gray-300 leading-relaxed">
                With over <span className="text-white font-medium">20 years</span> in the tech industry,
                we have expertice in AI/ML, DevOps, DevSecOps, Configuration/Change Management, and Workload Automation. 
                We have experience in Healthcare, Government, Aerospace, and Defence Department sectors.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-3 hover:border-[#37CC97] transition-colors">
              <h3 className="text-xl font-semibold text-white">Toolkit</h3>
              <p className="text-gray-300 leading-relaxed">
                AWS, GitHub, CodeQL, SBOMs, Dependabot, Splunk, automated policy gates, and modern CI/CD.
                Governance that accelerates delivery rather than slowing it down.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-3 hover:border-[#37CC97] transition-colors">
              <h3 className="text-xl font-semibold text-white">Why Daryl Smith Consulting</h3>
              <p className="text-gray-300 leading-relaxed">
                We translate AI/ML, Cloud, and Automation principles into measurable outcomes—lowering risk, improving visibility,
                and boosting release velocity for mission-critical systems.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-[#37CC97] transition-colors">
            <h3 className="text-xl font-semibold text-white mb-4">Learn More</h3>
            <p className="text-gray-400 mb-4">
              Explore our services or connect directly to see how disciplined automation and modern security can
              move your organization forward.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/services"
                className="px-4 py-2 rounded-lg border border-white/20 text-white hover:text-[#37CC97] hover:border-[#37CC97] transition-colors text-sm"
              >
                Explore Services
              </a>
              <a
                href="/contact"
                className="px-4 py-2 rounded-lg border border-white/20 text-white hover:text-[#37CC97] hover:border-[#37CC97] transition-colors text-sm"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
