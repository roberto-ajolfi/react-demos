import React from 'react';
import './App.css';

import SimpleMemo from './components/SimpleMemo';
import {Movies} from './components/Movie';
import Factorial from  './components/Factorial';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <SimpleMemo /> */}
        {/* <Movies />         */}
        <Factorial />
      </header>
    </div>
  );
}

export default App;
