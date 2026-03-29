"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink, Calendar, Building2 } from "lucide-react"

type Certificate = {
  title: string
  issuer: string
  date: string
  description: string
  link?: string
}

export default function CertificatesSection() {
  const certificates: Certificate[] = [
    {
      title: "Full Stack Web Development",
      issuer: "Meta (via Coursera)",
      date: "2023",
      description:
        "Advanced certification covering modern frontend and backend technologies including React, Django, and cloud deployment.",
    },
    {
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      description:
        "Hands-on experience with AWS services, including Lambda, DynamoDB, API Gateway, and S3 for scalable applications.",
    },
    {
      title: "Professional Java Developer",
      issuer: "Oracle",
      date: "2022",
      description:
        "Comprehensive certification on Java SE, covering OOP principles, collections, concurrency, and database connectivity.",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2021",
      description:
        "In-depth training on HTML5, CSS3, Flexbox, and Grid to build modern, mobile-first web applications.",
    },
  ]

  return (
    <section
      id="certificates"
      className="relative w-full overflow-hidden bg-muted/30 py-16 scroll-mt-28 dark:bg-background/95 md:py-24"
    >
      <div className="pointer-events-none absolute top-0 right-0 h-full w-full overflow-hidden">
        <div className="absolute top-[20%] right-[10%] h-72 w-72 rounded-full bg-[#7A3B3B]/5 blur-[120px] dark:bg-[#A85C5C]/5" />
        <div className="absolute bottom-[20%] left-[10%] h-64 w-64 rounded-full bg-primary/5 blur-[100px] dark:bg-primary/2" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold tracking-widest text-[#7A3B3B] uppercase dark:text-[#A85C5C]">
            Achievements
          </p>
          <h2 className="text-balance text-3xl leading-relaxed font-light text-foreground md:text-5xl">
            Certifications & Awards
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Professional milestones and technical validations of my expertise
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl border border-border/50 bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-muted/50 hover:shadow-xl dark:border-border/20 dark:bg-card/40 dark:hover:bg-card/60 md:p-8"
            >
              <div className="flex items-start gap-6">
                <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#7A3B3B]/10 text-[#7A3B3B] shadow-sm transition-all duration-300 group-hover:bg-[#7A3B3B]/20 dark:bg-[#A85C5C]/10 dark:text-[#A85C5C] dark:group-hover:bg-[#A85C5C]/20 sm:flex">
                  <Award size={32} />
                </div>

                <div className="flex-1">
                  <div className="mb-2 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-[#7A3B3B] dark:group-hover:text-[#A85C5C]">
                      {cert.title}
                    </h3>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-all duration-300 hover:text-[#7A3B3B] dark:hover:text-[#A85C5C]"
                        aria-label={`View ${cert.title} certificate`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>

                  <div className="mb-4 flex flex-wrap gap-4 text-sm font-medium text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Building2 size={14} className="text-[#7A3B3B] dark:text-[#A85C5C]" />
                      {cert.issuer}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-[#7A3B3B] dark:text-[#A85C5C]" />
                      {cert.date}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground transition-all duration-500 group-hover:line-clamp-none line-clamp-2">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
