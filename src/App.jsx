import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import FeatureGrid from './components/FeatureGrid'
import SplitCalculator from './components/SplitCalculator' // <-- Added Split Calculator
import HowItWorks from './components/HowItWorks'
import TeamSection from './components/TeamSection'
import FaqSection from './components/FaqSection'
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
        <SplitCalculator /> {/* <-- Rendered here to test live splits */}
        <HowItWorks />
        <TeamSection />
        <FaqSection />
        <ApkDownloadGuide />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App