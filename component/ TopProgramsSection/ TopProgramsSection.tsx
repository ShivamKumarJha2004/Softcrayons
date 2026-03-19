import { 
  FileSpreadsheet, 
  Cloud, 
  Building2, 
  Network, 
  Database, 
  Megaphone, 
  TerminalSquare, 
  Briefcase, 
  Award, 
  Palette, 
  Factory, 
  Coffee, 
  LucideIcon 
} from 'lucide-react'

const programs = [
  { name: 'Advanced Excel/ MS Training', color: '#16a34a', icon: FileSpreadsheet },
  { name: 'Amazon Web Services (AWS) Training', color: '#f97316', icon: Cloud },
  { name: 'Civil CAD Training', color: '#dc2626', icon: Building2 },
  { name: 'Cloud Computing Training', color: '#2563eb', icon: Network },
  { name: 'Database Training', color: '#7c3aed', icon: Database },
  { name: 'Digital Marketing Training', color: '#d97706', icon: Megaphone },
  { name: 'DotNet Training', color: '#1d4ed8', icon: TerminalSquare },
  { name: 'ERP & SAP Training', color: '#059669', icon: Briefcase },
  { name: 'Global Certification', color: '#0891b2', icon: Award },
  { name: 'Graphic Designing Training', color: '#e11d48', icon: Palette },
  { name: 'Industrial Training', color: '#6d28d9', icon: Factory },
  { name: 'Java Programming Training', color: '#b45309', icon: Coffee },
]

function ProgramIcon({ color, Icon }: { color: string, Icon: LucideIcon }) {
  return (
    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform hover:scale-110" style={{ backgroundColor: `${color}15` }}>
      <Icon size={24} style={{ color }} />
    </div>
  )
}

export default function TopProgramsSection() {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Explore Our <span style={{ color: '#1B3A6B' }}>Top Programs</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Explore our top programs designed to build your skills and shape your future. Choose the right path and start your journey toward success today.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {programs.map((program) => (
            <div
              key={program.name}
              className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all cursor-pointer group"
            >
              <ProgramIcon color={program.color} Icon={program.icon} />
              <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{program.name}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            className="inline-flex items-center px-8 py-3 rounded-full text-white font-semibold transition-all hover:opacity-90 shadow-lg shadow-blue-900/10"
            style={{ backgroundColor: '#1B3A6B' }}
          >
            Show All Category
          </button>
        </div>
      </div>
    </section>
  )
}