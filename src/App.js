import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './assets/logo.png';
import './App.css';
import github from './assets/github.svg';
import gitlab from './assets/gitlab.svg';
import enigma from './assets/enigma.png';
import soon from './assets/soon.jpg';
import EnigmaPage from './EnigmaPage';

function Home() {
  return (
    <div className="app-container">
      <header className="header">
        <img src={logo} alt="Logo des Blogs" className="logo" />
      </header>
      <div className="content">
        <img src={logo} alt="Logo des Blogs" className="logo2" />
        <h1>My MIT Blog</h1>
        <h3>By JoSo</h3>
        <a href="https://github.com/johannSo" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" className="links" />
        </a>
        <a href="https://gitlab.com/johannSo" target="_blank" rel="noopener noreferrer">
          <img src={gitlab} alt="GitLab" className="links" />
        </a>
      </div>
      <div className="mine">
        <Link to="/enigma">
          <img src={enigma} alt="Enigma" className="rounded-image" />
        </Link>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={soon} alt="soon" className="rounded-image" />
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enigma" element={<EnigmaPage />} />
      </Routes>
    </Router>
  );
}

export default App;