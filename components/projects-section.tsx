"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

export default function ProjectsSection() {
    const [activeTab, setActiveTab] = useState("All")
    const [visibleCount, setVisibleCount] = useState(4)

    const projects = [
        {
            title: "CMSP Hospital System",
            description: "A hospital platform for appointment scheduling, doctor discovery, and healthcare information access.",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            technologies: ["React", "Node.js", "CSS"],
            liveUrl: "https://clinique-medical-st-paul.onrender.com/",
            githubUrl: "https://github.com/htmcharles",
            type: "Fullstack"
        },
        {
            title: "RCA E-Submit",
            description: "Online assignment submission system for students and teachers with tracking and lifecycle management.",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            technologies: ["Java", "Hibernate", "JSP", "MySQL"],
            liveUrl: "https://e-submit.onrender.com",
            githubUrl: "https://github.com/htmcharles",
            type: "Fullstack"
        },
        {
            title: "OSS Weather",
            description: "Open-source weather app with multiple providers and interactive radar support.",
            image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            technologies: ["Svelte", "TypeScript", "JavaScript"],
            liveUrl: "https://oss-weather.onrender.com",
            githubUrl: "https://github.com/htmcharles",
            type: "Open Source"
        },
        {
            title: "Agaciro Health",
            description: "Healthcare platform with real-time vitals monitoring, appointments, and medical records.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            technologies: ["Next.js"],
            liveUrl: "https://agacirohealth.com/",
            githubUrl: "https://github.com/htmcharles",
            type: "Frontend"
        },
        {
            title: "Ecommerce Dashboard",
            description: "Admin dashboard for managing products, orders, and customers with dark mode support.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            technologies: ["Next.js", "Tailwind CSS", "Prisma"],
            liveUrl: "#",
            githubUrl: "https://github.com/htmcharles",
            type: "Fullstack"
        },
        {
            title: "Travel Companion",
            description: "Mobile application for planning trips, sharing itineraries, and finding local gems.",
            image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            technologies: ["React Native", "Expo", "Firebase"],
            liveUrl: "#",
            githubUrl: "https://github.com/htmcharles",
            type: "Mobile"
        },
        {
            title: "Finance Tracker",
            description: "Personal finance management tool with income/expense charting and budget goals.",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            technologies: ["Vue.js", "Chart.js", "Express"],
            liveUrl: "#",
            githubUrl: "https://github.com/htmcharles",
            type: "Frontend"
        },
        {
            title: "Chat Application",
            description: "Real-time messaging platform with group support and file sharing capabilities.",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            technologies: ["Socket.io", "React", "MongoDB"],
            liveUrl: "#",
            githubUrl: "https://github.com/htmcharles",
            type: "Backend"
        }
    ]

    const categories = ["All", "Frontend", "Backend", "Fullstack", "Open Source", "Mobile"]

    const filteredProjects = activeTab === "All"
        ? projects
        : projects.filter(project => project.type === activeTab)

    const displayedProjects = filteredProjects.slice(0, visibleCount)

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 4)
    }

    return (
        <section id="projects" className="w-full bg-background py-16 md:py-24 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-[#7A3B3B]/5 rounded-full blur-[100px]" />
            </div>

            <div className="w-full px-4 md:px-6 max-w-7xl mx-auto relative z-10">
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
                <div className="flex justify-center mb-12">
                    <div className="bg-muted rounded-xl p-1 flex gap-1 flex-wrap">
                        {categories.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => {
                                    setActiveTab(tag)
                                    setVisibleCount(4)
                                }}
                                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === tag
                                    ? "bg-background text-[#7A3B3B] dark:text-[#A85C5C] shadow-sm"
                                    : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Project Cards Grid with Animations */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {displayedProjects.map((project, index) => (
                            <motion.div
                                layout
                                key={`${project.title}-${index}`} // Unique key for animation stability
                                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 20,
                                    mass: 1,
                                    delay: index * 0.1
                                }}
                                className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-full border border-border/50"
                            >
                                {/* Project Image */}
                                <div className="relative h-64 overflow-hidden bg-muted">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />

                                    {/* GitHub Link Overlay - Appears on Hover */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                                        <div className="flex gap-4">
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 bg-card text-foreground px-6 py-3 rounded-full font-medium hover:bg-muted transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                                            >
                                                <Github size={18} />
                                                View Code
                                            </a>
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 bg-[#7A3B3B] text-white px-6 py-3 rounded-full font-medium hover:bg-[#6a3333] transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-100"
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

                                    <p className="text-muted-foreground text-sm mb-4 font-medium line-clamp-3 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-muted/80 text-muted-foreground text-xs font-medium rounded-[18px] group-hover:bg-[#7A3B3B]/10 group-hover:text-[#7A3B3B] dark:group-hover:text-[#A85C5C] transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

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
