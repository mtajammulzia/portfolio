import React from "react";
import "./Techstack.css";
import { techStack } from "../../data";

function Techstack() {
  return (
    <section className="techstack-page" id="scroll-to-techstack">
      <h1 className="techstack-page-title">Technology Stack</h1>
      <div className="line-break-details"></div>
      <div className="tech-stack-container">
        {techStack.map((stack) => {
          return (
            <div className={stack.cName} key={stack.id}>
              <span className="tech-heading">
                <h4 className="tech-heading-logo">{stack.logo}</h4>
                <h4 className="tech-heading-text">{stack.stackName}</h4>
              </span>
              {stack.technologies.map((technology) => {
                return (
                  <ul key={technology.id} className="technology-list">
                    <li className={technology.cName}>
                      <div>{technology.logo}</div>
                      {technology.name}
                    </li>
                  </ul>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Techstack;
