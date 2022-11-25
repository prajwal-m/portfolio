import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./project.css";

const Project = () => {
  return (
    <section className="project-section" id="projects">
      <div className="project-container">
        <SectionTitle
          title="Project"
          subtitle="Here you will find about about some of the Personal projects i worked on."
        />
        <div className="project-wrapper">
          <div className="project-info-container">
            <img
              className="project-image"
              src="https://user-images.githubusercontent.com/46987044/203714942-63ecce7e-3482-4510-870b-b270acff09d2.jpg"
              alt="recipe app"
            />
            <div>
              <p className="project-title">Portfolio website</p>
              <p className="project-info">
                Portfolio website built using React.js
              </p>
              <div className="project-repo-link">
                <a
                  href="https://github.com/prajwal-m/portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="project-info-container">
            <img
              className="project-image"
              src="https://user-images.githubusercontent.com/46987044/203715150-f6db0b61-6d31-44dc-a4e3-166a24368a38.png"
              alt="recipe app"
            />
            <div>
              <p className="project-title">Guess the number game</p>
              <p className="project-info">
                A number Guessing game built using React Native.
              </p>
              <div className="project-repo-link">
                <a href="#test" target="_blank" rel="noreferrer">
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-info-container">
            <img
              className="project-image"
              src="https://user-images.githubusercontent.com/46987044/203715156-4db1c778-f984-45c4-b275-f3a83bac0c8d.png"
              alt="recipe app"
            />
            <div>
              <p className="project-title">Recipe App</p>
              <p className="project-info">
                A recipe app for meals of different cusine built using React
                Native.
              </p>
              <div className="project-repo-link">
                <a href="#test" target="_blank" rel="noreferrer">
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
