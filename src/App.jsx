import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import ApkDownloadGuide from './components/ApkDownloadGuide'

function App() {
  return (
    <main className="min-h-screen bg-darkbg font-sans">
      <Hero />
      <ProblemSolution />
      <ApkDownloadGuide />
    </main>
  )
}

export default App