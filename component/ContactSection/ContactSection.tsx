'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    alert('Thank you! We will contact you soon.')
  }

  return (
    <section id="demo" className="py-20" style={{ backgroundColor: '#fff7ed' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-2xl overflow-hidden shadow-md h-[400px] w-full relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.92383818318!2d77.30515155!3d28.58532445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45faf10f971%3A0x89ee1bbceeb77051!2sSector%202%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1710920000000!5m2!1sen!2sin" 
              className="absolute top-0 left-0 w-full h-full border-0" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-extrabold mb-2" style={{ color: '#1B3A6B' }}>Book Free Demo Class</h3>
            <p className="text-gray-500 text-sm mb-6">Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border border-gray-200 text-sm placeholder:text-gray-500 text-gray-800 focus:outline-none focus:border-blue-400 transition-colors"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border border-gray-200 text-sm placeholder:text-gray-500 text-gray-800 focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm mb-4 placeholder:text-gray-500 text-gray-800 focus:outline-none focus:border-blue-400 transition-colors"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm mb-4 placeholder:text-gray-500 text-gray-800 focus:outline-none focus:border-blue-400 transition-colors"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm mb-4 placeholder:text-gray-500 text-gray-800 focus:outline-none focus:border-blue-400 transition-colors resize-none"
            />
            <button
              onClick={handleSubmit}
              className="w-full py-3.5 rounded-xl text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all"
              style={{ backgroundColor: '#1B3A6B' }}
            >
              Start Your Journey
              <span className="text-lg">🚀</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}