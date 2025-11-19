import Link from "next/link";
import PageHeroVideo from "@/components/PageHeroVideo";
import FloatingLogo from "@/components/FloatingLogo";

const capabilities = [
  "Brand workshops, UX research, and component-driven design systems",
  "Custom Next.js / React builds with CMS or headless commerce integrations",
  "Performance, SEO, and accessibility baked into every release",
  "Marketing automation, analytics, and experimentation frameworks",
  "Managed hosting, incident response, and lifecycle support",
];

const webOfferings = [
  {
    title: "Strategy & Research",
    sections: [
      {
        heading: "Discovery intensives",
        bullets: [
          "Stakeholder interviews, audience definition, and journey mapping.",
          "Brand, content, and analytics audits to find gaps and quick wins.",
          "Measurement frameworks that tie launches to pipeline or revenue.",
        ],
      },
      {
        heading: "Content strategy",
        bullets: [
          "Messaging architecture, tone guidance, and editorial calendars.",
          "Information architecture and sitemap planning for scale.",
          "Asset inventories and migration plans from legacy sites.",
        ],
      },
    ],
  },
  {
    title: "Experience Design",
    sections: [
      {
        heading: "UX & UI systems",
        bullets: [
          "Wireframes through polished Figma systems with tokens.",
          "Component libraries with responsive, accessible patterns.",
          "Design QA checklists that pair with engineering acceptance tests.",
        ],
      },
      {
        heading: "Content & media",
        bullets: [
          "On-brand landing pages, case studies, and campaign kits.",
          "Motion guidelines, micro-interactions, and animation specs.",
          "AI-assisted asset production with human editorial review.",
        ],
      },
    ],
  },
  {
    title: "Engineering & Integrations",
    sections: [
      {
        heading: "Frontend builds",
        bullets: [
          "Next.js/React apps with edge rendering, ISR, or static export.",
          "Design-system driven builds that map 1:1 to Figma tokens.",
          "Automated testing suites (Playwright, Cypress, Lighthouse).",
        ],
      },
      {
        heading: "CMS & data",
        bullets: [
          "Headless CMS integrations (Sanity, Contentful, Strapi, WordPress).",
          "Commerce and membership flows with Shopify, Stripe, or custom APIs.",
          "First-party data capture, consent management, and CDP feeds.",
        ],
      },
    ],
  },
  {
    title: "Growth & Optimization",
    sections: [
      {
        heading: "Performance & SEO",
        bullets: [
          "Core Web Vitals budgets and regression alerts.",
          "Structured data, accessibility sweeps, and localization support.",
          "Technical SEO fixes for redirects, schema, and crawl health.",
        ],
      },
      {
        heading: "Experimentation",
        bullets: [
          "A/B and multivariate testing frameworks with analytics handoff.",
          "Attribution dashboards tying campaigns to conversions.",
          "Marketing automation (HubSpot, Marketo, Iterable) integrations.",
        ],
      },
    ],
  },
  {
    title: "Operations & Support",
    sections: [
      {
        heading: "Managed experience",
        bullets: [
          "Hosting, CDN, and observability tuned for high-traffic launches.",
          "Incident response playbooks plus on-call escalation.",
          "DORA-style release metrics and governance boards.",
        ],
      },
      {
        heading: "Enablement",
        bullets: [
          "Editor training, CMS documentation, and office hours.",
          "Design and engineering pairing for internal teams.",
          "Retainers for backlog grooming, enhancements, and experiments.",
        ],
      },
    ],
  },
];

export default function WebServicesPage() {
  return (
    <main>
      <FloatingLogo />

      <PageHeroVideo
        folder="services/web"
        title="Web Experience Services"
        subtitle="Purpose-built sites and apps that blend storytelling, performance, and measurable growth."
      />

      <section className="container mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 space-y-10 text-gray-200">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-[#37CC97]/80">Offerings</p>
          <h2 className="text-3xl font-semibold text-white">Web programs we architect and operate</h2>
          <ol className="list-decimal pl-6 text-gray-300 space-y-6">
            {webOfferings.map((category) => (
              <li key={category.title} className="space-y-2">
                <p className="text-xl font-semibold text-white">{category.title}</p>
                <div className="space-y-3">
                  {category.sections.map((section) => (
                    <div key={`${category.title}-${section.heading}`} className="space-y-1">
                      <p className="font-semibold text-white">{section.heading}</p>
                      <ul className="list-disc pl-6 space-y-1">
                        {section.bullets.map((bullet) => (
                          <li key={`${category.title}-${section.heading}-${bullet}`} className="text-gray-300">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#37CC97]/80">Experience matters</p>
            <h1 className="text-3xl font-semibold text-white">From brand vision to high-performing builds</h1>
            <p className="text-gray-300">
              We partner with founders and marketing teams to craft websites that communicate clearly and convert. Our team spans strategy, UX, design, and engineering so you get a single accountable partner from concept through launch.
            </p>
            <p className="text-gray-300">
              Need to evolve quickly? We build design systems and component libraries that keep future iterations fast and consistent.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 space-y-4">
            <h2 className="text-xl font-semibold text-white">What’s included</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              {capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-[#37CC97] px-5 py-3 font-semibold text-black hover:bg-[#2ea77c]"
            >
              Plan your next launch
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-white">Delivery playbook</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Discovery sessions, brand audits, and content strategy alignment.</li>
            <li>Wireframes → high-fidelity design → componentized implementation.</li>
            <li>Automated testing, performance budgets, and accessibility verification.</li>
            <li>Handoff documentation or ongoing retainers for optimizations and operations.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
