"use client"

import Image from "next/image"
import { useRef, useState, type FormEvent } from "react"
import { toast } from "sonner"
import { CalendarDays, ChevronRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  bookingSlots,
  bookingTimezone,
  composeInquiry,
  projectTypes,
  site,
  whatsappMessageUrl,
  whatsappUrl,
} from "@/lib/site"

export default function CTASection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [preferredDate, setPreferredDate] = useState("")
  const [preferredTime, setPreferredTime] = useState("")
  const [pending, setPending] = useState(false)

  const scrollToForm = () => {
    document.getElementById("contact-form-container")?.scrollIntoView({ behavior: "smooth" })
  }

  const bookingWhatsApp = whatsappMessageUrl(
    preferredDate || preferredTime
      ? `Hi ${site.name}, I would like to book a call on ${preferredDate || "a date we agree"} at ${preferredTime || "a time we agree"} (${bookingTimezone}).`
      : `Hi ${site.name}, I would like to book a call.`,
  )

  const today = new Date().toISOString().split("T")[0]

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    if (String(data.get("company") ?? "").trim()) {
      toast.success("Thanks. Your message has been received.")
      form.reset()
      return
    }

    const firstName = String(data.get("firstName") ?? "").trim()
    const lastName = String(data.get("lastName") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const projectType = String(data.get("projectType") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()

    if (firstName.length < 2 || lastName.length < 2 || !email || !projectType || message.length < 12) {
      toast.error("Please complete the form with a bit more detail.")
      return
    }

    const inquiry = composeInquiry({
      firstName,
      lastName,
      email,
      projectType,
      message,
      preferredDate: preferredDate || undefined,
      preferredTime: preferredTime || undefined,
    })

    setPending(true)

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`,
          email,
          _subject: `Portfolio inquiry: ${projectType}`,
          message: inquiry,
          _captcha: "false",
        }),
      })

      if (!response.ok) {
        throw new Error("Form delivery failed")
      }

      toast.success("Message sent. I will reply within 24 to 48 hours.")
      form.reset()
      setPreferredDate("")
      setPreferredTime("")
    } catch {
      window.open(whatsappMessageUrl(`Hi ${site.name},\n\n${inquiry}`), "_blank", "noopener,noreferrer")
      toast.message("Email delivery is unavailable, so WhatsApp was opened with the same message.")
    } finally {
      setPending(false)
    }
  }

  return (
    <section id="contact" className="w-full scroll-mt-28">
      <div className="relative overflow-hidden pb-0 pt-12 md:pt-16 lg:pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/cta.jpg"
            alt="Workspace background"
            fill
            sizes="100vw"
            className="object-cover blur-[1px]"
          />
          <div className="absolute inset-0 bg-black/40 dark:bg-black/70" />
        </div>

        <div className="relative z-10 flex w-full justify-center px-4 md:px-6">
          <div className="relative mx-auto mb-0 w-full max-w-2xl rounded-t-[24px] rounded-b-none bg-card p-8 text-center shadow-2xl md:p-10">
            <div className="mb-6 inline-block rounded-full bg-muted px-3 py-1">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#7A3B3B] uppercase">
                Freelance and full-time
              </span>
            </div>

            <h2 className="mb-6 text-balance text-3xl font-light leading-tight text-foreground md:text-4xl">
              Book a call, WhatsApp, or send the brief.
            </h2>

            <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              I reply within 24 to 48 hours. Use WhatsApp for the fastest path, email for a written brief, or pick a call slot in Africa/Kigali time.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Button size="lg" onClick={scrollToForm} icon={<ChevronRight />}>
                Book a Call
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a href={`mailto:${site.email}`}>Email</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div id="contact-form-container" className="w-full bg-background py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-2xl md:p-12">
              <p className="mb-6 text-sm font-semibold tracking-widest text-[#7A3B3B] uppercase dark:text-[#A85C5C]">
                Get In Touch
              </p>

              <h2 className="mb-8 text-balance text-3xl font-light leading-tight text-foreground md:text-4xl xl:text-5xl">
                Four ways to reach me
              </h2>

              <div className="space-y-6">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-6 transition-opacity hover:opacity-80">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#7A3B3B] shadow-md">
                    <MessageCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">WhatsApp</div>
                    <div className="text-lg text-foreground md:text-xl">{site.phoneDisplay}</div>
                  </div>
                </a>
                <a href={`mailto:${site.email}`} className="group flex items-center gap-6 transition-opacity hover:opacity-80">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#7A3B3B] shadow-md">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Email</div>
                    <div className="break-all text-lg text-foreground md:break-normal md:text-xl">{site.email}</div>
                  </div>
                </a>
                <a href={`tel:${site.phoneE164}`} className="group flex items-center gap-6 transition-opacity hover:opacity-80">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#7A3B3B] shadow-md">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Call</div>
                    <div className="text-lg text-foreground md:text-xl">{site.phoneDisplay}</div>
                  </div>
                </a>
                <div className="flex items-center gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#7A3B3B] shadow-md">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Location</div>
                    <div className="text-lg text-foreground md:text-xl">{site.location}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8 shadow-2xl md:p-12">
              <div className="mb-8">
                <h3 className="text-2xl font-light text-foreground">Send a message or book a slot</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Call slots are in {bookingTimezone}. You can also send the same slot on WhatsApp.
                </p>
              </div>
              <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">First Name</label>
                    <input
                      name="firstName"
                      required
                      type="text"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-transparent focus:ring-2 focus:ring-[#7A3B3B]"
                      placeholder="Jean"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">Last Name</label>
                    <input
                      name="lastName"
                      required
                      type="text"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-transparent focus:ring-2 focus:ring-[#7A3B3B]"
                      placeholder="Uwimana"
                    />
                  </div>
                </div>

                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Email</label>
                  <input
                    name="email"
                    required
                    type="email"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-transparent focus:ring-2 focus:ring-[#7A3B3B]"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">What do you need?</label>
                  <select
                    name="projectType"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-transparent focus:ring-2 focus:ring-[#7A3B3B]"
                  >
                    <option value="" disabled>
                      Select a type
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">Preferred date</label>
                    <input
                      name="preferredDate"
                      type="date"
                      min={today}
                      value={preferredDate}
                      onChange={(event) => setPreferredDate(event.target.value)}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-transparent focus:ring-2 focus:ring-[#7A3B3B]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">Preferred time ({bookingTimezone})</label>
                    <select
                      name="preferredTime"
                      value={preferredTime}
                      onChange={(event) => setPreferredTime(event.target.value)}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-transparent focus:ring-2 focus:ring-[#7A3B3B]"
                    >
                      <option value="">No preference</option>
                      {bookingSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-transparent focus:ring-2 focus:ring-[#7A3B3B]"
                    placeholder="Tell me about the role or project..."
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="flex-1">
                    <Button type="submit" size="lg" className="w-full" icon={<ChevronRight />} disabled={pending}>
                      {pending ? "Sending Message..." : "Send Message"}
                    </Button>
                  </div>
                  <Button type="button" size="lg" variant="outline" asChild>
                    <a href={bookingWhatsApp} target="_blank" rel="noopener noreferrer">
                      <CalendarDays size={16} />
                      Send slot on WhatsApp
                    </a>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
