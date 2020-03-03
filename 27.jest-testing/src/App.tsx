import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Mocks/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Header name="Pippo" />
      </header>
    </div>
  );
}

export default App;
