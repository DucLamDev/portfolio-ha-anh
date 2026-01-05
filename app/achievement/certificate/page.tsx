import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function CertificatePage() {
  // Organized by image dimensions
  const largeLandscapeCerts = [
    { img: '/achievement/anh9.png', title: 'Certificate from eSight.vn and V.E.O', role: 'Hope" talk show ambassador' },
    { img: '/achievement/anh3.jpg', title: 'Dewey Model United Nations 2025', role: 'Outstanding Delegate' },
  ]

  const mediumLandscapeCerts = [
    { img: '/achievement/anh6.jpg', title: 'Project Initiation: Starting a Successful Project', role: 'Course Participant / Learner' },
    { img: '/achievement/anh4.jpg', title: 'Foundations of Project Management', role: 'Course Participant / Learner' },
    { img: '/achievement/anh19.jpg', title: 'Project Planning: Putting It All Together', role: 'Course Participant / Learner' },
    { img: '/achievement/achievement_1.jpg', title: 'Xom Hoa Hoa (ICEP Hanoi Classy JSC)', role: 'Ambassador (Đại sứ)' },
    { img: '/achievement/achievement_2.jpg', title: 'IOGT-VN', role: 'Trainee' },
    { img: '/achievement/achievement_3.jpg', title: 'Vietnamese Female Students Association (VFSA)', role: 'The Head of Human Resources Department' },
    { img: '/achievement/achievement_4.jpg', title: 'Trung tâm Phục hồi chức năng người khuyết tật Thụy An', role: 'Tình nguyện viên' },
    { img: '/achievement/anh20.jpg', title: 'Ho Chi Minh Communist Youth Union of Dong Da District', role: 'Member of Youth Union Branch 10D1 - Phan Huy Chu High School' },
  ]

  const portraitCerts = [
    { img: '/achievement/anh1.jpg', title: 'Utilizing the Theory of Planned Behaviour to evaluate the influence of cognitive bias and social media on the green consumption choices of Gen Z', role: 'Co-inventor / Awardee' },
    { img: '/achievement/anh2.jpg', title: 'International Invention & Trade Expo London (ITE)', role: 'Special Award' },
    { img: '/achievement/anh18.jpg', title: 'Positive Energy Spreading Contest – Season 6', role: 'Consolation Prize' },
  ]

  const largePortraitCerts = [
    { img: '/achievement/anh17.jpg', title: 'Business Profile - Legacy Media', role: 'Creative Director.' },
  ]

  const wideRecognitionCerts = [
    { img: '/achievement/achievement_5.png', title: 'FemPower', role: 'Founder / President' },
    { img: '/achievement/achievement_6.png', title: 'The Fifth Note (Showcase "Hòa sắc cá nhân")', role: 'Co-host' },
    { img: '/achievement/achievement_7.png', title: 'Healing Tunes', role: 'Founder' },
  ]

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
              <span>CERTIFICATE</span>
            </p>
          </div>

          {/* Main title */}
          <h1 className="metal-heading-xl text-brand-green mb-12 text-center animate-scale-in">
            CERTIFICATE
          </h1>

          {/* All Certificates - Organized by Size */}
          <div className="space-y-12">
            {/* Row 1: Large Landscape - Healing Tunes & Dewey MUN */}
            <div className="grid md:grid-cols-2 gap-8">
              {largeLandscapeCerts.map((cert, idx) => (
                <div key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="bg-white p-3 shadow-xl hover-lift mb-3">
                    <Image src={cert.img} alt={`${cert.title} - ${cert.role}`} width={600} height={400} className="w-full h-auto object-cover" />
                  </div>
                  <div className="text-center">
                    <p className="text-brand-green font-bold text-sm md:text-base mb-1">{cert.title}</p>
                    <p className="text-gray-300 text-xs md:text-sm">{cert.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: Portrait certificates - VFSA, Libreria, Spreading Positive Energy */}
            <div className="grid md:grid-cols-3 gap-8">
              {portraitCerts.map((cert, idx) => (
                <div key={idx} className="animate-slide-up" style={{ animationDelay: `${(idx + 2) * 100}ms` }}>
                  <div className="bg-white p-3 shadow-xl hover-lift mb-3">
                    <Image src={cert.img} alt={`${cert.title} - ${cert.role}`} width={400} height={600} className="w-full h-auto object-cover" />
                  </div>
                  <div className="text-center">
                    <p className="text-brand-green font-bold text-sm md:text-base mb-1">{cert.title}</p>
                    <p className="text-gray-300 text-xs md:text-sm">{cert.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 3: Medium Landscape - FemPower, VCOP, Achievement Certs (first row) */}
            <div className="grid md:grid-cols-3 gap-8">
              {mediumLandscapeCerts.slice(0, 3).map((cert, idx) => (
                <div key={idx} className="animate-slide-up" style={{ animationDelay: `${(idx + 5) * 100}ms` }}>
                  <div className="bg-white p-3 shadow-xl hover-lift mb-3">
                    <Image src={cert.img} alt={`${cert.title} - ${cert.role}`} width={500} height={400} className="w-full h-auto object-cover" />
                  </div>
                  <div className="text-center">
                    <p className="text-brand-green font-bold text-sm md:text-base mb-1">{cert.title}</p>
                    <p className="text-gray-300 text-xs md:text-sm">{cert.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 4: Medium Landscape - Achievement Certs (second row) */}
            <div className="grid md:grid-cols-3 gap-8">
              {mediumLandscapeCerts.slice(3).map((cert, idx) => (
                <div key={idx} className="animate-slide-up" style={{ animationDelay: `${(idx + 8) * 100}ms` }}>
                  <div className="bg-white p-3 shadow-xl hover-lift mb-3">
                    <Image src={cert.img} alt={`${cert.title} - ${cert.role}`} width={500} height={400} className="w-full h-auto object-cover" />
                  </div>
                  <div className="text-center">
                    <p className="text-brand-green font-bold text-sm md:text-base mb-1">{cert.title}</p>
                    <p className="text-gray-300 text-xs md:text-sm">{cert.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 5: Large Portrait - Global High School Business Competition */}
            <div className="grid md:grid-cols-1 gap-8 max-w-xl mx-auto">
              {largePortraitCerts.map((cert, idx) => (
                <div key={idx} className="animate-slide-up" style={{ animationDelay: '1100ms' }}>
                  <div className="bg-white p-3 shadow-xl hover-lift mb-3">
                    <Image src={cert.img} alt={`${cert.title} - ${cert.role}`} width={500} height={700} className="w-full h-auto object-cover" />
                  </div>
                  <div className="text-center">
                    <p className="text-brand-green font-bold text-sm md:text-base mb-1">{cert.title}</p>
                    <p className="text-gray-300 text-xs md:text-sm">{cert.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 6: Wide Recognition Certificates */}
            <div className="grid md:grid-cols-3 gap-8">
              {wideRecognitionCerts.map((cert, idx) => (
                <div key={idx} className="animate-slide-up" style={{ animationDelay: `${(idx + 12) * 100}ms` }}>
                  <div className="bg-white p-3 shadow-xl hover-lift mb-3">
                    <Image src={cert.img} alt={`${cert.title} - ${cert.role}`} width={600} height={400} className="w-full h-auto object-cover" />
                  </div>
                  <div className="text-center">
                    <p className="text-brand-green font-bold text-sm md:text-base mb-1">{cert.title}</p>
                    <p className="text-gray-300 text-xs md:text-sm">{cert.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
