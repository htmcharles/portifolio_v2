import Navigation from "@/components/navigation"
import SkillsSection from "@/components/skills-section"
import Footer from "@/components/footer"

export const metadata = {
    title: "Skills - Hatuma Charles",
    description: "Technical skills and expertise of Hatuma Charles.",
}

export default function SkillsPage() {
    return (
        <main className="bg-background text-foreground min-h-screen">
            <Navigation />
            <div className="pt-20">
                <SkillsSection />
            </div>
            <Footer />
        </main>
    )
}
