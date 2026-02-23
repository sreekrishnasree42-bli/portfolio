import React from 'react'

const contactMethods = [
  {
    label: 'Email',
    value: 'sreekrishnasree42@gmail.com',
    href: 'mailto:sreekrishnasree42@gmail.com'
  },
  {
    label: 'Phone',
    value: '+91 95447 39149',
    href: 'tel:+919544739149'
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/krishna-gs-32689b2bb',
    href: 'https://www.linkedin.com/in/krishna-gs-32689b2bb'
  },
  {
    label: 'GitHub',
    value: 'github.com/sreekrishnasree42-bli',
    href: 'https://github.com/sreekrishnasree42-bli'
  }
]

const Contact = () => {
  return (
    <section id="contact" className="section-wrap contact-wrap">
      <div className="section-head">
        <p>Contact Me</p>
        <h2>Let's Connect</h2>
      </div>

      <div className="contact-layout">
        <article className="contact-panel">
          <h3>Available for work</h3>
          <p className="contact-intro">
            I am open to internships, junior developer roles, and freelance projects. If you have
            an idea or opportunity, send me a message.
          </p>

          <div className="contact-grid">
            {contactMethods.map((item) => (
              <a
                key={item.label}
                className="contact-card"
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            ))}
          </div>
        </article>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <h3>Send a quick message</h3>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Your email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="How can I help you?" required />

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
