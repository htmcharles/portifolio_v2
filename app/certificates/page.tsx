import Navigation from "@/components/navigation"
import PageHero from "@/components/page-hero"
import CertificatesSection from "@/components/certificates-section"
import Footer from "@/components/footer"
import { certificates, getCertificateIssuers } from "@/lib/certificates"

const issuerCount = getCertificateIssuers().length

export const metadata = {
    title: "Certificates",
    description: "Certificates held by Hatuma Charles, grouped by issuer, including ThinkCyber cybersecurity training and the Wavumbuzi Entrepreneurship Challenge.",
}

export default function CertificatesPage() {
    return (
        <main className="bg-background text-foreground min-h-screen">
            <Navigation />
            <PageHero
                eyebrow="Certificates"
                title="Issued credentials, grouped by organization."
                description="Cybersecurity training, entrepreneurship, and other certificates as they are added. Each entry links to the original PDF."
                stats={[
                    { value: String(certificates.length), label: "Certificates on this page" },
                    { value: String(issuerCount), label: "Issuing organizations" },
                    { value: "2024", label: "Most recent credential year" },
                ]}
            />
            <CertificatesSection />
            <Footer />
        </main>
    )
}
