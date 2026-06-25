import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const galleryItems = [
  { id: 1, type: 'image', src: '/media/croissant.jpeg', alt: 'Golden Flaky Croissant', height: 'h-64' },
  { id: 2, type: 'video', src: '/media/Hands_scooping_cookie_dough_202606241752.mp4', alt: 'Hands Scooping Cookie Dough', height: 'h-80' },
  { id: 3, type: 'image', src: '/images/Bernice-2.jpg', alt: 'Artisan Baking', height: 'h-56' },
  { id: 4, type: 'image', src: '/media/Warm_glazed_cinnamon_roll_202606241752.jpeg', alt: 'Warm Glazed Cinnamon Roll', height: 'h-72' },
  { id: 5, type: 'image', src: '/images/two-photographers-2.jpg', alt: 'Kitchen Process', height: 'h-64' },
  { id: 6, type: 'video', src: '/media/Baker_hands_rolling_croissant_dough_202606241752.mp4', alt: 'Rolling Croissant Dough', height: 'h-80' },
  { id: 7, type: 'image', src: '/images/Bernice-4.jpg', alt: 'Bakery Details', height: 'h-56' },
  { id: 8, type: 'image', src: '/media/Dark_chocolate_tart_slice_202606241752.jpeg', alt: 'Dark Chocolate Tart', height: 'h-72' },
  { id: 9, type: 'image', src: '/images/Bernice-5.jpg', alt: 'Fresh Pastries', height: 'h-64' },
  { id: 10, type: 'image', src: '/images/Bernice-6.jpg', alt: 'Cookie Display', height: 'h-56' },
  { id: 11, type: 'image', src: '/media/Pain_au_chocolat_on_marble_202606241752.jpeg', alt: 'Pain au Chocolat', height: 'h-80' },
  { id: 12, type: 'image', src: '/images/gallery-3.jpg', alt: 'Kitchen Artistry', height: 'h-64' },
  { id: 13, type: 'image', src: '/images/Bernice-9.jpg', alt: 'Signature Creations', height: 'h-72' },
  { id: 14, type: 'image', src: '/media/Assorted_cookie_box_arrangement_202606241752.jpeg', alt: 'Assorted Cookies', height: 'h-56' },
  { id: 15, type: 'image', src: '/images/celebrationscake2.jpg', alt: 'Celebration Cake', height: 'h-64' },
  { id: 16, type: 'image', src: '/images/Bernice-12.png', alt: 'Artisan Details', height: 'h-80' },
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
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05, ease: 'easeOut' }}
      className="break-inside-avoid mb-5 relative overflow-hidden rounded-2xl group cursor-pointer"
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
            className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-110' : 'scale-100'}`}
          >
            <source src={item.src} type="video/mp4" />
          </video>
          <div className="absolute top-4 right-4 bg-espresso/80 backdrop-blur-sm text-cream px-3 py-1.5 rounded-full text-xs font-sans flex items-center gap-1.5 z-10">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Video
          </div>
        </div>
      ) : (
        <motion.img
          src={item.src}
          alt={item.alt}
          className={`w-full ${item.height} object-cover transition-transform duration-700 ${hovered ? 'scale-110' : 'scale-100'}`}
        />
      )}

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-amber/20 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />

      {/* Caption */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-espresso/80 to-transparent"
      >
        <span className="font-serif text-lg text-cream">{item.alt}</span>
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
      className="py-28 md:py-36 bg-espresso relative overflow-hidden"
    >
      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <span className="text-amber text-sm font-sans tracking-[0.25em] uppercase">
            Behind the Scenes
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mt-6 leading-tight">
            Our Gallery
          </h2>
          <p className="text-cream/60 font-sans text-lg mt-6 max-w-2xl mx-auto">
            A glimpse into our kitchen, our process, and our passion for the craft.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5"
        >
          {galleryItems.map((item, index) => (
            <GalleryItem key={item.id} item={item} index={index} isInView={isInView} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
