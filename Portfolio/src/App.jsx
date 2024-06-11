import React from 'react';
import './App.css';
import Background from "./Background/Background.jsx"
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Background/>
      <Navbar/>
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti possimus aliquam odio! Iusto obcaecati, tempore distinctio, suscipit error repellat autem natus, beatae quisquam iste ex saepe cumque nihil eius! Voluptatum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, rerum. Laudantium, quam cumque eveniet ex nam dolores! Voluptate quibusdam commodi aperiam, error et voluptatem ad sunt deserunt obcaecati explicabo quia.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam sunt ratione, error, nulla nam sequi necessitatibus similique perferendis officia suscipit, esse ab laudantium adipisci sapiente quam excepturi asperiores labore ullam!
          </p>
      </header>
      <Footer/>
    </div>
  );
}

export default App;