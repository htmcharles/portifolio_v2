export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "I never thought online therapy could feel this personal. Julia helped me rebuild my confidence and take control of my life.",
      author: "Sarah",
      age: 32,
    },
    {
      quote:
        "We were struggling with constant arguments. Now, we're finally communicating in a way that brings us closer.",
      author: "Mark & Lisa",
      age: "40s",
    },
    {
      quote:
        "Losing my dad was the hardest thing I've ever faced. These sessions gave me the tools and space I needed to heal.",
      author: "Emily",
      age: 27,
    },
  ]

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-amber-900">What Clients Say</p>
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
                  <span key={i} className="text-lg text-amber-900">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm leading-relaxed text-gray-700 md:text-base">"{testimonial.quote}"</p>

              {/* Author */}
              <p className="text-sm font-medium text-gray-900">
                — {testimonial.author}, {testimonial.age}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
