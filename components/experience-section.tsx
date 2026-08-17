import Timeline from "./timeline"
import { Reveal } from "@/components/reveal"

export default function ExperienceSection() {
  const experiences = [
    {
      period: "2025 — 2026",
      title: "Student Representative, Chairman",
      organization: "Rwanda Coding Academy · Kigali",
      description:
        "Elected student representative and chairman for the 2025–2026 term.",
      technologies: ["Leadership", "Representation"],
    },
    {
      period: "2023 — Present",
      title: "Software Engineering Training",
      organization: "Rwanda Coding Academy · Kigali",
      description:
        "Training across frontend, backend, DevOps, cybersecurity, AI/ML, embedded systems, and software testing — the RCA software engineering curriculum.",
      technologies: ["Frontend", "Backend", "DevOps", "Cybersecurity", "AI/ML", "Embedded", "Testing"],
    },
    {
      period: "2024 — 2025",
      title: "Workflow and operations software",
      organization: "Applied systems",
      description:
        "Built RCA E-Submit, CMSP, and SendIt — live systems for assignment intake, healthcare access, and booking operations. Each has a public URL.",
      technologies: ["Spring Boot", "Java", "MySQL", "PostgreSQL"],
    },
    {
      period: "2023 — 2025",
      title: "Public web products",
      organization: "Independent builds",
      description:
        "Shipped public marketing and product sites. Several are brand concepts for interface and SEO craft. Agaciro Health is a public product site at agacirohealth.com.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      period: "Competitions",
      title: "Leadership programs and contests",
      organization: "Wavumbuzi · Think Cyber / Cyberium · iLead · FIRST LEGO League · RMC / AIMS",
      description:
        "Wavumbuzi Entrepreneurship Challenge; Think Cyber / Cyberium courses; iLead Leadership Program; FIRST LEGO League national 2nd place and an international award in Morocco; RMC / AIMS National Mathematics Competition national finalist.",
      technologies: ["Entrepreneurship", "Cybersecurity", "Leadership", "Robotics", "Mathematics"],
    },
  ]

  return (
    <section id="experience" className="w-full bg-muted dark:bg-background/95 py-12 md:py-20 overflow-hidden scroll-mt-28">
      <div className="w-full px-4 md:px-6 max-w-7xl mx-auto">
        <Reveal className="text-center mb-6 md:mb-8">
          <p className="text-sm font-semibold tracking-widest text-[#7A3B3B] dark:text-[#A85C5C] mb-3 uppercase">Career Journey</p>
          <h2 className="text-3xl md:text-5xl font-light text-foreground leading-relaxed text-balance">
            Training, leadership, and shipped work
          </h2>
          <p className="text-muted-foreground text-lg mt-3 max-w-2xl mx-auto">
            Rwanda Coding Academy, student leadership, live projects, and competition results
          </p>
        </Reveal>

        <Reveal>
          <Timeline items={experiences} />
        </Reveal>
      </div>
    </section>
  )
}
