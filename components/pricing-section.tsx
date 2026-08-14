import Link from "next/link"

const packages = [
  {
    name: "Website / interface",
    typical: "Typically 1–2 weeks",
    summary: "A public site or product interface with clear pages, responsive layout, and a launch checklist.",
    includes: ["Homepage and core pages", "Mobile layout", "Handover on Vercel or your host"],
  },
  {
    name: "Full-stack application",
    typical: "Typically 3–5 weeks",
    summary: "An application with frontend, backend, and data — bookings, submissions, dashboards, or internal tools.",
    includes: ["Interface + API", "Database model", "Auth or admin flow as scoped"],
  },
  {
    name: "Applied engineering",
    typical: "Scoped after a call",
    summary: "DevOps, cybersecurity, AI/ML, embedded, or testing work sized to the problem rather than a fixed package.",
    includes: ["Written scope", "RCA-track coverage", "Delivery plan before build starts"],
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-muted/30 py-16 dark:bg-background md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-[#7A3B3B] uppercase dark:text-[#A85C5C]">
            Pricing
          </p>
          <h2 className="mt-4 text-balance text-3xl font-light leading-tight text-foreground md:text-5xl">
            Public packages, quoted after a short call.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            I do not publish a fake rate card. Every engagement gets a written quote after we agree scope. Book a call or WhatsApp to start.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((item) => (
            <article key={item.name} className="flex flex-col rounded-[1.75rem] border border-border bg-card p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-foreground">{item.name}</h3>
              <p className="mt-2 text-sm font-medium text-[#7A3B3B] dark:text-[#A85C5C]">{item.typical}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
              <ul className="mt-6 space-y-2 text-sm text-foreground">
                {item.includes.map((line) => (
                  <li key={line} className="rounded-xl bg-muted/70 px-4 py-2 dark:bg-muted/30">
                    {line}
                  </li>
                ))}
              </ul>
              <Link
                href="/#contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#7A3B3B] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#6a3333]"
              >
                Request a quote
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
