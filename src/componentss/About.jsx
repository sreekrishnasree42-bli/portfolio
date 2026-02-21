import React from 'react'
import profile from '../assets/images/my profile3.jpeg'

const highlights = [
  { label: 'Projects Built', value: '8+' },
  { label: 'Core Stack', value: 'MERN' },
  { label: 'Training Focus', value: 'Practical' }
]

const About = () => {
  return (
    <section id="about" className="section-wrap">
      <div className="section-head">
        <p>About Me</p>
        <h2>Developer at Your Reach</h2>
      </div>

      <div className="about-layout">
        <img src={profile} alt="Krishna GS" className="about-image" />

        <article className="about-copy">
          <h3>I'm Krishna GS</h3>
          <h4>MERN Stack Developer | IT Graduate</h4>
          <p>
            I am from Trivandrum, India, and I focus on full-stack JavaScript applications using
            MongoDB, Express, React, and Node.js. I like writing maintainable code and shipping
            production-ready features.
          </p>
          <p>
            My current direction is to keep improving architecture, API design, and frontend
            performance while contributing to real client and product work.
          </p>

          <ul className="about-contact">
            <li>Email: sreekrishnasree42@gmail.com</li>
            <li>Phone: +91 95447 39149</li>
            <li>Location: Trivandrum, India</li>
          </ul>
        </article>
      </div>

      {/* <div className="stats-grid">
        {highlights.map((item) => (
          <div key={item.label} className="stat-card">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div> */}
    </section>
  )
}

export default About