"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink, ChevronRight, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects, type ProjectCategory } from "@/lib/projects"

interface ProjectsSectionProps {
    featured?: boolean
}

export default function ProjectsSection({ featured = false }: ProjectsSectionProps) {
    const [activeTab, setActiveTab] = useState("All")
    const [visibleCount, setVisibleCount] = useState(featured ? 3 : 4)

    const categories: Array<"All" | ProjectCategory> = ["All", "Frontend", "Backend", "Fullstack", "Open Source"]
    const collection = featured ? projects.slice(0, 3) : projects
    const filteredProjects = featured || activeTab === "All"
        ? collection
        : collection.filter((project) => project.type === activeTab)
    const displayedProjects = featured ? filteredProjects : filteredProjects.slice(0, visibleCount)

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
                        {featured ? "Selected Projects" : "Project Archive"}
                    </h2>
                    <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                        {featured
                            ? "A curated snapshot of the work that best represents my current frontend and full-stack standards."
                            : "A deeper look at client-style builds, product interfaces, and systems work across the portfolio."}
                    </p>
                </div>

                {!featured && (
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
                )}

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
                                    <Image
                                        src={project.image}
                                        alt={`${project.title} project preview`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 hidden bg-black/60 opacity-0 transition-opacity duration-300 md:flex md:items-center md:justify-center md:backdrop-blur-sm md:group-hover:opacity-100">
                                        <div className="flex gap-4">
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 bg-card text-foreground px-6 py-3 rounded-full font-medium hover:bg-muted transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                                                >
                                                    <Github size={18} />
                                                    View Code
                                                </a>
                                            )}
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
                                                className="px-3 py-1 bg-muted/80 text-muted-foreground text-xs font-medium rounded-lg group-hover:bg-[#7A3B3B]/10 group-hover:text-[#7A3B3B] dark:group-hover:text-[#A85C5C] transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-5 flex flex-wrap gap-3 md:hidden">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                                            >
                                                <Github size={16} />
                                                View Code
                                            </a>
                                        )}
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full bg-[#7A3B3B] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#6a3333]"
                                        >
                                            <ExternalLink size={16} />
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="flex justify-center gap-4 mt-12">
                    {featured ? (
                        <Button
                            size="lg"
                            icon={<ChevronRight size={16} />}
                            className="px-8"
                            onClick={() => window.location.assign("/projects")}
                        >
                            View Full Portfolio
                        </Button>
                    ) : (
                        <>
                            {visibleCount < filteredProjects.length && (
                                <Button
                                    size="lg"
                                    icon={<ChevronRight size={16} />}
                                    onClick={handleLoadMore}
                                    className="px-8"
                                >
                                    Load More Projects
                                </Button>
                            )}

                            {visibleCount > 4 && (
                                <Button
                                    size="lg"
                                    icon={<ChevronUp size={16} />}
                                    onClick={() => setVisibleCount(4)}
                                    className="px-8"
                                >
                                    Show Less
                                </Button>
                            )}
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
