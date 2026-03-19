'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Tab = 'Testimonials' | 'Video Reviews' | 'Audio Reviews'

const testimonials = [
  {
    name: 'Priya Patel',
    role: 'SoftCrayons Alumni',
    rating: 5,
    review: '"The Python and Data Science course exceeded my expectations. The hands-on projects and real-world examples made learning so much easier. Highly recommended!"',
  },
  {
    name: 'Vikram Singh',
    role: 'SoftCrayons Alumni',
    rating: 4,
    review: '"The DevOps course was exactly what I needed to advance my career. I learned Docker, Kubernetes, and CI/CD in depth. Worth every penny!"',
  },
  {
    name: 'Rajesh Kumar',
    role: 'SoftCrayons Alumni',
    rating: 5,
    review: '"From a non-IT background to a software developer - SoftCrayons made it possible. The structured curriculum and mentor support were game-changers."',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={i <= count ? '#f59e0b' : 'none'} stroke="#f59e0b" strokeWidth="1.5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState<Tab>('Testimonials')
  const tabs: Tab[] = ['Testimonials', 'Video Reviews', 'Audio Reviews']

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-3">
            <span className="text-gray-900">Success </span>
            <span style={{ color: '#E8760A' }}>Stories</span>
          </h2>
          <p className="text-gray-500">Hear from our alumni who transformed their careers with SoftCrayons.</p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full p-1" style={{ backgroundColor: '#1B3A6B' }}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all"
                style={{
                  backgroundColor: activeTab === tab ? '#ffffff' : 'transparent',
                  color: activeTab === tab ? '#1B3A6B' : '#ffffff',
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="flex justify-end gap-2 mb-4">
            <button className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
              <ChevronLeft size={16} />
            </button>
            <button className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all relative">
                <div className="absolute top-4 right-4 text-4xl font-serif" style={{ color: '#E8760A', opacity: 0.2 }}>"</div>
                <StarRating count={t.rating} />
                <p className="text-sm text-gray-600 mt-4 mb-6 leading-relaxed">{t.review}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="px-8 py-3 rounded-full border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
            View All Testimonials
          </button>
        </div>
      </div>
    </section>
  )
}