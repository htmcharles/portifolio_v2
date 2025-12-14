"use client"

import { motion } from "framer-motion"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Hatuma delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise are outstanding.",
      author: "Sarah Johnson",
      role: "CEO, TechStart",
    },
    {
      quote:
        "Working with Hatuma was a game-changer for our project. He transformed our complex requirements into a beautiful, functional application.",
      author: "Mark Thompson",
      role: "Product Manager, InnovateCorp",
    },
    {
      quote:
        "Hatuma's full-stack skills and problem-solving abilities helped us launch our MVP ahead of schedule. Highly recommended!",
      author: "Emily Chen",
      role: "Founder, StartupLab",
    },
    {
      quote:
        "The attention to detail and performance optimization provided by Hatuma significantly improved our user retention rates.",
      author: "David Wilson",
      role: "CTO, WebScale",
    },
    {
      quote:
        "A true professional who communicates clearly and delivers high-quality code. I would definitely work with Hatuma again.",
      author: "Jessica Lee",
      role: "Director, Creative Solutions",
    }
  ]

  // Duplicate testimonials to create a seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="w-full bg-background py-16 md:py-24 overflow-hidden">
      <div className="w-full max-w-full">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16 px-4">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#7A3B3B] dark:text-[#A85C5C]">What Clients Say</p>
          <h2 className="text-balance text-4xl font-light md:text-5xl text-foreground">Real Stories. Real Impact</h2>
        </div>

        {/* Testimonials Marquee */}
        <div className="relative w-full flex overflow-hidden mask-gradient">
          {/* Gradient Masks for smooth fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

          <motion.div
            className="flex gap-8 px-4"
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30, // Adjust speed here
            }}
            whileHover={{ animationPlayState: "paused" }} // Optional: pause on hover if using CSS animation, but for framer motion we need a different approach or just let it flow
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[350px] md:w-[450px] flex flex-col items-start space-y-4 rounded-lg border border-border bg-card p-6 md:p-8 hover:shadow-md transition-shadow"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg text-[#7A3B3B] dark:text-[#A85C5C]">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base italic">"{testimonial.quote}"</p>

                {/* Author */}
                <div className="mt-auto pt-4">
                  <p className="text-sm font-bold text-foreground">
                    — {testimonial.author}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
