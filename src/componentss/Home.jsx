import React from 'react'
import profile from '../assets/images/my profile3.jpeg'

const Home = () => {
  return (
    <section id="home" className="hero section-wrap">
      <div className="hero-content">
        <p className="hero-kicker">Hi There,</p>
        <h1>I'm Krishna GS</h1>
        <h2>MERN Stack Developer</h2>
        <p>
          I build practical web applications with strong frontend structure, scalable backend APIs,
          and clean user-focused experiences. I enjoy turning ideas into real projects that solve
          everyday problems.
        </p>

        <div className="hero-actions">
          <a
            className="btn btn-primary"
            href="https://www.linkedin.com/in/krishna-gs-32689b2bb"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a className="btn btn-secondary" href="#skills">
            My Skillsets
          </a>
        </div>

        <div className="social-inline">
          <a href="https://www.linkedin.com/in/krishna-gs-32689b2bb" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/sreekrishnasree42-bli" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <div className="hero-image-wrap">
        <img src={profile} alt="Krishna GS portrait" className="hero-image" />
      </div>
    </section>
  )
}

export default Home