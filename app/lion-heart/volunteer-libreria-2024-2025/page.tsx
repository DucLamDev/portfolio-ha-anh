import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function VolunteerLibreriaPage() {
  return (
    <main className="bg-brand-purple min-h-screen text-white">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <p className="text-xs md:text-sm font-bold text-brand-green uppercase tracking-wider flex items-center gap-2">
              <span className="text-brand-green">LION HEART</span>
              <span className="text-[10px]">◀</span>
              <span>VOLUNTEER AT LIBRERIA (2024 - 2025)</span>
            </p>
          </div>

          {/* Title */}
          <div className="text-center mb-12 space-y-2 animate-scale-in">
            <h1 className="metal-heading-xl text-brand-green leading-none">
              VOLUNTEER AT LIBRERIA
            </h1>
            <h2 className="metal-heading-xl text-brand-green leading-none">
              (2024 - 2025)
            </h2>
          </div>

          {/* Subtitle & Intro */}
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in animate-delay-200">
             <h3 className="text-brand-green font-bold text-lg md:text-xl mb-4 uppercase tracking-widest">
              INNER CHILD, RECONNECTING
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-gray-200">
              Traveling nearly 200 kilometers to Yên Bái, our team arrived at the Ethnic Minority Boarding Lower Secondary School
              - where we were welcomed by the warmest, brightest smiles of the children there.
            </p>
          </div>

          {/* Signatures Quote Section */}
          <div className="max-w-5xl mx-auto mb-16 relative">
             <h2 className="text-white font-bold text-3xl md:text-5xl text-center mb-12 relative z-10 animate-slide-up animate-delay-300 italic">
              “ Can we have your signatures, <br /> please? ”
             </h2>

             {/* Tilted Images */}
             <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
                <div className="relative aspect-video transform -rotate-3 hover:rotate-0 transition-transform duration-500 z-10 animate-slide-left hover-lift border-2 border-brand-green overflow-hidden rounded-sm">
                   <Image
                      src="/lion-heart/lionheart_4.jpg"
                      alt="Children waving"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover shadow-lg"
                   />
                </div>
                <div className="relative aspect-video transform rotate-3 hover:rotate-0 transition-transform duration-500 z-10 animate-slide-right hover-lift border-2 border-white overflow-hidden rounded-sm">
                   <Image
                      src="/lion-heart/lionheart_16.jpg"
                      alt="Children smiling"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover shadow-lg"
                   />
                </div>
             </div>

             {/* Books Image */}
             <div className="max-w-3xl mx-auto mt-8">
                <div className="relative aspect-video animate-scale-in animate-delay-400 hover-lift border-2 border-brand-green overflow-hidden rounded-sm">
                   <Image
                      src="/lion-heart/lionheart_15.jpg"
                      alt="Sharing books"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover shadow-lg rounded-sm"
                   />
                </div>
             </div>
          </div>

          {/* Voices Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-center text-sm md:text-base leading-relaxed text-gray-200 mb-12 animate-fade-in animate-delay-200">
              Their voices were soft, excited, almost trembling.<br/>
              After placing the donated books neatly into the shelves, the children gathered around us. Those tiny signatures - things
              that feel so ordinary to us - were treated as precious treasures in their hands. We may see ourselves as small individuals,
              but to them, we were heroes worth admiring.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
               <div className="relative aspect-[4/3] animate-slide-left hover-lift border-2 border-white overflow-hidden rounded-sm">
                  <Image
                     src="/lion-heart/lionheart_17.jpg"
                     alt="Child drawing"
                     width={600}
                     height={450}
                     className="w-full h-full object-cover rounded-sm"
                  />
               </div>
               <div className="relative aspect-[4/3] animate-slide-right hover-lift border-2 border-brand-green overflow-hidden rounded-sm">
                  <Image
                     src="/lion-heart/lionheart_18.jpg"
                     alt="Child writing"
                     width={600}
                     height={450}
                     className="w-full h-full object-cover rounded-sm"
                  />
               </div>
            </div>

            <div className="max-w-2xl mx-auto">
               <div className="relative aspect-[4/3] animate-scale-in animate-delay-300 hover-lift border-2 border-white overflow-hidden rounded-sm">
                  <Image
                     src="/lion-heart/lionheart_5.jpg"
                     alt="Child laughing"
                     width={800}
                     height={600}
                     className="w-full h-full object-cover rounded-sm"
                  />
               </div>
            </div>
          </div>

          {/* Seeds of Hope Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center text-sm md:text-base leading-relaxed text-gray-200 mb-12 space-y-4 animate-fade-in animate-delay-400">
               <p>
                  What stayed with me the most was their unwavering optimism. Despite the scorching heat, frequent power outages, and limited facilities, every child carried a powerful hunger for learning.
               </p>
               <p>
                  We came to volunteer and teach life skills, but perhaps, in some quiet way, we also planted little seeds of hope - small sparks of motivation - for the young talents growing here.
               </p>
               <p>
                  And maybe, just maybe, those little signatures will become the sign by which we recognize each other again someday... in a better place, in a better future.
               </p>
            </div>

            <div className="relative aspect-video w-full mb-12 animate-scale-in animate-delay-500 hover-lift border-2 border-brand-green overflow-hidden rounded-sm">
               <Image
                  src="/lion-heart/lionheart_19.jpg"
                  alt="Group photo"
                  width={1000}
                  height={600}
                  className="w-full h-full object-cover rounded-sm"
               />
            </div>

            <div className="text-center space-y-2 animate-slide-up animate-delay-200">
               <p className="text-white text-sm md:text-base">
                  I came to a realization:
               </p>
               <h3 className="text-brand-green font-bold text-lg md:text-xl">
                  Charity is also planting the seeds of a better future.
               </h3>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}


