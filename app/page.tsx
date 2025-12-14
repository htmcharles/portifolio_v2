import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import BenefitsSection from "@/components/benefits-section"
import AboutSection from "@/components/about-section"
import SocialProofSection from "@/components/social-proof-section"
import HowItWorksSection from "@/components/how-it-works-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export const metadata = {
  title: "Mindify - Online Therapy",
  description: "Professional online therapy designed to help you rediscover balance and happiness - on your terms.",
}

export default function Home() {
  return (
    <main className="bg-white">
      <Navigation />
      <HeroSection />
      <BenefitsSection />
      <AboutSection />
      <SocialProofSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
