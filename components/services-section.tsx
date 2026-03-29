import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Marketing Sites That Convert",
    description:
      "Landing pages and company websites built to make brands look credible, explain offers clearly, and keep performance standards high.",
    bullets: ["Messaging hierarchy", "Responsive polish", "SEO-ready structure"],
    href: "/projects",
  },
  {
    title: "Interfaces for Real Products",
    description:
      "User-facing experiences for SaaS, healthcare, and internal tools where clarity, speed, and practical interaction design matter.",
    bullets: ["Component systems", "Product UX", "Scalable frontend architecture"],
    href: "/projects",
  },
  {
    title: "Backend and Workflow Systems",
    description:
      "Operational systems that support submissions, bookings, scheduling, and business logic with a more maintainable backend foundation.",
    bullets: ["APIs and persistence", "Workflow modeling", "System reliability"],
    href: "/experience",
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
            A broader portfolio needs clearer categories, not more noise.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            These are the delivery tracks behind the work in this portfolio. They make it easier to understand what kind of problems I solve and where I add the most value.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="group rounded-[1.75rem] border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl md:p-8">
              <div className="inline-flex rounded-full bg-muted px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-[#7A3B3B] uppercase dark:text-[#A85C5C]">
                Focus Area
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-foreground">{service.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.bullets.map((bullet) => (
                  <span key={bullet} className="rounded-full bg-background px-3 py-1 text-xs font-medium text-foreground ring-1 ring-border">
                    {bullet}
                  </span>
                ))}
              </div>

              <Link
                href={service.href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-[#7A3B3B] dark:group-hover:text-[#A85C5C]"
              >
                Explore related work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
