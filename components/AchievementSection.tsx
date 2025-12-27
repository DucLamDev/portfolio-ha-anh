'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AchievementSection() {
  const certificates = [
    { title: 'Certificate 1', image: 'https://placehold.co/400x500/FFF/000?text=Certificate+1' },
    { title: 'Certificate 2', image: 'https://placehold.co/400x500/FFF/000?text=Certificate+2' },
    { title: 'Certificate 3', image: 'https://placehold.co/400x500/FFF/000?text=Certificate+3' },
    { title: 'Certificate 4', image: 'https://placehold.co/400x500/FFF/000?text=Certificate+4' },
    { title: 'Certificate 5', image: 'https://placehold.co/400x500/FFF/000?text=Certificate+5' },
    { title: 'Certificate 6', image: 'https://placehold.co/400x500/FFF/000?text=Certificate+6' },
    { title: 'Certificate 7', image: 'https://placehold.co/400x500/FFF/000?text=Certificate+7' },
    { title: 'Certificate 8', image: 'https://placehold.co/400x500/FFF/000?text=Certificate+8' },
  ]

  const otherCerts = [
    { title: 'Other Certificate 1', image: 'https://placehold.co/500x400/2a004e/FFF?text=Other+Cert+1' },
    { title: 'Other Certificate 2', image: 'https://placehold.co/500x400/2a004e/FFF?text=Other+Cert+2' },
  ]

  return (
    <section id="achievement" className="py-20 grunge-texture">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-metal text-brand-green mb-6 uppercase text-center">
            ACHIEVEMENT
          </h2>
          <p className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Recognition and accomplishments from various competitions, programs, and initiatives. 
            Each certificate represents hard work, dedication, and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 2 : -2 }}
              className="sticker-effect rounded-lg overflow-hidden cursor-pointer"
            >
              <Image
                src={cert.image}
                alt={cert.title}
                width={400}
                height={500}
                className="w-full h-auto"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-4xl md:text-6xl font-metal text-brand-green mb-8 uppercase text-center">
            THE OTHER CERTIFICATE
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {otherCerts.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="sticker-effect rounded-lg overflow-hidden cursor-pointer"
            >
              <Image
                src={cert.image}
                alt={cert.title}
                width={500}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
