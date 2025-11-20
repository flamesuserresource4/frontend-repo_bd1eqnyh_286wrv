import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Partners from './components/Partners'
import About from './components/About'
import Careers from './components/Careers'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Partners />
        <Services />
        <Projects />
        <Testimonials />
        <About />
        <Careers />
        <Contact />
        <footer className="bg-white text-slate-700 border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/illuminati-logo.svg" alt="Illuminati Pvt Ltd" className="h-8 w-8" />
              <span className="text-slate-600">© {new Date().getFullYear()} Illuminati Pvt Ltd. All rights reserved.</span>
            </div>
            <div className="text-slate-500 text-sm">Built with precision • Safety first • Quality guaranteed</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
