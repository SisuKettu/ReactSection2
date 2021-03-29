import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState([]);
  const [searchquery, setSearchquery] = useState('')

  const fetchData = () => {
    fetch('https://api.github.com/search/repositories?q=' + searchquery)
    .then(response => response.json())
    .then(resData => setSearch(resData.items))
  };

  const inputChanged = (event) => {
    setSearchquery(event.target.value);
  }


  return (
    <div className="App">
      <h1>Repositories</h1>
      <input placeholder="search query" value={searchquery} onChange={inputChanged} />
      <button onClick={fetchData}>Search</button>
      <table>        
        <tbody>
          <tr>
             <td><h3>Name</h3></td>  
             <td><h3>URL</h3></td> 
           </tr>
        </tbody>
        <tbody>
        {
          search.map((search, index) => 
           <tr key={index}>
             <td>{search.full_name}</td>
             <td><a href={search.html_url}>{search.html_url}</a></td>
           </tr>
          )
        }
        </tbody>
      </table>
     </div>
  );
}

export default App;