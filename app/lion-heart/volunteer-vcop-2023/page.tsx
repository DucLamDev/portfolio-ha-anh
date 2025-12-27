import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function VolunteerVCOPPage() {
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
              <span>VOLUNTEER AT VCOP - 2023</span>
            </p>
          </div>

          {/* Title */}
          <div className="text-center mb-12 animate-scale-in">
            <h1 className="metal-heading-xl text-brand-green leading-none">
              VOLUNTEER AT VCOP (2023)
            </h1>
          </div>

          {/* Intro Text */}
          <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in animate-delay-200">
            <p className="text-sm md:text-base leading-relaxed text-gray-200">
              Joining the Volunteer Club of Phan Huy Chu, I had the opportunity to visit the Vietnam Acupuncture
              Hospital for a charity activity. My friends and I handed out free portions of rice,
              porridge, and milk to patients in difficult circumstances.
            </p>
          </div>

          {/* Images Grid Section */}
          <div className="max-w-5xl mx-auto mb-24">
             <div className="grid md:grid-cols-2 gap-6 items-start">
                {/* Left Column - Two Images Stacked */}
                <div className="space-y-6 animate-slide-left">
                   <div className="relative aspect-[4/3] shadow-2xl border-2 border-brand-green rounded-sm overflow-hidden hover-lift">
                      <Image
                         src="/lion-heart/lionheart_2.jpg"
                         alt="Handing out food"
                         fill
                         className="object-cover"
                      />
                   </div>
                   <div className="relative aspect-[4/3] shadow-2xl border-2 border-brand-green rounded-sm overflow-hidden hover-lift">
                      <Image
                         src="/lion-heart/lionheart_23.jpg"
                         alt="Preparing food packages"
                         fill
                         className="object-cover"
                      />
                   </div>
                </div>
                
                {/* Right Column - Tall Poster */}
                <div className="animate-slide-right">
                   <div className="relative aspect-[3/4] shadow-2xl border-2 border-white rounded-sm overflow-hidden hover-lift">
                      <Image
                         src="/lion-heart/lionheart_22.jpg"
                         alt="Volunteer Poster"
                         fill
                         className="object-cover"
                      />
                   </div>
                </div>
             </div>
          </div>

          {/* Soup Story Section */}
          <div className="max-w-4xl mx-auto mb-20">
             <div className="text-center mb-16 animate-slide-up animate-delay-300">
                <h2 className="text-white font-bold text-2xl md:text-4xl mb-2 leading-tight italic">
                  " Can I have a bit more soup, dear?
                </h2>
                <h2 className="text-white font-bold text-2xl md:text-4xl leading-tight italic">
                   My situation is really tough „
                </h2>
             </div>

             <div className="max-w-2xl mx-auto space-y-8 text-sm md:text-base leading-relaxed text-gray-200 text-center animate-fade-in animate-delay-400">
                <p>
                   The long lines of people waiting for food made me realize how many lives were burdened with hardship. 
                   Everyone hoped to receive just a little more to get through their days. At that moment, I hesitated - if I refused 
                   her request, I felt like I would be acting too rigid, even narrow-hearted.
                   Right then, Mr. Công Duy - the Head of HR of our club - stepped in. Without a second thought, he gently added more soup to her bowl.
                </p>

                <p className="italic font-medium text-white">
                   "When we do charity work, we shouldn't be too strict," he said.
                </p>

                <p>
                   That simple moment made me realize that I had chosen the right people to walk with. 
                   A small incident, yet meaningful enough to shape my own approach to volunteer work in the future:
                   <br />
                   <span className="font-bold text-white mt-2 block">You get what you give</span>
                </p>
             </div>
          </div>

          {/* Group Photo Section */}
          <div className="max-w-5xl mx-auto mb-12">
             <div className="relative aspect-video w-full shadow-2xl rounded-sm overflow-hidden mb-12 animate-scale-in animate-delay-500 hover-lift border-2 border-brand-green">
                <Image
                   src="/lion-heart/lionheart_21.jpg"
                   alt="VCOP Volunteer Group"
                   width={1000}
                   height={600}
                   className="w-full h-full object-cover"
                />
             </div>

             <div className="text-center max-w-3xl mx-auto animate-slide-up animate-delay-200">
                <p className="text-brand-green font-bold text-lg md:text-xl leading-relaxed">
                   I realized charity must come from the heart - from compassion and genuine care for others, not from rigid rules or limitations.
                </p>
             </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}


