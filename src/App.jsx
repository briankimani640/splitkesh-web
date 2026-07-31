import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import FeatureGrid from './components/FeatureGrid'
import SplitCalculator from './components/SplitCalculator'
import ChamaCycle from './components/ChamaCycle'
import HowItWorks from './components/HowItWorks'
import TeamSection from './components/TeamSection'
import FaqSection from './components/FaqSection'
import SystemStatus from './components/SystemStatus'
import ApkDownloadGuide from './components/ApkDownloadGuide'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-darkbg font-sans text-white relative">
      
      {/* 4. MATTE NOISE OVERLAY */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.04]" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      {/* Main Content Wrapper (z-10 keeps it above the noise) */}
      <div className="relative z-10">
        <Navbar />
        <main className="pt-20"> 
          <Hero />
          <ProblemSolution />
          <FeatureGrid />
          <SplitCalculator />
          <ChamaCycle />
          <HowItWorks />
          <TeamSection />
          <FaqSection />
          <SystemStatus />
          <ApkDownloadGuide />
          <ContactForm />
        </main>
        <Footer />
      </div>

    </div>
  )
}

export default App