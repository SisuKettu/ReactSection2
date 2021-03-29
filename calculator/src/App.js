import React, { useState } from 'react';
import './App.css';

function App() {
  // State variables
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(number1 + number2);

  function addNumbers() {
    setTotal(number1 + number2);
  }
  
  function subtractNumbers() {
    setTotal(number1 - number2);
  }

return (
  <div className="App">
    Results = {total}<br />
    <input
          type="number"
          value={number1}
          onChange={e => setNumber1(+e.target.value)}
          placeholder="0"
        />
     <input
          type="number"
          value={number2}
          onChange={e => setNumber2(+e.target.value)}
          placeholder="0"
        />
    <button onClick={addNumbers}>+</button>
    <button onClick={subtractNumbers}>-</button>
  </div>
);
}

export default App;