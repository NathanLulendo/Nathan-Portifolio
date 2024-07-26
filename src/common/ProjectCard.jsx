import PropTypes from "prop-types";

function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link} target="_blank">
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

ProjectCard.propTypes = {
  link: PropTypes.string,
  h3: PropTypes.string,
  p: PropTypes.string,
};

export default ProjectCard;
