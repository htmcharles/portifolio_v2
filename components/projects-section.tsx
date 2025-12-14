"use client"

import { useState } from "react"
import { Github, ExternalLink } from "lucide-react"

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("All")
  const [visibleCount, setVisibleCount] = useState(4)

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
      title: "Task Management: Streamlining Your Workflow",
      author: "Hatuma Charles",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      liveUrl: "#",
      githubUrl: "https://github.com/hatumacharles"
    },
    {
      title: "Weather Dashboard: Real-time Forecasts",
      author: "Hatuma Charles",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Python", "FastAPI", "OpenWeather API"],
      liveUrl: "#",
      githubUrl: "https://github.com/hatumacharles"
    },
    {
      title: "Social Media App: Building Connections",
      author: "Hatuma Charles",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "Firebase", "WebRTC", "PWA"],
      liveUrl: "#",
      githubUrl: "https://github.com/hatumacharles"
    },
    {
      title: "Finance Tracker: Personal Budgeting Made Easy",
      author: "Hatuma Charles",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Firebase", "Chart.js"],
      liveUrl: "#",
      githubUrl: "https://github.com/hatumacharles"
    },
    {
      title: "Blog Platform: Share Your Stories",
      author: "Hatuma Charles",
      image: "https://images.unsplash.com/photo-1499750310159-5b9887039e56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "Markdown", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/hatumacharles"
    },
    {
      title: "Fitness Tracker: Monitor Your Progress",
      author: "Hatuma Charles",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com/hatumacharles"
    },
    {
      title: "Recipe Finder: Discover New Tastes",
      author: "Hatuma Charles",
      image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "Spoonacular API", "CSS Modules"],
      liveUrl: "#",
      githubUrl: "https://github.com/hatumacharles"
    }
  ]

  const categories = ["All", "React", "Next.js", "TypeScript", "Node.js", "Python", "Vue.js", "Firebase", "PostgreSQL"]

  const filteredProjects = activeTab === "All"
    ? projects
    : projects.filter(project =>
      project.technologies.some(tech => tech.toLowerCase().includes(activeTab.toLowerCase()))
    )

  const displayedProjects = filteredProjects.slice(0, visibleCount)

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4)
  }

  return (
    <section id="projects" className="w-full bg-muted py-16 md:py-24">
      <div className="w-full pl-40 pr-40 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-[#7A3B3B] dark:text-[#A85C5C] mb-4 uppercase">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-light text-foreground leading-relaxed text-balance">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Explore my latest work and hover to see GitHub links
          </p>
        </div>

        {/* Technology Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setActiveTab(tag)
                setVisibleCount(4)
              }}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors cursor-pointer ${activeTab === tag
                ? "bg-[#7A3B3B] text-white border-[#7A3B3B]"
                : "bg-card text-muted-foreground border-border hover:border-[#7A3B3B] hover:text-[#7A3B3B] dark:hover:text-[#A85C5C] dark:hover:border-[#A85C5C]"
                }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-muted">
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
                      className="flex items-center gap-2 bg-card text-foreground px-6 py-3 rounded-full font-medium hover:bg-muted transition-colors"
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
                <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight group-hover:text-[#7A3B3B] dark:group-hover:text-[#A85C5C] transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 font-medium">
                  {project.author}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full group-hover:bg-[#7A3B3B]/10 group-hover:text-[#7A3B3B] dark:group-hover:text-[#A85C5C] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / Show Less Buttons */}
        <div className="flex justify-center gap-4 mt-12">
          {visibleCount < filteredProjects.length && (
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 bg-card text-foreground border border-border rounded-full font-medium hover:border-[#7A3B3B] hover:text-[#7A3B3B] dark:hover:text-[#A85C5C] dark:hover:border-[#A85C5C] transition-colors"
            >
              Load More Projects
            </button>
          )}

          {visibleCount > 4 && (
            <button
              onClick={() => setVisibleCount(4)}
              className="px-8 py-3 bg-card text-foreground border border-border rounded-full font-medium hover:border-[#7A3B3B] hover:text-[#7A3B3B] dark:hover:text-[#A85C5C] dark:hover:border-[#A85C5C] transition-colors"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  )
}