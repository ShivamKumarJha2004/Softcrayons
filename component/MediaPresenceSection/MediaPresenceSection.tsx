'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

const mediaItems = [
  {
    outlet: 'nucamp',
    logo: 'https://www.google.com/s2/favicons?domain=nucamp.co&sz=128',
    title: 'Will AI Replace Finance Jobs in Myanmar? Here\'s What to Do in 2025',
  },
  {
    outlet: 'IIM SKILLS',
    logo: 'https://www.google.com/s2/favicons?domain=iimskills.com&sz=128',
    title: 'Vaibhav Kakkar on IIM SKILLS: Industry-Relevant Training for Career Success',
  },
  {
    outlet: 'mid·day',
    logo: 'https://www.google.com/s2/favicons?domain=mid-day.com&sz=128',
    title: 'Top 5 Best Financial Modeling and Valuation Courses for Investment Banking in India',
  },
  {
    outlet: 'Jagran Josh',
    logo: 'https://www.google.com/s2/favicons?domain=jagranjosh.com&sz=128',
    title: 'List of CAT Crash Courses to Pursue in 2024',
  },
]

export default function MediaPresenceSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold">
            <span style={{ color: '#1B3A6B' }}>Media </span>
            <span style={{ color: '#E8760A' }}>Presence</span>
          </h2>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {mediaItems.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="mb-4 h-12 flex items-center gap-2">
                  <img src={item.logo} alt={item.outlet} className="h-6 w-6 object-contain grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                  <span className="text-lg font-extrabold text-gray-800">
                    {item.outlet}
                  </span>
                </div>
                <p className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-blue-600 transition-colors">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}