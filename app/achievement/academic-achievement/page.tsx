import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function AcademicAchievementPage() {
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
              <span>ACADEMIC ACHIEVEMENT</span>
            </p>
          </div>

          {/* Main title */}
          <h1 className="metal-heading-xl text-brand-green mb-8 text-center animate-scale-in">
            ACADEMIC ACHIEVEMENT
          </h1>

          <p className="text-base md:text-lg leading-relaxed mb-12 text-center max-w-3xl mx-auto animate-fade-in animate-delay-200">
            For me, achievements aren&apos;t just certificates or awards - they are milestones marking the lessons, growth, and
            experiences that have shaped who I am. Each one carries a value I&apos;ve uncovered along the way.
          </p>

          {/* Gold Prize - ITE */}
          <div className="mb-16 animate-slide-up animate-delay-300 border-l-4 border-brand-green pl-6">
            <h2 className="text-brand-green font-bold text-xl md:text-2xl mb-4">
              Gold Prize - International Invention and Trade Expo (ITE)
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-6">
              I explored the Theory of Planned Behavior to analyze how cognitive biases and media influence green consumer
              choices. This competition opened my eyes to the fact that sustainable consumption requires the collective
              effort of an entire society - not just individual awareness.
            </p>
            <div className="mt-6 bg-white p-4 shadow-xl inline-block hover-lift">
              <Image
                src="/achievement/anh15.jpg"
                alt="ITE Gold Prize certificates"
                width={420}
                height={320}
                className="w-full h-auto object-cover"
              />
            </div>
               <div className="mt-6 bg-white p-4 shadow-xl inline-block hover-lift">
              <Image
                src="/achievement/anh16.jpg"
                alt="ITE Gold Prize certificates"
                width={420}
                height={320}
                className="w-full h-auto object-cover"
              />
            </div>
            <Link 
              href="https://drive.google.com/file/d/1uh0s3iayWlwpCqyB85A0g5qvJVW4KVKR/view?usp=drive_link"
              target="_blank"
              className="inline-block mt-4 text-brand-green underline underline-offset-4 hover:text-brand-green/80 transition-colors font-semibold text-sm"
            >
              
            </Link>
          </div>

          {/* Outstanding Delegate - MUN */}
          <div className="mb-16 animate-slide-up animate-delay-400 border-l-4 border-brand-green pl-6">
            <h2 className="text-brand-green font-bold text-xl md:text-2xl mb-4">
              Outstanding Delegate - Dewey Model United Nations
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-6">
              One of the first major debate competitions I ever joined. It pushed me to grow, speak up, and voice my
              perspectives with confidence.
            </p>
            <div className="mt-6 bg-white p-4 shadow-xl inline-block hover-lift">
              <Image
                src="/achievement/anh3.jpg"
                alt="Dewey Model United Nations certificate"
                width={420}
                height={320}
                className="w-full h-auto object-cover"
              />
            </div>
            <Link 
              href="https://drive.google.com/file/d/1uh0s3iayWlwpCqyB85A0g5qvJVW4KVKR/view?usp=drive_link"
              target="_blank"
              className="inline-block mt-4 text-brand-green underline underline-offset-4 hover:text-brand-green/80 transition-colors font-semibold text-sm"
            >
              
            </Link>
          </div>

          {/* Second Prize - Provincial Merit */}
          <div className="mb-16 animate-slide-up animate-delay-500 border-l-4 border-brand-green pl-6">
            <h2 className="text-brand-green font-bold text-xl md:text-2xl mb-4">
              Second Prize - Provincial Merit Competition in History (Grades 10–11)
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-6">
              Facing strong competitors, I gave everything I had to earn the outcome I hoped for. This competition taught me
              that <em>nothing can limit us when we truly believe in ourselves</em>.
            </p>
            <div className="mt-6 bg-white p-4 shadow-xl inline-block hover-lift">
              <Image
                src="/achievement/HAANH_WEB-44.png"
                alt="Provincial merit competition certificate"
                width={420}
                height={320}
                className="w-full h-auto object-cover"
              />
            </div>
            <Link 
              href="https://drive.google.com/file/d/1uh0s3iayWlwpCqyB85A0g5qvJVW4KVKR/view?usp=drive_link"
              target="_blank"
              className="inline-block mt-4 text-brand-green underline underline-offset-4 hover:text-brand-green/80 transition-colors font-semibold text-sm"
            >
              
            </Link>
          </div>

          {/* First Prize - Dong Da High School */}
          <div className="mb-16 animate-slide-up animate-delay-600 border-l-4 border-brand-green pl-6">
            <h2 className="text-brand-green font-bold text-xl md:text-2xl mb-4">
              First Prize, Dong Da High School Cluster Competition, History, Grades 10 - 11
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-6">
              This was the first time I challenged myself by competing in an academic subject at different levels of student competitions. 
              Coming from a literature-specialized background, I discovered a deep passion for history within just one month - and achieved 
              results beyond my expectations.
            </p>
            <Image
                src="/achievement/anh10.jpg"
                alt="Provincial merit competition certificate"
                width={420}
                height={320}
                className="w-auto h-auto object-cover"
              />
            <Link 
              href="https://drive.google.com/file/d/1gq56olkesPt8woOBTp3T62Zx_bq8Jha_/view?usp=drive_link"
              target="_blank"
              className="inline-block mt-4 text-brand-green underline underline-offset-4 hover:text-brand-green/80 transition-colors font-semibold text-sm"
            >
              
            </Link>
          </div>

          {/* Consolation Prize - Spreading Positive Energy */}
          <div className="mb-16 animate-slide-up animate-delay-700 border-l-4 border-brand-green pl-6">
            <h2 className="text-brand-green font-bold text-xl md:text-2xl mb-4">
              Consolation Prize - &quot;Spreading Positive Energy&quot; Contest, Tuoi Tre Online (5th Edition)
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-6">
              Through exploring real-life stories for this contest, I learned to see the quiet, persistent positivity that
              exists all around us. It became both a lesson and a reminder to stay focused and intentional in every
              competition I take part in.
            </p>
            <div className="mt-6 bg-white p-4 shadow-xl inline-block w-full max-w-[500px] hover-lift">
              <Image
                src="/achievement/anh8.jpg"
                alt="Tuoi Tre spreading positive energy contest"
                width={500}
                height={320}
                className="w-full h-auto object-cover"
              />
            </div>
            <Link 
              href="https://drive.google.com/file/d/1uh0s3iayWlwpCqyB85A0g5qvJVW4KVKR/view?usp=drive_link"
              target="_blank"
              className="inline-block mt-4 text-brand-green underline underline-offset-4 hover:text-brand-green/80 transition-colors font-semibold text-sm"
            >
              
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
