"use client"

import { useState } from "react"
import { Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="w-full pl-40 pr-40">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#7A3B3B] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">HC</span>
            </div>
            <span className="text-xl font-semibold text-[#7A3B3B]">Hatuma Charles</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-700 hover:text-[#7A3B3B] transition">
              About
            </a>
            <a href="#skills" className="text-gray-700 hover:text-[#7A3B3B] transition">
              Skills
            </a>
            <a href="#projects" className="text-gray-700 hover:text-[#7A3B3B] transition">
              Projects
            </a>
            <a href="#experience" className="text-gray-700 hover:text-[#7A3B3B] transition">
              Experience
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-[#7A3B3B] transition">
              Testimonials
            </a>
            <Button 
              size="sm" 
              icon={<ChevronRight size={12} />}
            >
              Contact Me
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-[#7A3B3B]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#about" className="block text-gray-700 hover:text-[#7A3B3B] py-2">
              About
            </a>
            <a href="#skills" className="block text-gray-700 hover:text-[#7A3B3B] py-2">
              Skills
            </a>
            <a href="#projects" className="block text-gray-700 hover:text-[#7A3B3B] py-2">
              Projects
            </a>
            <a href="#experience" className="block text-gray-700 hover:text-[#7A3B3B] py-2">
              Experience
            </a>
            <a href="#testimonials" className="block text-gray-700 hover:text-[#7A3B3B] py-2">
              Testimonials
            </a>
            <Button 
              size="sm" 
              icon={<ChevronRight size={12} />}
              className="w-full mt-2"
            >
              Contact Me
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
