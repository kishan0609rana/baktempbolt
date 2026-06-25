import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-40px' })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    setFormState({ name: '', email: '', message: '' })
    alert('Thank you for your message! We will be in touch soon.')
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
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
            Get in Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mt-4">
            Let's Create Together
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-cream/80 font-sans text-sm mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  required
                  className="w-full bg-espresso-light border border-cream/20 rounded-lg px-4 py-3 text-cream font-sans placeholder-cream/40 focus:outline-none focus:border-amber transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-cream/80 font-sans text-sm mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  required
                  className="w-full bg-espresso-light border border-cream/20 rounded-lg px-4 py-3 text-cream font-sans placeholder-cream/40 focus:outline-none focus:border-amber transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-cream/80 font-sans text-sm mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full bg-espresso-light border border-cream/20 rounded-lg px-4 py-3 text-cream font-sans placeholder-cream/40 focus:outline-none focus:border-amber transition-colors duration-300 resize-none"
                  placeholder="Tell us about your order or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber text-espresso-dark py-4 rounded-lg font-sans font-medium hover:bg-amber-light transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-serif text-xl text-amber mb-3">Address</h3>
              <p className="text-cream/70 font-sans leading-relaxed">
                428 Notre-Dame Ouest<br />
                Montreal, QC H2Y 2B8<br />
                Canada
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl text-amber mb-3">Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-cream/70 font-sans">
                  <span>Mon - Thu</span>
                  <span>Closed for production</span>
                </div>
                <div className="flex justify-between text-cream/70 font-sans">
                  <span>Fri - Sat</span>
                  <span>11am - 6pm</span>
                </div>
                <div className="flex justify-between text-cream/70 font-sans">
                  <span>Sunday</span>
                  <span>10am - 4pm</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl text-amber mb-3">Contact</h3>
              <p className="space-y-2">
                <a
                  href="mailto:hello@misrilane.com"
                  className="block text-cream/70 font-sans hover:text-cream transition-colors duration-300"
                >
                  hello@misrilane.com
                </a>
                <a
                  href="tel:+15145551234"
                  className="block text-cream/70 font-sans hover:text-cream transition-colors duration-300"
                >
                  +1 (514) 555-1234
                </a>
              </p>
            </div>

            <div className="pt-4">
              <p className="text-cream/50 font-sans text-sm italic">
                Custom orders require a minimum of 72 hours notice.
                Wedding cakes should be booked at least 3 weeks in advance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
