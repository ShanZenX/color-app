import { useState } from "react";
import "./App.css";
import Box from "./Box";
import Input from "./Input";

function App() {
  const [color, setcolor] = useState("");
  const [textColor, settextColor] = useState("");
  return (
    <section className="main-box">
      <div className="sub-box">
        <Box color={color} textColor={textColor} />
        <Input
          color={color}
          setcolor={setcolor}
          textColor={textColor}
          settextColor={settextColor}
        />
      </div>
    </section>
  );
}

export default App;
