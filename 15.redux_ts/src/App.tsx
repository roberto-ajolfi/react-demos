import React from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';
import TicketList from './components/TicketList';
// import { TestTinyRedux } from './tinyRedux/TestTinyRedux';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h3>TODOS (React &amp; Redux with Typescript)</h3>
        <TodoContainer/>
        <TicketList></TicketList>
        {/* <TestTinyRedux></TestTinyRedux> */}
      </header>
    </div>
  );
}

export default App;
