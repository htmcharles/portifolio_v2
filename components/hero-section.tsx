import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section id="hero" className="bg-background pt-16">
      <div className="w-full px-4 md:px-12 lg:px-20 xl:px-40 max-w-[1920px] mx-auto">
        {/* Large screens (>1200px) - Side by side layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 lg:py-24">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold tracking-widest text-[#7A3B3B] dark:text-[#A85C5C] mb-4">FULL-STACK DEVELOPER</p>
              <h1 className="text-5xl lg:text-6xl font-light text-foreground leading-tight text-balance">
                Building digital
                <br />
                experiences.
              </h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate full-stack developer creating innovative web applications with modern technologies and clean, efficient code.
            </p>

            <Button
              size="lg"
              icon={<ChevronRight size={16} />}
            >
              View My Work
            </Button>
          </div>

          {/* Right image */}
          <div className="relative">
            <img
              src="/images/hatuma-charles.jpg"
              alt="Hatuma Charles - Full-Stack Developer"
              className="w-full h-auto rounded-3xl object-cover"
            />
            {/* Floating badges */}
            <div className="absolute top-6 right-6 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <span className="text-sm font-medium text-[#7A3B3B] dark:text-[#A85C5C]">Creative</span>
            </div>
            <div className="absolute bottom-20 left-6 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <span className="text-sm font-medium text-[#7A3B3B] dark:text-[#A85C5C]">Innovative</span>
            </div>
            <div className="absolute bottom-6 right-12 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <span className="text-sm font-medium text-[#7A3B3B] dark:text-[#A85C5C]">Reliable</span>
            </div>
          </div>
        </div>

        {/* Medium screens (810px-1199px) - Slightly compressed */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 md:gap-12 items-center py-12 md:py-20 lg:hidden">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#7A3B3B] dark:text-[#A85C5C] mb-3">FULL-STACK DEVELOPER</p>
              <h1 className="text-3xl md:text-4xl font-light text-foreground leading-tight text-balance">
                Building digital
                <br />
                experiences.
              </h1>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed">
              Passionate full-stack developer creating innovative web applications with modern technologies and clean, efficient code.
            </p>

            <Button
              size="sm"
              icon={<ChevronRight size={14} />}
            >
              View My Work
            </Button>
          </div>

          <div className="relative">
            <img
              src="/images/hatuma-charles.jpg"
              alt="Hatuma Charles - Full-Stack Developer"
              className="w-full h-auto rounded-3xl object-cover"
            />
            {/* Floating badges */}
            <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
              <span className="text-xs font-medium text-[#7A3B3B] dark:text-[#A85C5C]">Creative</span>
            </div>
            <div className="absolute bottom-16 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
              <span className="text-xs font-medium text-[#7A3B3B] dark:text-[#A85C5C]">Innovative</span>
            </div>
            <div className="absolute bottom-4 right-8 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
              <span className="text-xs font-medium text-[#7A3B3B] dark:text-[#A85C5C]">Reliable</span>
            </div>
          </div>
        </div>

        {/* Small screens (<810px) - Stacked vertical layout */}
        <div className="md:hidden space-y-8 py-12">
          <div className="text-center space-y-4">
            <p className="text-xs font-semibold tracking-widest text-[#7A3B3B] dark:text-[#A85C5C]">FULL-STACK DEVELOPER</p>
            <h1 className="text-4xl font-light text-foreground leading-tight text-balance">
              Building digital
              <br />
              experiences.
            </h1>

            <p className="text-base text-muted-foreground leading-relaxed px-2">
              Passionate full-stack developer creating innovative web applications with modern technologies and clean, efficient code.
            </p>
          </div>

          <div className="flex justify-center">
            <Button
              size="default"
              icon={<ChevronRight size={14} />}
            >
              View My Work
            </Button>
          </div>

          <div className="relative p-4">
            <img
              src="/images/hatuma-charles.jpg"
              alt="Hatuma Charles - Full-Stack Developer"
              className="w-full h-auto rounded-3xl object-cover shadow-2xl"
            />
            {/* Floating badges for mobile */}
            <div className="absolute top-8 right-8 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
              <span className="text-xs font-medium text-[#7A3B3B] dark:text-[#A85C5C]">Creative</span>
            </div>
            <div className="absolute bottom-20 left-8 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
              <span className="text-xs font-medium text-[#7A3B3B] dark:text-[#A85C5C]">Innovative</span>
            </div>
            <div className="absolute bottom-8 right-12 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
              <span className="text-xs font-medium text-[#7A3B3B] dark:text-[#A85C5C]">Reliable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
