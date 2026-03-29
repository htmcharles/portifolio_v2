"use client"

import Image from "next/image"
import { useState } from "react"

const invertedIcons = ["Next.js", "Express", "GitHub", "Notion", "Three.js", "NestJS", "Django", "Prisma", "Vercel", "AWS"]
type SkillCategory = "Frontend" | "Backend" | "Database & Cloud" | "Mobile" | "Tools"
type Skill = { name: string; icon: string }

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<SkillCategory>("Frontend")

  const skillCategories: Record<SkillCategory, Skill[]> = {
    "Frontend": [
      {
        name: "React",
        icon: "/icons/skills/react.svg",
      },
      {
        name: "Next.js",
        icon: "/icons/skills/nextjs.svg",
      },
      {
        name: "TypeScript",
        icon: "/icons/skills/typescript.svg",
      },
      {
        name: "Vue.js",
        icon: "/icons/skills/vuejs.svg",
      },
      {
        name: "Svelte",
        icon: "/icons/skills/svelte.svg",
      },
      {
        name: "Three.js",
        icon: "/icons/skills/threejs.svg",
      },
    ],
    "Backend": [
      {
        name: "Node.js",
        icon: "/icons/skills/nodejs.svg",
      },
      {
        name: "GraphQL",
        icon: "/icons/skills/graphql.svg",
      },
      {
        name: "Prisma",
        icon: "/icons/skills/prisma.svg",
      },
      {
        name: "Spring Boot",
        icon: "/icons/skills/spring.svg",
      },
      {
        name: "Django",
        icon: "/icons/skills/django.svg",
      },
      {
        name: "Python",
        icon: "/icons/skills/python.svg",
      },
      {
        name: "Go",
        icon: "/icons/skills/go.svg",
      },
      {
        name: "Java",
        icon: "/icons/skills/java.svg",
      },
      {
        name: "C#",
        icon: "/icons/skills/csharp.svg",
      },
      {
        name: "PHP",
        icon: "/icons/skills/php.svg",
      },
    ],
    "Database & Cloud": [
      {
        name: "PostgreSQL",
        icon: "/icons/skills/postgresql.svg",
      },
      {
        name: "MySQL",
        icon: "/icons/skills/mysql.svg",
      },
      {
        name: "MongoDB",
        icon: "/icons/skills/mongodb.svg",
      },
      {
        name: "Redis",
        icon: "/icons/skills/redis.svg",
      },
      {
        name: "Supabase",
        icon: "/icons/skills/supabase.svg",
      },
      {
        name: "Firebase",
        icon: "/icons/skills/firebase.svg",
      },
      {
        name: "AWS",
        icon: "/icons/skills/aws.svg",
      },
      {
        name: "Vercel",
        icon: "/icons/skills/vercel.svg",
      },
      {
        name: "Docker",
        icon: "/icons/skills/docker.svg",
      },
    ],
    "Mobile": [
      {
        name: "React Native",
        icon: "/icons/skills/react.svg",
      },
      {
        name: "Swift",
        icon: "/icons/skills/swift.svg",
      },
      {
        name: "Dart (Flutter)",
        icon: "/icons/skills/dart.svg",
      },
    ],
    "Tools": [
      {
        name: "Git",
        icon: "/icons/skills/git.svg",
      },
      {
        name: "Figma",
        icon: "/icons/skills/figma.svg",
      },
      {
        name: "Postman",
        icon: "/icons/skills/postman.svg",
      },
    ]
  }

  return (
    <section id="skills" className="w-full bg-background py-16 md:py-24 scroll-mt-28">
      <div className="w-full px-4 md:px-12 lg:px-20 xl:px-40 max-w-[1920px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-[#7A3B3B] dark:text-[#A85C5C] mb-4 uppercase">Technical Skills</p>
          <h2 className="text-3xl md:text-5xl font-light text-foreground leading-relaxed text-balance">
            Technologies I Work With
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Browse the stack I use across frontend, backend, cloud, and tooling
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted rounded-xl p-1 flex gap-1 flex-wrap">
            {(Object.keys(skillCategories) as SkillCategory[]).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === category
                  ? "bg-background text-[#7A3B3B] dark:text-[#A85C5C] shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Active Tab Content - macOS Dock Style */}
        <div className="flex justify-center">
          <div className="bg-background/80 dark:bg-card/80 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-border">
            <div className="flex items-end gap-2 px-2 flex-wrap justify-center">
              {skillCategories[activeTab].map((skill, index) => {
                const isHovered = hoveredSkill === index
                const isAdjacent = hoveredSkill !== null && Math.abs(hoveredSkill - index) === 1
                const isSecondAdjacent = hoveredSkill !== null && Math.abs(hoveredSkill - index) === 2

                let scale = "scale-100"
                if (isHovered) scale = "scale-100 md:scale-150"
                else if (isAdjacent) scale = "scale-100 md:scale-125"
                else if (isSecondAdjacent) scale = "scale-100 md:scale-110"

                return (
                  <div
                    key={skill.name}
                    className={`relative transition-all duration-300 ease-out ${scale} ${isHovered ? "z-10" : ""} cursor-pointer`}
                    onMouseEnter={() => setHoveredSkill(index)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {isHovered && (
                      <div className="absolute -top-12 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-lg border border-border bg-popover px-3 py-1 text-sm text-popover-foreground shadow-md md:block">
                        {skill.name}
                        <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-popover"></div>
                      </div>
                    )}

                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card shadow-md transition-shadow hover:shadow-lg md:h-16 md:w-16">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={40}
                        height={40}
                        unoptimized={false}
                        className={`h-8 w-8 object-contain md:h-10 md:w-10 ${invertedIcons.includes(skill.name) ? "dark:invert" : ""
                          }`}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
