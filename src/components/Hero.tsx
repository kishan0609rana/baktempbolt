import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 6 + 2,
  duration: Math.random() * 4 + 3,
  delay: Math.random() * 2,
}))

const floatingItems = [
  { id: 1, src: '/images/transparent-cake.png', alt: 'Fresh Cake', left: '5%', top: '20%', delay: 0.3, scale: 0.8 },
  { id: 2, src: '/images/transparent-pastry.png', alt: 'Artisan Pastry', right: '8%', top: '15%', delay: 0.5, scale: 0.7 },
  { id: 3, src: '/images/cake.svg', alt: '', left: '15%', bottom: '25%', delay: 0.7, scale: 0.4 },
  { id: 4, src: '/images/cookie_full.svg', alt: '', right: '20%', bottom: '30%', delay: 0.9, scale: 0.35 },
]

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-espresso flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-25"
        >
          <source src="/media/Baker_hands_kneading_dough_202606241752.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/50 to-espresso/90" />
      </div>

      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(212, 136, 47, 0.25) 0%, transparent 70%)',
            left: `${mousePosition.x * 0.2}%`,
            top: `${mousePosition.y * 0.2}%`,
          }}
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(140, 59, 59, 0.2) 0%, transparent 70%)',
            right: '5%',
            top: '10%',
          }}
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(212, 136, 47, 0.15) 0%, transparent 70%)',
            left: '0%',
            bottom: '5%',
          }}
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Floating transparent images */}
      {floatingItems.map((item) => (
        <motion.img
          key={item.id}
          src={item.src}
          alt={item.alt}
          className="absolute z-[2] opacity-60 hidden lg:block"
          style={{
            left: item.left,
            right: item.right,
            top: item.top,
            bottom: item.bottom,
            width: `${200 * (item.scale || 1)}px`,
            height: 'auto',
          }}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 0.6, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: item.delay, ease: 'easeOut' }}
        />
      ))}

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-amber/40 rounded-full z-[1]"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}

      {/* Giant ghost text */}
      <div className="absolute inset-x-0 flex items-center justify-center pointer-events-none select-none z-[1] opacity-5">
        <span
          className="font-serif font-bold text-[clamp(120px,25vw,400px)] text-cream uppercase tracking-tight whitespace-nowrap"
          style={{ lineHeight: 0.8 }}
        >
          MISRI
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-8"
        >
          <span className="inline-block px-5 py-2.5 border border-amber/40 text-amber text-sm font-sans tracking-[0.2em] uppercase rounded-full bg-espresso/30 backdrop-blur-sm">
            Artisan Bakery Est. 2024
          </span>
        </motion.div>

        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
            className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-cream font-medium leading-[0.9] tracking-tight"
          >
            Misri Lane
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="text-cream/70 text-lg md:text-2xl font-sans mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Crystal clarity, refined into modern form.
          <span className="block mt-2 text-base md:text-lg text-cream/50 italic font-serif">
            Where every creation tells a story of precision, warmth, and artisanal excellence.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <a
            href="#menu"
            className="group relative bg-amber text-espresso-dark px-10 py-4 rounded-full font-sans text-base font-medium overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-amber/20"
          >
            <span className="relative z-10">Explore Our Menu</span>
            <div className="absolute inset-0 bg-amber-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>
          <a
            href="#about"
            className="border-2 border-cream/30 text-cream px-10 py-4 rounded-full font-sans text-base font-medium hover:bg-cream/10 hover:border-cream/50 transition-all duration-300 backdrop-blur-sm"
          >
            Our Story
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <a href="#about" className="flex flex-col items-center text-cream/40 hover:text-cream transition-colors duration-300">
          <span className="text-xs font-sans tracking-[0.3em] uppercase mb-3">Scroll</span>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-60">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </motion.div>

      {/* Grain overlay */}
      <div className="grain-overlay" />
    </section>
  )
}
