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
  },
  {
    id: 2,
    name: 'Golden Croissant',
    description: 'Flaky, buttery layers with a caramelized exterior',
    price: '$4.50',
    image: '/media/croissant.jpeg',
    tag: 'Fresh Daily',
  },
  {
    id: 3,
    name: 'Chocolate Chunk Walnut',
    description: 'Dark chocolate, caramelized walnuts, sea salt',
    price: '$5.50',
    image: '/images/chocolate-chunk-cookie.jpg',
    tag: 'Bestseller',
  },
  {
    id: 4,
    name: 'Dark Chocolate Tart',
    description: 'Rich ganache, shortbread crust, cocoa nibs',
    price: '$8.50',
    image: '/media/Dark_chocolate_tart_slice_202606241752.jpeg',
    tag: null,
  },
  {
    id: 5,
    name: 'Black Forest Gateau',
    description: 'Kirsch-soaked cherries, whipped cream, dark chocolate shavings',
    price: '$75',
    image: '/images/black-forest-cake.jpg',
    tag: 'Seasonal',
  },
  {
    id: 6,
    name: 'Cinnamon Roll',
    description: 'Warm glaze, soft dough, aromatic spice',
    price: '$5.00',
    image: '/media/Warm_glazed_cinnamon_roll_202606241752.jpeg',
    tag: null,
  },
  {
    id: 7,
    name: 'Hazelnut Ganache',
    description: 'Hazelnut praline, dark chocolate ganache, fleur de sel',
    price: '$6.00',
    image: '/images/hazelnut-cookie.jpg',
    tag: null,
  },
  {
    id: 8,
    name: 'Birthday Celebration',
    description: 'Rainbow sprinkles, vanilla bean, cream cheese frosting',
    price: '$6.00',
    image: '/images/birthday-cookie.jpg',
    tag: 'Limited',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Menu() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-40px' })

  const getColSpan = (index: number): string => {
    if (index === 0 || index === 4) return 'md:col-span-2'
    return 'md:col-span-1'
  }

  return (
    <section
      ref={sectionRef}
      id="menu"
      className="py-24 md:py-32 bg-espresso-light px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="text-amber text-sm font-sans tracking-widest uppercase">
            Our Creations
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mt-4">
            Curated with Intention
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-4 gap-6"
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeInOut' } }}
              className={`group relative overflow-hidden rounded-xl bg-espresso ${getColSpan(index)}`}
            >
              <div className={`relative ${index === 0 || index === 4 ? 'aspect-[2/1]' : 'aspect-square'}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/50 to-transparent opacity-80" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {item.tag && (
                      <span className="inline-block px-2 py-1 bg-amber/20 text-amber text-xs font-sans tracking-wider uppercase rounded mb-2">
                        {item.tag}
                      </span>
                    )}
                    <h3 className="font-serif text-xl md:text-2xl text-cream mb-1">
                      {item.name}
                    </h3>
                    <p className="text-cream/60 font-sans text-sm">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-serif text-xl text-amber shrink-0">
                    {item.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block bg-amber text-espresso-dark px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-amber-light transition-colors duration-300"
          >
            View Full Menu
          </a>
        </motion.div>
      </div>
    </section>
  )
}
