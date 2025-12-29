"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Home, ArrowLeft } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    const router = useRouter()

    return (
        <main className="bg-background text-foreground min-h-screen flex flex-col">
            <Navigation />

            <div className="flex-1 flex items-center justify-center p-4 pt-32 pb-20">
                <div className="max-w-md w-full text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-9xl font-bold text-[#7A3B3B] dark:text-[#A85C5C] opacity-20">404</h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative -mt-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-light mb-4">Page Not Found</h2>
                        <p className="text-muted-foreground mb-10 leading-relaxed">
                            It seems you've wandered into uncharted territory. The page you are looking for might have been moved or doesn't exist.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild variant="default" size="lg" className="bg-[#7A3B3B] hover:bg-[#6a3333] text-white rounded-full px-8">
                                <Link href="/" className="flex items-center gap-2">
                                    <Home size={18} />
                                    Back to Home
                                </Link>
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="rounded-full px-8 border-[#7A3B3B]/20"
                                onClick={() => router.back()}
                            >
                                <div className="flex items-center gap-2">
                                    <ArrowLeft size={18} />
                                    Go Back
                                </div>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
