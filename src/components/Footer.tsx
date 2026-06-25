import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const footerLinks = {
  explore: [
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ],
  social: [
    { name: 'Instagram', href: 'https://instagram.com/misrilane', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.661-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.354.2-6.782 2.618-6.982 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.947.2 4.354 2.618 6.782 6.98 6.982 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.982-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
    { name: 'Pinterest', href: 'https://pinterest.com/misrilane', icon: 'M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.233 7.464-1.214 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z' },
    { name: 'Facebook', href: 'https://facebook.com/misrilane', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  ],
}

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(footerRef, { once: true, margin: '-40px' })

  return (
    <footer
      ref={footerRef}
      className="bg-espresso-dark py-20 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src="/Misri Lane Wordmark.svg"
              alt="Misri Lane"
              className="h-12 mb-6"
            />
            <p className="text-cream/60 font-sans leading-relaxed max-w-md mb-6">
              Crystal clarity, refined into modern form. Artisan baked goods crafted with precision and passion, where every creation tells a story.
            </p>
            <div className="flex gap-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-cream/5 flex items-center justify-center hover:bg-amber/20 transition-colors duration-300 group"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5 text-cream/60 group-hover:text-amber transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-serif text-cream text-lg mb-6">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cream/60 font-sans text-sm hover:text-amber transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-amber transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-cream text-lg mb-6">Newsletter</h4>
            <p className="text-cream/60 font-sans text-sm mb-4">
              Subscribe for seasonal specials and new creations.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-cream/5 border border-cream/10 rounded-lg px-4 py-3 text-cream font-sans text-sm placeholder-cream/30 focus:outline-none focus:border-amber/30 transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-amber text-espresso-dark px-4 py-3 rounded-lg font-sans text-sm font-medium hover:bg-amber-light transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-amber/15 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-cream/40 font-sans text-sm">
              © 2024 Misri Lane. All rights reserved. Crafted with intention.
            </p>
            <div className="flex gap-8">
              <a
                href="#"
                className="text-cream/40 font-sans text-xs hover:text-cream/60 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-cream/40 font-sans text-xs hover:text-cream/60 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-cream/40 font-sans text-xs hover:text-cream/60 transition-colors duration-300"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
