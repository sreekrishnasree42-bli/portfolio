import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skillsets</a>
        <a href="#projects">Initiatives</a>
        <a href="#contact">Contact</a>
      </div>
      <small>Copyright {new Date().getFullYear()} | Designed by Krishna GS</small>
    </footer>
  )
}

export default Footer