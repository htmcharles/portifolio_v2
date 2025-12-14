"use client"

import Image from "next/image"
import { Mail, Linkedin } from "lucide-react"
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
              <div className="bg-neutral-300 rounded-2xl overflow-hidden aspect-square md:aspect-auto md:h-96">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Hatuma Charles - Developer"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 mt-4 md:mt-6 justify-center md:justify-start">
                <Button variant="social" size="icon">
                  <Mail size={16} />
                </Button>
                <Button variant="social" size="icon">
                  <Linkedin size={16} />
                </Button>
              </div>

              {/* Name */}
              <p className="text-center md:text-left mt-4 text-sm font-serif text-[#7A3B3B]">HATUMA CHARLES</p>
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
