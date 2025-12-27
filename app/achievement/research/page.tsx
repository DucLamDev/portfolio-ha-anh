import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function ResearchPage() {
  return (
    <main className="relative bg-brand-purple min-h-screen">
      <Navbar />

      <section className="pt-28 pb-20 text-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <p className="text-xs md:text-sm font-bold text-brand-green uppercase tracking-wider flex items-center gap-2">
              <Link href="/achievement" className="hover:underline">ACHIEVEMENT</Link>
              <span className="text-[10px]">◀</span>
              <span>RESEARCH</span>
            </p>
          </div>

          {/* Main title */}
          <h1 className="metal-heading-xl text-brand-green mb-8 text-center animate-scale-in">
            RESEARCH
          </h1>

          {/* Research content */}
          <div className="max-w-4xl mx-auto animate-fade-in animate-delay-200">
            <h2 className="text-brand-green font-bold text-xl md:text-2xl mb-6">
              Co-author, Family gender stereotypes in shaping educational and career orientation of ethnic minority girls in Vietnam
            </h2>

            <div className="space-y-6 text-base md:text-lg leading-relaxed mb-8">
              <p>
                Through this research project, with the guidance and support of Dr. Nguyen Van Quan, I gained a deeper 
                understanding that women&apos;s rights in some places are still not fully protected. This experience helped me 
                become more aware of my responsibility to contribute to the community and to raise public awareness on 
                these issues.
              </p>

              <p>
                I came to realize how profoundly gender stereotypes can shape — and often limit — women&apos;s life trajectories. 
                This impact is even more evident for girls from ethnic minority communities, where access to quality educational 
                opportunities remains deeply constrained, leaving them with far fewer choices for their futures.
              </p>

              <p>
                Through this realization, I found that my journey was not only about exploring my personal interests, but also 
                about learning to appreciate the life I am fortunate to have. At the same time, I gained a broader perspective 
                on the world and discovered renewed energy and responsibility to contribute more meaningfully to society.
              </p>
            </div>

            <Link 
              href="https://drive.google.com/file/d/1YXTR_0qEUK7IojSqWvIiQ6OM8GCjqE3J/view?usp=sharing"
              target="_blank"
              className="inline-block text-brand-green underline underline-offset-4 hover:text-brand-green/80 transition-colors font-semibold text-lg animate-slide-up animate-delay-300"
            >
              📄 VIEW RESEARCH PAPER
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
