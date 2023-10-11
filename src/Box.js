const Box = function ({ color, textColor }) {
  return (
    <div
      className="box"
      style={{
        backgroundColor: color,
        color: textColor ? "white" : "black",
      }}
    >
      <p>{color ? color : "Empty color"}</p>
    </div>
  );
};

export default Box;
