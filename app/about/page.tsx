import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ background: 'linear-gradient(180deg, #3d0066 0%, #1a0033 50%, #0d001a 100%)' }}>
      <Navbar />

      {/* ABOUT ME Section */}
      <section className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-14 md:pb-16 relative overflow-hidden">
  <div className="max-w-6xl mx-auto px-4 sm:px-6">
    <h1 className="metal-heading-xl text-brand-green mb-6 sm:mb-8 md:mb-10 animate-scale-in">ABOUT ME</h1>
    
    <div className="grid md:grid-cols-[1.5fr,1fr] gap-6 sm:gap-8 items-center">
      <div className="text-sm md:text-base leading-relaxed text-white space-y-3 sm:space-y-4 text-left animate-fade-in animate-delay-200">
        <p>
          Looking back on my journey, I&apos;ve realized that every small photoshoot has become a clear record of my
          personal growth - both inside and out. Cutting my hair short was a turning point, marking a milestone in my
          transition into adulthood. From a girl who once felt insecure about her appearance, I have grown braver and more
          confident in doing what I truly want.
        </p>
        <p>
          My sense of &quot;breaking the mold&quot; doesn&apos;t come from temporary rebellion, but from a desire to embrace my
          uniqueness and live authentically - free from the fear of social expectations.
        </p>
        <p>
          These are the styles and colors that have shaped and reshaped who I am throughout my three years of high school.
          Each photoshoot carries its own story, tied to a specific chapter of my life.
        </p>
      </div>

      {/* Phần ảnh đã chỉnh sửa */}
      <div className="hidden md:block relative w-full h-[500px] lg:h-[650px] animate-fade-in shadow-2xl" 
           style={{ filter: 'drop-shadow(0 10px 40px rgba(0, 0, 0, 0.8))' }}>
        <Image 
          src="/about/about_21.png" 
          alt="Halftone decoration" 
          fill 
          className="object-cover object-top rounded-lg" // Sử dụng object-cover và lấy trọng tâm phía trên
          quality={100} 
          priority 
        />
      </div>
    </div>
  </div>
</section>

      {/* TIME Section */}
      <section className="py-12 sm:py-14 md:py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="metal-heading-xl text-brand-green text-center mb-6 sm:mb-8 animate-slide-up">TIME</h2>
          
          <div className="max-w-4xl mx-auto text-sm md:text-base leading-relaxed text-white mb-6 sm:mb-8 md:mb-10 text-left animate-fade-in animate-delay-200">
            <p>
              My first-ever photoshoot. The night before, I couldn&apos;t sleep - wondering how to pose, whether my outfit
              looked &quot;cool&quot; enough. This shoot also marked the first time I took on the role of Head of Human Resources.
            </p>
          </div>

          {/* 4 Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-5xl mx-auto">
            <div className="relative aspect-square animate-scale-in animate-delay-100 hover-lift border-2 border-white">
              <Image src="/about/about_1.jpg" alt="Time photoshoot 1" fill className="object-cover" />
            </div>
            <div className="relative aspect-square animate-scale-in animate-delay-200 hover-lift border-2 border-white">
              <Image src="/about/about_2.jpg" alt="Time photoshoot 2" fill className="object-cover" />
            </div>
            <div className="relative aspect-square animate-scale-in animate-delay-300 hover-lift border-2 border-white">
              <Image src="/about/about_3.jpg" alt="Time photoshoot 3" fill className="object-cover" />
            </div>
            <div className="relative aspect-square animate-scale-in animate-delay-400 hover-lift border-2 border-white">
              <Image src="/about/about_4.jpg" alt="Time photoshoot 4" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 1(5)7 Section */}
      <section className="py-12 sm:py-14 md:py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="metal-heading-xl text-brand-green text-center mb-6 sm:mb-8 animate-slide-up">1(5)7</h2>
          
          <div className="max-w-4xl mx-auto text-sm md:text-base leading-relaxed text-white mb-6 sm:mb-8 md:mb-10 text-center animate-fade-in animate-delay-200">
            <p>
              A tribute photoshoot for my 17th birthday. The number 15 represents my birth date. It was the first time I built
              an entire concept from A to Z on my own. I prepared every prop myself and saved up to bring the shoot to life.
            </p>
          </div>

          {/* Collage Layout */}
          <div className="relative max-w-5xl mx-auto">
            {/* Main large image left */}
            <div className="grid md:grid-cols-[1.2fr,0.8fr] gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4 md:mb-6">
              <div className="relative min-h-[350px] sm:min-h-[450px] md:min-h-[600px] animate-slide-left hover-lift border-2 border-white">
                <Image src="/about/about_5.jpg" alt="1(5)7 main guitar" fill className="object-cover" />
              </div>
              
              {/* Right side images */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                <div className="relative min-h-[160px] sm:min-h-[220px] md:min-h-[280px] animate-scale-in animate-delay-200 hover-lift border-2 border-white">
                  <Image src="/about/about_6.jpg" alt="1(5)7 close up" fill className="object-cover" />
                </div>
                <div className="relative min-h-[160px] sm:min-h-[220px] md:min-h-[280px] animate-scale-in animate-delay-300 hover-lift border-2 border-white">
                  <Image src="/about/about_7.jpg" alt="1(5)7 detail" fill className="object-cover" />
                </div>
                <div className="relative min-h-[160px] sm:min-h-[220px] md:min-h-[280px] col-span-2 animate-scale-in animate-delay-400 hover-lift border-2 border-white">
                  <Image src="/about/about_8.jpg" alt="1(5)7 group" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Bottom row */}
            {/* <div className="grid md:grid-cols-2 gap-4">
              <div className="relative min-h-[300px]">
                <Image src="/about/about_9.jpg" alt="1(5)7 lighter" fill className="object-cover" />
              </div>
              <div className="relative min-h-[300px]">
                <Image src="/about/about_10.jpg" alt="1(5)7 portrait" fill className="object-cover" />
              </div>
            </div> */}
          </div>

          {/* Lighter graphic overlay */}
          {/* <div className="absolute top-20 right-0 w-48 md:w-64 opacity-60 pointer-events-none hidden md:block">
            <svg viewBox="0 0 200 300" className="w-full h-full text-brand-green">
              <rect x="60" y="50" width="80" height="200" rx="5" fill="currentColor" stroke="black" strokeWidth="3" />
              <circle cx="100" cy="80" r="15" fill="black" />
              <path d="M 100 65 Q 100 50 85 50" stroke="black" strokeWidth="3" fill="none" />
              <ellipse cx="100" cy="30" rx="20" ry="25" fill="#39ff14" />
              <path d="M 100 5 Q 100 15 90 20 Q 85 25 100 30 Q 115 25 110 20 Q 110 15 100 5" fill="black" />
            </svg>
          </div> */}
        </div>
      </section>

      {/* IMPROVISE Section */}
      <section className="py-12 sm:py-14 md:py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="metal-heading-xl text-brand-green text-center mb-6 sm:mb-8 animate-slide-up">IMPROVISE</h2>
          
          <div className="max-w-4xl mx-auto text-sm md:text-base leading-relaxed text-white mb-6 sm:mb-8 md:mb-10 text-left animate-fade-in animate-delay-200">
            <p>
              A phase where I felt the most myself - bold, experimental, and unafraid to push boundaries. This photoshoot was
              created for a summer performance in which I served as both{' '}
              <span className="text-red-500 font-bold">a communications team member</span> and{' '}
              <span className="text-red-500 font-bold">a guitarist</span>.
            </p>
          </div>

          {/* 2x2 Grid - Top: Portrait, Bottom: Landscape */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto">
            {/* Top Left - Portrait */}
            <div className="relative aspect-[3/4] border-2 border-white overflow-hidden bg-brand-purple animate-scale-in animate-delay-100 hover-lift">
              <Image src="/about/about_9.jpg" alt="Improvise 1" fill className="object-cover" />
              <div className="absolute bottom-2 right-2 text-white text-[10px] font-bold tracking-wider">
                FES
              </div>
            </div>
            {/* Top Right - Portrait */}
            <div className="relative aspect-[3/4] border-2 border-white overflow-hidden bg-brand-purple animate-scale-in animate-delay-200 hover-lift">
              <Image src="/about/about_10.jpg" alt="Improvise 2" fill className="object-cover" />
              <div className="absolute bottom-2 right-2 text-white text-[10px] font-bold tracking-wider">
                FES
              </div>
            </div>
            {/* Bottom Left - Landscape */}
            <div className="relative aspect-[4/3] border-2 border-white overflow-hidden bg-brand-purple animate-scale-in animate-delay-300 hover-lift">
              <Image src="/about/about_11.jpg" alt="Improvise 3" fill className="object-cover" />
              <div className="absolute bottom-2 right-2 text-white text-[10px] font-bold tracking-wider">
                FES
              </div>
            </div>
            {/* Bottom Right - Landscape */}
            <div className="relative aspect-[4/3] border-2 border-white overflow-hidden bg-brand-purple animate-scale-in animate-delay-400 hover-lift">
              <Image src="/about/about_12.jpg" alt="Improvise 4 group" fill className="object-cover" />
              <div className="absolute bottom-2 right-2 text-white text-[10px] font-bold tracking-wider">
                FES
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WITCH HUNT Section */}
      <section className="py-12 sm:py-14 md:py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="metal-heading-xl text-brand-green text-center mb-6 sm:mb-8 animate-slide-up">WITCH HUNT</h2>
          
          <div className="max-w-4xl mx-auto text-sm md:text-base leading-relaxed text-white mb-6 sm:mb-8 md:mb-10 text-left animate-fade-in animate-delay-200">
            <p>
              True to its name, this marked the beginning of my deeper engagement with topics like media and feminism. It was
              also the seasonal theme for the organization where I worked as Vice president.
            </p>
          </div>

          {/* 2x2 Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-5xl mx-auto">
            <div className="relative aspect-square animate-scale-in animate-delay-100 hover-lift border-2 border-white">
              <Image src="/about/about_13.jpg" alt="Witch Hunt 1" fill className="object-cover" />
            </div>
            <div className="relative aspect-square animate-scale-in animate-delay-200 hover-lift border-2 border-white">
              <Image src="/about/about_14.jpg" alt="Witch Hunt 2" fill className="object-cover" />
            </div>
            <div className="relative aspect-square animate-scale-in animate-delay-300 hover-lift border-2 border-white">
              <Image src="/about/about_15.jpg" alt="Witch Hunt 3" fill className="object-cover" />
            </div>
            <div className="relative aspect-square animate-scale-in animate-delay-400 hover-lift border-2 border-white">
              <Image src="/about/about_16.jpg" alt="Witch Hunt 4" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Wavy divider
        <div className="mt-16 h-32 relative overflow-hidden">
          <svg viewBox="0 0 1200 150" className="w-full h-full" preserveAspectRatio="none">
            <path
              d="M0,75 Q200,20 400,75 T800,75 T1200,75 L1200,150 L0,150 Z"
              fill="#336633"
              opacity="0.8"
            />
            <path
              d="M0,75 Q300,30 600,75 T1200,75"
              stroke="#39ff14"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div> */}
      </section>

      {/* DARK HORSE Section */}
      <section className="py-12 sm:py-14 md:py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="metal-heading-xl text-brand-green text-center mb-6 sm:mb-8 animate-slide-up">DARK HORSE</h2>
          
          <div className="max-w-4xl mx-auto text-sm md:text-base leading-relaxed text-white mb-6 sm:mb-8 md:mb-10 text-left animate-fade-in animate-delay-200">
            <p>
              A moment of clarity in my journey—when I developed a sharper understanding of myself and a noticeable shift in my attitude and artistic direction. Through this journey, I have grown more confident, mature, and resilient.
            </p>
          </div>

          {/* Collage Layout */}
          <div className="grid md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
            {/* Large left image */}
            <div className="relative min-h-[350px] sm:min-h-[450px] md:min-h-[600px] animate-slide-left hover-lift border-2 border-white">
              <Image src="/about/about_17.jpg" alt="Dark Horse look up" fill className="object-cover" />
            </div>
            
            {/* Middle column */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
              <div className="relative min-h-[160px] sm:min-h-[220px] md:min-h-[280px] animate-scale-in animate-delay-200 hover-lift border-2 border-white">
                <Image src="/about/about_18.jpg" alt="Dark Horse portrait" fill className="object-cover" />
              </div>
              <div className="relative min-h-[160px] sm:min-h-[220px] md:min-h-[280px] animate-scale-in animate-delay-300 hover-lift border-2 border-white">
                <Image src="/about/about_19.jpg" alt="Dark Horse side" fill className="object-cover" />
              </div>
            </div>
            
            {/* Large right image */}
            <div className="relative min-h-[350px] sm:min-h-[450px] md:min-h-[600px] animate-slide-right hover-lift border-2 border-white">
              <Image src="/about/about_20.jpg" alt="Dark Horse motion" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
