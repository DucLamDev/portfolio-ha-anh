'use client'

import Link from 'next/link'
import { Twitter, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-brand-purple via-brand-green to-brand-purple"></div>
      
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Brand Section */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-2xl sm:text-3xl font-metal text-brand-green mb-3 sm:mb-4">HA ANH</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              A journey of bold experimentation, constant boundary-breaking, and authentic self-expression through music and leadership.
            </p>
            <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6">
              <a
                href="https://web.facebook.com/nguyen.hank.287255/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-brand-purple rounded-lg flex items-center justify-center hover:bg-brand-green hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.instagram.com/vfsa.hank__lst/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-brand-purple rounded-lg flex items-center justify-center hover:bg-brand-green hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-bold text-brand-green mb-3 sm:mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-brand-green transition-colors duration-300 text-xs sm:text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-brand-green transition-colors duration-300 text-xs sm:text-sm">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/lion-heart" className="text-gray-400 hover:text-brand-green transition-colors duration-300 text-xs sm:text-sm">
                  Lion Heart
                </Link>
              </li>
              <li>
                <Link href="/the-soul" className="text-gray-400 hover:text-brand-green transition-colors duration-300 text-xs sm:text-sm">
                  The Soul
                </Link>
              </li>
              <li>
                <Link href="/achievement" className="text-gray-400 hover:text-brand-green transition-colors duration-300 text-xs sm:text-sm">
                  Achievement
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-bold text-brand-green mb-3 sm:mb-4 uppercase tracking-wider">Featured Projects</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/lion-heart/founder-healing-tunes-2025" className="text-gray-400 hover:text-brand-green transition-colors duration-300 text-xs sm:text-sm">
                  Healing Tunes
                </Link>
              </li>
              <li>
                <Link href="/lion-heart/president-fempower-2025" className="text-gray-400 hover:text-brand-green transition-colors duration-300 text-xs sm:text-sm">
                  FemPower
                </Link>
              </li>
              <li>
                <Link href="/the-soul/the-fifth-note-project-2025" className="text-gray-400 hover:text-brand-green transition-colors duration-300 text-xs sm:text-sm">
                  The Fifth Note
                </Link>
              </li>
              <li>
                <Link href="/lion-heart/vice-president-vfsa-2023-2025" className="text-gray-400 hover:text-brand-green transition-colors duration-300 text-xs sm:text-sm">
                  VFSA Leadership
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-bold text-brand-green mb-3 sm:mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-brand-green mt-0.5 flex-shrink-0" />
                <a href="mailto:hanhnt7675@gmail.com" className="text-gray-400 hover:text-brand-green transition-colors duration-300 text-xs sm:text-sm break-all">
                  hanhnt7675@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-brand-green mt-0.5 flex-shrink-0" />
                <a href="tel:+84913717507" className="text-gray-400 hover:text-brand-green transition-colors duration-300 text-xs sm:text-sm">
                  0913717507
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-brand-green mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-xs sm:text-sm">
                  Hanoi, Vietnam
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 mt-6 sm:mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Ha Anh Portfolio. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <Link href="/privacy" className="text-gray-500 hover:text-brand-green transition-colors duration-300 text-xs sm:text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-brand-green transition-colors duration-300 text-xs sm:text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom element */}
      <div className="absolute bottom-0 left-0 w-full h-20 sm:h-32 bg-gradient-to-t from-brand-purple/10 to-transparent pointer-events-none"></div>
    </footer>
  )
}
