'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function LionHeartSection() {
  const roles = [
    {
      title: 'PRESIDENT - FEMPOWER (2026)',
      description: 'Leading FemPower as President, empowering women and creating positive change in our community. Organizing events, workshops, and initiatives that make a real difference.',
      image: 'https://placehold.co/600x400/2a004e/FFF?text=FemPower+President',
      date: '2026',
    },
    {
      title: 'FOUNDER - HEALING TUNES (2026)',
      description: 'Founded Healing Tunes to bring music therapy to those in need. Creating a safe space where music becomes a source of healing and comfort.',
      image: 'https://placehold.co/600x400/2a004e/FFF?text=Healing+Tunes',
      date: '2026',
    },
    {
      title: 'VICE PRESIDENT - VIETNAMESE FEMALE ASSOCIATION (VFA) (2025 - 2026)',
      description: 'Serving as Vice President of VFA, supporting Vietnamese women in their personal and professional growth through cultural connection and mentorship.',
      image: 'https://placehold.co/600x400/2a004e/FFF?text=VFA+Vice+President',
      date: '2025 - 2026',
    },
    {
      title: 'VOLUNTEER AT LIBERIA (2024 - 2025)',
      description: 'Volunteered in Liberia, contributing to educational programs and community development. An experience that opened my eyes to global challenges.',
      image: 'https://placehold.co/600x400/2a004e/FFF?text=Liberia+Volunteer',
      date: '2024 - 2025',
    },
    {
      title: 'VOLUNTEER AT YCOP (2023)',
      description: 'Youth Community Outreach Program volunteer, working with local youth to create opportunities and foster personal development.',
      image: 'https://placehold.co/600x400/2a004e/FFF?text=YCOP+Volunteer',
      date: '2023',
    },
  ]

  return (
    <section id="lionheart" className="py-20 grunge-texture">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-metal text-brand-green mb-6 uppercase text-center">
            LION HEART
          </h2>
          <p className="text-center text-lg md:text-xl max-w-3xl mx-auto">
            Leadership roles and volunteer experiences that shaped my journey. Each position taught me 
            valuable lessons about service, dedication, and making an impact.
          </p>
        </motion.div>

        <div className="space-y-12">
          {roles.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-brand-green/10 border-2 border-brand-green rounded-lg p-6 md:p-8 hover:bg-brand-green/20 transition-colors"
            >
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className={idx % 2 === 0 ? 'order-1' : 'order-1 md:order-2'}>
                  <div className="bg-brand-green text-black inline-block px-4 py-1 rounded-full text-sm font-bold mb-4">
                    {role.date}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-metal text-brand-green mb-4 uppercase">
                    {role.title}
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed">{role.description}</p>
                </div>
                <div className={idx % 2 === 0 ? 'order-2' : 'order-2 md:order-1'}>
                  <div className="sticker-effect rounded-lg overflow-hidden">
                    <Image
                      src={role.image}
                      alt={role.title}
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
