import PropTypes from "prop-types";

const Button = ({ text, background, className, onClick }) => {
  return (
    <button
      type="submit"
      style={{ background: background }}
      onClick={(e) => onClick(e)}
      className={className}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button",
  background: "#006494",
  className: "Button",
};

Button.propTypes = {
  text: PropTypes.string,
  background: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
