import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function OtherCertificateOnePage() {
  return (
    <main className="bg-brand-purple min-h-screen text-white relative overflow-hidden">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 relative">
          {/* Breadcrumb */}
          <div className="mb-8">
            <p className="text-xs md:text-sm font-bold text-brand-green uppercase tracking-wider flex items-center gap-2">
              <span className="text-brand-green">ACHIEVEMENT</span>
              <span className="text-[10px]">◀</span>
              <span>THE OTHER CERTIFICATE 01</span>
            </p>
          </div>

          {/* Title */}
          <h1 className="metal-heading-xl text-brand-green text-center mb-16 animate-scale-in">
            THE OTHER CERTIFICATE 01
          </h1>

          {/* Brain Image - Floating Right */}
          <div className="hidden md:block absolute top-20 right-0 w-32 h-32 md:w-48 md:h-48 z-20 w-[500px] animate-scale-in animate-delay-300 hover-glow">
             <Image
                src="/achievement/HAANH_WEB-48.png"
                alt="Brain illustration"
                width={200}
                height={200}
                className="w-full h-full object-contain drop-shadow-2xl transform rotate-12"
             />
          </div>

          {/* Certificate Grid */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 max-w-6xl mx-auto relative z-10">
            {/* Cert 1 */}
            <div className="bg-white p-0 shadow-2xl animate-scale-in animate-delay-200 hover-lift">
               <div className="relative aspect-[1.41/1]">
                  <Image
                     src="/achievement/achievement_1.jpg"
                     alt="The Fifth Note Certificate"
                     fill
                     className="object-contain"
                  />
               </div>
            </div>

            {/* Cert 2 */}
            <div className="bg-white p-0 shadow-2xl animate-scale-in animate-delay-300 hover-lift">
               <div className="relative aspect-[1.41/1]">
                  <Image
                     src="/achievement/achievement_2.jpg"
                     alt="Healing Tunes Certificate"
                     fill
                     className="object-contain"
                  />
               </div>
            </div>

            {/* Cert 3 */}
            <div className="bg-white p-0 shadow-2xl animate-scale-in animate-delay-400 hover-lift">
               <div className="relative aspect-[1.41/1]">
                  <Image
                     src="/achievement/achievement_3.jpg"
                     alt="FemPower Certificate"
                     fill
                     className="object-contain"
                  />
               </div>
            </div>

            {/* Cert 4 */}
            <div className="bg-white p-0 shadow-2xl animate-scale-in animate-delay-500 hover-lift">
               <div className="relative aspect-[1.41/1]">
                  <Image
                     src="/achievement/achievement_4.jpg"
                     alt="Founder Certificate"
                     fill
                     className="object-contain"
                  />
               </div>
            </div>

                 {/* Cert 5 */}
            <div className="bg-white p-0 shadow-2xl animate-scale-in animate-delay-200 hover-lift">
               <div className="relative aspect-[1.41/1]">
                  <Image
                     src="/achievement/achievement_5.png"
                     alt="Founder Certificate"
                     fill
                     className="object-contain"
                  />
               </div>
            </div>

                 {/* Cert 6 */}
            <div className="bg-white p-0 shadow-2xl animate-scale-in animate-delay-300 hover-lift">
               <div className="relative aspect-[1.41/1]">
                  <Image
                     src="/achievement/achievement_6.png"
                     alt="Founder Certificate"
                     fill
                     className="object-contain"
                  />
               </div>
            </div>

                 {/* Cert 7 */}
            <div className="bg-white p-0 shadow-2xl animate-scale-in animate-delay-400 hover-lift">
               <div className="relative aspect-[1.41/1]">
                  <Image
                     src="/achievement/achievement_7.png"
                     alt="Founder Certificate"
                     fill
                     className="object-contain"
                  />
               </div>
            </div>

                 {/* Cert 8 */}
            <div className="bg-white p-0 shadow-2xl animate-scale-in animate-delay-500 hover-lift">
               <div className="relative aspect-[1.41/1]">
                  <Image
                     src="/achievement/anh9.png"
                     alt="Founder Certificate"
                     fill
                     className="object-contain"
                  />
               </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}


