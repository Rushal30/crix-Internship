import React from 'react';

export default function Contact() {
  return (
    <section className="section contact-section">
      <h2>Contact</h2>
      <p>Feel free to reach out if you would like to collaborate on a product or front-end project.</p>
      <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
        <label>
          Name
          <input type="text" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="your@email.com" />
        </label>
        <label>
          Message
          <textarea rows="5" placeholder="Tell me about your project" />
        </label>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
