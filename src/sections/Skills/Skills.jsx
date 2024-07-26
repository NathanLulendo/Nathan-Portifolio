import SkillList from "../../common/SkillsList";
import styles from "./SkillsStyles.module.css";
import checkmarklight from "../../assets/checkmark-light.svg";
import checkmarkdark from "../../assets/checkmark-dark.svg";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === "light" ? checkmarklight : checkmarkdark;
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="C/C++" />
        <SkillList src={checkMarkIcon} skill="C#/.Net" />
        <SkillList src={checkMarkIcon} skill="Laravel" />
        <SkillList src={checkMarkIcon} skill="SQL" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="Math" />
        <SkillList src={checkMarkIcon} skill="Bash" />
        <SkillList src={checkMarkIcon} skill="Linux administration" />
        <SkillList src={checkMarkIcon} skill="Statistic" />
      </div>
    </section>
  );
}

export default Skills;
