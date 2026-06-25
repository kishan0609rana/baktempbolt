import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-40px' })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    setFormState({ name: '', email: '', subject: '', message: '' })
    alert('Thank you for your message! We will be in touch soon.')
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-28 md:py-36 bg-espresso relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <img src="/svgs/layered-waves-haikei (1).svg" alt="" className="absolute bottom-0 left-0 w-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="text-amber text-sm font-sans tracking-[0.25em] uppercase">
            Get in Touch
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mt-6 leading-tight">
            Let's Create Together
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-cream/80 font-sans text-sm mb-2 tracking-wide"
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
                    className="w-full bg-espresso-light/50 border border-cream/15 rounded-xl px-5 py-4 text-cream font-sans placeholder-cream/30 focus:outline-none focus:border-amber/50 focus:ring-1 focus:ring-amber/30 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-cream/80 font-sans text-sm mb-2 tracking-wide"
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
                    className="w-full bg-espresso-light/50 border border-cream/15 rounded-xl px-5 py-4 text-cream font-sans placeholder-cream/30 focus:outline-none focus:border-amber/50 focus:ring-1 focus:ring-amber/30 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-cream/80 font-sans text-sm mb-2 tracking-wide"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  className="w-full bg-espresso-light/50 border border-cream/15 rounded-xl px-5 py-4 text-cream font-sans focus:outline-none focus:border-amber/50 focus:ring-1 focus:ring-amber/30 transition-all duration-300"
                >
                  <option value="">Select a subject</option>
                  <option value="custom-order">Custom Order</option>
                  <option value="wedding">Wedding Cake Inquiry</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-cream/80 font-sans text-sm mb-2 tracking-wide"
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
                  rows={6}
                  className="w-full bg-espresso-light/50 border border-cream/15 rounded-xl px-5 py-4 text-cream font-sans placeholder-cream/30 focus:outline-none focus:border-amber/50 focus:ring-1 focus:ring-amber/30 transition-all duration-300 resize-none"
                  placeholder="Tell us about your order or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber text-espresso-dark py-4 rounded-xl font-sans font-medium text-base hover:bg-amber-light hover:shadow-lg hover:shadow-amber/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="space-y-10 lg:pl-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber/15 flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-amber">Visit Us</h3>
              </div>
              <p className="text-cream/70 font-sans leading-relaxed pl-13">
                428 Notre-Dame Ouest<br />
                Montreal, QC H2Y 2B8<br />
                Canada
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber/15 flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-amber">Hours</h3>
              </div>
              <div className="space-y-2 pl-13">
                <div className="flex justify-between text-cream/70 font-sans max-w-xs">
                  <span>Mon - Thu</span>
                  <span>Closed for production</span>
                </div>
                <div className="flex justify-between text-cream/70 font-sans max-w-xs">
                  <span>Fri - Sat</span>
                  <span>11am - 6pm</span>
                </div>
                <div className="flex justify-between text-cream/70 font-sans max-w-xs">
                  <span>Sunday</span>
                  <span>10am - 4pm</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber/15 flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-amber">Contact</h3>
              </div>
              <div className="space-y-2 pl-13">
                <a
                  href="mailto:hello@misrilane.com"
                  className="block text-cream/70 font-sans hover:text-amber transition-colors duration-300"
                >
                  hello@misrilane.com
                </a>
                <a
                  href="tel:+15145551234"
                  className="block text-cream/70 font-sans hover:text-amber transition-colors duration-300"
                >
                  +1 (514) 555-1234
                </a>
              </div>
            </div>

            <div className="bg-espresso-light/30 rounded-2xl p-6 mt-8 border border-amber/10">
              <p className="text-cream/50 font-sans text-sm leading-relaxed italic">
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
