import React from 'react';

const skillGroups = [
  { title: 'Frontend', items: ['React', 'JavaScript', 'CSS / HTML', 'Responsive design'] },
  { title: 'Tooling', items: ['Git', 'Webpack', 'ESLint', 'Chrome DevTools'] },
  { title: 'Soft Skills', items: ['Problem solving', 'Communication', 'Product focus', 'Team collaboration'] }
];

export default function Skills() {
  return (
    <section className="section skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="skill-card">
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
