"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"
import { easeOut, fadeUp, stagger } from "@/lib/motion"

export default function HeroSection() {
  const capabilityBadges = ["Frontend & Backend", "DevOps & Security", "AI/ML & Embedded"]
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="hero"
      className="flex min-h-[100dvh] items-center bg-background pt-20 pb-6"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-6 px-4 md:grid-cols-2 md:gap-10 md:px-6 lg:gap-16">
        <motion.div
          className="order-2 md:order-1"
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65, ease: easeOut }}
            className="text-[11px] font-semibold tracking-[0.2em] text-[#7A3B3B] uppercase dark:text-[#A85C5C]"
          >
            {site.role} · {site.school}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7, ease: easeOut }}
            className="mt-3 max-w-xl text-balance text-3xl font-light leading-[1.15] text-foreground sm:text-4xl lg:text-5xl"
          >
            {site.headline}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: easeOut }}
            className="mt-4 max-w-lg text-sm leading-6 text-muted-foreground md:text-base"
          >
            {site.name}, based in {site.location}. Open to freelance projects and full-time roles.
          </motion.p>
          <motion.div variants={fadeUp} transition={{ duration: 0.65, ease: easeOut }} className="mt-4 flex flex-wrap gap-2">
            {capabilityBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
              >
                {badge}
              </span>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} transition={{ duration: 0.65, ease: easeOut }} className="mt-6 flex flex-wrap gap-3">
            <Button
              size="default"
              icon={<ChevronRight size={14} />}
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" })
              }}
            >
              View My Work
            </Button>
            <Button size="default" variant="outline" asChild>
              <Link href="/#contact">Book a Call</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="order-1 md:order-2"
          initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: easeOut }}
        >
          <div className="relative mx-auto h-[38vh] w-full max-w-sm overflow-hidden rounded-2xl md:mx-0 md:h-[min(42rem,calc(100dvh-8rem))] md:max-w-none">
            <Image
              src={site.photo}
              alt={`${site.name}, ${site.role}`}
              fill
              priority
              sizes="(min-width: 768px) 42vw, 90vw"
              className="object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
