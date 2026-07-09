import React from 'react';

export default function About() {
  return (
    <section className="section about-section">
      <div className="profile-header">
        <h1>Rushal Patel</h1>
        <p className="job-title">Full-Stack Developer</p>
        <p className="bio">I craft clean, modern web experiences with thoughtful design, reliable performance, and a strong focus on user impact.</p>
        <p className="availability">Available for freelance & full-time opportunities</p>
      </div>

      <div className="contact-info">
        <div className="contact-item">
          <h3>EMAIL</h3>
          <a href="mailto:rushalpatel530@gmail.com">rushalpatel530@gmail.com</a>
        </div>
        <div className="contact-item">
          <h3>PHONE</h3>
          <a href="tel:+919712295993">+91 97122 95993</a>
        </div>
        <div className="contact-item">
          <h3>LINKEDIN</h3>
          <a href="https://www.linkedin.com/in/rushal-patel-3341712b4/" target="_blank" rel="noopener noreferrer">rushal-patel-3341712b4</a>
        </div>
      </div>

      <div className="strengths-section">
        <h2>Core Strengths</h2>
        <div className="strengths-grid">
          <div className="strength-badge">Full-Stack Web Development</div>
          <div className="strength-badge">Problem Solving</div>
          <div className="strength-badge">Software Development</div>
        </div>
      </div>

      <div className="experience-section">
        <h2>Experience</h2>
        <p>2025 — Current — Freelance Frontend Developer</p>
      </div>

      <div className="education-section">
        <h2>Education</h2>
        <p>BE Computer Engineering — GTU University</p>
      </div>

      <div className="connect-section">
        <h2>Connect</h2>
        <div className="connect-links">
          <a href="https://github.com/Rushal30" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/rushal-patel-3341712b4/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:rushalpatel530@gmail.com">Email</a>
        </div>
      </div>
    </section>
  );
}
