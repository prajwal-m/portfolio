import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./experience.css";

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <SectionTitle
          title="Experience"
          subtitle="Here you will find more information about my work experience and projects."
        />
        <div class="timeline">
          <div class="timeline-item">
            <div class="tl-icon">
              <i class="fa-solid fa-briefcase"></i>
            </div>
            <p class="tl-duration">Aug 2020 - present</p>
            <h5>
              Software Engineer <span>- Y Media Labs</span>
            </h5>
            <p>
              Developed a product design page for Polestar 2 (an electric car
              brand) for both desktop and mobile. Complex animations and
              innovative design resulted in +88% time on site, +111% Session
              duration, -59% bounce rate.
            </p>
          </div>
          <div class="timeline-item">
            <div class="tl-icon">
              <i class="fa-solid fa-briefcase"></i>
            </div>
            <p class="tl-duration">Jul 2019 - Jul 2020</p>
            <h5>
              Associate Software Engineer <span>- Y Media Labs</span>
            </h5>
            <p>
              Worked on developing payment widgets for client called BillGo.
              Experienced in setting up design systems using Storybook.
              Experienced in writing unit test cases using Jest and Test Driven
              Development.
            </p>
          </div>
          <div class="timeline-item">
            <div class="tl-icon">
              <i class="fa-solid fa-briefcase"></i>
            </div>
            <p class="tl-duration">Jan 2019 - Feb 2019</p>
            <h5>
              Web Developer Intern <span>- Amiti Software technologies</span>
            </h5>
            <p>
              Created a playlist-like feature for the product called Experty,
              where users can share useful links and add them to a particular
              objective bundle(playlist). Developed pages to show the list of
              objective bundles and content inside an objective bundle.
            </p>
          </div>
          <div class="timeline-item">
            <div class="tl-icon">
              <i class="fa-solid fa-briefcase"></i>
            </div>
            <p class="tl-duration">Aug 2015 - May 2019</p>
            <h5>
              Bachelor's degree{" "}
              <span>- PES Institute of Technology, Bangalore</span>
            </h5>
            <p>
              Completed degree in Information Science and Engineering with 7.98
              cgpa. Learnt various subjects like Database Management System,
              Computer Networks, Operating System, Machine Learning etc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
