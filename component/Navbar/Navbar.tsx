'use client'

import { useState } from 'react'
import { Search, ChevronDown, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Courses', href: '#courses' },
  { label: 'Placements', href: '#placements' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'Tutorials', href: '#tutorials' },
  { label: 'More', href: '#', hasDropdown: true },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="#1B3A6B" opacity="0.1"/>
                <path d="M8 28L16 12L24 22L30 16L36 28H8Z" fill="#E8760A" opacity="0.8"/>
                <path d="M4 32L12 16L20 26L26 18L32 26L36 32H4Z" fill="#1B3A6B"/>
              </svg>
              <span className="text-xl font-bold">
                <span style={{ color: '#E8760A' }}>SOFT</span>
                <span style={{ color: '#1B3A6B' }}>CRAYONS</span>
              </span>
            </div>
            <div className="flex items-center ml-1 px-2 py-0.5 border border-orange-400 rounded text-xs font-bold" style={{ color: '#E8760A', borderColor: '#E8760A' }}>
              <span>15+</span>
              <br />
              <span className="block text-[8px] leading-none">Years</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={14} />}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
            >
              <Search size={16} className="text-gray-600" />
            </button>
            <a
              href="#demo"
              className="hidden sm:inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #1B3A6B, #2a5298)' }}
            >
              Get a Free Demo
            </a>
            <a
              href="#jobs"
              className="hidden sm:inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold border border-gray-800 text-gray-800 hover:bg-gray-50 transition-colors"
            >
              Find Jobs
            </a>
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="py-3 border-t border-gray-100">
            <input
              type="text"
              placeholder="Search courses, tutorials..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-400 text-sm"
              autoFocus
            />
          </div>
        )}

        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm font-medium text-gray-700 hover:text-orange-500 py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <a href="#demo" className="flex-1 text-center py-2 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: '#1B3A6B' }}>
                Get a Free Demo
              </a>
              <a href="#jobs" className="flex-1 text-center py-2 rounded-full text-sm font-semibold border border-gray-800">
                Find Jobs
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}