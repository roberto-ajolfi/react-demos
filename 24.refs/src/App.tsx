import React from 'react';
import logo from './logo.svg';
import './App.css';

import SimpleRef from './SimpleRef';
import DOMRef from './DOMRef';
import ClassRef from './ClassRef';
import CallbackRef from './CallbackRef';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SimpleRef />
        <DOMRef />
        <ClassRef />
        <CallbackRef />
      </header>
    </div>
  );
}

export default App;
