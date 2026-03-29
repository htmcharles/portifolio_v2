"use client"

import { useEffect, useState } from "react"
import { Building2, Calendar, ChevronLeft, ChevronRight } from "lucide-react"

interface Experience {
  period: string
  title: string
  organization: string
  description: string
  technologies: string[]
}

interface TimelineProps {
  items: Experience[]
}

export default function Timeline({ items }: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  const getItemStyle = (index: number) => {
    const totalItems = items.length
    let diff = index - activeIndex

    if (diff > totalItems / 2) diff -= totalItems
    if (diff < -totalItems / 2) diff += totalItems

    const absDiff = Math.abs(diff)
    const isVisible = absDiff <= 2

    if (!isVisible) {
      return {
        opacity: 0,
        pointerEvents: "none" as const,
        transform: "translate(-50%, -50%) scale(0)",
      }
    }

    const xOffset = diff * 120
    const yOffset = absDiff * 20
    const scale = 1 - absDiff * 0.2
    const opacity = 1 - absDiff * 0.3
    const zIndex = 10 - absDiff

    return {
      transform: `translate(calc(-50% + ${xOffset}px), ${yOffset}px) scale(${scale})`,
      opacity,
      zIndex,
      position: "absolute" as const,
      left: "50%",
      top: "50%",
      transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    }
  }

  if (isMobile) {
    return (
      <div className="mx-auto w-full max-w-3xl px-4">
        <div className="relative space-y-6 border-l border-border pl-6">
          {items.map((item) => (
            <article key={`${item.period}-${item.title}`} className="relative rounded-2xl border border-border bg-card p-5 shadow-sm">
              <span className="absolute top-6 -left-[33px] h-3 w-3 rounded-full bg-[#7A3B3B] ring-4 ring-background dark:bg-[#A85C5C] dark:ring-background" />
              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-[#7A3B3B] dark:text-[#A85C5C]">
                <Calendar size={14} />
                <span>{item.period}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{item.organization}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span key={tech} className="rounded-lg bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    )
  }

  const activeItem = items[activeIndex]

  return (
    <div className="mx-auto w-full max-w-5xl px-4">
      <div className="relative mb-8 h-40 overflow-hidden md:mb-12">
        <svg
          className="pointer-events-none absolute top-1/2 left-1/2 h-20 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 opacity-20"
          viewBox="0 0 600 100"
        >
          <path d="M0,100 Q300,0 600,100" fill="none" stroke="#7A3B3B" strokeWidth="2" />
        </svg>

        {items.map((item, index) => (
          <button
            key={`${item.period}-${item.title}`}
            type="button"
            style={getItemStyle(index)}
            onClick={() => setActiveIndex(index)}
            className="group flex cursor-pointer flex-col items-center bg-transparent"
            aria-label={`View experience entry: ${item.title}`}
          >
            <div
              className={`mb-2 text-lg font-bold transition-colors ${index === activeIndex ? "text-[#7A3B3B] dark:text-[#A85C5C]" : "text-muted-foreground/50"}`}
            >
              {item.period}
            </div>
            <div
              className={`h-4 w-4 rounded-full border-2 transition-colors ${index === activeIndex
                ? "border-[#7A3B3B] bg-[#7A3B3B] dark:border-[#A85C5C] dark:bg-[#A85C5C]"
                : "border-border bg-card group-hover:border-[#7A3B3B] dark:group-hover:border-[#A85C5C]"
                }`}
            />
            <div
              className={`mt-2 whitespace-nowrap text-xs font-medium text-muted-foreground transition-opacity ${index === activeIndex ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
            >
              {index === activeIndex ? "Current" : "View"}
            </div>
          </button>
        ))}
      </div>

      <div className="relative mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 shadow-lg transition-all duration-500 md:p-12">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7A3B3B] p-3 text-white shadow-lg">
          <Building2 size={24} />
        </div>

        <div className="mt-6 text-center">
          <div className="mb-2 flex items-center justify-center gap-2 font-medium text-[#7A3B3B] dark:text-[#A85C5C]">
            <Calendar size={16} />
            <span>{activeItem.period}</span>
          </div>

          <h3 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">{activeItem.title}</h3>
          <div className="mb-6 text-lg font-medium text-muted-foreground">{activeItem.organization}</div>

          <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-muted-foreground">{activeItem.description}</p>

          <div className="flex flex-wrap justify-center gap-2">
            {activeItem.technologies.map((tech) => (
              <span key={tech} className="rounded-lg bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-muted px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/80 hover:text-[#7A3B3B] dark:hover:text-[#A85C5C]"
            aria-label="Previous experience"
          >
            <ChevronLeft size={18} />
            Previous
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-muted px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/80 hover:text-[#7A3B3B] dark:hover:text-[#A85C5C]"
            aria-label="Next experience"
          >
            Next
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
