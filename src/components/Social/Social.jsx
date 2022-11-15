import React from "react";
import "./social.css";

const Home = () => {
  return (
    <div className="social-list-wrapper">
      <ul className="social-list">
        <li className="social-list-item">
          <a href="#test" className="social-list-item-link">
            <i class="fa-brands fa-github"></i>
          </a>
        </li>
        <li className="social-list-item">
          <a href="#test" className="social-list-item-link">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list-item">
          <a href="#test" className="social-list-item-link">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </li>
        <li className="social-list-item">
          <a href="#test" className="social-list-item-link">
            <i class="fa-solid fa-phone"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
