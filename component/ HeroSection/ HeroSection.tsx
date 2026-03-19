import Image from 'next/image'
import { Phone, ChevronRight, Star } from 'lucide-react'

const techTags = [
  'Digital Marketing',
  'Graphic Designing',
  'UI/UX',
  'Java',
  'GenAI Development',
  'AWS',
  'Cloud',
  'CAD Softwares',
]

export default function HeroSection() {
  return (
    <section className="relative bg-white pt-20 pb-20 lg:pt-28 font-sans overflow-hidden">
      <div
        className="absolute left-0 top-0 w-96 h-96 rounded-full opacity-[0.15] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f97316, transparent)' }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border border-orange-100"
              style={{ backgroundColor: '#fff7ed' }}
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#f97316' }} />
              <span className="text-sm font-semibold" style={{ color: '#f97316' }}>
                New Batch Starting Soon
              </span>
            </div>

            <h1 className="text-5xl lg:text-[4.5rem] font-extrabold leading-[1.1] mb-6 tracking-tight">
              <span style={{ color: '#1B3A6B' }}>Learn Skills</span>{' '}
              <span className="text-gray-900">That</span>
              <br />
              <span className="text-gray-900">Actually Get You</span>
              <br />
              <span style={{ color: '#f97316' }}>Hired !</span>
            </h1>

            <p className="text-gray-500 text-lg sm:text-xl mb-10 max-w-lg leading-relaxed">
              At SoftCrayons, education goes far beyond textbooks and theory. We focus on practical learning that equips you with real, job-ready skills.
            </p>

            <div className="flex items-center gap-4 mb-12 flex-wrap">
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base hover:opacity-90 transition-all shadow-lg shadow-blue-900/10"
                style={{ backgroundColor: '#1B3A6B' }}
              >
                Book Free Demo Class
                <ChevronRight size={18} strokeWidth={2.5} />
              </a>
              <a
                href="tel:+918545012345"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base border-2 border-gray-200 text-gray-800 hover:bg-gray-50 transition-all"
              >
                <Phone size={18} className="text-gray-600" />
                Contact Us
              </a>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-4">Technologies you'll master</p>
              <div className="flex flex-wrap gap-2.5 max-w-xl">
                {techTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-lg border border-gray-100 bg-gray-50/50 text-sm font-semibold text-gray-700 hover:border-gray-300 hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Scroll Indicator Icon */}
            <div className="hidden lg:flex mt-12 w-6 h-10 border-2 border-slate-300 rounded-full justify-center p-1 mx-auto lg:mx-0 translate-y-8">
              <div className="w-1 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#1B3A6B' }} />
            </div>
          </div>

          {/* Right Column / Image */}
          <div className="relative flex justify-center lg:justify-end items-center h-[500px] lg:h-[700px] w-full mt-10 lg:mt-0">
            {/* Light Blue Circle Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[380px] h-[380px] lg:w-[500px] lg:h-[500px] rounded-full -z-10" style={{ backgroundColor: '#38bdf8' }} />
            
            {/* Girl Image */}
            <div className="relative w-[90%] lg:w-[85%] mx-auto h-[100%] lg:h-[95%] -translate-y-6 lg:-translate-y-12 z-0">
              <Image
                src="/image.png"
                alt="Student"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>

            {/* Floating Card 1: Happy Student */}
            <div className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-sky-50 p-4 min-w-[220px] z-20">
              <div className="flex items-center gap-3 mb-1">
                <div className="flex -space-x-2">
                  <img src="https://i.pravatar.cc/100?img=5" alt="s1" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <img src="https://i.pravatar.cc/100?img=12" alt="s2" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <img src="https://i.pravatar.cc/100?img=33" alt="s3" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <img src="https://i.pravatar.cc/100?img=44" alt="s4" className="w-8 h-8 rounded-full border-2 border-white object-cover relative z-10" />
                </div>
                <span className="font-extrabold text-gray-900 text-lg">5000+</span>
              </div>
              <p className="text-[13px] font-bold text-sky-500 mb-1.5 leading-snug">Happy Student</p>
              <div className="flex items-center gap-1">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <span className="text-[11px] text-gray-500 font-medium ml-1">(4.8 Stars)</span>
              </div>
            </div>

            {/* Floating Card 2: 100% Placement */}
            <div className="absolute bottom-4 lg:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2.5 bg-white rounded-xl px-6 py-3.5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-sky-50 z-20 w-max">
              <div className="text-sky-600 flex items-center justify-center">
                <Star size={20} fill="currentColor" strokeWidth={0} />
              </div>
              <span className="text-sm font-bold" style={{ color: '#0369a1' }}>100% Placement Assistance</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}