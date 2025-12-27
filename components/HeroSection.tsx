'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 grunge-texture">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="sticker-effect rounded-2xl overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="https://placehold.co/500x600/2a004e/FFF?text=Ha+Anh"
                  alt="Ha Anh with microphones"
                  width={500}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h2 className="text-2xl md:text-3xl mb-4 font-medium">Welcome to</h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-metal text-brand-green mb-6 leading-tight">
              MY PORTFOLIO
            </h1>
            <p className="text-xl md:text-2xl font-light">
              - it's me, <span className="font-bold text-brand-green">Ha Anh.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
