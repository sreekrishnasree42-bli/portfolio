import React from "react";

const projects = [
  {
    title: "Library Management System",
    description:
      "Full-stack MERN app to manage books, users and borrowing records with authentication and role-based access.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    demo: "#",
    github: "#"
  },
  {
    title: "Product Management App",
    description: "React frontend with REST API for product CRUD, search and pagination.",
    tech: ["React", "Axios", "Node.js"],
    demo: "#",
    github: "#"
  },
  {
    title: "Smart Expense Tracker",
    description: "Expense tracker with automatic category detection and interactive charts for reports.",
    tech: ["React", "Chart.js", "LocalStorage"],
    demo: "#",
    github: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <h2>Selected Projects</h2>

      <div className="card-container">
        {projects.map((p, i) => (
          <article key={i} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            {p.tech && (
              <div className="project-tech">
                {p.tech.map((t, idx) => (
                  <span key={idx} className="tech-tag">{t}</span>
                ))}
              </div>
            )}

            <div style={{marginTop:16}}>
              {/* <a href={p.demo} className="btn" style={{marginRight:8}}>Live Demo</a> */}
              {/* <a href={p.github} className="btn" style={{background:'#fff', color:'#2d3748', border:'2px solid #2d3748'}}>Source</a> */}
            </div>
          </article>
        ))}
      </div>
      {/* <button className="nav-btn" onClick={() => navigate(-1)}>
  ← Back
</button>

<button className="nav-btn" onClick={() => navigate(1)}>
  Forward →
</button> */}

    </section>
  );
};

export default Projects;
