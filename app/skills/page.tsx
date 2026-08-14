import Navigation from "@/components/navigation"
import PageHero from "@/components/page-hero"
import SkillsSection from "@/components/skills-section"
import Footer from "@/components/footer"

export const metadata = {
    title: "Skills",
    description: "Frontend, backend, DevOps, cybersecurity, AI/ML, embedded systems, and testing skills from Rwanda Coding Academy and shipped project work.",
}

export default function SkillsPage() {
    return (
        <main className="bg-background text-foreground min-h-screen">
            <Navigation />
            <PageHero
                eyebrow="Technical Breadth"
                title="Seven RCA tracks, with tools that actually appear in the work."
                description="Skills are grouped the way Rwanda Coding Academy trains: frontend, backend, DevOps, cybersecurity, AI/ML, embedded systems, and testing."
                stats={[
                    { value: "7", label: "Training tracks on this page" },
                    { value: "RCA", label: "Curriculum coverage, not a padded tool list" },
                    { value: "Kigali", label: "Based in Rwanda, available remotely" },
                ]}
            />
            <SkillsSection />
            <Footer />
        </main>
    )
}
