import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
        <div className="project-container">
          <div className="project">
            <img src="https://via.placeholder.com/300" alt="Project 1" />
            <h3>Project 1</h3>
          </div>
          <div className="project">
            <img src="https://via.placeholder.com/300" alt="Project 2" />
            <h3>Project 2</h3>
          </div>
          <div className="project">
            <img src="https://via.placeholder.com/300" alt="Project 3" />
            <h3>Project 3</h3>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;