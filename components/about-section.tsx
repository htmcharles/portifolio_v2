"use client"

import Image from "next/image"
import { Github, Linkedin, Instagram, Mail, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { site, whatsappUrl } from "@/lib/site"

function TwitterIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.59l-5.16-6.74L5.2 22H1.94l8.02-9.16L1.5 2h6.76l4.66 6.18L18.244 2zm-1.16 18h1.8L7.01 3.89H5.08L17.084 20z" />
    </svg>
  )
}

export default function AboutSection() {
  const socialLinks = [
    { href: site.github, label: "GitHub profile", icon: Github, external: true },
    { href: site.linkedin, label: "LinkedIn profile", icon: Linkedin, external: true },
    { href: site.instagram, label: "Instagram profile", icon: Instagram, external: true },
    { href: site.twitter, label: "X profile", icon: TwitterIcon, external: true },
    { href: `mailto:${site.email}`, label: `Email ${site.name}`, icon: Mail, external: false },
    { href: whatsappUrl, label: "WhatsApp", icon: MessageCircle, external: true },
  ]

  const qualifications = [
    "SOFTWARE ENGINEER",
    "RWANDA CODING ACADEMY",
    "THINKCYBER / CYBERIUM",
    "KIGALI",
  ]

  return (
    <section id="about" className="w-full bg-background py-16 md:py-24 scroll-mt-28">
      <div className="w-full px-4 md:px-12 lg:px-20 xl:px-40 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-full max-w-sm">
              <div className="absolute left-4 top-6 hidden md:flex flex-col gap-3 z-10">
                {socialLinks.map(({ href, label, icon: Icon, external }) => (
                  <Button
                    key={label}
                    asChild
                    size="icon"
                    className="w-14 h-14 bg-white dark:bg-black hover:bg-neutral-100 dark:hover:bg-neutral-900 shadow-md text-[#7A3B3B] dark:text-[#A85C5C] border border-black/5 dark:border-white/10 opacity-100"
                  >
                    <a
                      href={href}
                      aria-label={label}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                    >
                      <Icon size={28} />
                    </a>
                  </Button>
                ))}
              </div>

              <div className="bg-neutral-300 dark:bg-neutral-800 rounded-2xl overflow-hidden aspect-square md:aspect-auto md:h-96 shadow-lg">
                <Image
                  src={site.photo}
                  alt={`${site.name} - ${site.role}`}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex md:hidden gap-3 justify-center mt-4 flex-wrap">
                {socialLinks.map(({ href, label, icon: Icon, external }) => (
                  <Button
                    key={label}
                    asChild
                    size="icon"
                    className="w-12 h-12 bg-white dark:bg-black hover:bg-neutral-100 dark:hover:bg-neutral-900 shadow-md text-[#7A3B3B] dark:text-[#A85C5C] border border-black/5 dark:border-white/10 opacity-100"
                  >
                    <a
                      href={href}
                      aria-label={label}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                    >
                      <Icon size={24} />
                    </a>
                  </Button>
                ))}
              </div>

              <div className="text-center mt-6">
                <p className="text-2xl font-light text-[#7A3B3B] dark:text-[#A85C5C] tracking-wide" style={{ fontFamily: "Georgia, serif" }}>
                  {site.name}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[#7A3B3B] dark:text-[#A85C5C] text-xs md:text-sm font-semibold tracking-widest uppercase mb-4 text-center md:text-left">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-relaxed mb-6 text-pretty text-center md:text-left">
              Software engineer trained across the full RCA stack
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 text-center md:text-left">
              Hi, I am {site.name}. I studied at {site.school} and work as a software engineer in {site.location}.
              The academy covers frontend, backend, DevOps, cybersecurity, AI/ML, embedded systems, and testing —
              and that is the range I bring to freelance projects and full-time roles. I am reachable on WhatsApp,
              email, and by booked call.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {qualifications.map((qual) => (
                <span
                  key={qual}
                  className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-md border border-neutral-200 dark:border-neutral-700"
                >
                  {qual}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
