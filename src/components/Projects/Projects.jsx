import React from "react";
import { ArrowRight } from "lucide-react";
import { Project } from "../Project/Project";
import { projects } from "../../utils/Projects";
import styles from "./styles.module.css"

export function Projects() {
  return (
    <div id="projetos" className={styles.projectsContainer}>
      <h1>Projetos</h1>

      <div  className = {styles.projectContainer} >
        {projects.map((project) => (
          <Project project={project} image={project.image} />
        ))}
      </div>
    </div>
  );
}
