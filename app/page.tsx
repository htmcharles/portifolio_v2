import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export const metadata = {
  title: "Hatuma Charles - Full-Stack Developer",
  description: "Passionate full-stack developer creating innovative web applications with modern technologies and clean, efficient code.",
}

export default function Home() {
  return (
    <main className="bg-white">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
      <ExperienceSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
