'use client'

import Image from 'next/image'
import { Clock, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const courses = [
  {
    title: 'Best Graphic Designing Training',
    duration: '6 months',
    level: 'Advanced',
    description: 'Softcrayons offers an in-depth Graphic Design course for aspiring students, designers and professionals looking to enhance their creative....',
    bgColor: '#7c3aed',
    image: '/course-graphic-design.png'
  },
  {
    title: 'UI/UX Design',
    duration: '6 months',
    level: 'Advanced',
    description: 'Softcrayons offers an in-depth UI/UX Design course for aspiring students, designers and professionals looking to enhance their creative....',
    bgColor: '#7c3aed',
    image: '/course-ui-ux.png'
  },
  {
    title: 'Digital Marketing',
    duration: '6 months',
    level: 'Advanced',
    description: 'Softcrayons offers an in-depth Digital Marketing course for aspiring students, designers and professionals looking to enhance their creative....',
    bgColor: '#2563eb',
    image: '/course-digital-marketing.png'
  },
  {
    title: 'Java Full Stack with DSA',
    duration: '6 months',
    level: 'Advanced',
    description: 'Softcrayons offers an in-depth Java Full Stack course for aspiring students, designers and professionals looking to enhance their creative....',
    bgColor: '#1d4ed8',
    image: '/course-java-fullstack.png'
  },
]

export default function CurriculumSection() {
  const [current, setCurrent] = useState(0)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Industry-Ready <span style={{ color: '#E8760A' }}>Curriculum</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Hands-on courses designed by industry experts to get you job-ready in weeks, not years.
          </p>
        </div>

        <div className="relative">
          <div className="flex justify-end gap-2 mb-4">
            <button
              onClick={() => setCurrent(Math.max(0, current - 1))}
              className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => setCurrent(Math.min(courses.length - 4, current + 1))}
              className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div key={course.title} className="rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all group bg-white flex flex-col h-full">
                <div className="relative w-full h-44 overflow-hidden bg-gray-100">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock size={12} />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border" style={{ borderColor: '#fca5a5', color: '#dc2626', backgroundColor: '#fff1f2' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M3 12h3l4-8 4 16 4-10h3"/></svg>
                      {course.level}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-2">{course.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">{course.description}</p>
                  <button className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition-colors group-hover:border-blue-300">
                    View Course
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <button
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: '#1B3A6B' }}
          >
            View all Courses
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}