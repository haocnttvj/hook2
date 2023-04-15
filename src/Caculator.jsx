import React, { useState } from "react";

function Calculator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);
  const [multiply, setMultiply] = useState(0);

  const handleSum = () => {
    const result = Number(number1) + Number(number2);
    setSum(result);
  };

  const handleMultiply = () => {
    const result = Number(number1) * Number(number2);
    setMultiply(result);
  };

  return (
    <div>
      <label>
        Number 1:
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
      </label>
      <label>
        Number 2:
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
      </label>
      <div>
        <button onClick={handleSum}>Calculate Sum</button>
        <button onClick={handleMultiply}>Calculate Multiply</button>
      </div>
      <div>
        <p>Sum: {sum}</p>
        <p>Multiply: {multiply}</p>
      </div>
    </div>
  );
}

export default Calculator;
