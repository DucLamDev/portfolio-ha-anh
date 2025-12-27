import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function TheSoulPage() {
  const sections = [
    {
      slug: 'the-fifth-note-project-2025',
      title: 'THE FIFTH NOTE PROJECT - 2025',
      image: '/the-soul/anh5.jpg',
      text: "For me, this show was a special one. I wasn’t just an artist standing on stage like usual. This time, I carried a different role in music – I was the Project Vice Leader, the person everyone could lean on.",
    },
    {
      slug: 'hoang-tau-doi-van-ca-2025',
      title: 'HOANG TAU - DOI VAN CA - 2025',
      image: '/the-soul/anh1.jpg',
      text: 'When that question came, it felt like everything paused for a moment. I hesitated, then quietly answered no. Being in my final years of high school means the pressure is heavier than ever, and there are so many things I need to focus on.',
    },
    {
      slug: 'ha-khuc-doi-van-ca-2023',
      title: 'HA KHUC - DOI VAN CA - 2023',
      image: '/the-soul/anh3.jpg',
      text: 'Trembling, anxious, hitting the wrong rhythm again and again – that was me in my very first rehearsal with my band, Đội Văn Ca. I was afraid to admit that I didn’t know enough, afraid of dragging everyone down.',
    },
  ]

  return (
    <main className="relative bg-brand-purple min-h-screen">
      <Navbar />

      <section className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-white">
          {/* Dropdown has been handled in Navbar; here we just render sections */}

          {sections.map((item, idx) => (
            <article key={item.slug} className={`mb-12 sm:mb-14 md:mb-16 last:mb-0 animate-slide-up animate-delay-${idx > 0 ? (idx * 100) : '100'}`}>
              <Link href={`/the-soul/${item.slug}`} className="block hover:opacity-80 transition-opacity">
                <h2 className="metal-heading-lg text-brand-green mb-4 sm:mb-5 md:mb-6 text-left">{item.title}</h2>
              </Link>

              <div className="grid md:grid-cols-[1.1fr,0.9fr] bg-white text-black shadow-lg hover-lift">
                {/* Image left */}
                <div className="relative min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-[500px] overflow-hidden border-2 border-brand-green">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text right */}
                <div className="flex flex-col justify-between p-4 sm:p-6 md:p-8 text-sm sm:text-base md:text-lg leading-relaxed">
                  <p>{item.text}</p>
                  <div className="mt-4 sm:mt-6">
                    <Link
                      href={`/the-soul/${item.slug}`}
                      className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-wide text-brand-purple underline underline-offset-4 hover:text-brand-purple-dark transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
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
