export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="w-full px-4 md:px-12 lg:px-20 xl:px-40 max-w-[1920px] mx-auto py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#7A3B3B] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">HC</span>
            </div>
            <span className="text-lg font-semibold text-[#7A3B3B] dark:text-white">Hatuma Charles</span>
          </div>

          {/* Copyright and credit */}
          <p className="text-sm text-muted-foreground">{new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
