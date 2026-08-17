"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Menu, X, ArrowRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { homeNavItems, pageNavItems } from "@/lib/site-navigation"

const sections = ["hero", "services", "skills", "projects", "about", "experience", "certificates", "contact"]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setIsScrolled(y > 10)
      setHidden(y > lastY.current && y > 90 && !isOpen)
      lastY.current = y
      const scrollPosition = y + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isOpen])

  const isHomePage = pathname === "/"
  const navItems = isHomePage ? homeNavItems : pageNavItems
  const contactHref = isHomePage ? "#contact" : "/#contact"

  const isItemActive = (itemId: string, itemHref: string) => {
    if (isHomePage) {
      return activeSection === itemId
    }

    if (itemHref === "/") {
      return pathname === "/"
    }

    return pathname === itemHref
  }

  return (
    <nav className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${hidden ? "-translate-y-24" : "translate-y-0"} ${isScrolled
      ? "w-[92%] md:w-auto max-w-6xl border-border/40"
      : "w-[96%] md:w-auto max-w-6xl border-transparent"
      }`}>
      <div className="mx-auto flex min-h-14 items-center justify-between rounded-full border border-border bg-background/85 px-2 py-1.5 pl-3 backdrop-blur-md transition-all">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 pr-3"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          }}
        >
          <div className="w-8 h-8 bg-[#7A3B3B] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
            <Image src="/logo.svg" alt="Hatuma Charles logo" width={32} height={32} className="h-8 w-8" />
          </div>
          <span className="hidden whitespace-nowrap text-base font-semibold text-[#7A3B3B] dark:text-white md:block lg:hidden">
            Hatuma
          </span>
          <span className="hidden whitespace-nowrap text-base font-semibold text-[#7A3B3B] dark:text-white lg:block xl:text-lg">
            Hatuma Charles
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="mx-1 hidden items-center gap-1 rounded-full px-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={isHomePage ? item.href.replace("/", "") : item.href}
              onClick={() => setIsOpen(false)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200 xl:px-4 ${isItemActive(item.id, item.href)
                ? "bg-white dark:bg-black text-[#7A3B3B] dark:text-[#A85C5C] shadow-sm border border-black/5"
                : "text-muted-foreground hover:text-[#7A3B3B] dark:hover:text-white hover:bg-muted/30"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 pl-2">
          <div className="hidden items-center gap-2 pr-1 lg:flex">
            <ThemeToggle />
            <Link
              href={contactHref}
              onClick={() => setIsOpen(false)}
              className={`group flex items-center gap-2 px-5 py-2 rounded-full font-medium text-xs transition-all duration-300 whitespace-nowrap flex-shrink-0 ${isHomePage && activeSection === "contact"
                ? "bg-white dark:bg-black text-[#7A3B3B] dark:text-[#A85C5C] shadow-sm border border-black/5"
                : "bg-[#7A3B3B] text-white hover:bg-[#6a3333]"
                }`}
            >
              Let&apos;s Talk
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 pr-2 lg:hidden">
            <ThemeToggle />
            <button className="text-[#7A3B3B] dark:text-white ml-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[calc(100%+8px)] right-0 left-0 flex flex-col gap-2 rounded-2xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur-md lg:hidden"
          >
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={isHomePage ? item.href.replace("/", "") : item.href}
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left px-4 py-3 rounded-xl transition-colors duration-200 ${isItemActive(item.id, item.href)
                ? "bg-muted text-[#7A3B3B] dark:text-white font-medium"
                : "text-muted-foreground hover:bg-muted/50 hover:text-[#7A3B3B] dark:hover:text-white"
                }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={contactHref}
            onClick={() => setIsOpen(false)}
            className={`flex items-center justify-between w-full px-4 py-3 mt-2 rounded-xl font-semibold ${isHomePage && activeSection === "contact"
              ? "bg-muted text-[#7A3B3B] dark:text-white"
              : "bg-[#7A3B3B] text-white"
              }`}
          >
            Let&apos;s Talk
            <ArrowRight size={16} />
          </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  )
}
