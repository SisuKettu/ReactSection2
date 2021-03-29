import React, { useState } from 'react';
import './App.css';

function App() {
  const [person, setPerson] = useState({name: '', age: ''});

  const inputChanged = (event) => {
    setPerson({...person, [event.target.name]: event.target.value});
  }

  const showAlert = () => {
    {person.age >= 18
      ? alert(`Hello ${person.name} `)
      : alert(`You are too young`)
    }
  }

  const formSubmitted = (event) => {
    event.preventDefault();
     // Do somethin with you data
    }
  
  return (
    <div className="App">
      <form onSubmit={formSubmitted}>
      <input placeholder="Name" name="name" value={person.name} onChange={inputChanged} />
      <input placeholder="Age" name="age" value={person.age} onChange={inputChanged} />
      <button onClick={showAlert}>Check age</button>
    </form>
  </div>
  );
}

export default App;