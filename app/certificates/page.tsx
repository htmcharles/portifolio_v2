import Navigation from "@/components/navigation"
import CertificatesSection from "@/components/certificates-section"
import AboutSection from "@/components/about-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export const metadata = {
    title: "Certificates - Hatuma Charles",
    description: "Professional milestones and technical validations of Hatuma Charles's expertise.",
}

export default function CertificatesPage() {
    return (
        <main className="bg-background text-foreground min-h-screen">
            <Navigation />
            <div className="pt-20"> {/* Add padding top to account for fixed navigation */}
                <AboutSection />
                <CertificatesSection />
                <CTASection />
            </div>
            <Footer />
        </main>
    )
}
