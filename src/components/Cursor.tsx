import { useEffect, useRef } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'
import { motion } from 'framer-motion'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorRingRef = useRef<HTMLDivElement>(null)

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [cursorX, cursorY])

  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null
  }

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-amber rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      <motion.div
        ref={cursorRingRef}
        className="fixed top-0 left-0 w-7 h-7 border border-cream/25 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
    </>
  )
}
