import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function LionHeartPage() {
  const sections = [
    {
      slug: 'president-fempower-2025',
      titleLines: ['PRESIDENT - FEMPOWER (2025)'],
      description:
        'That story left a profound impression on me - made even more remarkable by the fact that it was my father who shared it. In that moment, I gained a deeper appreciation for my mother\'s determination and resilience. I also grew more aware of the injustices she had endured. At the same time, my father\'s recognition of her strength renewed my hope for gender equality and reinforced my commitment to advocating for women\'s rights.',
      image: '/lion-heart/lionheart_1.jpg',
    },
    {
      slug: 'founder-healing-tunes-2025',
      titleLines: ['FOUNDER - HEALING TUNES (2025)'],
      description:
        'Eventually, I realized that music could be that bridge - a tool through which I could support children with developmental challenges. Music does more than heal; it connects, empowers, and brings people closer together. That belief became the inspiration behind the creation of Healing Tunes.',
      image: '/home/home_6.jpg',
    },
    {
      slug: 'vice-president-vfsa-2023-2025',
      titleLines: ['VICE PRESIDENT - VIETNAMESE FEMALE ASSOCIATION (VFSA) (2023 - 2025)'],
      description:
        'VFSA has been one of the foundations that shaped me - professionally, personally, and intellectually. As a community known for empowering young women, it was where I found supportive peers who shared the same values and aspirations.',
      image: '/lion-heart/lionheart_6.jpg',
    },
    {
      slug: 'volunteer-libreria-2024-2025',
      titleLines: ['VOLUNTEER AT LIBRERIA (2024 - 2025)'],
      description:
        'Traveling nearly 200 kilometers to Yên Bái, our team arrived at the Ethnic Minority Boarding Lower Secondary School - where we were welcomed by the warmest, brightest smiles of the children there.',
      image: '/lion-heart/lionheart_4.jpg',
    },
    {
      slug: 'volunteer-vcop-2023',
      titleLines: ['VOLUNTEER AT VCOP (2023)'],
      description:
        'Joining the Volunteer Club of Phan Huy Chú, I had the opportunity to visit the Vietnam Acupuncture Hospital for a charity activity. My friends and I handed out free portions of rice, porridge, and milk to patients in difficult circumstances.',
      image: '/lion-heart/lionheart_2.jpg',
    },
  ]

  return (
    <main className="relative bg-brand-purple min-h-screen">
      <Navbar />

      <section className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {sections.map((section, idx) => (
            <article key={section.slug} className={`mb-12 sm:mb-14 md:mb-16 last:mb-0 animate-slide-up animate-delay-${idx > 0 ? (idx * 100) : '100'}`}>
              {/* Green bar */}
              <div className="h-3 sm:h-4 w-40 sm:w-48 md:w-56 bg-brand-green mb-3 sm:mb-4" />

              {/* Heading lines */}
              <Link href={`/lion-heart/${section.slug}`} className="block mb-4 sm:mb-5 md:mb-6 hover:opacity-80 transition-opacity">
                <div className="space-y-1">
                  {section.titleLines.map((line) => (
                    <h2
                      key={line}
                      className="metal-heading-lg text-brand-green leading-tight"
                    >
                      {line}
                    </h2>
                  ))}
                </div>
              </Link>

              {/* White content card */}
              <div className="grid md:grid-cols-[0.9fr,1.1fr] bg-white text-black shadow-lg hover-lift">
                <div className="flex flex-col justify-between p-4 sm:p-6 md:p-8 text-sm sm:text-base md:text-lg leading-relaxed">
                  <p>{section.description}</p>
                  <div className="mt-4 sm:mt-6">
                    <Link
                      href={`/lion-heart/${section.slug}`}
                      className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-wide text-brand-purple underline underline-offset-4 hover:text-brand-purple-dark transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="relative min-h-[200px] sm:min-h-[220px] md:min-h-[280px] lg:min-h-[400px] overflow-hidden border-2 border-brand-green order-first md:order-last">
                  <Image
                    src={section.image}
                    alt={section.titleLines.join(' ')}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
