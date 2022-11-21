import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="portfolio-header">
      <div className="header-content">
        <div className="header-logo-container">
          <div className="header-image">
            <img
              src="https://user-images.githubusercontent.com/46987044/203060204-4906a46a-3ac6-4ce5-991b-4d0043678eb4.png"
              alt="logo icon"
            />
          </div>
          <p className="header-title">Prajwal</p>
        </div>
        <nav className="header-nav">
          <a href="#home" className="header-link">
            Home
          </a>
          <a href="#about" className="header-link">
            About
          </a>
          <a href="#skills" className="header-link">
            Skills
          </a>
          <a href="#experience" className="header-link">
            Experience
          </a>
          <a href="#projects" className="header-link">
            Projects
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
