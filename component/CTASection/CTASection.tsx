export default function CTASection() {
  return (
    <section
      className="py-20"
      style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #2a5298 100%)' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Ready to Start Your{' '}
          <span style={{ color: '#E8760A' }}>Career Journey?</span>
        </h2>
        <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
          Join over 10,000+ students who have transformed their careers with SoftCrayons. Book your free demo class today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:opacity-90"
            style={{ backgroundColor: '#E8760A', color: '#fff' }}
          >
            Book Free Demo Class
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a
            href="tel:+918545012345"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-all"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  )
}