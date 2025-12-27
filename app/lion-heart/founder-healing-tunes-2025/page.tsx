import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function FounderHealingTunesPage() {
  return (
    <main className="bg-brand-purple min-h-screen">
      <Navbar />

      <section className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 text-white">
          <p className="text-xs md:text-sm uppercase tracking-wide text-brand-green mb-6">
            Lion Heart &lt; Founder - Healing Tunes (2025)
          </p>

          {/* Heading */}
          <div className="text-center mb-4 animate-scale-in">
            <p className="metal-heading-lg text-brand-green leading-tight">FOUNDER - HEALING TUNES (2025)</p>
          </div>

          {/* Sub‑line */}
          <p className="max-w-3xl mx-auto text-[11px] md:text-xs text-center mb-6 animate-fade-in animate-delay-200">
            As I began building Healing Tunes, there were thought lingered in my mind:
          </p>

          {/* Intro quote with big quotation marks */}
          <div className="max-w-4xl mx-auto flex items-start justify-center gap-4 md:gap-6 mb-12 animate-slide-up animate-delay-300">
            <span className="text-5xl md:text-6xl text-brand-green leading-none mt-2">“</span>
            <p className="flex-1 text-center text-lg italic md:text-2xl leading-relaxed">
              There are children with brilliant inner universes that, heartbreakingly, the world may never get to see.
            </p>
            <span className="text-5xl md:text-6xl text-brand-green leading-none mt-2">”</span>
          </div>

          {/* Top 2 photos tilted like cards */}
          <div className="max-w-4xl mx-auto mb-16 flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="relative w-full max-w-md drop-shadow-2xl transform -rotate-3 animate-slide-left hover-lift border-2 border-brand-green overflow-hidden rounded-sm">
              <Image
                src="/lion-heart/lionheart_13.jpg"
                alt="Healing Tunes kids 1"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="relative w-full max-w-md drop-shadow-2xl transform rotate-3 animate-slide-right hover-lift border-2 border-white overflow-hidden rounded-sm">
              <Image
                src="/lion-heart/lionheart_11.jpg"
                alt="Healing Tunes kids 2"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Second quote */}
          <div className="max-w-4xl mx-auto flex items-start justify-center gap-4 md:gap-6 mb-10 animate-fade-in animate-delay-400">
            <span className="text-5xl md:text-6xl text-brand-green leading-none mt-2">“</span>
            <p className="flex-1 text-center text-lg italic md:text-2xl leading-relaxed">
              What could help them find their voice?
            </p>
            <span className="text-5xl md:text-6xl text-brand-green leading-none mt-2">”</span>
          </div>

          {/* Collage + story */}
          <div className="max-w-5xl mx-auto mb-10">
            <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
              {/* Left: Portrait image with better face visibility */}
              <div className="relative w-full drop-shadow-2xl animate-scale-in animate-delay-200 hover-lift border-2 border-brand-green overflow-hidden rounded-sm">
                <Image
                  src="/lion-heart/lionheart_14.jpg"
                  alt="Healing Tunes portrait"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover object-top"
                />
              </div>

              {/* Right: Landscape image */}
              <div className="relative w-full drop-shadow-2xl animate-scale-in animate-delay-300 hover-lift border-2 border-white overflow-hidden rounded-sm">
                <Image
                  src="/lion-heart/lionheart_12.jpg"
                  alt="Healing Tunes activity"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Text content with decorative elements */}
            <div className="relative">
              {/* Decorative music notes */}
              <div className="hidden md:block absolute -left-12 top-8 w-16 h-16 opacity-30 animate-float">
                <svg viewBox="0 0 100 100" className="w-full h-full text-brand-green">
                  <text x="50" y="50" fontSize="60" textAnchor="middle" dominantBaseline="middle" fill="currentColor">♪</text>
                </svg>
              </div>
              <div className="hidden md:block absolute -right-12 bottom-8 w-20 h-20 opacity-30 animate-float" style={{ animationDelay: '1s' }}>
                <svg viewBox="0 0 100 100" className="w-full h-full text-brand-green">
                  <text x="50" y="50" fontSize="70" textAnchor="middle" dominantBaseline="middle" fill="currentColor">♫</text>
                </svg>
              </div>

              <div className="text-sm md:text-base leading-relaxed space-y-4 animate-fade-in animate-delay-400 bg-brand-purple-dark/30 p-6 rounded-sm">
                <p>I once went through a period of isolation and bullying at school. I deeply understand what it feels like to be treated as if you were invisible—unheard and misunderstood. When I discovered rock music, everything began to change. Through it, I found people who shared the same passions and individuality as I did. From that point on, I became more open, gradually learning to trust myself and gaining confidence in my own abilities.</p>
                <p>Tớ từng trải qua một quãng thời gian bị cô lập và bắt nạt trong lớp học. Tớ thấu hiểu cảm giác bị đối xử như không khí, không được thấu hiểu và lắng nghe. Sau khi tìm được tới nhạc Rock, tớ bắt đầu tìm ra được những người bạn có chung sở thích và cá tính. Từ đó, tớ trở nên cởi mở hơn và tự tin vào năng lực của bản thân.</p>
                <p>
                  Eventually, I realized that music could be that bridge - a tool through which I could support children with
                  developmental challenges. Music does more than heal; it connects, empowers, and brings people closer together.
                  That belief became the inspiration behind the creation of Healing Tunes.
                </p>
                <p>
                  With the funds raised, I led my club on an exchange trip to Son La Province. There, we conducted an interactive
                  workshop, offered gifts, and performed live music for 30 autistic children.
                </p>
              </div>
            </div>
          </div>

          {/* Closing sentence */}
          <p className="max-w-3xl mx-auto text-center font-semibold text-white italic text-sm md:text-base animate-slide-up animate-delay-500">
            Seeing their smiles, I realized that music is a universal language of empathy – a form of sharing and emotional
            connection that transcends barriers.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}


