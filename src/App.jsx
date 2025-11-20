import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
        <footer className="bg-neutral-950 text-white border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/illuminati-logo.svg" alt="Illuminati Pvt Ltd" className="h-8 w-8" />
              <span className="text-white/80">© {new Date().getFullYear()} Illuminati Pvt Ltd. All rights reserved.</span>
            </div>
            <div className="text-white/60 text-sm">Built with precision • Safety first • Quality guaranteed</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
