"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { site, whatsappUrl } from "@/lib/site"

export default function HeroSection() {
  const capabilityBadges = ["Frontend & Backend", "DevOps & Security", "AI/ML & Embedded"]

  return (
    <section id="hero" className="bg-background pt-16">
      <div className="w-full px-4 md:px-12 lg:px-20 xl:px-40 max-w-[1920px] mx-auto">
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 lg:py-24">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold tracking-widest text-[#7A3B3B] dark:text-[#A85C5C] mb-4">
                {site.role.toUpperCase()} · {site.school.toUpperCase()}
              </p>
              <h1 className="text-5xl lg:text-6xl font-light text-foreground leading-tight text-balance">
                {site.headline}
              </h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I am {site.name}, a software engineer in {site.location}. I build and ship work across frontend,
              backend, DevOps, cybersecurity, AI/ML, embedded systems, and testing. Open to freelance projects
              and full-time roles.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                icon={<ChevronRight size={16} />}
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                View My Work
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#contact">Book a Call</Link>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <Image
              src={site.photo}
              alt={`${site.name} - ${site.role}`}
              width={900}
              height={1100}
              priority
              sizes="(min-width: 1200px) 50vw, 100vw"
              className="h-auto w-full rounded-3xl object-cover"
            />
            <div className="absolute top-6 right-6 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <span className="text-sm font-medium text-[#7A3B3B] dark:text-[#A85C5C]">{capabilityBadges[0]}</span>
            </div>
            <div className="absolute bottom-20 left-6 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <span className="text-sm font-medium text-[#7A3B3B] dark:text-[#A85C5C]">{capabilityBadges[1]}</span>
            </div>
            <div className="absolute bottom-6 right-12 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <span className="text-sm font-medium text-[#7A3B3B] dark:text-[#A85C5C]">{capabilityBadges[2]}</span>
            </div>
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 gap-8 md:gap-12 items-center py-12 md:py-20 lg:hidden">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#7A3B3B] dark:text-[#A85C5C] mb-3">
                {site.role.toUpperCase()} · {site.school.toUpperCase()}
              </p>
              <h1 className="text-3xl md:text-4xl font-light text-foreground leading-tight text-balance">
                {site.headline}
              </h1>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed">
              I am {site.name}, a software engineer in {site.location}. I work across web, systems, security,
              AI/ML, embedded, and testing. Available for freelance and full-time work.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                size="sm"
                icon={<ChevronRight size={14} />}
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                View My Work
              </Button>
              <Button size="sm" variant="outline" asChild>
                <Link href="/#contact">Book a Call</Link>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <Image
              src={site.photo}
              alt={`${site.name} - ${site.role}`}
              width={900}
              height={1100}
              sizes="(min-width: 810px) 50vw, 100vw"
              className="h-auto w-full rounded-3xl object-cover"
            />

            <div className="flex flex-wrap gap-3">
              {capabilityBadges.map((badge) => (
                <div
                  key={badge}
                  className="rounded-full bg-white/90 px-3 py-1.5 shadow-lg backdrop-blur-sm dark:bg-black/80"
                >
                  <span className="text-xs font-medium text-[#7A3B3B] dark:text-[#A85C5C]">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:hidden space-y-8 py-12">
          <div className="text-center space-y-4">
            <p className="text-xs font-semibold tracking-widest text-[#7A3B3B] dark:text-[#A85C5C]">
              {site.role.toUpperCase()} · {site.school.toUpperCase()}
            </p>
            <h1 className="text-4xl font-light text-foreground leading-tight text-balance">
              {site.headline}
            </h1>

            <p className="text-base text-muted-foreground leading-relaxed px-2">
              Software engineer in {site.location}, trained at {site.school}. Open to freelance projects and
              full-time roles.
            </p>
          </div>

          <div className="flex justify-center gap-3">
            <Button
              size="default"
              icon={<ChevronRight size={14} />}
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              View My Work
            </Button>
            <Button size="default" variant="outline" asChild>
              <Link href="/#contact">Book a Call</Link>
            </Button>
          </div>

          <div className="space-y-4 p-4">
            <Image
              src={site.photo}
              alt={`${site.name} - ${site.role}`}
              width={900}
              height={1100}
              sizes="100vw"
              className="h-auto w-full rounded-3xl object-cover shadow-2xl"
            />
            <div className="flex flex-wrap justify-center gap-3">
              {capabilityBadges.map((badge) => (
                <div
                  key={badge}
                  className="rounded-full bg-white/90 px-3 py-1.5 shadow-lg backdrop-blur-sm dark:bg-black/80"
                >
                  <span className="text-xs font-medium text-[#7A3B3B] dark:text-[#A85C5C]">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
