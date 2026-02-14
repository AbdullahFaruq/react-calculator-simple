import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

const Calculator = function () {
  const [inp1, setInp1] = useState("");
  const [inp2, setInp2] = useState("");
  const [sign, setSign] = useState("+");
  let result;
  if (sign === "+") {
    result = inp1 + inp2;
  }
  if (sign === "-") {
    result = inp1 - inp2;
  }
  if (sign === "x") {
    result = inp1 * inp2;
  }
  if (sign === "/") {
    if (inp2 !== 0) {
      result = (inp1 / inp2).toFixed(2);
    } else {
      result = "Error"; // Prevent division by zero
    }
  }

  function handleClear() {
    setInp1("");
    setInp2("");
    setSign("+");
  }

  return (
    <div className="calc">
      <input
        type="text"
        value={inp1}
        onChange={(e) => setInp1(Number(e.target.value))}
      />
      <input
        type="text"
        value={inp2}
        onChange={(e) => setInp2(Number(e.target.value))}
      />
      <select value={sign} onChange={(e) => setSign(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="x">x</option>
        <option value="/">/</option>
      </select>
      <h2>{!result ? "result" : result}</h2>
      <div></div>
      <button onClick={handleClear}>clear</button>
    </div>
  );
};
