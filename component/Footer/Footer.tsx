import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react'

const quickLinks = ['Home', 'About Us', 'Courses', 'Blog', 'Contact', 'Placements']
const partners = ['Pearson', 'SAP', 'Microsoft Academy', 'Google Cloud', 'AWS', 'Kryterion', 'ACT', 'Languagecert', 'Skills For English', 'Salesforce', 'Oracle']
const trendingCourses = [
  'Advanced Java Training', 'MERN Training', 'Data Analytics using Python', 'Full Stack QA Training',
  'Data Structures & Algorithms using JAVA', 'Java Full Stack with DSA', 'DevOps Training', 'Python using Data Analytics with Power BI',
]
const noida = [
  'Graphics Design Training', 'Programming Training', 'Cloud Training', 'CAD Training',
  'ERP Training Certification', 'ITIL Training Certification', 'Python Full Stack Training', 'Adobe Photoshop',
  'Adobe Illustrator', 'Adobe InDesign', 'Machine Learning With Python', 'Data Science Using Python',
  'Core Python', 'SEO Training', 'CorelDRAW', 'Social Media Optimization-SMO Training',
  'Email Marketing Training', 'Pay Per Click – PPC Training', 'Affiliate Marketing', 'Content Marketing',
  'Struts Training', 'Spring Training', 'Network Programming Training', 'Hibernate Training',
  'JAVA Servlet Training', 'EJB Training', 'RMI Training', 'ASA Firewall',
  'CCNA Security', 'Check Point Firewall',
]
const ghaziabad = [
  'Digital Marketing Training in Ghaziabad', 'Web Designing Training in Ghaziabad',
  'Software Testing Training in ghaziabad', 'Network & Security',
  'Advance Python Training in Ghaziabad', 'Advance JAVA training in ghaziabad',
  'Cloud Computing Training in Ghaziabad', 'Mobile Application Development',
  'Java Training And Course in Ghaziabad', 'Artificial Intelligence training in...',
  'Python Training In Ghaziabad', 'PHP Training in Ghaziabad',
  'iOS Development Training Ghaziabad', 'Flutter Training in Ghaziabad',
  'Core Java + Android + Kotlin', 'Core Java + Android + Flutter',
  'Android Development Training in...', 'Django Training In Ghaziabad',
  'Data Science Training in Ghaziabad', 'Core JAVA Training in Ghaziabad',
  'Data Analytics Using Python Training In...', 'Manual + Selenium Training In Ghaziabad',
  'JAVA Selenium Training in Ghaziabad', 'CCNA Security+ CCNA Security+...',
  'Manual Testing Training in Ghaziabad', 'Automation Testing Training in...',
  'Python Selenium Training in Ghaziabad', 'Angular Js Training In Ghaziabad',
]

const socialLinks = [
  { label: 'Facebook', color: '#1877F2', Icon: Facebook },
  { label: 'Instagram', color: '#E1306C', Icon: Instagram },
  { label: 'Twitter', color: '#1DA1F2', Icon: Twitter },
  { label: 'LinkedIn', color: '#0077B5', Icon: Linkedin },
  { label: 'YouTube', color: '#FF0000', Icon: Youtube },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0f1f3d' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-extrabold">
                <span style={{ color: '#E8760A' }}>Soft</span>
                <span className="text-white">crayons</span>
              </span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              Empowering professionals through transformative digital learning experiences and cutting-edge educational technologies.
            </p>
            <div className="mb-6">
              <h4 className="text-sm font-bold mb-3" style={{ color: '#E8760A' }}>Contact Information</h4>
              <div className="space-y-2 text-sm text-blue-200">
                <p className="flex gap-2">
                  <span>📍</span>
                  C-6 (First Floor) Sector 2 near Sector 15 Metro Station Noida, Uttar Pradesh 201301
                </p>
                <p className="flex gap-2">
                  <span>📍</span>
                  A-693, Vashundhara Sector 14-A, Ghaziabad, Uttar Pradesh 201010
                </p>
                <p className="flex gap-2">
                  <span>📞</span>
                  +91 8545012345
                </p>
                <p className="flex gap-2">
                  <span>✉️</span>
                  info@softcrayons.com
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-3" style={{ color: '#E8760A' }}>Our Branches</h4>
              <div className="space-y-1 text-sm text-blue-200">
                <p>🏢 Noida Branch</p>
                <p>🏢 Ghaziabad Branch</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="flex items-center gap-2 text-sm text-blue-200 hover:text-orange-400 transition-colors">
                    <span style={{ color: '#E8760A' }}>»</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4" style={{ color: '#E8760A' }}>Our Partners</h4>
            <ul className="space-y-2">
              {partners.map((p) => (
                <li key={p}>
                  <a href="#" className="flex items-center gap-2 text-sm text-blue-200 hover:text-orange-400 transition-colors">
                    <span style={{ color: '#E8760A' }}>»</span>
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 pt-10 mb-10">
          <h4 className="text-sm font-bold mb-6" style={{ color: '#E8760A' }}>Trending Courses</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {trendingCourses.map((c) => (
              <a key={c} href="#" className="flex items-center gap-1 text-xs text-blue-200 hover:text-orange-400 transition-colors">
                <span style={{ color: '#E8760A' }}>»</span>
                {c}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-blue-900 pt-10 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h4 className="flex items-center gap-1 text-sm font-bold mb-4 text-blue-200">
                📍 <span style={{ color: '#E8760A' }}>Courses in Noida</span>
              </h4>
              <div className="grid grid-cols-2 gap-1">
                {noida.map((c) => (
                  <a key={c} href="#" className="flex items-start gap-1 text-xs text-blue-300 hover:text-orange-400 transition-colors py-0.5">
                    <span style={{ color: '#E8760A' }} className="flex-shrink-0">»</span>
                    {c}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="flex items-center gap-1 text-sm font-bold mb-4 text-blue-200">
                📍 <span style={{ color: '#E8760A' }}>Courses in Ghaziabad</span>
              </h4>
              <div className="grid grid-cols-2 gap-1">
                {ghaziabad.map((c) => (
                  <a key={c} href="#" className="flex items-start gap-1 text-xs text-blue-300 hover:text-orange-400 transition-colors py-0.5">
                    <span style={{ color: '#E8760A' }} className="flex-shrink-0">»</span>
                    {c}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-900 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div>
              <h4 className="text-xs font-bold text-white mb-3 uppercase tracking-widest">Follow Us</h4>
              <div className="flex gap-2 flex-wrap">
                {socialLinks.map(({ label, color, Icon }) => (
                  <a
                    key={label}
                    href="#"
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-80"
                    style={{ backgroundColor: color }}
                    title={label}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white mb-3 uppercase tracking-widest">For Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-l-lg text-xs bg-blue-900 border border-blue-700 text-white placeholder-blue-400 focus:outline-none"
                />
                <button className="px-3 py-2 rounded-r-lg" style={{ backgroundColor: '#E8760A' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white mb-3 uppercase tracking-widest">For Notifications</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-l-lg text-xs bg-blue-900 border border-blue-700 text-white placeholder-blue-400 focus:outline-none"
                />
                <button className="px-3 py-2 rounded-r-lg" style={{ backgroundColor: '#E8760A' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white mb-3 uppercase tracking-widest">We Accept Online Payments</h4>
              <div className="flex gap-3 flex-wrap items-center bg-white p-2 rounded-lg inline-flex">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg" alt="PhonePe" className="h-5 object-contain" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="GPay" className="h-5 object-contain" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg" alt="Paytm" className="h-4 object-contain" />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 border-t border-blue-900">
            <p className="text-xs text-blue-400">
              © 2026 <span style={{ color: '#E8760A' }}>Softcrayons Tech Solutions</span>. All Rights Reserved.
            </p>
            <p className="text-xs text-blue-600">The Certification name and logos are the trademark of their respective owners. Disclaimer</p>
          </div>
        </div>
      </div>
    </footer>
  )
}