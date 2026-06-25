import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const menuItems = [
  {
    id: 1,
    name: 'Brown Butter Layer Cake',
    description: 'Dark chocolate and passion fruit buttercream, edible gold leaf',
    price: '$68',
    image: '/images/brown-butter-cake.jpg',
    tag: 'Signature',
    span: 2,
  },
  {
    id: 2,
    name: 'Chocolate Chunk Walnut',
    description: 'Dark chocolate, caramelized walnuts, Maldon sea salt',
    price: '$5.50',
    image: '/images/chocolate-chunk-cookie.jpg',
    tag: 'Bestseller',
    span: 1,
  },
  {
    id: 3,
    name: 'Salted Caramel Pecan',
    description: 'Salted caramel, toasted pecans, Madagascar vanilla',
    price: '$5.50',
    image: '/images/salted-caramel-cookie.jpg',
    tag: null,
    span: 1,
  },
  {
    id: 4,
    name: 'Black Forest Gateau',
    description: 'Kirsch-soaked cherries, whipped cream, Valrhona chocolate',
    price: '$75',
    image: '/images/black-forest-cake.jpg',
    tag: 'Seasonal',
    span: 1,
  },
  {
    id: 5,
    name: 'Double Dark Chocolate',
    description: 'Cocoa nibs, 70% dark chocolate, espresso finish',
    price: '$5.50',
    image: '/images/double-chocolate-cookie.jpg',
    tag: 'Gluten-Free',
    span: 1,
  },
  {
    id: 6,
    name: 'Golden Croissant',
    description: 'French butter, 64 layers, caramelized exterior',
    price: '$4.50',
    image: '/media/croissant.jpeg',
    tag: 'Fresh Daily',
    span: 1,
  },
  {
    id: 7,
    name: 'Hazelnut Ganache',
    description: 'Piedmont hazelnuts, dark chocolate ganache, fleur de sel',
    price: '$6.00',
    image: '/images/hazelnut-cookie.jpg',
    tag: null,
    span: 1,
  },
  {
    id: 8,
    name: 'Milk Chocolate Caramel',
    description: 'Salted caramel core, milk chocolate, vanilla cookie',
    price: '$5.50',
    image: '/images/milk-chocolate-caramel-cookie-1.jpg',
    tag: 'New',
    span: 1,
  },
  {
    id: 9,
    name: 'Peanut Butter Jam',
    description: 'Roasted peanuts, strawberry jam center, brown sugar',
    price: '$5.50',
    image: '/images/peanut-butter-jam-cookie-1.jpg',
    tag: null,
    span: 1,
  },
  {
    id: 10,
    name: 'S\'Mores Supreme',
    description: 'Toasted marshmallow, graham cracker, milk chocolate',
    price: '$6.00',
    image: '/images/smores-cookie-1.jpg',
    tag: 'Limited',
    span: 1,
  },
  {
    id: 11,
    name: 'Black & White Chocolate',
    description: 'White and dark chocolate chunks, vanilla cream base',
    price: '$5.50',
    image: '/images/black-and-white-chocolate-cookie-1.jpg',
    tag: null,
    span: 1,
  },
  {
    id: 12,
    name: 'Birthday Celebration',
    description: 'Rainbow sprinkles, vanilla bean, cream cheese frosting',
    price: '$6.00',
    image: '/images/birthday-cookie.jpg',
    tag: 'Popular',
    span: 1,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Menu() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-40px' })

  return (
    <section
      ref={sectionRef}
      id="menu"
      className="py-28 md:py-36 bg-espresso-light relative overflow-hidden"
    >
      {/* Background subtle pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <span className="text-amber text-sm font-sans tracking-[0.25em] uppercase">
            Our Creations
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mt-6 leading-tight">
            Curated with Intention
          </h2>
          <p className="text-cream/60 font-sans text-lg mt-6 max-w-2xl mx-auto">
            Each piece is handcrafted using time-honored techniques and the finest ingredients.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3, ease: 'easeInOut' } }}
              className={`group relative overflow-hidden rounded-2xl bg-espresso ${
                item.span === 2 ? 'sm:col-span-2' : ''
              }`}
            >
              <div className={`relative ${item.span === 2 ? 'aspect-[2/1]' : 'aspect-square'}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-transparent opacity-90" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    {item.tag && (
                      <span className="inline-block px-2.5 py-1 bg-amber/20 backdrop-blur-sm text-amber text-[11px] font-sans tracking-wider uppercase rounded-full mb-2">
                        {item.tag}
                      </span>
                    )}
                    <h3 className="font-serif text-lg md:text-xl lg:text-2xl text-cream mb-1">
                      {item.name}
                    </h3>
                    <p className="text-cream/55 font-sans text-sm leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-serif text-xl md:text-2xl text-amber shrink-0 mt-1">
                    {item.price}
                  </span>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-amber/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-amber text-espresso-dark px-10 py-4 rounded-full font-sans text-base font-medium hover:bg-amber-light hover:shadow-lg hover:shadow-amber/20 transition-all duration-300"
          >
            View Full Menu
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
