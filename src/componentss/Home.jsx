import React from "react";
import profile from "../assets/images/my profile3.jpeg";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contacts";
import { Contacts } from "@mui/icons-material";
import Skills from "./Skills";


const Home = () => {
  return (
    <section id="home" className="home">
      <div className="intro-content">
        <h1>Krishna GS</h1>
        <h2 className="subtitle">MERN Stack Developer</h2>
        <p className="lead">
          I am a recent Computer Science graduate with a solid understanding of programming, 
          software development. Skilled in (Python, Java, Css, php),
           I enjoy solving problems and building efficient solutions.
            Eager to contribute to real-world projects, 
            I am passionate about learning new technologies and growing as a software professional
        </p>

        <div style={{marginTop: 32}}>
          <div className="btn-group">
            {/* <a href="/about" className="btn">Learn More</a> */}

            <a href="https://www.linkedin.com/in/krishna-gs-32689b2bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="btn">Linkedin</a>

            {/* <a href="/projects" className="btn" >View Projects</a>
            <a href="/contact" className="btn">Contact Me</a> */}
            <a href="/skills" className="btn">My SkillSets</a>
          </div>
        

{/* <button className="nav-btn"  onClick={() => navigate(1)}>
  Forward →
</button> */}

          
        </div>
      </div>

      <div>
        <img src={profile} alt="Krishna GS" className="profile-img" />
      </div>
    </section>
  );
};

export default Home;
