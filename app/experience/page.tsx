import Navigation from "@/components/navigation"
import PageHero from "@/components/page-hero"
import ExperienceSection from "@/components/experience-section"
import Footer from "@/components/footer"

export const metadata = {
    title: "Experience",
    description: "Rwanda Coding Academy training, ThinkCyber cybersecurity courses, and shipped project work by Hatuma Charles in Kigali.",
}

export default function ExperiencePage() {
    return (
        <main className="bg-background text-foreground min-h-screen">
            <Navigation />
            <PageHero
                eyebrow="Career Journey"
                title="RCA training, cybersecurity courses, and live builds."
                description="This page is the factual record: Rwanda Coding Academy coverage, ThinkCyber certificates, and the projects with public URLs."
                stats={[
                    { value: "RCA", label: "Software engineering training in Kigali" },
                    { value: "4", label: "Chapters in the timeline" },
                    { value: "7", label: "Tracks: web, systems, security, AI/ML, embedded, testing" },
                ]}
            />
            <ExperienceSection />
            <Footer />
        </main>
    )
}
