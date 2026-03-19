'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const placements = [
  { name: 'Utkarsh Kausik', company: 'Xonier Technologies', role: 'Trainee- Lead Generation', partner: 'Google Cloud' },
  { name: 'Sameer Kumar Das', company: 'Xonier Technologies', role: 'Trainee- Lead Generation', partner: 'Kryterion' },
  { name: 'Shubham Kumar', company: 'Xonier Technologies', role: 'Trainee- Lead Generation', partner: 'Google Cloud' },
  { name: 'Rajat Agarwal', company: 'Xonier Technologies', role: 'Trainee- Lead Generation', partner: 'Kryterion' },
  { name: 'Utkarsh Kausik', company: 'Xonier Technologies', role: 'Trainee- Lead Generation', partner: 'Google Cloud' },
]

function PlacementCard({ name, company, role, partner }: { name: string; company: string; role: string; partner: string }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all min-w-[220px] flex-1">
      <div className="relative h-28 flex flex-col items-center justify-center text-white" style={{ background: 'linear-gradient(135deg, #1B3A6B, #2a5298)' }}>
        <div className="absolute inset-0 opacity-20">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="absolute h-px w-full" style={{ top: `${i * 14}%`, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)' }} />
          ))}
        </div>
        <p className="text-lg font-bold relative z-10">Got Placed</p>
        <p className="text-sm italic relative z-10" style={{ color: '#93c5fd' }}>Congratulation</p>
        <div className="absolute -bottom-6 w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200 z-10">
          <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs font-bold">
            {name.charAt(0)}
          </div>
        </div>
      </div>
      <div className="pt-8 pb-4 px-4 text-center">
        <p className="font-semibold text-gray-800 text-sm">{name}</p>
        <p className="text-xs text-gray-500 mt-1">On Successfully Placed in {company} as a {role}</p>
        <div className="flex items-center justify-center gap-2 mt-3">
          <span className="text-xs font-bold" style={{ color: '#E8760A' }}>Soft</span>
          <span className="text-xs font-bold text-gray-700">crayons</span>
          <span className="text-gray-300 mx-1">›</span>
          <span className="text-xs text-blue-600 font-medium">{partner}</span>
        </div>
      </div>
    </div>
  )
}

export default function RecentPlacedSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prev = () => setCurrentIndex(Math.max(0, currentIndex - 1))
  const next = () => setCurrentIndex(Math.min(placements.length - 5, currentIndex + 1))

  return (
    <section id="placements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">
            <span style={{ color: '#1B3A6B' }}>Our Student</span>{' '}
            <span style={{ color: '#E8760A' }}>Recent Placed</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Our students are landing roles in top companies across industries. Their dedication and strong foundation drive real success—and we're proud to power their journey forward.
          </p>
        </div>

        <div className="relative">
          <div 
            className="flex gap-4 overflow-x-auto md:overflow-hidden snap-x snap-mandatory scroll-smooth pb-4 md:pb-0"
          >
            <div 
              className="flex gap-4 transition-transform duration-300 ease-in-out w-max"
              style={{ transform: `translateX(-${currentIndex * (220 + 16)}px)` }}
            >
              {placements.map((p, i) => (
                <div key={i} className="snap-start snap-always shrink-0 w-[220px]">
                  <PlacementCard {...p} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-6">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="px-8 py-3 rounded-full border border-orange-400 font-semibold transition-all hover:bg-orange-50" style={{ color: '#E8760A' }}>
            Explore All Success stories
          </button>
        </div>
      </div>
    </section>
  )
}