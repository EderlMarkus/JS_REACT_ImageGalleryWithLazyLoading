import React from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Gallery />
    </div>
  );
}

export default App;
