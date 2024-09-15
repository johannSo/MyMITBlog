import React from 'react';
import logo from './assets/logo.png';
import './App.css';
import enigma from './assets/enigma.png';
import soon from './assets/soon.jpg';

function Home() {
  return (
    <div className="app-container">
      
      <header className="header">
        <img src={logo} alt="Logo des Blogs" className="logo" />
      </header>

      <div className="content">
        <img src={enigma} alt="Logo des Blogs" className="cover" />
        </div>

      <div className="mine">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={soon} alt="soon" className="rounded-image" />
        </a>
      </div>

    </div> //app-container
  );
}

export default Home;