import { ArrowRight } from "lucide-react";
import { Skill } from "../Skill/Skill";
import GitHub from "../../assets/github.svg";

import styles from "./Project.module.css";

export function Project({ project }) {
  return (
    <div className={styles.project}>
      <img src={project.image} alt={project.name} />
      <h2>{project.name}</h2>
      <p>{project.description}</p>

      <div className={styles.skillsContainer}>
        <p style={{ fontSize: "16px" }}>Stack utilizada:</p>
        <div className={styles.skillsList}>
          {project.skills?.map((skill, index) => (
            <Skill key={index} src={skill} />
          ))}
        </div>
      </div>

      <div className={styles.links}>
        <a href={project.linkGitHub} target="_blank">
          <img src={GitHub} alt="" />
          <span>GitHub</span>
        </a>

        <a href={project.linkDeploy} target="_blank">
          <span>Visitar</span>
          <ArrowRight />
        </a>
      </div>
    </div>
  );
}
