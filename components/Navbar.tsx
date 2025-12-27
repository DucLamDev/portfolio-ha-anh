'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About me', href: '/about' },
    { 
      name: 'Lion Heart', 
      href: '/lion-heart',
      dropdown: [
        { name: 'President - FemPower (2025)', href: '/lion-heart/president-fempower-2025' },
        { name: 'Founder - Healing Tunes (2025)', href: '/lion-heart/founder-healing-tunes-2025' },
        { name: 'Vice President - VFSA (2023 - 2025)', href: '/lion-heart/vice-president-vfsa-2023-2025' },
        { name: 'Volunteer at Libreria (2024 - 2025)', href: '/lion-heart/volunteer-libreria-2024-2025' },
        { name: 'Volunteer at VCOP (2023)', href: '/lion-heart/volunteer-vcop-2023' },
      ]
    },
    { 
      name: 'The Soul', 
      href: '/the-soul',
      dropdown: [
        { name: 'The Fifth Note Project - 2025', href: '/the-soul/the-fifth-note-project-2025' },
        { name: 'Hoang Tau - Doi Van Ca - 2025', href: '/the-soul/hoang-tau-doi-van-ca-2025' },
        { name: 'Ha Khuc - Doi Van Ca - 2023', href: '/the-soul/ha-khuc-doi-van-ca-2023' },
      ]
    },
    { 
      name: 'Achievement', 
      href: '/achievement',
      dropdown: [
        { name: 'Academic Achievement', href: '/achievement/academic-achievement' },
        { name: 'Research', href: '/achievement/research' },
        { name: 'Certificate', href: '/achievement/certificate' },
      ]
    },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/15 ${
      scrolled ? 'bg-brand-purple/95 backdrop-blur-sm shadow-lg' : 'bg-brand-purple'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl md:text-3xl font-display text-white tracking-wide hover:text-brand-green transition-colors">
            HA ANH.
          </Link>
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <div key={link.name} className="relative group flex flex-col items-center">
                  <Link
                    href={link.href}
                    className={`text-sm lg:text-base font-medium uppercase tracking-wide transition-colors flex items-center gap-1 pb-1 ${
                      isActive ? 'text-brand-green' : 'text-white'
                    } group-hover:text-brand-green`}
                  >
                    {link.name}
                    {link.dropdown && (
                      <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  <span className={`h-0.5 bg-brand-green transition-all duration-300 origin-left ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                  {link.dropdown && (
                    <div className="absolute left-0 top-full pt-4 w-80 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                      <div className="bg-white text-black shadow-2xl border border-gray-200">
                        <ul className="text-left text-[11px] font-bold uppercase tracking-wider">
                          {link.dropdown.map((item, idx) => (
                            <li key={idx} className={idx !== link.dropdown!.length - 1 ? "border-b border-gray-100" : ""}>
                              <Link
                                href={item.href}
                                className="block px-5 py-3 hover:bg-brand-purple hover:text-white transition-colors duration-150"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-purple-dark border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    className={`block py-2 text-sm font-medium uppercase tracking-wide ${
                      pathname === link.href ? 'text-brand-green' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                      className="p-2 text-white"
                    >
                      <svg 
                        className={`w-4 h-4 transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>
                {link.dropdown && openDropdown === link.name && (
                  <div className="pl-4 py-2 space-y-2 border-l-2 border-brand-green ml-2">
                    {link.dropdown.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="block py-1 text-xs text-gray-300 hover:text-brand-green transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}