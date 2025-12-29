import Navigation from "@/components/navigation"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"

export const metadata = {
    title: "About - Hatuma Charles",
    description: "Learn more about Hatuma Charles, a Full-Stack Software Engineer specializing in modern web applications.",
}

export default function AboutPage() {
    return (
        <main className="bg-white">
            <Navigation />
            <div className="pt-20">
                <AboutSection />
            </div>
            <Footer />
        </main>
    )
}
