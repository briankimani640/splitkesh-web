import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import FeatureGrid from './components/FeatureGrid'
import SplitCalculator from './components/SplitCalculator'
import ChamaCycle from './components/ChamaCycle'
import HowItWorks from './components/HowItWorks'
import TeamSection from './components/TeamSection'
import FaqSection from './components/FaqSection'
import SystemStatus from './components/SystemStatus' // <-- Import the new status bar
import ApkDownloadGuide from './components/ApkDownloadGuide'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-darkbg font-sans text-white">
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
        <SystemStatus /> {/* <-- Render it right before the download guide */}
        <ApkDownloadGuide />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App