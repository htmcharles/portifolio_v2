import Navigation from "@/components/navigation"
import PageHero from "@/components/page-hero"
import ExperienceSection from "@/components/experience-section"
import Footer from "@/components/footer"

export const metadata = {
    title: "Experience",
    description: "Rwanda Coding Academy training, student leadership, competitions, and shipped project work by Hatuma Charles in Kigali.",
}

export default function ExperiencePage() {
    return (
        <main className="bg-background text-foreground min-h-screen">
            <Navigation />
            <PageHero
                eyebrow="Career Journey"
                title="RCA training, leadership, and live builds."
                description="Student representative and chairman for 2025–2026, Rwanda Coding Academy training from 2023, and public URLs for the systems and sites in the archive."
                stats={[
                    { value: "2025–26", label: "Student representative and chairman" },
                    { value: "2023", label: "Earliest public work in this archive" },
                    { value: "7", label: "Tracks: web, systems, security, AI/ML, embedded, testing" },
                ]}
            />
            <ExperienceSection />
            <Footer />
        </main>
    )
}
