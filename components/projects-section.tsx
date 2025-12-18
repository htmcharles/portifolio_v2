"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink, ChevronRight, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsSection() {
    const [activeTab, setActiveTab] = useState("All")
    const [visibleCount, setVisibleCount] = useState(4)

    const projects = [
        {
            title: "Veloria",
            description: "Veloria is a modern, high-performance restaurant website designed to offer an immersive digital experience that mirrors the elegance of fine dining. Built with Next.js 14 (App Router) and TypeScript, the application prioritizes speed, SEO, and visual fidelity.",
            image: "/projects/veloria.png",
            technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
            liveUrl: "https://veloria-flax.vercel.app/",
            githubUrl: "https://github.com/htmcharles",
            type: "Frontend"
        },
        {
            title: "Cubicles",
            description: "Cubicles is a modern, high-performance corporate website designed for a professional business consulting firm. Built to establish a strong digital presence, the platform showcases expertise across International Business, Marketing Research, Finance Consulting, and Human Resources.",
            image: "/projects/cubicles.png",
            technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
            liveUrl: "https://cubicles-sigma.vercel.app",
            githubUrl: "https://github.com/htmcharles",
            type: "Frontend"
        },
        {
            title: "Synthorix",
            description: "Leading chemical supply company platform providing reliable, high-quality chemical solutions for agriculture, healthcare, food, and textile industries.",
            image: "/projects/synthorix.png",
            technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
            liveUrl: "https://synthorix.vercel.app",
            githubUrl: "https://github.com/htmcharles",
            type: "Frontend"
        },
        {
            title: "Stratex",
            description: "Expert consulting platform that drives real growth. Elevate your business with expert insights, tailored strategies, and unwavering support through our digital services.",
            image: "/projects/stratex.png",
            technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
            liveUrl: "https://stratex-pi.vercel.app",
            githubUrl: "https://github.com/htmcharles",
            type: "Frontend"
        },
        {
            title: "Refit",
            description: "Your trusted partner for quality home improvement. This platform connects homeowners with expert craftsmanship to create beautiful and functional living spaces.",
            image: "/projects/refit.png",
            technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
            liveUrl: "https://refit-beta.vercel.app",
            githubUrl: "https://github.com/htmcharles",
            type: "Frontend"
        },
        {
            title: "Perform",
            description: "A triathlon coaching platform designed to improve athlete performance. It offers personalized training plans and tracking to help athletes reach their competitive goals.",
            image: "/projects/perform.png",
            technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
            liveUrl: "https://perform-alpha.vercel.app",
            githubUrl: "https://github.com/htmcharles",
            type: "Frontend"
        },
        {
            title: "Landio",
            description: "A modern landing page application designed for SaaS products. It features sections for data analysis, success stories, pricing, and feature comparisons to effectively convert visitors.",
            image: "/projects/landio.png",
            technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
            liveUrl: "https://landio-dun.vercel.app",
            githubUrl: "https://github.com/htmcharles",
            type: "Frontend"
        },
        {
            title: "CMSP",
            description: "A hospital website dedicated to providing comprehensive healthcare information, helping patients access medical services, schedule appointments, and connect with expert doctors.",
            image: "/projects/carrent.png",
            technologies: ["React", "Node.js", "CSS"],
            liveUrl: "https://clinique-medical-st-paul.onrender.com/",
            githubUrl: "https://github.com/htmcharles",
            type: "Fullstack"
        },
        {
            title: "OSS Weather",
            description: "An Open Source weather application integrating multiple weather data providers (OpenWeather, Open-Meteo, Meteo France) with interactive weather radar by RainViewer. Features customizable OpenWeather API integration and comprehensive weather forecasting capabilities.",
            image: "/projects/ossweather.png",
            technologies: ["Svelte", "TypeScript", "JavaScript"],
            liveUrl: "https://oss-weather.onrender.com",
            githubUrl: "https://github.com/htmcharles",
            type: "Open Source"
        },
        {
            title: "RCA E-Submit",
            description: "An online assignment submission system used by Rwanda Coding Academy for managing student assignments. Features include assignment submission tracking, student-teacher interaction, automated grading, and comprehensive assignment lifecycle management using MySQL database.",
            image: "/projects/e_submit.png",
            technologies: ["Hibernate", "JSP", "MySQL"],
            liveUrl: "https://e-submit.onrender.com",
            githubUrl: "https://github.com/htmcharles",
            type: "Backend"
        },
        {
            title: "SendIt",
            description: "A comprehensive hotel booking system that allows users to book rooms, manage bookings, and handle payments. Features include staff management, booking calendar, payment processing, and administrative dashboard for hotel operations.",
            image: "/projects/sendit.png",
            technologies: ["Spring Boot", "PostgreSQL", "Java"],
            liveUrl: "https://sendit.onrender.com",
            githubUrl: "https://github.com/htmcharles",
            type: "Backend"
        },
        {
            title: "Ireme",
            description: "A skill management system designed to showcase and track employees' skills, projects, and experience within an organization. Users can explore team members' skill sets, view completed work, and assess individual growth.",
            image: "/projects/ireme.png",
            technologies: ["React", "CSS", "JavaScript"],
            liveUrl: "https://ireme.onrender.com/",
            githubUrl: "https://github.com/htmcharles",
            type: "Fullstack"
        },
        {
            title: "Foodhome",
            description: "Restaurant website designed to showcase a diverse menu, highlight special dishes, and provide an easy way for customers to explore dining options, make reservations, and order online.",
            image: "/projects/foodbase.png",
            technologies: ["HTML", "CSS", "JavaScript"],
            liveUrl: "https://foodbase.onrender.com",
            githubUrl: "https://github.com/htmcharles",
            type: "Frontend"
        },
        {
            title: "Agaciro Health",
            description: "A comprehensive healthcare platform with mobile app that enables users to monitor and trust the health of their loved ones. Features include real-time vital signs tracking, appointment scheduling, and health records management.",
            image: "/projects/agacirohealth.png",
            technologies: ["Next.js"],
            liveUrl: "https://agacirohealth.com/",
            githubUrl: "https://github.com/htmcharles",
            type: "Frontend"
        }
    ]

    const categories = ["All", "Frontend", "Backend", "Fullstack", "Open Source"]

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
                                                className="px-3 py-1 bg-muted/80 text-muted-foreground text-xs font-medium rounded-lg group-hover:bg-[#7A3B3B]/10 group-hover:text-[#7A3B3B] dark:group-hover:text-[#A85C5C] transition-colors"
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
                </div>
            </div>
        </section>
    )
}
