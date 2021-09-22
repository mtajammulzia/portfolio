import React from "react";
import Projcard from "./Projcard";
import { projectsData } from "../../data";
import "./Projects.css";

function Projects() {
  return (
    <section className="project-section">
      <h1 className="page-title">Projects</h1>
      <div className="line-break-project"></div>
      <section className="projects">
        {projectsData.map((project) => {
          return (
            <Projcard
              key={project.id}
              title={project.name}
              description={project.description}
              codeUrl={project.sourceCodeUrl}
            />
          );
        })}
      </section>
    </section>
  );
}

export default Projects;
