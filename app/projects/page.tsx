import Navigation from "@/components/navigation"
import PageHero from "@/components/page-hero"
import ProjectsSection from "@/components/projects-section"
import Footer from "@/components/footer"
import { getArchiveProjects } from "@/lib/projects"

export const metadata = {
    title: "Projects",
    description: "Live web, systems, and product builds by Hatuma Charles, with public URLs for each project.",
}

export default function ProjectsPage() {
    const count = getArchiveProjects().length

    return (
        <main className="bg-background text-foreground min-h-screen">
            <Navigation />
            <PageHero
                eyebrow="Project Archive"
                title="Live URLs for every build in the archive."
                description="Websites, product interfaces, and systems work. Applied builds are listed first. Each card links to a public demo."
                stats={[
                    { value: String(count), label: "Published projects in the archive" },
                    { value: "4", label: "Frontend, backend, full-stack, open source" },
                    { value: "Live", label: "Every project has a public URL" },
                ]}
            />
            <ProjectsSection />
            <Footer />
        </main>
    )
}
