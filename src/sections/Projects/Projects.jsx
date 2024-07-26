import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div>
        <ProjectCard
          link="https://github.com/NathanLulendo/backendAudiophile.git"
          h3="Audiophile Backend"
          p="API for an E-commerce web app made with Express.js"
        />
        <ProjectCard
          link="https://github.com/walid1508/frontendAudiophile.git"
          h3="Audiophile Frontend"
          p="Here is the frontend of our E-commerce web app made with react"
        />
      </div>
    </section>
  );
}

export default Projects;
