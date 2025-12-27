'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function TheSoulSection() {
  const projects = [
    {
      title: 'THE FIFTH NOTE PROJECT - 2025',
      description: 'An ambitious musical project exploring the boundaries of contemporary music. The Fifth Note represents harmony, balance, and the perfect blend of technical skill and emotional expression.',
      image: 'https://placehold.co/500x600/2a004e/FFF?text=Fifth+Note',
      highlights: ['Original Compositions', 'Live Performances', 'Music Production'],
    },
    {
      title: 'HOANG TAU - BAT VAN CA - 2025',
      description: 'A tribute to Vietnamese traditional music with a modern twist. Hoang Tau combines classical instruments with contemporary arrangements, bridging past and present.',
      image: 'https://placehold.co/500x600/2a004e/FFF?text=Hoang+Tau',
      highlights: ['Traditional Fusion', 'Cultural Heritage', 'Innovation'],
    },
    {
      title: 'HA KHUC - DAT VAN CA - 2025',
      description: 'Ha Khuc explores the emotional depths of music through powerful vocals and intricate arrangements. Each performance tells a story of resilience and hope.',
      image: 'https://placehold.co/500x600/2a004e/FFF?text=Ha+Khuc',
      highlights: ['Vocal Performance', 'Storytelling', 'Emotional Depth'],
    },
  ]

  return (
    <section id="thesoul" className="py-20 grunge-texture">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-metal text-brand-green mb-6 uppercase text-center">
            THE SOUL
          </h2>
          <p className="text-center text-lg md:text-xl max-w-3xl mx-auto">
            Music projects that define my artistic identity. Each project is a journey into 
            the depths of creativity and self-expression.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-brand-purple-dark/80 border-4 border-brand-green rounded-lg p-6 md:p-8 shadow-neon-green"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className={idx % 2 === 0 ? 'order-1' : 'order-1 md:order-2'}>
                  <h3 className="text-3xl md:text-4xl font-metal text-brand-green mb-6 uppercase">
                    {project.title}
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed mb-6">{project.description}</p>
                  <div className="space-y-2">
                    {project.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                        <span className="text-brand-green font-semibold">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 bg-brand-green text-black px-6 py-3 rounded-full font-bold uppercase hover:bg-brand-green-light transition-colors">
                    Read More
                  </button>
                </div>
                <div className={idx % 2 === 0 ? 'order-2' : 'order-2 md:order-1'}>
                  <div className="sticker-effect rounded-lg overflow-hidden transform hover:scale-105 transition-transform">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={600}
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
