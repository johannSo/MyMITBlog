import React from 'react';
import logo from './assets/logo.jpeg';
import './App.css';

function App() {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="Logo des Blogs" className="logo" />
      </header>
      <div className="content">
        <h1>The Squirrel's Blog</h1>
        {/* Hier kommt der Rest Ihres Inhalts */}
      </div>
    </div>
  );
}

export default App;