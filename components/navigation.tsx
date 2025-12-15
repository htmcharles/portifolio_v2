"use client"

import { useState, useEffect } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Get all sections
      const sections = ["hero", "skills", "about", "projects", "experience", "testimonials", "contact"]
      const scrollPosition = window.scrollY + 100

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

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "testimonials", label: "Testimonials" },
  ]

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled
      ? "w-[90%] md:w-auto max-w-5xl border-border/40"
      : "w-[95%] md:w-auto max-w-6xl border-transparent"
      }`}>
      <div className="bg-background/80 backdrop-blur-md border border-border rounded-full px-2 pl-4 py-1.5 flex justify-between items-center h-12 mx-auto transition-all">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer group pr-4"
          onClick={() => scrollToSection("hero")}
        >
          <div className="w-8 h-8 bg-[#7A3B3B] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
            <span className="text-white text-xs font-bold">HC</span>
          </div>
          <span className="text-lg font-semibold text-[#7A3B3B] dark:text-white hidden sm:block">Hatuma</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 rounded-full px-2 mx-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${activeSection === item.id
                ? "bg-white dark:bg-black text-[#7A3B3B] dark:text-[#A85C5C] shadow-sm border border-black/5"
                : "text-muted-foreground hover:text-[#7A3B3B] dark:hover:text-white hover:bg-muted/30"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 pl-2">
          <div className="hidden md:flex items-center gap-2 mr-1">
            <ThemeToggle />
            <button
              onClick={() => scrollToSection("contact")}
              className="group flex items-center gap-2 bg-[#7A3B3B] text-white px-4 py-2 rounded-full font-medium text-xs transition-all duration-300 hover:bg-[#6a3333]"
            >
              Let's Talk
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden pr-2">
            <ThemeToggle />
            <button className="text-[#7A3B3B] dark:text-white ml-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-background/95 backdrop-blur-md rounded-2xl border border-border shadow-xl p-4 md:hidden flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-xl transition-colors duration-200 ${activeSection === item.id
                ? "bg-muted text-[#7A3B3B] dark:text-white font-medium"
                : "text-muted-foreground hover:bg-muted/50 hover:text-[#7A3B3B] dark:hover:text-white"
                }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center justify-between w-full px-4 py-3 mt-2 bg-[#7A3B3B] text-white rounded-xl font-semibold"
          >
            Let's Talk
            <ArrowRight size={16} />
          </button>
        </div>
      )}
    </nav>
  )
}
