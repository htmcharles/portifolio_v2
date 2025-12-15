"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink, X } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type ProjectCategory = "Full Stack" | "Frontend" | "Backend" | "Mobile" | "AI/ML"

interface Project {
    id: number
    title: string
    category: ProjectCategory
    shortDesc: string
    fullDesc: string
    tags: string[]
    githubUrl: string
    liveUrl?: string
    image: string
}

const projects: Project[] = [
    {
        id: 1,
        title: "E-Commerce Dashboard",
        category: "Full Stack",
        shortDesc: "A comprehensive dashboard for managing online stores with real-time analytics.",
        fullDesc: "This project is a robust e-commerce management system built with Next.js and Supabase. It features real-time inventory tracking, sales analytics visualized with Recharts, and a seamless order management flow. The system uses Stripe for payment processing and includes a customer support chat module.",
        tags: ["Next.js", "Supabase", "Tailwind CSS", "Stripe"],
        githubUrl: "https://github.com/hatumacharles",
        image: "/images/project-1.jpg", // Placeholder
    },
    {
        id: 2,
        title: "Task Master AI",
        category: "AI/ML",
        shortDesc: "Smart task management app that uses AI to prioritize your daily schedule.",
        fullDesc: "Task Master AI integrates OpenAI's GPT-4 to analyze user tasks and deadlines, suggesting optimized schedules. It features a drag-and-drop interface, voice command input, and integration with Google Calendar. The backend is powered by Python/FastAPI for efficient ML processing.",
        tags: ["React", "Python", "FastAPI", "OpenAI API"],
        githubUrl: "https://github.com/hatumacharles",
        image: "/images/project-2.jpg",
    },
    {
        id: 3,
        title: "Social Connect App",
        category: "Mobile",
        shortDesc: "Cross-platform mobile application for community event planning.",
        fullDesc: "Built with React Native and Expo, this app allows local communities to organize events. Features include real-time location sharing, push notifications, and offline support. It uses Firebase for the backend to ensure real-time data synchronization across all devices.",
        tags: ["React Native", "Firebase", "Redux", "Expo"],
        githubUrl: "https://github.com/hatumacharles",
        image: "/images/project-3.jpg",
    },
    {
        id: 4,
        title: "Portfolio v1",
        category: "Frontend",
        shortDesc: "The first iteration of my personal portfolio with 3D elements.",
        fullDesc: "An immersive 3D portfolio website built using Three.js and React Three Fiber. It features a navigable 3D world where users can explore my projects as interactive exhibits. Optimized for performance using WebGL best practices.",
        tags: ["Three.js", "React", "WebGL", "GSAP"],
        githubUrl: "https://github.com/hatumacharles",
        image: "/images/project-4.jpg",
    },
    {
        id: 5,
        title: "API Gateway Service",
        category: "Backend",
        shortDesc: "High-performance API gateway with rate limiting and caching.",
        fullDesc: "A custom API gateway service written in Go. It handles request routing, JWT authentication, rate limiting using Redis, and response caching. Designed to handle high-throughput traffic for microservices architectures.",
        tags: ["Go", "Redis", "Docker", "gRPC"],
        githubUrl: "https://github.com/hatumacharles",
        image: "/images/project-5.jpg",
    }
]

const categories: ProjectCategory[] = ["Full Stack", "Frontend", "Backend", "Mobile", "AI/ML"]

export default function ProjectsSection() {
    const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All")
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory)

    return (
        <section id="projects" className="w-full bg-muted/30 py-20 md:py-32 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-[#7A3B3B]/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-12">
                    <p className="text-sm font-semibold tracking-widest text-[#7A3B3B] dark:text-[#A85C5C] mb-4 uppercase">
                        My Portfolio
                    </p>
                    <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6">Featured Projects</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A selection of projects that demonstrate my passion for building solvable, scalable, and user-centric solutions.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex justify-center flex-wrap gap-2 mb-12">
                    <button
                        onClick={() => setActiveCategory("All")}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === "All"
                                ? "bg-primary text-primary-foreground shadow-md"
                                : "bg-background text-muted-foreground hover:bg-muted"
                            }`}
                    >
                        All
                    </button>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                                    ? "bg-primary text-primary-foreground shadow-md"
                                    : "bg-background text-muted-foreground hover:bg-muted"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.8, y: 50, rotateX: -15 }}
                                animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 20,
                                    mass: 1,
                                    delay: index * 0.1 // Stagger effect
                                }}
                                className="group relative bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col h-full"
                            >
                                {/* Project Image Area (Gradient Placeholder for now if no image) */}
                                <div className="h-48 w-full bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                    {/* Placeholder content since we might not have actual images yet */}
                                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-bold text-4xl uppercase tracking-widest select-none">
                                        Project
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <Badge variant="secondary" className="mb-2 hover:bg-secondary/80">{project.category}</Badge>
                                            <h3 className="text-xl font-semibold text-foreground group-hover:text-[#7A3B3B] transition-colors">{project.title}</h3>
                                        </div>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-full"
                                            title="View Code on GitHub"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>

                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                                        {project.shortDesc}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-border/50 flex flex-wrap gap-2">
                                        {project.tags.slice(0, 3).map(tag => (
                                            <span key={tag} className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-md">#{tag}</span>
                                        ))}
                                        {project.tags.length > 3 && (
                                            <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-md">+{project.tags.length - 3}</span>
                                        )}
                                    </div>

                                    <div className="mt-6">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="outline" className="w-full hover:bg-[#7A3B3B] hover:text-white transition-colors">
                                                    View Details
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-2xl">
                                                <DialogHeader>
                                                    <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
                                                    <DialogDescription className="text-base text-muted-foreground flex items-center gap-2 mt-2">
                                                        <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wide">{project.category}</span>
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <div className="mt-4">
                                                    <div className="h-64 w-full bg-muted rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                                                        <div className="text-muted-foreground/30 font-bold text-6xl uppercase tracking-widest select-none">
                                                            Preview
                                                        </div>
                                                    </div>
                                                    <div className="prose dark:prose-invert max-w-none">
                                                        <h4 className="text-lg font-semibold mb-2">About Project</h4>
                                                        <p className="text-muted-foreground leading-relaxed mb-6">
                                                            {project.fullDesc}
                                                        </p>

                                                        <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                                                        <div className="flex flex-wrap gap-2 mb-8">
                                                            {project.tags.map(tag => (
                                                                <Badge key={tag} variant="outline" className="text-sm py-1 px-3">
                                                                    {tag}
                                                                </Badge>
                                                            ))}
                                                        </div>

                                                        <div className="flex gap-4">
                                                            <Button asChild size="lg" className="w-full sm:w-auto">
                                                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                                                    <Github size={18} />
                                                                    View on GitHub
                                                                </a>
                                                            </Button>
                                                            {project.liveUrl && (
                                                                <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                                                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                                                        <ExternalLink size={18} />
                                                                        Live Demo
                                                                    </a>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    )
}
