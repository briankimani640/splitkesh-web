import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import ApkDownloadGuide from './components/ApkDownloadGuide'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-darkbg font-sans text-white">
      <Navbar />
      {/* Added padding-top to account for the fixed navbar */}
      <main className="pt-20"> 
        <Hero />
        <ProblemSolution />
        <ApkDownloadGuide />
      </main>
      <Footer />
    </div>
  )
}

export default App