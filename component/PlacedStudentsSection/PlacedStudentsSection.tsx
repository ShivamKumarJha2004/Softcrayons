const placements = [
  { name: 'Rohit Sharma', course: 'Full Stack Web Devel...', lpa: '12 LPA', company: 'Infosys', role: 'Software Engineer', color: '#1B3A6B' },
  { name: 'Meera Krishnan', course: 'Data Science & ML', lpa: '15 LPA', company: 'Amazon', role: 'Data Analyst', color: '#E8760A' },
  { name: 'Arjun Nair', course: 'AWS Solutions Archit...', lpa: '18 LPA', company: 'TCS', role: 'Cloud Architect', color: '#059669' },
  { name: 'Karan Malhotra', course: 'DevOps & CI/CD', lpa: '14 LPA', company: 'Accenture', role: 'DevOps Engineer', color: '#7c3aed' },
]

export default function PlacedStudentsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-3">
            <span className="text-gray-900">Students </span>
            <span style={{ color: '#E8760A' }}>Placed </span>
            <span className="text-gray-900">Successfully</span>
          </h2>
          <p className="text-gray-500">Join thousands of students who landed their dream jobs at top companies.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {placements.map((p) => (
            <div key={p.name} className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition-all">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0" style={{ backgroundColor: p.color }}>
                  {p.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm truncate">{p.name}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="#E8760A"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    <span className="text-xs text-gray-500 truncate">{p.course}</span>
                  </div>
                </div>
                <span className="flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: '#1B3A6B' }}>
                  {p.lpa}
                </span>
              </div>
              <div className="flex items-center gap-2 pt-3 border-t border-gray-50">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#f3f4f6' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
                    <path d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">{p.company}</p>
                  <p className="text-xs text-gray-500">{p.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="px-8 py-3 rounded-full border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
            View All Placement
          </button>
        </div>
      </div>
    </section>
  )
}