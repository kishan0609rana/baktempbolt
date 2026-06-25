import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(scrollY, [0, 100], ['rgba(44, 26, 14, 0)', 'rgba(44, 26, 14, 0.9)'])
  const backdropBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(12px)'])

  useEffect(() => {
    const unsubscribe = scrollY.on('change', () => {})
    return () => unsubscribe()
  }, [scrollY])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 h-16"
      style={{ backgroundColor }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ backdropFilter: backdropBlur }}
      />
      <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img
            src="/Misri Lane Wordmark.svg"
            alt="Misri Lane"
            className="h-8 md:h-10"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-cream/80 hover:text-cream font-sans text-sm tracking-wide transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-amber text-espresso-dark px-6 py-2.5 rounded-full font-sans text-sm font-medium hover:bg-amber-light transition-colors duration-300"
          >
            Order Now
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <motion.span
            className="w-6 h-0.5 bg-cream block"
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-cream block"
            animate={{ opacity: isOpen ? 0 : 1 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-cream block"
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
          />
        </button>
      </div>

      <motion.div
        className="md:hidden absolute top-16 left-0 right-0 bg-espresso/95 backdrop-blur-lg overflow-hidden"
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
      >
        <div className="flex flex-col gap-4 p-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-cream/80 hover:text-cream font-sans text-lg"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-amber text-espresso-dark px-6 py-3 rounded-full font-sans text-center font-medium mt-2"
          >
            Order Now
          </a>
        </div>
      </motion.div>
    </motion.nav>
  )
}
