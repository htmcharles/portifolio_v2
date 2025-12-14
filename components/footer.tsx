export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-burgundy-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">M</span>
            </div>
            <span className="text-lg font-semibold text-gray-900">Mindify</span>
          </div>

          {/* Copyright and credit */}
          <p className="text-sm text-gray-500">2025 All Rights Reserved. Built In Framer By Judyna</p>
        </div>
      </div>
    </footer>
  )
}
