import PropTypes from "prop-types";

function SkillsList({ skill, src }) {
  return (
    <span>
      <img src={src} alt="Checkmark icon" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillsList;

// Add prop validation
SkillsList.propTypes = {
  skill: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
