"use client"

import { ArrowUpRight } from "lucide-react"
import { getCertificateIssuers, getCertificatesByIssuer } from "@/lib/certificates"

export default function CertificatesSection() {
  const issuers = getCertificateIssuers()

  return (
    <section
      id="certificates"
      className="relative w-full bg-muted/30 py-16 scroll-mt-28 dark:bg-background/95 md:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-semibold tracking-widest text-[#7A3B3B] uppercase dark:text-[#A85C5C]">
            Certificates
          </p>
          <h2 className="text-balance text-3xl font-light leading-relaxed text-foreground md:text-5xl">
            Credentials by issuer
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Training and competition certificates, grouped by the organization that issued them. Open the PDF for the original document.
          </p>
        </div>

        <div className="space-y-12">
          {issuers.map((issuer) => {
            const entries = getCertificatesByIssuer(issuer)

            return (
              <div key={issuer}>
                <div className="mb-4 flex items-end justify-between gap-4 border-b border-border pb-3">
                  <h3 className="text-xl font-semibold text-foreground">{issuer}</h3>
                  <span className="text-sm text-muted-foreground">
                    {entries.length} {entries.length === 1 ? "certificate" : "certificates"}
                  </span>
                </div>

                <ul className="divide-y divide-border">
                  {entries.map((cert) => (
                    <li key={cert.slug} className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-0">
                        <p className="text-base font-medium text-foreground">
                          {cert.title}
                          {cert.code ? <span className="ml-2 text-sm font-normal text-muted-foreground">{cert.code}</span> : null}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {cert.category}
                          {cert.highlight ? ` · ${cert.highlight}` : ""}
                          {` · ${cert.dateLabel}`}
                        </p>
                      </div>

                      <a
                        href={cert.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-[#7A3B3B] transition-colors hover:text-[#6a3333] dark:text-[#A85C5C]"
                      >
                        View PDF
                        <ArrowUpRight size={16} />
                      </a>
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
