import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'

const ingredients = [
  { id: 1, src: '/images/cookie_full.svg', alt: 'Cookie', style: { top: '10%', left: '5%', width: '60px' } },
  { id: 2, src: '/images/cake.svg', alt: 'Cake', style: { bottom: '15%', right: '8%', width: '50px' } },
  { id: 3, src: '/images/cookie_full.svg', alt: '', style: { top: '40%', right: '3%', width: '40px', opacity: 0.5 } },
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-40px' })
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current && isInView) {
      videoRef.current.play().catch(() => {})
    }
  }, [isInView])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-28 md:py-36 bg-cream relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full opacity-5">
        <svg viewBox="0 0 200 800" className="w-full h-full">
          <path d="M50 0 Q 100 400 50 800" stroke="#D4882F" fill="none" strokeWidth="2" />
          <path d="M100 0 Q 150 400 100 800" stroke="#D4882F" fill="none" strokeWidth="1" />
          <path d="M150 0 Q 200 400 150 800" stroke="#D4882F" fill="none" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Floating ingredient icons */}
      {ingredients.map((item) => (
        <motion.img
          key={item.id}
          src={item.src}
          alt={item.alt}
          className="absolute opacity-30 hidden md:block"
          style={item.style}
          animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block text-amber text-sm font-sans tracking-[0.25em] uppercase mb-6"
            >
              Our Story
            </motion.span>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-20 h-[2px] bg-gradient-to-r from-amber to-transparent mb-8 origin-left"
            />

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso mb-8 leading-tight"
            >
              Where Crystal
              <span className="block text-amber">Meets Craft</span>
            </motion.h2>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="font-serif text-xl md:text-2xl text-espresso/80 italic mb-8 border-l-3 border-amber pl-6 relative"
            >
              <span className="absolute -left-2 top-0 text-6xl text-amber/30 font-serif leading-none">"</span>
              Like misri—rock sugar crystals—we believe in sweetness that's deliberate, transparent, and refined.
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="space-y-5"
            >
              <p className="text-espresso/70 font-sans leading-relaxed text-lg">
                At Misri Lane, every creation is a meditation on form and flavor. We draw inspiration from the crystalline structure of rock sugar—each facet precise, each edge deliberate—translating this philosophy into baked goods that honor both tradition and innovation.
              </p>
              <p className="text-espresso/70 font-sans leading-relaxed">
                Our artisans blend old-world techniques with contemporary aesthetics, creating edible art that speaks to the connoisseur in you. From the golden lattice of our pastries to the precise layers of our cakes, excellence is not just a goal—it's our standard.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-8"
            >
              <div className="text-center">
                <span className="block font-serif text-4xl text-amber">10+</span>
                <span className="text-sm text-espresso/60 font-sans uppercase tracking-wider">Years Experience</span>
              </div>
              <div className="text-center">
                <span className="block font-serif text-4xl text-amber">50+</span>
                <span className="text-sm text-espresso/60 font-sans uppercase tracking-wider">Signature Recipes</span>
              </div>
              <div className="text-center">
                <span className="block font-serif text-4xl text-amber">100%</span>
                <span className="text-sm text-espresso/60 font-sans uppercase tracking-wider">Natural Ingredients</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            {/* Video container with arch shape */}
            <div className="relative aspect-[4/5] rounded-t-[200px] rounded-b-3xl overflow-hidden shadow-2xl">
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
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent" />

              {/* Overlay text */}
              <div className="absolute bottom-8 left-8 right-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-cream/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
                >
                  <span className="font-serif text-2xl text-espresso">Crafted with intention</span>
                  <p className="text-espresso/60 font-sans text-sm mt-2">Every detail, deliberately considered</p>
                </motion.div>
              </div>
            </div>

            {/* Decorative floating element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber/10 rounded-full blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
