"use client"

import { ChevronRight, Mail, Phone, MapPin, Video } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form-container")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="contact" className="w-full">
      {/* Top Section: Central CTA Card with Background */}
      <div className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/cta.jpg"
            alt="CTA Background"
            className="w-full h-full object-cover blur-[1px]"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 w-full px-4 md:px-6">
          <div className="flex justify-center">
            <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-2xl text-center max-w-2xl w-full">
              <div className="inline-block bg-muted px-3 py-1 rounded-full mb-6">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#7A3B3B] uppercase">
                  Your New Beginning
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-light mb-6 text-balance leading-tight text-black">
                Take the First Step Toward the Life You Deserve
              </h2>

              <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed max-w-xl mx-auto">
                Over 300 individuals have reclaimed their confidence, rebuilt relationships, and found emotional peace. You can, too.
              </p>

              <Button
                size="lg"
                onClick={scrollToForm}
                icon={<Video />}
              >
                Book A Session
              </Button>
            </div>
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
                Let's Work Together
              </h2>

              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Ready to bring your project to life? I'd love to hear about your ideas and discuss how we can work together.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-[#7A3B3B] rounded-full flex items-center justify-center shrink-0 shadow-md">
                    <Mail size={24} className="text-white" />
                  </div>
                  <span className="text-foreground text-lg md:text-xl break-all md:break-normal">hatuma.charles@email.com</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-[#7A3B3B] rounded-full flex items-center justify-center shrink-0 shadow-md">
                    <Phone size={24} className="text-white" />
                  </div>
                  <span className="text-foreground text-lg md:text-xl">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-[#7A3B3B] rounded-full flex items-center justify-center shrink-0 shadow-md">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <span className="text-foreground text-lg md:text-xl">San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl border border-border">
              <div className="mb-8">
                <h3 className="text-2xl font-light text-foreground">Send a Message</h3>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-[#7A3B3B] focus:border-transparent outline-none transition text-foreground placeholder:text-muted-foreground"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-[#7A3B3B] focus:border-transparent outline-none transition text-foreground placeholder:text-muted-foreground"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-[#7A3B3B] focus:border-transparent outline-none transition text-foreground placeholder:text-muted-foreground"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-[#7A3B3B] focus:border-transparent outline-none transition text-foreground">
                    <option>Web Application</option>
                    <option>E-commerce Site</option>
                    <option>Mobile App</option>
                    <option>API Development</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-[#7A3B3B] focus:border-transparent outline-none transition resize-none text-foreground placeholder:text-muted-foreground"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <Button
                  size="lg"
                  className="w-full"
                  icon={<ChevronRight />}
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
