import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoContainer from './components/TodoContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h3>TODOS (React &amp; Redux with Typescript)</h3>
        <TodoContainer />
      </header>
    </div>
  );
}

export default App;
