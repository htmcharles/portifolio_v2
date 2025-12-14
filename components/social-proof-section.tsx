export default function SocialProofSection() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="w-full px-4 md:px-6">
        <div
          className="relative max-w-5xl mx-auto rounded-[18px] p-12 shadow-lg overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/images/social-proof.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/60 dark:bg-black/60"></div>

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-5xl md:text-6xl font-light text-foreground dark:text-white mb-4">50+</h3>
              <p className="text-muted-foreground dark:text-white/90 text-base md:text-lg leading-relaxed">
                projects completed successfully.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-5xl md:text-6xl font-light text-foreground dark:text-white mb-4">4+</h3>
              <p className="text-muted-foreground dark:text-white/90 text-base md:text-lg leading-relaxed">
                years of development experience.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-5xl md:text-6xl font-light text-foreground dark:text-white mb-4">100%</h3>
              <p className="text-muted-foreground dark:text-white/90 text-base md:text-lg leading-relaxed">
                client satisfaction rate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
