import React from "react";
import profile from "../assets/images/my profile3.jpeg";

const About = () => {
  return (
    <section id="about" className="section about-section">
      <h2 style={{textAlign:'center', marginBottom:'40px'}}>About Me</h2>
      <div className="about-grid">
        <img src={profile} alt="Krishna GS" className="about-avatar" />
        <div className="about-content">
          <h1>Krishna GS</h1>
          <h3>MERN Stack Developer | IT Student</h3>
          <p>
            Hi — I'm Krishna, an IT student and full-stack developer from
            Trivandrum, India. I'm passionate about building robust, scalable web applications
            using the MERN stack (MongoDB, Express, React, Node.js).
          </p>

          <p>
            I enjoy creating clean, maintainable code, solving complex problems, and continuously
            learning new technologies. My focus is on delivering production-ready applications with
            excellent user experience and solid architecture.

            I am continuously improving my skills in:
            <ul>
              <li>Frontend Development (React, Redux)</li>
              <li>Backend Development (Node.js, Express)</li>
              <li>Database Management (MongoDB, Mongoose)</li>
            </ul>
            <ul style={{textAlign : "center", fontSize : "18px", color : "#2d3748", marginBottom:'20px'}}>Education</ul>


          </p>
          <div style={{padding:'20px', background:'#f7fafc', borderRadius:'10px', border:'2px solid #e2e8f0'}}>
          <strong style={{color:'#2d3748', fontSize:'16px'}}>  NSTI(W)TRIVANDRUM<br />
             INFORMATION TECHNOLOGY <br />
            Year : 2023-2025 </strong>
          <p style={{margin:'8px 0 0 0'}}></p>
          </div>

          <div style={{padding:'20px', background:'#f7fafc', borderRadius:'10px', border:'2px solid #e2e8f0'}}>
          <strong style={{color:'#2d3748', fontSize:'16px'}}> GVHSS Pirappancode<br />
           Computer Science <br />
            Year : 2021-2023 </strong>
          <p style={{margin:'8px 0 0 0'}}></p>
          </div>


          <ul className="about-contact">
            <li><strong>Email:</strong> krishna.gs@gmail.com</li>
            <li><strong>Phone:</strong> +91 9544739149</li>
            <li><strong>Location:</strong> Trivandrum, India</li>
          </ul>
        </div>
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

export default About;
