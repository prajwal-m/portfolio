import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="portfolio-header">
      <div className="header-content">
        <div className="header-logo-container">
          <div className="header-image">
            <img
              src="https://user-images.githubusercontent.com/46987044/199079943-83811fcc-81ee-4f33-bb57-74c549181d71.png"
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
          <a href="#projects" className="header-link">
            Projects
          </a>
          <a href="#contact" className="header-link">
            Contact
          </a>
        </nav>
      </div>

      <nav></nav>
    </header>
  );
};

export default Navbar;
