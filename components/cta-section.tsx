import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background image with padding-aware positioning and blur */}
      <div className="absolute inset-0 ml-40 mr-40">
        <img
          src="/images/cta.jpg"
          alt="CTA Background"
          className="w-full h-full object-cover blur-sm"
        />
        {/* Diagonal striped overlay */}
        <div
          className="absolute inset-0 bg-black/20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)",
          }}
        ></div>
      </div>

      <div className="w-full pl-40 pr-40">
        {/* Content container - Desktop/Large screens */}
        <div className="relative max-w-6xl mx-auto hidden lg:block">
          <div className="flex justify-center">
            <div className="bg-white rounded-3xl p-12 shadow-2xl text-center max-w-2xl">
              <p className="text-sm tracking-widest text-[#7A3B3B] font-semibold mb-6 uppercase">YOUR NEW BEGINNING</p>

              <h2 className="text-4xl xl:text-5xl font-light mb-8 text-balance leading-tight">
                Take the First Step Toward the Life You Deserve
              </h2>

              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Over 300 individuals have reclaimed their confidence, rebuilt relationships, and found emotional peace. You can, too.
              </p>

              <Button 
                size="lg" 
                icon={<ChevronRight size={16} />}
              >
                Book A Session
              </Button>
            </div>
          </div>
        </div>

        {/* Content container - Tablet screens */}
        <div className="relative max-w-4xl mx-auto hidden md:block lg:hidden">
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-8 shadow-2xl text-center max-w-xl">
              <p className="text-xs tracking-widest text-[#7A3B3B] font-semibold mb-4 uppercase">YOUR NEW BEGINNING</p>

              <h2 className="text-3xl font-light mb-6 text-balance leading-tight">
                Take the First Step Toward the Life You Deserve
              </h2>

              <p className="text-gray-600 text-base mb-8 leading-relaxed">
                Over 300 individuals have reclaimed their confidence, rebuilt relationships, and found emotional peace. You can, too.
              </p>

              <Button 
                size="default" 
                icon={<ChevronRight size={14} />}
              >
                Book A Session
              </Button>
            </div>
          </div>
        </div>

        {/* Content container - Mobile screens */}
        <div className="relative max-w-sm mx-auto md:hidden">
          <div className="bg-white rounded-2xl p-6 shadow-2xl text-center">
            <p className="text-xs tracking-widest text-[#7A3B3B] font-semibold mb-4 uppercase">YOUR NEW BEGINNING</p>

            <h2 className="text-2xl font-light mb-4 text-balance leading-tight">
              Take the First Step Toward the Life You Deserve
            </h2>

            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Over 300 individuals have reclaimed their confidence, rebuilt relationships, and found emotional peace. You can, too.
            </p>

            <Button 
              size="sm" 
              icon={<ChevronRight size={12} />}
            >
              Book A Session
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
