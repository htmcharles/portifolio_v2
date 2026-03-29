import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="w-full px-4 md:px-12 lg:px-20 xl:px-40 max-w-[1920px] mx-auto py-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Hatuma Charles logo" width={24} height={24} className="h-6 w-6" />
              <span className="text-lg font-semibold text-[#7A3B3B] dark:text-white">Hatuma Charles</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Full-stack software engineer focused on polished interfaces, dependable systems, and product work that feels ready to ship.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.2em] text-[#7A3B3B] uppercase dark:text-[#A85C5C]">Explore</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
              <Link href="/projects" className="transition-colors hover:text-foreground">Projects</Link>
              <Link href="/skills" className="transition-colors hover:text-foreground">Skills</Link>
              <Link href="/experience" className="transition-colors hover:text-foreground">Experience</Link>
              <Link href="/certificates" className="transition-colors hover:text-foreground">Certificates</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.2em] text-[#7A3B3B] uppercase dark:text-[#A85C5C]">Contact</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="mailto:hatumacharles1@gmail.com" className="transition-colors hover:text-foreground">hatumacharles1@gmail.com</a>
              <a href="tel:+250793234963" className="transition-colors hover:text-foreground">+250 793 234 963</a>
              <a href="https://github.com/htmcharles" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">GitHub</a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Hatuma Charles logo" width={24} height={24} className="h-6 w-6" />
            <span>{new Date().getFullYear()} Hatuma Charles. All rights reserved.</span>
          </div>
          <p>Built with Next.js, TypeScript, and a product-minded frontend workflow.</p>
        </div>
      </div>
    </footer>
  )
}
