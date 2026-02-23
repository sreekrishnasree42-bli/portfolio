import React from 'react'
import profile from '../assets/images/my profile3.jpeg'

const techStack = [
  { name: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'MongoDB', logo: 'https://cdn.simpleicons.org/mongodb/47A248' },
  { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'HTML', logo: 'https://cdn.simpleicons.org/html5/E34F26' },
  { name: 'CSS', logo: 'https://cdn.simpleicons.org/css/1572B6' },
  { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'SQL', logo: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'EJS', logo: 'https://cdn.simpleicons.org/ejs/B4CA65' }
]

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

        {/* <div className="social-inline">
          <a href="https://www.linkedin.com/in/krishna-gs-32689b2bb" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/sreekrishnasree42-bli" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div> */}

        <div className="tech-stack" aria-label="Core technologies">
          {techStack.map((tech) => (
            <div className="tech-pill" key={tech.name}>
              <img src={tech.logo} alt={`${tech.name} logo`} loading="lazy" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-image-wrap">
        <img src={profile} alt="Krishna GS portrait" className="hero-image" />
      </div>
    </section>
  )
}

export default Home
