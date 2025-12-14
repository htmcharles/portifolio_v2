import { Github, ExternalLink } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform: Modern Shopping Experience",
      author: "Hatuma Charles",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "https://github.com/hatumacharles"
    },
    {
      title: "Task Management: Streamlining Your Workflow with Real-time Updates",
      author: "Hatuma Charles", 
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      liveUrl: "#",
      githubUrl: "https://github.com/hatumacharles"
    },
    {
      title: "Weather Dashboard: Real-time Forecasts and Interactive Maps",
      author: "Hatuma Charles",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      technologies: ["React", "Python", "FastAPI", "OpenWeather API"],
      liveUrl: "#",
      githubUrl: "https://github.com/hatumacharles"
    },
    {
      title: "Social Media App: Building Connections with Modern Features",
      author: "Hatuma Charles",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "Firebase", "WebRTC", "PWA"],
      liveUrl: "#", 
      githubUrl: "https://github.com/hatumacharles"
    }
  ]

  return (
    <section id="projects" className="w-full bg-gray-50 py-16 md:py-24">
      <div className="w-full pl-40 pr-40 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-[#7A3B3B] mb-4 uppercase">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 leading-relaxed text-balance">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Explore my latest work and hover to see GitHub links
          </p>
        </div>

        {/* Technology Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["react", "nextjs", "typescript", "nodejs", "python", "vue", "firebase", "postgresql"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-white text-gray-600 text-sm font-medium rounded-full border border-gray-200 hover:border-[#7A3B3B] hover:text-[#7A3B3B] transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* GitHub Link Overlay - Appears on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#7A3B3B] text-white px-6 py-3 rounded-full font-medium hover:bg-[#6a3333] transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight group-hover:text-[#7A3B3B] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-500 text-sm mb-4 font-medium">
                  {project.author}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full group-hover:bg-[#7A3B3B]/10 group-hover:text-[#7A3B3B] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Projects */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white text-gray-700 border border-gray-200 rounded-full font-medium hover:border-[#7A3B3B] hover:text-[#7A3B3B] transition-colors">
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  )
}