import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import FeatureGrid from './components/FeatureGrid'
import HowItWorks from './components/HowItWorks'
import TeamSection from './components/TeamSection'
import FaqSection from './components/FaqSection'
import ApkDownloadGuide from './components/ApkDownloadGuide'
import ContactForm from './components/ContactForm' // <-- Import here
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-darkbg font-sans text-white">
      <Navbar />
      <main className="pt-20"> 
        <Hero />
        <ProblemSolution />
        <FeatureGrid />
        <HowItWorks />
        <TeamSection />
        <FaqSection />
        <ApkDownloadGuide />
        <ContactForm /> {/* <-- Add it here */}
      </main>
      <Footer />
    </div>
  )
}

export default App