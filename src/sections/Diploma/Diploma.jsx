import ProjectCard from "../../common/ProjectCard";
import diploma from "../../assets/diploma.jpeg";
import styles from "./Diploma.module.css";
function Diploma() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Diploma</h1>
      <div>
        <img src={diploma} alt="diploma" />
        <ProjectCard
          link="https://www.collegelacite.ca/programmes/61001"
          h3="Technologie du génie Informatque"
        />
      </div>
    </section>
  );
}

export default Diploma;
