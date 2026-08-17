import Image from "next/image"
import { loadCertificates } from "@/lib/certificates"
import { getArchiveProjects } from "@/lib/projects"
import { site } from "@/lib/site"
import AnimatedStat from "@/components/animated-stat"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"

export default async function ResultsSection() {
  const certificates = await loadCertificates()
  const stats = [
    { value: String(getArchiveProjects().length), label: "Live projects linked in the archive" },
    { value: "7", label: "RCA tracks: web, systems, security, AI/ML, embedded, testing" },
    { value: String(certificates.length), label: "Credentials from training, competitions, and leadership" },
    { value: "Kigali", label: "Based in Rwanda, available remotely and on-site" },
  ]
  return (
    <section className="relative overflow-hidden bg-muted/30 py-16 dark:bg-background md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[10%] right-[6%] h-64 w-64 rounded-full bg-[#7A3B3B]/8 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl">
            <div className="absolute top-5 left-5 z-10 rounded-full bg-black/70 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-white uppercase backdrop-blur-sm">
              {site.location}
            </div>
            <Image
              src={site.photo}
              alt={`${site.name} in ${site.location}`}
              width={1200}
              height={900}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="text-sm font-semibold tracking-[0.25em] text-[#7A3B3B] uppercase dark:text-[#A85C5C]">
            About
          </p>
          <h2 className="mt-4 text-balance text-3xl font-light leading-tight text-foreground md:text-5xl">
            A Kigali-based engineer with RCA range and work you can open.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Rwanda Coding Academy trained me across web, systems, security, AI/ML, embedded, and testing.
            I am student representative and chairman for 2025–2026. Live projects, credentials, and a working contact path are on this site.
            I take freelance work and full-time roles.
          </p>

          <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2" staggerDelay={0.08}>
            {stats.map((stat) => (
              <RevealItem key={stat.label}>
                <div className="rounded-2xl border border-border bg-card/90 p-5 shadow-sm backdrop-blur-sm">
                  <div className="text-3xl font-semibold text-foreground">
                    <AnimatedStat value={stat.value} />
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{stat.label}</div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>
      </div>
    </section>
  )
}
