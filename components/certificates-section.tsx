"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Building2, Calendar, Download } from "lucide-react"
import { certificates } from "@/lib/certificates"

export default function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="relative w-full overflow-hidden bg-muted/30 py-16 scroll-mt-28 dark:bg-background/95 md:py-24"
    >
      <div className="pointer-events-none absolute top-0 right-0 h-full w-full overflow-hidden">
        <div className="absolute top-[20%] right-[10%] h-72 w-72 rounded-full bg-[#7A3B3B]/5 blur-[120px] dark:bg-[#A85C5C]/5" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold tracking-widest text-[#7A3B3B] uppercase dark:text-[#A85C5C]">
            Achievements
          </p>
          <h2 className="text-balance text-3xl leading-relaxed font-light text-foreground md:text-5xl">
            ThinkCyber certificates
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Cybersecurity training completed with ThinkCyber on the Cyberium Arena simulator. Each card opens the original PDF.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {certificates.map((cert, index) => (
            <motion.article
              key={cert.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-border/50 bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-border/20 dark:bg-card/40"
            >
              <a href={cert.pdf} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative aspect-[16/10] bg-muted">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} (${cert.code}) certificate for Hatuma Charles`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </a>

              <div className="p-6 md:p-8">
                <div className="mb-2 flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {cert.title}{" "}
                    <span className="text-base font-medium text-muted-foreground">({cert.code})</span>
                  </h3>
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-[#7A3B3B] dark:hover:text-[#A85C5C]"
                    aria-label={`Download ${cert.title} PDF`}
                  >
                    <Download size={20} />
                  </a>
                </div>

                <div className="mb-4 flex flex-wrap gap-4 text-sm font-medium text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Building2 size={14} className="text-[#7A3B3B] dark:text-[#A85C5C]" />
                    {cert.issuer} · {cert.platform}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-[#7A3B3B] dark:text-[#A85C5C]" />
                    {cert.dateLabel}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">{cert.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
