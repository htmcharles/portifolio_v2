export default function SocialProofSection() {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="w-full pl-40 pr-40 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Stat 1 */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-5xl md:text-6xl font-light text-amber-900 mb-4">300+</h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              people guided toward greater emotional balance.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-5xl md:text-6xl font-light text-amber-900 mb-4">95%</h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              clients notice difference within 5 sessions.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-5xl md:text-6xl font-light text-amber-900 mb-4">5+</h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              years experience in psychological support.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
