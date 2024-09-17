import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './assets/logo.png';
import './App.css';
import { Helmet } from 'react-helmet';
import github from './assets/github.svg';
import gitlab from './assets/gitlab.svg';
import enigma from './assets/enigma.png';
import soon from './assets/soon.jpg';
import EnigmaPage from './EnigmaPage';

function Home() {
  const containerRef = useRef(null); // Hier definieren wir containerRef

  return (
    <div ref={containerRef} className="app-container">
      <Helmet>
      <title>Portfolio</title>
    </Helmet>
      <header className="header">
        <img src={logo} alt="Logo des Blogs" className="logo" />
      </header>
      <div className="content">
        <img src={logo} alt="Logo des Blogs" className="logo2" />
        <h1 className="h1">Hi</h1>
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