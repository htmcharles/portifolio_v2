import Navigation from "@/components/navigation"
import SkillsSection from "@/components/skills-section"
import AboutSection from "@/components/about-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export const metadata = {
    title: "Skills - Hatuma Charles",
    description: "Technical skills and expertise of Hatuma Charles.",
}

export default function SkillsPage() {
    return (
        <main className="bg-white">
            <Navigation />
            <div className="pt-20">
                <SkillsSection />
                <AboutSection />
                <CTASection />
            </div>
            <Footer />
        </main>
    )
}
