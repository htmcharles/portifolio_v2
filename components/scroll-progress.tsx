"use client"

import { useEffect, useState } from "react"

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
      setProgress(nextProgress)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1 bg-transparent">
      <div
        className="h-full bg-[#7A3B3B] transition-[width] duration-150 ease-out dark:bg-[#A85C5C]"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
