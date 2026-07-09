import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext';

export default function Layout() {
  const { theme, toggleTheme } = usePortfolio();

  return (
    <div className={`page-shell ${theme}`}>
      <header className="topbar">
        <div className="brand">My Portfolio</div>
        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="skills">Skills</NavLink>
          <NavLink to="projects">Projects</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>
      </header>

      <main className="content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>Designed with React Router, responsive layout, and shared context.</p>
      </footer>
    </div>
  );
}
