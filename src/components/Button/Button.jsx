import "./Button.scss";

// eslint-disable-next-line react/prop-types
function Button({ text, backgroundColor, boxshadow }) {
  return (
    <>
      <button
        className="button"
        style={{
          backgroundColor: backgroundColor,
          boxShadow: boxshadow,
        }}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
