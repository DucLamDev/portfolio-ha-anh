import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function HaKhucDoiVanCaPage() {
  return (
    <main className="bg-brand-purple min-h-screen">
      <Navbar />

      <section className="pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-white">
          {/* Breadcrumb */}
          <p className="text-xs md:text-sm uppercase tracking-wide text-brand-green mb-6">
            THE SOUL ◄ HA KHUC - DOI VAN CA - 2023
          </p>

          {/* Main Title */}
          <h1 className="metal-heading-xl text-brand-green text-center mb-10 animate-scale-in">
            HA KHUC - DOI VAN CA - 2023
          </h1>

          {/* First Text Block */}
          <div className="max-w-4xl mx-auto mb-10 text-sm md:text-base leading-relaxed text-white text-left animate-fade-in animate-delay-200">
            <p>
              Trembling, anxious, hitting the wrong rhythm again and again – that was me in my very first rehearsal with my
              band, Đội Văn Ca. I was afraid to admit that I didn't know enough, afraid of dragging everyone down. I
              originally belonged to the public relations team, but because of my aspiration to play the guitar, our leader
              Minh Phúc let me try out as a guitarist.
            </p>
            <p className="mt-4">
              In the moments when I felt most insecure, Phúc patiently taught me basic music theory, simple chords, and how to
              handle unexpected moments on stage. He even shared a tip I still hold onto today:
            </p>
          </div>

          {/* Quote */}
          <div className="max-w-4xl mx-auto mb-12 text-center animate-slide-up animate-delay-300">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-green italic leading-relaxed">
              &quot;Whenever you feel like you played something wrong, don't hesitate. Just keep playing.&quot;
            </p>
          </div>

          {/* Main Guitar Image */}
          <div className="max-w-5xl mx-auto mb-12 animate-scale-in animate-delay-400 hover-lift border-2 border-white overflow-hidden rounded-sm">
            <Image
              src="/the-soul/anh3.jpg"
              alt="Playing red electric guitar on stage"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Second Text Block */}
          <div className="max-w-4xl mx-auto mb-10 text-sm md:text-base leading-relaxed text-white text-left animate-fade-in animate-delay-200">
            <p>
              After countless words of encouragement and practice sessions, my first live show went much smoother. But what
              stayed with me wasn't the stage lights or the applause. It was the lesson music taught me:
            </p>
          </div>

          {/* Four Friends Image */}
          <div className="max-w-4xl mx-auto mb-10 animate-slide-left hover-lift border-2 border-white overflow-hidden rounded-sm">
            <Image
              src="/the-soul/anh2.jpg"
              alt="Four friends holding hands"
              width={1000}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Large Group Photo with MASHUP */}
          <div className="max-w-6xl mx-auto mb-12 animate-scale-in animate-delay-300 hover-lift border-2 border-white overflow-hidden rounded-sm">
            <Image
              src="/the-soul/anh6.jpg"
              alt="Large group photo with MASHUP sign"
              width={1400}
              height={900}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Bottom Section: Warning Signs + Text */}
          <div className="max-w-6xl mx-auto mb-12">
            {/* Text Block - Full Width */}
            <div className="text-sm md:text-base leading-relaxed space-y-3 animate-slide-up animate-delay-500 text-white text-center mb-10 max-w-3xl mx-auto">
              <p className="font-bold text-lg md:text-xl">Music isn't about absolute perfection.</p>
              <p className="font-bold text-lg md:text-xl">Music is about daring to try.</p>
              <p>We need mistakes in order to grow.</p>
              <p>We need courage in order to discover what we're truly capable of.</p>
            </div>

            {/* Warning Signs - Side by Side */}
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Left: CAUTION LOUD MUSIC ZONE Sign */}
              <div className="flex justify-center animate-scale-in animate-delay-400">
                <div className="relative w-full shadow-2xl border-2 border-white rounded-sm overflow-hidden hover-lift">
                  <Image
                    src="/the-soul/anh13.jpg"
                    alt="Caution Loud Music Zone Sign"
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Right: DJ Sign */}
              <div className="flex justify-center animate-scale-in animate-delay-500">
                <div className="relative w-full shadow-2xl border-2 border-white rounded-sm overflow-hidden hover-lift">
                  <Image
                    src="/the-soul/anh14.jpg"
                    alt="DJ Music Sign"
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
