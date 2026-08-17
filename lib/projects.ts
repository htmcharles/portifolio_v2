export type ProjectCategory = "Frontend" | "Backend" | "Fullstack" | "Open Source"
export type ProjectKind = "applied" | "concept" | "open-source"

export interface ProjectMetric {
  label: string
  value: string
}

export interface Project {
  slug: string
  title: string
  tagline: string
  description: string
  summary: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl?: string
  type: ProjectCategory
  year: string
  duration: string
  role: string
  client: string
  kind: ProjectKind
  featured?: boolean
  deliverables: string[]
  challenge: string
  solution: string
  outcomes: string[]
}

export const projects: Project[] = [
  {
    slug: "tableseven",
    title: "TableSeven",
    tagline: "Restaurant brand site focused on speed, polish, and SEO clarity.",
    description: "High-performance restaurant website built with Next.js and TypeScript to deliver strong SEO, fast load times, and premium visual polish for hospitality brands.",
    summary: "TableSeven was designed as a conversion-oriented restaurant experience with premium visual direction, smooth navigation, and content architecture that supports discovery, menus, and booking intent.",
    image: "/projects/veloria.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://tables7.vercel.app",
    type: "Frontend",
    year: "2025",
    duration: "2 weeks",
    role: "Product design, frontend architecture, implementation",
    client: "Hospitality brand concept",
    kind: "concept",
    deliverables: ["Marketing website", "Responsive menu flow", "SEO-ready content structure"],
    challenge: "The project needed to feel premium without becoming heavy, while still keeping the information architecture simple enough for visitors who want menus, story, and booking signals quickly.",
    solution: "I built a lightweight Next.js marketing stack with visual hierarchy tuned for hospitality, crisp section sequencing, and a responsive layout that keeps imagery rich without hurting performance.",
    outcomes: [
      "Created a stronger first impression for a hospitality-style brand",
      "Improved navigation clarity across menus, story, and booking sections",
      "Kept the experience visually rich while preserving fast page loads",
    ],
  },
  {
    slug: "firmora",
    title: "Firmora",
    tagline: "Consulting website shaped around credibility and service storytelling.",
    description: "Corporate website for a consulting firm focused on credibility, clarity, and a polished service presentation across business strategy disciplines.",
    summary: "Firmora positions a consulting brand with structured service narratives, trust-building layout decisions, and a restrained visual system designed for executive audiences.",
    image: "/projects/cubicles.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://firmora.vercel.app",
    type: "Frontend",
    year: "2025",
    duration: "10 days",
    role: "Information architecture, design system, frontend delivery",
    client: "Consulting brand concept",
    kind: "concept",
    deliverables: ["Corporate website", "Service pages", "Trust-focused homepage"],
    challenge: "The challenge was to communicate authority without making the site feel cold or generic, especially for a service business that depends heavily on trust and clarity.",
    solution: "I used a restrained corporate visual language, tighter copy hierarchy, and modular sections that help services, proof, and positioning read quickly on both desktop and mobile.",
    outcomes: [
      "Turned abstract consulting offers into scannable service narratives",
      "Strengthened trust signals through cleaner content grouping",
      "Produced a more convincing visual identity for executive buyers",
    ],
  },
  {
    slug: "chemcore",
    title: "ChemCore",
    tagline: "Industrial web presence with trust signals and product structure.",
    description: "Industrial company website designed to communicate product reliability, sector expertise, and modern digital trust signals for chemical supply operations.",
    summary: "ChemCore translates a technical industrial business into a cleaner digital experience, making products, sectors, and credibility markers easier to scan for commercial visitors.",
    image: "/projects/synthorix.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://chemcore-v2.vercel.app",
    type: "Frontend",
    year: "2025",
    duration: "2 weeks",
    role: "UX structure, component implementation, responsive frontend",
    client: "Industrial supply concept",
    kind: "concept",
    deliverables: ["Company website", "Sector pages", "Product trust presentation"],
    challenge: "Industrial sites often become dense and visually dated. This project needed to feel current while still communicating reliability and technical competence.",
    solution: "I focused on cleaner spacing, stronger visual grouping, and sections that make industrial offerings easier to understand without oversimplifying the business.",
    outcomes: [
      "Improved clarity for product and sector messaging",
      "Balanced modern design with industrial credibility",
      "Delivered a stronger commercial presentation for technical services",
    ],
  },
  {
    slug: "consultedge",
    title: "ConsultEdge",
    tagline: "Advisory platform with conversion-first messaging hierarchy.",
    description: "Consulting platform built to position strategic advisory services with strong messaging hierarchy, conversion-focused layout, and responsive performance.",
    summary: "ConsultEdge packages strategic advisory services into a digital experience that guides visitors from positioning to offer understanding and inquiry action.",
    image: "/projects/stratex.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://consultedge.vercel.app",
    type: "Frontend",
    year: "2025",
    duration: "9 days",
    role: "Frontend strategy, UI design, implementation",
    client: "Strategy consulting concept",
    kind: "concept",
    deliverables: ["Advisory landing site", "Service narrative", "Inquiry-oriented layout"],
    challenge: "The product needed to feel sharp and strategic while still staying simple enough to support conversion from first-time visitors.",
    solution: "I built a structure that leads with positioning, follows with service explanation, and then supports credibility and CTA flow without overwhelming the page.",
    outcomes: [
      "Made service differentiation easier to understand",
      "Improved visual momentum from headline to inquiry",
      "Created a stronger consulting-oriented interface system",
    ],
  },
  {
    slug: "buildnest",
    title: "BuildNest",
    tagline: "Service website for home improvement and project trust-building.",
    description: "Home improvement website that pairs visual trust-building with a clear service funnel for homeowners looking for reliable project delivery.",
    summary: "BuildNest focuses on making service information clearer for homeowners by balancing trust, service explanation, and a clean inquiry path.",
    image: "/projects/refit.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://hc-buildnest.vercel.app",
    type: "Frontend",
    year: "2025",
    duration: "8 days",
    role: "Frontend design and implementation",
    client: "Home services concept",
    kind: "concept",
    deliverables: ["Service marketing site", "Quote request flow", "Mobile-ready layout"],
    challenge: "The site needed to make project delivery feel reliable for homeowners while still keeping the interface friendly and approachable.",
    solution: "I used a warmer service-oriented layout, clear service sections, and a smoother path from introduction to trust markers and inquiry.",
    outcomes: [
      "Made service offerings easier to compare and understand",
      "Built a friendlier but still credible service presentation",
      "Created a responsive experience that works well for mobile-first visitors",
    ],
  },
  {
    slug: "athletiq",
    title: "Athletiq",
    tagline: "Coaching interface for athletes who need clear training communication.",
    description: "Triathlon coaching experience focused on athlete performance, training-plan clarity, and a lightweight interface for competitive users.",
    summary: "Athletiq is structured around clarity for performance-oriented users, with focused messaging, training emphasis, and a cleaner coaching offer presentation.",
    image: "/projects/perform.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://athleticq.vercel.app",
    type: "Frontend",
    year: "2025",
    duration: "1 week",
    role: "UI direction, frontend build",
    client: "Performance coaching concept",
    kind: "concept",
    deliverables: ["Coaching website", "Offer presentation", "Performance-focused messaging"],
    challenge: "The experience had to speak to competitive users without clutter, while keeping coaching packages and differentiation easy to read.",
    solution: "I focused the layout on training credibility, concise content blocks, and a lightweight interface that mirrors the needs of performance-minded visitors.",
    outcomes: [
      "Produced a cleaner coaching offer experience",
      "Aligned tone and layout with athletic audiences",
      "Kept the site fast and simple without losing personality",
    ],
  },
  {
    slug: "producta",
    title: "Producta",
    tagline: "Product-led SaaS landing page built for feature storytelling.",
    description: "SaaS landing page optimized for feature storytelling, pricing communication, and product-led conversion flows.",
    summary: "Producta packages a SaaS offer into a clearer landing experience with feature sequencing, pricing framing, and product-led messaging patterns.",
    image: "/projects/landio.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://hc-producta.vercel.app",
    type: "Frontend",
    year: "2025",
    duration: "6 days",
    role: "Landing page strategy, UI implementation",
    client: "SaaS concept",
    kind: "concept",
    deliverables: ["SaaS marketing page", "Pricing communication", "Feature storytelling"],
    challenge: "The challenge was to make a product narrative feel strong enough for a SaaS brand without overloading the page with too many competing sections.",
    solution: "I built a landing structure that moves cleanly from product framing to feature explanation, pricing support, and action points.",
    outcomes: [
      "Improved readability for feature and pricing sections",
      "Built a more product-led narrative flow",
      "Created a stronger conversion-oriented SaaS presentation",
    ],
  },
  {
    slug: "cmsp",
    title: "CMSP",
    tagline: "Healthcare platform for service discovery and patient access.",
    description: "Healthcare platform that helps patients discover services, browse medical information, and connect with care providers through a structured interface.",
    summary: "CMSP combines healthcare service discovery with a more structured access path for patients, making information and service categories easier to navigate.",
    image: "/projects/carrent.png",
    technologies: ["React", "Node.js", "CSS"],
    liveUrl: "https://clinique-medical-st-paul.onrender.com/",
    githubUrl: "https://github.com/htmcharles/HOSPITAL-MANAGEMENT-SYSTEM",
    type: "Fullstack",
    year: "2024",
    duration: "4 weeks",
    role: "Full-stack development",
    client: "Healthcare service platform",
    kind: "applied",
    featured: true,
    deliverables: ["Patient-facing interface", "Service browsing", "Backend integration"],
    challenge: "Healthcare information can become difficult to browse quickly, especially when patients need a simple path to services and contact points.",
    solution: "I built a React and Node.js application that structures service discovery more clearly and supports practical access patterns for medical information.",
    outcomes: [
      "Centralized service information into a more navigable interface",
      "Created clearer routes for patient discovery and contact",
      "Balanced application structure with usability for non-technical users",
    ],
  },
  {
    slug: "oss-weather",
    title: "OSS Weather",
    tagline: "Open-source forecast interface with multi-source weather data.",
    description: "Open-source weather application that combines multiple forecast providers and radar data into a configurable forecasting interface.",
    summary: "OSS Weather is an open-source interface designed around flexibility, giving users a configurable experience for forecasts, radar context, and multiple data perspectives.",
    image: "/projects/ossweather.png",
    technologies: ["Svelte", "TypeScript", "JavaScript"],
    liveUrl: "https://oss-weather.onrender.com",
    githubUrl: "https://github.com/htmcharles/oss-weather",
    type: "Open Source",
    year: "2024",
    duration: "3 weeks",
    role: "Open-source contributor and interface implementation",
    client: "Open-source product",
    kind: "open-source",
    deliverables: ["Forecast UI", "Radar integration", "Configurable weather views"],
    challenge: "Weather interfaces can become noisy quickly, especially when combining several data sources and different forecast contexts.",
    solution: "I helped shape a configurable Svelte-based interface that keeps dense weather information usable while preserving flexibility for advanced users.",
    outcomes: [
      "Improved access to multiple forecast perspectives",
      "Delivered a cleaner interface for radar and weather context",
      "Contributed to a user-facing open-source application",
    ],
  },
  {
    slug: "rca-e-submit",
    title: "RCA E-Submit",
    tagline: "Submission workflow system for academic coordination and review.",
    description: "Assignment submission workflow for Rwanda Coding Academy that centralizes submissions, review, and grading coordination in one system.",
    summary: "RCA E-Submit addresses a practical workflow problem: centralizing student submissions, instructor review, and grading coordination into one place.",
    image: "/projects/e_submit.png",
    technologies: ["Hibernate", "JSP", "MySQL"],
    liveUrl: "https://e-submit.onrender.com",
    githubUrl: "https://github.com/htmcharles/Submission_java",
    type: "Backend",
    year: "2024",
    duration: "5 weeks",
    role: "Backend and system implementation",
    client: "Educational workflow system",
    kind: "applied",
    featured: true,
    deliverables: ["Submission backend", "Review workflow", "Persistence model"],
    challenge: "Academic submission handling becomes inefficient when submissions, review context, and grading are spread across disconnected tools.",
    solution: "I built a Java-based workflow that centralizes assignment intake and gives reviewers a clearer way to track submission and grading progress.",
    outcomes: [
      "Reduced workflow fragmentation around assignment handling",
      "Improved visibility into review and grading state",
      "Strengthened backend engineering practice with a practical domain problem",
    ],
  },
  {
    slug: "sendit",
    title: "SendIt",
    tagline: "Operations backend for reservations, payments, and scheduling.",
    description: "Booking and operations backend for hospitality workflows, covering reservations, payments, scheduling, and administrative visibility.",
    summary: "SendIt focuses on backend workflow coordination for hospitality operations, keeping reservations, scheduling, and internal visibility tied together in one system.",
    image: "/projects/sendit.png",
    technologies: ["Spring Boot", "PostgreSQL", "Java"],
    liveUrl: "https://sendit.onrender.com",
    type: "Backend",
    year: "2024",
    duration: "4 weeks",
    role: "Backend architecture and implementation",
    client: "Operational booking workflow",
    kind: "applied",
    featured: true,
    deliverables: ["Reservation APIs", "Admin workflow logic", "Scheduling backend"],
    challenge: "Operational booking flows involve several moving parts, and the system needed to stay predictable for administrative use.",
    solution: "I used Spring Boot and PostgreSQL to build a more structured backend that supports reservation workflows, payments, and internal operational visibility.",
    outcomes: [
      "Centralized important booking and scheduling logic",
      "Created a stronger foundation for admin-side operations",
      "Improved backend fluency around transactional workflow design",
    ],
  },
  {
    slug: "ireme",
    title: "Ireme",
    tagline: "Internal interface for employee skill visibility and growth signals.",
    description: "Internal skill management interface that helps teams surface employee experience, projects, and growth signals across an organization.",
    summary: "Ireme is an internal product concept focused on surfacing skills and experience signals across teams so managers and collaborators can navigate internal capability more easily.",
    image: "/projects/ireme.png",
    technologies: ["React", "CSS", "JavaScript"],
    liveUrl: "https://ireme.onrender.com/",
    type: "Fullstack",
    year: "2024",
    duration: "3 weeks",
    role: "Frontend-heavy product implementation",
    client: "Internal team workflow",
    kind: "concept",
    deliverables: ["Skill visibility interface", "Employee profile browsing", "Project signal display"],
    challenge: "Internal systems often expose data without helping teams understand strengths, growth, and project context quickly.",
    solution: "I built a React-based internal interface that makes project history and skill visibility easier to surface across an organization.",
    outcomes: [
      "Improved visibility into employee experience and skills",
      "Turned internal data into a more usable browsing experience",
      "Strengthened product thinking for internal tools",
    ],
  },
  {
    slug: "foodhome",
    title: "Foodhome",
    tagline: "Responsive restaurant site centered on menu presentation and browsing.",
    description: "Restaurant website built to present menus, featured dishes, and reservation-friendly browsing in a simple responsive layout.",
    summary: "Foodhome is an earlier restaurant-style project focused on responsive browsing, dish presentation, and a cleaner content-first restaurant layout.",
    image: "/projects/foodbase.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://foodbase.onrender.com",
    githubUrl: "https://github.com/htmcharles/Foodbase",
    type: "Frontend",
    year: "2023",
    duration: "1 week",
    role: "Frontend implementation",
    client: "Restaurant concept",
    kind: "concept",
    deliverables: ["Responsive website", "Menu presentation", "Basic interaction patterns"],
    challenge: "The goal was to create a straightforward restaurant browsing experience using a simpler stack while still keeping the layout modern and usable.",
    solution: "I used foundational HTML, CSS, and JavaScript to build a mobile-friendly restaurant interface with simple structure and emphasis on menu content.",
    outcomes: [
      "Delivered an accessible baseline restaurant experience",
      "Practiced visual structure and responsive behavior using core frontend tools",
      "Created a useful foundation for later hospitality-focused builds",
    ],
  },
  {
    slug: "agaciro-health",
    title: "Agaciro Health",
    tagline: "Healthcare product presence for family-centered digital health support.",
    description: "Healthcare product presence for monitoring loved ones' health with scheduling, records, and trust-building product communication.",
    summary: "Agaciro Health presents a digital health product in a trust-centered way, balancing product explanation, family-oriented language, and cleaner healthcare communication.",
    image: "/projects/agacirohealth.png",
    technologies: ["Next.js"],
    liveUrl: "https://agacirohealth.com/",
    type: "Frontend",
    year: "2025",
    duration: "2 weeks",
    role: "Frontend product presentation and UX delivery",
    client: "Digital health product",
    kind: "applied",
    deliverables: ["Product marketing site", "Healthcare trust messaging", "Responsive presentation"],
    challenge: "Healthcare communication needs trust, clarity, and emotional sensitivity. The experience had to feel professional without becoming overly clinical.",
    solution: "I used a softer product presentation strategy with clearer explanation of features, records, scheduling, and family-focused use cases.",
    outcomes: [
      "Improved clarity for product communication in a sensitive domain",
      "Balanced trust and usability in a healthcare-oriented interface",
      "Delivered a more polished public-facing product experience",
    ],
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function kindLabel(kind: ProjectKind) {
  if (kind === "open-source") return "Open source"
  if (kind === "applied") return "Applied"
  return "Concept"
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured)
}

export function getArchiveProjects() {
  const rank: Record<ProjectKind, number> = {
    applied: 0,
    "open-source": 1,
    concept: 2,
  }

  return [...projects].sort((a, b) => {
    const kindDelta = rank[a.kind] - rank[b.kind]
    if (kindDelta !== 0) return kindDelta
    return Number(b.year) - Number(a.year)
  })
}

export function getRelatedProjects(slug: string) {
  const current = getProjectBySlug(slug)
  const rest = getArchiveProjects().filter((project) => project.slug !== slug)

  if (!current) return rest.slice(0, 3)

  const sameKind = rest.filter((project) => project.kind === current.kind)
  const otherKind = rest.filter((project) => project.kind !== current.kind)
  return [...sameKind, ...otherKind].slice(0, 3)
}

export function getProjectFacts(project: Project): ProjectMetric[] {
  return [
    { label: "Year", value: project.year },
    { label: "Kind", value: kindLabel(project.kind) },
    { label: "Live", value: "Public URL" },
    { label: "Stack", value: project.technologies.slice(0, 2).join(" · ") },
  ]
}
