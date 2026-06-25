import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-40px' })
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current && isInView) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked
      })
    }
  }, [isInView])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32 bg-cream px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="text-amber text-sm font-sans tracking-widest uppercase">
            Our Story
          </span>
          <div className="w-16 h-0.5 bg-amber mt-4 mb-8" />
          <h2 className="font-serif text-4xl md:text-5xl text-espresso mb-6">
            Where Crystal Meets Craft
          </h2>
          <blockquote className="font-serif text-xl md:text-2xl text-espresso/80 italic mb-6 border-l-2 border-amber pl-4">
            "Like misri—rock sugar crystals—we believe in sweetness that's deliberate, transparent, and refined."
          </blockquote>
          <p className="text-espresso/70 font-sans leading-relaxed mb-4">
            At Misri Lane, every creation is a meditation on form and flavor. We draw inspiration from the crystalline structure of rock sugar—each facet precise, each edge deliberate—translating this philosophy into baked goods that honor both tradition and innovation.
          </p>
          <p className="text-espresso/70 font-sans leading-relaxed">
            Our artisans blend old-world techniques with contemporary aesthetics, creating edible art that speaks to the connoisseur in you. From the golden lattice of our pastries to the precise layers of our cakes, excellence is not just a goal—it's our standard.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden relative shadow-xl">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/media/Hand_placing_cherry_on_cake_202606241752.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="font-serif text-2xl text-cream">Crafted with intention</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
