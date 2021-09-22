import React from "react";
import "./Techstack.css";
import { techStack } from "../../data";

function Techstack() {
  return (
    <section className="details" id="scroll-to-techstack">
      <h1 className="page-title">Technology Stack</h1>
      <div className="line-break-details"></div>
      <div className="tech-stack-container">
        {techStack.map((stack) => {
          return (
            <div className={stack.cName} key={stack.id}>
              <h2>
                {stack.logo} {stack.stackName}
              </h2>
              {stack.technologies.map((technology) => {
                return (
                  <ul key={technology.id}>
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
