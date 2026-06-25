import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const galleryItems = [
  { id: 1, type: 'image', src: '/media/croissant.jpeg', alt: 'Golden Flaky Croissant', height: 'h-64' },
  { id: 2, type: 'video', src: '/media/Hands_scooping_cookie_dough_202606241752.mp4', alt: 'Hands Scooping Cookie Dough', height: 'h-80' },
  { id: 3, type: 'image', src: '/media/Dark_chocolate_tart_slice_202606241752.jpeg', alt: 'Dark Chocolate Tart', height: 'h-56' },
  { id: 4, type: 'image', src: '/media/Warm_glazed_cinnamon_roll_202606241752.jpeg', alt: 'Warm Glazed Cinnamon Roll', height: 'h-72' },
  { id: 5, type: 'image', src: '/media/Assorted_cookie_box_arrangement_202606241752.jpeg', alt: 'Assorted Cookie Box', height: 'h-64' },
  { id: 6, type: 'video', src: '/media/Baker_hands_rolling_croissant_dough_202606241752.mp4', alt: 'Baker Rolling Croissant Dough', height: 'h-80' },
  { id: 7, type: 'image', src: '/media/Strawberry_danish_pastry_on_marble_202606241752.jpeg', alt: 'Strawberry Danish', height: 'h-56' },
  { id: 8, type: 'image', src: '/media/Lemon_drizzle_cake_slice_202606241752.jpeg', alt: 'Lemon Drizzle Cake', height: 'h-72' },
  { id: 9, type: 'image', src: '/media/Fig_walnut_rustic_bread_loaf_202606241752.jpeg', alt: 'Fig Walnut Bread', height: 'h-64' },
  { id: 10, type: 'image', src: '/media/Blueberry_muffin_sugar-crusted_top_fresh_202606241752.jpeg', alt: 'Blueberry Muffin', height: 'h-56' },
  { id: 11, type: 'image', src: '/media/Pain_au_chocolat_on_marble_202606241752.jpeg', alt: 'Pain au Chocolat', height: 'h-80' },
  { id: 12, type: 'image', src: '/media/Rustic_sourdough_loaf_cross-section_visible_202606241752.jpeg', alt: 'Rustic Sourdough Loaf', height: 'h-64' },
]

function GalleryItem({ item, index, isInView }: { item: typeof galleryItems[0]; index: number; isInView: boolean }) {
  const [hovered, setHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    setHovered(true)
    if (item.type === 'video' && videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }

  const handleMouseLeave = () => {
    setHovered(false)
    if (item.type === 'video' && videoRef.current) {
      videoRef.current.pause()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
      className="break-inside-avoid mb-4 relative overflow-hidden rounded-xl group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item.type === 'video' ? (
        <div className={`w-full ${item.height} relative bg-espresso`}>
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            className={`w-full h-full object-cover transition-transform duration-500 ${hovered ? 'scale-105' : 'scale-100'}`}
          >
            <source src={item.src} type="video/mp4" />
          </video>
          <div className="absolute top-3 right-3 bg-espresso/80 text-cream px-2 py-1 rounded-full text-xs font-sans flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Video
          </div>
        </div>
      ) : (
        <motion.img
          src={item.src}
          alt={item.alt}
          className={`w-full ${item.height} object-cover transition-transform duration-500 ${hovered ? 'scale-105' : 'scale-100'}`}
        />
      )}
      <motion.div
        className="absolute inset-0 bg-amber/20 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <span className="font-serif text-lg text-cream px-4 py-2 bg-espresso/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {item.alt}
        </span>
      </motion.div>
    </motion.div>
  )
}

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-40px' })

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
          className="columns-1 md:columns-2 lg:columns-3 gap-4"
        >
          {galleryItems.map((item, index) => (
            <GalleryItem key={item.id} item={item} index={index} isInView={isInView} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
