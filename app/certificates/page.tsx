import Navigation from "@/components/navigation"
import PageHero from "@/components/page-hero"
import CertificatesSection from "@/components/certificates-section"
import Footer from "@/components/footer"

export const metadata = {
    title: "Certificates - Hatuma Charles",
    description: "Professional milestones and technical validations of Hatuma Charles's expertise.",
}

export default function CertificatesPage() {
    return (
        <main className="bg-background text-foreground min-h-screen">
            <Navigation />
            <PageHero
                eyebrow="Professional Validation"
                title="Training milestones that support practical software delivery."
                description="These certifications reinforce the hands-on work in the portfolio, covering web development, cloud services, Java engineering, and responsive frontend practice."
                stats={[
                    { value: "4", label: "Certification highlights on this page" },
                    { value: "2021-2023", label: "Recent credential timeline" },
                    { value: "3", label: "Focus areas: web, cloud, and engineering foundations" },
                ]}
            />
            <CertificatesSection />
            <Footer />
        </main>
    )
}
