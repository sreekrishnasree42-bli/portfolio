import React from 'react'

const Navbar = () => {
  return (
    <header className="navbar">
      <p className="brand" aria-label="Krishna GS">
        {/* <span className="brand-first">Krishna</span> */}
        <span className="brand-last">Krishna GS</span>
      </p>

      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skillsets</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <a
        className="nav-cta"
        href="https://www.linkedin.com/in/krishna-gs-32689b2bb"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
    </header>
  )
}

export default Navbar
