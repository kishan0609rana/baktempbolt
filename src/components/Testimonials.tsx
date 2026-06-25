import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    id: 1,
    quote: "Every bite is a revelation. The brown butter cake changed the way I think about dessert.",
    author: 'Margot Chen',
    role: 'Food Editor, Montreal Times',
  },
  {
    id: 2,
    quote: "Finally, a bakery that treats cookies with the respect of fine jewelry. Absolutely stunning.",
    author: 'James Thornton',
    role: 'Culinary Director',
  },
  {
    id: 3,
    quote: "The precision in their craftsmanship is unmatched. Each piece tells a story of dedication.",
    author: 'Sofia Reyes',
    role: 'Pastry Chef',
  },
  {
    id: 4,
    quote: "Misri Lane isn't just a bakery—it's an experience that lingers in your memory.",
    author: 'Alexandre Beaumont',
    role: 'Restaurant Owner',
  },
  {
    id: 5,
    quote: "The hazelnut ganache cookie is worth every calorie. Pure artisanal perfection.",
    author: 'Priya Sharma',
    role: 'Food Blogger',
  },
  {
    id: 6,
    quote: "Their black forest gateau brought back childhood memories with a refined, modern twist.",
    author: 'Michael Dubois',
    role: 'Private Chef',
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-40px' })

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-20 md:py-28 bg-cream overflow-hidden relative"
    >
      {/* Decorative background SVG */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <img src="/svgs/blob-scene-haikei.svg" alt="" className="absolute -right-1/4 -top-1/4 w-1/2 h-auto" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-center mb-16 px-6 relative"
      >
        <span className="text-amber text-sm font-sans tracking-[0.25em] uppercase">
          Kind Words
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso mt-6 leading-tight">
          What People Say
        </h2>
      </motion.div>

      <div className="relative">
        {/* Gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

        <div className="flex animate-testimonial-scroll">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="min-w-[320px] md:min-w-[420px] mx-4 bg-white rounded-2xl p-7 md:p-9 shadow-sm hover:shadow-xl transition-all duration-500 border border-espresso/5 hover:border-amber/20 group"
            >
              <div className="flex flex-col h-full">
                <div className="mb-5 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="font-serif text-lg md:text-xl text-espresso/90 italic mb-6 flex-grow leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-amber/15 flex items-center justify-center mr-4 group-hover:bg-amber/25 transition-colors duration-300">
                    <span className="font-serif text-amber text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-sans text-base font-medium text-espresso">
                      {testimonial.author}
                    </p>
                    <p className="font-sans text-sm text-espresso/50">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
