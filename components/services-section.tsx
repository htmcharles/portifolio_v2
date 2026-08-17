import Link from "next/link"
import { Check } from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"

const services = [
  {
    title: "Websites and interfaces",
    time: "1–2 weeks",
    description: "Public sites and product UI with a clear structure and a path to launch.",
    includes: ["Core pages", "Responsive layout", "Deployed to your host"],
  },
  {
    title: "Applications",
    time: "3–5 weeks",
    description: "Frontend, backend, and data for bookings, dashboards, or internal tools.",
    includes: ["Interface and API", "Database model", "Auth or admin as scoped"],
  },
  {
    title: "Custom engineering",
    time: "Scoped on a call",
    description: "DevOps, security, AI/ML, embedded, or testing sized to the problem.",
    includes: ["Written scope", "Delivery plan", "Quote after we agree the work"],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="bg-background py-16 md:py-24">
      <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
        <Reveal className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#7A3B3B] uppercase dark:text-[#A85C5C]">
            Work
          </p>
          <h2 className="mt-3 text-balance text-3xl font-light text-foreground md:text-5xl">
            What I take on
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            One set of engagements. Typical timelines below; every project gets a written quote after scope.
          </p>
        </Reveal>

        <RevealGroup className="divide-y divide-border border-y border-border">
          {services.map((service) => (
            <RevealItem key={service.title}>
            <article className="grid gap-4 py-8 transition-colors hover:bg-muted/30 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-10">
              <div>
                <h3 className="text-xl font-medium text-foreground">{service.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{service.time}</p>
              </div>
              <div>
                <p className="text-sm leading-6 text-muted-foreground">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.includes.map((line) => (
                    <li key={line} className="flex items-start gap-2 text-sm text-foreground">
                      <Check size={16} className="mt-0.5 shrink-0 text-[#7A3B3B] dark:text-[#A85C5C]" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-8">
          <Link
            href="/#contact"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-[#7A3B3B] px-5 text-sm font-medium text-white transition-transform hover:bg-[#6a3333] hover:translate-y-[-1px] dark:bg-[#A85C5C] dark:hover:bg-[#8f4d4d]"
          >
            Get a quote
          </Link>
        </div>
      </div>
    </section>
  )
}
