import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import AdilGPT from './components/AdilGPT'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

function App() {
  return (
    <div id="content">
      <Nav />
      <main>
        <Hero />
        <AdilGPT />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <footer className="section text-center text-slate-600">
        <p>© {new Date().getFullYear()} Adil Waheed. Built with React + Vite + Tailwind.</p>
      </footer>
    </div>
  )
}

export default App
