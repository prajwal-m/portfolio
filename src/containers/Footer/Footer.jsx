import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-content">
        <div className="footer-info-wrapper">
          <p className="footer-title">PRAJWAL</p>
          <p className="footer-subtitle">Frontend developer.</p>
        </div>

        <div className="footer-social-wrapper">
          <p className="footer-title">Social</p>
          <ul className="footer-social-list">
            <li className="footer-social-list-item">
              <a href="#test" className="footer-social-list-item-link">
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li className="footer-social-list-item">
              <a href="#test" className="footer-social-list-item-link">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li className="footer-social-list-item">
              <a href="#test" className="footer-social-list-item-link">
                <i class="fa-solid fa-envelope"></i>
              </a>
            </li>
            <li className="footer-social-list-item">
              <a href="#test" className="footer-social-list-item-link">
                <i class="fa-solid fa-phone"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
