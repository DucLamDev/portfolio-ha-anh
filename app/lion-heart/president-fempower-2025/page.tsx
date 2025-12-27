import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function PresidentFempowerPage() {
  return (
    <main className="bg-brand-purple min-h-screen">
      <Navbar />

      <section className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 text-white">
          <p className="text-xs md:text-sm uppercase tracking-wide text-brand-green mb-6">
            Lion Heart &lt; President - FemPower (2025)
          </p>

          <h1 className="metal-heading-xl text-4xl md:text-5xl text-brand-green text-center mb-8 animate-scale-in">
            PRESIDENT - FEMPOWER (2025)
          </h1>

          {/* Big quote */}
          <div className="max-w-4xl mx-auto flex items-start justify-center gap-4 md:gap-6 mb-12 animate-slide-up animate-delay-200">
            <span className="text-5xl md:text-6xl text-brand-green leading-none mt-2">"</span>
            <p className="flex-1 text-center text-lg md:text-2xl leading-relaxed italic">
              My grandmother once forbade my mother from attending high school. Yet she taught herself, studied on her own,
              and was eventually admitted to three universities.
            </p>
            <span className="text-5xl md:text-6xl text-brand-green leading-none mt-2">"</span>
          </div>

          {/* Main group image */}
          <div className="max-w-4xl mx-auto mb-12 animate-scale-in animate-delay-300 hover-lift border-2 border-brand-green overflow-hidden rounded-sm">
            <Image
              src="/lion-heart/lionheart_7.jpg"
              alt="FemPower group"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Story text */}
          <div className="max-w-3xl mx-auto mb-8 text-sm md:text-base leading-relaxed animate-fade-in animate-delay-400">
            <p>
              That story left a profound impression on me - made even more remarkable by the fact that it was my father who
              shared it. In that moment, I gained a deeper appreciation for my mother’s determination and resilience. I also
              grew more aware of the injustices she had endured. At the same time, my father&apos;s recognition of her
              strength renewed my hope for gender equality and reinforced my commitment to advocating for women&apos;s rights.
            </p>
          </div>

          <p className="max-w-4xl mx-auto text-center font-bold text-brand-green italic text-xl md:text-2xl mb-10 animate-slide-up animate-delay-500">
            This became the foundation on which FemPower was created.
          </p>

          {/* 3‑image collage */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-[0.9fr,1.1fr] gap-6 mb-12">
            <div className="space-y-4">
              <div className="relative w-full min-h-[140px] md:min-h-[250px] animate-slide-left hover-lift border-2 border-white overflow-hidden rounded-sm">
                <Image
                  src="/lion-heart/lionheart_9.jpg"
                  alt="FemPower activity 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full min-h-[140px] md:min-h-[250px] animate-slide-left animate-delay-200 hover-lift border-2 border-brand-green overflow-hidden rounded-sm">
                <Image
                  src="/lion-heart/lionheart_10.jpg"
                  alt="FemPower activity 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="relative w-full min-h-[300px] md:min-h-[500px] animate-slide-right hover-lift border-2 border-white overflow-hidden rounded-sm">
              <Image
                src="/lion-heart/lionheart_8.jpg"
                alt="FemPower activity 3"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Closing text blocks */}
          <div className="max-w-3xl mx-auto mb-8 text-sm md:text-base leading-relaxed animate-fade-in animate-delay-300">
            <p>
              At the beginning, my team and I had very limited resources and personnel. What we did have was our unwavering
              determination and a strong desire to make a meaningful impact. After months of effort, we successfully organized
              a volunteer trip to Chiềng Yên, Sơn La. During the trip, we held a workshop focused on life skills and
              fundamental sexual education for local children. Many of them were unfamiliar with these concepts, reflecting the
              lack of access to essential knowledge.
            </p>
          </div>
          <div className="max-w-4xl mx-auto mb-12 animate-scale-in animate-delay-400 hover-lift border-2 border-brand-green overflow-hidden rounded-sm">
            <Image
              src="/lion-heart/lionheart_1.jpg"
              alt="FemPower group"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="max-w-3xl mx-auto text-center font-bold text-brand-green italic text-xl md:text-2xl mb-8 animate-slide-up animate-delay-1500">
            I realized then that, sometimes, crucial information often does not reach the communities that need it most.
            This is my mission.
          </p>

          <div className="max-w-3xl mx-auto mb-8 text-sm md:text-base leading-relaxed animate-fade-in animate-delay-1600">
            <p>
              This experience inspired me to create <span className="italic">"Modern Day Heroin"</span>, an ebook designed not only to educate but also to
              serve as a source of encouragement and companionship. Ultimately, I hope my ebook can become a source of inspiration, encouraging women to protect themselves and grow beyond their comfort zones.
            </p>
          </div>
          
          {/* Ebook Link */}
          <div className="max-w-3xl mx-auto text-center mb-8 animate-fade-in animate-delay-1700">
            <a 
              href="https://tinyurl.com/yc6suaed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-green text-black px-8 py-4 font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-brand-purple transition-all hover:scale-105 shadow-xl"
            >
              📖 Read the Ebook
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


