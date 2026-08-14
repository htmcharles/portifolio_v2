import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Websites and product interfaces",
    description:
      "Marketing sites and product UIs with clear structure, responsive layouts, and a path to launch.",
    bullets: ["Next.js / React", "Responsive UI", "SEO-ready pages"],
    href: "/projects",
  },
  {
    title: "Full-stack systems",
    description:
      "Applications and workflows for bookings, submissions, internal tools, and APIs with a maintainable backend.",
    bullets: ["APIs", "Databases", "Java / Node.js"],
    href: "/projects",
  },
  {
    title: "DevOps, security, and applied engineering",
    description:
      "RCA coverage across DevOps, cybersecurity, AI/ML, embedded systems, and testing — scoped to the problem you actually have.",
    bullets: ["Linux / Python", "ThinkCyber training", "Testing & QA"],
    href: "/certificates",
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-[#7A3B3B] uppercase dark:text-[#A85C5C]">
            What I Build
          </p>
          <h2 className="mt-4 text-balance text-3xl font-light leading-tight text-foreground md:text-5xl">
            Hire for a track, not a generic title.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            I take freelance projects and full-time roles. Start from the kind of work you need; we scope the rest on a call.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="group rounded-[1.75rem] border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl md:p-8 dark:bg-card/95">
              <div className="inline-flex rounded-full bg-muted px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-[#7A3B3B] uppercase dark:text-[#A85C5C]">
                Offer
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-foreground">{service.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.bullets.map((bullet) => (
                  <span key={bullet} className="rounded-full bg-background px-3 py-1 text-xs font-medium text-foreground ring-1 ring-border dark:bg-background/60">
                    {bullet}
                  </span>
                ))}
              </div>

              <Link
                href={service.href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-[#7A3B3B] dark:group-hover:text-[#A85C5C]"
              >
                See related work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
