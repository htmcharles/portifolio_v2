import Timeline from "./timeline"

export default function ExperienceSection() {
  const experiences = [
    {
      period: "Current Focus",
      title: "Independent Full-Stack Development",
      organization: "Client-style builds and portfolio products",
      description:
        "Designed and shipped polished web products that improved brand presentation, product clarity, and launch-readiness across projects like TableSeven, Firmora, ChemCore, and Agaciro Health.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    },
    {
      period: "Platform Work",
      title: "Workflow and Operations Systems",
      organization: "Healthcare, education, and internal tooling",
      description:
        "Built systems for assignment intake, bookings, and internal visibility that centralized operational workflows across RCA E-Submit, CMSP, SendIt, and Ireme.",
      technologies: ["Spring Boot", "Java", "MySQL", "PostgreSQL"],
    },
    {
      period: "Frontend Delivery",
      title: "Marketing Sites and Product Interfaces",
      organization: "Business, healthcare, and service brands",
      description:
        "Produced responsive websites and product interfaces that strengthened first impressions, improved content hierarchy, and kept performance standards high for real-world launches.",
      technologies: ["React", "Next.js", "JavaScript", "CSS"],
    },
    {
      period: "Technical Foundation",
      title: "Backend and Product Engineering Practice",
      organization: "Self-directed learning and applied builds",
      description:
        "Strengthened core engineering skills through iterative product work and backend experiments, building repeatable fluency in API design, relational data, deployment, and debugging.",
      technologies: ["Node.js", "Hibernate", "Git", "REST APIs"],
    },
  ]

  return (
    <section id="experience" className="w-full bg-muted dark:bg-background/95 py-12 md:py-20 overflow-hidden scroll-mt-28" >
      <div className="w-full px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <p className="text-sm font-semibold tracking-widest text-[#7A3B3B] dark:text-[#A85C5C] mb-3 uppercase">Career Journey</p>
          <h2 className="text-3xl md:text-5xl font-light text-foreground leading-relaxed text-balance">
            Experience Through Shipped Work
          </h2>
          <p className="text-muted-foreground text-lg mt-3 max-w-2xl mx-auto">
            A factual overview of the projects, systems, and technical growth reflected in this portfolio
          </p>
        </div>

        <Timeline items={experiences} />
      </div>
    </section >
  )
}
