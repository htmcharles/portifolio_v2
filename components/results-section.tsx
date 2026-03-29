import Image from "next/image"

const stats = [
  { value: "14", label: "Projects across marketing sites, tools, and systems" },
  { value: "4+", label: "Years spent shipping and refining product work" },
  { value: "30+", label: "Technologies used across frontend, backend, and cloud" },
  { value: "4", label: "Delivery tracks: frontend, backend, full-stack, and open source" },
]

const proofPoints = [
  "Launch-ready marketing websites with stronger visual credibility",
  "Operational systems that reduce workflow fragmentation",
  "Frontend implementation focused on clarity, performance, and responsiveness",
  "Product thinking that connects interface polish with business intent",
]

export default function ResultsSection() {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-16 dark:bg-background md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[10%] right-[6%] h-64 w-64 rounded-full bg-[#7A3B3B]/8 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl">
          <div className="absolute top-5 left-5 z-10 rounded-full bg-black/70 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-white uppercase backdrop-blur-sm">
            Product Proof
          </div>
          <Image
            src="/images/social-proof.jpg"
            alt="Portfolio proof and workspace context"
            width={1200}
            height={900}
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold tracking-[0.25em] text-[#7A3B3B] uppercase dark:text-[#A85C5C]">
            Why This Portfolio Is Different
          </p>
          <h2 className="mt-4 text-balance text-3xl font-light leading-tight text-foreground md:text-5xl">
            Work that is easier to trust because it is explained like a product, not just displayed like a gallery.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            The strongest portfolio work does more than look good. It shows scope, delivery quality, technical choices, and why the result matters. This section turns the portfolio into proof instead of decoration.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border bg-card/90 p-5 shadow-sm backdrop-blur-sm">
                <div className="text-3xl font-semibold text-foreground">{stat.value}</div>
                <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3">
            {proofPoints.map((point) => (
              <div key={point} className="rounded-2xl bg-card/90 px-4 py-3 text-sm font-medium text-foreground shadow-sm ring-1 ring-border/70">
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
