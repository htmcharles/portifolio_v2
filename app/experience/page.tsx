import Navigation from "@/components/navigation"
import ExperienceSection from "@/components/experience-section"
import AboutSection from "@/components/about-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export const metadata = {
    title: "Experience - Hatuma Charles",
    description: "Professional journey and work experience of Hatuma Charles.",
}

export default function ExperiencePage() {
    return (
        <main className="bg-background text-foreground min-h-screen">
            <Navigation />
            <div className="pt-20">
                <AboutSection />
                <ExperienceSection />
                <CTASection />
            </div>
            <Footer />
        </main>
    )
}
