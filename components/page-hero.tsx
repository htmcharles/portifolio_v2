import Link from "next/link"
import { ArrowRight } from "lucide-react"

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  stats: Array<{ label: string; value: string }>
}

const exploreLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/certificates", label: "Certificates" },
]

export default function PageHero({ eyebrow, title, description, stats }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background pt-24 pb-14 md:pt-32 md:pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-6rem] left-[8%] h-64 w-64 rounded-full bg-[#7A3B3B]/10 blur-[120px]" />
        <div className="absolute right-[6%] bottom-[-4rem] h-56 w-56 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 md:px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#7A3B3B] uppercase dark:text-[#A85C5C]">
            {eyebrow}
          </p>
          <h1 className="text-balance text-4xl leading-tight font-light text-foreground md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-[1.3fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border bg-card/80 p-5 backdrop-blur-sm">
                <div className="text-2xl font-semibold text-foreground md:text-3xl">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="text-sm font-semibold tracking-[0.2em] text-[#7A3B3B] uppercase dark:text-[#A85C5C]">
              Explore Portfolio
            </div>
            <div className="mt-4 grid gap-2">
              {exploreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between rounded-xl border border-transparent bg-muted/70 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-border hover:bg-background"
                >
                  <span>{link.label}</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
