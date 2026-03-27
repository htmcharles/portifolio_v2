"use client"

import Image from "next/image"
import { useActionState, useEffect, useRef } from "react"
import { useFormStatus } from "react-dom"
import { toast } from "sonner"
import { ChevronRight, Mail, Phone, MapPin } from "lucide-react"
import { initialContactFormState, submitContactForm } from "@/app/actions/contact"
import { Button } from "@/components/ui/button"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      size="lg"
      className="w-full"
      icon={<ChevronRight />}
      disabled={pending}
    >
      {pending ? "Sending Message..." : "Send Message"}
    </Button>
  )
}

export default function CTASection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formState, formAction] = useActionState(submitContactForm, initialContactFormState)

  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form-container")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    if (formState.status === "success") {
      toast.success(formState.message)
      formRef.current?.reset()
    }

    if (formState.status === "error") {
      toast.error(formState.message)
    }
  }, [formState])

  return (
    <section id="contact" className="w-full scroll-mt-28">
      {/* Top Section: Central CTA Card with Background */}
      <div className="relative pt-12 md:pt-16 lg:pt-20 pb-0 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/cta.jpg"
            alt="Workspace background"
            fill
            sizes="100vw"
            className="object-cover blur-[1px]"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 dark:bg-black/70"></div>
        </div>

        <div className="relative z-10 w-full px-4 md:px-6 flex justify-center">
          <div className="relative bg-card rounded-t-[24px] rounded-b-none p-8 md:p-10 shadow-2xl text-center max-w-2xl w-full mx-auto mb-0">
            {/* Left Ear (Inverted Radius) */}
            <div
              className="absolute bottom-0 -left-[24px] w-[24px] h-[24px] bg-transparent pointer-events-none hidden md:block"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 0 0, transparent 24px, var(--color-card) 24.5px)",
              }}
            />
            {/* Right Ear (Inverted Radius) */}
            <div
              className="absolute bottom-0 -right-[24px] w-[24px] h-[24px] bg-transparent pointer-events-none hidden md:block"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 100% 0, transparent 24px, var(--color-card) 24.5px)",
              }}
            />

            <div className="inline-block bg-muted px-3 py-1 rounded-full mb-6">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#7A3B3B] uppercase">
                Available for Projects
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-light mb-6 text-balance leading-tight text-foreground">
              Need a reliable engineer to turn product ideas into shipped software?
            </h2>

            <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed max-w-xl mx-auto">
              I build performant interfaces, maintainable backends, and production-ready user experiences for teams that care about speed, clarity, and quality.
            </p>

            <Button
              size="lg"
              onClick={scrollToForm}
              icon={<ChevronRight />}
            >
              Start a Project Inquiry
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Section: Contact Info & Form */}
      <div id="contact-form-container" className="w-full bg-background py-16 md:py-24">
        <div className="w-full px-4 md:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Side: Contact Info */}
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl border border-border h-full">
              <p className="text-sm tracking-widest text-[#7A3B3B] dark:text-[#A85C5C] font-semibold mb-6 uppercase">Get In Touch</p>

              <h2 className="text-3xl md:text-4xl xl:text-5xl font-light mb-8 text-balance leading-tight text-foreground">
                Let&apos;s Work Together
              </h2>

              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Ready to bring your project to life? I would love to hear about your ideas and discuss how we can work together.
              </p>

              <div className="space-y-8">
                <a href="mailto:hatumacharles1@gmail.com" className="flex items-center gap-6 group hover:opacity-80 transition-opacity">
                  <div className="w-14 h-14 bg-[#7A3B3B] rounded-full flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <Mail size={24} className="text-white" />
                  </div>
                  <span className="text-foreground text-lg md:text-xl break-all md:break-normal">hatumacharles1@gmail.com</span>
                </a>
                <a href="tel:+250793234963" className="flex items-center gap-6 group hover:opacity-80 transition-opacity">
                  <div className="w-14 h-14 bg-[#7A3B3B] rounded-full flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <Phone size={24} className="text-white" />
                  </div>
                  <span className="text-foreground text-lg md:text-xl">+250 793 234 963</span>
                </a>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-[#7A3B3B] rounded-full flex items-center justify-center shrink-0 shadow-md">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <span className="text-foreground text-lg md:text-xl">Muhanga, Rwanda</span>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl border border-border">
              <div className="mb-8">
                <h3 className="text-2xl font-light text-foreground">Send a Message</h3>
              </div>
              <form
                ref={formRef}
                className="space-y-6"
                action={formAction}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <input
                      name="firstName"
                      required
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-[#7A3B3B] focus:border-transparent outline-none transition text-foreground placeholder:text-muted-foreground"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <input
                      name="lastName"
                      required
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-[#7A3B3B] focus:border-transparent outline-none transition text-foreground placeholder:text-muted-foreground"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    name="email"
                    required
                    type="email"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-[#7A3B3B] focus:border-transparent outline-none transition text-foreground placeholder:text-muted-foreground"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Project Type</label>
                  <select
                    name="projectType"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-transparent focus:ring-2 focus:ring-[#7A3B3B]"
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>
                    <option value="Web Application">Web Application</option>
                    <option value="E-commerce Site">E-commerce Site</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="API Development">API Development</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-[#7A3B3B] focus:border-transparent outline-none transition resize-none text-foreground placeholder:text-muted-foreground"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <p className="text-sm text-muted-foreground">
                  Messages are sent directly from the site. If the form is not configured yet, I can still be reached at{" "}
                  <a href="mailto:hatumacharles1@gmail.com" className="text-[#7A3B3B] underline underline-offset-4">
                    hatumacharles1@gmail.com
                  </a>
                  .
                </p>

                <SubmitButton />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
