import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="w-full px-4 md:px-12 lg:px-20 xl:px-40 max-w-[1920px] mx-auto py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Hatuma Charles logo" width={24} height={24} className="h-6 w-6" />
            <span className="text-lg font-semibold text-[#7A3B3B] dark:text-white">Hatuma Charles</span>
          </div>

          <p className="text-sm text-muted-foreground">{new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
