import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="relative py-24 px-4 md:py-32 overflow-hidden">
      {/* Diagonal striped background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.4) 20px, rgba(255,255,255,0.4) 40px)",
          }}
        ></div>
      </div>

      {/* Content container */}
      <div className="relative max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center">
          <p className="text-xs tracking-widest text-burgundy-600 font-semibold mb-4">YOUR NEW BEGINNING</p>

          <h2 className="text-4xl md:text-5xl font-light mb-6 text-balance">
            Take the First Step Toward the Life You Deserve
          </h2>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Over 300 individuals have reclaimed their confidence, rebuilt relationships, and found emotional peace. You
            can, too.
          </p>

          <Button 
            size="lg" 
            icon={<ChevronRight size={20} />}
          >
            Book A Session
          </Button>
        </div>
      </div>
    </section>
  )
}
