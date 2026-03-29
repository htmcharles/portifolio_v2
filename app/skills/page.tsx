import Navigation from "@/components/navigation"
import PageHero from "@/components/page-hero"
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
            <PageHero
                eyebrow="Technical Breadth"
                title="Frontend polish, backend fundamentals, and delivery tooling in one stack."
                description="The skills page shows the technologies I rely on to design, build, ship, and maintain products across different stages of the development lifecycle."
                stats={[
                    { value: "5", label: "Skill groups mapped by delivery area" },
                    { value: "30+", label: "Technologies represented in the stack" },
                    { value: "1", label: "Goal: practical tools that ship well" },
                ]}
            />
            <SkillsSection />
            <Footer />
        </main>
    )
}
