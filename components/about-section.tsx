"use client"

import Image from "next/image"
import { Mail, Linkedin, Github } from "lucide-react"
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
    <section id="about" className="w-full bg-white py-16 md:py-24">
      <div className="w-full pl-40 pr-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Photo Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-full max-w-sm">
              {/* Social Icons - Positioned on the left side of image */}
              <div className="absolute left-4 top-6 flex flex-col gap-3 z-10">
                <Button size="icon" className="w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg text-[#7A3B3B] border-none">
                  <Linkedin size={16} />
                </Button>
                <Button size="icon" className="w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg text-[#7A3B3B] border-none">
                  <Github size={16} />
                </Button>
              </div>

              <div className="bg-neutral-300 rounded-2xl overflow-hidden aspect-square md:aspect-auto md:h-96 shadow-lg">
                <Image
                  src="/images/hatuma-charles.jpg"
                  alt="Hatuma Charles - Full-Stack Developer"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name - Positioned below image with stylized font */}
              <div className="text-center mt-6">
                <p className="text-2xl font-light text-[#7A3B3B] tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
                  Hatuma Charles
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center">
            <p className="text-[#7A3B3B] text-xs md:text-sm font-semibold tracking-widest uppercase mb-4">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-relaxed mb-6 text-pretty">
              Passionate Developer Building Digital Solutions
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
              Hi, I'm Hatuma Charles. I'm a full-stack developer with over 4 years of experience creating innovative web applications.
              I specialize in React, Node.js, and modern web technologies, with a passion for clean code and exceptional user experiences.
            </p>

            {/* Qualifications */}
            <div className="flex flex-wrap gap-3">
              {qualifications.map((qual) => (
                <span
                  key={qual}
                  className="px-3 py-2 bg-neutral-100 text-gray-700 text-xs font-medium rounded-full border border-neutral-200"
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
