import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const galleryImages = [
  { id: 1, src: '/images/gallery-1.jpg', alt: 'Artisan cake decoration', height: 'h-64' },
  { id: 2, src: '/images/gallery-2.jpg', alt: 'Fresh baked cookies', height: 'h-80' },
  { id: 3, src: '/images/gallery-3.jpg', alt: 'Pastry detail shot', height: 'h-56' },
  { id: 4, src: '/images/gallery-4.jpg', alt: 'Bakery interior', height: 'h-72' },
  { id: 5, src: '/images/gallery-5.jpg', alt: 'Cookie assortment', height: 'h-64' },
  { id: 6, src: '/images/gallery-6.jpg', alt: 'Artisan bread', height: 'h-80' },
  { id: 7, src: '/images/gallery-7.jpg', alt: 'Cake slicing', height: 'h-56' },
  { id: 8, src: '/images/gallery-8.jpg', alt: 'Baking process', height: 'h-72' },
]

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-40px' })
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="py-24 md:py-32 bg-espresso px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="text-amber text-sm font-sans tracking-widest uppercase">
            Behind the Scenes
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mt-4">
            Our Gallery
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="columns-1 md:columns-3 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              className="break-inside-avoid mb-4 relative overflow-hidden rounded-xl group"
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className={`w-full ${image.height} object-cover`}
                animate={{ scale: hoveredId === image.id ? 1.02 : 1 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute inset-0 bg-amber/20 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === image.id ? 1 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <span className="font-serif text-lg text-cream px-4 py-2 bg-espresso/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
