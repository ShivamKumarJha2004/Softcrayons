import Navbar from '@/component/Navbar/Navbar'
import Footer from '@/component/Footer/Footer'
import HeroSection from '@/component/ HeroSection/ HeroSection'
import StatsSection from '@/component/StatsSection/StatsSection'
import TopProgramsSection from '@/component/ TopProgramsSection/ TopProgramsSection'
import RecentPlacedSection from '@/component/RecentPlacedSection/RecentPlacedSection'
import CurriculumSection from '@/component/CurriculumSection/CurriculumSection'
import SuccessSection from '@/component/SuccessSection/SuccessSection'
import TestimonialsSection from '@/component/TestimonialsSection/TestimonialsSection'
import PartnersSection from '@/component/PartnersSection/PartnersSection'
import KnowledgeHubSection from '@/component/KnowledgeHubSection/KnowledgeHubSection'
import PlacedStudentsSection from '@/component/PlacedStudentsSection/PlacedStudentsSection'
import CTASection from '@/component/CTASection/CTASection'
import MediaPresenceSection from '@/component/MediaPresenceSection/MediaPresenceSection'
import ContactSection from '@/component/ContactSection/ContactSection'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <TopProgramsSection />
      <RecentPlacedSection />
      <CurriculumSection />
      <SuccessSection />
      <TestimonialsSection />
      <PartnersSection />
      <KnowledgeHubSection />
      <PlacedStudentsSection />
      <CTASection />
      <MediaPresenceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}