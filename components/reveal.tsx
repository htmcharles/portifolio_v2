"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"
import { easeOut, fadeUp, stagger } from "@/lib/motion"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -8% 0px" }}
      variants={fadeUp}
      transition={{ duration: 0.7, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  )
}

export function RevealGroup({ children, className, staggerDelay = 0.09 }: RevealProps & { staggerDelay?: number }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -8% 0px" }}
      variants={{
        hidden: stagger.hidden,
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.04,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className }: RevealProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div className={className} variants={fadeUp} transition={{ duration: 0.65, ease: easeOut }}>
      {children}
    </motion.div>
  )
}
