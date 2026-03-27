import Navigation from "@/components/navigation"
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
            <div className="pt-20">
                <ProjectsSection />
            </div>
            <Footer />
        </main>
    )
}
