import React, { useEffect } from "react";
import "./skills.css";
import SkillList from "../../components/SkillList/SkillList";
// const TagCloud = require("TagCloud");
import TagCloud from "TagCloud";

const Skils = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const skillList = [
    "JavaScript",
    "CSS",
    "HTML",
    "Angualr",
    "VueJS",
    "React",
    "Python",
    "Go",
    "Chrome",
    "Edge",
    "Firefox",
    "Safari",
  ];

  useEffect(() => {
    const tagCloudEl = document.querySelector(".tagcloud");
    if (!tagCloudEl) {
      TagCloud(".content", skillList, { radius: 200 });
    }
  }, [skillList]);

  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="skills-header-container">
          <h2 className="skills-header">Skills</h2>
          <p className="skills-subheading">
            Here you will find more information about my skills and expertise.
          </p>
        </div>
      </div>
      <div className="skills-content-container">
        <SkillList skillsInfo={skillList} />
        <div class="content"></div>
      </div>
    </section>
  );
};

export default Skils;