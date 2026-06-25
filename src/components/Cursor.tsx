import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 300 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let isTouch = false

    const moveCursor = (e: MouseEvent) => {
      if (isTouch) return
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleTouch = () => {
      isTouch = true
    }

    const handleMouse = () => {
      isTouch = false
    }

    // Check if device supports touch
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('touchstart', handleTouch, { passive: true })
    window.addEventListener('mouseenter', handleMouse)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('touchstart', handleTouch)
      window.removeEventListener('mouseenter', handleMouse)
    }
  }, [cursorX, cursorY])

  // Hide on mobile/tablet
  if (typeof window !== 'undefined' && (window.innerWidth < 1024 || 'ontouchstart' in window)) {
    return null
  }

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-amber rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Outer ring */}
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-amber/40 rounded-full pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  )
}
