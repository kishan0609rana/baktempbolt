import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    id: 1,
    quote: "Every bite is a revelation. The brown butter cake changed the way I think about dessert.",
    author: 'Margot Chen',
    role: 'Food Editor, Montreal Times',
    avatar: null,
  },
  {
    id: 2,
    quote: "Finally, a bakery that treats cookies with the respect of fine jewelry. Absolutely stunning.",
    author: 'James Thornton',
    role: 'Culinary Director',
    avatar: null,
  },
  {
    id: 3,
    quote: "The precision in their craftsmanship is unmatched. Each piece tells a story of dedication.",
    author: 'Sofia Reyes',
    role: 'Pastry Chef',
    avatar: null,
  },
  {
    id: 4,
    quote: "Misri Lane isn't just a bakery—it's an experience that lingers in your memory.",
    author: 'Alexandre Beaumont',
    role: 'Restaurant Owner',
    avatar: null,
  },
  {
    id: 5,
    quote: "The hazelnut ganache cookie is worth every calorie. Pure artisanal perfection.",
    author: 'Priya Sharma',
    role: 'Food Blogger',
    avatar: null,
  },
  {
    id: 6,
    quote: "Their black forest gateau brought back childhood memories with a refined, modern twist.",
    author: 'Michael Dubois',
    role: 'Private Chef',
    avatar: null,
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-40px' })

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-24 md:py-32 bg-cream overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center mb-16 px-6"
      >
        <span className="text-amber text-sm font-sans tracking-widest uppercase">
          Kind Words
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-espresso mt-4">
          What People Say
        </h2>
      </motion.div>

      <div className="relative">
        <div className="flex animate-testimonial-scroll">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="min-w-[300px] md:min-w-[400px] mx-3 bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber text-xl inline-block mr-0.5">★</span>
                  ))}
                </div>
                <p className="font-serif text-lg text-espresso/90 italic mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-amber/20 flex items-center justify-center mr-3">
                    <span className="font-serif text-amber text-sm">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium text-espresso">
                      {testimonial.author}
                    </p>
                    <p className="font-sans text-xs text-espresso/60">
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
