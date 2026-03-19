import { Users, BookOpen, Award, Globe } from 'lucide-react'

const stats = [
  { icon: Users, value: '10,000+', label: 'Students Trained' },
  { icon: BookOpen, value: '20+', label: 'Courses Available' },
  { icon: Award, value: '90%', label: 'Success Rate' },
  { icon: Globe, value: '200+', label: 'Companies Hired' },
]

export default function StatsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#fff7ed' }}>
                <Icon size={24} style={{ color: '#E8760A' }} />
              </div>
              <p className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-1">{value}</p>
              <p className="text-sm text-gray-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}