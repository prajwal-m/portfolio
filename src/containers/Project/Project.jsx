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
      </div>
    </section>
  );
};

export default Project;
