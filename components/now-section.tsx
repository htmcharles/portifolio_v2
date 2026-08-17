import Link from "next/link"
import { ArrowRight, Clock3, Globe2, Layers3 } from "lucide-react"
import { site } from "@/lib/site"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"

const focusCards = [
  {
    icon: Layers3,
    title: "Current focus",
    body: "Open to freelance and full-time work across frontend, backend, DevOps, cybersecurity, AI/ML, embedded systems, and testing.",
  },
  {
    icon: Globe2,
    title: "Work style",
    body: "Remote, on-site in Kigali, or hybrid. Scope is agreed in writing before implementation starts.",
  },
  {
    icon: Clock3,
    title: "Availability",
    body: "Typical reply window is 24 to 48 hours on WhatsApp or email.",
  },
]

export default function NowSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
          <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 md:p-10">
            <p className="text-sm font-semibold tracking-[0.25em] text-[#7A3B3B] uppercase dark:text-[#A85C5C]">
              Now
            </p>
            <h2 className="mt-4 text-balance text-3xl font-light leading-tight text-foreground md:text-5xl">
              Based in Kigali. Available wherever the work is.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {site.school} trained me across the full software stack. I take freelance projects and full-time roles.
            </p>
            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#7A3B3B] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#6a3333]"
              >
                Book a call
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                See projects
              </Link>
            </div>
          </div>
          </Reveal>

          <RevealGroup className="grid h-full grid-rows-3 gap-4" staggerDelay={0.08}>
            {focusCards.map((card) => {
              const Icon = card.icon

              return (
                <RevealItem key={card.title} className="h-full">
                <article
                  className="flex h-full items-start gap-4 rounded-3xl border border-border bg-card p-5 transition-colors hover:bg-muted/40 md:p-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background">
                    <Icon size={18} className="text-[#7A3B3B] dark:text-[#A85C5C]" />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="text-base font-semibold text-foreground">{card.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{card.body}</p>
                  </div>
                </article>
                </RevealItem>
              )
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}
