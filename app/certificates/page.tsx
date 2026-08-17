import Navigation from "@/components/navigation"
import PageHero from "@/components/page-hero"
import CertificatesSection from "@/components/certificates-section"
import Footer from "@/components/footer"
import { getCertificateIssuers, latestCertificateYear, loadCertificates } from "@/lib/certificates"
import { site } from "@/lib/site"

export const metadata = {
  title: "Certificates",
  description: `Certificates and course credentials held by ${site.name}.`,
}

export default async function CertificatesPage() {
  const certificates = await loadCertificates()
  const issuers = await getCertificateIssuers()
  const latestYear = latestCertificateYear(certificates)

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navigation />
      <PageHero
        eyebrow="Certificates"
        title="Issued credentials."
                description="Competitions, leadership, and training. A PDF opens when a scan is on file."
                stats={[
                    { value: String(certificates.length), label: "Credentials on this page" },
                    { value: String(issuers.length), label: "Issuing groups" },
                    { value: latestYear ?? "—", label: "Most recent credential year" },
                ]}
      />
      <CertificatesSection />
      <Footer />
    </main>
  )
}
