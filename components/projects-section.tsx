"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink, ChevronRight, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getArchiveProjects, getFeaturedProjects, kindLabel, type ProjectCategory } from "@/lib/projects"
import { Reveal } from "@/components/reveal"
import { easeOut } from "@/lib/motion"

interface ProjectsSectionProps {
    featured?: boolean
}

export default function ProjectsSection({ featured = false }: ProjectsSectionProps) {
    const router = useRouter()
    const [activeTab, setActiveTab] = useState("All")
    const [visibleCount, setVisibleCount] = useState(featured ? 3 : 4)

    const categories: Array<"All" | ProjectCategory> = ["All", "Frontend", "Backend", "Fullstack", "Open Source"]
    const collection = featured ? getFeaturedProjects() : getArchiveProjects()
    const filteredProjects = featured || activeTab === "All"
        ? collection
        : collection.filter((project) => project.type === activeTab)
    const displayedProjects = featured ? filteredProjects : filteredProjects.slice(0, visibleCount)

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 4)
    }

    return (
        <section id="projects" className="w-full bg-background py-16 md:py-24 relative overflow-hidden scroll-mt-28">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-[#7A3B3B]/5 rounded-full blur-[100px]" />
            </div>

            <div className="w-full px-4 md:px-6 max-w-7xl mx-auto relative z-10">
                <Reveal className="text-center mb-16">
                    <p className="text-sm font-semibold tracking-widest text-[#7A3B3B] dark:text-[#A85C5C] mb-4 uppercase">Portfolio</p>
                    <h2 className="text-3xl md:text-5xl font-light text-foreground leading-relaxed text-balance">
                        {featured ? "Selected Projects" : "Project Archive"}
                    </h2>
                    <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                        {featured
                            ? "Applied systems with public URLs: healthcare access, RCA submissions, and booking operations."
                            : "Applied systems first, then open source, then brand-concept sites. Every card has a live URL."}
                    </p>
                </Reveal>

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
                    className="grid grid-cols-1 gap-8 md:grid-cols-2"
                >
                    <AnimatePresence mode="popLayout">
                        {displayedProjects.map((project, index) => (
                            <motion.div
                                layout
                                key={`${project.title}-${index}`} // Unique key for animation stability
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 12, transition: { duration: 0.18 } }}
                                transition={{
                                    duration: 0.5,
                                    delay: Math.min(index, 5) * 0.06,
                                    ease: easeOut,
                                }}
                                className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[1.75rem] border border-border/50 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-card/95"
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

                                    <div className="absolute left-4 top-4 z-10 flex flex-wrap items-center gap-2">
                                        <span className="rounded-full bg-black/70 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-white uppercase backdrop-blur-sm">
                                            {project.type}
                                        </span>
                                        <span className="rounded-full bg-white/85 px-3 py-1 text-[11px] font-medium text-foreground backdrop-blur-sm dark:bg-black/70 dark:text-white">
                                            {kindLabel(project.kind)}
                                        </span>
                                        <span className="rounded-full bg-white/85 px-3 py-1 text-[11px] font-medium text-foreground backdrop-blur-sm dark:bg-black/70 dark:text-white">
                                            {project.year}
                                        </span>
                                    </div>

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
                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight group-hover:text-[#7A3B3B] dark:group-hover:text-[#A85C5C] transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="mb-4 text-sm font-medium leading-relaxed text-muted-foreground">
                                        {project.tagline}
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

                                    <div className="mt-5 grid gap-3 rounded-2xl bg-muted/50 p-4 dark:bg-muted/35">
                                        <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
                                            <span>{project.duration}</span>
                                            <span>{project.client}</span>
                                        </div>
                                        <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
                                            {project.summary}
                                        </p>
                                    </div>

                                    <div className="mt-5 flex items-center justify-between gap-4">
                                        <Link
                                            href={`/projects/${project.slug}`}
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-[#7A3B3B] dark:hover:text-[#A85C5C]"
                                        >
                                            Case Study
                                            <ChevronRight size={16} />
                                        </Link>
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
                            onClick={() => router.push("/projects")}
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
