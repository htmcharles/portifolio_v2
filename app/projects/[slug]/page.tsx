import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react"
import { notFound } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { getProjectBySlug, projects } from "@/lib/projects"

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: "Project Not Found - Hatuma Charles",
    }
  }

  return {
    title: `${project.title} - Hatuma Charles`,
    description: project.description,
  }
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const relatedProjects = projects.filter((entry) => entry.slug !== project.slug).slice(0, 3)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="relative overflow-hidden border-b border-border bg-background pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-[-8rem] left-[8%] h-72 w-72 rounded-full bg-[#7A3B3B]/10 blur-[140px]" />
          <div className="absolute right-[6%] bottom-[-6rem] h-72 w-72 rounded-full bg-primary/10 blur-[140px]" />
        </div>

        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 md:px-6">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 transition-colors hover:bg-muted">
              <ArrowLeft size={14} />
              Back to archive
            </Link>
            <span className="rounded-full bg-muted px-3 py-1 font-medium text-foreground">{project.type}</span>
            <span>{project.year}</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-[#7A3B3B] uppercase dark:text-[#A85C5C]">
                Case Study
              </p>
              <h1 className="mt-4 text-balance text-4xl leading-tight font-light md:text-6xl">{project.title}</h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{project.tagline}</p>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">{project.summary}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#7A3B3B] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#6a3333]"
                >
                  <ExternalLink size={16} />
                  View live project
                </a>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    <Github size={16} />
                    View source
                  </a>
                )}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <div className="text-2xl font-semibold text-foreground">{metric.value}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 md:px-6 md:py-20 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className="relative aspect-[16/10]">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-border bg-card p-6">
              <div className="text-sm font-semibold tracking-[0.2em] text-[#7A3B3B] uppercase dark:text-[#A85C5C]">
                Challenge
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">{project.challenge}</p>
            </article>
            <article className="rounded-3xl border border-border bg-card p-6">
              <div className="text-sm font-semibold tracking-[0.2em] text-[#7A3B3B] uppercase dark:text-[#A85C5C]">
                Solution
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">{project.solution}</p>
            </article>
          </div>

          <article className="rounded-3xl border border-border bg-card p-6 md:p-8">
            <div className="text-sm font-semibold tracking-[0.2em] text-[#7A3B3B] uppercase dark:text-[#A85C5C]">
              Outcomes
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {project.outcomes.map((outcome) => (
                <div key={outcome} className="rounded-2xl bg-muted/70 p-4 text-sm leading-relaxed text-muted-foreground">
                  {outcome}
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="space-y-6">
          <article className="rounded-3xl border border-border bg-card p-6">
            <div className="text-sm font-semibold tracking-[0.2em] text-[#7A3B3B] uppercase dark:text-[#A85C5C]">
              Project Snapshot
            </div>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="border-b border-border pb-4">
                <dt className="text-muted-foreground">Client / Context</dt>
                <dd className="mt-1 font-medium text-foreground">{project.client}</dd>
              </div>
              <div className="border-b border-border pb-4">
                <dt className="text-muted-foreground">Role</dt>
                <dd className="mt-1 font-medium text-foreground">{project.role}</dd>
              </div>
              <div className="border-b border-border pb-4">
                <dt className="text-muted-foreground">Duration</dt>
                <dd className="mt-1 font-medium text-foreground">{project.duration}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Core Stack</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground">
                      {tech}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </article>

          <article className="rounded-3xl border border-border bg-card p-6">
            <div className="text-sm font-semibold tracking-[0.2em] text-[#7A3B3B] uppercase dark:text-[#A85C5C]">
              Deliverables
            </div>
            <div className="mt-5 space-y-3">
              {project.deliverables.map((deliverable) => (
                <div key={deliverable} className="rounded-2xl bg-muted/70 px-4 py-3 text-sm text-muted-foreground">
                  {deliverable}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-[#7A3B3B] uppercase dark:text-[#A85C5C]">
                More Work
              </p>
              <h2 className="mt-3 text-3xl font-light text-foreground md:text-4xl">Explore related portfolio work</h2>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-[#7A3B3B] dark:hover:text-[#A85C5C]">
              See full archive
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedProjects.map((entry) => (
              <Link
                key={entry.slug}
                href={`/projects/${entry.slug}`}
                className="group rounded-3xl border border-border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-xs font-semibold tracking-[0.2em] text-[#7A3B3B] uppercase dark:text-[#A85C5C]">
                  {entry.type}
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-foreground">{entry.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{entry.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-transform group-hover:translate-x-1">
                  Read case study
                  <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
