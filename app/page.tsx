import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ResultsSection from "@/components/results-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ServicesSection from "@/components/services-section"
import PricingSection from "@/components/pricing-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import HowItWorksSection from "@/components/how-it-works-section"
import NowSection from "@/components/now-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import CertificatesSection from "@/components/certificates-section"
import { site } from "@/lib/site"

export const metadata = {
  title: `${site.name} - ${site.role}`,
  description: site.description,
}

export default function Home() {
  return (
    <main className="bg-white">
      <Navigation />
      <HeroSection />
      <ResultsSection />
      <ServicesSection />
      <PricingSection />
      <SkillsSection />
      <ProjectsSection featured />
      <AboutSection />
      <HowItWorksSection />
      <ExperienceSection />
      <CertificatesSection />
      <NowSection />
      <CTASection />
      <Footer />
    </main>
  )
}
