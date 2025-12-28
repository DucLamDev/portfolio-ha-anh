import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function HoangTauDoiVanCaPage() {
  return (
    <main className="bg-brand-purple min-h-screen text-white">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <p className="text-xs md:text-sm font-bold text-brand-green uppercase tracking-wider flex items-center gap-2">
              <span className="text-brand-green">THE SOUL</span>
              <span className="text-[10px]">◀</span>
              <span>HOANG TAU - DOI VAN CA - 2025</span>
            </p>
          </div>

          {/* Title */}
          <h1 className="metal-heading-xl text-brand-green text-center mb-12 animate-scale-in">
            HOANG TAU - DOI VAN CA - 2025
          </h1>

          {/* Quote block */}
          <div className="text-center mb-16 space-y-3 animate-fade-in animate-delay-200">
            <p className="text-yellow-400 font-bold text-xl md:text-2xl italic">"Music is companionship</p>
            <p className="text-yellow-400 font-bold text-xl md:text-2xl italic">- a journey we choose to take together."</p>
          </div>

          {/* Will you perform quote - moved up */}
          <div className="text-center mb-12 animate-fade-in animate-delay-250">
            <p className="text-white font-bold text-xl md:text-2xl italic">"Will you perform with us again this year?"</p>
          </div>

          {/* First long paragraph */}
          <div className="max-w-3xl mx-auto text-sm md:text-base leading-relaxed text-gray-200 text-center mb-16 animate-slide-up animate-delay-300">
            <p>
              When that question came, it felt like everything paused for a moment. I hesitated, then quietly answered no.
              Being in my final years of high school means the pressure is heavier than ever, and there are so many things I
              need to focus on. But the more I thought about it, the more it ached. Walking away from this show would also
              mean walking away from all those late-night practices, the shared meals, the laughter in the studio, the feeling
              of drifting off to sleep surrounded by instruments and people who understood me.
            </p>
          </div>

          {/* Image Grid - Reorganized */}
          <div className="max-w-5xl mx-auto mb-20">
            {/* Top: 2 band performance images */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="relative aspect-video animate-slide-left hover-lift border-2 border-white overflow-hidden rounded-sm">
                <Image
                  src="/the-soul/dhtvc/anh4.jpg"
                  alt="Band performing red light"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video animate-slide-right hover-lift border-2 border-white overflow-hidden rounded-sm">
                <Image
                  src="/the-soul/dhtvc/anh5.jpg"
                  alt="Band performing warm light"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bottom: Vertical guitarist on left, friends on right */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative aspect-[3/4] animate-scale-in hover-lift border-2 border-white overflow-hidden rounded-sm">
                <Image
                  src="/the-soul/dhtvc/anh7.jpg"
                  alt="Guitarist performing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] animate-scale-in animate-delay-200 hover-lift border-2 border-white overflow-hidden rounded-sm">
                <Image
                  src="/the-soul/dhtvc/anh6.jpg"
                  alt="Friends backstage"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Lightning Text Section */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
              {/* Left Lightning */}
              <div className="hidden md:block w-24 h-48 flex-shrink-0 animate-slide-left animate-delay-200">
                 <svg viewBox="0 0 100 200" className="w-full h-full text-brand-green drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]">
                    <path d="M60 0 L0 80 L40 90 L10 200 L90 110 L50 100 L100 0 Z" fill="currentColor" />
                 </svg>
              </div>

              {/* Text Content */}
              <div className="max-w-3xl text-center text-sm md:text-base leading-relaxed text-gray-200 space-y-6 animate-fade-in animate-delay-300">
                <p>
                  If I let this go, I wouldn't just be missing a performance - I'd be missing a piece of my youth, a
                  piece of a passion that once burned so fiercely. A band only becomes whole when every member listens,
                  understands, and breathes in the same rhythm. And I've been lucky enough to blaze my brightest alongside
                  the teammates who feel like home.
                </p>
                <p>
                  That's when I realized: music is more than sound. It's a way for souls to meet in the middle. It
                  pulls us closer, softens our walls, and pushes us past the limits we once thought we couldn't cross.
                </p>
              </div>

              {/* Right Lightning */}
              <div className="hidden md:block w-24 h-48 flex-shrink-0 transform scale-x-[-1] animate-slide-right animate-delay-200">
                 <svg viewBox="0 0 100 200" className="w-full h-full text-brand-green drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]">
                    <path d="M60 0 L0 80 L40 90 L10 200 L90 110 L50 100 L100 0 Z" fill="currentColor" />
                 </svg>
              </div>
            </div>
          </div>

          {/* Bottom Group Photo */}
          <div className="max-w-4xl mx-auto mb-20 animate-scale-in animate-delay-400 hover-lift">
            <div className="relative aspect-video border-2 border-white overflow-hidden rounded-sm">
              <Image
                src="/the-soul/dhtvc/anh3.jpg"
                alt="Hoàng Tấu full group"
                fill
                className="object-cover rounded-sm shadow-2xl"
              />
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}

