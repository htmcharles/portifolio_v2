export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Hatuma delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise are outstanding.",
      author: "Sarah Johnson",
      role: "CEO, TechStart",
    },
    {
      quote:
        "Working with Hatuma was a game-changer for our project. He transformed our complex requirements into a beautiful, functional application.",
      author: "Mark Thompson",
      role: "Product Manager, InnovateCorp",
    },
    {
      quote:
        "Hatuma's full-stack skills and problem-solving abilities helped us launch our MVP ahead of schedule. Highly recommended!",
      author: "Emily Chen",
      role: "Founder, StartupLab",
    },
  ]

  return (
    <section id="testimonials" className="w-full bg-white py-16 md:py-24">
      <div className="w-full pl-40 pr-40 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#7A3B3B]">What Clients Say</p>
          <h2 className="text-balance text-4xl font-light md:text-5xl">Real Stories. Real Impact</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-start space-y-4 rounded-lg border border-gray-200 bg-gray-50 p-6 md:p-8"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg text-[#7A3B3B]">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm leading-relaxed text-gray-700 md:text-base">"{testimonial.quote}"</p>

              {/* Author */}
              <p className="text-sm font-medium text-gray-900">
                — {testimonial.author}
              </p>
              <p className="text-xs text-gray-500">
                {testimonial.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
