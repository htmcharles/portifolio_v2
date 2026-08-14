import Navigation from "@/components/navigation"
import PageHero from "@/components/page-hero"
import CertificatesSection from "@/components/certificates-section"
import Footer from "@/components/footer"

export const metadata = {
    title: "Certificates",
    description: "ThinkCyber / Cyberium Arena certificates for Hatuma Charles: Intro to Cyber, Linux Fundamentals, Python Fundamentals, and Network Research.",
}

export default function CertificatesPage() {
    return (
        <main className="bg-background text-foreground min-h-screen">
            <Navigation />
            <PageHero
                eyebrow="ThinkCyber / Cyberium"
                title="Named certificates, not placeholder credentials."
                description="Four cybersecurity courses completed in 2024 with ThinkCyber on the Cyberium Arena simulator. Each one opens as the original PDF."
                stats={[
                    { value: "4", label: "ThinkCyber certificates on this page" },
                    { value: "2024", label: "June through November" },
                    { value: "XE / NX", label: "Intro to Cyber, Linux, Python, Network Research" },
                ]}
            />
            <CertificatesSection />
            <Footer />
        </main>
    )
}
