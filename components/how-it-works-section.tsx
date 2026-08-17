import { Code2, Rocket, Search } from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We align on the goal, constraints, and a written quote before implementation starts.",
    icon: Search,
  },
  {
    number: "02",
    title: "Development",
    description:
      "I turn the agreed scope into a working build with clean architecture, responsive UI, and iterative feedback loops.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Deployment",
    description:
      "The work is tested, deployed, and handed over for real use — freelance delivery or as part of a full-time role.",
    icon: Rocket,
  },
]

export default function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-10 h-56 w-56 rounded-full bg-[#7A3B3B]/8 blur-[120px]" />
        <div className="absolute right-[8%] bottom-10 h-64 w-64 rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 md:px-6">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#7A3B3B] dark:text-[#A85C5C]">
            How It Works
          </p>
          <h2 className="text-balance text-3xl font-light text-foreground md:text-5xl">
            Clear process, reliable delivery.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            The workflow stays simple on purpose: define the right scope, build with discipline, then ship something ready for real use.
          </p>
        </Reveal>

        <RevealGroup className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon

            return (
                <RevealItem key={step.number}>
                <article className="group h-full rounded-[1.75rem] border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-card/95 md:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <div className="inline-flex rounded-2xl bg-muted p-3 ring-1 ring-border">
                      <Icon size={22} className="text-[#7A3B3B] dark:text-[#A85C5C]" />
                    </div>
                    <span className="text-sm font-semibold tracking-[0.2em] text-[#7A3B3B] dark:text-[#A85C5C]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">{step.description}</p>
                </article>
                </RevealItem>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
