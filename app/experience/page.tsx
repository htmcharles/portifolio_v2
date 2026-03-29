import Navigation from "@/components/navigation"
import PageHero from "@/components/page-hero"
import ExperienceSection from "@/components/experience-section"
import Footer from "@/components/footer"

export const metadata = {
    title: "Experience - Hatuma Charles",
    description: "Professional journey and work experience of Hatuma Charles.",
}

export default function ExperiencePage() {
    return (
        <main className="bg-background text-foreground min-h-screen">
            <Navigation />
            <PageHero
                eyebrow="Career Journey"
                title="A portfolio career shaped by shipped work, systems thinking, and iterative growth."
                description="This page focuses on how the work evolved: interface delivery, operational systems, backend engineering, and the habits that make product work reliable."
                stats={[
                    { value: "4+", label: "Years of applied product development" },
                    { value: "4", label: "Experience chapters in the timeline" },
                    { value: "2", label: "Core tracks: frontend clarity and backend reliability" },
                ]}
            />
            <ExperienceSection />
            <Footer />
        </main>
    )
}
