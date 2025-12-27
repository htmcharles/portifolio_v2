"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink, Calendar, Building2 } from "lucide-react"

export default function CertificatesSection() {
    const certificates = [
        {
            title: "Full Stack Web Development",
            issuer: "Meta (via Coursera)",
            date: "2023",
            link: "#",
            description: "Advanced certification covering modern frontend and backend technologies including React, Django, and cloud deployment."
        },
        {
            title: "AWS Certified Developer – Associate",
            issuer: "Amazon Web Services",
            date: "2023",
            link: "#",
            description: "Hands-on experience with AWS services, including Lambda, DynamoDB, API Gateway, and S3 for scalable applications."
        },
        {
            title: "Professional Java Developer",
            issuer: "Oracle",
            date: "2022",
            link: "#",
            description: "Comprehensive certification on Java SE, covering OOP principles, collections, concurrency, and database connectivity."
        },
        {
            title: "Responsive Web Design",
            issuer: "freeCodeCamp",
            date: "2021",
            link: "#",
            description: "In-depth training on HTML5, CSS3, Flexbox, and Grid to build modern, mobile-first web applications."
        }
    ];

    return (
        <section id="certificates" className="w-full bg-muted/30 dark:bg-background/95 py-16 md:py-24 relative overflow-hidden scroll-mt-28">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-[#7A3B3B]/5 dark:bg-[#A85C5C]/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] left-[10%] w-64 h-64 bg-primary/5 dark:bg-primary/2 rounded-full blur-[100px]" />
            </div>

            <div className="w-full px-4 md:px-6 max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold tracking-widest text-[#7A3B3B] dark:text-[#A85C5C] mb-4 uppercase">Achievements</p>
                    <h2 className="text-3xl md:text-5xl font-light text-foreground leading-relaxed text-balance">
                        Certifications & Awards
                    </h2>
                    <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                        Professional milestones and technical validations of my expertise
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-background dark:bg-card/40 hover:bg-muted/50 dark:hover:bg-card/60 border border-border/50 dark:border-border/20 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="flex items-start gap-6">
                                <div className="hidden sm:flex shrink-0 w-16 h-16 rounded-xl bg-[#7A3B3B]/10 dark:bg-[#A85C5C]/10 items-center justify-center text-[#7A3B3B] dark:text-[#A85C5C] group-hover:bg-[#7A3B3B] dark:group-hover:bg-[#A85C5C] group-hover:text-white transition-all duration-300">
                                    <Award size={32} />
                                </div>

                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-semibold text-foreground group-hover:text-[#7A3B3B] dark:group-hover:text-[#A85C5C] transition-colors duration-300">
                                            {cert.title}
                                        </h3>
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground hover:text-[#7A3B3B] dark:hover:text-[#A85C5C] transition-all duration-300"
                                            aria-label="View Certificate"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>

                                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground font-medium">
                                        <span className="flex items-center gap-1.5">
                                            <Building2 size={14} className="text-[#7A3B3B] dark:text-[#A85C5C]" />
                                            {cert.issuer}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Calendar size={14} className="text-[#7A3B3B] dark:text-[#A85C5C]" />
                                            {cert.date}
                                        </span>
                                    </div>

                                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                                        {cert.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
