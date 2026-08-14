import Timeline from "./timeline"

export default function ExperienceSection() {
  const experiences = [
    {
      period: "Rwanda Coding Academy",
      title: "Software Engineering Training",
      organization: "Kigali, Rwanda",
      description:
        "Trained across frontend, backend, DevOps, cybersecurity, AI/ML, embedded systems, and software testing — the full RCA software engineering curriculum.",
      technologies: ["Frontend", "Backend", "DevOps", "Cybersecurity", "AI/ML", "Embedded", "Testing"],
    },
    {
      period: "Independent Delivery",
      title: "Websites, Products, and Interfaces",
      organization: "Client-style builds and portfolio products",
      description:
        "Designed and shipped public web products including TableSeven, Firmora, ChemCore, and Agaciro Health, with live URLs for each build.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    },
    {
      period: "Systems Work",
      title: "Workflow and Operations Software",
      organization: "Healthcare, education, and internal tooling",
      description:
        "Built systems for assignment intake, bookings, and internal visibility across RCA E-Submit, CMSP, SendIt, and Ireme.",
      technologies: ["Spring Boot", "Java", "MySQL", "PostgreSQL"],
    },
    {
      period: "ThinkCyber",
      title: "Cybersecurity Training",
      organization: "Cyberium Arena",
      description:
        "Completed Intro to Cyber, Linux Fundamentals, Python Fundamentals, and Network Research with ThinkCyber / Cyberium Arena in 2024.",
      technologies: ["Linux", "Python", "Networking", "Cybersecurity"],
    },
  ]

  return (
    <section id="experience" className="w-full bg-muted dark:bg-background/95 py-12 md:py-20 overflow-hidden scroll-mt-28">
      <div className="w-full px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <p className="text-sm font-semibold tracking-widest text-[#7A3B3B] dark:text-[#A85C5C] mb-3 uppercase">Career Journey</p>
          <h2 className="text-3xl md:text-5xl font-light text-foreground leading-relaxed text-balance">
            Training and shipped work
          </h2>
          <p className="text-muted-foreground text-lg mt-3 max-w-2xl mx-auto">
            Rwanda Coding Academy, ThinkCyber credentials, and the live projects in this portfolio
          </p>
        </div>

        <Timeline items={experiences} />
      </div>
    </section>
  )
}
