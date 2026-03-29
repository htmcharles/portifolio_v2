import Link from "next/link"
import { ArrowRight, Clock3, Globe2, Layers3 } from "lucide-react"

const focusCards = [
  {
    icon: Layers3,
    title: "Current Focus",
    body: "Case-study quality frontend work, cleaner portfolio storytelling, and more product-grade systems presentation.",
  },
  {
    icon: Globe2,
    title: "Work Style",
    body: "Remote-friendly collaboration with an emphasis on shipped outcomes, strong communication, and design-aware implementation.",
  },
  {
    icon: Clock3,
    title: "Availability",
    body: "Open to selective freelance, contract, and product-focused opportunities with a typical reply window of 24 to 48 hours.",
  },
]

export default function NowSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="rounded-[2rem] border border-border bg-card p-8 shadow-sm md:p-10 dark:bg-card/95">
            <p className="text-sm font-semibold tracking-[0.25em] text-[#7A3B3B] uppercase dark:text-[#A85C5C]">
              Now
            </p>
            <h2 className="mt-4 text-balance text-3xl font-light leading-tight text-foreground md:text-5xl">
              Building a portfolio that reads like real product work.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              The goal is not just to show finished screens. It is to communicate scope, delivery thinking, and the kind of engineering decisions that help software launch well.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#7A3B3B] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#6a3333]"
              >
                Explore case studies
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted dark:bg-background/60"
              >
                Start a conversation
              </Link>
            </div>
          </div>

          <div className="grid gap-6">
            {focusCards.map((card) => {
              const Icon = card.icon

              return (
                <article key={card.title} className="rounded-[1.75rem] border border-border bg-muted/40 p-6 shadow-sm dark:bg-card/90">
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex rounded-2xl bg-background p-3 shadow-sm ring-1 ring-border dark:bg-background/60">
                      <Icon size={20} className="text-[#7A3B3B] dark:text-[#A85C5C]" />
                    </div>
                    <span className="text-xs font-semibold tracking-[0.18em] text-[#7A3B3B] dark:text-[#A85C5C]">
                      {card.title}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">{card.body}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
