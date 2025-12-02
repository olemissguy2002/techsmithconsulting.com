import Link from "next/link";
import PageHeroVideo from "@/components/PageHeroVideo";
import CalendlyInline from "@/components/CalendlyInline";
import FloatingLogo from "@/components/FloatingLogo";

export default function ContactPage() {
  return (
    <main>
      {/* Floating logo & tagline */}
      <FloatingLogo />

      <PageHeroVideo
        folder="contact"
        title="Contact"
        subtitle="Let's talk about AI, Cloud, DevSecOps, and Automation for your team."
        fullScreen={false}
      />

      <section className="container mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 text-gray-200">
        <div className="space-y-10">
          <h2 className="text-3xl font-semibold text-white">Get in touch</h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Left Column */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-[#37CC97] transition-colors">
              <h3 className="text-xl font-semibold text-white mb-4">
                Contact Details
              </h3>

              <div className="space-y-3">
                <p>
                  <span className="text-gray-400">Email: </span>
                  <a
                    className="underline hover:no-underline hover:text-[#37CC97] transition-colors"
                    href="mailto:sales@darylsmithconsulting.com"
                  >
                    sales@darylsmithconsulting.com
                  </a>
                </p>

                <p>
                  <span className="text-gray-400">Phone: </span>
                  <a
                    className="underline hover:no-underline hover:text-[#37CC97] transition-colors"
                    href="tel:+16015656970"
                  >
                    1+(601) 565-6970
                  </a>
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN — Calendly */}
            <div
              id="book"
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-[#37CC97] transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Request a Consultation
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Pick a 30-minute slot to talk AI assistants, cloud migration, or a tailored web build.
                You’ll get an invite with a call link automatically.
              </p>

              {/* Calendly Inline Widget */}
              <CalendlyInline
                url="https://calendly.com/d/ctgc-6mr-n53?background_color=1a1a1a&text_color=ffffff&primary_color=00ff4f"
                minWidth={320}
                height={700}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
