import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <h2>CONTACT ME ☎️</h2>

      <p style={{fontSize:'16px', color:'#718096', marginBottom:'30px'}}>
        I'd love to hear from you. Feel free to reach out!
      </p>

      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))', gap:'20px', maxWidth:'800px', margin:'0 auto'}}>
        <div style={{padding:'20px', background:'#f7fafc', borderRadius:'10px', border:'2px solid #e2e8f0'}}>
          <strong style={{color:'#2d3748', fontSize:'16px'}}>Email</strong>
          <p style={{margin:'8px 0 0 0'}}>
            <a href="mailto:sreekrishnasree42@gmail.com">sreekrishnasree42@gmail.com</a>
          </p>
        </div>

        <div style={{padding:'20px', background:'#f7fafc', borderRadius:'10px', border:'2px solid #e2e8f0'}}>
          <strong style={{color:'#2d3748', fontSize:'16px'}}>Phone 📞</strong>
          <p style={{margin:'8px 0 0 0'}}>
            <a href="tel:+919544739149">+91 95447 39149</a>
          </p>
        </div>

        <div style={{padding:'20px', background:'#f7fafc', borderRadius:'10px', border:'2px solid #e2e8f0'}}>
          <strong style={{color:'#2d3748', fontSize:'16px'}}>LinkedIn</strong>
          <p style={{margin:'8px 0 0 0'}}>
            <a href="https://www.linkedin.com/in/krishna-gs-32689b2bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">linkedin.com/in/krishna-gs</a>
          </p>
        </div>

        <div style={{padding:'20px', background:'#f7fafc', borderRadius:'10px', border:'2px solid #e2e8f0'}}>
          <strong style={{color:'#2d3748', fontSize:'16px'}}>GitHub</strong>
          <p style={{margin:'8px 0 0 0'}}>
            <a href="https://github.com/sreekrishnasree42-bli" target="_blank" rel="noreferrer">github.com/krishna-gs</a>
          </p>
        </div>
      </div>
      {/* <button className="nav-btn" onClick={() => window.history.back()}>
  ← Back
</button> */}
    </section>
  );
};

export default Contact;
