import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function AchievementPage() {
  return (
    <main className="relative bg-brand-purple min-h-screen">
      <Navbar />

      <section className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Main title */}
          <h1 className="metal-heading-xl text-brand-green mb-6 sm:mb-8 text-center animate-scale-in">ACHIEVEMENT</h1>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 md:mb-12 text-center max-w-4xl mx-auto animate-fade-in animate-delay-200">
            For me, achievements aren&apos;t just certificates or awards — they are milestones marking the lessons, growth, and
            experiences that have shaped who I am. Each one carries a value I&apos;ve uncovered along the way.
          </p>

          {/* Three main sections */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-14 md:mb-16">

  {/* Academic */}
  <Link href="/achievement/academic-achievement" className="group h-full">
    <div className="h-full bg-white/5 border-2 border-brand-green p-6 md:p-8
                    grid grid-rows-[auto_1fr]
                    hover:bg-brand-green/10 transition-all duration-300 hover-lift">
      
      <h2 className="metal-heading-lg text-brand-green mb-4
                     text-2xl sm:text-3xl leading-tight">
        ACADEMIC<br />ACHIEVEMENT
      </h2>

      <p className="text-gray-300 text-sm md:text-base self-center">
        Gold prizes, merit competitions, and academic excellence across multiple disciplines.
      </p>
    </div>
  </Link>

  {/* Research */}
  <Link href="/achievement/research" className="group h-full">
    <div className="h-full bg-white/5 border-2 border-brand-green p-6 md:p-8
                    grid grid-rows-[auto_1fr]
                    hover:bg-brand-green/10 transition-all duration-300 hover-lift">
      
      <h2 className="metal-heading-lg text-brand-green mb-4
                     text-2xl sm:text-3xl leading-tight">
        RESEARCH
      </h2>

      <p className="text-gray-300 text-sm md:text-base self-center">
        Published research on gender stereotypes and educational opportunities for ethnic minority girls.
      </p>
    </div>
  </Link>

  {/* Certificate */}
  <Link href="/achievement/certificate" className="group h-full">
    <div className="h-full bg-white/5 border-2 border-brand-green p-6 md:p-8
                    grid grid-rows-[auto_1fr]
                    hover:bg-brand-green/10 transition-all duration-300 hover-lift">
      
      <h2 className="metal-heading-lg text-brand-green mb-4
                     text-2xl sm:text-3xl leading-tight">
        CERTIFICATE
      </h2>

      <p className="text-gray-300 text-sm md:text-base self-center">
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
