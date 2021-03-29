import React, { useState } from 'react';
import './App.css';

function App() {
  const [results, setQuestion] = useState([0]);

  const fetchData = () => {
    fetch('https://opentdb.com/api.php?amount=1' + results)
    .then(response => {
      if (response.status !== 200) {
        throw new Error('Response status not ok');
      }

      return response.json();
    })
    .then(resData => {
      setQuestion(resData.results[0]);
    })
  };

  return (
    <div className="App">
      <button onClick={fetchData}>New question</button>
      <p>{results.question}</p>
    </div>
  );
}

export default App;