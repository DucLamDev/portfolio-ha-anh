'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection() {
  const timeImages = [
    'https://placehold.co/300x400/2a004e/FFF?text=Time+1',
    'https://placehold.co/300x400/2a004e/FFF?text=Time+2',
    'https://placehold.co/300x400/2a004e/FFF?text=Time+3',
    'https://placehold.co/300x400/2a004e/FFF?text=Time+4',
  ]

  const ig17Images = [
    'https://placehold.co/350x450/2a004e/FFF?text=IG17+1',
    'https://placehold.co/350x450/2a004e/FFF?text=IG17+2',
    'https://placehold.co/350x450/2a004e/FFF?text=IG17+3',
  ]

  const improviseImages = [
    'https://placehold.co/400x400/2a004e/FFF?text=Improvise+1',
    'https://placehold.co/400x400/2a004e/FFF?text=Improvise+2',
    'https://placehold.co/400x400/2a004e/FFF?text=Improvise+3',
    'https://placehold.co/400x400/2a004e/FFF?text=Improvise+4',
  ]

  const watchHuntImages = [
    'https://placehold.co/300x400/2a004e/FFF?text=Watch+1',
    'https://placehold.co/300x400/2a004e/FFF?text=Watch+2',
    'https://placehold.co/300x400/2a004e/FFF?text=Watch+3',
    'https://placehold.co/300x400/2a004e/FFF?text=Watch+4',
  ]

  const darkHorseImages = [
    'https://placehold.co/350x450/2a004e/FFF?text=Dark+1',
    'https://placehold.co/350x450/2a004e/FFF?text=Dark+2',
    'https://placehold.co/350x450/2a004e/FFF?text=Dark+3',
  ]

  return (
    <section id="about" className="py-20 grunge-texture">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-metal text-brand-green mb-8 uppercase text-center">
            ABOUT ME
          </h2>
          <div className="max-w-4xl mx-auto bg-brand-purple-dark/50 p-6 md:p-8 rounded-lg border-2 border-brand-green">
            <p className="text-base md:text-lg leading-relaxed mb-4">
              I believe in the power of music to connect souls and the strength of leadership to empower communities. 
              My journey has been defined by passion, dedication, and a relentless pursuit of excellence.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Whether I'm on stage performing with Soul Knight, leading initiatives at FemPower, or volunteering 
              to make a difference, I bring my whole heart to everything I do.
            </p>
          </div>
        </motion.div>

        <div className="space-y-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-6xl font-metal text-brand-green mb-8 uppercase">TIME</h3>
            <p className="text-base md:text-lg mb-8 max-w-3xl">
              Moments captured through time, each telling a story of growth, passion, and dedication to the craft.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {timeImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="sticker-effect rounded-lg overflow-hidden"
                >
                  <Image src={img} alt={`Time ${idx + 1}`} width={300} height={400} className="w-full h-auto" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-6xl font-metal text-brand-green mb-8 uppercase">IG17</h3>
            <p className="text-base md:text-lg mb-8 max-w-3xl">
              A collection of memories and experiences that define my artistic journey. IG17 represents the 
              evolution of my creative expression.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ig17Images.map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="sticker-effect rounded-lg overflow-hidden"
                >
                  <Image src={img} alt={`IG17 ${idx + 1}`} width={350} height={450} className="w-full h-auto" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-6xl font-metal text-brand-green mb-8 uppercase">IMPROVISE</h3>
            <p className="text-base md:text-lg mb-8 max-w-3xl">
              The art of improvisation - where spontaneity meets skill. These moments capture the raw energy 
              and creativity of live performance.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {improviseImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 2 : -2 }}
                  className="sticker-effect rounded-lg overflow-hidden"
                >
                  <Image src={img} alt={`Improvise ${idx + 1}`} width={400} height={400} className="w-full h-auto" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-6xl font-metal text-brand-green mb-8 uppercase">WATCH HUNT</h3>
            <p className="text-base md:text-lg mb-8 max-w-3xl">
              Behind the scenes and on stage - capturing the intensity and passion of performance.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {watchHuntImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="sticker-effect rounded-lg overflow-hidden"
                >
                  <Image src={img} alt={`Watch Hunt ${idx + 1}`} width={300} height={400} className="w-full h-auto" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-6xl font-metal text-brand-green mb-8 uppercase">DARK HORSE</h3>
            <p className="text-base md:text-lg mb-8 max-w-3xl">
              The unexpected journey of a dark horse - rising, evolving, and conquering challenges with determination.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {darkHorseImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="sticker-effect rounded-lg overflow-hidden"
                >
                  <Image src={img} alt={`Dark Horse ${idx + 1}`} width={350} height={450} className="w-full h-auto" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
