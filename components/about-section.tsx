"use client"

import Image from "next/image"
import { Github, Linkedin, Instagram, Mail, MessageCircle } from "lucide-react"
import { site, whatsappUrl } from "@/lib/site"
import { Reveal } from "@/components/reveal"

function TwitterIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.59l-5.16-6.74L5.2 22H1.94l8.02-9.16L1.5 2h6.76l4.66 6.18L18.244 2zm-1.16 18h1.8L7.01 3.89H5.08L17.084 20z" />
    </svg>
  )
}

export default function AboutSection() {
  const socialLinks = [
    { href: site.github, label: "GitHub", icon: Github, external: true },
    { href: site.linkedin, label: "LinkedIn", icon: Linkedin, external: true },
    { href: site.instagram, label: "Instagram", icon: Instagram, external: true },
    { href: site.twitter, label: "X", icon: TwitterIcon, external: true },
    { href: `mailto:${site.email}`, label: "Email", icon: Mail, external: false },
    { href: whatsappUrl, label: "WhatsApp", icon: MessageCircle, external: true },
  ]

  const tags = ["Software engineer", "Rwanda Coding Academy", "Student representative", "Kigali"]

  return (
    <section id="about" className="w-full bg-background py-16 md:py-24 scroll-mt-28">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
          <div className="mx-auto w-full max-w-sm md:mx-0">
            <div className="overflow-hidden rounded-3xl bg-muted">
              <Image
                src={site.photo}
                alt={`${site.name}, software engineer`}
                width={640}
                height={800}
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
            <p className="mt-5 text-center text-xl text-foreground md:text-left">{site.name}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
              {socialLinks.map(({ href, label, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-all hover:-translate-y-0.5 hover:bg-muted hover:text-foreground"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          </Reveal>

          <Reveal delay={0.08}>
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-[#7A3B3B] uppercase dark:text-[#A85C5C]">
              About
            </p>
            <h2 className="mt-4 text-balance text-3xl font-light leading-snug text-foreground md:text-4xl">
              Software engineer from Rwanda Coding Academy
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              I am {site.name}, based in {site.location}. I studied software engineering at {site.school}, covering
              frontend, backend, DevOps, cybersecurity, AI/ML, embedded systems, and testing. I am student representative
              and chairman for 2025–2026. I take freelance projects and full-time roles.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
