"use client"

import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"
import AnimatedStat from "@/components/animated-stat"

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  stats: Array<{ label: string; value: string }>
}

export default function PageHero({ eyebrow, title, description, stats }: PageHeroProps) {
  return (
    <section className="border-b border-border bg-background pt-24 pb-10 md:pt-28 md:pb-12">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-[#7A3B3B] uppercase dark:text-[#A85C5C]">
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-light leading-snug text-foreground md:text-4xl">
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">{description}</p>
        </Reveal>
        <RevealGroup className="mt-8 grid grid-cols-3 gap-3" staggerDelay={0.07}>
          {stats.map((stat) => (
            <RevealItem key={stat.label}>
              <div className="rounded-xl border border-border bg-card px-3 py-3 md:px-4">
                <div className="text-xl font-medium text-foreground md:text-2xl">
                  <AnimatedStat value={stat.value} />
                </div>
                <div className="mt-1 text-xs leading-4 text-muted-foreground md:text-sm">{stat.label}</div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
