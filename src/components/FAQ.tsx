import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const faqs = [
  {
    id: 1,
    question: 'Do you accept custom orders for special occasions?',
    answer: 'Absolutely. We specialize in bespoke creations for weddings, corporate events, and personal celebrations. Please contact us at least two weeks in advance for custom orders to ensure we can dedicate the proper attention to your vision.',
  },
  {
    id: 2,
    question: 'What makes Misri Lane different from other bakeries?',
    answer: 'Our philosophy centers on crystalline precision—every element is intentional, from ingredient sourcing to final presentation. We work with single-origin chocolates, heritage grains, and seasonal produce. Our techniques blend classical French pastry training with modern artisanal innovation.',
  },
  {
    id: 3,
    question: 'Do you offer gluten-free or vegan options?',
    answer: 'Yes, we offer a rotating selection of gluten-free cookies and can accommodate vegan requests for custom orders. Our double dark chocolate cookie is naturally gluten-free and has become a customer favorite.',
  },
  {
    id: 4,
    question: 'Can I visit your bakery?',
    answer: 'Our kitchen is primarily production-focused, but we welcome visitors during our Friday and Saturday tasting hours (11 AM - 3 PM). Custom orders can be arranged for private tastings by appointment.',
  },
  {
    id: 5,
    question: 'How should I store my baked goods?',
    answer: 'Our cookies are best enjoyed within 3 days at room temperature or can be frozen for up to a month. Cakes should be refrigerated and brought to room temperature before serving for optimal flavor. Each purchase includes detailed care instructions.',
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-40px' })

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-28 md:py-36 bg-espresso-light relative overflow-hidden"
    >
      {/* Background decorative element */}
      <div className="absolute -right-40 -top-40 w-96 h-96 opacity-5">
        <img src="/svgs/stacked-waves-haikei.svg" alt="" className="w-full h-full" />
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="text-amber text-sm font-sans tracking-[0.25em] uppercase">
            Questions
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mt-6 leading-tight">
            Common Queries
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: 'easeOut' }}
              className={`bg-espresso rounded-2xl overflow-hidden ${openId === faq.id ? 'ring-1 ring-amber/30' : ''}`}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center justify-between p-6 md:p-7 text-left group"
              >
                <span className="font-serif text-lg md:text-xl text-cream pr-4 group-hover:text-amber transition-colors duration-300">
                  {faq.question}
                </span>
                <motion.span
                  className="text-amber text-3xl shrink-0 font-light"
                  animate={{ rotate: openId === faq.id ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    <div className="px-6 md:px-7 pb-6 md:pb-7 pt-0">
                      <p className="text-cream/70 font-sans leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
