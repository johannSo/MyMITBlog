import React from 'react';
import logo from './assets/logo.png';
import './App.css';
import github from './assets/github.svg';
import gitlab from './assets/gitlab.svg';
import enigma from './assets/enigma.png';  // Stellen Sie sicher, dass dieser Import vorhanden ist

function App() {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="Logo des Blogs" className="logo" />
      </header>
      <div className="content">
        <img src={logo} alt="Logo des Blogs" className="logo2" />
        <h1>My MIT Blog</h1>
        <h3>By Jonathan Soppa</h3>
        <a href="https://github.com/johannSo" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" className="links" />
        </a>
        <a href="https://gitlab.com/johannSo" target="_blank" rel="noopener noreferrer">
          <img src={gitlab} alt="GitLab" className="links" />
        </a>
      </div>
      <div className="mine">
        <img src={enigma} alt="Enigma" className="rounded-image" />
      </div>
    </div>
  );
}

export default App;