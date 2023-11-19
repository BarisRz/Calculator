import PropTypes from "prop-types";

function Key({
  nameClass,
  bg,
  bgHover,
  name,
  padding,
  textCSS,
  border,
  clickFunction,
}) {
  return (
    <button type="button" className={nameClass} onClick={clickFunction}>
      <div
        className={`${bg} ${bgHover} w-full h-full flex ${padding} items-center justify-center rounded-xl ${textCSS} border-b-4 ${border} transition button-input`}
      >
        {name}
      </div>
    </button>
  );
}

Key.propTypes = {
  nameClass: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  bgHover: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
  padding: PropTypes.string,
  textCSS: PropTypes.string,
  clickFunction: PropTypes.func,
};

Key.defaultProps = {
  padding: "pt-2",
  textCSS: "",
};

export default Key;
