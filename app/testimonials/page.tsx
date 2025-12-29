import Navigation from "@/components/navigation"
import TestimonialsSection from "@/components/testimonials-section"
import Footer from "@/components/footer"

export const metadata = {
    title: "Testimonials - Hatuma Charles",
    description: "What clients and colleagues say about working with Hatuma Charles.",
}

export default function TestimonialsPage() {
    return (
        <main className="bg-white">
            <Navigation />
            <div className="pt-20">
                <TestimonialsSection />
            </div>
            <Footer />
        </main>
    )
}
