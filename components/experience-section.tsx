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
    <section id="experience" className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-16 md:py-24">
      <div className="w-full pl-40 pr-40 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-[#7A3B3B] mb-4 uppercase">Career Journey</p>
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 leading-relaxed text-balance">
            Professional Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#7A3B3B] hidden md:block"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-[#7A3B3B] rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Content */}
                <div className="md:ml-16 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <span className="text-sm font-medium text-[#7A3B3B] bg-[#7A3B3B]/10 px-3 py-1 rounded-full">
                      {exp.year}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-medium text-gray-700 mb-3">{exp.company}</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-neutral-100 text-gray-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}