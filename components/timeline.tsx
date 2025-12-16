"use client"

import React, { useState, useEffect, useRef, useCallback } from "react"
import { Building2, Calendar, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"

interface Experience {
    year: string
    title: string
    company: string
    description: string
    technologies: string[]
}

interface TimelineProps {
    items: Experience[]
    autoLoop?: boolean
}

export default function Timeline({ items, autoLoop = false }: TimelineProps) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isAutoLooping, setIsAutoLooping] = useState(autoLoop)
    const [isPaused, setIsPaused] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    // Handle auto-looping
    useEffect(() => {
        let interval: NodeJS.Timeout

        if (isAutoLooping && !isPaused) {
            interval = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % items.length)
            }, 3000)
        }

        return () => clearInterval(interval)
    }, [isAutoLooping, isPaused, items.length])

    // Handle manual navigation
    const handleItemClick = (index: number) => {
        setActiveIndex(index)
        setIsPaused(true) // Pause auto-loop on interaction
        // Resume after 5 seconds of inactivity
        setTimeout(() => setIsPaused(false), 5000)
    }

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % items.length)
        setIsPaused(true)
        setTimeout(() => setIsPaused(false), 5000)
    }

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length)
        setIsPaused(true)
        setTimeout(() => setIsPaused(false), 5000)
    }

    // Calculate styles for the curved effect
    const getItemStyle = (index: number) => {
        const totalItems = items.length
        // Calculate distance from active index, handling wrap-around for visual continuity if needed
        // For simple linear view with focus, we just look at relative position

        // We want to show roughly 5 items: active, -1, -2, +1, +2
        let diff = index - activeIndex

        // Adjust diff for infinite loop visual effect if we wanted true infinite scroll, 
        // but for this "curved" view, we'll keep it simple: just distance from center

        // However, to make it look like a wheel, we need to handle the wrap around logic visually
        // or just limit the view. Let's try a centered view where we shift the array.

        // Better approach for "curve":
        // The active item is at center (x=0, y=0, scale=1)
        // Items move away on X axis, drop down on Y axis, and scale down

        // We need to find the shortest distance in a circular array
        if (diff > totalItems / 2) diff -= totalItems
        if (diff < -totalItems / 2) diff += totalItems

        const absDiff = Math.abs(diff)
        const isVisible = absDiff <= 2 // Show 2 items on each side

        if (!isVisible) return { opacity: 0, pointerEvents: 'none' as const, transform: 'translate(-50%, -50%) scale(0)' }

        const xOffset = diff * 120 // 120px spacing
        const yOffset = absDiff * 20 // Drop down as we move away
        const scale = 1 - (absDiff * 0.2) // Scale down
        const opacity = 1 - (absDiff * 0.3) // Fade out
        const zIndex = 10 - absDiff

        return {
            transform: `translate(calc(-50% + ${xOffset}px), ${yOffset}px) scale(${scale})`,
            opacity,
            zIndex,
            position: 'absolute' as const,
            left: '50%',
            top: '50%',
            transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }
    }

    const activeItem = items[activeIndex]

    return (
        <div className="w-full max-w-5xl mx-auto px-4">
            {/* Controls */}
            <div className="flex justify-center items-center gap-4 mb-12">
                <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-sm border border-border">
                    <span className="text-sm font-medium text-muted-foreground">Auto-loop</span>
                    <button
                        onClick={() => setIsAutoLooping(!isAutoLooping)}
                        className={`w-10 h-5 rounded-full transition-colors relative ${isAutoLooping ? "bg-[#7A3B3B]" : "bg-muted-foreground/30"
                            }`}
                    >
                        <div
                            className={`absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-transform ${isAutoLooping ? "translate-x-5" : "translate-x-0"
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* Timeline Visual */}
            <div className="relative h-40 mb-12 overflow-hidden" ref={containerRef}>
                {/* Curved Line (SVG) - Decorative */}
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-20 opacity-20 pointer-events-none" viewBox="0 0 600 100">
                    <path d="M0,100 Q300,0 600,100" fill="none" stroke="#7A3B3B" strokeWidth="2" />
                </svg>

                {items.map((item, index) => (
                    <div
                        key={index}
                        style={getItemStyle(index)}
                        onClick={() => handleItemClick(index)}
                        className="flex flex-col items-center cursor-pointer group"
                    >
                        <div className={`text-lg font-bold mb-2 transition-colors ${index === activeIndex ? "text-[#7A3B3B] dark:text-[#A85C5C]" : "text-muted-foreground/50"}`}>
                            {item.year.split(" - ")[0]}
                        </div>
                        <div className={`w-4 h-4 rounded-full border-2 transition-colors ${index === activeIndex
                            ? "bg-[#7A3B3B] border-[#7A3B3B] dark:bg-[#A85C5C] dark:border-[#A85C5C]"
                            : "bg-card border-border group-hover:border-[#7A3B3B] dark:group-hover:border-[#A85C5C]"
                            }`} />
                        <div className={`mt-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-muted-foreground whitespace-nowrap ${index === activeIndex ? "opacity-100" : ""}`}>
                            {index === activeIndex ? "Current" : "View"}
                        </div>
                    </div>
                ))}
            </div>

            {/* Active Item Details */}
            <div className="relative bg-card rounded-2xl shadow-lg p-8 md:p-12 max-w-3xl mx-auto border border-border transition-all duration-500">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#7A3B3B] text-white p-3 rounded-full shadow-lg">
                    <Building2 size={24} />
                </div>

                <div className="text-center mt-6">
                    <div className="flex items-center justify-center gap-2 text-[#7A3B3B] dark:text-[#A85C5C] font-medium mb-2">
                        <Calendar size={16} />
                        <span>{activeItem.year}</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        {activeItem.title}
                    </h3>
                    <div className="text-lg text-muted-foreground font-medium mb-6">
                        {activeItem.company}
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                        {activeItem.description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-2">
                        {activeItem.technologies.map((tech, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-[18px]"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-muted text-muted-foreground hover:bg-muted/80 hover:text-[#7A3B3B] dark:hover:text-[#A85C5C] transition-colors"
                    aria-label="Previous experience"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-muted text-muted-foreground hover:bg-muted/80 hover:text-[#7A3B3B] dark:hover:text-[#A85C5C] transition-colors"
                    aria-label="Next experience"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    )
}
