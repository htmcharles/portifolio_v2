export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Initial Contact",
      description:
        "Schedule a free 15-minute consultation to discuss your concerns and see if my approach is right for you. No pressure - just a conversation.",
    },
    {
      number: "2",
      title: "Personalized Plan",
      description:
        "I'll create a customized plan that aligns with your goals, whether you're managing anxiety or improving your broken relationships.",
    },
    {
      number: "3",
      title: "Online Sessions",
      description:
        "Join one-on-one sessions from anywhere, using secure video calls. We'll work together to overcome challenges and track your progress.",
    },
  ]

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-16 md:py-24">
      <div className="w-full pl-40 pr-40 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-amber-900">How It Works</p>
          <h2 className="text-balance text-4xl font-light md:text-5xl">Simple, Convenient, Effective</h2>
        </div>

        {/* Steps Container */}
        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Number with Arrow */}
              <div className="mb-6 flex w-full items-center justify-center">
                <span className="text-5xl font-light text-amber-900">{step.number}</span>
                {index < steps.length - 1 && (
                  <svg
                    className="mx-4 hidden h-8 w-12 text-amber-900 md:block"
                    viewBox="0 0 48 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 4 Q 36 12, 44 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M40 8 L 44 12 L 40 16"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-light md:text-lg">{step.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600 md:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
