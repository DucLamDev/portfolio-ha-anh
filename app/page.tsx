import Navbar from '@/components/Navbar'
import MarqueeBar from '@/components/MarqueeBar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const collageImages = ['/home/home_4.jpg', '/home/home_7.jpg', '/home/home_6.jpg']

  return (
    <main className="min-h-screen bg-brand-purple-dark">
      <Navbar />

      {/* Hero Section - Cải thiện bố cục lồng ghép */}
     <section className="bg-brand-purple pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.2fr,0.8fr] gap-6 sm:gap-8 md:gap-10 items-center">

    {/* IMAGE BLOCK */}
    <div className="relative lg:-translate-x-[20px] animate-slide-left flex justify-center lg:justify-start order-2 lg:order-1">
      <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg">

        {/* Main Image */}
        <div
          className="
            relative z-10 overflow-hidden rounded-sm
            animate-scale-in hover-lift
          "
          style={{
            filter: `
              drop-shadow(-4px 4px 0 rgba(0,0,0,0.55))
              drop-shadow(0 0 15px rgba(0,0,0,0.35))
              drop-shadow(0 0 10px rgba(128,0,255,0.35))
            `
          }}
        >
          <Image
            src="/home/home_1.png"
            alt="Ha Anh"
            width={640}
            height={760}
            priority
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Decorative Microphones */}
        <div className="absolute -bottom-8 sm:-bottom-12 -right-1 z-20 w-[280px] sm:w-[350px] md:w-[420px] hidden sm:block">
          <Image
            src="/home/home_5.png"
            alt="deco"
            width={360}
            height={160}
            className="
              w-full h-auto object-contain
              mix-blend-screen brightness-125
              animate-fade-in
            "
          />
        </div>

      </div>
    </div>

    {/* TEXT BLOCK */}
    <div className="space-y-3 sm:space-y-4 text-center lg:text-left text-white animate-slide-right order-1 lg:order-2">
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        Welcome to
      </p>

      <h1 className="metal-heading-xl text-brand-green leading-none text-4xl sm:text-5xl md:text-6xl">
        MY PORTFOLIO
      </h1>

      <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal">
        - it's me,{" "}
        <span className="font-bold underline decoration-brand-green">
          Ha Anh.
        </span>
      </p>
    </div>

  </div>
</section>


      {/* My Portfolio Section - Giữ nguyên layout text đè ảnh nhưng tối ưu padding */}
      <section className="bg-black py-0 relative overflow-hidden text-white">
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] animate-fade-in">
          <Image src="/home/home_2.jpg" alt="Ha Anh guitar" fill className="object-cover opacity-80 animate-scale-in" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 sm:from-black/80 sm:via-black/40 sm:to-transparent">
            <div className="max-w-6xl mx-auto h-full flex items-center px-4 sm:px-6">
              <div className="max-w-xl space-y-3 sm:space-y-4 md:space-y-6">
                <h2 className="metal-heading-xl text-brand-green text-3xl sm:text-4xl md:text-5xl lg:text-7xl animate-scale-in">MY PORTFOLIO</h2>
                <div className="space-y-2 sm:space-y-3 md:space-y-4 text-sm sm:text-base md:text-lg font-light leading-relaxed animate-slide-up animate-delay-200">
                  <p>My journey has been shaped by bold experimentation and constant boundary-breaking. Along the way, I've never shied away from exploring life through new angles and fresh perspectives. <span className="font-bold">Marcus</span> - the artistic soul, and <span className="font-bold">Hank</span> - the grounded, life-driven side of me, will be my two companions throughout this journey. In the end, every step leads toward the same destination: becoming a stronger, more mature, and more complete version of myself than ever before.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarqueeBar text="HA ANH • HA ANH • HA ANH" />

      {/* Definition Section */}
      <section className="bg-brand-purple py-12 sm:py-16 md:py-20 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-[1fr,auto] gap-8 sm:gap-10 items-end">
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <h2 className="metal-heading-xl text-brand-green leading-[0.8]">
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">HA ANH</span>
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">DEFINITION</span>
              </h2>
              <div className="border-l-4 border-brand-green pl-4 sm:pl-6 py-2 bg-brand-purple-dark/50 backdrop-blur-sm">
                <p className="text-xl sm:text-2xl font-black mb-1 tracking-widest">HÀ ANH</p>
                <p className="text-brand-green italic text-sm sm:text-base">/haː aɪn/</p>
              </div>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl text-gray-100 animate-fade-in animate-delay-300 bg-brand-purple-dark/30 p-3 sm:p-4 rounded">
               Guided by creativity and curiosity, I've explored diverse roles and stylistic directions, each shaping a clearer sense of who I am and how I work. Communication has been the foundation that helps me define my identity, strengthen my skills, and channel inspiration into purposeful projects. Beyond that, communication enables me to amplify positive, human-centered values and create lasting social impact.
              </p>
              <Link href="/about" className="inline-block bg-brand-purple border-2 border-white px-6 sm:px-8 py-3 text-sm sm:text-base text-white hover:bg-white hover:text-brand-purple transition-all font-bold uppercase tracking-widest">
                Read More
              </Link>
            </div>
            {/* Animated decorative certificates with floating effect */}
            <div className="hidden md:block relative w-80 h-96">
              <div className="absolute top-0 right-0 w-72 h-72 animate-float" style={{ animationDuration: '3s' }}>
                <Image src="/imgae_add/HAANH_WEB-48.png" alt="Certificate decoration 1" width={288} height={288} className="object-contain opacity-80 animate-fade-in rotate-6 hover:rotate-0 transition-transform duration-500" />
              </div>
              <div className="absolute top-16 right-12 w-64 h-64 animate-float" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
                <Image src="/imgae_add/HAANH_WEB-49.png" alt="Certificate decoration 2" width={256} height={256} className="object-contain opacity-70 animate-fade-in animate-delay-200 -rotate-6 hover:rotate-0 transition-transform duration-500" />
              </div>
              <div className="absolute top-32 right-6 w-56 h-56 animate-float" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                <Image src="/imgae_add/HAANH_WEB-48.png" alt="Certificate decoration 3" width={224} height={224} className="object-contain opacity-50 animate-fade-in animate-delay-400 rotate-12 hover:rotate-0 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarqueeBar text="HA ANH • HA ANH • HA ANH" />

      {/* The Pursuit of Happyness Section */}
      <section className="bg-brand-purple py-12 sm:py-16 md:py-20 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-slide-up">
            <h2 className="metal-heading-xl text-brand-green leading-tight">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-8xl">THE PURSUIT</span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-8xl">OF HAPPINESS</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
              A deep respect for every individual has shaped my aspiration to contribute to a more compassionate and equitable society - one that genuinely supports those in vulnerable circumstances. Through <span className="text-brand-green font-bold">varied volunteer engagements across different communities</span>, I've encountered stories of resilience and hardship that have broadened my perspective. These experiences have strengthened my appreciation for life and fueled my commitment to spreading positive values and creating meaningful impact.
            </p>
            <Link href="/lion-heart" className="inline-block bg-brand-purple border-2 border-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base text-white hover:bg-white hover:text-brand-purple transition-all font-semibold hover:scale-105">
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Soul Knight & Gallery - Bố cục Collage lộn xộn một chút cho nghệ thuật */}
      <section className="bg-brand-purple pt-6 sm:pt-8 pb-12 sm:pb-16 md:pb-20 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-8 sm:mb-10 md:mb-12 animate-slide-up">
            <h2 className="metal-heading-lg text-brand-green text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">SOUL KNIGHT</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-4xl">
              Art is a remedy for the soul and an affirmation of the heart. More than that, it is one of the most powerful forms of connection between people. Through music, I've met friends who have become unwavering sources of support when I needed it most. Through art, I've found a way to express my own voice in every project I take on - fulfilling my purpose and my commitment to serving the community.
            </p>
          </div>

          <div className="relative animate-slide-up animate-delay-200 mb-6 sm:mb-8">
            {/* Collage Layout - adjusted to prevent cutoff */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 max-w-4xl">
              <div className="col-span-2 overflow-hidden rounded-sm hover-lift border-2 border-white">
                <Image src="/home/home_4.jpg" alt="Soul Knight performance" width={800} height={400} className="w-full h-auto object-cover animate-scale-in" />
              </div>
              <div className="overflow-hidden rounded-sm hover-lift border-2 border-white">
                <Image src="/home/home_7.jpg" alt="Music session" width={400} height={500} className="w-full h-full object-cover animate-fade-in" />
              </div>
              <div className="overflow-hidden rounded-sm hover-lift border-2 border-white">
                <Image src="/home/home_6.jpg" alt="Guitar practice" width={400} height={500} className="w-full h-full object-cover animate-fade-in" />
              </div>
            </div>
          </div>
          
          {/* Read More button */}
          <div className="flex justify-start max-w-4xl">
            <Link href="/the-soul" className="inline-block bg-brand-purple border-2 border-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base text-white hover:bg-white hover:text-brand-purple transition-all font-semibold hover:scale-105">
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Leveling Up - Gradient & Illustrations */}
      <section className="bg-gradient-to-b from-brand-purple to-black py-12 sm:py-16 md:py-20 lg:py-24 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 relative animate-scale-in hover-lift">
            <Image src="/imgae_add/HAANH_WEB-10.png" alt="Grad" width={250} height={250} className="object-contain drop-shadow-[0_0_15px_rgba(0,255,0,0.3)] animate-fade-in" />
          </div>

          <div className="text-center max-w-xl flex-1 animate-slide-up animate-delay-200">
            <h2 className="metal-heading-lg text-brand-green text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">LEVELING UP</h2>
            <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">Each personal achievement is a clear testament to my talent, my willingness to take initiative, and my determination to pursue my goals. Beyond gaining new knowledge from every competition, I also walk away with valuable lessons that help me grow and better understand myself.</p>
            <Link href="/achievement" className="inline-block bg-brand-purple border-2 border-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base text-white hover:bg-white hover:text-brand-purple transition-all font-semibold hover:scale-105">
              Read More
            </Link>
          </div>

          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 relative animate-scale-in animate-delay-400 hover-lift">
            <Image src="/imgae_add/HAANH_WEB-11.png" alt="Laptop" width={250} height={250} className="object-contain drop-shadow-[0_0_15px_rgba(0,255,0,0.3)] animate-fade-in" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}