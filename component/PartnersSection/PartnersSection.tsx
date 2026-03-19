'use client'

const partners = [
  { name: 'Pearson', logo: 'https://www.google.com/s2/favicons?domain=pearson.com&sz=128' },
  { name: 'SAP', logo: 'https://www.google.com/s2/favicons?domain=sap.com&sz=128' },
  { name: 'Microsoft', logo: 'https://www.google.com/s2/favicons?domain=microsoft.com&sz=128' },
  { name: 'Google Cloud', logo: 'https://www.google.com/s2/favicons?domain=cloud.google.com&sz=128' },
  { name: 'AWS', logo: 'https://www.google.com/s2/favicons?domain=aws.amazon.com&sz=128' },
  { name: 'Oracle', logo: 'https://www.google.com/s2/favicons?domain=oracle.com&sz=128' },
  { name: 'Salesforce', logo: 'https://www.google.com/s2/favicons?domain=salesforce.com&sz=128' },
  { name: 'Kryterion', logo: 'https://www.google.com/s2/favicons?domain=kryterion.com&sz=128' },
]

export default function PartnersSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-3">
            <span className="text-gray-900">Our </span>
            <span style={{ color: '#E8760A' }}>Partners</span>
          </h2>
          <p className="text-gray-500">Trusted by leading companies and certification bodies worldwide.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-center gap-2 p-3 h-16 rounded-xl bg-white border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all cursor-pointer grayscale hover:grayscale-0"
              title={p.name}
            >
              <img src={p.logo} alt={p.name} className="h-6 w-6 object-contain" onError={(e) => { e.currentTarget.style.display = 'none' }} />
              <span className="font-bold text-xs text-gray-700">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
