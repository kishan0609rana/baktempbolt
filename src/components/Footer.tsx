import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const footerLinks = {
  explore: [
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
  ],
  social: [
    { name: 'Instagram', href: 'https://instagram.com/misrilane' },
    { name: 'Pinterest', href: 'https://pinterest.com/misrilane' },
    { name: 'Facebook', href: 'https://facebook.com/misrilane' },
  ],
}

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(footerRef, { once: true, margin: '-40px' })

  return (
    <footer
      ref={footerRef}
      className="bg-espresso-dark py-16 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid md:grid-cols-3 gap-12 md:gap-8"
        >
          <div>
            <img
              src="/Misri Lane Wordmark.svg"
              alt="Misri Lane"
              className="h-10 mb-6"
            />
            <p className="text-cream/60 font-sans text-sm leading-relaxed max-w-xs">
              Crystal clarity, refined into modern form. Artisan baked goods crafted with precision and passion.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-cream text-lg mb-4">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cream/60 font-sans text-sm hover:text-cream transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-cream text-lg mb-4">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/60 font-sans text-sm hover:text-cream transition-colors duration-300 flex items-center gap-2"
                  >
                    {link.name}
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="border-t border-amber/15 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/40 font-sans text-xs">
              © 2024 Misri Lane. All rights reserved.
            </p>
            <div className="flex gap-6">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
