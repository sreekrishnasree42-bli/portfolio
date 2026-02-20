import React from 'react'
import Navbar from './componentss/Navbar'
import { Routes, Route } from 'react-router-dom'
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
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App