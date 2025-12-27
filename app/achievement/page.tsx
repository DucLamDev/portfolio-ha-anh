import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function AchievementPage() {
  return (
    <main className="relative bg-brand-purple min-h-screen">
      <Navbar />

      <section className="pt-28 pb-20 text-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Main title */}
          <h1 className="metal-heading-xl text-brand-green mb-8 text-center animate-scale-in">ACHIEVEMENT</h1>

          <p className="text-base md:text-lg leading-relaxed mb-12 text-center max-w-4xl mx-auto animate-fade-in animate-delay-200">
            For me, achievements aren&apos;t just certificates or awards — they are milestones marking the lessons, growth, and
            experiences that have shaped who I am. Each one carries a value I&apos;ve uncovered along the way.
          </p>

          {/* Three main sections */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">

            {/* Academic Achievement */}
            <Link href="/achievement/academic-achievement" className="group">
              <div className="bg-white/5 border-2 border-brand-green p-8 hover:bg-brand-green/10 transition-all duration-300 hover-lift animate-slide-up animate-delay-300">
                <h2 className="metal-heading-lg text-brand-green mb-4 group-hover:scale-110 transition-transform">ACADEMIC ACHIEVEMENT</h2>
                <p className="text-gray-300 text-sm md:text-base">
                  Gold prizes, merit competitions, and academic excellence across multiple disciplines.
                </p>
              </div>
            </Link>

            {/* Research */}
            <Link href="/achievement/research" className="group">
              <div className="bg-white/5 border-2 border-brand-green p-8 hover:bg-brand-green/10 transition-all duration-300 hover-lift animate-slide-up animate-delay-400">
                <h2 className="metal-heading-lg text-brand-green mb-4 group-hover:scale-110 transition-transform">RESEARCH</h2>
                <p className="text-gray-300 text-sm md:text-base">
                  Published research on gender stereotypes and educational opportunities for ethnic minority girls.
                </p>
              </div>
            </Link>

            {/* Certificate */}
            <Link href="/achievement/certificate" className="group">
              <div className="bg-white/5 border-2 border-brand-green p-8 hover:bg-brand-green/10 transition-all duration-300 hover-lift animate-slide-up animate-delay-500">
                <h2 className="metal-heading-lg text-brand-green mb-4 group-hover:scale-110 transition-transform">CERTIFICATE</h2>
                <p className="text-gray-300 text-sm md:text-base">
                  Recognition certificates from various projects, leadership roles, and community initiatives.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
