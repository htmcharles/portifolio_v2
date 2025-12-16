"use client"

import Image from "next/image"
import { Mail, Github, Twitter, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  const qualifications = [
    "FULL-STACK DEVELOPER",
    "REACT SPECIALIST",
    "NODE.JS EXPERT",
    "AWS CERTIFIED",
    "AGILE PRACTITIONER",
  ]

  return (
    <section id="about" className="w-full bg-background py-16 md:py-24">
      <div className="w-full px-4 md:px-12 lg:px-20 xl:px-40 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Photo Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-full max-w-sm">
              {/* Social Icons - Positioned on the left side of image on desktop, flex row on mobile */}
              <div className="absolute left-4 top-6 hidden md:flex flex-col gap-3 z-10">
                <Button size="icon" className="w-14 h-14 bg-white dark:bg-black hover:bg-neutral-100 dark:hover:bg-neutral-900 shadow-md text-[#7A3B3B] dark:text-[#A85C5C] border border-black/5 dark:border-white/10 opacity-100">
                  <Github size={28} strokeWidth={2} />
                </Button>
                <Button size="icon" className="w-14 h-14 bg-white dark:bg-black hover:bg-neutral-100 dark:hover:bg-neutral-900 shadow-md text-[#7A3B3B] dark:text-[#A85C5C] border border-black/5 dark:border-white/10 opacity-100">
                  <Twitter size={28} strokeWidth={2} />
                </Button>
                <Button
                  size="icon"
                  className="w-14 h-14 bg-white dark:bg-black hover:bg-neutral-100 dark:hover:bg-neutral-900 shadow-md text-[#7A3B3B] dark:text-[#A85C5C] border border-black/5 dark:border-white/10 opacity-100"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Phone size={28} strokeWidth={2} />
                </Button>
              </div>

              <div className="bg-neutral-300 dark:bg-neutral-800 rounded-2xl overflow-hidden aspect-square md:aspect-auto md:h-96 shadow-lg">
                <Image
                  src="/images/hatuma-charles.jpg"
                  alt="Hatuma Charles - Full-Stack Developer"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Mobile Social Icons - Visible only on mobile */}
              <div className="flex md:hidden gap-3 justify-center mt-4">
                <Button size="icon" className="w-12 h-12 bg-white dark:bg-black hover:bg-neutral-100 dark:hover:bg-neutral-900 shadow-md text-[#7A3B3B] dark:text-[#A85C5C] border border-black/5 dark:border-white/10 opacity-100">
                  <Github size={24} strokeWidth={2} />
                </Button>
                <Button size="icon" className="w-12 h-12 bg-white dark:bg-black hover:bg-neutral-100 dark:hover:bg-neutral-900 shadow-md text-[#7A3B3B] dark:text-[#A85C5C] border border-black/5 dark:border-white/10 opacity-100">
                  <Twitter size={24} strokeWidth={2} />
                </Button>
                <Button
                  size="icon"
                  className="w-12 h-12 bg-white dark:bg-black hover:bg-neutral-100 dark:hover:bg-neutral-900 shadow-md text-[#7A3B3B] dark:text-[#A85C5C] border border-black/5 dark:border-white/10 opacity-100"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Phone size={24} strokeWidth={2} />
                </Button>
              </div>

              {/* Name - Positioned below image with stylized font */}
              <div className="text-center mt-6">
                <p className="text-2xl font-light text-[#7A3B3B] dark:text-[#A85C5C] tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
                  Hatuma Charles
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center">
            <p className="text-[#7A3B3B] dark:text-[#A85C5C] text-xs md:text-sm font-semibold tracking-widest uppercase mb-4 text-center md:text-left">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-relaxed mb-6 text-pretty text-center md:text-left">
              Passionate Developer Building Digital Solutions
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 text-center md:text-left">
              Hi, I'm Hatuma Charles. I'm a full-stack developer with over 4 years of experience creating innovative web applications.
              I specialize in React, Node.js, and modern web technologies, with a passion for clean code and exceptional user experiences.
            </p>

            {/* Qualifications */}
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
