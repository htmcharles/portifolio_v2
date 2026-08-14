export const site = {
  name: "Hatuma Charles",
  shortName: "Hatuma",
  role: "Software Engineer",
  school: "Rwanda Coding Academy",
  location: "Kigali, Rwanda",
  headline: "Software across web, systems, security, and applied engineering.",
  description:
    "Hatuma Charles is a software engineer in Kigali, trained at Rwanda Coding Academy across frontend, backend, DevOps, cybersecurity, AI/ML, embedded systems, and testing. Available for freelance projects and full-time roles.",
  email: "hatumacharles1@gmail.com",
  phoneDisplay: "+250 793 234 963",
  phoneE164: "+250793234963",
  github: "https://github.com/htmcharles",
  linkedin: "https://www.linkedin.com/in/hatumacharles/",
  instagram: "https://www.instagram.com/h.charles_1",
  twitter: "https://twitter.com/htm_charles",
  photo: "/images/hatuma-charles.jpg",
  tracks: [
    "Frontend",
    "Backend",
    "DevOps",
    "Cybersecurity",
    "AI/ML",
    "Embedded",
    "Testing",
  ],
} as const

export const whatsappUrl = `https://wa.me/${site.phoneE164.replace("+", "")}`

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "")
}

export function mailtoUrl(subject?: string, body?: string) {
  const params = new URLSearchParams()
  if (subject) params.set("subject", subject)
  if (body) params.set("body", body)
  const query = params.toString()
  return query ? `mailto:${site.email}?${query}` : `mailto:${site.email}`
}

export function whatsappMessageUrl(message: string) {
  return `${whatsappUrl}?text=${encodeURIComponent(message)}`
}

export const bookingTimezone = "Africa/Kigali"
export const bookingSlots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"] as const

export const projectTypes = [
  "Intro call",
  "Website / product interface",
  "Full-stack application",
  "DevOps / systems",
  "Cybersecurity",
  "AI / ML",
  "Embedded systems",
  "Testing / QA",
  "Full-time role",
  "Other",
] as const
