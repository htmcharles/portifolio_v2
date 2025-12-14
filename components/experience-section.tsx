import Timeline from "./timeline"

export default function ExperienceSection() {
  const experiences = [
    {
      year: "2023 - Present",
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting system solutions.",
      technologies: ["React", "Node.js", "AWS", "TypeScript"]
    },
    {
      year: "2021 - 2023",
      title: "Full-Stack Developer",
      company: "Digital Innovations Ltd",
      description: "Developed and maintained multiple client projects, focusing on performance optimization and user experience improvements.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"]
    },
    {
      year: "2020 - 2021",
      title: "Frontend Developer",
      company: "StartupHub",
      description: "Built responsive web applications and collaborated with design teams to create intuitive user interfaces for various startup projects.",
      technologies: ["React", "JavaScript", "CSS", "Firebase"]
    },
    {
      year: "2019 - 2020",
      title: "Junior Developer",
      company: "CodeCraft Agency",
      description: "Started my professional journey learning modern web development practices and contributing to team projects under senior guidance.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"]
    }
  ]

  return (
    <section id="experience" className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-16 md:py-24 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-[#7A3B3B] mb-4 uppercase">Career Journey</p>
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 leading-relaxed text-balance">
            Professional Experience
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            A timeline of my professional growth and milestones
          </p>
        </div>

        <Timeline items={experiences} autoLoop={false} />
      </div>
    </section>
  )
}