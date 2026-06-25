import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(44, 26, 14, 0)', 'rgba(44, 26, 14, 0.95)']
  )
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 16])

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOpen])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 h-16 md:h-20"
      style={{ backgroundColor }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ backdropFilter: `blur(${backdropBlur}px)` }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center z-50"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="/Misri Lane Wordmark.svg"
            alt="Misri Lane"
            className="h-8 md:h-10"
          />
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-cream/70 hover:text-cream font-sans text-sm tracking-wide relative group"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            className="bg-amber text-espresso-dark px-6 py-2.5 rounded-full font-sans text-sm font-medium hover:bg-amber-light transition-colors duration-300 shadow-lg shadow-amber/10"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            Order Now
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center z-50"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <motion.span
              className="w-6 h-0.5 bg-cream block origin-center"
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
            <motion.span
              className="w-6 h-0.5 bg-cream block"
              animate={{ opacity: isOpen ? 0 : 1, scaleX: isOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-cream block origin-center"
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden absolute top-0 left-0 right-0 bg-espresso/98 backdrop-blur-xl overflow-hidden z-40"
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="flex flex-col gap-1 p-6 pt-20">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-cream/80 hover:text-cream font-sans text-2xl py-3 px-4 rounded-lg hover:bg-cream/5 transition-colors duration-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-amber text-espresso-dark px-6 py-4 rounded-full font-sans text-center font-medium mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 10 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            Order Now
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  )
}
