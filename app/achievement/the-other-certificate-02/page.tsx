import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function OtherCertificateTwoPage() {
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
              <span>THE OTHER CERTIFICATE 02</span>
            </p>
          </div>

          {/* Title */}
          <h1 className="metal-heading-xl text-brand-green text-center mb-16 animate-scale-in">
            THE OTHER CERTIFICATE 02
          </h1>

          {/* Brain Image - Floating Right */}
          <div className="hidden md:block absolute top-20 right-0 w-32 h-32 md:w-48 md:h-48 z-20 animate-scale-in animate-delay-300 hover-glow">
             <Image
                src="/achievement/HAANH_WEB-48.png"
                alt="Brain illustration"
                width={200}
                height={200}
                className="w-full h-full object-contain drop-shadow-2xl transform rotate-12"
             />
          </div>

          {/* Top Row: Vertical Certificates */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12 relative z-10">
            {/* Special Award */}
            <div className="bg-white p-2 shadow-2xl animate-scale-in animate-delay-200 hover-lift">
               <div className="relative aspect-[0.7/1]">
                  <Image
                     src="/achievement/anh2.jpg"
                     alt="ITE Special Award Certificate"
                     fill
                     className="object-cover"
                  />
               </div>
            </div>

            {/* Gold Medal */}
            <div className="bg-white p-2 shadow-2xl animate-scale-in animate-delay-300 hover-lift">
               <div className="relative aspect-[0.7/1]">
                  <Image
                      src="/achievement/anh1.jpg"
                     alt="ITE Gold Medal Certificate"
                     fill
                     className="object-cover"
                  />
               </div>
            </div>
          </div>

          {/* Bottom Grid: Horizontal Certificates */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10">
            {/* Google Cert 1 */}
            <div className="bg-white p-2 shadow-2xl animate-scale-in animate-delay-400 hover-lift">
               <div className="relative aspect-[1.4/1]">
                  <Image
                      src="/achievement/anh4.jpg"
                     alt="Google Certificate 1"
                     fill
                     className="object-cover"
                  />
               </div>
            </div>

            {/* Google Cert 2 */}
            <div className="bg-white p-2 shadow-2xl animate-scale-in animate-delay-500 hover-lift">
               <div className="relative aspect-[1.4/1]">
                  <Image
                     src="/achievement/anh6.jpg"
                     alt="Google Certificate 2"
                     fill
                     className="object-cover"
                  />
               </div>
            </div>

            {/* Google Cert 3 */}
            <div className="bg-white p-2 shadow-2xl animate-scale-in animate-delay-200 hover-lift">
               <div className="relative aspect-[1.4/1]">
                  <Image
                     src="/achievement/anh3.jpg"
                     alt="Google Certificate 3"
                     fill
                     className="object-cover"
                  />
               </div>
            </div>

            {/* Vietnamese Cert */}
            <div className="bg-white p-2 shadow-2xl animate-scale-in animate-delay-300 hover-lift">
               <div className="relative aspect-[1.4/1]">
                  <Image
                    src="/achievement/HAANH_WEB-44.png"
                     alt="Vietnamese Certificate"
                     fill
                     className="object-cover"
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


