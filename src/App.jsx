import React from 'react'
import Navbar from './componentss/Navbar'
import Home from './componentss/Home'
import About from './componentss/About'
import Skills from './componentss/Skills'
import Projects from './componentss/Projects'
import Contact from './componentss/Contacts'
import Footer from './componentss/Footer'
import './App.css'
import './index.css'

const App = () => {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App