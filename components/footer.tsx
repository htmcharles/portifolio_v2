export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="w-full pl-40 pr-40 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#7A3B3B] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">HC</span>
            </div>
            <span className="text-lg font-semibold text-[#7A3B3B]">Hatuma Charles</span>
          </div>

          {/* Copyright and credit */}
          <p className="text-sm text-gray-500">2025 All Rights Reserved. Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
