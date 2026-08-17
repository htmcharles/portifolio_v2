"use client"

import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"
import { easeOut } from "@/lib/motion"

export default function AnimatedStat({ value }: { value: string }) {
  const reduceMotion = useReducedMotion()
  const numeric = /^\d+$/.test(value)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const count = useMotionValue(0)
  const displayed = useTransform(count, (latest) => String(Math.round(latest)))

  useEffect(() => {
    if (!numeric || reduceMotion || !inView) return
    const controls = animate(count, Number(value), { duration: 1.05, ease: easeOut })
    return () => controls.stop()
  }, [count, inView, numeric, reduceMotion, value])

  if (!numeric || reduceMotion) {
    return <span ref={ref}>{value}</span>
  }

  return <motion.span ref={ref}>{displayed}</motion.span>
}
