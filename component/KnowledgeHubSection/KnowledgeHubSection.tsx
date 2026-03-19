const blogs = [
  { tag: 'java', title: 'Spring Data Jpa', subtitle: 'Spring Data JPA', readTime: '20 min read', bgColor: '#16a34a' },
  { tag: 'java', title: 'Java8', subtitle: 'Java 8 Core Modern Features', readTime: '90 min read', bgColor: '#b45309' },
  { tag: 'java', title: 'Multi Threading', subtitle: 'Multi Threading', readTime: '50 min read', bgColor: '#7c3aed' },
  { tag: 'java', title: 'Multi Threading', subtitle: 'Multi Threading', readTime: '50 min read', bgColor: '#1d4ed8' },
]

export default function KnowledgeHubSection() {
  return (
    <section id="blogs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Knowledge <span style={{ color: '#E8760A' }}>Hub</span>
          </h2>
          <p className="text-gray-500">Stay ahead with the latest insights, tutorials, and career tips from our experts.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all cursor-pointer group">
              <div
                className="h-44 relative flex items-center justify-center text-white"
                style={{ backgroundColor: blog.bgColor }}
              >
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#E8760A' }}>
                  {blog.tag}
                </span>
                <span className="text-lg font-bold opacity-80 text-center px-4">{blog.subtitle}</span>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1 text-xs text-gray-400 mb-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                  {blog.readTime}
                </div>
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">{blog.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{blog.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}