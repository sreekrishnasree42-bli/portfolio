import React from 'react'

const services = [
  {
    title: 'Frontend Development',
    description: 'Responsive interfaces with React, reusable components, and modern CSS architecture.'
  },
  {
    title: 'Backend Development',
    description: 'REST APIs with Node.js and Express, authentication flows, and clean route structure.'
  },
  {
    title: 'Database Management',
    description: 'MongoDB schema design, CRUD workflows, query optimization, and secure data handling.'
  },
  {
    title: 'UI/Design Tools',
    description: 'Figma-driven layouts plus Adobe Photoshop and Illustrator for polished visuals.'
  },
  {
    title: 'Version Control',
    description: 'Git and GitHub workflows for collaboration, code history, and release management.'
  },
  {
    title: 'Learning Track',
    description: 'Continuous upskilling in real-world web architecture and scalable app patterns.'
  }
]

const Skills = () => {
  return (
    <section id="skills" className="section-wrap">
      <div className="section-head">
        <p>My Skillsets</p>
        <h2>Services and Technical Strength</h2>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills