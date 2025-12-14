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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-2"
      : "bg-background border-b border-transparent py-2"
      }`}>
      <div className="w-full pl-40 pr-40">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection("hero")}
          >
            <div className="w-8 h-8 bg-[#7A3B3B] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-white text-xs font-bold">HC</span>
            </div>
            <span className="text-xl font-semibold text-[#7A3B3B] dark:text-white">Hatuma Charles</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-200 ${activeSection === item.id
                  ? "text-[#7A3B3B] dark:text-white"
                  : "text-muted-foreground hover:text-[#7A3B3B] dark:hover:text-white"
                  }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="group flex items-center gap-2 text-[#7A3B3B] dark:text-white font-semibold text-sm hover:opacity-80 transition-opacity"
            >
              Let's Talk
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>

            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button className="text-[#7A3B3B] dark:text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-background">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-2 transition-colors duration-200 ${activeSection === item.id
                  ? "text-[#7A3B3B] dark:text-white font-medium"
                  : "text-muted-foreground hover:text-[#7A3B3B] dark:hover:text-white"
                  }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center gap-2 text-[#7A3B3B] dark:text-white font-semibold mt-4"
            >
              Let's Talk
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
