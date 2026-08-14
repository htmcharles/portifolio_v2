import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { site } from "@/lib/site"

export const metadata = {
  title: "Privacy",
  description: `How ${site.name} handles messages sent through this portfolio.`,
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <section className="mx-auto w-full max-w-3xl px-4 pb-24 pt-28 md:px-6">
        <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#7A3B3B] uppercase dark:text-[#A85C5C]">
          Legal
        </p>
        <h1 className="text-4xl font-light text-foreground md:text-5xl">Privacy</h1>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            The contact form on this site collects your name, email, project type, optional call slot, and message
            so {site.name} can reply to project or hiring inquiries.
          </p>
          <p>
            Messages are delivered by email to {site.email}. They are not sold, and they are not used for marketing lists.
          </p>
          <p>
            If you contact me on WhatsApp or by phone, that conversation stays on those channels under their own policies.
          </p>
          <p>
            To ask for a message to be deleted, email {site.email}.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
