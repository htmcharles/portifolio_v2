import Navigation from "@/components/navigation"
import PageHero from "@/components/page-hero"
import ProjectsSection from "@/components/projects-section"
import Footer from "@/components/footer"

export const metadata = {
    title: "Projects - Hatuma Charles",
    description: "A showcase of innovative web applications and projects developed by Hatuma Charles.",
}

export default function ProjectsPage() {
    return (
        <main className="bg-background text-foreground min-h-screen">
            <Navigation />
            <PageHero
                eyebrow="Project Archive"
                title="A deeper look at shipped interfaces, systems, and product builds."
                description="This archive pulls together launch-ready websites, operational systems, and open-source work across frontend, backend, and full-stack delivery."
                stats={[
                    { value: "14", label: "Published projects in the archive" },
                    { value: "4", label: "Delivery categories across the portfolio" },
                    { value: "100%", label: "Focus on real-world launch readiness" },
                ]}
            />
            <ProjectsSection />
            <Footer />
        </main>
    )
}
