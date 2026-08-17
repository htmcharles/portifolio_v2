import Image from "next/image"
import Link from "next/link"
import { site, whatsappUrl } from "@/lib/site"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="w-full px-4 md:px-12 lg:px-20 xl:px-40 max-w-[1920px] mx-auto py-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt={`${site.name} logo`} width={24} height={24} className="h-6 w-6" />
              <span className="text-lg font-semibold text-[#7A3B3B] dark:text-white">{site.name}</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              {site.role} in {site.location}, trained at {site.school}. Available for freelance projects and full-time roles.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.2em] text-[#7A3B3B] uppercase dark:text-[#A85C5C]">Explore</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <Link href="/" className="transition-all hover:translate-x-0.5 hover:text-foreground">Home</Link>
              <Link href="/projects" className="transition-all hover:translate-x-0.5 hover:text-foreground">Projects</Link>
              <Link href="/skills" className="transition-all hover:translate-x-0.5 hover:text-foreground">Skills</Link>
              <Link href="/experience" className="transition-all hover:translate-x-0.5 hover:text-foreground">Experience</Link>
              <Link href="/certificates" className="transition-all hover:translate-x-0.5 hover:text-foreground">Certificates</Link>
              <Link href="/privacy" className="transition-all hover:translate-x-0.5 hover:text-foreground">Privacy</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.2em] text-[#7A3B3B] uppercase dark:text-[#A85C5C]">Contact</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <a href={`mailto:${site.email}`} className="transition-all hover:translate-x-0.5 hover:text-foreground">{site.email}</a>
              <a href={`tel:${site.phoneE164}`} className="transition-all hover:translate-x-0.5 hover:text-foreground">{site.phoneDisplay}</a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="transition-all hover:translate-x-0.5 hover:text-foreground">WhatsApp</a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="transition-all hover:translate-x-0.5 hover:text-foreground">LinkedIn</a>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="transition-all hover:translate-x-0.5 hover:text-foreground">GitHub</a>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="transition-all hover:translate-x-0.5 hover:text-foreground">Instagram</a>
              <a href={site.twitter} target="_blank" rel="noopener noreferrer" className="transition-all hover:translate-x-0.5 hover:text-foreground">X / Twitter</a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt={`${site.name} logo`} width={24} height={24} className="h-6 w-6" />
            <span>{new Date().getFullYear()} {site.name}. All rights reserved.</span>
          </div>
          <p>{site.location} · {site.school}</p>
        </div>
      </div>
    </footer>
  )
}
