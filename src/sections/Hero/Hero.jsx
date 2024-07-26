import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/file.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";
function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  return (
    <section id="hero" className={styles.container}>
      <div className="Styles.coloModeContainer">
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile Picture of Nathan Lulendo"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Dark/White mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Nathan
          <br />
          Lulendo
        </h1>
        <h2>Software Developer</h2>
        <span>
          <a href="https://github.com/NathanLulendo" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>

          <a href="https://www.linkedin.com/in/nathanlulendo/" target="_blank">
            <img src={linkedinIcon} alt="linkedin icon" />
          </a>
        </span>
        <p>
          My name is Nathan Ganga Lulendo, I am a Computer Engineer and a proud
          graduate of La Cité College. My primary expertise lies in backend web
          development and embedded software development. Additionally, I possess
          strong skills in data management and analysis. My goal is to apply my
          technical skills, as well as my zeal for solving complex problems to
          develop innovative solutions.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
