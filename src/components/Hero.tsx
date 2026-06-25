import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const particles = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  duration: Math.random() * 3 + 2,
  delay: Math.random() * 2,
}))

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-espresso flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #D4882F 0%, transparent 70%)',
            left: `${mousePosition.x * 0.3}%`,
            top: `${mousePosition.y * 0.3}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #8c3b3b 0%, transparent 70%)',
            right: '10%',
            top: '20%',
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-[350px] h-[350px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #D4882F 0%, transparent 70%)',
            left: '5%',
            bottom: '10%',
          }}
          animate={{
            y: [0, 20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #5e3b22 0%, transparent 70%)',
            right: '20%',
            bottom: '20%',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-amber/30 rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 border border-amber/30 text-amber text-sm font-sans tracking-widest uppercase rounded-full">
            Artisan Bakery
          </span>
        </motion.div>

        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: 'easeOut' }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream font-medium leading-tight"
          >
            Misri Lane
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24, ease: 'easeOut' }}
          className="text-cream/70 text-lg md:text-xl font-sans mb-10 max-w-2xl mx-auto"
        >
          Crystal clarity, refined into modern form. Where every creation tells a story of precision, warmth, and artisanal excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#menu"
            className="bg-amber text-espresso-dark px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-amber-light transition-colors duration-300"
          >
            Explore Our Menu
          </a>
          <a
            href="#about"
            className="border border-cream/30 text-cream px-8 py-4 rounded-full font-sans text-base hover:bg-cream/10 transition-colors duration-300"
          >
            Our Story
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <a href="#about" className="flex flex-col items-center text-cream/50 hover:text-cream transition-colors">
          <span className="text-xs font-sans tracking-widest uppercase mb-2">Scroll</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </motion.div>
    </section>
  )
}
