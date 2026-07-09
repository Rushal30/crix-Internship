import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const projects = [
  { id: 1, title: 'Responsive Portfolio', description: 'A personal portfolio site built with React, Router, and responsive CSS.' },
  { id: 2, title: 'UI Component Library', description: 'Reusable design system components for consistent app interfaces.' },
  { id: 3, title: 'Interactive Dashboard', description: 'Data-rich dashboard using charts, cards, and mobile-first layouts.' }
];

export default function Projects() {
  const { selectedProject, setSelectedProject } = usePortfolio();

  return (
    <section className="section projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <button
            key={project.id}
            className={`project-button ${selectedProject === project.id ? 'selected' : ''}`}
            type="button"
            onClick={() => setSelectedProject(project.id)}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </button>
        ))}
      </div>
      {selectedProject && (
        <div className="project-details">
          <h3>Selected Project</h3>
          <p>{projects.find((project) => project.id === selectedProject).description}</p>
        </div>
      )}
    </section>
  );
}
