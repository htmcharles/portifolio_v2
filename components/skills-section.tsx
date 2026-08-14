"use client"

import Image from "next/image"
import { useState } from "react"

const invertedIcons = ["Next.js", "Git", "Vercel"]
type SkillCategory = "Frontend" | "Backend" | "DevOps" | "Cybersecurity" | "AI & ML" | "Embedded" | "Testing"
type Skill = { name: string; icon?: string }

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<SkillCategory>("Frontend")

  const skillCategories: Record<SkillCategory, Skill[]> = {
    Frontend: [
      { name: "React", icon: "/icons/skills/react.svg" },
      { name: "Next.js", icon: "/icons/skills/nextjs.svg" },
      { name: "TypeScript", icon: "/icons/skills/typescript.svg" },
      { name: "Vue.js", icon: "/icons/skills/vuejs.svg" },
      { name: "Svelte", icon: "/icons/skills/svelte.svg" },
    ],
    Backend: [
      { name: "Node.js", icon: "/icons/skills/nodejs.svg" },
      { name: "Java", icon: "/icons/skills/java.svg" },
      { name: "Spring Boot", icon: "/icons/skills/spring.svg" },
      { name: "Python", icon: "/icons/skills/python.svg" },
      { name: "PostgreSQL", icon: "/icons/skills/postgresql.svg" },
      { name: "MySQL", icon: "/icons/skills/mysql.svg" },
    ],
    DevOps: [
      { name: "Git", icon: "/icons/skills/git.svg" },
      { name: "Docker", icon: "/icons/skills/docker.svg" },
      { name: "Vercel", icon: "/icons/skills/vercel.svg" },
      { name: "Linux" },
    ],
    Cybersecurity: [
      { name: "Python", icon: "/icons/skills/python.svg" },
      { name: "Linux" },
      { name: "Networking" },
      { name: "Cyberium Arena" },
    ],
    "AI & ML": [
      { name: "Python", icon: "/icons/skills/python.svg" },
      { name: "RCA AI/ML track" },
    ],
    Embedded: [
      { name: "RCA embedded systems" },
      { name: "Hardware-software integration" },
    ],
    Testing: [
      { name: "Postman", icon: "/icons/skills/postman.svg" },
      { name: "QA workflows" },
    ],
  }

  const activeSkills = skillCategories[activeTab]
  const hasIcons = activeSkills.some((skill) => skill.icon)

  return (
    <section id="skills" className="w-full bg-background py-16 md:py-24 scroll-mt-28">
      <div className="w-full px-4 md:px-12 lg:px-20 xl:px-40 max-w-[1920px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-[#7A3B3B] dark:text-[#A85C5C] mb-4 uppercase">Technical Skills</p>
          <h2 className="text-3xl md:text-5xl font-light text-foreground leading-relaxed text-balance">
            RCA training tracks and the tools I ship with
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Frontend, backend, DevOps, cybersecurity, AI/ML, embedded systems, and testing — with stack items that appear in this portfolio or ThinkCyber training.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-muted rounded-xl p-1 flex gap-1 flex-wrap justify-center">
            {(Object.keys(skillCategories) as SkillCategory[]).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === category
                  ? "bg-background text-[#7A3B3B] dark:text-[#A85C5C] shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          {hasIcons ? (
            <div className="bg-background/80 dark:bg-card/80 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-border">
              <div className="flex items-end gap-2 px-2 flex-wrap justify-center">
                {activeSkills.map((skill, index) => {
                  const isHovered = hoveredSkill === index
                  const isAdjacent = hoveredSkill !== null && Math.abs(hoveredSkill - index) === 1
                  let scale = "scale-100"
                  if (isHovered) scale = "scale-100 md:scale-150"
                  else if (isAdjacent) scale = "scale-100 md:scale-125"

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
                        </div>
                      )}

                      {skill.icon ? (
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card shadow-md md:h-16 md:w-16">
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={40}
                            height={40}
                            className={`h-8 w-8 object-contain md:h-10 md:w-10 ${invertedIcons.includes(skill.name) ? "dark:invert" : ""}`}
                          />
                        </div>
                      ) : (
                        <div className="flex h-14 items-center rounded-xl border border-border bg-card px-3 text-xs font-medium text-foreground shadow-md md:h-16">
                          {skill.name}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ) : (
            <div className="flex max-w-2xl flex-wrap justify-center gap-3">
              {activeSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
