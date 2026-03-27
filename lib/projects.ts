export type ProjectCategory = "Frontend" | "Backend" | "Fullstack" | "Open Source"

export interface Project {
  slug: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl?: string
  type: ProjectCategory
}

export const projects: Project[] = [
  {
    slug: "tableseven",
    title: "TableSeven",
    description:
      "High-performance restaurant website built with Next.js and TypeScript to deliver strong SEO, fast load times, and premium visual polish for hospitality brands.",
    image: "/projects/veloria.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://tables7.vercel.app",
    type: "Frontend",
  },
  {
    slug: "firmora",
    title: "Firmora",
    description:
      "Corporate website for a consulting firm focused on credibility, clarity, and a polished service presentation across business strategy disciplines.",
    image: "/projects/cubicles.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://firmora.vercel.app",
    type: "Frontend",
  },
  {
    slug: "chemcore",
    title: "ChemCore",
    description:
      "Industrial company website designed to communicate product reliability, sector expertise, and modern digital trust signals for chemical supply operations.",
    image: "/projects/synthorix.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://chemcore-v2.vercel.app",
    type: "Frontend",
  },
  {
    slug: "consultedge",
    title: "ConsultEdge",
    description:
      "Consulting platform built to position strategic advisory services with strong messaging hierarchy, conversion-focused layout, and responsive performance.",
    image: "/projects/stratex.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://consultedge.vercel.app",
    type: "Frontend",
  },
  {
    slug: "buildnest",
    title: "BuildNest",
    description:
      "Home improvement website that pairs visual trust-building with a clear service funnel for homeowners looking for reliable project delivery.",
    image: "/projects/refit.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://hc-buildnest.vercel.app",
    type: "Frontend",
  },
  {
    slug: "athletiq",
    title: "Athletiq",
    description:
      "Triathlon coaching experience focused on athlete performance, training-plan clarity, and a lightweight interface for competitive users.",
    image: "/projects/perform.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://athleticq.vercel.app",
    type: "Frontend",
  },
  {
    slug: "producta",
    title: "Producta",
    description:
      "SaaS landing page optimized for feature storytelling, pricing communication, and product-led conversion flows.",
    image: "/projects/landio.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://hc-producta.vercel.app",
    type: "Frontend",
  },
  {
    slug: "cmsp",
    title: "CMSP",
    description:
      "Healthcare platform that helps patients discover services, browse medical information, and connect with care providers through a structured interface.",
    image: "/projects/carrent.png",
    technologies: ["React", "Node.js", "CSS"],
    liveUrl: "https://clinique-medical-st-paul.onrender.com/",
    githubUrl: "https://github.com/htmcharles/HOSPITAL-MANAGEMENT-SYSTEM",
    type: "Fullstack",
  },
  {
    slug: "oss-weather",
    title: "OSS Weather",
    description:
      "Open-source weather application that combines multiple forecast providers and radar data into a configurable forecasting interface.",
    image: "/projects/ossweather.png",
    technologies: ["Svelte", "TypeScript", "JavaScript"],
    liveUrl: "https://oss-weather.onrender.com",
    githubUrl: "https://github.com/htmcharles/oss-weather",
    type: "Open Source",
  },
  {
    slug: "rca-e-submit",
    title: "RCA E-Submit",
    description:
      "Assignment submission workflow for Rwanda Coding Academy that centralizes submissions, review, and grading coordination in one system.",
    image: "/projects/e_submit.png",
    technologies: ["Hibernate", "JSP", "MySQL"],
    liveUrl: "https://e-submit.onrender.com",
    githubUrl: "https://github.com/htmcharles/Submission_java",
    type: "Backend",
  },
  {
    slug: "sendit",
    title: "SendIt",
    description:
      "Booking and operations backend for hospitality workflows, covering reservations, payments, scheduling, and administrative visibility.",
    image: "/projects/sendit.png",
    technologies: ["Spring Boot", "PostgreSQL", "Java"],
    liveUrl: "https://sendit.onrender.com",
    type: "Backend",
  },
  {
    slug: "ireme",
    title: "Ireme",
    description:
      "Internal skill management interface that helps teams surface employee experience, projects, and growth signals across an organization.",
    image: "/projects/ireme.png",
    technologies: ["React", "CSS", "JavaScript"],
    liveUrl: "https://ireme.onrender.com/",
    type: "Fullstack",
  },
  {
    slug: "foodhome",
    title: "Foodhome",
    description:
      "Restaurant website built to present menus, featured dishes, and reservation-friendly browsing in a simple responsive layout.",
    image: "/projects/foodbase.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://foodbase.onrender.com",
    githubUrl: "https://github.com/htmcharles/Foodbase",
    type: "Frontend",
  },
  {
    slug: "agaciro-health",
    title: "Agaciro Health",
    description:
      "Healthcare product presence for monitoring loved ones' health with scheduling, records, and trust-building product communication.",
    image: "/projects/agacirohealth.png",
    technologies: ["Next.js"],
    liveUrl: "https://agacirohealth.com/",
    type: "Frontend",
  },
]
