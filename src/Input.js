const Input = function ({ color, setcolor, textColor, settextColor }) {
  return (
    <form className="input-box" onSubmit={(e) => e.preventDefault()}>
      <input
        autoFocus
        type="text"
        placeholder="Type color"
        value={color}
        onChange={(e) => {
          setcolor(e.target.value);
        }}
      ></input>
      <br></br>

      <button
        type="button"
        value="tooggle"
        onClick={(e) => settextColor(!textColor)}
      >
        Toggle color
      </button>
    </form>
  );
};

export default Input;
