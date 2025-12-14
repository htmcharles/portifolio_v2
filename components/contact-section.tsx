import { Button } from "@/components/ui/button"
import { ChevronRight, Mail, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="w-full pl-40 pr-40">
        {/* Background image with overlay */}
        <div className="absolute inset-0 ml-40 mr-40">
          <img
            src="/images/cta.jpg"
            alt="Contact Background"
            className="w-full h-full object-cover blur-sm"
          />
          {/* Diagonal striped overlay */}
          <div
            className="absolute inset-0 bg-white/40 dark:bg-black/60"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)",
            }}
          ></div>
        </div>

        {/* Content container - Desktop/Large screens */}
        <div className="relative max-w-6xl mx-auto hidden lg:block">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="bg-card rounded-3xl p-12 shadow-2xl border border-border">
              <p className="text-sm tracking-widest text-[#7A3B3B] dark:text-[#A85C5C] font-semibold mb-6 uppercase">Get In Touch</p>

              <h2 className="text-4xl xl:text-5xl font-light mb-8 text-balance leading-tight text-foreground">
                Let's Work Together
              </h2>

              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Ready to bring your project to life? I'd love to hear about your ideas and discuss how we can work together.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#7A3B3B] rounded-full flex items-center justify-center">
                    <Mail size={18} className="text-white" />
                  </div>
                  <span className="text-foreground">hatuma.charles@email.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#7A3B3B] rounded-full flex items-center justify-center">
                    <Phone size={18} className="text-white" />
                  </div>
                  <span className="text-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#7A3B3B] rounded-full flex items-center justify-center">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <span className="text-foreground">San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-3xl p-12 shadow-2xl border border-border">
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
                  icon={<ChevronRight size={16} />}
                  className="w-full"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Content container - Tablet screens */}
        <div className="relative max-w-4xl mx-auto hidden md:block lg:hidden">
          <div className="bg-card rounded-2xl p-8 shadow-2xl border border-border">
            <div className="text-center mb-8">
              <p className="text-xs tracking-widest text-[#7A3B3B] dark:text-[#A85C5C] font-semibold mb-4 uppercase">Get In Touch</p>
              <h2 className="text-3xl font-light mb-6 text-balance leading-tight text-foreground">
                Let's Work Together
              </h2>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  className="px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-[#7A3B3B] focus:border-transparent outline-none transition text-foreground placeholder:text-muted-foreground"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-[#7A3B3B] focus:border-transparent outline-none transition text-foreground placeholder:text-muted-foreground"
                  placeholder="Last Name"
                />
              </div>
              <input
                type="email"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-[#7A3B3B] focus:border-transparent outline-none transition text-foreground placeholder:text-muted-foreground"
                placeholder="Email"
              />
              <textarea
                rows={3}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-[#7A3B3B] focus:border-transparent outline-none transition resize-none text-foreground placeholder:text-muted-foreground"
                placeholder="Your message..."
              ></textarea>
              <Button
                size="default"
                icon={<ChevronRight size={14} />}
                className="w-full"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Content container - Mobile screens */}
        <div className="relative max-w-sm mx-auto md:hidden">
          <div className="bg-card rounded-2xl p-6 shadow-2xl border border-border">
            <div className="text-center mb-6">
              <p className="text-xs tracking-widest text-[#7A3B3B] dark:text-[#A85C5C] font-semibold mb-4 uppercase">Get In Touch</p>
              <h2 className="text-2xl font-light mb-4 text-balance leading-tight text-foreground">
                Let's Work Together
              </h2>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-[#7A3B3B] focus:border-transparent outline-none transition text-foreground placeholder:text-muted-foreground"
                placeholder="Full Name"
              />
              <input
                type="email"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-[#7A3B3B] focus:border-transparent outline-none transition text-foreground placeholder:text-muted-foreground"
                placeholder="Email"
              />
              <textarea
                rows={3}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-[#7A3B3B] focus:border-transparent outline-none transition resize-none text-foreground placeholder:text-muted-foreground"
                placeholder="Your message..."
              ></textarea>
              <Button
                size="sm"
                icon={<ChevronRight size={12} />}
                className="w-full"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}