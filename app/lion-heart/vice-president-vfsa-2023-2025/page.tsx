import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function VicePresidentVFSAPage() {
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
              <span>VICE PRESIDENT - VIETNAMESE FEMALE ASSOCIATION (VFSA) (2023 - 2025)</span>
            </p>
          </div>

          {/* Main Title */}
          <div className="text-center mb-16 animate-scale-in">
            <h1 className="metal-heading-lg text-brand-green leading-tight">
              VICE PRESIDENT - VIETNAMESE FEMALE ASSOCIATION (VFSA) (2023 - 2025)
            </h1>
          </div>

          {/* Compassion Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-brand-green font-bold text-xl md:text-2xl text-center mb-6 uppercase tracking-widest animate-fade-in animate-delay-200">
              COMPASSION
            </h3>
            
            <p className="text-center text-sm md:text-base leading-relaxed text-gray-200 mb-12 max-w-2xl mx-auto animate-slide-up animate-delay-300">
              VFSA has been one of the foundations that shaped me - professionally, personally, and intellectually. 
              As a community known for empowering young women, it was where I found supportive peers who shared the same values and aspirations.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {/* Left Column - Magazine Cover */}
              <div className="relative min-h-[500px] md:min-h-[700px] animate-slide-left hover-lift border-2 border-brand-green overflow-hidden">
                <Image
                  src="/VFSA3/anh_1.jpg"
                  alt="Nguyen Thi Ha Anh - Head of Human Resources"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>

              {/* Right Column - 2 Stacked Images */}
              <div className="grid grid-rows-2 gap-4">
                <div className="relative min-h-[240px] animate-slide-right animate-delay-200 hover-lift border-2 border-white overflow-hidden">
                  <Image
                    src="/VFSA3/anh_3.jpg"
                    alt="VFSA Indoor Activity"
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>
                <div className="relative min-h-[240px] animate-slide-right animate-delay-300 hover-lift border-2 border-brand-green overflow-hidden">
                  <Image
                    src="/VFSA3/anh_2.jpg"
                    alt="VFSA Outdoor Activity"
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>
              </div>
            </div>

            <p className="text-center text-sm md:text-base leading-relaxed text-gray-200 max-w-3xl mx-auto animate-fade-in animate-delay-400">
              VFSA has been one of the foundations that shaped me - professionally, personally, and intellectually. 
              As a community known for empowering young women, it was where I found supportive peers who shared the same values and aspirations.
              Here, I was fortunate to take on the role of Head of Human Resources, an experience that taught me the art of working with people and the importance of discipline.
            </p>
          </div>

          {/* Joker & Megaphone Section */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid md:grid-cols-[auto,1fr] gap-8 items-center">
              {/* Left: Megaphone & Quote */}
              <div className="flex flex-col items-center space-y-6 max-w-lg order-2 md:order-1">
                {/* Megaphone Icon */}
                <div className="relative w-48 h-48 md:w-56 md:h-56 animate-scale-in animate-delay-300 hover-glow">
                   <Image
                      src="/imgae_add/HAANH_WEB-65.png"
                      alt="Megaphone icon"
                      width={256}
                      height={256}
                      className="w-full h-full object-contain"
                   />
                </div>
                
                <div className="space-y-4 animate-slide-up animate-delay-400 text-center">
                   <p className="text-white font-bold text-xl md:text-2xl leading-tight">
                    VFSA shaped my understanding of feminism:
                   </p>
                   <p className="text-yellow-400 font-bold text-2xl md:text-3xl italic leading-tight">
                    "It is a movement to empower women - not a battle against men."
                   </p>
                </div>
              </div>
              
              {/* Right: Joker Poster */}
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto animate-scale-in animate-delay-200 hover-lift border-2 border-white overflow-hidden order-1 md:order-2">
                <Image
                  src="/VFSA3/anh_6.jpg"
                  alt="Vice President Poster"
                  width={500}
                  height={700}
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
            </div>
          </div>

          {/* Bottom Group Photo */}
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video w-full animate-scale-in animate-delay-200 hover-lift border-2 border-brand-green overflow-hidden">
               <Image
                  src="/VFSA3/anh_5.jpg"
                  alt="VFSA Group Photo"
                  width={1000}
                  height={600}
                  className="w-full h-full object-cover rounded-sm"
                />
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}


