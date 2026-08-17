import { ArrowUpRight } from "lucide-react"
import { loadCertificates } from "@/lib/certificates"
import { Reveal } from "@/components/reveal"

export default async function CertificatesSection() {
  const certificates = await loadCertificates()

  if (certificates.length === 0) {
    return null
  }

  const issuers = [...new Set(certificates.map((certificate) => certificate.issuer))]

  return (
    <section
      id="certificates"
      className="relative w-full bg-muted/30 py-16 scroll-mt-28 dark:bg-background/95 md:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <Reveal className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-semibold tracking-widest text-[#7A3B3B] uppercase dark:text-[#A85C5C]">
            Certificates
          </p>
          <h2 className="text-balance text-3xl font-light leading-relaxed text-foreground md:text-5xl">
            Credentials
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Competitions, leadership, and training. A PDF link appears when a scan is on file.
          </p>
        </Reveal>

        <div className="space-y-12">
          {issuers.map((issuer) => {
            const entries = certificates.filter((certificate) => certificate.issuer === issuer)

            return (
              <div key={issuer}>
                <div className="mb-4 flex items-end justify-between gap-4 border-b border-border pb-3">
                  <h3 className="text-xl font-semibold text-foreground">{issuer}</h3>
                  <span className="text-sm text-muted-foreground">
                    {entries.length} {entries.length === 1 ? "entry" : "entries"}
                  </span>
                </div>

                <ul className="divide-y divide-border">
                  {entries.map((cert) => (
                    <li key={cert.slug} className="group flex flex-col gap-3 py-5 transition-colors hover:bg-muted/40 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-0">
                        <p className="text-base font-medium text-foreground">
                          {cert.title}
                          {cert.code ? <span className="ml-2 text-sm font-normal text-muted-foreground">{cert.code}</span> : null}
                        </p>
                        {cert.highlight || cert.dateLabel ? (
                          <p className="mt-1 text-sm text-muted-foreground">
                            {[cert.highlight, cert.dateLabel].filter(Boolean).join(" · ")}
                          </p>
                        ) : null}
                      </div>

                      {cert.pdf ? (
                        <a
                          href={cert.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-[#7A3B3B] transition-all group-hover:gap-2 hover:text-[#6a3333] dark:text-[#A85C5C]"
                        >
                          View PDF
                          <ArrowUpRight size={16} />
                        </a>
                      ) : (
                        <span className="shrink-0 text-sm text-muted-foreground">No PDF on file</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
