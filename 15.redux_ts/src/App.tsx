import React from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';
import TicketList from './components/TicketList';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h3>TODOS (React &amp; Redux with Typescript)</h3>
        <TodoContainer />
        <TicketList></TicketList>
      </header>
    </div>
  );
}

export default App;
