"use client"

import { useState } from "react"
import { Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#7A3B3B] rounded-full"></div>
            <span className="text-xl font-semibold text-[#7A3B3B]">Mindify</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-[#7A3B3B] transition">
              About Me
            </a>
            <a href="#" className="text-gray-700 hover:text-[#7A3B3B] transition">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-[#7A3B3B] transition">
              How It Works
            </a>
            <a href="#" className="text-gray-700 hover:text-[#7A3B3B] transition">
              Testimonials
            </a>
            <Button 
              size="sm" 
              icon={<ChevronRight size={16} />}
            >
              Book A Session
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
            <a href="#" className="block text-gray-700 hover:text-[#7A3B3B] py-2">
              About Me
            </a>
            <a href="#" className="block text-gray-700 hover:text-[#7A3B3B] py-2">
              Services
            </a>
            <a href="#" className="block text-gray-700 hover:text-[#7A3B3B] py-2">
              How It Works
            </a>
            <a href="#" className="block text-gray-700 hover:text-[#7A3B3B] py-2">
              Testimonials
            </a>
            <Button 
              size="sm" 
              icon={<ChevronRight size={16} />}
              className="w-full mt-2"
            >
              Book A Session
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
