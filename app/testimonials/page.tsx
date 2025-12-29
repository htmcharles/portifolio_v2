import Navigation from "@/components/navigation"
import TestimonialsSection from "@/components/testimonials-section"
import AboutSection from "@/components/about-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export const metadata = {
    title: "Testimonials - Hatuma Charles",
    description: "What clients and colleagues say about working with Hatuma Charles.",
}

export default function TestimonialsPage() {
    return (
        <main className="bg-background text-foreground min-h-screen">
            <Navigation />
            <div className="pt-20">
                <AboutSection />
                <TestimonialsSection />
                <CTASection />
            </div>
            <Footer />
        </main>
    )
}
