import Navigation from "@/components/navigation"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export const metadata = {
    title: "Contact - Hatuma Charles",
    description: "Get in touch with Hatuma Charles for your next project or collaboration.",
}

export default function ContactPage() {
    return (
        <main className="bg-white">
            <Navigation />
            <div className="pt-20">
                <CTASection />
            </div>
            <Footer />
        </main>
    )
}
