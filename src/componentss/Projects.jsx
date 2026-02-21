import React from 'react'

const initiatives = [
  {
    title: 'Library Management System',
    text: 'A full-stack platform for cataloging books, role-based access, issue tracking, and student workflows.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB']
  },
  {
    title: 'Product Management App',
    text: 'A CRUD-focused web app with searching, filtering, and optimized API interactions for product teams.',
    stack: ['React', 'REST API', 'Node.js']
  },
  {
    title: 'Smart Expense Tracker',
    text: 'Personal finance tracker with categorized expenses, charts, and clear monthly spending visibility.',
    stack: ['React', 'Chart.js', 'Local Storage']
  }
]

const Projects = () => {
  return (
    <section id="projects" className="section-wrap">
      <div className="section-head">
        <p>Top Initiatives</p>
        <h2>Projects That Define My Work</h2>
      </div>

      <div className="initiative-grid">
        {initiatives.map((project) => (
          <article className="initiative-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.text}</p>
            <div className="chip-list">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects