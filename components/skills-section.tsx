export default function SkillsSection() {
  const skills = [
    { name: "React", level: 95, category: "Frontend" },
    { name: "Node.js", level: 90, category: "Backend" },
    { name: "TypeScript", level: 88, category: "Language" },
    { name: "Python", level: 85, category: "Language" },
    { name: "PostgreSQL", level: 82, category: "Database" },
    { name: "AWS", level: 78, category: "Cloud" },
    { name: "Docker", level: 80, category: "DevOps" },
    { name: "Next.js", level: 92, category: "Framework" },
  ]

  return (
    <section id="skills" className="w-full bg-neutral-100 py-16 md:py-24">
      <div className="w-full pl-40 pr-40 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-[#7A3B3B] mb-4 uppercase">Technical Skills</p>
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 leading-relaxed text-balance">
            Technologies I work with
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                <span className="text-sm text-[#7A3B3B] font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div 
                  className="bg-[#7A3B3B] h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-500 uppercase tracking-wide">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}