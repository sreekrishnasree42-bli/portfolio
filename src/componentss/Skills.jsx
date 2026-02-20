import React from "react";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Git & GitHub",
    "PHP",
    "Python",
    "ADOBE PHOTOSHOP",
    "ADOBE ILLUSTRATOR",
    "Figma",
    "HARDWARE",
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills & Technologies</h2>

      <div className="card-container">
        {skills.map((skill, index) => (
          <div key={index} className="card">{skill}</div>
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

export default Skills;
