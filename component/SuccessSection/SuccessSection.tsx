export default function SuccessSection() {
  return (
    <section className="py-16" style={{ backgroundColor: '#f8fafc' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6" style={{ backgroundColor: '#e0f2fe' }}>
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0ea5e9' }} />
          <span className="text-sm font-semibold text-sky-700">Career Support</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
          Your Success is Our <span style={{ color: '#E8760A' }}>Priority</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
          We provide 100% placement assistance, resume building workshops, and expert mock interviews to ensure you land your dream job right after completing your course.
        </p>
        <div className="flex justify-center flex-wrap gap-4">
          <div className="bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-100 min-w-[200px]">
            <p className="text-3xl font-black mb-1" style={{ color: '#1B3A6B' }}>100%</p>
            <p className="text-sm text-gray-500 font-medium">Placement Assistance</p>
          </div>
          <div className="bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-100 min-w-[200px]">
            <p className="text-3xl font-black mb-1" style={{ color: '#1B3A6B' }}>50+</p>
            <p className="text-sm text-gray-500 font-medium">Hiring Partners</p>
          </div>
          <div className="bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-100 min-w-[200px]">
            <p className="text-3xl font-black mb-1" style={{ color: '#1B3A6B' }}>1-on-1</p>
            <p className="text-sm text-gray-500 font-medium">Career Mentorship</p>
          </div>
        </div>
      </div>
    </section>
  )
}