import React from "react";
import "./Techstack.css";

function Techstack() {
  return (
    <section className="details" id="scroll-to-techstack">
      <h1 className="page-title">Technology Stack</h1>
      <div className="line-break-details"></div>
      <h3 className="sub-title">Work</h3>
      <div className="experience">
        <div className="left-side">
          <h3>TimeXperts Pvt Ltd</h3>
          <h6>April 2021 - Present</h6>
        </div>
        <div className="right-side">
          <h3>Software Engineer</h3>
          <ul>
            <li>
              <span>Working on interfaces with Java and JavaScript</span>
            </li>
            <li>
              <span>Upgrade existing interfaces with newer APIs</span>
            </li>
            <li>
              <span>
                Actively communicate and attend meetings with PMs and customers
              </span>
            </li>
          </ul>
        </div>
      </div>
      <h3 className="sub-title">Education</h3>
      <div className="experience">
        <div className="left-side">
          <h3>Usman Institute of Technology</h3>
          <h6>Aug 2012 - July 2016</h6>
        </div>
        <div className="right-side">
          <h3>Bachelor of Electrical Engineering</h3>
          <ul>
            <li>
              <span>Ranked 3rd in the whole batch with 3.90 CGPA</span>
            </li>
            <li>
              <span>
                4 times scholarship holder for 100% semester fee waiver
              </span>
            </li>
            <li>
              <span>Actively participated in events</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Techstack;
