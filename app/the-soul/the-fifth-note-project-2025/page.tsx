import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function TheFifthNoteProjectPage() {
  return (
    <main className="bg-brand-purple min-h-screen">
      <Navbar />

      <section className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 text-white">
          {/* Breadcrumb */}
          <p className="text-xs md:text-sm uppercase tracking-wide text-brand-green mb-6">
            THE SOUL &lt; THE FIFTH NOTE PROJECT - 2025
          </p>

          {/* Title */}
          <h1 className="metal-heading-xl text-brand-green text-center mb-10 animate-scale-in">
            THE FIFTH NOTE PROJECT - 2025
          </h1>

          {/* Three Questions - moved to top */}
          <div className="max-w-4xl mx-auto text-base md:text-lg leading-relaxed space-y-3 mb-12 text-center animate-fade-in animate-delay-200">
            <p className="text-brand-green font-bold italic">&quot;Has everyone memorized their parts?&quot;</p>
            <p className="text-brand-green font-bold italic">&quot;Is anyone feeling nervous?&quot;</p>
            <p className="text-brand-green font-bold italic">&quot;Did you all eat properly before coming?&quot;</p>
          </div>

          {/* Intro paragraphs */}
          <div className="max-w-4xl mx-auto text-sm md:text-base leading-relaxed space-y-4 mb-12 animate-fade-in animate-delay-300">
            <p>
              For me, this show was a special one. I wasn&apos;t just an artist standing on stage like usual. This time, I
              carried a different role in music – I was the Project Voice Leader, the person everyone could lean on.
            </p>
            <p>
              And in that role, I found a new kind of happiness – the kind that comes from watching my members perform
              successfully, instead of worrying only about my own part like before. Seeing everyone smile, I realized that the
              success of a musical show also lies in the hands of the event organizers.
            </p>
          </div>

          {/* Two-column grid: Poster + Photo with flowers */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
            {/* Poster image */}
            <div className="animate-slide-left hover-lift border-2 border-brand-green overflow-hidden rounded-sm shadow-2xl">
              <Image
                src="/the-soul/anh5.jpg"
                alt="The Fifth Note poster"
                width={800}
                height={1000}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Photo with flowers - three people */}
            <div className="animate-slide-right hover-lift border-2 border-white overflow-hidden rounded-sm shadow-2xl">
              <Image
                src="/the-soul/anh11.jpg"
                alt="The Fifth Note team with flowers"
                width={800}
                height={1000}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Big stage photo */}
          <div className="max-w-5xl mx-auto mb-12 animate-scale-in animate-delay-300 hover-lift border-2 border-brand-green overflow-hidden rounded-sm shadow-2xl">
            <Image
              src="/the-soul/anh4.jpg"
              alt="The Fifth Note live performance"
              width={1400}
              height={900}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Small reflection text */}
          <div className="max-w-4xl mx-auto text-sm md:text-base leading-relaxed space-y-4 mb-12 animate-slide-up animate-delay-400 text-center">
            <p className="font-bold text-lg text-brand-green italic">
              That small performance taught me something deeply important: the brightest spotlight isn&apos;t always at the
              center of the stage. It also shines because of the quiet, dedicated people working behind the scenes.
            </p>
          </div>

          {/* Two-column grid: Backstage + Audience */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
            {/* Backstage photo */}
            <div className="animate-slide-left hover-lift border-2 border-white overflow-hidden rounded-sm shadow-2xl">
              <Image
                src="/the-soul/anh10.jpg"
                alt="The Fifth Note backstage preparation"
                width={900}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Audience watching */}
            <div className="animate-slide-right hover-lift border-2 border-brand-green overflow-hidden rounded-sm shadow-2xl">
              <Image
                src="/the-soul/anh12.jpg"
                alt="The Fifth Note audience watching performance"
                width={900}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


